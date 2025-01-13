"use strict";
(self["webpackChunkmaddy_shell"] = self["webpackChunkmaddy_shell"] || []).push([["src_pages_Contact_tsx"],{

/***/ "./src/pages/Contact.tsx":
/*!*******************************!*\
  !*** ./src/pages/Contact.tsx ***!
  \*******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "webpack/sharing/consume/default/react-redux/react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.mjs");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* provided dependency */ var process = __webpack_require__(/*! process/browser */ "./node_modules/process/browser.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

var _s2 = __webpack_require__.$Refresh$.signature();
var _s = __webpack_require__.$Refresh$.signature();




const ContactWidget = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(_c = () => __webpack_require__.e(/*! import() */ "webpack_container_remote_maddy_widget_ContactWidget").then(__webpack_require__.t.bind(__webpack_require__, /*! maddy_widget/ContactWidget */ "webpack/container/remote/maddy_widget/ContactWidget", 23)));
_c2 = ContactWidget;
const Contact = () => {
  _s2();
  _s();
  const contactDetails = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(state => state.contactDetailsSlice);
  const contactInfo = [{
    label: contactDetails.location.label,
    value: contactDetails.location.value,
    icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__.FaMapMarkerAlt, {
      style: {
        color: "red"
      }
    })
  }, {
    label: contactDetails.email.label,
    value: contactDetails.email.value,
    icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__.FaEnvelope, {
      style: {
        color: "#D44638"
      }
    })
  }, {
    label: contactDetails.instagram.label,
    value: contactDetails.instagram.value,
    icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__.FaInstagram, {
      style: {
        color: "#E1306C"
      }
    })
  }, {
    label: contactDetails.phone.label,
    value: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
        children: contactDetails.phone.number1
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
        children: contactDetails.phone.number2
      })]
    }),
    icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__.FaPhoneAlt, {
      style: {
        color: "green"
      }
    })
  }, {
    label: contactDetails.linkedIn.label,
    value: contactDetails.linkedIn.value,
    icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__.FaLinkedin, {
      style: {
        color: "#0077B5"
      }
    })
  }];
  const formFields = [{
    id: "name",
    label: "Name",
    type: "text",
    placeholder: "Your Name",
    required: true
  }, {
    id: "email",
    label: "Email",
    type: "email",
    placeholder: "Your Email",
    required: true
  }, {
    id: "phone",
    label: "Phone",
    type: "tel",
    placeholder: "Your Phone Number",
    required: true
  }, {
    id: "message",
    label: "Message",
    type: "textarea",
    placeholder: "Your Message",
    required: true
  }];
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
    className: "parent-component",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(ContactWidget, {
      formFields: formFields,
      contactInfo: contactInfo,
      emailConfig: {
        serviceId: process.env.REACT_APP_SERVICE_ID,
        templateId: process.env.REACT_APP_TEMPLATE_ID,
        userId: process.env.REACT_APP_USER_ID
      },
      externalApiUrl: process.env.REACT_APP_EXTERNAL_API_URL
    })
  });
};
_s2(Contact, "nd9DGDr1bT3QZknS4YqUs99CN8w=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector];
});
_c4 = Contact;
_s(Contact, "nd9DGDr1bT3QZknS4YqUs99CN8w=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector];
});
_c3 = Contact;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Contact);
var _c, _c2, _c3;
__webpack_require__.$Refresh$.register(_c, "ContactWidget$lazy");
__webpack_require__.$Refresh$.register(_c2, "ContactWidget");
__webpack_require__.$Refresh$.register(_c3, "Contact");
var _c4;
__webpack_require__.$Refresh$.register(_c4, "Contact");

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
//# sourceMappingURL=bundle.64509b6afa219d73fc6e.js.map