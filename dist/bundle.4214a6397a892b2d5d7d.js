"use strict";
(self["webpackChunkmaddy_shell"] = self["webpackChunkmaddy_shell"] || []).push([["src_bootstrap_tsx"],{

/***/ "./src/App.tsx":
/*!*********************!*\
  !*** ./src/App.tsx ***!
  \*********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "webpack/sharing/consume/default/react-redux/react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "webpack/sharing/consume/default/react-router-dom/react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_persist_integration_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-persist/integration/react */ "./node_modules/redux-persist/es/integration/react.js");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-intl */ "webpack/sharing/consume/default/react-intl/react-intl");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _locale_messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./locale/messages */ "./src/locale/messages.ts");
/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./redux/store */ "./src/redux/store.ts");
/* harmony import */ var _styles_globalStyles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles/globalStyles */ "./src/styles/globalStyles.ts");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./routes */ "./src/routes.tsx");
/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! redux-persist */ "webpack/sharing/consume/default/redux-persist/redux-persist");
/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(redux_persist__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");











const locale = navigator.language.split('-')[0];
const persistor = (0,redux_persist__WEBPACK_IMPORTED_MODULE_8__.persistStore)(_redux_store__WEBPACK_IMPORTED_MODULE_5__.store);
const App = () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.BrowserRouter, {
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(react_redux__WEBPACK_IMPORTED_MODULE_0__.Provider, {
    store: _redux_store__WEBPACK_IMPORTED_MODULE_5__.store,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(redux_persist_integration_react__WEBPACK_IMPORTED_MODULE_2__.PersistGate, {
      loading: null,
      persistor: persistor,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(react_intl__WEBPACK_IMPORTED_MODULE_3__.IntlProvider, {
        locale: locale,
        messages: _locale_messages__WEBPACK_IMPORTED_MODULE_4__["default"][locale],
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_styles_globalStyles__WEBPACK_IMPORTED_MODULE_6__.GlobalStyles, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_routes__WEBPACK_IMPORTED_MODULE_7__["default"], {})]
      })
    })
  })
});
_c2 = App;
_c = App;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);
var _c;
__webpack_require__.$Refresh$.register(_c, "App");
var _c2;
__webpack_require__.$Refresh$.register(_c2, "App");

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

/***/ "./src/Services/api.ts":
/*!*****************************!*\
  !*** ./src/Services/api.ts ***!
  \*****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   headerData: () => (/* binding */ headerData),
/* harmony export */   modernDarkTheme: () => (/* binding */ modernDarkTheme),
/* harmony export */   quickLinks: () => (/* binding */ quickLinks),
/* harmony export */   whatsappData: () => (/* binding */ whatsappData)
/* harmony export */ });
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

const quickLinks = [{
  label: 'Home',
  url: '/'
}, {
  label: 'About',
  url: '/about'
}, {
  label: 'Skills',
  url: '/skills'
}, {
  label: 'Education',
  url: '/education'
}, {
  label: 'Experience',
  url: '/experience'
}, {
  label: 'Projects',
  url: '/projects'
}, {
  label: 'Contact Me',
  url: '/contact'
}];
const modernDarkTheme = {
  headerBackgroundColor: '#121212',
  textColor: '#e0e0e0',
  linkColor: '#bb86fc',
  linkHoverColor: '#6200ee',
  secondaryColor: '#03dac6',
  hoverColor: '#018786',
  sidebarBackgroundColor: '#1f1f1f',
  menuIconColor: '#e0e0e0',
  shadowColor: 'rgba(0, 0, 0, 0.7)',
  backgroundColor: '#121212'
};
const headerData = {
  menuLinks: quickLinks,
  logoSrc: '',
  menuOpen: false,
  setMenuOpen: value => {},
  onLoginClick: () => console.log('Login Clicked'),
  theme: modernDarkTheme
};
const whatsappData = {
  phoneNumber: '8886380746',
  position: {
    bottom: 50,
    right: 30
  },
  backgroundColor: '#25D366',
  iconColor: 'white',
  iconSize: 35,
  tooltipText: 'Contact us on WhatsApp',
  draggable: true
};

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

/***/ "./src/bootstrap.tsx":
/*!***************************!*\
  !*** ./src/bootstrap.tsx ***!
  \***************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-dom/client */ "./node_modules/react-dom/client.js");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App */ "./src/App.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");




const container = document.getElementById('root');
const root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_0__.createRoot)(container);
console.log('omr : vemireddy shell app mounted');
root.render(/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_App__WEBPACK_IMPORTED_MODULE_1__["default"], {}));

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

/***/ "./src/components/Misc/Loader.tsx":
/*!****************************************!*\
  !*** ./src/components/Misc/Loader.tsx ***!
  \****************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "webpack/sharing/consume/default/styled-components/styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");



// Spinner animation

const spin = (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.keyframes)(["0%{transform:rotate(0deg);}100%{transform:rotate(360deg);}"]);

// Spinner style for the loader
const Spinner = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "Loader__Spinner",
  componentId: "sc-1wixc5w-0"
})(["border:4px solid rgba(0,0,0,0.1);border-top:4px solid #3498db;border-radius:50%;width:40px;height:40px;animation:", " 1s linear infinite;"], spin);

// Container for the loader, can be placed anywhere (button, screen, etc.)
_c = Spinner;
const LoaderContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "Loader__LoaderContainer",
  componentId: "sc-1wixc5w-1"
})(["display:flex;justify-content:center;align-items:center;position:", ";top:0;left:0;right:0;bottom:0;z-index:9999;", ""], props => props.fullScreen ? 'fixed' : 'absolute', props => props.fullScreen && `
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      justify-content: center;
      align-items: center;
      flex-direction: column;
  `);

// Optional loading text style
_c2 = LoaderContainer;
const LoadingText = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "Loader__LoadingText",
  componentId: "sc-1wixc5w-2"
})(["margin-top:12px;color:#3498db;font-size:14px;font-weight:bold;"]);
_c3 = LoadingText;
const Loader = ({
  text,
  fullScreen = false
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(LoaderContainer, {
    fullScreen: fullScreen,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Spinner, {}), text && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(LoadingText, {
      children: text
    })]
  });
};
_c5 = Loader;
_c4 = Loader;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Loader);
var _c, _c2, _c3, _c4;
__webpack_require__.$Refresh$.register(_c, "Spinner");
__webpack_require__.$Refresh$.register(_c2, "LoaderContainer");
__webpack_require__.$Refresh$.register(_c3, "LoadingText");
__webpack_require__.$Refresh$.register(_c4, "Loader");
var _c5;
__webpack_require__.$Refresh$.register(_c5, "Loader");

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

/***/ "./src/components/Misc/ScrollToTop.tsx":
/*!*********************************************!*\
  !*** ./src/components/Misc/ScrollToTop.tsx ***!
  \*********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "webpack/sharing/consume/default/react-router-dom/react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

var _s2 = __webpack_require__.$Refresh$.signature();
var _s = __webpack_require__.$Refresh$.signature();


const ScrollToTop = () => {
  _s2();
  _s();
  const {
    pathname
  } = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_1__.useLocation)();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};
_s2(ScrollToTop, "CJV/qYGA4pgzrRYkuYUatVPNGRY=", false, function () {
  return [react_router_dom__WEBPACK_IMPORTED_MODULE_1__.useLocation];
});
_c2 = ScrollToTop;
_s(ScrollToTop, "+8VPq4+XDMjo/kjL3WLkbwU2Amg=", false, function () {
  return [react_router_dom__WEBPACK_IMPORTED_MODULE_1__.useLocation];
});
_c = ScrollToTop;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ScrollToTop);
var _c;
__webpack_require__.$Refresh$.register(_c, "ScrollToTop");
var _c2;
__webpack_require__.$Refresh$.register(_c2, "ScrollToTop");

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

/***/ "./src/locale/messages.ts":
/*!********************************!*\
  !*** ./src/locale/messages.ts ***!
  \********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

// locale/messages.ts
const messages = {
  en: {
    loading: 'Loading...',
    greeting: "Hello, It's Me",
    name: 'Madhava Reddy Vemireddy',
    bioTitle: 'Full Stack Developer',
    description: 'I specialize in building responsive frontends with React and scalable backends with .NET C#. My focus is on delivering modern, efficient, and user-friendly web solutions.',
    linkText: 'More About Me',
    linkURL: '/about',
    skillTitle: 'Skills and Expertise',
    skillSubTitle: "Technologies and Tools I've Worked With",
    educationTitle: 'Educational Background',
    educationSubTitle: 'Highlights of Academic Achievements',
    experienceTitle: 'Professional Experience',
    experienceSubTitle: 'Building Scalable and Efficient Applications',
    independentProjectTitle: 'Independent Solutions',
    independentProjectSubTitle: 'Independent initiatives and personal contributions',
    professionalProjectTitle: 'Professional Projects',
    professionalProjectSubTitle: 'Impactful organizational contributions',
    aboutTitle: 'Contact Us',
    fullNameLabel: 'Your Full Name',
    emailLabel: 'Email Address',
    mobileLabel: 'Mobile Number',
    messageLabel: 'Write Message',
    buttonLabel: 'Send Message',
    successMessageTitle: 'Thank you for choosing us!',
    successMessage: 'Our team will contact you shortly.'
  },
  fr: {
    loading: 'Chargement...',
    aboutTitle: 'Contactez-nous',
    fullNameLabel: 'Votre nom complet',
    emailLabel: 'Adresse e-mail',
    mobileLabel: 'Numéro de mobile',
    messageLabel: 'Écrire un message',
    buttonLabel: 'Envoyer le message',
    successMessageTitle: 'Merci de nous avoir choisis!',
    successMessage: 'Notre équipe vous contactera sous peu.',
    greeting: "Bonjour, c'est moi",
    name: 'Madhava Reddy Vemireddy',
    bioTitle: 'Développeur Full Stack',
    description: 'Je me spécialise dans la création de frontends réactifs avec React et de backends évolutifs avec .NET C#. Mon objectif est de fournir des solutions web modernes, efficaces et conviviales.',
    linkText: 'En savoir plus sur moi',
    linkURL: '/about'
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (messages);

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

/***/ "./src/redux/slices/contactDetailsSlice.ts":
/*!*************************************************!*\
  !*** ./src/redux/slices/contactDetailsSlice.ts ***!
  \*************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   setContactDetails: () => (/* binding */ setContactDetails)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "webpack/sharing/consume/default/@reduxjs/toolkit/@reduxjs/toolkit");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");


const initialState = {
  siteTitle: "MaddyTech",
  location: {
    label: "Our Location",
    value: "No 16, 18th Cross 6th Main, BTM 2nd Stage, Bangalore, 560076"
  },
  email: {
    label: "Email Address",
    value: "vemireddyomr@gmail.com"
  },
  instagram: {
    label: "Instagram",
    value: "vemireddy_official"
  },
  linkedIn: {
    label: "LinkedIn",
    value: "Madhava Reddy Vemireddy"
  },
  phone: {
    label: "Urgent Call",
    number1: "+91 8886380746",
    number2: "+91 6301804286"
  },
  socialLinks: {
    whatsapp: "https://wa.me/8886380746",
    instagram: "https://www.instagram.com/vemireddy_official",
    linkedin: "https://www.linkedin.com/in/madhava-reddy-vemireddy-9a0826167",
    gmail: "mailto:vemireddyomr@gmail.com"
  }
};
const contactDetailsSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
  name: "contactDetails",
  initialState,
  reducers: {
    setContactDetails: (state, action) => {
      return {
        ...state,
        ...action.payload
      };
    }
  }
});
const {
  setContactDetails
} = contactDetailsSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contactDetailsSlice.reducer);

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

/***/ "./src/redux/slices/projectSlice.ts":
/*!******************************************!*\
  !*** ./src/redux/slices/projectSlice.ts ***!
  \******************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addProject: () => (/* binding */ addProject),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   removeProject: () => (/* binding */ removeProject),
/* harmony export */   updateProject: () => (/* binding */ updateProject)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "webpack/sharing/consume/default/@reduxjs/toolkit/@reduxjs/toolkit");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");


// Define initial state
const initialState = {
  projects: [{
    title: 'HCC Turn In Migration',
    details: ['Developed vehicle remarketing tools using ReactJS and Spring for Hyundai and Kia.', 'Refactored a monolithic application into microservices using ReactJS, SCSS, and Spring.', 'Created XML templates, implemented the service layer, and converted XML to JSON.'],
    duration: 'Aug. 2021 to Feb. 2022',
    type: 'professional'
  }, {
    title: 'HCC/TCCI/MBC Demo Program',
    details: ['Developed a demo program for Hyundai, Lexus, Toyota and Mercedes Benz vehicles.', 'Created seeding scripts, launched vehicles to new states, and validated prices.', 'Ensured compliance with the complete vehicle lifecycle.'],
    duration: 'Mar. 2022 to Aug. 2022',
    type: 'professional'
  }, {
    title: 'Bid Buy Migration',
    details: ['Developed a generic vehicle purchasing tool in responsive design.', 'Created reusable UI components like Vehicle Summary Prices and Transport Options.', 'Integrated user selections with APIs to process auction vehicle purchases.'],
    duration: 'Sep. 2022 to Apr. 2023',
    type: 'professional'
  }, {
    title: 'Search 2.0 Migration',
    details: ['Developed a generic vehicle filter tool with a responsive design.', 'Created reusable components like Filter Modal and Saved Search Modal.', 'Implemented functionality for filtering vehicles and saving searches.'],
    duration: 'May. 2023 to Dec. 2023',
    type: 'professional'
  }, {
    title: 'Chase Seller Removed Vehicles',
    details: ['Implemented a feature to automatically remove vehicles meeting seller removal conditions.', 'Stored audit information for tracking purposes.'],
    duration: 'Jan. 2024 to Mar. 2024',
    type: 'professional'
  }, {
    title: 'HCC Loan Pay Off',
    details: ['Developed a Loan Pay Off tool using ASP.NET framework.', 'Created APIs to fetch loan details, payment method fees, and process loan payoff requests.'],
    duration: 'Apr. 2024 to Oct. 2024',
    type: 'professional'
  }, {
    title: 'Retail IMS Project',
    details: ['Developing a Retail Inventory Management System (IMS) to streamline retail inventory processes.', 'Building secure APIs and responsive interfaces using React and ASP.NET.'],
    duration: 'Nov. 2023 to Present',
    type: 'professional'
  }, {
    title: 'IRASAH Training Institute',
    details: ['A static React app featuring services, contact forms, and responsive design.'],
    url: 'https://irasah.com',
    duration: 'Completed: 2024',
    type: 'personal'
  }, {
    title: 'Account Management API',
    details: ['Developed RESTful APIs for user authentication, product management, and notifications.'],
    url: 'https://maddyhub.onrender.com/index.html',
    duration: 'Hosted: 2024',
    type: 'personal'
  }]
};

// Create the slice
const projectSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
  name: 'projects',
  initialState,
  reducers: {
    addProject: (state, action) => {
      state.projects.push(action.payload);
    },
    updateProject: (state, action) => {
      const {
        index,
        updatedProject
      } = action.payload;
      state.projects[index] = updatedProject;
    },
    removeProject: (state, action) => {
      const index = action.payload;
      state.projects.splice(index, 1);
    }
  }
});

// Export the actions
const {
  addProject,
  updateProject,
  removeProject
} = projectSlice.actions;

// Export the reducer
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (projectSlice.reducer);

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

/***/ "./src/redux/store.ts":
/*!****************************!*\
  !*** ./src/redux/store.ts ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   rootReducer: () => (/* binding */ rootReducer),
/* harmony export */   store: () => (/* binding */ store)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "webpack/sharing/consume/default/@reduxjs/toolkit/@reduxjs/toolkit");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-persist */ "webpack/sharing/consume/default/redux-persist/redux-persist");
/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_persist__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-persist/lib/storage */ "./node_modules/redux-persist/lib/storage/index.js");
/* harmony import */ var _slices_contactDetailsSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./slices/contactDetailsSlice */ "./src/redux/slices/contactDetailsSlice.ts");
/* harmony import */ var _slices_projectSlice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./slices/projectSlice */ "./src/redux/slices/projectSlice.ts");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");






const persistConfig = {
  key: 'root',
  // The key under which the persisted state will be stored.
  storage: redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_2__["default"] // The storage mechanism (localStorage by default).
};
const rootReducer = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.combineReducers)({
  contactDetailsSlice: _slices_contactDetailsSlice__WEBPACK_IMPORTED_MODULE_3__["default"],
  projectSlice: _slices_projectSlice__WEBPACK_IMPORTED_MODULE_4__["default"]
});
const persistedReducer = (0,redux_persist__WEBPACK_IMPORTED_MODULE_1__.persistReducer)(persistConfig, rootReducer);
const store = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.configureStore)({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware({
    serializableCheck: false
  })
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (store);

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

/***/ "./src/routes.tsx":
/*!************************!*\
  !*** ./src/routes.tsx ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "webpack/sharing/consume/default/react-router-dom/react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Misc_Loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Misc/Loader */ "./src/components/Misc/Loader.tsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "webpack/sharing/consume/default/react-redux/react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Services_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Services/api */ "./src/Services/api.ts");
/* harmony import */ var _routes_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./routes/config */ "./src/routes/config.ts");
/* harmony import */ var _components_Misc_ScrollToTop__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/Misc/ScrollToTop */ "./src/components/Misc/ScrollToTop.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

var _s2 = __webpack_require__.$Refresh$.signature();
var _s = __webpack_require__.$Refresh$.signature();








const Header = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().lazy(_c = () => __webpack_require__.e(/*! import() */ "webpack_container_remote_maddy_widget_Header").then(__webpack_require__.t.bind(__webpack_require__, /*! maddy_widget/Header */ "webpack/container/remote/maddy_widget/Header", 23)));
_c2 = Header;
const Footer = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().lazy(_c3 = () => __webpack_require__.e(/*! import() */ "webpack_container_remote_maddy_widget_Footer").then(__webpack_require__.t.bind(__webpack_require__, /*! maddy_widget/Footer */ "webpack/container/remote/maddy_widget/Footer", 23)));
_c4 = Footer;
const WhatsAppWidget = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().lazy(_c5 = () => __webpack_require__.e(/*! import() */ "webpack_container_remote_maddy_widget_WhatsAppWidget").then(__webpack_require__.t.bind(__webpack_require__, /*! maddy_widget/WhatsAppWidget */ "webpack/container/remote/maddy_widget/WhatsAppWidget", 23)));
_c6 = WhatsAppWidget;
const AppRoutes = () => {
  _s2();
  _s();
  const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_1__.useNavigate)();
  const {
    location,
    socialLinks
  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(state => state.contactDetailsSlice);
  const [menuOpen, setMenuOpen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(_Services_api__WEBPACK_IMPORTED_MODULE_4__.headerData.menuOpen);
  const handleLogin = () => {
    navigate('/login');
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, {
      fallback: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_components_Misc_Loader__WEBPACK_IMPORTED_MODULE_2__["default"], {
        text: "Loading...",
        fullScreen: true
      }),
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_components_Misc_ScrollToTop__WEBPACK_IMPORTED_MODULE_6__["default"], {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(Header, {
        menuLinks: _Services_api__WEBPACK_IMPORTED_MODULE_4__.headerData.menuLinks,
        logoSrc: _Services_api__WEBPACK_IMPORTED_MODULE_4__.headerData.logoSrc,
        menuOpen: menuOpen,
        setMenuOpen: setMenuOpen,
        onLoginClick: handleLogin,
        theme: _Services_api__WEBPACK_IMPORTED_MODULE_4__.headerData.theme
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Routes, {
        children: _routes_config__WEBPACK_IMPORTED_MODULE_5__.routes.map(({
          path,
          Component
        }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Route, {
          path: path,
          element: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(Component, {})
        }, path))
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(Footer, {
        address: location.value,
        logoSrc: _Services_api__WEBPACK_IMPORTED_MODULE_4__.headerData.logoSrc,
        socialLinks: socialLinks,
        linkSections: []
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(WhatsAppWidget, {
        ..._Services_api__WEBPACK_IMPORTED_MODULE_4__.whatsappData
      })]
    })
  });
};
_s2(AppRoutes, "BV/RP4zI/ub9BkZ6BvxfF9AXS2g=", false, function () {
  return [react_router_dom__WEBPACK_IMPORTED_MODULE_1__.useNavigate, react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector];
});
_c8 = AppRoutes;
_s(AppRoutes, "BL5Nb/T0N/Kp9ibQMK6JUoIANg0=", false, function () {
  return [react_router_dom__WEBPACK_IMPORTED_MODULE_1__.useNavigate, react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector];
});
_c7 = AppRoutes;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AppRoutes);
var _c, _c2, _c3, _c4, _c5, _c6, _c7;
__webpack_require__.$Refresh$.register(_c, "Header$React.lazy");
__webpack_require__.$Refresh$.register(_c2, "Header");
__webpack_require__.$Refresh$.register(_c3, "Footer$React.lazy");
__webpack_require__.$Refresh$.register(_c4, "Footer");
__webpack_require__.$Refresh$.register(_c5, "WhatsAppWidget$React.lazy");
__webpack_require__.$Refresh$.register(_c6, "WhatsAppWidget");
__webpack_require__.$Refresh$.register(_c7, "AppRoutes");
var _c8;
__webpack_require__.$Refresh$.register(_c8, "AppRoutes");

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

/***/ "./src/routes/config.ts":
/*!******************************!*\
  !*** ./src/routes/config.ts ***!
  \******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   routes: () => (/* binding */ routes)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");


const routes = [{
  path: '/',
  Component: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().lazy(() => __webpack_require__.e(/*! import() */ "src_pages_Home_tsx").then(__webpack_require__.bind(__webpack_require__, /*! ../pages/Home */ "./src/pages/Home.tsx")))
}, {
  path: '/about',
  Component: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().lazy(() => __webpack_require__.e(/*! import() */ "src_pages_About_tsx").then(__webpack_require__.bind(__webpack_require__, /*! ../pages/About */ "./src/pages/About.tsx")))
}, {
  path: '/skills',
  Component: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().lazy(() => __webpack_require__.e(/*! import() */ "src_pages_Skills_tsx").then(__webpack_require__.bind(__webpack_require__, /*! ../pages/Skills */ "./src/pages/Skills.tsx")))
}, {
  path: '/education',
  Component: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().lazy(() => __webpack_require__.e(/*! import() */ "src_pages_Education_tsx").then(__webpack_require__.bind(__webpack_require__, /*! ../pages/Education */ "./src/pages/Education.tsx")))
}, {
  path: '/experience',
  Component: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().lazy(() => __webpack_require__.e(/*! import() */ "src_pages_Experience_tsx").then(__webpack_require__.bind(__webpack_require__, /*! ../pages/Experience */ "./src/pages/Experience.tsx")))
}, {
  path: '/projects',
  Component: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().lazy(() => __webpack_require__.e(/*! import() */ "src_pages_Projects_tsx").then(__webpack_require__.bind(__webpack_require__, /*! ../pages/Projects */ "./src/pages/Projects.tsx")))
}, {
  path: '/contact',
  Component: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().lazy(() => Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_process_browser_js-node_modules_react-icons_fa_index_mjs"), __webpack_require__.e("src_pages_Contact_tsx")]).then(__webpack_require__.bind(__webpack_require__, /*! ../pages/Contact */ "./src/pages/Contact.tsx")))
}, {
  path: '/login',
  Component: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().lazy(() => __webpack_require__.e(/*! import() */ "webpack_container_remote_maddy_login_LoginComponent").then(__webpack_require__.t.bind(__webpack_require__, /*! maddy_login/LoginComponent */ "webpack/container/remote/maddy_login/LoginComponent", 23)))
}, {
  path: '/signup',
  Component: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().lazy(() => __webpack_require__.e(/*! import() */ "webpack_container_remote_maddy_login_SignupComponent").then(__webpack_require__.t.bind(__webpack_require__, /*! maddy_login/SignupComponent */ "webpack/container/remote/maddy_login/SignupComponent", 23)))
}, {
  path: '/forget',
  Component: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().lazy(() => __webpack_require__.e(/*! import() */ "webpack_container_remote_maddy_login_ForgetComponent").then(__webpack_require__.t.bind(__webpack_require__, /*! maddy_login/ForgetComponent */ "webpack/container/remote/maddy_login/ForgetComponent", 23)))
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

/***/ "./src/styles/globalStyles.ts":
/*!************************************!*\
  !*** ./src/styles/globalStyles.ts ***!
  \************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GlobalStyles: () => (/* binding */ GlobalStyles)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "webpack/sharing/consume/default/styled-components/styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");


const GlobalStyles = (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.createGlobalStyle)(["body{background-color:#f4f8fb;font-size:14px;margin:0;padding:0;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;min-height:100vh;display:flex;flex-direction:column;}[data-color-mode*='dark'],[data-color-mode*='dark'] body{--gradient-from:#1c1e20;--gradient-to:#0d1117;--color-rgb:255 255 255;}[data-color-mode*='light'],[data-color-mode*='light'] body{--gradient-from:#e5eaf0;--gradient-to:#fff;--color-rgb:0 0 0;}html{min-height:100%;}*{box-sizing:border-box;}body::before{content:\"\";position:absolute;width:100%;top:0px;--gradient-stops:var(--gradient-from),var(--gradient-to);background-image:linear-gradient(to bottom,var(--gradient-stops));}"]);

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
//# sourceMappingURL=bundle.4214a6397a892b2d5d7d.js.map