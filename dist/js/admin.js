/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./admin.js":
/*!******************!*\
  !*** ./admin.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_renderTable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/renderTable */ \"./modules/renderTable.js\");\n/* harmony import */ var _modules_modalService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/modalService */ \"./modules/modalService.js\");\n\n\n\n(0,_modules_renderTable__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n(0,_modules_modalService__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\n//# sourceURL=webpack:///./admin.js?");

/***/ }),

/***/ "./modules/getData.js":
/*!****************************!*\
  !*** ./modules/getData.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst getData = (url) => {\n    return fetch(url)\n        .then((response) => response.json())\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getData);\n\n//# sourceURL=webpack:///./modules/getData.js?");

/***/ }),

/***/ "./modules/modalService.js":
/*!*********************************!*\
  !*** ./modules/modalService.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst modalService = () => {\n    const modal = document.getElementById('modal')\n    const addItemButton = document.querySelector('.btn-addItem')\n\n    addItemButton.addEventListener('click', () => modal.style.display = 'flex')\n\n    modal.addEventListener('click', (e) => {\n        e.preventDefault();\n\n        if (!e.target.closest('.modal') || e.target.closest('.button__close') || e.target.closest('.cancel-button')) {\n            modal.style.display = '';\n        }\n    })\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modalService);\n\n//# sourceURL=webpack:///./modules/modalService.js?");

/***/ }),

/***/ "./modules/renderData.js":
/*!*******************************!*\
  !*** ./modules/renderData.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst renderData = (items) => {\n    const tbody = document.getElementById('tbody')\n\n    tbody.innerHTML = ''\n\n    items.forEach(item => {\n        tbody.insertAdjacentHTML('beforeend',\n            `\n            <tr class=\"table__row\">\n                <td class=\"table__id table__cell\">${item.id}</td>\n                <td class=\"table-type table__cell\">${item.type}</td>\n                <td class=\"table-name table__cell\">${item.name}</td>\n                <td class=\"table-units table__cell\">${item.units}</td>\n                <td class=\"table-cost table__cell\">${item.cost} руб</td>\n                <td>\n                    <div class=\"table__actions table__cell\">\n                        <button class=\"button action-change\"><span class=\"svg_ui\"><svg\n                                    class=\"action-icon_change\">\n                                    <use xlink:href=\"./img/sprite.svg#change\"></use>\n                                </svg></span><span>Изменить</span>\n                        </button>\n                        <button class=\"button action-remove\"><span class=\"svg_ui\"><svg\n                                    class=\"action-icon_remove\">\n                                    <use xlink:href=\"./img/sprite.svg#remove\"></use>\n                                </svg></span><span>Удалить</span>\n                        </button>\n                    </div>\n                </td>\n            </tr>\n        `)\n    })\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderData);\n\n//# sourceURL=webpack:///./modules/renderData.js?");

/***/ }),

/***/ "./modules/renderTable.js":
/*!********************************!*\
  !*** ./modules/renderTable.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getData */ \"./modules/getData.js\");\n/* harmony import */ var _renderData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderData */ \"./modules/renderData.js\");\n\n\n\nconst renderTable = () => {\n    const selector = document.getElementById('typeItem');\n\n    const renderSelector = (types, data) => {\n        types.forEach(item => {\n            selector.insertAdjacentHTML('beforeend',\n                `\n                    <option value=\"${item}\">${item}</option>\n                `)\n        });\n\n        selector.addEventListener('change', (e) => {\n            if (e.target.value === 'Все услуги') {\n                (0,_renderData__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(data)\n            } else {\n                let list = data.filter((item) => item.type === e.target.value);\n\n                (0,_renderData__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(list)\n            };\n        });\n\n        (0,_renderData__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(data)\n    };\n\n    (0,_getData__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('http://localhost:4545/repairs')\n        .then(data => {\n            const typesRepair = new Set()\n\n            data.forEach((item) => {\n                if (item.type) {\n                    typesRepair.add(item.type);\n                }\n            });\n\n            renderSelector(typesRepair, data);\n        })\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderTable);\n\n//# sourceURL=webpack:///./modules/renderTable.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./admin.js");
/******/ 	
/******/ })()
;