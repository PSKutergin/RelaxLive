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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_contacts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/contacts */ \"./modules/contacts.js\");\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu */ \"./modules/menu.js\");\n/* harmony import */ var _modules_scroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/scroll */ \"./modules/scroll.js\");\n/* harmony import */ var _modules_modalRepair__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/modalRepair */ \"./modules/modalRepair.js\");\n/* harmony import */ var _modules_maskPhone__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/maskPhone */ \"./modules/maskPhone.js\");\n/* harmony import */ var _modules_modalPrivacy__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/modalPrivacy */ \"./modules/modalPrivacy.js\");\n/* harmony import */ var _modules_modalConsult__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/modalConsult */ \"./modules/modalConsult.js\");\n/* harmony import */ var _modules_sendForm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/sendForm */ \"./modules/sendForm.js\");\n/* harmony import */ var _modules_tips__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/tips */ \"./modules/tips.js\");\n/* harmony import */ var _modules_modalPortfolio__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/modalPortfolio */ \"./modules/modalPortfolio.js\");\n/* harmony import */ var _modules_sliderPortfolio__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/sliderPortfolio */ \"./modules/sliderPortfolio.js\");\n/* harmony import */ var _modules_modalDocuments__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modules/modalDocuments */ \"./modules/modalDocuments.js\");\n/* harmony import */ var _modules_sliderDocuments__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./modules/sliderDocuments */ \"./modules/sliderDocuments.js\");\n/* harmony import */ var _modules_sliderRepairTypes__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./modules/sliderRepairTypes */ \"./modules/sliderRepairTypes.js\");\n/* harmony import */ var _modules_sliderReviews__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./modules/sliderReviews */ \"./modules/sliderReviews.js\");\n/* harmony import */ var _modules_sliderServices__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./modules/sliderServices */ \"./modules/sliderServices.js\");\n/* harmony import */ var _modules_sliderFormula__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./modules/sliderFormula */ \"./modules/sliderFormula.js\");\n/* harmony import */ var _modules_accordionFaq__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./modules/accordionFaq */ \"./modules/accordionFaq.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n(0,_modules_contacts__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n(0,_modules_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n(0,_modules_scroll__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n(0,_modules_modalRepair__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n(0,_modules_maskPhone__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n(0,_modules_modalPrivacy__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n(0,_modules_modalConsult__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\n(0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_7__[\"default\"])();\n(0,_modules_tips__WEBPACK_IMPORTED_MODULE_8__[\"default\"])();\n(0,_modules_modalPortfolio__WEBPACK_IMPORTED_MODULE_9__[\"default\"])();\n(0,_modules_sliderPortfolio__WEBPACK_IMPORTED_MODULE_10__[\"default\"])();\n(0,_modules_modalDocuments__WEBPACK_IMPORTED_MODULE_11__[\"default\"])();\n(0,_modules_sliderDocuments__WEBPACK_IMPORTED_MODULE_12__[\"default\"])();\n(0,_modules_sliderRepairTypes__WEBPACK_IMPORTED_MODULE_13__[\"default\"])();\n(0,_modules_sliderReviews__WEBPACK_IMPORTED_MODULE_14__[\"default\"])();\n(0,_modules_sliderServices__WEBPACK_IMPORTED_MODULE_15__[\"default\"])();\n(0,_modules_sliderFormula__WEBPACK_IMPORTED_MODULE_16__[\"default\"])();\n(0,_modules_accordionFaq__WEBPACK_IMPORTED_MODULE_17__[\"default\"])();\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/accordionFaq.js":
/*!*********************************!*\
  !*** ./modules/accordionFaq.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst accordionFaq = () => {\n    const accordionFaq = document.querySelector('.accordion')\n    const questions = accordionFaq.querySelectorAll('.title_block')\n\n    questions.forEach((question, numberQuestion) => {\n        question.addEventListener('click', (e) => {\n            e.preventDefault();\n\n            questions.forEach((item, index) => {\n                if (numberQuestion === index) {\n                    item.classList.add('msg-active')\n                } else {\n                    item.classList.remove('msg-active')\n                }\n            })\n        })\n    })\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (accordionFaq);\n\n//# sourceURL=webpack:///./modules/accordionFaq.js?");

/***/ }),

/***/ "./modules/contacts.js":
/*!*****************************!*\
  !*** ./modules/contacts.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst contacts = () => {\n    const headerContacts = document.querySelector('.header-contacts');\n    const dopPhoneBlock = headerContacts.querySelector('.header-contacts__phone-number-accord');\n    const dopPhoneNumber = dopPhoneBlock.querySelector('a');\n    const dopPhoneBtn = headerContacts.querySelector('.header-contacts__arrow img');\n\n    headerContacts.addEventListener('click', (e) => {\n        if (e.target.closest('.header-contacts__arrow')) {\n            if (!dopPhoneBlock.style.top) {\n                dopPhoneBtn.style.transform = 'rotate(180deg)';\n                dopPhoneBlock.style.top = '25px';\n                dopPhoneNumber.style.opacity = '1';\n            } else {\n                dopPhoneBtn.style.transform = '';\n                dopPhoneBlock.style.top = '';\n                dopPhoneNumber.style.opacity = '';\n            };\n        }\n    })\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contacts);\n\n//# sourceURL=webpack:///./modules/contacts.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   animate: () => (/* binding */ animate),\n/* harmony export */   debounce: () => (/* binding */ debounce),\n/* harmony export */   handleInputChange: () => (/* binding */ handleInputChange),\n/* harmony export */   validationForm: () => (/* binding */ validationForm),\n/* harmony export */   visible: () => (/* binding */ visible)\n/* harmony export */ });\nconst animate = ({ timing, draw, duration }) => {\n\n    let start = performance.now();\n\n    requestAnimationFrame(function animate(time) {\n        // timeFraction изменяется от 0 до 1\n        let timeFraction = (time - start) / duration;\n        if (timeFraction > 1) timeFraction = 1;\n\n        // вычисление текущего состояния анимации\n        let progress = timing(timeFraction);\n\n        draw(progress); // отрисовать её\n\n        if (timeFraction < 1) {\n            requestAnimationFrame(animate);\n        }\n    });\n};\n\nconst visible = (target) => {\n    const allPosition = {\n        targetPosition: {\n            top: scrollY + target.getBoundingClientRect().top,\n            left: scrollX + target.getBoundingClientRect().left,\n            right: scrollX + target.getBoundingClientRect().right,\n            bottom: scrollY + target.getBoundingClientRect().bottom\n        },\n        windowPosition: {\n            top: scrollY,\n            left: scrollX,\n            right: scrollY + document.documentElement.clientWidth,\n            bottom: scrollX + document.documentElement.clientHeight\n        }\n    }\n\n    return allPosition\n};\n\nconst handleInputChange = (event) => {\n    const input = event.target;\n\n    input.value !== '' ? input.style.borderColor = 'greenyellow' : input.style.borderColor = ''\n};\n\nconst validationForm = (form) => {\n    const inputs = form.querySelectorAll('input')\n\n    let count = 0\n\n    inputs.forEach(input => {\n        if (input.value.trim() === '') {\n            input.style.borderColor = 'red'\n            count++\n        }\n    });\n\n    return count\n};\n\nconst debounce = (func, ms = 300) => {\n    let timer\n\n    return (...args) => {\n        clearTimeout(timer)\n\n        timer = setTimeout(() => { func.apply(undefined, args) }, ms)\n    }\n};\n\n\n\n//# sourceURL=webpack:///./modules/helpers.js?");

/***/ }),

/***/ "./modules/maskPhone.js":
/*!******************************!*\
  !*** ./modules/maskPhone.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst maskPhone = () => {\n    const phoneInputs = document.querySelectorAll('[name=\"phone\"]')\n\n    const eventCallback = (e) => {\n        let el = e.target,\n            clearVal = el.dataset.phoneClear,\n            pattern = el.dataset.phonePattern,\n            matrix_def = \"+7 (___) ___-__-__\",\n            matrix = pattern ? pattern : matrix_def,\n            i = 0,\n            def = matrix.replace(/\\D/g, \"\"),\n            val = e.target.value.replace(/\\D/g, \"\");\n\n        if (clearVal !== 'false' && e.type === 'blur') {\n            if (val.length < matrix.match(/([\\_\\d])/g).length) {\n                e.target.value = '';\n                return;\n            }\n        };\n\n        if (def.length >= val.length) val = def;\n\n        e.target.value = matrix.replace(/./g, function (a) {\n            return /[_\\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? \"\" : a\n        });\n    };\n\n    for (let elem of phoneInputs) {\n        for (let ev of ['input', 'blur', 'focus']) {\n            elem.addEventListener(ev, eventCallback);\n        }\n    };\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (maskPhone);\n\n//# sourceURL=webpack:///./modules/maskPhone.js?");

/***/ }),

/***/ "./modules/menu.js":
/*!*************************!*\
  !*** ./modules/menu.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst menu = () => {\n    const menuBtn = document.querySelector('.menu__icon')\n    const menu = document.querySelector('.popup-dialog-menu')\n\n    menuBtn.addEventListener('click', () => {\n        if (innerWidth >= 1024) {\n            menu.style.right = '639px';\n        } else if (innerWidth >= 576) {\n            menu.style.right = '549px';\n        } else {\n            menu.style.transform = 'translate3d(0, 0, 0)';\n        };\n    })\n\n    menu.addEventListener('click', (e) => {\n        if (e.target.closest('.menu-link') || e.target.closest('.close-menu')) {\n            if (innerWidth >= 576) {\n                menu.style.right = '';\n            } else {\n                menu.style.transform = '';\n            };\n        }\n    })\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);\n\n//# sourceURL=webpack:///./modules/menu.js?");

/***/ }),

/***/ "./modules/modalConsult.js":
/*!*********************************!*\
  !*** ./modules/modalConsult.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst modalConsult = () => {\n    const modal = document.querySelector('.popup-consultation');\n    const consultButtons = document.querySelectorAll('.button_wide')\n\n    consultButtons.forEach(btn => {\n        btn.addEventListener('click', () => {\n            modal.style.visibility = 'visible';\n        })\n    });\n\n    modal.addEventListener('click', (e) => {\n        if (!e.target.closest('.feedback-wrap') || e.target.closest('.close')) {\n            modal.style.visibility = '';\n        }\n    })\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modalConsult);\n\n//# sourceURL=webpack:///./modules/modalConsult.js?");

/***/ }),

/***/ "./modules/modalDocuments.js":
/*!***********************************!*\
  !*** ./modules/modalDocuments.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst modalDocuments = () => {\n    const modal = document.querySelector('.popup-transparency')\n    const images = document.querySelectorAll('.transparency-item__img')\n    const sliderBlock = modal.querySelector('.popup-transparency-slider')\n    const currentSlideText = modal.querySelector('.slider-counter-content__current')\n    const totalSlideText = modal.querySelector('.slider-counter-content__total')\n\n    let currentSlide = 0\n\n    const slider = (numberSlide) => {\n        for (let i = 0; i < sliderBlock.children.length; i++) {\n            if (i === numberSlide) {\n                sliderBlock.children[i].style.display = 'block'\n            } else {\n                sliderBlock.children[i].style.display = 'none'\n            };\n\n            currentSlideText.innerHTML = numberSlide + 1;\n        }\n    };\n\n    images.forEach((image, indexImage) => {\n        image.addEventListener('click', () => {\n            modal.style.visibility = 'visible';\n            totalSlideText.innerHTML = sliderBlock.children.length;\n\n            slider(indexImage);\n        })\n    })\n\n    modal.addEventListener('click', (e) => {\n        if (!e.target.closest('.popup-dialog-transparency') || e.target.closest('.close')) {\n            modal.style.visibility = '';\n        }\n\n        if (e.target.closest('.popup-arrow_transparency_right')) {\n            currentSlide = +currentSlideText.innerHTML === sliderBlock.children.length ? 0 : +currentSlideText.innerHTML\n            slider(currentSlide);\n        } else if (e.target.closest('.popup-arrow_transparency_left')) {\n            currentSlide = +currentSlideText.innerHTML - 2 < 0 ? sliderBlock.children.length - 1 : +currentSlideText.innerHTML - 2\n            slider(currentSlide);\n        }\n    })\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modalDocuments);\n\n//# sourceURL=webpack:///./modules/modalDocuments.js?");

/***/ }),

/***/ "./modules/modalPortfolio.js":
/*!***********************************!*\
  !*** ./modules/modalPortfolio.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst modalPortfolio = () => {\n    const modal = document.querySelector('.popup-portfolio')\n    const sliderBlock = modal.querySelector('.popup-portfolio-slider')\n    const textBlock = modal.querySelectorAll('.popup-portfolio-text')\n    const currentSlideText = modal.querySelector('.slider-counter-content__current')\n    const totalSlideText = modal.querySelector('.slider-counter-content__total')\n\n    let imageBlock\n    let images\n    let currentSlide = 0\n\n    const slider = (numberSlide) => {\n        for (let i = 0; i < sliderBlock.children.length; i++) {\n            if (i === numberSlide) {\n                sliderBlock.children[i].style.display = 'block'\n                textBlock[i].style.display = 'block'\n            } else {\n                sliderBlock.children[i].style.display = 'none'\n                textBlock[i].style.display = ''\n            };\n\n            currentSlideText.innerHTML = numberSlide + 1;\n        }\n    };\n\n    if (innerWidth >= 576) {\n        imageBlock = document.querySelector('.portfolio-slider');\n    } else {\n        imageBlock = document.querySelector('.portfolio-slider-mobile');\n    };\n\n    images = imageBlock.querySelectorAll('.portfolio-slider__slide-frame');\n\n    images.forEach((image, indexImage) => {\n        image.addEventListener('click', () => {\n            modal.style.visibility = 'visible';\n            sliderBlock.style.display = 'flex';\n            totalSlideText.innerHTML = sliderBlock.children.length;\n\n            slider(indexImage);\n        })\n    })\n\n    modal.addEventListener('click', (e) => {\n        if (!e.target.closest('.popup-dialog') || e.target.closest('.close')) {\n            modal.style.visibility = '';\n        };\n\n        if (e.target.closest('.popup-arrow_right')) {\n            currentSlide = +currentSlideText.innerHTML === sliderBlock.children.length ? 0 : +currentSlideText.innerHTML\n            slider(currentSlide);\n        } else if (e.target.closest('.popup-arrow_left')) {\n            currentSlide = +currentSlideText.innerHTML - 2 < 0 ? sliderBlock.children.length - 1 : +currentSlideText.innerHTML - 2\n            slider(currentSlide);\n        }\n    })\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modalPortfolio);\n\n//# sourceURL=webpack:///./modules/modalPortfolio.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getData */ \"./modules/getData.js\");\n\n\nconst modalRepair = () => {\n    const bobyHTML = document.querySelector('body');\n    const modal = bobyHTML.querySelector('.popup-repair-types');\n    const selector = modal.querySelector('.nav-list-popup-repair');\n\n    let selectorItems = [];\n    let dataRepair = [];\n    let currentTypeIndex = 0;\n\n    const renderSelector = (types, data) => {\n        selector.innerHTML = ''\n        const typesRepair = Array.from(types)\n\n        typesRepair.forEach((type, index) => {\n            if (index === currentTypeIndex) {\n                selector.insertAdjacentHTML('beforeend',\n                    `\n                        <button class=\"button_o popup-repair-types-nav__item active\">${type}</button>\n                    `)\n            } else {\n                selector.insertAdjacentHTML('beforeend',\n                    `\n                        <button class=\"button_o popup-repair-types-nav__item\">${type}</button>\n                    `)\n            }\n        });\n\n        selectorItems = modal.querySelectorAll('.popup-repair-types-nav__item')\n\n        renderData(typesRepair[currentTypeIndex], data)\n    };\n\n    const renderData = (strType, data) => {\n        const title = modal.querySelector('#switch-inner');\n        const bodyTable = modal.querySelector('.popup-repair-types-content-table__list > tbody');\n\n        let list = data.filter((item) => {\n            return item.type.includes(strType)\n        });\n\n        title.innerHTML = strType;\n        bodyTable.innerHTML = '';\n\n        list.forEach(item => {\n            bodyTable.insertAdjacentHTML('beforeend',\n                `\n                    <tr class=\"mobile-row showHide\">\n                        <td class=\"repair-types-name\">${item.name}</td>\n                        <td class=\"mobile-col-title tablet-hide desktop-hide\">Ед.измерения</td>\n                        <td class=\"mobile-col-title tablet-hide desktop-hide\">Цена за ед.</td>\n                        <td class=\"repair-types-value\">${item.units}</td>\n                        <td class=\"repair-types-value\">${item.cost} руб.</td>\n                    </tr>\n                `)\n        })\n    };\n\n    bobyHTML.addEventListener('click', (e) => {\n        if (e.target.nodeName === 'A' && e.target.innerText.trim() === \"Полный список услуг и цен\") {\n            modal.style.visibility = 'visible';\n        }\n    });\n\n    modal.addEventListener('click', (e) => {\n        if (e.target.closest('.close')) {\n            modal.style.visibility = '';\n        };\n\n        if (e.target.closest('.popup-repair-types-nav__item')) {\n            selectorItems.forEach((item) => {\n                if (item.innerText === e.target.innerText) {\n                    item.classList.add('active');\n\n                    renderData(e.target.innerText, dataRepair)\n                } else {\n                    item.classList.remove('active')\n                };\n            })\n        };\n\n        if (innerWidth < 1025) {\n            selectorItems.forEach((item, index) => {\n                if (item.classList.contains('active')) {\n                    item.classList.remove('active');\n\n                    if (e.target.closest('.nav-arrow_right')) {\n                        currentTypeIndex = index + 1\n                    } else if (e.target.closest('.nav-arrow_left')) {\n                        currentTypeIndex = index - 1\n                    };\n\n                    if (currentTypeIndex < 0) {\n                        currentTypeIndex = selectorItems.length - 1\n                    } else if (currentTypeIndex === selectorItems.length) {\n                        currentTypeIndex = 0\n                    };\n                }\n            });\n\n            renderData(selectorItems[currentTypeIndex].innerHTML, dataRepair)\n            selectorItems[currentTypeIndex].classList.add('active');\n        }\n    });\n\n    (0,_getData__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('http://localhost:4545/repairs')\n        .then(data => {\n            const typesRepair = new Set()\n\n            data.forEach((item) => {\n                if (item.type) {\n                    typesRepair.add(item.type);\n                }\n            });\n\n            renderSelector(typesRepair, data);\n            dataRepair = data\n        })\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modalRepair);\n\n//# sourceURL=webpack:///./modules/modalRepair.js?");

/***/ }),

/***/ "./modules/modalThank.js":
/*!*******************************!*\
  !*** ./modules/modalThank.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst modalThank = () => {\n    const modal = document.querySelector('.popup-thank');\n\n    modal.style.visibility = 'visible';\n\n    modal.addEventListener('click', (e) => {\n        if (!e.target.closest('.feedback-wrap') || e.target.closest('.close')) {\n            modal.style.visibility = '';\n        }\n    })\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modalThank);\n\n//# sourceURL=webpack:///./modules/modalThank.js?");

/***/ }),

/***/ "./modules/scroll.js":
/*!***************************!*\
  !*** ./modules/scroll.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst scroll = () => {\n    const smoothLinks = document.querySelectorAll('a[href^=\"#\"]');\n\n    for (let smoothLink of smoothLinks) {\n        smoothLink.addEventListener('click', function (e) {\n            e.preventDefault();\n            const id = smoothLink.getAttribute('href');\n\n            if (id !== '#') {\n                document.querySelector(id).scrollIntoView({\n                    behavior: 'smooth',\n                    block: 'start'\n                });\n            }\n        });\n    };\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (scroll);\n\n//# sourceURL=webpack:///./modules/scroll.js?");

/***/ }),

/***/ "./modules/sendForm.js":
/*!*****************************!*\
  !*** ./modules/sendForm.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _modalThank__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modalThank */ \"./modules/modalThank.js\");\n\n\nconst sendForm = () => {\n    const forms = document.querySelectorAll('form');\n\n    const sendData = (data) => {\n        // Заменить на server.php\n        return fetch('https://jsonplaceholder.typicode.com/posts', {\n            method: 'POST',\n            body: JSON.stringify(data),\n            headers: {\n                \"Content-Type\": \"application/json\"\n            }\n        }).then(res => res.json())\n    };\n\n    const validate = (list) => {\n        let success = true;\n\n        list.forEach(input => {\n            switch (input.type) {\n                case 'text':\n                    if (!input.value) {\n                        success = false\n                    };\n                    break;\n                case 'checkbox':\n                    if (!input.checked) {\n                        success = false\n                    };\n                    break;\n            }\n        });\n\n        return success\n    };\n\n    forms.forEach(form => {\n        const formElements = form.querySelectorAll('input');\n        const formData = new FormData(form);\n        const formBody = {};\n\n        formElements.forEach(elem => {\n            if (elem.type === 'checkbox' && elem.hasAttribute('required')) {\n                elem.removeAttribute('required');\n            }\n        });\n\n        form.addEventListener('submit', (e) => {\n            e.preventDefault();\n\n            formData.forEach((value, key) => {\n                formBody[key] = value\n            });\n\n            formElements.forEach(elem => {\n                if (elem.type === 'text') {\n                    formBody[elem.name] = elem.value\n                }\n            });\n\n            if (validate(formElements)) {\n                sendData(formBody);\n                form.reset();\n\n                if (form.closest('.popup-consultation')) {\n                    form.closest('.popup-consultation').style.visibility = '';\n                };\n\n                (0,_modalThank__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n            };\n        });\n    });\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sendForm);\n\n//# sourceURL=webpack:///./modules/sendForm.js?");

/***/ }),

/***/ "./modules/sliderDocuments.js":
/*!************************************!*\
  !*** ./modules/sliderDocuments.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst sliderDocuments = () => {\n    const documentsBlock = document.querySelector('.transparency-slider-wrap')\n    const sliderBlock = documentsBlock.querySelector('.transparency-slider');\n\n    let currentSlide = 0;\n\n    const slider = (numberSlide) => {\n        for (let i = 0; i < sliderBlock.children.length; i++) {\n            if (i === numberSlide) {\n                sliderBlock.children[i].classList.add('active')\n            } else {\n                sliderBlock.children[i].classList.remove('active')\n            };\n        }\n    };\n\n    documentsBlock.addEventListener('click', (e) => {\n        if (e.target.closest('.slider-arrow_right')) {\n            currentSlide = currentSlide === sliderBlock.children.length - 1 ? 0 : currentSlide + 1\n            slider(currentSlide);\n        } else if (e.target.closest('.slider-arrow_left')) {\n            currentSlide = currentSlide === 0 ? sliderBlock.children.length - 1 : currentSlide - 1\n            slider(currentSlide);\n        }\n\n    })\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sliderDocuments);\n\n//# sourceURL=webpack:///./modules/sliderDocuments.js?");

/***/ }),

/***/ "./modules/sliderFormula.js":
/*!**********************************!*\
  !*** ./modules/sliderFormula.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst sliderFormula = () => {\n    const formulaBlock = document.querySelector('.formula-slider-wrap')\n    const sliderBlock = formulaBlock.querySelector('.formula-slider')\n    const slides = sliderBlock.querySelectorAll('.formula-item')\n\n    sliderBlock.style.display = 'flex';\n\n    if (innerWidth > 864) {\n        let currentSlides = [slides.length - 1, 0, 1]\n\n        const slider = (numbersSlides) => {\n            sliderBlock.innerHTML = '';\n\n            numbersSlides.forEach(item => {\n                sliderBlock.insertAdjacentElement('beforeend', slides[item])\n            });\n        };\n\n        formulaBlock.querySelectorAll('.slider-arrow').forEach(item => item.style.top = '70%');\n\n        formulaBlock.addEventListener('click', (e) => {\n            if (e.target.closest('.slider-arrow_right-formula')) {\n                currentSlides = currentSlides.map(item => item - 1);\n            } else if (e.target.closest('.slider-arrow_left-formula')) {\n                currentSlides = currentSlides.map(item => item + 1);\n            };\n\n            for (let i = 0; i < currentSlides.length; i++) {\n                if (currentSlides[i] === slides.length) {\n                    currentSlides[i] = 0\n                } else if (currentSlides[i] < 0) {\n                    currentSlides[i] = slides.length - 1\n                }\n            };\n\n            slider(currentSlides);\n        });\n\n        slider(currentSlides)\n    } else {\n        let currentSlide = 0\n\n        const slider = (numberSlide) => {\n            for (let i = 0; i < slides.length; i++) {\n                if (i === numberSlide) {\n                    slides[i].style.display = 'flex'\n                    slides[i].style.justifyContent = 'start';\n                } else {\n                    slides[i].style.display = 'none'\n                };\n            }\n        };\n\n        formulaBlock.addEventListener('click', (e) => {\n            if (e.target.closest('.slider-arrow_right-formula')) {\n                currentSlide--\n            } else if (e.target.closest('.slider-arrow_left-formula')) {\n                currentSlide++\n            };\n\n            if (currentSlide === slides.length) {\n                currentSlide = 0\n            } else if (currentSlide < 0) {\n                currentSlide = slides.length - 1\n            }\n\n            slider(currentSlide);\n        });\n    }\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sliderFormula);\n\n//# sourceURL=webpack:///./modules/sliderFormula.js?");

/***/ }),

/***/ "./modules/sliderPortfolio.js":
/*!************************************!*\
  !*** ./modules/sliderPortfolio.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst sliderPortfolio = () => {\n    const portfolio = document.getElementById('portfolio')\n    const sliderBlockDesktop = portfolio.querySelector('.portfolio-slider');\n    const sliderBlockMobile = portfolio.querySelector('.portfolio-slider-mobile');\n    const currentSlideText = portfolio.querySelector('.slider-counter-content__current')\n    const totalSlideText = portfolio.querySelector('.slider-counter-content__total')\n\n    let currentSlides = [0, 1, 2]\n    let currentSlide = 0\n\n    const sliderDesktop = (numbersSlides) => {\n        for (let i = 0; i < sliderBlockDesktop.children.length; i++) {\n            if (i === numbersSlides[0] || i === numbersSlides[1] || i === numbersSlides[2]) {\n                sliderBlockDesktop.children[i].style.display = ''\n            } else {\n                sliderBlockDesktop.children[i].style.display = 'none'\n            };\n        };\n    }\n\n    const sliderMobile = (numberSlide) => {\n        for (let i = 0; i < sliderBlockMobile.children.length; i++) {\n            if (i === numberSlide) {\n                sliderBlockMobile.children[i].style.display = 'block'\n            } else {\n                sliderBlockMobile.children[i].style.display = 'none'\n            };\n\n            currentSlideText.innerHTML = numberSlide + 1;\n        }\n    };\n\n    if (innerWidth < 576) {\n        portfolio.querySelectorAll('.slider-arrow-tablet-mobile').forEach(item => {\n            item.style.zIndex = '999'\n        });\n\n        totalSlideText.innerHTML = sliderBlockMobile.children.length;\n        sliderMobile(currentSlide);\n    } else {\n        sliderDesktop(currentSlides);\n    };\n\n    portfolio.addEventListener('click', (e) => {\n        if (e.target.closest('.slider-arrow-tablet-mobile_right')) {\n            portfolio.querySelector('.slider-arrow-tablet-mobile_left').style.display = 'block';\n\n            if (+currentSlideText.innerHTML === sliderBlockMobile.children.length) {\n                currentSlide = sliderBlockMobile.children.length - 1;\n            } else if (+currentSlideText.innerHTML === sliderBlockMobile.children.length - 1) {\n                currentSlide = +currentSlideText.innerHTML;\n                portfolio.querySelector('.slider-arrow-tablet-mobile_right').style.display = 'none';\n            } else {\n                currentSlide = +currentSlideText.innerHTML\n            };\n\n            sliderMobile(currentSlide);\n\n        } else if (e.target.closest('.slider-arrow-tablet-mobile_left')) {\n            portfolio.querySelector('.slider-arrow-tablet-mobile_right').style.display = 'block';\n\n            if (+currentSlideText.innerHTML - 2 < 0) {\n                currentSlide = 0;\n            } else if (+currentSlideText.innerHTML - 2 === 0) {\n                currentSlide = +currentSlideText.innerHTML - 2;\n                portfolio.querySelector('.slider-arrow-tablet-mobile_left').style.display = 'none';\n            } else {\n                currentSlide = +currentSlideText.innerHTML - 2\n            };\n\n            sliderMobile(currentSlide);\n        } else if (e.target.closest('.slider-arrow_right-portfolio')) {\n            portfolio.querySelector('.slider-arrow_left-portfolio').style.display = 'flex';\n\n            if (currentSlides[2] === sliderBlockDesktop.children.length - 2) {\n                currentSlides = currentSlides.map(item => item + 1);\n                portfolio.querySelector('.slider-arrow_right-portfolio').style.display = 'none';\n            } else {\n                currentSlides = currentSlides.map(item => item + 1)\n            };\n\n            sliderDesktop(currentSlides);\n        } else if (e.target.closest('.slider-arrow_left-portfolio')) {\n            portfolio.querySelector('.slider-arrow_right-portfolio').style.display = 'flex'\n\n            if (currentSlides[0] === 1) {\n                currentSlides = currentSlides.map(item => item - 1);\n                portfolio.querySelector('.slider-arrow_left-portfolio').style.display = 'none';\n            } else {\n                currentSlides = currentSlides.map(item => item - 1)\n            };\n\n            sliderDesktop(currentSlides);\n        }\n\n    })\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sliderPortfolio);\n\n//# sourceURL=webpack:///./modules/sliderPortfolio.js?");

/***/ }),

/***/ "./modules/sliderRepairTypes.js":
/*!**************************************!*\
  !*** ./modules/sliderRepairTypes.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst sliderRepairTypes = () => {\n    const repairTypesBlock = document.getElementById('repair-types')\n    const imagesBlock = repairTypesBlock.querySelector('.repair-types-slider')\n    const blockRepair = repairTypesBlock.querySelector('.nav-list-repair')\n    const listRepair = repairTypesBlock.querySelectorAll('.repair-types-nav__item')\n    const currentSlideText = repairTypesBlock.querySelector('.slider-counter-content__current')\n    const totalSlideText = repairTypesBlock.querySelector('.slider-counter-content__total')\n\n    let classSlider = 'types-repair1'\n    let activeSliderBlock = repairTypesBlock.querySelector('.' + classSlider);\n    let currentSlide = 0\n    let currentType = 0\n\n    totalSlideText.innerHTML = activeSliderBlock.children.length;\n\n    const changeSliderBlock = (index) => {\n        for (let i = 0; i < imagesBlock.children.length; i++) {\n            if (index === i) {\n                imagesBlock.children[i].style.display = '';\n            } else {\n                imagesBlock.children[i].style.display = 'none';\n\n                for (let j = 0; j < imagesBlock.children[i].children.length; j++) {\n                    imagesBlock.children[i].children[j].style.display = ''\n                };\n            };\n        }\n\n        classSlider = `types-repair${index + 1}`\n        activeSliderBlock = repairTypesBlock.querySelector('.' + classSlider);\n        currentSlideText.innerHTML = 1;\n        totalSlideText.innerHTML = activeSliderBlock.children.length;\n    }\n\n    const slider = (sliderBlock, numberSlide) => {\n        for (let i = 0; i < sliderBlock.children.length; i++) {\n            if (i === numberSlide) {\n                sliderBlock.children[i].style.display = 'block'\n            } else {\n                sliderBlock.children[i].style.display = 'none'\n            };\n\n            currentSlideText.innerHTML = numberSlide + 1;\n        }\n    };\n\n    repairTypesBlock.addEventListener('click', (e) => {\n        listRepair.forEach((item, index) => {\n            if (item.classList.contains('active')) {\n                item.classList.remove('active')\n\n                if (e.target.closest('.nav-arrow_right')) {\n                    currentType = index === listRepair.length - 1 ? 0 : index + 1;\n                    changeSliderBlock(currentType);\n                } else if (e.target.closest('.nav-arrow_left')) {\n                    currentType = index === 0 ? listRepair.length - 1 : index - 1;\n                    changeSliderBlock(currentType);\n                }\n            }\n        })\n\n        listRepair[currentType].classList.add('active')\n    });\n\n    repairTypesBlock.addEventListener('click', (e) => {\n        if (e.target.closest('.repair-types-nav__item')) {\n            for (let i = 0; i < blockRepair.children.length; i++) {\n                if (blockRepair.children[i].innerText === e.target.innerText) {\n                    blockRepair.children[i].classList.add('active');\n                    changeSliderBlock(i)\n                } else {\n                    blockRepair.children[i].classList.remove('active')\n                };\n            }\n        }\n\n        if (e.target.closest('.slider-arrow_right')) {\n            currentSlide = +currentSlideText.innerHTML === activeSliderBlock.children.length ? 0 : +currentSlideText.innerHTML\n            slider(activeSliderBlock, currentSlide);\n        } else if (e.target.closest('.slider-arrow_left')) {\n            currentSlide = +currentSlideText.innerHTML - 2 < 0 ? activeSliderBlock.children.length - 1 : +currentSlideText.innerHTML - 2\n            slider(activeSliderBlock, currentSlide);\n        }\n    })\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sliderRepairTypes);\n\n//# sourceURL=webpack:///./modules/sliderRepairTypes.js?");

/***/ }),

/***/ "./modules/sliderReviews.js":
/*!**********************************!*\
  !*** ./modules/sliderReviews.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst sliderReviews = () => {\n    const sliderBlock = document.getElementById('reviews');\n    const slides = sliderBlock.querySelectorAll('.reviews-slider__slide');\n    const dotBlock = sliderBlock.querySelector('.slider-dots-reviews');\n    const dots = sliderBlock.querySelectorAll('.dot-reviews');\n\n    let currentSlide = 0;\n    let dotActiveClass = 'dot_active';\n\n    const slider = (numberSlide) => {\n        slides.forEach((slide, index) => {\n            if (index === numberSlide) {\n                slide.style.display = 'flex'\n            } else {\n                slide.style.display = 'none'\n            };\n        })\n    };\n\n    const prevDot = (elems, index, strClass) => {\n        elems[index].classList.remove(strClass)\n    };\n\n    const nextDot = (elems, index, strClass) => {\n        elems[index].classList.add(strClass)\n    };\n\n    dotBlock.style.display = 'flex';\n\n    sliderBlock.addEventListener('click', (e) => {\n        e.preventDefault();\n\n        prevDot(dots, currentSlide, dotActiveClass);\n\n        if (e.target.closest('.slider-arrow_right')) {\n            currentSlide++\n        } else if (e.target.closest('.slider-arrow_left')) {\n            currentSlide--\n        } else if (e.target.classList.contains('dot-reviews')) {\n            dots.forEach((dot, index) => {\n                if (e.target === dot) {\n                    currentSlide = index\n                }\n            })\n        };\n\n        if (currentSlide >= slides.length) {\n            currentSlide = 0\n        };\n\n        if (currentSlide < 0) {\n            currentSlide = slides.length - 1\n        };\n\n        nextDot(dots, currentSlide, dotActiveClass);\n        slider(currentSlide);\n    });\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sliderReviews);\n\n//# sourceURL=webpack:///./modules/sliderReviews.js?");

/***/ }),

/***/ "./modules/sliderServices.js":
/*!***********************************!*\
  !*** ./modules/sliderServices.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst sliderServices = () => {\n    const servicesBlock = document.querySelector('.services');\n    const servicesSlides = servicesBlock.querySelectorAll('.row')\n    const sliderBlock = document.querySelector('.services-slider');\n    const slides = sliderBlock.querySelectorAll('.services-item');\n    const dotBlock = document.querySelector('.slider-dots-main');\n    const dots = dotBlock.querySelectorAll('.dot-main');\n\n    const slider = (numberSlide, slides) => {\n        slides.forEach((slide, index) => {\n            if (index === numberSlide) {\n                slide.classList.add('active')\n            } else {\n                slide.classList.remove('active')\n            };\n        })\n    };\n\n    const prevDot = (elems, index, strClass) => {\n        elems[index].classList.remove(strClass)\n    };\n\n    const nextDot = (elems, index, strClass) => {\n        elems[index].classList.add(strClass)\n    };\n\n    if (innerWidth < 576) {\n        let currentSlide = 0;\n        let dotActiveClass = 'dot_active';\n\n        dotBlock.addEventListener('click', (e) => {\n            prevDot(dots, currentSlide, dotActiveClass);\n\n            if (e.target.classList.contains('dot-main')) {\n                dots.forEach((dot, index) => {\n                    if (e.target === dot) {\n                        currentSlide = index\n                    }\n                })\n            };\n\n            nextDot(dots, currentSlide, dotActiveClass);\n            slider(currentSlide, slides);\n        });\n    } else {\n        let currentSlide = 0\n\n        servicesBlock.addEventListener('click', (e) => {\n            if (e.target.closest('.slider-arrow_right-services')) {\n                currentSlide--\n            } else if (e.target.closest('.slider-arrow_left-services')) {\n                currentSlide++\n            };\n\n            if (currentSlide === servicesSlides.length) {\n                currentSlide = 0\n            } else if (currentSlide < 0) {\n                currentSlide = servicesSlides.length - 1\n            }\n\n            slider(currentSlide, servicesSlides);\n        });\n    }\n\n\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sliderServices);\n\n//# sourceURL=webpack:///./modules/sliderServices.js?");

/***/ }),

/***/ "./modules/tips.js":
/*!*************************!*\
  !*** ./modules/tips.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ \"./modules/helpers.js\");\n\n\nconst tips = () => {\n\n    const points = document.querySelectorAll('.formula-item__icon')\n\n    points.forEach(point => {\n        const tip = point.querySelector('.formula-item-popup')\n\n        point.addEventListener('mouseenter', (e) => {\n            const allPositionRelativeTip = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.visible)(tip);\n\n            if (allPositionRelativeTip.targetPosition.top < allPositionRelativeTip.windowPosition.top) {\n                tip.style.top = '105px';\n                tip.style.paddingTop = '40px';\n                point.classList.add('coup')\n                point.parentElement.parentElement.style.zIndex = '10'\n            } else {\n                tip.style.top = '';\n                tip.style.paddingTop = '';\n                point.classList.remove('coup')\n                point.parentElement.parentElement.style.zIndex = ''\n            };\n\n            point.classList.add('active-item')\n\n            ;(0,_helpers__WEBPACK_IMPORTED_MODULE_0__.animate)({\n                duration: 300,\n                timing(timeFraction) {\n                    return timeFraction;\n                },\n                draw(progress) {\n                    tip.style.opacity = progress;\n                }\n            });\n        })\n\n        point.addEventListener('mouseleave', (e) => {\n            ;(0,_helpers__WEBPACK_IMPORTED_MODULE_0__.animate)({\n                duration: 300,\n                timing(timeFraction) {\n                    return timeFraction;\n                },\n                draw(progress) {\n                    tip.style.opacity = 1 - progress;\n                }\n            });\n            setTimeout(() => {\n                tip.style.top = '';\n                tip.style.paddingTop = '';\n            }, 300);\n\n            point.parentElement.parentElement.style.zIndex = ''\n            point.classList.remove('coup')\n            point.classList.remove('active-item')\n        })\n    })\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tips);\n\n//# sourceURL=webpack:///./modules/tips.js?");

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