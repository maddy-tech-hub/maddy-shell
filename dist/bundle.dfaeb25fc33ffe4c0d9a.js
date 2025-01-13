"use strict";
(self["webpackChunkmaddy_shell"] = self["webpackChunkmaddy_shell"] || []).push([["src_pages_Home_tsx"],{

/***/ "./src/pages/Home.tsx":
/*!****************************!*\
  !*** ./src/pages/Home.tsx ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-intl */ "webpack/sharing/consume/default/react-intl/react-intl");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "webpack/sharing/consume/default/react-redux/react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_profile_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/profile.png */ "./src/assets/profile.png");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

var _s2 = __webpack_require__.$Refresh$.signature();
var _s = __webpack_require__.$Refresh$.signature();





// Lazy load the Profile component

const Profile = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().lazy(_c = () => __webpack_require__.e(/*! import() */ "webpack_container_remote_maddy_widget_Profile").then(__webpack_require__.t.bind(__webpack_require__, /*! maddy_widget/Profile */ "webpack/container/remote/maddy_widget/Profile", 23)));
_c2 = Profile;
const Home = () => {
  _s2();
  _s();
  const intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_1__.useIntl)();
  const {
    siteTitle,
    socialLinks
  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(state => state.contactDetailsSlice);
  const profileData = {
    profileImage: _assets_profile_png__WEBPACK_IMPORTED_MODULE_3__,
    siteTitle: siteTitle,
    socialLinks: socialLinks,
    profileText: {
      greeting: intl.formatMessage({
        id: 'greeting'
      }),
      name: intl.formatMessage({
        id: 'name'
      }),
      title: intl.formatMessage({
        id: 'bioTitle'
      }),
      description: intl.formatMessage({
        id: 'description'
      }),
      linkText: intl.formatMessage({
        id: 'linkText'
      }),
      linkURL: intl.formatMessage({
        id: 'linkURL'
      })
    }
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
    className: "home-container",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(Profile, {
      ...profileData
    })
  });
};
_s2(Home, "7zuYbROQO4MiMjYuEcS3KR1lDYY=", false, function () {
  return [react_intl__WEBPACK_IMPORTED_MODULE_1__.useIntl, react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector];
});
_c4 = Home;
_s(Home, "vJ9hkvMIHyLnsWB5Go0eFdoINrs=", false, function () {
  return [react_intl__WEBPACK_IMPORTED_MODULE_1__.useIntl, react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector];
});
_c3 = Home;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);
var _c, _c2, _c3;
__webpack_require__.$Refresh$.register(_c, "Profile$React.lazy");
__webpack_require__.$Refresh$.register(_c2, "Profile");
__webpack_require__.$Refresh$.register(_c3, "Home");
var _c4;
__webpack_require__.$Refresh$.register(_c4, "Home");

const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		let errorOverlay;
		if (true) {
			errorOverlay = false;
		}
		let testMode;
		if (typeof __react_refresh_test__ !== 'undefined') {
			testMode = __react_refresh_test__;
		}
		return __react_refresh_utils__.executeRuntime(
			exports,
			$ReactRefreshModuleId$,
			module.hot,
			errorOverlay,
			testMode
		);
	}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ }),

/***/ "./src/assets/profile.png":
/*!********************************!*\
  !*** ./src/assets/profile.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "77e47bf3d7e0d0fd9384.png";

/***/ })

}]);
//# sourceMappingURL=bundle.dfaeb25fc33ffe4c0d9a.js.map