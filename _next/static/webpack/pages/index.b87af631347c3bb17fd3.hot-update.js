self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/Hero/Hero.js":
/*!*************************************!*\
  !*** ./src/components/Hero/Hero.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/GlobalComponents */ "./src/styles/GlobalComponents/index.js");
/* harmony import */ var _HeroStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./HeroStyles */ "./src/components/Hero/HeroStyles.js");
/* harmony import */ var _Header_HeaderStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Header/HeaderStyles */ "./src/components/Header/HeaderStyles.js");
/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../constants/constants */ "./src/constants/constants.js");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "D:\\sanjayponraj.github.io\\src\\components\\Hero\\Hero.js",
    _this = undefined;








var handleClick = function handleClick(e) {
  console.log('Opening Mail');
  window.location.href = _constants_constants__WEBPACK_IMPORTED_MODULE_5__.Contacts.mail;
};

var Hero = function Hero() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_2__.Section, {
      row: true,
      nopadding: true,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_HeroStyles__WEBPACK_IMPORTED_MODULE_3__.LeftSection, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_2__.SectionTitle, {
          main: true,
          center: true,
          children: ["Hello, I am ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 16,
            columnNumber: 23
          }, _this), "Sanjay Ponraj"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 9
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_2__.SectionText, {
          children: "A Front-end Developer based in Chennai, India specializing in creating captivating user experiences. With expertise in latest front-end technoloies, I bring designs to life with seamless functionality."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 9
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 9
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_2__.SectionText, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            href: _constants_constants__WEBPACK_IMPORTED_MODULE_5__.Contacts.mail,
            style: {
              backgrouundColor: "red",
              color: 'white',
              padding: '15px 25px',
              textDecoration: 'none'
            },
            children: " Get in touch!"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 24,
            columnNumber: 11
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 9
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 7
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 5
    }, _this)
  }, void 0, false);
};

_c = Hero;
/* harmony default export */ __webpack_exports__["default"] = (Hero);

var _c;

$RefreshReg$(_c, "Hero");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvSGVyby9IZXJvLmpzIl0sIm5hbWVzIjpbImhhbmRsZUNsaWNrIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJDb250YWN0cyIsIkhlcm8iLCJiYWNrZ3JvdXVuZENvbG9yIiwiY29sb3IiLCJwYWRkaW5nIiwidGV4dERlY29yYXRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsSUFBTUEsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ0MsQ0FBRCxFQUFPO0FBQ3pCQyxTQUFPLENBQUNDLEdBQVIsQ0FBWSxjQUFaO0FBQ0FDLFFBQU0sQ0FBQ0MsUUFBUCxDQUFnQkMsSUFBaEIsR0FBcUJDLCtEQUFyQjtBQUNELENBSEQ7O0FBSUEsSUFBTUMsSUFBSSxHQUFHLFNBQVBBLElBQU87QUFBQSxzQkFDWDtBQUFBLDJCQUNFLDhEQUFDLDZEQUFEO0FBQVMsU0FBRyxNQUFaO0FBQWEsZUFBUyxNQUF0QjtBQUFBLDZCQUNFLDhEQUFDLG9EQUFEO0FBQUEsZ0NBQ0UsOERBQUMsa0VBQUQ7QUFBYyxjQUFJLE1BQWxCO0FBQW1CLGdCQUFNLE1BQXpCO0FBQUEsa0RBQ2M7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFEZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFLRSw4REFBQyxpRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFMRixlQVFFO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBUkYsZUFTRSw4REFBQyxpRUFBRDtBQUFBLGlDQUNFO0FBQUcsZ0JBQUksRUFBR0QsK0RBQVY7QUFBeUIsaUJBQUssRUFBRTtBQUFFRSw4QkFBZ0IsRUFBQyxLQUFuQjtBQUEwQkMsbUJBQUssRUFBRSxPQUFqQztBQUN4Q0MscUJBQU8sRUFBRSxXQUQrQjtBQUV4Q0MsNEJBQWMsRUFBRTtBQUZ3QixhQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBVEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLG1CQURXO0FBQUEsQ0FBYjs7S0FBTUosSTtBQXNCTiwrREFBZUEsSUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5iODdhZjYzMTM0N2MzYmIxN2ZkMy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFNlY3Rpb24sIFNlY3Rpb25UZXh0LCBTZWN0aW9uVGl0bGUgfSBmcm9tICcuLi8uLi9zdHlsZXMvR2xvYmFsQ29tcG9uZW50cyc7XG5pbXBvcnQgeyBMZWZ0U2VjdGlvbiB9IGZyb20gJy4vSGVyb1N0eWxlcyc7XG5pbXBvcnQgeyBTb2NpYWxJY29ucyB9IGZyb20gJy4uL0hlYWRlci9IZWFkZXJTdHlsZXMnO1xuaW1wb3J0IHsgQ29udGFjdHMgfSBmcm9tICcuLi8uLi9jb25zdGFudHMvY29uc3RhbnRzJztcbmltcG9ydCB7IEFpRmlsbE1haWwsIEFpRmlsbExpbmtlZGluIH0gZnJvbSAncmVhY3QtaWNvbnMvYWknO1xuY29uc3QgaGFuZGxlQ2xpY2sgPSAoZSkgPT4ge1xuICBjb25zb2xlLmxvZygnT3BlbmluZyBNYWlsJyk7XG4gIHdpbmRvdy5sb2NhdGlvbi5ocmVmPUNvbnRhY3RzLm1haWw7XG59XG5jb25zdCBIZXJvID0gKCkgPT4gKFxuICA8PlxuICAgIDxTZWN0aW9uIHJvdyBub3BhZGRpbmc+XG4gICAgICA8TGVmdFNlY3Rpb24+XG4gICAgICAgIDxTZWN0aW9uVGl0bGUgbWFpbiBjZW50ZXI+XG4gICAgICAgICAgSGVsbG8sIEkgYW0gPGJyIC8+XG4gICAgICAgICBTYW5qYXkgUG9ucmFqXG4gICAgICAgIDwvU2VjdGlvblRpdGxlPlxuICAgICAgICA8U2VjdGlvblRleHQ+XG4gICAgICAgIEEgRnJvbnQtZW5kIERldmVsb3BlciBiYXNlZCBpbiBDaGVubmFpLCBJbmRpYSBzcGVjaWFsaXppbmcgaW4gY3JlYXRpbmcgY2FwdGl2YXRpbmcgdXNlciBleHBlcmllbmNlcy4gV2l0aCBleHBlcnRpc2UgaW4gbGF0ZXN0IGZyb250LWVuZCB0ZWNobm9sb2llcywgSSBicmluZyBkZXNpZ25zIHRvIGxpZmUgd2l0aCBzZWFtbGVzcyBmdW5jdGlvbmFsaXR5LlxuICAgICAgICA8L1NlY3Rpb25UZXh0PlxuICAgICAgICA8YnIvPlxuICAgICAgICA8U2VjdGlvblRleHQ+XG4gICAgICAgICAgPGEgaHJlZj0ge0NvbnRhY3RzLm1haWx9IHN0eWxlPXt7IGJhY2tncm91dW5kQ29sb3I6XCJyZWRcIiwgY29sb3I6ICd3aGl0ZScsXG4gIHBhZGRpbmc6ICcxNXB4IDI1cHgnLFxuICB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnIH19PiBHZXQgaW4gdG91Y2ghPC9hPlxuICAgICAgICA8L1NlY3Rpb25UZXh0PlxuICAgICAgPC9MZWZ0U2VjdGlvbj5cbiAgICA8L1NlY3Rpb24+XG4gIDwvPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgSGVybzsiXSwic291cmNlUm9vdCI6IiJ9