/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/*
	 * Multiple js files are hard to manage. A sophisticated web application usually has a large number
	 * of
	 * js files to include. The usage of `<script>` tags is not enough to handle this.
	 *
	 * Luckily, webpack is here to help. It compiles js files, including their dependencies, into a
	 * single
	 * js file. Webpack can do the same to css files and even image assets.
	    npm start
	 * or
	    webpack ./src.js bundle.js; open index.html
	 */

	var bear = __webpack_require__(1);
	bear.roar();


/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = {
	  roar: function() {
	    alert('awww..');
	  }
	};


/***/ }
/******/ ]);