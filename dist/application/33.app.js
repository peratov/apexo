(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[33],{

/***/ "./src/modules/settings/components/page.settings.tsx":
/*!***********************************************************!*\
  !*** ./src/modules/settings/components/page.settings.tsx ***!
  \***********************************************************/
/*! exports provided: SettingsPage, SettingInputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SettingsPage\", function() { return SettingsPage; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SettingInputComponent\", function() { return SettingInputComponent; });\n/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ \"./node_modules/tslib/tslib.es6.js\");\n/* harmony import */ var _common_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @common-components */ \"./src/common-components/index.ts\");\n/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core */ \"./src/core/index.ts\");\n/* harmony import */ var _modules__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @modules */ \"./src/modules/index.ts\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @utils */ \"./src/utils/index.ts\");\n/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! mobx */ \"./node_modules/mobx/lib/mobx.module.js\");\n/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! mobx-react */ \"./node_modules/mobx-react/dist/mobx-react.module.js\");\n/* harmony import */ var office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! office-ui-fabric-react */ \"./node_modules/office-ui-fabric-react/lib/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);\n\n\n\n\n\n\n\n\n\n\nlet SettingsPage = class SettingsPage extends react__WEBPACK_IMPORTED_MODULE_8__[\"Component\"] {\n    constructor() {\n        super(...arguments);\n        this.unlockCombinations = [\n            [5, 4, 9],\n            [3, 2, 5],\n            [6, 1, 7],\n            [2, 6, 8],\n            [5, 1, 6],\n            [4, 1, 5]\n        ];\n        this.chosenCombination = this.unlockCombinations[Math.floor(Math.random() * 6)];\n        this.compactionInProgress = false;\n        this.downloadInProgress = false;\n        this.inputEl = null;\n        this.remoteBackupInProgress = false;\n        this.locked = true;\n    }\n    get canEdit() {\n        return _core__WEBPACK_IMPORTED_MODULE_2__[\"user\"].currentUser.canEditSettings;\n    }\n    componentDidMount() {\n        setTimeout(() => _modules__WEBPACK_IMPORTED_MODULE_3__[\"setting\"].updateDropboxBackups(), _utils__WEBPACK_IMPORTED_MODULE_4__[\"second\"]);\n    }\n    render() {\n        return (react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](\"div\", { className: \"settings-component container-fluid\" }, this.locked ? (react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](\"div\", null,\n            react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](\"h2\", null, Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"Settings are locked\")),\n            react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](\"h3\", null, Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"To prevent unintentional changes, solve the mathematical equation to unlock\")),\n            react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](\"hr\", null),\n            react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](\"div\", { className: \"math-question\" },\n                this.chosenCombination[0],\n                \" +\",\n                \" \",\n                this.chosenCombination[1],\n                \" =\",\n                \" \",\n                react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_7__[\"TextField\"], { type: \"number\", onChange: (e, v) => Number(v) === this.chosenCombination[2]\n                        ? (this.locked = false)\n                        : \"\" })))) : (react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](\"div\", { className: \"unlocked\" },\n            \" \",\n            react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](_common_components__WEBPACK_IMPORTED_MODULE_1__[\"SectionComponent\"], { title: Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(`General Setting`) },\n                react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](SettingInputComponent, { element: react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_7__[\"Dropdown\"], { label: Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"Language\"), options: [\n                            { key: \"en\", text: \"English\" },\n                            { key: \"ar\", text: \"العربية\" }\n                        ], defaultSelectedKey: _modules__WEBPACK_IMPORTED_MODULE_3__[\"setting\"].getSetting(\"lang\"), onChange: (ev, v) => {\n                            _modules__WEBPACK_IMPORTED_MODULE_3__[\"setting\"].setSetting(\"lang\", v.key.toString());\n                        }, disabled: !this.canEdit }), info: Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(`Choose the main language of display menus and items`) }),\n                react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](SettingInputComponent, { element: react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_7__[\"Dropdown\"], { label: Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"Date format\"), options: [\n                            {\n                                key: \"dd/mm/yyyy\",\n                                text: \"dd/mm/yyyy\"\n                            },\n                            {\n                                key: \"mm/dd/yyyy\",\n                                text: \"mm/dd/yyyy\"\n                            },\n                            {\n                                key: \"dd MM 'YY\",\n                                text: \"dd MM 'YY\"\n                            }\n                        ], defaultSelectedKey: _modules__WEBPACK_IMPORTED_MODULE_3__[\"setting\"].getSetting(\"date_format\"), onChange: (ev, v) => {\n                            _modules__WEBPACK_IMPORTED_MODULE_3__[\"setting\"].setSetting(\"date_format\", v.key.toString());\n                        }, disabled: !this.canEdit }), info: Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(`Set the date format to be used across this application`) }),\n                react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](SettingInputComponent, { element: react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_7__[\"Dropdown\"], { label: Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"Week ends on\"), options: _utils__WEBPACK_IMPORTED_MODULE_4__[\"dateNames\"]\n                            .days()\n                            .map((dayName, index) => ({\n                            key: index.toString(),\n                            text: Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(dayName)\n                        })), defaultSelectedKey: _modules__WEBPACK_IMPORTED_MODULE_3__[\"setting\"].getSetting(\"weekend_num\"), onChange: (ev, v) => {\n                            _modules__WEBPACK_IMPORTED_MODULE_3__[\"setting\"].setSetting(\"weekend_num\", v.key.toString());\n                        }, disabled: !this.canEdit }), info: Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(`On which day the week ends`) }),\n                react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](SettingInputComponent, { element: react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_7__[\"TextField\"], { value: _modules__WEBPACK_IMPORTED_MODULE_3__[\"setting\"].getSetting(\"dropbox_accessToken\"), label: Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"Dropbox access token\"), onChange: (ev, val) => {\n                            _modules__WEBPACK_IMPORTED_MODULE_3__[\"setting\"].setSetting(\"dropbox_accessToken\", val);\n                            setTimeout(() => _core__WEBPACK_IMPORTED_MODULE_2__[\"status\"].validateOnlineStatus(), _utils__WEBPACK_IMPORTED_MODULE_4__[\"second\"] / 2);\n                        }, disabled: !this.canEdit }), info: Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(`This access token is used to store files across the application, like backups and images`) })),\n            react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](_common_components__WEBPACK_IMPORTED_MODULE_1__[\"SectionComponent\"], { title: Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(`Financial Settings`) },\n                _modules__WEBPACK_IMPORTED_MODULE_3__[\"setting\"].getSetting(\"time_tracking\") ? (react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](SettingInputComponent, { element: react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_7__[\"TextField\"], { label: Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"Time expenses (per hour)\"), type: \"number\", value: _modules__WEBPACK_IMPORTED_MODULE_3__[\"setting\"].getSetting(\"hourlyRate\"), onChange: (ev, newVal) => {\n                            _modules__WEBPACK_IMPORTED_MODULE_3__[\"setting\"].setSetting(\"hourlyRate\", newVal.toString());\n                        }, disabled: !this.canEdit }), info: Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\n                    // tslint:disable-next-line:max-line-length\n                    `When time tracking enabled, this is used to calculate profits and expenses, as time is also added to the expenses So here you can put the electricity, rent, and other time dependent expenses`) })) : (\"\"),\n                react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](SettingInputComponent, { element: react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_7__[\"TextField\"], { label: Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"Currency symbol\"), value: _modules__WEBPACK_IMPORTED_MODULE_3__[\"setting\"].getSetting(\"currencySymbol\"), onChange: (ev, newVal) => {\n                            _modules__WEBPACK_IMPORTED_MODULE_3__[\"setting\"].setSetting(\"currencySymbol\", newVal.toString());\n                        }, disabled: !this.canEdit }), info: Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(`This symbol you enter here will be used across your application`) })),\n            react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](_common_components__WEBPACK_IMPORTED_MODULE_1__[\"SectionComponent\"], { title: Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(`Optional Modules and Features`) },\n                react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_7__[\"Toggle\"], { \"data-testid\": \"prescriptions-toggle\", onText: Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"Prescriptions module enabled\"), offText: Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"Prescriptions module disabled\"), checked: !!_modules__WEBPACK_IMPORTED_MODULE_3__[\"setting\"].getSetting(\"module_prescriptions\"), onChange: (ev, val) => {\n                        _modules__WEBPACK_IMPORTED_MODULE_3__[\"setting\"].setSetting(\"module_prescriptions\", val ? \"enable\" : \"\");\n                    }, disabled: !this.canEdit }),\n                react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_7__[\"Toggle\"], { \"data-testid\": \"ortho-toggle\", onText: Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"Orthodontic module enabled\"), offText: Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"Orthodontic module disabled\"), checked: !!_modules__WEBPACK_IMPORTED_MODULE_3__[\"setting\"].getSetting(\"module_orthodontics\"), onChange: (ev, val) => {\n                        _modules__WEBPACK_IMPORTED_MODULE_3__[\"setting\"].setSetting(\"module_orthodontics\", val ? \"enable\" : \"\");\n                    }, disabled: !this.canEdit }),\n                react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_7__[\"Toggle\"], { \"data-testid\": \"labwork-toggle\", onText: Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"Labwork module enabled\"), offText: Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"Labwork module disabled\"), checked: !!_modules__WEBPACK_IMPORTED_MODULE_3__[\"setting\"].getSetting(\"module_labwork\"), onChange: (ev, val) => {\n                        _modules__WEBPACK_IMPORTED_MODULE_3__[\"setting\"].setSetting(\"module_labwork\", val ? \"enable\" : \"\");\n                    }, disabled: !this.canEdit }),\n                react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_7__[\"Toggle\"], { \"data-testid\": \"stats-toggle\", onText: Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"Statistics module enabled\"), offText: Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"Statistics module disabled\"), checked: !!_modules__WEBPACK_IMPORTED_MODULE_3__[\"setting\"].getSetting(\"module_statistics\"), onChange: (ev, val) => {\n                        _modules__WEBPACK_IMPORTED_MODULE_3__[\"setting\"].setSetting(\"module_statistics\", val ? \"enable\" : \"\");\n                    }, disabled: !this.canEdit }),\n                react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_7__[\"Toggle\"], { \"data-testid\": \"time-tracking-toggle\", onText: Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"Time tracking enabled\"), offText: Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"Time tracking disabled\"), checked: !!_modules__WEBPACK_IMPORTED_MODULE_3__[\"setting\"].getSetting(\"time_tracking\"), onChange: (ev, val) => {\n                        _modules__WEBPACK_IMPORTED_MODULE_3__[\"setting\"].setSetting(\"time_tracking\", val ? \"enable\" : \"\");\n                    }, disabled: !this.canEdit })),\n            react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](_common_components__WEBPACK_IMPORTED_MODULE_1__[\"SectionComponent\"], { title: Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(`Backup and Restore`) }, _core__WEBPACK_IMPORTED_MODULE_2__[\"status\"].isOnline.server ? (react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](\"div\", null,\n                react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_7__[\"DefaultButton\"], { onClick: () => Object(tslib__WEBPACK_IMPORTED_MODULE_0__[\"__awaiter\"])(this, void 0, void 0, function* () {\n                        this.compactionInProgress = true;\n                        yield _core__WEBPACK_IMPORTED_MODULE_2__[\"dbAction\"](\"compact\");\n                        this.compactionInProgress = false;\n                    }), iconProps: { iconName: \"ZipFolder\" }, className: \"m-l-5 m-t-5\", text: Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"Run compaction\"), disabled: this.compactionInProgress }),\n                react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_7__[\"DefaultButton\"], { onClick: () => Object(tslib__WEBPACK_IMPORTED_MODULE_0__[\"__awaiter\"])(this, void 0, void 0, function* () {\n                        this.downloadInProgress = true;\n                        yield _core__WEBPACK_IMPORTED_MODULE_2__[\"downloadCurrentStateAsBackup\"]();\n                        this.downloadInProgress = false;\n                    }), className: \"m-l-5 m-t-5\", iconProps: { iconName: \"Database\" }, text: Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"Download a backup\"), disabled: this.downloadInProgress }),\n                react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_7__[\"DefaultButton\"], { onClick: () => this.inputEl\n                        ? this.inputEl.click()\n                        : \"\", className: \"m-l-5 m-t-5\", iconProps: { iconName: \"DatabaseSync\" }, text: Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"Restore from file\") }),\n                react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](\"input\", { ref: el => (this.inputEl = el), hidden: true, type: \"file\", multiple: false, onChange: (e) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__[\"__awaiter\"])(this, void 0, void 0, function* () {\n                        if (e.target.files &&\n                            e.target.files.length > 0) {\n                            _core__WEBPACK_IMPORTED_MODULE_2__[\"restore\"].fromFile(e.target.files[0]);\n                        }\n                    }) }))) : (react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_7__[\"MessageBar\"], { messageBarType: office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_7__[\"MessageBarType\"].warning }, Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"Backup and restore functionality are not available while you're offline\")))),\n            react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](_common_components__WEBPACK_IMPORTED_MODULE_1__[\"SectionComponent\"], { title: Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(`Automated Backup and Restore`) }, _core__WEBPACK_IMPORTED_MODULE_2__[\"status\"].isOnline.client ? (_core__WEBPACK_IMPORTED_MODULE_2__[\"status\"].isOnline.dropbox ? (react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](\"div\", null,\n                react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_7__[\"Dropdown\"], { label: Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"Backup frequency\"), options: [\n                        {\n                            key: \"d\",\n                            text: Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"Daily\")\n                        },\n                        {\n                            key: \"w\",\n                            text: Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"Weekly\")\n                        },\n                        {\n                            key: \"m\",\n                            text: Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"Monthly\")\n                        },\n                        {\n                            key: \"n\",\n                            text: Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"Never\")\n                        }\n                    ], selectedKey: _modules__WEBPACK_IMPORTED_MODULE_3__[\"setting\"].getSetting(\"backup_freq\"), onChange: (ev, v) => {\n                        _modules__WEBPACK_IMPORTED_MODULE_3__[\"setting\"].setSetting(\"backup_freq\", v.key.toString());\n                    }, disabled: !this.canEdit }),\n                react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_7__[\"TextField\"], { value: _modules__WEBPACK_IMPORTED_MODULE_3__[\"setting\"].getSetting(\"backup_retain\"), label: Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"How many backups to retain\"), onChange: (ev, val) => {\n                        _modules__WEBPACK_IMPORTED_MODULE_3__[\"setting\"].setSetting(\"backup_retain\", val);\n                    }, disabled: !this.canEdit, type: \"number\" }),\n                _modules__WEBPACK_IMPORTED_MODULE_3__[\"setting\"].dropboxBackups\n                    .length ? (react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](\"table\", { className: \"ms-table\" },\n                    react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](\"thead\", null,\n                        react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](\"tr\", null,\n                            react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](\"th\", null, Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"Backup\")),\n                            react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](\"th\", null, Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"Actions\")))),\n                    react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](\"tbody\", null, _modules__WEBPACK_IMPORTED_MODULE_3__[\"setting\"].dropboxBackups.map(file => {\n                        const date = new Date(file.client_modified);\n                        return (react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](\"tr\", { key: file.id },\n                            react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](\"td\", null,\n                                react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](_common_components__WEBPACK_IMPORTED_MODULE_1__[\"ProfileSquaredComponent\"], { onRenderInitials: () => (react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](\"div\", { style: {\n                                            textAlign: \"center\",\n                                            fontSize: 10\n                                        } }, `${date.getDate()}/${date.getMonth() +\n                                        1}`)), text: Object(_utils__WEBPACK_IMPORTED_MODULE_4__[\"formatDate\"])(date, _modules__WEBPACK_IMPORTED_MODULE_3__[\"setting\"].getSetting(\"date_format\")), subText: `${Math.round(file.size /\n                                        1000)} KB` })),\n                            react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](\"td\", null,\n                                react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_7__[\"TooltipHost\"], { content: Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"Delete\") },\n                                    react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_7__[\"IconButton\"], { style: {\n                                            marginRight: 6\n                                        }, iconProps: {\n                                            iconName: \"delete\"\n                                        }, disabled: !this\n                                            .canEdit ||\n                                            this\n                                                .remoteBackupInProgress, onClick: () => {\n                                            this.remoteBackupInProgress = true;\n                                            _core__WEBPACK_IMPORTED_MODULE_2__[\"backup\"]\n                                                .deleteFromDropbox(file.path_lower)\n                                                .then(() => {\n                                                this.remoteBackupInProgress = false;\n                                                _modules__WEBPACK_IMPORTED_MODULE_3__[\"setting\"].updateDropboxBackups();\n                                            })\n                                                .catch(() => {\n                                                this.remoteBackupInProgress = false;\n                                                _modules__WEBPACK_IMPORTED_MODULE_3__[\"setting\"].updateDropboxBackups();\n                                            });\n                                        } })),\n                                react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_7__[\"TooltipHost\"], { content: Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"Restore\") },\n                                    react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_7__[\"IconButton\"], { style: {\n                                            marginRight: 6\n                                        }, iconProps: {\n                                            iconName: \"DatabaseSync\"\n                                        }, disabled: !this\n                                            .canEdit ||\n                                            this\n                                                .remoteBackupInProgress, onClick: () => {\n                                            this.remoteBackupInProgress = true;\n                                            _core__WEBPACK_IMPORTED_MODULE_2__[\"restore\"]\n                                                .fromDropbox(file.path_lower)\n                                                .then(() => (this.remoteBackupInProgress = false))\n                                                .catch(() => (this.remoteBackupInProgress = false));\n                                        } })))));\n                    })))) : (\"\"))) : (react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_7__[\"MessageBar\"], { messageBarType: office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_7__[\"MessageBarType\"].warning }, \"A valid DropBox access token is required for this section\"))) : (react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_7__[\"MessageBar\"], { messageBarType: office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_7__[\"MessageBarType\"].warning }, Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"Backup and restore functionality are not available while you're offline\"))))))));\n    }\n};\nObject(tslib__WEBPACK_IMPORTED_MODULE_0__[\"__decorate\"])([\n    mobx__WEBPACK_IMPORTED_MODULE_5__[\"observable\"]\n], SettingsPage.prototype, \"compactionInProgress\", void 0);\nObject(tslib__WEBPACK_IMPORTED_MODULE_0__[\"__decorate\"])([\n    mobx__WEBPACK_IMPORTED_MODULE_5__[\"observable\"]\n], SettingsPage.prototype, \"downloadInProgress\", void 0);\nObject(tslib__WEBPACK_IMPORTED_MODULE_0__[\"__decorate\"])([\n    mobx__WEBPACK_IMPORTED_MODULE_5__[\"observable\"]\n], SettingsPage.prototype, \"inputEl\", void 0);\nObject(tslib__WEBPACK_IMPORTED_MODULE_0__[\"__decorate\"])([\n    mobx__WEBPACK_IMPORTED_MODULE_5__[\"computed\"]\n], SettingsPage.prototype, \"canEdit\", null);\nObject(tslib__WEBPACK_IMPORTED_MODULE_0__[\"__decorate\"])([\n    mobx__WEBPACK_IMPORTED_MODULE_5__[\"observable\"]\n], SettingsPage.prototype, \"remoteBackupInProgress\", void 0);\nObject(tslib__WEBPACK_IMPORTED_MODULE_0__[\"__decorate\"])([\n    mobx__WEBPACK_IMPORTED_MODULE_5__[\"observable\"]\n], SettingsPage.prototype, \"locked\", void 0);\nSettingsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__[\"__decorate\"])([\n    mobx_react__WEBPACK_IMPORTED_MODULE_6__[\"observer\"]\n], SettingsPage);\n\nlet SettingInputComponent = class SettingInputComponent extends react__WEBPACK_IMPORTED_MODULE_8__[\"Component\"] {\n    render() {\n        return (react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](_common_components__WEBPACK_IMPORTED_MODULE_1__[\"Row\"], { gutter: 8, style: { marginBottom: 20 } },\n            react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](_common_components__WEBPACK_IMPORTED_MODULE_1__[\"Col\"], { style: { marginBottom: -15 }, md: 12 }, this.props.element),\n            react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](_common_components__WEBPACK_IMPORTED_MODULE_1__[\"Col\"], { md: 12 },\n                react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_7__[\"MessageBar\"], { style: { marginTop: 22 }, messageBarType: office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_7__[\"MessageBarType\"].info }, this.props.info))));\n    }\n};\nSettingInputComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__[\"__decorate\"])([\n    mobx_react__WEBPACK_IMPORTED_MODULE_6__[\"observer\"]\n], SettingInputComponent);\n\n\n\n//# sourceURL=webpack:///./src/modules/settings/components/page.settings.tsx?");

/***/ })

}]);