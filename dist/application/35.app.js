(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[35],{

/***/ "./src/modules/statistics/components/chart.age.tsx":
/*!*********************************************************!*\
  !*** ./src/modules/statistics/components/chart.age.tsx ***!
  \*********************************************************/
/*! exports provided: AgeBarChart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AgeBarChart\", function() { return AgeBarChart; });\n/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ \"./node_modules/tslib/tslib.es6.js\");\n/* harmony import */ var _common_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @common-components */ \"./src/common-components/index.ts\");\n/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core */ \"./src/core/index.ts\");\n/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mobx */ \"./node_modules/mobx/lib/mobx.module.js\");\n/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! mobx-react */ \"./node_modules/mobx-react/dist/mobx-react.module.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\nlet AgeBarChart = class AgeBarChart extends react__WEBPACK_IMPORTED_MODULE_5__[\"Component\"] {\n    get values() {\n        return this.props.selectedPatients\n            .filter(x => x && x.birthYear)\n            .map(x => {\n            if (!x || x.birthYear === 0) {\n                return 0;\n            }\n            return Math.min(new Date().getFullYear() - x.birthYear, x.birthYear);\n        })\n            .reduce((result, occ) => {\n            const i = result.findIndex(rOCC => rOCC.x === occ);\n            if (i === -1) {\n                result.push({\n                    x: occ,\n                    y: 1\n                });\n            }\n            else {\n                result[i].y++;\n            }\n            return result;\n        }, [])\n            .sort((a, b) => a.x - b.x);\n    }\n    render() {\n        return (react__WEBPACK_IMPORTED_MODULE_5__[\"createElement\"](\"div\", null,\n            react__WEBPACK_IMPORTED_MODULE_5__[\"createElement\"](_common_components__WEBPACK_IMPORTED_MODULE_1__[\"BarChartComponent\"], Object.assign({}, {\n                height: 400,\n                data: {\n                    xLabels: this.values.map(x => x.x.toString()),\n                    bars: [\n                        {\n                            data: this.values.map(x => x.y),\n                            label: Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"Age\")\n                        }\n                    ]\n                }\n            }))));\n    }\n};\nObject(tslib__WEBPACK_IMPORTED_MODULE_0__[\"__decorate\"])([\n    mobx__WEBPACK_IMPORTED_MODULE_3__[\"computed\"]\n], AgeBarChart.prototype, \"values\", null);\nAgeBarChart = Object(tslib__WEBPACK_IMPORTED_MODULE_0__[\"__decorate\"])([\n    mobx_react__WEBPACK_IMPORTED_MODULE_4__[\"observer\"]\n], AgeBarChart);\n\n\n\n//# sourceURL=webpack:///./src/modules/statistics/components/chart.age.tsx?");

/***/ })

}]);