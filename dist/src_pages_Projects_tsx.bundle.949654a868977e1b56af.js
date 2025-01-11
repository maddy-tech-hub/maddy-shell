"use strict";
(self["webpackChunkmaddy_shell"] = self["webpackChunkmaddy_shell"] || []).push([["src_pages_Projects_tsx"],{

/***/ "./src/pages/Projects.tsx":
/*!********************************!*\
  !*** ./src/pages/Projects.tsx ***!
  \********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "webpack/sharing/consume/default/react-redux/react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_components_Card_CardSection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @src/components/Card/CardSection */ "./src/components/Card/CardSection.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

var _s2 = __webpack_require__.$Refresh$.signature();
var _s = __webpack_require__.$Refresh$.signature();



const Projects = () => {
  _s2();
  _s();
  const projectList = (0,react_redux__WEBPACK_IMPORTED_MODULE_0__.useSelector)(state => state.projectSlice.projects);
  const personalProjects = projectList.filter(project => project.type === "personal");
  const professionalProjects = projectList.filter(project => project.type === "professional");
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
    className: "projects-page",
    style: {
      padding: '2.5rem'
    },
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_src_components_Card_CardSection__WEBPACK_IMPORTED_MODULE_1__["default"], {
      title: "Independent Solutions",
      subtitle: "Independent initiatives and personal contributions",
      cardInfoList: personalProjects,
      borderColor: "#ff9800"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_src_components_Card_CardSection__WEBPACK_IMPORTED_MODULE_1__["default"], {
      title: "Professional Projects",
      subtitle: "Impactful organizational contributions",
      cardInfoList: professionalProjects
    })]
  });
};
_s2(Projects, "l7jO9rB9rUdLU8ygyzDJMKeOSb0=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_0__.useSelector];
});
_c2 = Projects;
_s(Projects, "l7jO9rB9rUdLU8ygyzDJMKeOSb0=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_0__.useSelector];
});
_c = Projects;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Projects);
var _c;
__webpack_require__.$Refresh$.register(_c, "Projects");
var _c2;
__webpack_require__.$Refresh$.register(_c2, "Projects");

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
//# sourceMappingURL=src_pages_Projects_tsx.bundle.949654a868977e1b56af.js.map