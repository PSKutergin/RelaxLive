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

/***/ "./login.js":
/*!******************!*\
  !*** ./login.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_loginUser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/loginUser */ \"./modules/loginUser.js\");\n\n\n(0,_modules_loginUser__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n//# sourceURL=webpack:///./login.js?");

/***/ }),

/***/ "./modules/getData.js":
/*!****************************!*\
  !*** ./modules/getData.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst getData = (url) => {\n    return fetch(url)\n        .then((response) => response.json())\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getData);\n\n//# sourceURL=webpack:///./modules/getData.js?");

/***/ }),

/***/ "./modules/helpers.js":
/*!****************************!*\
  !*** ./modules/helpers.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   animate: () => (/* binding */ animate),\n/* harmony export */   handleInputChange: () => (/* binding */ handleInputChange),\n/* harmony export */   validationForm: () => (/* binding */ validationForm),\n/* harmony export */   visible: () => (/* binding */ visible)\n/* harmony export */ });\nconst animate = ({ timing, draw, duration }) => {\n\n    let start = performance.now();\n\n    requestAnimationFrame(function animate(time) {\n        // timeFraction изменяется от 0 до 1\n        let timeFraction = (time - start) / duration;\n        if (timeFraction > 1) timeFraction = 1;\n\n        // вычисление текущего состояния анимации\n        let progress = timing(timeFraction);\n\n        draw(progress); // отрисовать её\n\n        if (timeFraction < 1) {\n            requestAnimationFrame(animate);\n        }\n    });\n};\n\nconst visible = (target) => {\n    const allPosition = {\n        targetPosition: {\n            top: scrollY + target.getBoundingClientRect().top,\n            left: scrollX + target.getBoundingClientRect().left,\n            right: scrollX + target.getBoundingClientRect().right,\n            bottom: scrollY + target.getBoundingClientRect().bottom\n        },\n        windowPosition: {\n            top: scrollY,\n            left: scrollX,\n            right: scrollY + document.documentElement.clientWidth,\n            bottom: scrollX + document.documentElement.clientHeight\n        }\n    }\n\n    return allPosition\n};\n\nconst handleInputChange = (event) => {\n    const input = event.target;\n\n    input.value !== '' ? input.style.borderColor = 'greenyellow' : input.style.borderColor = ''\n};\n\nconst validationForm = (form) => {\n    const inputs = form.querySelectorAll('input')\n\n    let count = 0\n\n    inputs.forEach(input => {\n        if (input.value.trim() === '') {\n            input.style.borderColor = 'red'\n            count++\n        }\n    });\n\n    return count\n}\n\n\n\n//# sourceURL=webpack:///./modules/helpers.js?");

/***/ }),

/***/ "./modules/loginUser.js":
/*!******************************!*\
  !*** ./modules/loginUser.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getData */ \"./modules/getData.js\");\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers */ \"./modules/helpers.js\");\n\n\n\nconst loginUser = () => {\n    const form = document.querySelector('form');\n    const nameInput = form.querySelector('#name');\n    const passwordInput = form.querySelector('#type');\n    const nameTextWarning = form.querySelector('#text-warning-name');\n    const passwordTextWarning = form.querySelector('#text-warning-password');\n    const url = 'http://localhost:4545/users';\n\n    nameTextWarning.style.opacity = '0';\n    passwordTextWarning.style.opacity = '0';\n\n    form.querySelectorAll('input').forEach(input => {\n        input.addEventListener('input', (e) => {\n            (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.handleInputChange)(e);\n\n            nameTextWarning.style.opacity = '0';\n            passwordTextWarning.style.opacity = '0';\n        })\n    });\n\n    form.addEventListener('submit', (e) => {\n        e.preventDefault()\n\n        if (!(0,_helpers__WEBPACK_IMPORTED_MODULE_1__.validationForm)(form)) {\n            (0,_getData__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(url)\n                .then(users => {\n                    users.forEach(user => {\n                        if (user.login !== nameInput.value) {\n                            nameTextWarning.style.opacity = '1';\n                            passwordTextWarning.style.opacity = '1';\n                        } else if (user.password !== passwordInput.value) {\n                            passwordTextWarning.style.opacity = '1';\n                        } else {\n                            console.log('Данные верные');\n                            form.querySelectorAll('input').forEach(input => input.style.borderColor = '');\n\n                            document.cookie = \"user=\" + JSON.stringify(user)\n\n                            location.href = '/admin/table.html';\n                        };\n                    });\n\n                    form.reset();\n                })\n        }\n\n\n\n    })\n\n\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loginUser);\n\n//# sourceURL=webpack:///./modules/loginUser.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./login.js");
/******/ 	
/******/ })()
;