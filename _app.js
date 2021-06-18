(function() {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 9700:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _createMuiTheme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5488);

var defaultTheme = (0,_createMuiTheme__WEBPACK_IMPORTED_MODULE_0__/* .default */ .Z)();
/* harmony default export */ __webpack_exports__["Z"] = (defaultTheme);

/***/ }),

/***/ 2543:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2122);
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4047);
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_styles__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _defaultTheme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9700);




function withStyles(stylesOrCreator, options) {
  return (0,_material_ui_styles__WEBPACK_IMPORTED_MODULE_0__.withStyles)(stylesOrCreator, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z)({
    defaultTheme: _defaultTheme__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z
  }, options));
}

/* harmony default export */ __webpack_exports__["Z"] = (withStyles);

/***/ }),

/***/ 4378:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ MyApp; }
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
;// CONCATENATED MODULE: external "next/head"
var head_namespaceObject = require("next/head");;
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
// EXTERNAL MODULE: external "@material-ui/styles"
var styles_ = __webpack_require__(4047);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/CssBaseline/CssBaseline.js
var CssBaseline = __webpack_require__(5834);
// EXTERNAL MODULE: ./src/theme.js
var theme = __webpack_require__(7067);
;// CONCATENATED MODULE: ./pages/_app.js
var __jsx = (external_react_default()).createElement;





function MyApp(props) {
  const {
    Component,
    pageProps
  } = props;
  external_react_default().useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');

    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);
  return __jsx((external_react_default()).Fragment, null, __jsx((head_default()), null, __jsx("title", null, "..:: Chile Regi\xF3n ::.."), __jsx("meta", {
    charSet: "utf-8"
  }), __jsx("meta", {
    name: "viewport",
    content: "minimum-scale=1, initial-scale=1, width=device-width"
  })), __jsx(styles_.ThemeProvider, {
    theme: theme/* default */.Z
  }, __jsx(CssBaseline/* default */.ZP, null), __jsx(Component, pageProps)));
}

/***/ }),

/***/ 7067:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5488);
/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(907);

 // Create a theme instance.

const theme = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__/* .default */ .Z)({
  palette: {
    primary: {
      main: '#556cd6'
    },
    secondary: {
      main: '#19857b'
    },
    error: {
      main: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_1__/* .default.A400 */ .Z.A400
    },
    background: {
      default: '#fff'
    }
  }
});
/* harmony default export */ __webpack_exports__["Z"] = (theme);

/***/ }),

/***/ 4047:
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/styles");;

/***/ }),

/***/ 9137:
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/system");;

/***/ }),

/***/ 2958:
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/utils");;

/***/ }),

/***/ 4229:
/***/ (function(module) {

"use strict";
module.exports = require("prop-types");;

/***/ }),

/***/ 9297:
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [488,834], function() { return __webpack_exec__(4378); });
module.exports = __webpack_exports__;

})();