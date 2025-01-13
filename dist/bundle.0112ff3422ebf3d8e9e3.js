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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "webpack/sharing/consume/default/react-redux/react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-intl */ "webpack/sharing/consume/default/react-intl/react-intl");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

var _s2 = __webpack_require__.$Refresh$.signature();
var _s = __webpack_require__.$Refresh$.signature();




const MaddyCardSection = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().lazy(_c = () => __webpack_require__.e(/*! import() */ "webpack_container_remote_maddy_widget_MaddyCardSection").then(__webpack_require__.t.bind(__webpack_require__, /*! maddy_widget/MaddyCardSection */ "webpack/container/remote/maddy_widget/MaddyCardSection", 23)));
_c2 = MaddyCardSection;
const Projects = () => {
  _s2();
  _s();
  const projectList = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(state => state.projectSlice.projects);
  const personalProjects = projectList.filter(project => project.type === 'personal');
  const professionalProjects = projectList.filter(project => project.type === 'professional');
  const intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_2__.useIntl)();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
    className: "projects-page",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(MaddyCardSection, {
      title: intl.formatMessage({
        id: 'independentProjectTitle'
      }),
      subtitle: intl.formatMessage({
        id: 'independentProjectSubTitle'
      }),
      cardInfoList: personalProjects,
      borderColor: "#ff9800"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(MaddyCardSection, {
      title: intl.formatMessage({
        id: 'professionalProjectTitle'
      }),
      subtitle: intl.formatMessage({
        id: 'professionalProjectSubTitle'
      }),
      cardInfoList: professionalProjects
    })]
  });
};
_s2(Projects, "yqRGoIJ690zJqtc51LD9D2a2esM=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector, react_intl__WEBPACK_IMPORTED_MODULE_2__.useIntl];
});
_c4 = Projects;
_s(Projects, "yqRGoIJ690zJqtc51LD9D2a2esM=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector, react_intl__WEBPACK_IMPORTED_MODULE_2__.useIntl];
});
_c3 = Projects;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Projects);
var _c, _c2, _c3;
__webpack_require__.$Refresh$.register(_c, "MaddyCardSection$React.lazy");
__webpack_require__.$Refresh$.register(_c2, "MaddyCardSection");
__webpack_require__.$Refresh$.register(_c3, "Projects");
var _c4;
__webpack_require__.$Refresh$.register(_c4, "Projects");

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
//# sourceMappingURL=bundle.0112ff3422ebf3d8e9e3.js.map