import {
	blackListedIDs,
	configs,
	doTheSingleUpdates,
	generateMethods,
	IClassCreator,
	IMobXStore,
	log,
	observeItem,
	singleItemUpdateQue
	} from "@core";
import { status } from "@core";
import { store } from "@utils";
import { observe } from "mobx";
import { Md5 } from "ts-md5";

export const resync: {
	modules: Array<{ resync: () => Promise<void>; namespace: string }>;
	resync: () => Promise<boolean>;
} = {
	modules: [],
	resync: async function() {
		return new Promise<boolean>(resolve => {
			let done = 0;
			resync.modules.forEach(module => {
				module
					.resync()
					.then(() => done++)
					.catch(() => done++);
			});
			const checkInterval = setInterval(() => {
				if (done === resync.modules.length) {
					resolve(true);
					clearInterval(checkInterval);
				}
			}, 300);
		});
	}
};

export const reset: {
	modules: Array<{ reset: () => Promise<void>; namespace: string }>;
	reset: () => Promise<boolean>;
} = {
	modules: [],
	reset: async function() {
		return new Promise<boolean>(resolve => {
			let done = 0;
			reset.modules.forEach(module => {
				module
					.reset()
					.then(() => done++)
					.catch(() => done++);
			});
			const checkInterval = setInterval(() => {
				if (done === reset.modules.length) {
					console.log("resetting done");
					clearInterval(checkInterval);
					resolve(true);
				}
			}, 300);
		});
	}
};

export const hardReset: {
	modules: Array<{ hardReset: () => Promise<void>; namespace: string }>;
	hardReset: () => Promise<boolean>;
} = {
	modules: [],
	hardReset: async function() {
		return new Promise<boolean>(resolve => {
			let done = 0;
			hardReset.modules.forEach(module => {
				module
					.hardReset()
					.then(() => done++)
					.catch(() => done++);
			});
			const checkInterval = setInterval(() => {
				if (done === hardReset.modules.length) {
					console.log("hard resetting done");
					clearInterval(checkInterval);
					resolve(true);
				}
			}, 10);
		});
	}
};

export const compact: {
	compactMethods: Array<() => Promise<void>>;
	compact: () => Promise<boolean>;
} = {
	compactMethods: [],
	compact: async function() {
		return new Promise<boolean>(resolve => {
			let done = 0;
			compact.compactMethods.forEach(compactMethod => {
				compactMethod()
					.then(() => done++)
					.catch(() => done++);
			});
			const checkInterval = setInterval(() => {
				if (done === compact.compactMethods.length) {
					clearInterval(checkInterval);
					resolve(true);
				}
			}, 300);
		});
	}
};

export const destroyLocal: {
	destroyMethods: Array<() => Promise<void>>;
	destroy: () => Promise<boolean>;
} = {
	destroyMethods: [],
	destroy: async function() {
		return new Promise<boolean>(resolve => {
			let done = 0;
			destroyLocal.destroyMethods.forEach(destroyMethod => {
				destroyMethod()
					.then(() => done++)
					.catch(() => done++);
			});
			const checkInterval = setInterval(() => {
				if (done === destroyLocal.destroyMethods.length) {
					clearInterval(checkInterval);
					resolve(true);
				}
			}, 300);
		});
	}
};

export async function connectToDB(
	dbName: string,
	moduleNamespace: string,
	shouldLog: boolean = false
) {
	const PouchDB: PouchDB.Static = ((await import("pouchdb-browser")) as any)
		.default;
	const cryptoPouch: PouchDB.Plugin = ((await import("crypto-pouch")) as any)
		.default;
	PouchDB.plugin(cryptoPouch);

	const transform: PouchDB.Plugin = ((await import("transform-pouch")) as any)
		.default;
	PouchDB.plugin(transform);

	const lzString = await import("lz-string");

	const unique = Md5.hashStr(store.get("LSL_hash")).toString();

	// prefixing local DB name
	const localName = dbName + "_" + Md5.hashStr(status.server);

	/**
	 * Connection object
	 */
	const localDatabase = new PouchDB(localName, { auto_compaction: true });

	localDatabase.transform<
		PouchDB.Meta,
		PouchDB.Meta & {
			_lz: string | undefined;
		}
	>({
		incoming(document) {
			const compressed = {
				_id: document._id,
				_rev: document._rev,
				_revisions: document._revisions,
				_lz: ""
			};
			delete document._id;
			delete document._rev;
			delete document._revisions;
			compressed._lz = lzString.compressToUTF16(JSON.stringify(document));
			return compressed;
		},
		outgoing(result) {
			if (!result._lz) {
				return result;
			}
			const document = JSON.parse(
				lzString.decompressFromUTF16(result._lz)
			);
			document._id = result._id;
			document._rev = result._rev;
			document._revisions = result._revisions;
			return document;
		}
	});

	localDatabase.crypto(unique);

	let noServerMode = false;
	if (status.server.indexOf("no-server-mode") !== -1) {
		noServerMode = true;
	}

	const remoteDatabase = noServerMode
		? null
		: new PouchDB(`${status.server}/${dbName}`, {
				fetch: (url, opts) =>
					PouchDB.fetch(url, {
						...opts,
						credentials: "include"
					})
		  });

	configs[dbName] = {
		shouldLog: shouldLog
	};

	return async function(Class: IClassCreator, data: IMobXStore) {
		// start with the basics
		const methods = generateMethods(localDatabase, data);

		// bulk functions
		resync.modules.push({
			namespace: moduleNamespace,
			resync: async () => {
				await doTheSingleUpdates();
				if (remoteDatabase) {
					await localDatabase.sync(remoteDatabase);
				}
			}
		});

		reset.modules.push({
			namespace: moduleNamespace,
			reset: async () => {
				data.list = [];
			}
		});

		hardReset.modules.push({
			namespace: moduleNamespace,
			hardReset: async () => {
				data.list = [];
				await localDatabase.destroy();
			}
		});

		compact.compactMethods.push(async () => {
			console.log(
				"local compaction on",
				dbName,
				await localDatabase.compact()
			);
			if (remoteDatabase) {
				console.log(
					"remote compaction on",
					dbName,
					await remoteDatabase.compact()
				);
			}
		});

		destroyLocal.destroyMethods.push(async () => {
			console.log("destroying", dbName);
			await localDatabase.destroy();
			console.log("destroyed", dbName);
			return;
		});

		/**
		 * First of all we have three places to store data
		 * 1. remote DB
		 * 2. local DB
		 * 3. MobX Store
		 * We need to pass the data like this:
		 * [Remote DB] ====> [Local DB] =====> [MobX Store]
		 * **/

		if (remoteDatabase) {
			try {
				await localDatabase.sync(remoteDatabase);
			} catch (e) {
				try {
					await localDatabase.sync(remoteDatabase);
				} catch (e) {
					console.log("Sync", dbName, "Failed", e);
				}
			}
		}

		const response =
			(await localDatabase.allDocs({ include_docs: true })).rows.map(
				x => x.doc
			) || [];
		data.ignoreObserver = true;
		const newData = response.map(x => new Class(x));
		data.list = newData;

		/**
		 * Watching the data on the other hand should be in reverse
		 * [MobX Store] ====> [Local DB] ====> [Remote DB]
		 * However we need to watch the list as a whole
		 * and to watch document by document
		 * **/

		// Watch the list as a whole
		observe(data.list, change => {
			// only if we're not ignoring it (i.e. we're not syncing from database, thus preventing cycles)
			if (data.ignoreObserver) {
				return;
			}
			// and if it's not empty (for testing purposes)
			if (data.list.length === 0) {
				return;
			}
			methods.syncListToDatabase(data.list);
		});

		// Watch document by document
		data.list.forEach((item, index) => observeItem(item, data, methods));
		data.ignoreObserver = false;

		// watch the local database for changes
		localDatabase
			.changes({
				since: "now",
				live: true,
				include_docs: true,
				limit: 1
			})
			.on("change", async function(change) {
				// this function can be called either by a change in the remote DB
				// that has just synced to the local DB
				// and thus needs to be reflected on the MobX stores
				// Remote DB ====> Local DB ===(this function)===> Mobx

				// or by a change in the MobX store
				// that has been done also in the local database
				// and thus needs to be synced to the remote DB
				// Remote DB <====(this function)=== Local DB <==== MobX

				// first we'll try to detect if it's a remote change
				const newDoc: any = change.doc;
				const id = change.id;
				const mobxIndex = data.list.findIndex(x => x._id === id);
				const isBlackListed = blackListedIDs[newDoc._id] !== undefined;

				const mobxDocHash =
					mobxIndex !== -1
						? Md5.hashStr(
								JSON.stringify(data.list[mobxIndex].toJSON())
						  ).toString()
						: "";
				const newDoHash = change.deleted
					? ""
					: Md5.hashStr(
							JSON.stringify(new Class(change.doc).toJSON())
					  ).toString();

				// it's found in mobX but it's deleted
				const remoteDeletion =
					mobxIndex !== -1 && change.deleted === true;
				// it's found in mobX, and it's not deleted, and the new document isn't equal to the old document
				const remoteUpdate =
					mobxIndex !== -1 &&
					change.deleted !== true &&
					mobxDocHash !== newDoHash &&
					!singleItemUpdateQue[id];
				// it's not found in mobx and it's not deleted
				const remoteAddition =
					mobxIndex === -1 &&
					change.deleted !== true &&
					!isBlackListed;

				if (isBlackListed && blackListedIDs[newDoc._id] < 200) {
					blackListedIDs[newDoc._id]++;

					let localDoc = change.doc;
					try {
						localDoc = await localDatabase.get(newDoc._id);
					} catch (e) {}
					try {
						const doc = await localDatabase.get(
							(localDoc || { _id: "" })._id
						);
						const dRes = await localDatabase.remove(doc);
					} catch (e) {}
					try {
						const doc = await localDatabase.get(
							(change.doc || localDoc || { _id: "" })._id
						);
						const dRes = await localDatabase.remove(doc);
					} catch (e) {}
					if (remoteDatabase) {
						const remoteDoc = await remoteDatabase.get(newDoc._id);
						try {
							const doc = await remoteDatabase.get(remoteDoc._id);
							const dRes = await remoteDatabase.remove(doc);
						} catch (e) {}
						try {
							const syncRes = await remoteDatabase.sync(
								localDatabase
							);
						} catch (e) {}
					}
				} else if (remoteAddition || remoteDeletion || remoteUpdate) {
					data.ignoreObserver = true;
					// if it's a deletion
					if (remoteDeletion) {
						data.list.splice(mobxIndex, 1);
					} else if (remoteAddition) {
						// if it's an addition
						data.list.push(new Class(newDoc));
					} else if (remoteUpdate) {
						// if it's an update
						// if there's another update that will carry on the same document
						// don't update the MobX store just now
						if (singleItemUpdateQue[id]) {
						} else {
							data.list[mobxIndex].fromJSON(newDoc);
							observeItem(data.list[mobxIndex], data, methods);
						}
					}
					data.ignoreObserver = false;
				} else {
					if (remoteDatabase) {
						const res = await localDatabase.sync(remoteDatabase);
					}
				}
			})
			.on("error", err => log(dbName, "Error occurred", err));

		return methods;
	};
}

export * from "./list";
export * from "./config";
export * from "./generate-methods";
export * from "./interface.class-creator";
export * from "./interface.class-static";
export * from "./interface.document-json";
export * from "./interface.interaction-methods";
export * from "./interface.mobx-store";
export * from "./log";
export * from "./observe-item";
export * from "./single-item-update-que";
export * from "./black-list";
