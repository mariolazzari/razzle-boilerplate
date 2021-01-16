exports.id = "server";
exports.modules = {

/***/ "./src/server.js":
/*!***********************!*\
  !*** ./src/server.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App */ "./src/App.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./theme */ "./src/theme.js");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/styles */ "@material-ui/styles");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_styles__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-dom/server */ "react-dom/server");
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "C:\\Code\\Progetti\\with-material-ui\\src\\server.js";








var assets = __webpack_require__(/*! ./build/assets.json */ "./build/assets.json");

var server = express__WEBPACK_IMPORTED_MODULE_2___default()();
server.disable("x-powered-by").use(express__WEBPACK_IMPORTED_MODULE_2___default.a["static"]("C:\\Code\\Progetti\\with-material-ui\\public")).get("/*", function (req, res) {
  var context = {};
  var sheets = new _material_ui_styles__WEBPACK_IMPORTED_MODULE_4__["ServerStyleSheets"]();
  var markup = Object(react_dom_server__WEBPACK_IMPORTED_MODULE_5__["renderToString"])(sheets.collect( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["StaticRouter"], {
    location: req.url,
    context: context,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_styles__WEBPACK_IMPORTED_MODULE_4__["ThemeProvider"], {
    theme: _theme__WEBPACK_IMPORTED_MODULE_3__["default"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_0__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }
  })))));
  var css = sheets.toString();
  res.status(200).send("\n<!doctype html>\n<html lang=\"\">\n<head>\n  <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n  <meta charSet='utf-8' />\n  <title>Welcome to Razzle</title>\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n  <link rel=\"stylesheet\" href=\"//fonts.googleapis.com/css?family=Roboto:300,400,500\">\n  ".concat(assets.client.css ? "<link rel=\"stylesheet\" href=\"".concat(assets.client.css, "\">") : "", "\n  ").concat(css ? "<style id='jss-ssr'>".concat(css, "</style>") : "", "\n    ").concat( false ? undefined : "<script src=\"".concat(assets.client.js, "\" defer crossorigin></script>"), "\n</head>\n<body>\n  <div id=\"root\">").concat(markup, "</div>\n</body>\n</html>"));
});
/* harmony default export */ __webpack_exports__["default"] = (server);

/***/ })

};
//# sourceMappingURL=server.74e36d849e778c18416b.hot-update.js.map