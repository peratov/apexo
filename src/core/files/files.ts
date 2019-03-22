import pouchDB = require("pouchdb-browser");
const PouchDB: PouchDB.Static = (pouchDB as any).default;
import { generateID } from "../../assets/utils/generate-id";
import setting from "../../modules/settings/data/data.settings";

export const files = {
	async save(fileB64: string, ext: string, dir: string): Promise<string> {
		return new Promise(async (resolve, reject) => {
			const accessToken = setting.getSetting("dropbox_accessToken");
			if (!accessToken) {
				reject("Did not find DropBox access token");
			}

			const fileBlob = new Blob(["apexo-backup:" + fileB64], {
				type: "text/plain;charset=utf-8"
			});

			const xhr = new XMLHttpRequest();
			const path = `/${dir}/${new Date().getTime()}-${generateID(
				4
			)}.${ext}`;

			xhr.onload = function() {
				if (xhr.status === 200) {
					return resolve(path);
				} else {
					return reject(xhr.response || "Unable to upload file");
				}
			};

			xhr.open("POST", "https://content.dropboxapi.com/2/files/upload");
			xhr.setRequestHeader("Authorization", "Bearer " + accessToken);
			xhr.setRequestHeader("Content-Type", "application/octet-stream");
			xhr.setRequestHeader(
				"Dropbox-API-Arg",
				JSON.stringify({
					path,
					mode: "add",
					autorename: true,
					mute: false
				})
			);

			xhr.send(fileBlob);
		});
	},

	async get(path: string): Promise<string> {
		return new Promise((resolve, reject) => {
			const accessToken = setting.getSetting("dropbox_accessToken");
			if (!accessToken) {
				reject("Did not find DropBox access token");
			}
			const xhr = new XMLHttpRequest();
			xhr.responseType = "arraybuffer";
			xhr.onload = async function() {
				if (xhr.status === 200) {
					resolve(xhr.response);
				} else {
					const errorMessage =
						xhr.response || "Unable to download file";
					reject(errorMessage);
				}
			};

			xhr.open("POST", "https://content.dropboxapi.com/2/files/download");
			xhr.setRequestHeader("Authorization", "Bearer " + accessToken);
			xhr.setRequestHeader(
				"Dropbox-API-Arg",
				JSON.stringify({
					path
				})
			);
			xhr.send();
		});
	},

	async remove(path: string) {
		return new Promise((resolve, reject) => {
			const accessToken = setting.getSetting("dropbox_accessToken");
			if (!accessToken) {
				reject("Did not find DropBox access token");
			}
			const xhr = new XMLHttpRequest();

			xhr.onload = function() {
				if (xhr.status === 200) {
					return resolve();
				} else {
					return reject(xhr.response || "Unable to delete file");
				}
			};

			xhr.open("POST", "https://api.dropboxapi.com/2/files/delete_v2");
			xhr.setRequestHeader("Authorization", "Bearer " + accessToken);
			xhr.setRequestHeader("Content-Type", "application/json");

			xhr.send(JSON.stringify({ path }));
		});
	}
};
