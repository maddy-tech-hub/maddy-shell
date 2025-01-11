"use strict";
(self["webpackChunkmaddy_shell"] = self["webpackChunkmaddy_shell"] || []).push([["src_pages_Profile_tsx"],{

/***/ "./src/pages/Profile.tsx":
/*!*******************************!*\
  !*** ./src/pages/Profile.tsx ***!
  \*******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   getSocialIcon: () => (/* binding */ getSocialIcon)
/* harmony export */ });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "webpack/sharing/consume/default/react-redux/react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.mjs");
/* harmony import */ var _src_styles_profile_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @src/styles/profile.styles */ "./src/styles/profile.styles.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

var _s2 = __webpack_require__.$Refresh$.signature();
var _s = __webpack_require__.$Refresh$.signature();




const getSocialIcon = platform => {
  switch (platform) {
    case 'whatsapp':
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__.FaWhatsapp, {});
    case 'instagram':
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__.FaInstagram, {});
    case 'linkedin':
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__.FaLinkedin, {});
    case 'gmail':
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__.FaEnvelope, {});
    default:
      return null;
  }
};
const Profile = ({
  profileImage
}) => {
  _s2();
  _s();
  const {
    siteTitle,
    socialLinks,
    profileText
  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_0__.useSelector)(state => state.contactDetailsSlice);
  const socialLinksData = Object.entries(socialLinks).map(([key, url]) => ({
    icon: getSocialIcon(key),
    url
  }));
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_src_styles_profile_styles__WEBPACK_IMPORTED_MODULE_1__.Section, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_src_styles_profile_styles__WEBPACK_IMPORTED_MODULE_1__.Content, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_src_styles_profile_styles__WEBPACK_IMPORTED_MODULE_1__.Text, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h1", {
          children: profileText.greeting
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h2", {
          children: profileText.name
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("h3", {
          children: ["And I'm a ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
            children: profileText.title
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
          children: profileText.description
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_src_styles_profile_styles__WEBPACK_IMPORTED_MODULE_1__.SocialIcons, {
          children: socialLinksData.map((link, index) => link.icon && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a", {
            href: link.url,
            target: "_blank",
            rel: "noopener noreferrer",
            children: link.icon
          }, index))
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_src_styles_profile_styles__WEBPACK_IMPORTED_MODULE_1__.StyledLink, {
          to: profileText.linkURL,
          children: profileText.linkText
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_src_styles_profile_styles__WEBPACK_IMPORTED_MODULE_1__.ImageContainer, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_src_styles_profile_styles__WEBPACK_IMPORTED_MODULE_1__.ImageWrapper, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_src_styles_profile_styles__WEBPACK_IMPORTED_MODULE_1__.ProfileImage, {
            src: profileImage,
            alt: siteTitle
          })
        })
      })]
    })
  });
};
_s2(Profile, "xcXi74jubaKGYehSvAsOJYupqHo=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_0__.useSelector];
});
_c2 = Profile;
_s(Profile, "KM/gbyIWKJgYr3Q7LXZudhVs3U8=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_0__.useSelector];
});
_c = Profile;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Profile);
var _c;
__webpack_require__.$Refresh$.register(_c, "Profile");
var _c2;
__webpack_require__.$Refresh$.register(_c2, "Profile");

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

/***/ "./src/styles/profile.styles.ts":
/*!**************************************!*\
  !*** ./src/styles/profile.styles.ts ***!
  \**************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Content: () => (/* binding */ Content),
/* harmony export */   ImageContainer: () => (/* binding */ ImageContainer),
/* harmony export */   ImageWrapper: () => (/* binding */ ImageWrapper),
/* harmony export */   ProfileImage: () => (/* binding */ ProfileImage),
/* harmony export */   Section: () => (/* binding */ Section),
/* harmony export */   SocialIcons: () => (/* binding */ SocialIcons),
/* harmony export */   StyledLink: () => (/* binding */ StyledLink),
/* harmony export */   Text: () => (/* binding */ Text)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "webpack/sharing/consume/default/styled-components/styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "webpack/sharing/consume/default/react-router-dom/react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");



const Section = styled_components__WEBPACK_IMPORTED_MODULE_0___default().section.withConfig({
  displayName: "profilestyles__Section",
  componentId: "sc-kslxnt-0"
})(["background:linear-gradient(135deg,#0a192f,#020c1b);color:#ffffff;height:100vh;display:flex;justify-content:center;align-items:center;padding:0 2rem;"]);
const Content = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "profilestyles__Content",
  componentId: "sc-kslxnt-1"
})(["display:grid;grid-template-columns:1fr 1fr;align-items:center;gap:2rem;max-width:1200px;width:100%;"]);
const Text = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "profilestyles__Text",
  componentId: "sc-kslxnt-2"
})(["h1{font-size:2.5rem;color:#ffffff;font-weight:300;}h2{font-size:3rem;color:#00aaff;font-weight:bold;}h3{font-size:2rem;margin-top:1rem;span{color:#00d4ff;font-weight:bold;}}p{margin-top:1rem;color:#d9d9d9;line-height:1.8;max-width:500px;}"]);
const SocialIcons = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "profilestyles__SocialIcons",
  componentId: "sc-kslxnt-3"
})(["margin-top:1.5rem;display:flex;gap:1.5rem;font-size:2rem;svg{color:#00aaff;cursor:pointer;transition:transform 0.3s,color 0.3s;&:hover{color:#ffffff;transform:scale(1.2);}}"]);
const StyledLink = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link).withConfig({
  displayName: "profilestyles__StyledLink",
  componentId: "sc-kslxnt-4"
})(["margin-top:2rem;padding:0.75rem 2rem;background:linear-gradient(to right,#00aaff,#0077cc);border:none;border-radius:30px;color:#ffffff;font-size:1rem;font-weight:bold;text-decoration:none;display:inline-block;text-align:center;transition:background 0.3s,transform 0.3s;&:hover{background:linear-gradient(to right,#0077cc,#005f99);transform:scale(1.05);}"]);
const ImageContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "profilestyles__ImageContainer",
  componentId: "sc-kslxnt-5"
})(["display:flex;justify-content:center;align-items:center;"]);
const glow = (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.keyframes)(["0%{box-shadow:0 0 15px #00d4ff,0 0 30px #00d4ff,0 0 60px #ff0066,0 0 90px #ff0066;}50%{box-shadow:0 0 25px #ff0066,0 0 50px #ff0066,0 0 100px #00d4ff,0 0 150px #00d4ff;}100%{box-shadow:0 0 15px #00d4ff,0 0 30px #00d4ff,0 0 60px #ff0066,0 0 90px #ff0066;}"]);
const ImageWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "profilestyles__ImageWrapper",
  componentId: "sc-kslxnt-6"
})(["width:400px;height:400px;border-radius:50%;background:linear-gradient(to right,#00aaff,#ff0066);padding:6px;display:flex;justify-content:center;align-items:center;animation:", " 3s infinite ease-in-out;"], glow);
const ProfileImage = styled_components__WEBPACK_IMPORTED_MODULE_0___default().img.withConfig({
  displayName: "profilestyles__ProfileImage",
  componentId: "sc-kslxnt-7"
})(["width:100%;height:100%;object-fit:cover;border-radius:50%;"]);

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
//# sourceMappingURL=src_pages_Profile_tsx.bundle.949654a868977e1b56af.js.map