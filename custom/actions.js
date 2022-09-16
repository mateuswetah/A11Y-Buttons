/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/a11y-actions/index.js":
/*!***********************************!*\
  !*** ./src/a11y-actions/index.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "./src/a11y-actions/style.scss");
// A11Y BUTTONS ACTIONS SCRIPT
// This file holds the logic of each button and their behaviour.

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */

/**
 * This routine checks if the page document is loaded.
 * We do this to be able to make sure elements are already
 * present in DOM.
 *
 * @param {Function} callback
 */

const performWhenDocumentIsLoaded = callback => {
  if (/comp|inter|loaded/.test(document.readyState)) callback();else document.addEventListener('DOMContentLoaded', callback, false);
};
/**
 * Updated the root html element font-size, based on action.
 * We don't update session storage when the action is 'set' because
 * in this situation we're coming from the initial session storage
 * check.
 *
 * @param {string} action
 * @param {string} setValue
 */


function updateFontSize() {
  let action = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'increase';
  let setValue = arguments.length > 1 ? arguments[1] : undefined;
  const htmlElement = document.getElementsByTagName('html')[0];

  if (action === 'reset') {
    htmlElement.style.fontSize = '';
    window.sessionStorage.removeItem('a11y-buttons-font-size');
    return;
  }

  if (action === 'set' && setValue) {
    htmlElement.style.fontSize = setValue;
    return;
  }

  const computedFontSize = window.getComputedStyle(htmlElement).fontSize;
  const regex = /[\d]*/gm;
  const values = computedFontSize.match(regex);
  let fontSizeValue = values.length && !isNaN(values[0]) ? Number(values[0]) : 16;
  if (action === 'increase' && fontSizeValue <= 64) fontSizeValue += 4;else if (action === 'decrease' && fontSizeValue >= 8) fontSizeValue -= 4;else return;
  const fontSizeUnit = values.length && !isNaN(values[0]) && computedFontSize.split(values['0']) && isNaN(computedFontSize.split(values['0'])[1]) ? computedFontSize.split(values['0'])[1] : 'px';
  const newFontSize = fontSizeValue + fontSizeUnit;
  htmlElement.style.fontSize = newFontSize; // Save data to window.sessionStorage

  window.sessionStorage.setItem('a11y-buttons-font-size', newFontSize);
}
/**
 * Adds a class to the root html element to color different
 * elements based on our high contrast stylesheet.
 */


function toggleHighContrast() {
  const htmlElement = document.getElementsByTagName('html')[0];
  const isContrastModeEnabled = htmlElement.classList.toggle('a11y-buttons-high-contrast-mode'); // Save data to window.sessionStorage

  window.sessionStorage.setItem('a11y-buttons-high-contrast-mode', isContrastModeEnabled);
}
/**
 * Run this when loading the page to see if any values where
 * set previously. This way we keep settings across pages.
 */


function updateStateFromStorage() {
  // Get saved data from window.sessionStorage
  const customFontSize = window.sessionStorage.getItem('a11y-buttons-font-size');
  if (customFontSize) updateFontSize('set', customFontSize); // Get saved data from window.sessionStorage

  const isContrastModeEnabled = window.sessionStorage.getItem('a11y-buttons-high-contrast-mode') === 'true';
  if (isContrastModeEnabled) toggleHighContrast();
}
/**
 * Look for a111Buttons elements to set their proper actions
 */


function addActionsToButtons() {
  const a11yButtonsWrappers = document.getElementsByClassName('wp-block-a11y-buttons-a11y-button');
  if (!a11yButtonsWrappers || !a11yButtonsWrappers.length) return;
  const a11yButtons = [];

  for (const a11yButton of a11yButtonsWrappers) {
    if (a11yButton.childNodes && a11yButton.childNodes[0] && a11yButton.childNodes[0].tagName === 'BUTTON' && a11yButton.childNodes[0].dataset.action) a11yButtons.push(a11yButton.childNodes[0]);
  }

  for (const a11yButton of a11yButtons) {
    a11yButton.addEventListener('click', () => {
      switch (a11yButton.dataset.action) {
        case 'increase-font-size':
          updateFontSize('increase');
          break;

        case 'decrease-font-size':
          updateFontSize('decrease');
          break;

        case 'reset-font-size':
          updateFontSize('reset');
          break;

        case 'toggle-high-contrast':
          toggleHighContrast();
          break;
      }
    });
  }
}
/*
 * Waiting the page to be loaded to initialize things
 */


/* harmony default export */ __webpack_exports__["default"] = (performWhenDocumentIsLoaded(() => {
  updateStateFromStorage();
  addActionsToButtons();
}));

/***/ }),

/***/ "./src/actions.js":
/*!************************!*\
  !*** ./src/actions.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _a11y_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./a11y-actions */ "./src/a11y-actions/index.js");

/* harmony default export */ __webpack_exports__["default"] = (_a11y_actions__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/a11y-actions/style.scss":
/*!*************************************!*\
  !*** ./src/a11y-actions/style.scss ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"actions": 0,
/******/ 			"./style-actions": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunka11y_buttons"] = self["webpackChunka11y_buttons"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["./style-actions"], function() { return __webpack_require__("./src/actions.js"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=actions.js.map