"use strict";
(self["webpackChunkmaddy_shell"] = self["webpackChunkmaddy_shell"] || []).push([["src_pages_Experience_tsx"],{

/***/ "./src/Services/cardList.ts":
/*!**********************************!*\
  !*** ./src/Services/cardList.ts ***!
  \**********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   educationList: () => (/* binding */ educationList),
/* harmony export */   experiences: () => (/* binding */ experiences),
/* harmony export */   skillsInfo: () => (/* binding */ skillsInfo)
/* harmony export */ });
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

const experiences = [{
  title: 'Amiti Software Technologies Pvt. Ltd.',
  subTitle: 'Software Developer',
  duration: 'June 2021 - Present',
  details: ['Built reusable UI components using ReactJS and TypeScript for scalable and consistent application design.', 'Managed state efficiently with Redux, ensuring smooth data flow across modules.', 'Designed and integrated REST APIs using ASP.NET Core, handling business logic and service layers.', 'Developed responsive UIs using CSS Grid, Flexbox for better user experience.', 'Ensured code quality through Jest unit testing and regular code reviews.'],
  linkTitle: 'View Professional Projects',
  url: '/projects'
}];
const educationList = [{
  title: 'RISE Krishna Sai Prakasam Group Institutions',
  subTitle: 'B.Tech in Computer Science',
  duration: 'June 2017 - Aug 2021',
  details: ['GPA: 7.73/10.0']
}, {
  title: 'Narayana Jr College, Kadapa',
  subTitle: 'Intermediate',
  duration: '2015 - 2017',
  details: ['GPA: 93.3/100']
}, {
  title: 'Vijaya High School, Porumamilla',
  subTitle: 'SSC',
  duration: '2015',
  details: ['GPA: 87/100']
}];
const skillsInfo = [{
  title: 'Front-End',
  subTitle: 'Technologies for user interfaces',
  details: ['ReactJS', 'Redux', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Grid', 'Bootstrap', 'Jest', 'Styled-components'],
  duration: 'Experience: 4+ years'
}, {
  title: 'Back-End',
  subTitle: 'Server-side development',
  details: ['ASP.NET Core', 'C#', 'RESTful APIs', 'Entity Framework', 'LINQ', 'Middleware', 'JWT Authentication'],
  duration: 'Experience: 3+ years'
}, {
  title: 'Databases',
  subTitle: 'Database management systems',
  details: ['PostgreSQL', 'Oracle', 'MySQL'],
  duration: 'Experience: 3+ years'
}, {
  title: 'Cloud Platforms',
  subTitle: 'Cloud services and infrastructure',
  details: ['AWS RDS', 'AWS S3', 'AWS Amplify'],
  duration: 'Experience: 1+ years'
}, {
  title: 'CI/CD Tools',
  subTitle: 'Continuous integration and deployment',
  details: ['Azure Pipelines', 'Jenkins'],
  duration: 'Experience: 2+ years'
}, {
  title: 'Monitoring & Analytics Tools',
  subTitle: 'Tools for system monitoring and analytics',
  details: ['Splunk', 'Grafana', 'Honeycomb', 'Cribl'],
  duration: 'Experience: 2+ years'
}, {
  title: 'Version Control',
  subTitle: 'Source code versioning and management',
  details: ['GitHub', 'Azure Boards', 'Jira'],
  duration: 'Experience: 4+ years'
}, {
  title: 'Software IDEs',
  subTitle: 'Integrated Development Environments',
  details: ['Visual Studio', 'VS Code', 'Postman', 'Swagger'],
  duration: 'Experience: 4+ years'
}, {
  title: 'Other Tools',
  subTitle: 'Additional tools and platforms',
  details: ['OpenShift Container Platform (OCP)', 'Azure Wikis'],
  duration: 'Experience: 2+ years'
}];

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

/***/ "./src/pages/Experience.tsx":
/*!**********************************!*\
  !*** ./src/pages/Experience.tsx ***!
  \**********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_Services_cardList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @src/Services/cardList */ "./src/Services/cardList.ts");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-intl */ "webpack/sharing/consume/default/react-intl/react-intl");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

var _s2 = __webpack_require__.$Refresh$.signature();
var _s = __webpack_require__.$Refresh$.signature();




const MaddyCardSection = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().lazy(_c = () => __webpack_require__.e(/*! import() */ "webpack_container_remote_maddy_widget_MaddyCardSection").then(__webpack_require__.t.bind(__webpack_require__, /*! maddy_widget/MaddyCardSection */ "webpack/container/remote/maddy_widget/MaddyCardSection", 23)));
_c2 = MaddyCardSection;
const Experience = () => {
  _s2();
  _s();
  const intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_2__.useIntl)();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
    className: "experience-page",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(MaddyCardSection, {
      title: intl.formatMessage({
        id: 'experienceTitle'
      }),
      subtitle: intl.formatMessage({
        id: 'experienceSubTitle'
      }),
      cardInfoList: _src_Services_cardList__WEBPACK_IMPORTED_MODULE_1__.experiences
    })
  });
};
_s2(Experience, "rlSgSjbewJ1PrR/Ile8g/kr050o=", false, function () {
  return [react_intl__WEBPACK_IMPORTED_MODULE_2__.useIntl];
});
_c4 = Experience;
_s(Experience, "rlSgSjbewJ1PrR/Ile8g/kr050o=", false, function () {
  return [react_intl__WEBPACK_IMPORTED_MODULE_2__.useIntl];
});
_c3 = Experience;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Experience);
var _c, _c2, _c3;
__webpack_require__.$Refresh$.register(_c, "MaddyCardSection$React.lazy");
__webpack_require__.$Refresh$.register(_c2, "MaddyCardSection");
__webpack_require__.$Refresh$.register(_c3, "Experience");
var _c4;
__webpack_require__.$Refresh$.register(_c4, "Experience");

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
//# sourceMappingURL=bundle.d86d619625424aa7fd2f.js.map