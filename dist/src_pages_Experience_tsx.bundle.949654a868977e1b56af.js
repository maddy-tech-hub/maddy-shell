"use strict";
(self["webpackChunkmaddy_shell"] = self["webpackChunkmaddy_shell"] || []).push([["src_pages_Experience_tsx"],{

/***/ "./src/pages/Experience.tsx":
/*!**********************************!*\
  !*** ./src/pages/Experience.tsx ***!
  \**********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _src_components_Card_CardSection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @src/components/Card/CardSection */ "./src/components/Card/CardSection.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");



const experiences = [{
  title: "Amiti Software Technologies Pvt. Ltd.",
  subTitle: "Software Developer",
  duration: "June 2021 - Present",
  details: ["Built reusable UI components using ReactJS and TypeScript for scalable and consistent application design.", "Managed state efficiently with Redux, ensuring smooth data flow across modules.", "Designed and integrated REST APIs using ASP.NET Core, handling business logic and service layers.", "Developed responsive UIs using CSS Grid, Flexbox for better user experience.", "Ensured code quality through Jest unit testing and regular code reviews."],
  linkTitle: 'View Professional Projects',
  url: '/projects'
}];
const Experience = () => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
    className: "experience-page",
    style: {
      padding: '2.5rem',
      backgroundColor: '#f4f8fb'
    },
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_src_components_Card_CardSection__WEBPACK_IMPORTED_MODULE_0__["default"], {
      title: "Professional Experience",
      subtitle: "Building Scalable and Efficient Applications",
      cardInfoList: experiences
    })
  });
};
_c2 = Experience;
_c = Experience;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Experience);
var _c;
__webpack_require__.$Refresh$.register(_c, "Experience");
var _c2;
__webpack_require__.$Refresh$.register(_c2, "Experience");

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

/***/ })

}]);
//# sourceMappingURL=src_pages_Experience_tsx.bundle.949654a868977e1b56af.js.map