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

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_contacts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/contacts */ \"./modules/contacts.js\");\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu */ \"./modules/menu.js\");\n/* harmony import */ var _modules_scroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/scroll */ \"./modules/scroll.js\");\n/* harmony import */ var _modules_modalRepair__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/modalRepair */ \"./modules/modalRepair.js\");\n/* harmony import */ var _modules_maskPhone__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/maskPhone */ \"./modules/maskPhone.js\");\n/* harmony import */ var _modules_modalPrivacy__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/modalPrivacy */ \"./modules/modalPrivacy.js\");\n\n\n\n\n\n\n\n(0,_modules_contacts__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n(0,_modules_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n(0,_modules_scroll__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n(0,_modules_modalRepair__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n(0,_modules_maskPhone__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n(0,_modules_modalPrivacy__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/contacts.js":
/*!*****************************!*\
  !*** ./modules/contacts.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst contacts = () => {\n    const headerContacts = document.querySelector('.header-contacts');\n    const dopPhoneBlock = headerContacts.querySelector('.header-contacts__phone-number-accord');\n    const dopPhoneNumber = dopPhoneBlock.querySelector('a');\n    const dopPhoneBtn = headerContacts.querySelector('.header-contacts__arrow img');\n\n    headerContacts.addEventListener('click', (e) => {\n        if (e.target.closest('.header-contacts__arrow')) {\n            if (!dopPhoneBlock.style.top) {\n                dopPhoneBtn.style.transform = 'rotate(180deg)';\n                dopPhoneBlock.style.top = '25px';\n                dopPhoneNumber.style.opacity = '1';\n            } else {\n                dopPhoneBtn.style.transform = '';\n                dopPhoneBlock.style.top = '';\n                dopPhoneNumber.style.opacity = '';\n            };\n        }\n    })\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contacts);\n\n//# sourceURL=webpack:///./modules/contacts.js?");

/***/ }),

/***/ "./modules/maskPhone.js":
/*!******************************!*\
  !*** ./modules/maskPhone.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst maskPhone = () => {\n    const phoneInputs = document.querySelectorAll('[name=\"phone\"]')\n\n    const eventCallback = (e) => {\n        let el = e.target,\n            clearVal = el.dataset.phoneClear,\n            pattern = el.dataset.phonePattern,\n            matrix_def = \"+7(___) ___-__-__\",\n            matrix = pattern ? pattern : matrix_def,\n            i = 0,\n            def = matrix.replace(/\\D/g, \"\"),\n            val = e.target.value.replace(/\\D/g, \"\");\n\n        if (clearVal !== 'false' && e.type === 'blur') {\n            if (val.length < matrix.match(/([\\_\\d])/g).length) {\n                e.target.value = '';\n                return;\n            }\n        };\n\n        if (def.length >= val.length) val = def;\n\n        e.target.value = matrix.replace(/./g, function (a) {\n            return /[_\\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? \"\" : a\n        });\n    };\n\n    for (let elem of phoneInputs) {\n        for (let ev of ['input', 'blur', 'focus']) {\n            elem.addEventListener(ev, eventCallback);\n        }\n    };\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (maskPhone);\n\n//# sourceURL=webpack:///./modules/maskPhone.js?");

/***/ }),

/***/ "./modules/menu.js":
/*!*************************!*\
  !*** ./modules/menu.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst menu = () => {\n    const menuBtn = document.querySelector('.menu__icon')\n    const menu = document.querySelector('.popup-dialog-menu')\n\n    menuBtn.addEventListener('click', () => {\n        if (innerWidth >= 576) {\n            menu.style.right = '639px';\n        } else {\n            menu.style.transform = 'translate3d(0, 0, 0)';\n        };\n    })\n\n    menu.addEventListener('click', (e) => {\n        if (e.target.closest('.menu-link') || e.target.closest('.close-menu')) {\n            if (innerWidth >= 576) {\n                menu.style.right = '';\n            } else {\n                menu.style.transform = '';\n            };\n        }\n    })\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);\n\n//# sourceURL=webpack:///./modules/menu.js?");

/***/ }),

/***/ "./modules/modalPrivacy.js":
/*!*********************************!*\
  !*** ./modules/modalPrivacy.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst modalPrivacy = () => {\n    const modal = document.querySelector('.popup-privacy')\n    const linkPrivacy = document.querySelectorAll('.link-privacy')\n\n    linkPrivacy.forEach(link => {\n        link.addEventListener('click', () => {\n            modal.style.visibility = 'visible';\n        })\n    })\n\n    modal.addEventListener('click', (e) => {\n        if (!e.target.closest('.popup-dialog') || e.target.closest('.close')) {\n            modal.style.visibility = '';\n        }\n    })\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modalPrivacy);\n\n//# sourceURL=webpack:///./modules/modalPrivacy.js?");

/***/ }),

/***/ "./modules/modalRepair.js":
/*!********************************!*\
  !*** ./modules/modalRepair.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst modalRepair = () => {\n    const bobyHTML = document.querySelector('body');\n    const modal = bobyHTML.querySelector('.popup-repair-types')\n\n    bobyHTML.addEventListener('click', (e) => {\n        if (e.target.nodeName === 'A' && e.target.innerText.trim() === \"Полный список услуг и цен\") {\n            modal.style.visibility = 'visible';\n        }\n\n    })\n\n    modal.addEventListener('click', (e) => {\n        if (e.target.closest('.close')) {\n            modal.style.visibility = '';\n        }\n    })\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modalRepair);\n\n//# sourceURL=webpack:///./modules/modalRepair.js?");

/***/ }),

/***/ "./modules/scroll.js":
/*!***************************!*\
  !*** ./modules/scroll.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst scroll = () => {\n    const smoothLinks = document.querySelectorAll('a[href^=\"#\"]');\n\n    for (let smoothLink of smoothLinks) {\n        smoothLink.addEventListener('click', function (e) {\n            e.preventDefault();\n            const id = smoothLink.getAttribute('href');\n\n            if (id !== '#') {\n                document.querySelector(id).scrollIntoView({\n                    behavior: 'smooth',\n                    block: 'start'\n                });\n            }\n        });\n    };\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (scroll);\n\n//# sourceURL=webpack:///./modules/scroll.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;