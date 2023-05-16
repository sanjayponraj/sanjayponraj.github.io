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
              display: 'flex',
              alignItems: 'center',
              color: "white"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvSGVyby9IZXJvLmpzIl0sIm5hbWVzIjpbImhhbmRsZUNsaWNrIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJDb250YWN0cyIsIkhlcm8iLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsImNvbG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLElBQU1BLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNDLENBQUQsRUFBTztBQUN6QkMsU0FBTyxDQUFDQyxHQUFSLENBQVksY0FBWjtBQUNBQyxRQUFNLENBQUNDLFFBQVAsQ0FBZ0JDLElBQWhCLEdBQXFCQywrREFBckI7QUFDRCxDQUhEOztBQUlBLElBQU1DLElBQUksR0FBRyxTQUFQQSxJQUFPO0FBQUEsc0JBQ1g7QUFBQSwyQkFDRSw4REFBQyw2REFBRDtBQUFTLFNBQUcsTUFBWjtBQUFhLGVBQVMsTUFBdEI7QUFBQSw2QkFDRSw4REFBQyxvREFBRDtBQUFBLGdDQUNFLDhEQUFDLGtFQUFEO0FBQWMsY0FBSSxNQUFsQjtBQUFtQixnQkFBTSxNQUF6QjtBQUFBLGtEQUNjO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRGQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBS0UsOERBQUMsaUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBTEYsZUFRRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVJGLGVBU0UsOERBQUMsaUVBQUQ7QUFBQSxpQ0FDRTtBQUFHLGdCQUFJLEVBQUdELCtEQUFWO0FBQXlCLGlCQUFLLEVBQUU7QUFBRUUscUJBQU8sRUFBRSxNQUFYO0FBQW1CQyx3QkFBVSxFQUFFLFFBQS9CO0FBQXlDQyxtQkFBSyxFQUFDO0FBQS9DLGFBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFURjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsbUJBRFc7QUFBQSxDQUFiOztLQUFNSCxJO0FBb0JOLCtEQUFlQSxJQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjlmNjdkNDg0YmMyMzA3ZWNhYzZkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgU2VjdGlvbiwgU2VjdGlvblRleHQsIFNlY3Rpb25UaXRsZSB9IGZyb20gJy4uLy4uL3N0eWxlcy9HbG9iYWxDb21wb25lbnRzJztcbmltcG9ydCB7IExlZnRTZWN0aW9uIH0gZnJvbSAnLi9IZXJvU3R5bGVzJztcbmltcG9ydCB7IFNvY2lhbEljb25zIH0gZnJvbSAnLi4vSGVhZGVyL0hlYWRlclN0eWxlcyc7XG5pbXBvcnQgeyBDb250YWN0cyB9IGZyb20gJy4uLy4uL2NvbnN0YW50cy9jb25zdGFudHMnO1xuaW1wb3J0IHsgQWlGaWxsTWFpbCwgQWlGaWxsTGlua2VkaW4gfSBmcm9tICdyZWFjdC1pY29ucy9haSc7XG5jb25zdCBoYW5kbGVDbGljayA9IChlKSA9PiB7XG4gIGNvbnNvbGUubG9nKCdPcGVuaW5nIE1haWwnKTtcbiAgd2luZG93LmxvY2F0aW9uLmhyZWY9Q29udGFjdHMubWFpbDtcbn1cbmNvbnN0IEhlcm8gPSAoKSA9PiAoXG4gIDw+XG4gICAgPFNlY3Rpb24gcm93IG5vcGFkZGluZz5cbiAgICAgIDxMZWZ0U2VjdGlvbj5cbiAgICAgICAgPFNlY3Rpb25UaXRsZSBtYWluIGNlbnRlcj5cbiAgICAgICAgICBIZWxsbywgSSBhbSA8YnIgLz5cbiAgICAgICAgIFNhbmpheSBQb25yYWpcbiAgICAgICAgPC9TZWN0aW9uVGl0bGU+XG4gICAgICAgIDxTZWN0aW9uVGV4dD5cbiAgICAgICAgQSBGcm9udC1lbmQgRGV2ZWxvcGVyIGJhc2VkIGluIENoZW5uYWksIEluZGlhIHNwZWNpYWxpemluZyBpbiBjcmVhdGluZyBjYXB0aXZhdGluZyB1c2VyIGV4cGVyaWVuY2VzLiBXaXRoIGV4cGVydGlzZSBpbiBsYXRlc3QgZnJvbnQtZW5kIHRlY2hub2xvaWVzLCBJIGJyaW5nIGRlc2lnbnMgdG8gbGlmZSB3aXRoIHNlYW1sZXNzIGZ1bmN0aW9uYWxpdHkuXG4gICAgICAgIDwvU2VjdGlvblRleHQ+XG4gICAgICAgIDxici8+XG4gICAgICAgIDxTZWN0aW9uVGV4dD5cbiAgICAgICAgICA8YSBocmVmPSB7Q29udGFjdHMubWFpbH0gc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBhbGlnbkl0ZW1zOiAnY2VudGVyJywgY29sb3I6XCJ3aGl0ZVwiIH19PiBHZXQgaW4gdG91Y2ghPC9hPlxuICAgICAgICA8L1NlY3Rpb25UZXh0PlxuICAgICAgPC9MZWZ0U2VjdGlvbj5cbiAgICA8L1NlY3Rpb24+XG4gIDwvPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgSGVybzsiXSwic291cmNlUm9vdCI6IiJ9