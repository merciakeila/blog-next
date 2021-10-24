"use strict";
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_global_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/global-styles */ "./src/styles/global-styles.ts");
/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/theme */ "./src/styles/theme.ts");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\mercia.pereira\\Desktop\\Projetos\\blog-next\\src\\pages\\_app.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






function MyApp({
  Component,
  pageProps
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(styled_components__WEBPACK_IMPORTED_MODULE_0__.ThemeProvider, {
    theme: _styles_theme__WEBPACK_IMPORTED_MODULE_2__.theme,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_styles_global_styles__WEBPACK_IMPORTED_MODULE_1__.GlobalStyle, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 5
  }, this);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);

/***/ }),

/***/ "./src/styles/global-styles.ts":
/*!*************************************!*\
  !*** ./src/styles/global-styles.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GlobalStyle": () => (/* binding */ GlobalStyle)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const GlobalStyle = (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.createGlobalStyle)(["html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline;}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block;}body{line-height:1;}ol,ul{list-style:none;}blockquote,q{quotes:none;}blockquote:before,blockquote:after,q:before,q:after{content:'';content:none;}table{border-collapse:collapse;border-spacing:0;}button{cursor:pointer;}html{font-size:62.5%;}body{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen,Ubuntu,Cantarell,'Open Sans','Helvetica Neue',sans-serif;font-size:", "}a{color:", ";text-decoration:none;transition:opacity 300ms ease-in-out;&:hover{opacity:.6;}}"], ({
  theme
}) => theme.font.sizes.medium, ({
  theme
}) => theme.colors.secondary);

/***/ }),

/***/ "./src/styles/theme.ts":
/*!*****************************!*\
  !*** ./src/styles/theme.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "theme": () => (/* binding */ theme)
/* harmony export */ });
const theme = {
  colors: {
    primary: '#010101',
    secondary: '#005b96',
    white: '#fafafa',
    lightGray: '#dddddd',
    gray: '#999999',
    darkGray: '#333333'
  },
  spacings: {
    small: '1rem',
    medium: '2rem',
    large: '3rem'
  },
  font: {
    sizes: {
      small: '1.2rem',
      medium: '1.8rem',
      large: '2rem',
      superLarge: '5rem'
    }
  }
};

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("styled-components");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.tsx"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvX2FwcC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBOzs7QUFFQSxTQUFTRyxLQUFULENBQWU7QUFBRUMsRUFBQUEsU0FBRjtBQUFhQyxFQUFBQTtBQUFiLENBQWYsRUFBbUQ7QUFDakQsc0JBQ0UsOERBQUMsNERBQUQ7QUFBZSxTQUFLLEVBQUVILGdEQUF0QjtBQUFBLDRCQUNFLDhEQUFDLFNBQUQsb0JBQWVHLFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBRUUsOERBQUMsOERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBTUQ7O0FBRUQsaUVBQWVGLEtBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkQTtBQUVPLE1BQU1GLFdBQVcsR0FBR0ssb0VBQUgsK2lDQXFEUCxDQUFDO0FBQUVKLEVBQUFBO0FBQUYsQ0FBRCxLQUFlQSxLQUFLLENBQUNLLElBQU4sQ0FBV0MsS0FBWCxDQUFpQkMsTUFyRHpCLEVBd0RYLENBQUM7QUFBRVAsRUFBQUE7QUFBRixDQUFELEtBQWVBLEtBQUssQ0FBQ1EsTUFBTixDQUFhQyxTQXhEakIsQ0FBakI7Ozs7Ozs7Ozs7Ozs7O0FDRkEsTUFBTVQsS0FBSyxHQUFHO0FBQ25CUSxFQUFBQSxNQUFNLEVBQUU7QUFDTkUsSUFBQUEsT0FBTyxFQUFFLFNBREg7QUFFTkQsSUFBQUEsU0FBUyxFQUFFLFNBRkw7QUFHTkUsSUFBQUEsS0FBSyxFQUFFLFNBSEQ7QUFJTkMsSUFBQUEsU0FBUyxFQUFFLFNBSkw7QUFLTkMsSUFBQUEsSUFBSSxFQUFFLFNBTEE7QUFNTkMsSUFBQUEsUUFBUSxFQUFFO0FBTkosR0FEVztBQVNuQkMsRUFBQUEsUUFBUSxFQUFFO0FBQ1JDLElBQUFBLEtBQUssRUFBRSxNQURDO0FBRVJULElBQUFBLE1BQU0sRUFBRSxNQUZBO0FBR1JVLElBQUFBLEtBQUssRUFBRTtBQUhDLEdBVFM7QUFjbkJaLEVBQUFBLElBQUksRUFBRTtBQUNKQyxJQUFBQSxLQUFLLEVBQUU7QUFDTFUsTUFBQUEsS0FBSyxFQUFFLFFBREY7QUFFTFQsTUFBQUEsTUFBTSxFQUFFLFFBRkg7QUFHTFUsTUFBQUEsS0FBSyxFQUFFLE1BSEY7QUFJTEMsTUFBQUEsVUFBVSxFQUFFO0FBSlA7QUFESDtBQWRhLENBQWQ7Ozs7Ozs7Ozs7QUNBUDs7Ozs7Ozs7OztBQ0FBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmxvZy1uZXh0Ly4vc3JjL3BhZ2VzL19hcHAudHN4Iiwid2VicGFjazovL2Jsb2ctbmV4dC8uL3NyYy9zdHlsZXMvZ2xvYmFsLXN0eWxlcy50cyIsIndlYnBhY2s6Ly9ibG9nLW5leHQvLi9zcmMvc3R5bGVzL3RoZW1lLnRzIiwid2VicGFjazovL2Jsb2ctbmV4dC9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovL2Jsb2ctbmV4dC9leHRlcm5hbCBcInN0eWxlZC1jb21wb25lbnRzXCIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUHJvcHMgfSBmcm9tICduZXh0L2FwcCc7XHJcbmltcG9ydCB7IFRoZW1lUHJvdmlkZXIgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCB7IEdsb2JhbFN0eWxlIH0gZnJvbSAnLi4vc3R5bGVzL2dsb2JhbC1zdHlsZXMnO1xyXG5pbXBvcnQgeyB0aGVtZSB9IGZyb20gJy4uL3N0eWxlcy90aGVtZSc7XHJcblxyXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH06IEFwcFByb3BzKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxUaGVtZVByb3ZpZGVyIHRoZW1lPXt0aGVtZX0+XHJcbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuICAgICAgPEdsb2JhbFN0eWxlIC8+XHJcbiAgICA8L1RoZW1lUHJvdmlkZXI+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XHJcbiIsImltcG9ydCB7IGNyZWF0ZUdsb2JhbFN0eWxlIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEdsb2JhbFN0eWxlID0gY3JlYXRlR2xvYmFsU3R5bGVgXHJcbmh0bWwsIGJvZHksIGRpdiwgc3BhbiwgYXBwbGV0LCBvYmplY3QsIGlmcmFtZSxcclxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgYmxvY2txdW90ZSwgcHJlLFxyXG5hLCBhYmJyLCBhY3JvbnltLCBhZGRyZXNzLCBiaWcsIGNpdGUsIGNvZGUsXHJcbmRlbCwgZGZuLCBlbSwgaW1nLCBpbnMsIGtiZCwgcSwgcywgc2FtcCxcclxuc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhcixcclxuYiwgdSwgaSwgY2VudGVyLFxyXG5kbCwgZHQsIGRkLCBvbCwgdWwsIGxpLFxyXG5maWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCxcclxudGFibGUsIGNhcHRpb24sIHRib2R5LCB0Zm9vdCwgdGhlYWQsIHRyLCB0aCwgdGQsXHJcbmFydGljbGUsIGFzaWRlLCBjYW52YXMsIGRldGFpbHMsIGVtYmVkLFxyXG5maWd1cmUsIGZpZ2NhcHRpb24sIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsXHJcbm1lbnUsIG5hdiwgb3V0cHV0LCBydWJ5LCBzZWN0aW9uLCBzdW1tYXJ5LFxyXG50aW1lLCBtYXJrLCBhdWRpbywgdmlkZW8ge1xyXG5cdG1hcmdpbjogMDtcclxuXHRwYWRkaW5nOiAwO1xyXG5cdGJvcmRlcjogMDtcclxuXHRmb250LXNpemU6IDEwMCU7XHJcblx0Zm9udDogaW5oZXJpdDtcclxuXHR2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XHJcbn1cclxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xyXG5hcnRpY2xlLCBhc2lkZSwgZGV0YWlscywgZmlnY2FwdGlvbiwgZmlndXJlLFxyXG5mb290ZXIsIGhlYWRlciwgaGdyb3VwLCBtZW51LCBuYXYsIHNlY3Rpb24ge1xyXG5cdGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcbmJvZHkge1xyXG5cdGxpbmUtaGVpZ2h0OiAxO1xyXG59XHJcbm9sLCB1bCB7XHJcblx0bGlzdC1zdHlsZTogbm9uZTtcclxufVxyXG5ibG9ja3F1b3RlLCBxIHtcclxuXHRxdW90ZXM6IG5vbmU7XHJcbn1cclxuYmxvY2txdW90ZTpiZWZvcmUsIGJsb2NrcXVvdGU6YWZ0ZXIsXHJcbnE6YmVmb3JlLCBxOmFmdGVyIHtcclxuXHRjb250ZW50OiAnJztcclxuXHRjb250ZW50OiBub25lO1xyXG59XHJcbnRhYmxlIHtcclxuXHRib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG5cdGJvcmRlci1zcGFjaW5nOiAwO1xyXG59XHJcbmJ1dHRvbiB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4gaHRtbCB7XHJcbiAgICBmb250LXNpemU6IDYyLjUlO1xyXG4gIH1cclxuICBib2R5IHtcclxuICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuZm9udC5zaXplcy5tZWRpdW19XHJcbiAgfVxyXG4gIGEge1xyXG4gICAgY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLnNlY29uZGFyeX07XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDMwMG1zIGVhc2UtaW4tb3V0O1xyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIG9wYWNpdHk6IC42O1xyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuIiwiZXhwb3J0IGNvbnN0IHRoZW1lID0ge1xuICBjb2xvcnM6IHtcbiAgICBwcmltYXJ5OiAnIzAxMDEwMScsXG4gICAgc2Vjb25kYXJ5OiAnIzAwNWI5NicsXG4gICAgd2hpdGU6ICcjZmFmYWZhJyxcbiAgICBsaWdodEdyYXk6ICcjZGRkZGRkJyxcbiAgICBncmF5OiAnIzk5OTk5OScsXG4gICAgZGFya0dyYXk6ICcjMzMzMzMzJyxcbiAgfSxcbiAgc3BhY2luZ3M6IHtcbiAgICBzbWFsbDogJzFyZW0nLFxuICAgIG1lZGl1bTogJzJyZW0nLFxuICAgIGxhcmdlOiAnM3JlbScsXG4gIH0sXG4gIGZvbnQ6IHtcbiAgICBzaXplczoge1xuICAgICAgc21hbGw6ICcxLjJyZW0nLFxuICAgICAgbWVkaXVtOiAnMS44cmVtJyxcbiAgICAgIGxhcmdlOiAnMnJlbScsXG4gICAgICBzdXBlckxhcmdlOiAnNXJlbScsXG4gICAgfSxcbiAgfSxcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWNvbXBvbmVudHNcIik7Il0sIm5hbWVzIjpbIlRoZW1lUHJvdmlkZXIiLCJHbG9iYWxTdHlsZSIsInRoZW1lIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJjcmVhdGVHbG9iYWxTdHlsZSIsImZvbnQiLCJzaXplcyIsIm1lZGl1bSIsImNvbG9ycyIsInNlY29uZGFyeSIsInByaW1hcnkiLCJ3aGl0ZSIsImxpZ2h0R3JheSIsImdyYXkiLCJkYXJrR3JheSIsInNwYWNpbmdzIiwic21hbGwiLCJsYXJnZSIsInN1cGVyTGFyZ2UiXSwic291cmNlUm9vdCI6IiJ9