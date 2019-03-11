(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/raw-loader/index.js!./node_modules/postcss-loader/lib/index.js?!./src/styles.css":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./node_modules/postcss-loader/lib??embedded!./src/styles.css ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* You can add global styles to this file, and also import other style files */\r\n@font-face {\r\n\tfont-family: \"Google Sans\";\r\n\tsrc: url('GoogleSans-Regular.woff') format(\"woff\");\r\n}\r\nbody, html {\r\n    width: 100%;\r\n    height: 100%;\r\n    font-family: 'Google Sans' !important;\r\n    /* background-color: #f5f5f5 !important;  */\r\n    background-color: #ffffff !important; \r\n}\r\nbody{\r\n    max-height: Calc(100% - 100px); /*Allows router-outlet components to fill reaming space, 100px is the nav height*/\r\n}\r\n/*Animations*/\r\n@-webkit-keyframes wave {\r\n    50% {\r\n      -webkit-transform: scale(0.9);\r\n              transform: scale(0.9);\r\n    }\r\n}\r\n@keyframes wave {\r\n    50% {\r\n      -webkit-transform: scale(0.9);\r\n              transform: scale(0.9);\r\n    }\r\n}\r\n@-webkit-keyframes inputHighlighter {\r\n    from { background:#5264AE; }\r\n  to \t{ width:0; background:transparent; }\r\n}\r\n@keyframes inputHighlighter {\r\n    from { background:#5264AE; }\r\n  to \t{ width:0; background:transparent; }\r\n}\r\n/*Custom Scrollbar */\r\n::-webkit-scrollbar {\r\n  width: 6px;\r\n  height: 6px;\r\n}\r\n::-webkit-scrollbar-button {\r\n  width: 0px;\r\n  height: 0px;\r\n}\r\n::-webkit-scrollbar-thumb {\r\n  background: var(--bg-ligher);\r\n}\r\n::-webkit-scrollbar-thumb:hover {\r\n  background: #ffffff;\r\n}\r\n::-webkit-scrollbar-thumb:active {\r\n  background: var(--bg-darker);\r\n}\r\n::-webkit-scrollbar-track {\r\n  background: #c0c0c0;\r\n  border: 0px none #ffffff;\r\n  border-radius: 0px;\r\n}\r\n::-webkit-scrollbar-track:hover {\r\n  background: #fff;\r\n}\r\n::-webkit-scrollbar-track:active {\r\n  background: var(--bg-ligher)\r\n}\r\n::-webkit-scrollbar-corner {\r\n  background: transparent;\r\n}\r\n/*End of Scrollbar*/\r\n/*We define the css variables in the body to be accesible from other elements*/\r\nbody{\r\n    --bg-darker: #33006b;\r\n    --bg-ligher: #993FCB;\r\n\r\n    --bg-gradient: linear-gradient(to right, #993FCB, #33006A);\r\n    --bg-gradient-alt: linear-gradient(to right, transparent, #993FCB);\r\n\r\n    --color-ppal: #8C37BE;\r\n\r\n    --bg-gray: #f7f7f7;\r\n}\r\nh2,h3,h5{\r\n    color: var(--color-ppal);\r\n    position: relative;\r\n}\r\n/* h2::after,h3::after{\r\n    content: '';\r\n    position: absolute;\r\n    bottom: -0.2rem;\r\n    left: 0;\r\n    border-bottom: 2px solid var(--color-ppal);\r\n    width: 100%;\r\n} */\r\n/*Buttons*/\r\n.btn{\r\n    border-radius: 0 !important; /*Overrides Bootstrap roundness*/\r\n    margin: 2px;\r\n}\r\n.btn-violet-primary{\r\n    background: var(--bg-gradient);\r\n    color: white !important;\r\n    width: -webkit-fit-content;\r\n    width: -moz-fit-content;\r\n    width: fit-content;\r\n}\r\n.btn-violet-secondary{\r\n    border:  1px solid var(--bg-darker);\r\n    background: white !important;\r\n    width: -webkit-fit-content;\r\n    width: -moz-fit-content;\r\n    width: fit-content;\r\n}\r\n/*Standard Inputs*/\r\n/* form starting stylings ------------------------------- */\r\n.text-input { \r\n    position:relative; \r\n    margin: 0.8em 0;\r\n}\r\n.text-input input {\r\n    font-size:18px;\r\n    padding:10px 10px 10px 5px;\r\n    display:block;\r\n    width:100%;\r\n    border:none;\r\n    border-bottom:1px solid #757575;\r\n}\r\n.text-input input:focus { outline:none; }\r\n/* LABEL ======================================= */\r\n.text-input label \t\t\t\t {\r\n    color:#999; \r\n    font-size: 1em;\r\n    font-weight:normal;\r\n    position:absolute;\r\n    pointer-events:none;\r\n    left:5px;\r\n    top:10px;\r\n    transition:0.2s ease all; \r\n    -moz-transition:0.2s ease all; \r\n    -webkit-transition:0.2s ease all;\r\n}\r\n/* active state */\r\n.text-input input:focus ~ label, .text-input input:valid ~ label \t\t{\r\n    top:-1.2em;\r\n    font-size:0.9em;\r\n    color: var(--color-ppal);\r\n}\r\n.text-input [class^=icon-]{\r\n    position: absolute;\r\n    font-size: 1.8em;\r\n    right: 0;\r\n    top: 2px;\r\n}\r\n/* BOTTOM BARS ================================= */\r\n.bar \t{ position:relative; display:block; width:100%; }\r\n.bar:before, .bar:after \t{\r\n    content:'';\r\n    height:2px; \r\n    width:0;\r\n    bottom:1px; \r\n    position:absolute;\r\n    background:var(--color-ppal);\r\n    transition:0.2s ease all; \r\n    -moz-transition:0.2s ease all; \r\n    -webkit-transition:0.2s ease all;\r\n}\r\n.bar:before {\r\n    left:50%;\r\n}\r\n.bar:after {\r\n    right:50%; \r\n}\r\n/* active state */\r\n.text-input input:focus ~ .bar:before, .text-input input:focus ~ .bar:after {\r\n    width:50%;\r\n}\r\n/* HIGHLIGHTER ================================== */\r\n.highlight {\r\n    position:absolute;\r\n    height:60%; \r\n    width:100px; \r\n    top:25%; \r\n    left:0;\r\n    pointer-events:none;\r\n    opacity:0.5;\r\n}\r\n/* active state */\r\ninput:focus ~ .highlight {\r\n-webkit-animation:inputHighlighter 0.3s ease;\r\nanimation:inputHighlighter 0.3s ease;\r\n}\r\n/*End of standard inputs*/\r\n/*Chebox*/\r\n.cbx {\r\n    margin: auto;\r\n    -webkit-user-select: none;\r\n    -moz-user-select: none;\r\n     -ms-user-select: none;\r\n         user-select: none;\r\n    cursor: pointer;\r\n}\r\n.cbx span {\r\n    display: inline-block;\r\n    vertical-align: middle;\r\n    -webkit-transform: translate3d(0, 0, 0);\r\n            transform: translate3d(0, 0, 0);\r\n}\r\n.cbx span:first-child {\r\n    position: relative;\r\n    width: 1em;\r\n    height: 1em;\r\n    -webkit-transform: scale(1);\r\n            transform: scale(1);\r\n    vertical-align: middle;\r\n    border: 1px solid #9098A9;\r\n    transition: all 0.2s ease;\r\n    }\r\n.cbx span:first-child svg {\r\n    position: absolute;\r\n    top: 0.15em;\r\n    left: 0.08em;\r\n    fill: none;\r\n    stroke: #FFFFFF;\r\n    stroke-width: 2;\r\n    stroke-linecap: round;\r\n    stroke-linejoin: round;\r\n    stroke-dasharray: 16px;\r\n    stroke-dashoffset: 16px;\r\n    transition: all 0.3s ease;\r\n    transition-delay: 0.1s;\r\n    -webkit-transform: translate3d(0, 0, 0);\r\n            transform: translate3d(0, 0, 0);\r\n}\r\n.cbx span:first-child:before {\r\n    content: \"\";\r\n    width: 100%;\r\n    height: 100%;\r\n    background: var(--bg-ligher);\r\n    display: block;\r\n    -webkit-transform: scale(0);\r\n            transform: scale(0);\r\n    opacity: 1;\r\n    border-radius: 50%;\r\n}\r\n.cbx span:last-child {\r\n    padding-left: 8px;\r\n}\r\n.cbx:hover span:first-child {\r\n    border-color: #506EEC;\r\n}\r\n.inp-cbx:checked + .cbx span:first-child {\r\n    background: var(--bg-darker);    \r\n    border-color: var(--bg-darker);   \r\n    -webkit-animation: wave 0.4s ease;   \r\n            animation: wave 0.4s ease;\r\n}\r\n.inp-cbx:checked + .cbx span:first-child svg {\r\n    stroke-dashoffset: 0;   \r\n}\r\n.inp-cbx:checked + .cbx span:first-child:before {\r\n    -webkit-transform: scale(3.5);\r\n            transform: scale(3.5);\r\n    opacity: 0;\r\n    transition: all 0.6s ease;\r\n}\r\n/*End of Checkbox*/\r\n/*Toggle Stitch*/\r\n.switch {\r\n    display: inline-block;\r\n    height: 1.8em;\r\n    position: relative;\r\n    width: 3em;\r\n    margin: 0;\r\n}\r\n.switch input {\r\n    display:none;\r\n}\r\n.slider {\r\n    background: #ccc !important;\r\n    bottom: 0;\r\n    cursor: pointer;\r\n    left: 0;\r\n    position: absolute;\r\n    right: 0;\r\n    top: 0;\r\n    transition: .4s;\r\n}\r\n.slider:before {\r\n    left: 0.2em;\r\n    top: 0.2em;\r\n    position: absolute;\r\n    transition: .4s;\r\n    width: 100%;\r\n}\r\ninput:checked + .slider {\r\n    background: var(--bg-darker) !important;\r\n}\r\ninput:checked + .slider:before {\r\n    -webkit-transform: translateX(1.2em);\r\n            transform: translateX(1.2em);\r\n}\r\n.slider.hex {\r\n    position: absolute;\r\n    --hex-shape: polygon(12% 0%, 88% 0%, 100% 50%, 88% 100%, 12% 100%, 0% 50%);\r\n}\r\n.slider.hex:before {\r\n    --hex-shape: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);\r\n    width: 1em;\r\n    height: 1em;\r\n}\r\n/*End of Switch*/\r\n/*____________________SHAPES________________________*/\r\n/*Basic Hexagon*/\r\n.hex {\r\n    --hex-shape: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);\r\n\r\n    position: relative;\r\n    height: Calc(0.875 * var(--hex-width));\r\n    width: var(--hex-width);\r\n    color: var(--color-ppal);\r\n    background: var(--bg-gradient);\r\n    -webkit-clip-path: var(--hex-shape);\r\n    clip-path: var(--hex-shape);\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    transition: .25s;\r\n    margin: 0.2em;\r\n}\r\n.hex::before {\r\n    position: absolute;\r\n    width: Calc(100% - 3px);\r\n    height: Calc(100% - 3px);\r\n    z-index: -2;\r\n    bottom: 1.5px;\r\n    content: '';\r\n    background: white;\r\n    -webkit-clip-path: var(--hex-shape);\r\n    clip-path: var(--hex-shape);\r\n}\r\n/*Long hexagon*/\r\n.hex-big-item{\r\n    --hex-width: 34em;\r\n    --hex-shape: polygon(7% 0%, 93% 0%, 100% 50%, 93% 100%, 7% 100%, 0% 50%);\r\n    height: Calc(0.22 * var(--hex-width));\r\n    background: #B960EB;\r\n    color: white;\r\n    transition: 0.3s;\r\n}\r\n.hex-big-item:hover{\r\n    -webkit-transform: scale(1.04,1.04);\r\n            transform: scale(1.04,1.04);\r\n}\r\n.hex-big-item::before{\r\n    content: none;\r\n}\r\n.hex-big-item .hex-big-item{\r\n    width: Calc(100% - 20px);\r\n    height: Calc(100% - 20px);\r\n    --hex-shape: polygon(7% -4%, 93% -4%, 100% 50%, 93% 104%, 7% 104%, 0% 50%);\r\n    background: white;\r\n    color: var(--color-ppal);\r\n    position: initial;\r\n}\r\n.hex-big-item .hex-big-item:hover{\r\n    -webkit-transform: none;\r\n            transform: none;\r\n    color: white;\r\n}\r\n.hex-big-item .hex{\r\n    --hex-width: 118px;\r\n    margin: 0;\r\n    color: white;\r\n}\r\n.hex-big-item .hex-big-item .hex::before{\r\n    content: none;\r\n}\r\n.hex-big-item .hex-big-item .item-content{\r\n    color: var(--color-ppal);\r\n    margin-left: 10%;\r\n}\r\n.item-content h3{\r\n    margin-bottom: 0;\r\n}\r\n.hex-big-add::before{\r\n    content: '' !important;\r\n}\r\n.hex-big-add span{\r\n    color: var(--color-ppal);\r\n    font-size: 5em;\r\n    font-weight: 100;\r\n}\r\n.hex-big-item .icon-options{\r\n    top : -2px;\r\n    right: -2px;\r\n}\r\n.icon-options{\r\n    z-index: 200;\r\n}\r\n/*Other Shapes (elements needs to inherit hex class)*/\r\n.btn-hex-left, .btn-hex-right{\r\n    min-width: 10rem;\r\n    min-height: 1rem;\r\n    font-size: 1.2em;\r\n    justify-content: flex-start;\r\n}\r\n.btn-hex-left:hover::before, .btn-hex-right:hover::before{\r\n    background: transparent;\r\n}\r\n.btn-hex-left:hover, .btn-hex-right:hover{\r\n    color: white;\r\n}\r\n.btn-hex-right{\r\n    --hex-shape: polygon(10% 0%, 90% 0%, 80% 50%, 90% 100%, 10% 100%, 0% 50%);\r\n}\r\n.btn-hex-right span{\r\n    margin-left: 0.8em;\r\n}\r\n.btn-hex-right::before{\r\n    --hex-shape: polygon(10% 0%, 90% 0%, 80% 50%, 90% 100%, 10% 100%, 1% 50%);\r\n    transition: .25s;\r\n}\r\n.btn-hex-left{\r\n    --hex-shape: polygon(10% 0%, 90% 0%, 100% 50%, 90% 100%, 10% 100%, 20% 50%);\r\n}\r\n.btn-hex-left span{\r\n    margin-right: 0.8em;\r\n}\r\n.btn-hex-left::before{\r\n    --hex-shape: polygon(10% 0%, 91% 0%, 100% 50%, 91% 100%, 10% 100%, 20% 50%);\r\n}\r\n/*__________________________________________________*/\r\n/*__________________________________________________*/\r\n.hex-container{\r\n    width: auto;\r\n    flex-flow: row wrap;\r\n}\r\n@media (min-width: 1200px) {\r\n    .hex-container > :nth-child(even){\r\n        top: 4em;\r\n        left: -1.2em;\r\n    }\r\n    .hex-container > :nth-child(odd){\r\n        right: -1.2em;\r\n    }\r\n}\r\n@media (max-width: 1200px) {\r\n    .hex-container{\r\n        justify-content: center;\r\n    }\r\n    .hex-big-item{\r\n        max-width: 80vw;\r\n    }\r\n    .hex-big-item .hex-big-item{\r\n        max-width: none;\r\n    }\r\n}\r\n/*__________________________________________________*/\r\n[class^=\"icon-\"]{\r\n    color: var(--color-ppal);\r\n    z-index: 2;\r\n}\r\n/*__________________________________________________*/\r\n.table{\r\n    background-color: white;\r\n    border: 3px solid #993FCB;\r\n}\r\n.table2{\r\n    height: 100px;\r\n    overflow-y: auto; \r\n}"

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target) {
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/raw-loader!../node_modules/postcss-loader/lib??embedded!./styles.css */ "./node_modules/raw-loader/index.js!./node_modules/postcss-loader/lib/index.js?!./src/styles.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 2:
/*!******************************!*\
  !*** multi ./src/styles.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\marco\Desktop\1. Desarrollo de Experiencias Multimedia para la WEB\Proyecto Final\TeacherAdminApp\src\styles.css */"./src/styles.css");


/***/ })

},[[2,"runtime"]]]);
//# sourceMappingURL=styles.js.map