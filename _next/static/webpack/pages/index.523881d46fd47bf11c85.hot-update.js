webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _this = undefined,
    _jsxFileName = "D:\\Workplace\\homepage\\pages\\index.tsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



var Home = function Home() {
  _s();

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var isMobile = function isMobile() {
      if (navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i)) {
        return true;
      } else {
        return false;
      }
    };

    var val = isMobile();

    if (val) {
      var html = document.getElementsByTagName("html")[0];
      html.classList.add("mobile");
    }

    var handleScroll = function handleScroll() {
      var height = window.innerHeight;
      var top = document.getElementsByClassName("content-3")[0].getBoundingClientRect().top;

      if (top < height * 0.2) {
        document.getElementById("label-2").style.opacity = "0";
        document.getElementById("dtoken").style.opacity = "0";
        document.getElementById("cards").style.opacity = "0";
        document.getElementById("bg-1").style.opacity = "0";
        document.getElementById("content-3").style.opacity = "1";
        document.getElementById("content-2").style.opacity = "1";
      } else {
        document.getElementById("content-3").style.opacity = "0";
        document.getElementById("content-2").style.opacity = "0";
        document.getElementById("bg-1").style.opacity = "1";
        document.getElementById("label-2").style.opacity = "1";
        document.getElementById("dtoken").style.opacity = "1";
        document.getElementById("cards").style.opacity = "1";
      }
    };

    window.addEventListener("scroll", handleScroll);
  }, []);
  return __jsx("div", {
    className: "Home",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_0___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 7
    }
  }, __jsx("title", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 9
    }
  }, "DFinance")), __jsx("div", {
    className: "header-brand",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 7
    }
  }, __jsx("a", {
    href: "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 9
    }
  })), __jsx("div", {
    className: "ball-1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: "ball-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: "ball-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: "ball-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: "header-title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 7
    }
  }, "Unleash the power of DeFi"), __jsx("div", {
    className: "header-subtitle",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 7
    }
  }, "DFinance is building the open financial services infrastructure for the DFINITY Internet Computer."), __jsx("div", {
    className: "header-link",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 7
    }
  }, __jsx("a", {
    href: "https://app.dfinance.ai/",
    target: "_blank",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 9
    }
  }, "App (testnet)")), __jsx("label", {
    className: "label-1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 7
    }
  }, "- DTOKEN -"), __jsx("div", {
    className: "header-cards",
    id: "cards",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "header-card card-1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "wrap",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "svg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 13
    }
  }), __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 13
    }
  }, "Unified token standard for Dfinity"))), __jsx("div", {
    className: "header-card card-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "wrap",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "svg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 13
    }
  }), __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 13
    }
  }, "Issue your token with one click of a button"))), __jsx("div", {
    className: "header-card card-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "wrap",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "svg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 13
    }
  }), __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 13
    }
  }, "Manage your tokens: transfer, burn, mint")))), __jsx("label", {
    className: "label-2",
    id: "label-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 7
    }
  }, "DToken Architecture"), __jsx("div", {
    className: "phone",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: "dtoken",
    id: "dtoken",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "img",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 9
    }
  })), __jsx("div", {
    className: "bg-1",
    id: "bg-1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: "content-3",
    id: "content-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 7
    }
  }, __jsx("label", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 9
    }
  }, "- DSWAP -"), __jsx("div", {
    className: "structure",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "img",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 11
    }
  }), __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 11
    }
  }, "Product Structure"))), __jsx("div", {
    className: "content-2",
    id: "content-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "col-1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "box-1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 11
    }
  }, __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 13
    }
  }, "Automated Market Maker Decentralized Exchange"), __jsx("div", {
    className: "svg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 13
    }
  })), __jsx("div", {
    className: "box-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 11
    }
  }, __jsx("label", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 13
    }
  }, "Lightning Swap"), __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 13
    }
  }, "Swap one token for another with lightning speed"), __jsx("div", {
    className: "svg-1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: "svg-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 13
    }
  })), __jsx("div", {
    className: "box-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 11
    }
  }, __jsx("label", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 13
    }
  }, "API for developers to build their own application based on DSwap"), __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 13
    }
  }, "Such as liquidity farming applications"), __jsx("div", {
    className: "svg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 13
    }
  }))), __jsx("div", {
    className: "col-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "box-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 11
    }
  }, __jsx("label", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 13
    }
  }, "0.3%"), __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    width: "788.661",
    height: "232.745",
    viewBox: "0 0 788.661 232.745",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 13
    }
  }, __jsx("defs", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 15
    }
  }, __jsx("linearGradient", {
    id: "linear-gradient",
    x1: "0.5",
    x2: "0.5",
    y2: "1",
    gradientUnits: "objectBoundingBox",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 17
    }
  }, __jsx("stop", {
    offset: "0",
    stopColor: "#e21f79",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 19
    }
  }), __jsx("stop", {
    offset: "1",
    stopColor: "#a019ba",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 19
    }
  }))), __jsx("path", {
    id: "\u8DEF\u5F84_50",
    "data-name": "\u8DEF\u5F84 50",
    d: "M3038.031,2532.216c-184.789,150.508-146.518-53.409-325.595,0s-162.227-70.26-321.882,21.135-37.986,197.927-37.986,197.927h744.3Z",
    transform: "translate(-2308.206 -2518.533)",
    fill: "url(#linear-gradient)",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 15
    }
  })), __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 13
    }
  }, "Provide Liquidity To Earn 0.3% Transaction Fee")), __jsx("div", {
    className: "box-5",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 11
    }
  }, __jsx("label", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 13
    }
  }, "Secure Atomic Swap"), __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    viewBox: "0 0 528.027 377.633",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 13
    }
  }, __jsx("defs", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 15
    }
  }, __jsx("linearGradient", {
    id: "linear-gradient-1",
    x1: "0.146",
    x2: "1",
    y2: "0.827",
    gradientUnits: "objectBoundingBox",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 17
    }
  }, __jsx("stop", {
    offset: "0",
    stopColor: "#5a68d2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 19
    }
  }), __jsx("stop", {
    offset: "1",
    stopColor: "#b146d7",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177,
      columnNumber: 19
    }
  })), __jsx("linearGradient", {
    id: "linear-gradient-2",
    x1: "0.5",
    x2: "0.5",
    y2: "1",
    gradientUnits: "objectBoundingBox",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 17
    }
  }, __jsx("stop", {
    offset: "0",
    stopColor: "#3dc4ed",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186,
      columnNumber: 19
    }
  }), __jsx("stop", {
    offset: "1",
    stopColor: "#2976ba",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187,
      columnNumber: 19
    }
  })), __jsx("linearGradient", {
    id: "linear-gradient-3",
    x1: "0.5",
    x2: "0.5",
    y2: "1",
    gradientUnits: "objectBoundingBox",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 17
    }
  }, __jsx("stop", {
    offset: "0",
    stopColor: "#f89e36",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196,
      columnNumber: 19
    }
  }), __jsx("stop", {
    offset: "1",
    stopColor: "#ffab4a",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197,
      columnNumber: 19
    }
  })), __jsx("linearGradient", {
    id: "linear-gradient-4",
    x1: "0.5",
    x2: "0.5",
    y2: "1",
    gradientUnits: "objectBoundingBox",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199,
      columnNumber: 17
    }
  }, __jsx("stop", {
    offset: "0",
    stopColor: "#e21f79",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206,
      columnNumber: 19
    }
  }), __jsx("stop", {
    offset: "1",
    stopColor: "#a019ba",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207,
      columnNumber: 19
    }
  }))), __jsx("ellipse", {
    id: "oval_14",
    "data-name": "oval 14",
    cx: "74.344",
    cy: "171.746",
    rx: "74.344",
    ry: "171.746",
    transform: "matrix(0.602, -0.799, 0.799, 0.602, 140.788, 163.479)",
    fill: "none",
    stroke: "#e1e1e1",
    strokeMiterlimit: "10",
    strokeWidth: "6",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210,
      columnNumber: 15
    }
  }), __jsx("ellipse", {
    id: "oval_15",
    "data-name": "oval 15",
    cx: "139.769",
    cy: "134.937",
    rx: "139.769",
    ry: "134.937",
    transform: "translate(150.455 135.292) rotate(-28)",
    fill: "none",
    stroke: "#e1e1e1",
    strokeMiterlimit: "10",
    strokeWidth: "6",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223,
      columnNumber: 15
    }
  }), __jsx("circle", {
    id: "oval_11",
    "data-name": "oval 11",
    cx: "78.054",
    cy: "78.054",
    r: "78.054",
    transform: "translate(260.659 110.763)",
    fill: "url(#linear-gradient-1)",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 236,
      columnNumber: 15
    }
  }), __jsx("circle", {
    id: "oval_12",
    "data-name": "oval 12",
    cx: "25.428",
    cy: "25.428",
    r: "25.428",
    transform: "matrix(0.966, -0.259, 0.259, 0.966, 423.767, 92.782)",
    fill: "url(#linear-gradient-2)",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 245,
      columnNumber: 15
    }
  }), __jsx("circle", {
    id: "oval_13",
    "data-name": "oval 13",
    cx: "25.428",
    cy: "25.428",
    r: "25.428",
    transform: "matrix(0.996, 0.087, -0.087, 0.996, 189.406, 179.917)",
    fill: "url(#linear-gradient-3)",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 254,
      columnNumber: 15
    }
  }), __jsx("circle", {
    id: "oval_16",
    "data-name": "oval 16",
    cx: "19",
    cy: "19",
    r: "19",
    transform: "translate(0 312.197)",
    fill: "url(#linear-gradient-4)",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 263,
      columnNumber: 15
    }
  }))))), __jsx("div", {
    className: "footer-wrap",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 276,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "footer-bg-1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 277,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: "bg-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 278,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: "bg-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 279,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: "footer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 280,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "footer-1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 281,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "footer-brand",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 282,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: "link-wrap",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 283,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "links",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 284,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "a-wrap",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 285,
      columnNumber: 17
    }
  }, __jsx("a", {
    className: "onepager",
    href: "https://drive.google.com/file/d/1obXKlr_GFK4rvfzKp5rU8clwvw9MFVIX/view?usp=sharing",
    target: "_blank",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 286,
      columnNumber: 19
    }
  }, "Onepager"))))), __jsx("div", {
    className: "footer-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 308,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "links",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 309,
      columnNumber: 13
    }
  }, __jsx("a", {
    href: "https://github.com/dfinance-tech",
    target: "_blank",
    rel: "noreferrer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 310,
      columnNumber: 15
    }
  }, __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 38.067 37.116",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 315,
      columnNumber: 17
    }
  }, __jsx("path", {
    id: "Icon_awesome-github",
    "data-name": "Icon awesome-github",
    d: "M12.733,30.448c0,.153-.177.276-.4.276-.253.023-.43-.1-.43-.276,0-.153.177-.276.4-.276C12.533,30.149,12.733,30.272,12.733,30.448ZM10.346,30.1c-.054.153.1.33.33.376a.36.36,0,0,0,.476-.153c.046-.153-.1-.33-.33-.4A.394.394,0,0,0,10.346,30.1Zm3.392-.13c-.223.054-.376.2-.353.376.023.153.223.253.453.2s.376-.2.353-.353S13.96,29.949,13.738,29.972ZM18.788.563A18.4,18.4,0,0,0,0,19.289,19.241,19.241,0,0,0,13.009,37.647c.982.177,1.328-.43,1.328-.929,0-.476-.023-3.1-.023-4.712,0,0-5.372,1.151-6.5-2.287,0,0-.875-2.233-2.134-2.809,0,0-1.758-1.2.123-1.182a4.051,4.051,0,0,1,2.962,1.98,4.057,4.057,0,0,0,5.595,1.6,4.266,4.266,0,0,1,1.228-2.586c-4.29-.476-8.619-1.1-8.619-8.481a5.817,5.817,0,0,1,1.811-4.52,7.251,7.251,0,0,1,.2-5.211c1.6-.5,5.3,2.072,5.3,2.072a18.131,18.131,0,0,1,9.64,0s3.692-2.579,5.3-2.072a7.248,7.248,0,0,1,.2,5.211,5.966,5.966,0,0,1,1.98,4.52c0,7.406-4.52,8-8.811,8.481a4.539,4.539,0,0,1,1.3,3.561c0,2.586-.023,5.787-.023,6.416,0,.5.353,1.105,1.328.929A19.064,19.064,0,0,0,38.067,19.289C38.067,8.644,29.433.563,18.788.563ZM7.46,27.033c-.1.077-.077.253.054.4.123.123.3.177.4.077.1-.077.077-.253-.054-.4C7.736,26.987,7.56,26.933,7.46,27.033Zm-.829-.622c-.054.1.023.223.177.3a.228.228,0,0,0,.33-.054c.054-.1-.023-.223-.177-.3C6.808,26.311,6.685,26.335,6.631,26.411Zm2.487,2.732c-.123.1-.077.33.1.476.177.177.4.2.5.077.1-.1.054-.33-.1-.476C9.448,29.044,9.217,29.021,9.118,29.143Zm-.875-1.128c-.123.077-.123.276,0,.453s.33.253.43.177a.35.35,0,0,0,0-.476C8.565,27.992,8.366,27.916,8.243,28.015Z",
    transform: "translate(0 -0.563)",
    fill: "#efefef",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 319,
      columnNumber: 19
    }
  }))), __jsx("a", {
    href: "https://twitter.com/DFinance_AI",
    target: "_blank",
    rel: "noreferrer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 328,
      columnNumber: 15
    }
  }, __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 41.554 33.749",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 333,
      columnNumber: 17
    }
  }, __jsx("path", {
    id: "Icon_awesome-twitter",
    "data-name": "Icon awesome-twitter",
    d: "M37.283,11.792c.026.369.026.738.026,1.107,0,11.259-8.569,24.231-24.231,24.231A24.067,24.067,0,0,1,0,33.307a17.618,17.618,0,0,0,2.057.105A17.056,17.056,0,0,0,12.63,29.774a8.531,8.531,0,0,1-7.963-5.906A10.74,10.74,0,0,0,6.275,24a9.007,9.007,0,0,0,2.241-.29,8.518,8.518,0,0,1-6.829-8.358v-.105a8.577,8.577,0,0,0,3.85,1.081A8.529,8.529,0,0,1,2.9,4.936a24.208,24.208,0,0,0,17.56,8.912A9.614,9.614,0,0,1,20.25,11.9,8.525,8.525,0,0,1,34.989,6.07a16.767,16.767,0,0,0,5.405-2.057A8.493,8.493,0,0,1,36.65,8.707a17.073,17.073,0,0,0,4.9-1.318,18.307,18.307,0,0,1-4.271,4.4Z",
    transform: "translate(0 -3.381)",
    fill: "#efefef",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 337,
      columnNumber: 19
    }
  }))), __jsx("a", {
    href: "https://discord.gg/EkmnRd99h6",
    target: "_blank",
    rel: "noreferrer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 346,
      columnNumber: 15
    }
  }, __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 640 512",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 351,
      columnNumber: 17
    }
  }, __jsx("path", {
    fill: "#efefef",
    d: "M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 352,
      columnNumber: 19
    }
  })))), __jsx("span", {
    className: "contact",
    style: {
      color: "#fff",
      fontSize: "2.8rem",
      fontFamily: "Roboto bold",
      borderLeft: "1px solid #fff",
      marginLeft: "2rem",
      paddingLeft: "3.2rem",
      height: "4rem",
      lineHeight: "4rem"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 359,
      columnNumber: 13
    }
  }, "Contact: hello@dfinance.ai"), __jsx("div", {
    className: "copyright",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 374,
      columnNumber: 13
    }
  }, "Copyright \xA9 2021 Dfinance. All rights reserved.")))));
};

_s(Home, "OD7bBpZva5O2jO+Puf00hKivP7c=");

_c = Home;
/* harmony default export */ __webpack_exports__["default"] = (Home);

var _c;

$RefreshReg$(_c, "Home");

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
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbIkhvbWUiLCJ1c2VFZmZlY3QiLCJpc01vYmlsZSIsIm5hdmlnYXRvciIsInVzZXJBZ2VudCIsIm1hdGNoIiwidmFsIiwiaHRtbCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJjbGFzc0xpc3QiLCJhZGQiLCJoYW5kbGVTY3JvbGwiLCJoZWlnaHQiLCJ3aW5kb3ciLCJpbm5lckhlaWdodCIsInRvcCIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJnZXRFbGVtZW50QnlJZCIsInN0eWxlIiwib3BhY2l0eSIsImFkZEV2ZW50TGlzdGVuZXIiLCJjb2xvciIsImZvbnRTaXplIiwiZm9udEZhbWlseSIsImJvcmRlckxlZnQiLCJtYXJnaW5MZWZ0IiwicGFkZGluZ0xlZnQiLCJsaW5lSGVpZ2h0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsSUFBTUEsSUFBSSxHQUFHLFNBQVBBLElBQU8sR0FBTTtBQUFBOztBQUNqQkMseURBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBTTtBQUNyQixVQUNFQyxTQUFTLENBQUNDLFNBQVYsQ0FBb0JDLEtBQXBCLENBQTBCLFVBQTFCLEtBQ0FGLFNBQVMsQ0FBQ0MsU0FBVixDQUFvQkMsS0FBcEIsQ0FBMEIsUUFBMUIsQ0FEQSxJQUVBRixTQUFTLENBQUNDLFNBQVYsQ0FBb0JDLEtBQXBCLENBQTBCLFNBQTFCLENBRkEsSUFHQUYsU0FBUyxDQUFDQyxTQUFWLENBQW9CQyxLQUFwQixDQUEwQixPQUExQixDQUhBLElBSUFGLFNBQVMsQ0FBQ0MsU0FBVixDQUFvQkMsS0FBcEIsQ0FBMEIsT0FBMUIsQ0FKQSxJQUtBRixTQUFTLENBQUNDLFNBQVYsQ0FBb0JDLEtBQXBCLENBQTBCLGFBQTFCLENBTEEsSUFN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QUFDLHNCQURMO0FBRUUsaUJBQVUsc0JBRlo7QUFHRSxLQUFDLEVBQUMsbWpCQUhKO0FBSUUsYUFBUyxFQUFDLHFCQUpaO0FBS0UsUUFBSSxFQUFDLFNBTFA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUpGLENBTEYsQ0FuQkYsRUFxQ0U7QUFDRSxRQUFJLEVBQUMsK0JBRFA7QUFFRSxVQUFNLEVBQUMsUUFGVDtBQUdFLE9BQUcsRUFBQyxZQUhOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FLRTtBQUFLLFNBQUssRUFBQyw0QkFBWDtBQUF3QyxXQUFPLEVBQUMsYUFBaEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQ0UsUUFBSSxFQUFDLFNBRFA7QUFFRSxLQUFDLEVBQUMsZ3hDQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQUxGLENBckNGLENBREYsRUFtREU7QUFDRSxhQUFTLEVBQUMsU0FEWjtBQUVFLFNBQUssRUFBRTtBQUNMVyxXQUFLLEVBQUUsTUFERjtBQUVMQyxjQUFRLEVBQUUsUUFGTDtBQUdMQyxnQkFBVSxFQUFFLGFBSFA7QUFJTEMsZ0JBQVUsRUFBRSxnQkFKUDtBQUtMQyxnQkFBVSxFQUFFLE1BTFA7QUFNTEMsaUJBQVcsRUFBRSxRQU5SO0FBT0xmLFlBQU0sRUFBRSxNQVBIO0FBUUxnQixnQkFBVSxFQUFFO0FBUlAsS0FGVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtDQW5ERixFQWtFRTtBQUFLLGFBQVMsRUFBQyxXQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMERBbEVGLENBNUJGLENBSkYsQ0FoT0YsQ0FERjtBQTJVRCxDQTFYRDs7R0FBTTdCLEk7O0tBQUFBLEk7QUE0WFNBLG1FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjUyMzg4MWQ0NmZkNDdiZjExYzg1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IEhvbWUgPSAoKSA9PiB7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGlzTW9iaWxlID0gKCkgPT4ge1xyXG4gICAgICBpZiAoXHJcbiAgICAgICAgbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvQW5kcm9pZC9pKSB8fFxyXG4gICAgICAgIG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL3dlYk9TL2kpIHx8XHJcbiAgICAgICAgbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvaVBob25lL2kpIHx8XHJcbiAgICAgICAgbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvaVBhZC9pKSB8fFxyXG4gICAgICAgIG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL2lQb2QvaSkgfHxcclxuICAgICAgICBuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9CbGFja0JlcnJ5L2kpIHx8XHJcbiAgICAgICAgbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvV2luZG93cyBQaG9uZS9pKVxyXG4gICAgICApIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgdmFsID0gaXNNb2JpbGUoKTtcclxuICAgIGlmICh2YWwpIHtcclxuICAgICAgY29uc3QgaHRtbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaHRtbFwiKVswXTtcclxuICAgICAgaHRtbC5jbGFzc0xpc3QuYWRkKFwibW9iaWxlXCIpO1xyXG4gICAgfVxyXG4gICAgY29uc3QgaGFuZGxlU2Nyb2xsID0gKCkgPT4ge1xyXG4gICAgICBjb25zdCBoZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XHJcbiAgICAgIGNvbnN0IHRvcCA9IGRvY3VtZW50XHJcbiAgICAgICAgLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJjb250ZW50LTNcIilbMF1cclxuICAgICAgICAuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wO1xyXG4gICAgICBpZiAodG9wIDwgaGVpZ2h0ICogMC4yKSB7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsYWJlbC0yXCIpLnN0eWxlLm9wYWNpdHkgPSBcIjBcIjtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImR0b2tlblwiKS5zdHlsZS5vcGFjaXR5ID0gXCIwXCI7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYXJkc1wiKS5zdHlsZS5vcGFjaXR5ID0gXCIwXCI7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJiZy0xXCIpLnN0eWxlLm9wYWNpdHkgPSBcIjBcIjtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnQtM1wiKS5zdHlsZS5vcGFjaXR5ID0gXCIxXCI7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50LTJcIikuc3R5bGUub3BhY2l0eSA9IFwiMVwiO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudC0zXCIpLnN0eWxlLm9wYWNpdHkgPSBcIjBcIjtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnQtMlwiKS5zdHlsZS5vcGFjaXR5ID0gXCIwXCI7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJiZy0xXCIpLnN0eWxlLm9wYWNpdHkgPSBcIjFcIjtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxhYmVsLTJcIikuc3R5bGUub3BhY2l0eSA9IFwiMVwiO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZHRva2VuXCIpLnN0eWxlLm9wYWNpdHkgPSBcIjFcIjtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhcmRzXCIpLnN0eWxlLm9wYWNpdHkgPSBcIjFcIjtcclxuICAgICAgfVxyXG4gICAgfTtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGhhbmRsZVNjcm9sbCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJIb21lXCI+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT5ERmluYW5jZTwvdGl0bGU+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItYnJhbmRcIj5cclxuICAgICAgICA8YSBocmVmPVwiL1wiPjwvYT5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFsbC0xXCI+PC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFsbC0yXCI+PC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFsbC0zXCI+PC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFsbC00XCI+PC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLXRpdGxlXCI+VW5sZWFzaCB0aGUgcG93ZXIgb2YgRGVGaTwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci1zdWJ0aXRsZVwiPlxyXG4gICAgICAgIERGaW5hbmNlIGlzIGJ1aWxkaW5nIHRoZSBvcGVuIGZpbmFuY2lhbCBzZXJ2aWNlcyBpbmZyYXN0cnVjdHVyZSBmb3IgdGhlXHJcbiAgICAgICAgREZJTklUWSBJbnRlcm5ldCBDb21wdXRlci5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLWxpbmtcIj5cclxuICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9hcHAuZGZpbmFuY2UuYWkvXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XHJcbiAgICAgICAgICBBcHAgKHRlc3RuZXQpXHJcbiAgICAgICAgPC9hPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxhYmVsLTFcIj4tIERUT0tFTiAtPC9sYWJlbD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItY2FyZHNcIiBpZD1cImNhcmRzXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItY2FyZCBjYXJkLTFcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3JhcFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN2Z1wiPjwvZGl2PlxyXG4gICAgICAgICAgICA8c3Bhbj5VbmlmaWVkIHRva2VuIHN0YW5kYXJkIGZvciBEZmluaXR5PC9zcGFuPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItY2FyZCBjYXJkLTJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3JhcFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN2Z1wiPjwvZGl2PlxyXG4gICAgICAgICAgICA8c3Bhbj5Jc3N1ZSB5b3VyIHRva2VuIHdpdGggb25lIGNsaWNrIG9mIGEgYnV0dG9uPC9zcGFuPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItY2FyZCBjYXJkLTNcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3JhcFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN2Z1wiPjwvZGl2PlxyXG4gICAgICAgICAgICA8c3Bhbj5NYW5hZ2UgeW91ciB0b2tlbnM6IHRyYW5zZmVyLCBidXJuLCBtaW50PC9zcGFuPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibGFiZWwtMlwiIGlkPVwibGFiZWwtMlwiPlxyXG4gICAgICAgIERUb2tlbiBBcmNoaXRlY3R1cmVcclxuICAgICAgPC9sYWJlbD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwaG9uZVwiPjwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImR0b2tlblwiIGlkPVwiZHRva2VuXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWdcIj48L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctMVwiIGlkPVwiYmctMVwiPjwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtM1wiIGlkPVwiY29udGVudC0zXCI+XHJcbiAgICAgICAgPGxhYmVsPi0gRFNXQVAgLTwvbGFiZWw+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdHJ1Y3R1cmVcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1nXCI+PC9kaXY+XHJcbiAgICAgICAgICA8c3Bhbj5Qcm9kdWN0IFN0cnVjdHVyZTwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC0yXCIgaWQ9XCJjb250ZW50LTJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJveC0xXCI+XHJcbiAgICAgICAgICAgIDxzcGFuPkF1dG9tYXRlZCBNYXJrZXQgTWFrZXIgRGVjZW50cmFsaXplZCBFeGNoYW5nZTwvc3Bhbj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdmdcIj48L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3gtMlwiPlxyXG4gICAgICAgICAgICA8bGFiZWw+TGlnaHRuaW5nIFN3YXA8L2xhYmVsPlxyXG4gICAgICAgICAgICA8c3Bhbj5Td2FwIG9uZSB0b2tlbiBmb3IgYW5vdGhlciB3aXRoIGxpZ2h0bmluZyBzcGVlZDwvc3Bhbj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdmctMVwiPjwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN2Zy0yXCI+PC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94LTNcIj5cclxuICAgICAgICAgICAgPGxhYmVsPlxyXG4gICAgICAgICAgICAgIEFQSSBmb3IgZGV2ZWxvcGVycyB0byBidWlsZCB0aGVpciBvd24gYXBwbGljYXRpb24gYmFzZWQgb24gRFN3YXBcclxuICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgPHNwYW4+U3VjaCBhcyBsaXF1aWRpdHkgZmFybWluZyBhcHBsaWNhdGlvbnM8L3NwYW4+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3ZnXCI+PC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0yXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJveC00XCI+XHJcbiAgICAgICAgICAgIDxsYWJlbD4wLjMlPC9sYWJlbD5cclxuICAgICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgICAgIHhtbG5zWGxpbms9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCJcclxuICAgICAgICAgICAgICB3aWR0aD1cIjc4OC42NjFcIlxyXG4gICAgICAgICAgICAgIGhlaWdodD1cIjIzMi43NDVcIlxyXG4gICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgNzg4LjY2MSAyMzIuNzQ1XCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxkZWZzPlxyXG4gICAgICAgICAgICAgICAgPGxpbmVhckdyYWRpZW50XHJcbiAgICAgICAgICAgICAgICAgIGlkPVwibGluZWFyLWdyYWRpZW50XCJcclxuICAgICAgICAgICAgICAgICAgeDE9XCIwLjVcIlxyXG4gICAgICAgICAgICAgICAgICB4Mj1cIjAuNVwiXHJcbiAgICAgICAgICAgICAgICAgIHkyPVwiMVwiXHJcbiAgICAgICAgICAgICAgICAgIGdyYWRpZW50VW5pdHM9XCJvYmplY3RCb3VuZGluZ0JveFwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxzdG9wIG9mZnNldD1cIjBcIiBzdG9wQ29sb3I9XCIjZTIxZjc5XCIgLz5cclxuICAgICAgICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PVwiMVwiIHN0b3BDb2xvcj1cIiNhMDE5YmFcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9saW5lYXJHcmFkaWVudD5cclxuICAgICAgICAgICAgICA8L2RlZnM+XHJcbiAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgIGlkPVwi6Lev5b6EXzUwXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtbmFtZT1cIui3r+W+hCA1MFwiXHJcbiAgICAgICAgICAgICAgICBkPVwiTTMwMzguMDMxLDI1MzIuMjE2Yy0xODQuNzg5LDE1MC41MDgtMTQ2LjUxOC01My40MDktMzI1LjU5NSwwcy0xNjIuMjI3LTcwLjI2LTMyMS44ODIsMjEuMTM1LTM3Ljk4NiwxOTcuOTI3LTM3Ljk4NiwxOTcuOTI3aDc0NC4zWlwiXHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoLTIzMDguMjA2IC0yNTE4LjUzMylcIlxyXG4gICAgICAgICAgICAgICAgZmlsbD1cInVybCgjbGluZWFyLWdyYWRpZW50KVwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgIDxzcGFuPlByb3ZpZGUgTGlxdWlkaXR5IFRvIEVhcm4gMC4zJSBUcmFuc2FjdGlvbiBGZWU8L3NwYW4+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94LTVcIj5cclxuICAgICAgICAgICAgPGxhYmVsPlNlY3VyZSBBdG9taWMgU3dhcDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgICAgICB4bWxuc1hsaW5rPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiXHJcbiAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCA1MjguMDI3IDM3Ny42MzNcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPGRlZnM+XHJcbiAgICAgICAgICAgICAgICA8bGluZWFyR3JhZGllbnRcclxuICAgICAgICAgICAgICAgICAgaWQ9XCJsaW5lYXItZ3JhZGllbnQtMVwiXHJcbiAgICAgICAgICAgICAgICAgIHgxPVwiMC4xNDZcIlxyXG4gICAgICAgICAgICAgICAgICB4Mj1cIjFcIlxyXG4gICAgICAgICAgICAgICAgICB5Mj1cIjAuODI3XCJcclxuICAgICAgICAgICAgICAgICAgZ3JhZGllbnRVbml0cz1cIm9iamVjdEJvdW5kaW5nQm94XCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PVwiMFwiIHN0b3BDb2xvcj1cIiM1YTY4ZDJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICA8c3RvcCBvZmZzZXQ9XCIxXCIgc3RvcENvbG9yPVwiI2IxNDZkN1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8L2xpbmVhckdyYWRpZW50PlxyXG4gICAgICAgICAgICAgICAgPGxpbmVhckdyYWRpZW50XHJcbiAgICAgICAgICAgICAgICAgIGlkPVwibGluZWFyLWdyYWRpZW50LTJcIlxyXG4gICAgICAgICAgICAgICAgICB4MT1cIjAuNVwiXHJcbiAgICAgICAgICAgICAgICAgIHgyPVwiMC41XCJcclxuICAgICAgICAgICAgICAgICAgeTI9XCIxXCJcclxuICAgICAgICAgICAgICAgICAgZ3JhZGllbnRVbml0cz1cIm9iamVjdEJvdW5kaW5nQm94XCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PVwiMFwiIHN0b3BDb2xvcj1cIiMzZGM0ZWRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICA8c3RvcCBvZmZzZXQ9XCIxXCIgc3RvcENvbG9yPVwiIzI5NzZiYVwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L2xpbmVhckdyYWRpZW50PlxyXG4gICAgICAgICAgICAgICAgPGxpbmVhckdyYWRpZW50XHJcbiAgICAgICAgICAgICAgICAgIGlkPVwibGluZWFyLWdyYWRpZW50LTNcIlxyXG4gICAgICAgICAgICAgICAgICB4MT1cIjAuNVwiXHJcbiAgICAgICAgICAgICAgICAgIHgyPVwiMC41XCJcclxuICAgICAgICAgICAgICAgICAgeTI9XCIxXCJcclxuICAgICAgICAgICAgICAgICAgZ3JhZGllbnRVbml0cz1cIm9iamVjdEJvdW5kaW5nQm94XCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PVwiMFwiIHN0b3BDb2xvcj1cIiNmODllMzZcIiAvPlxyXG4gICAgICAgICAgICAgICAgICA8c3RvcCBvZmZzZXQ9XCIxXCIgc3RvcENvbG9yPVwiI2ZmYWI0YVwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L2xpbmVhckdyYWRpZW50PlxyXG4gICAgICAgICAgICAgICAgPGxpbmVhckdyYWRpZW50XHJcbiAgICAgICAgICAgICAgICAgIGlkPVwibGluZWFyLWdyYWRpZW50LTRcIlxyXG4gICAgICAgICAgICAgICAgICB4MT1cIjAuNVwiXHJcbiAgICAgICAgICAgICAgICAgIHgyPVwiMC41XCJcclxuICAgICAgICAgICAgICAgICAgeTI9XCIxXCJcclxuICAgICAgICAgICAgICAgICAgZ3JhZGllbnRVbml0cz1cIm9iamVjdEJvdW5kaW5nQm94XCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PVwiMFwiIHN0b3BDb2xvcj1cIiNlMjFmNzlcIiAvPlxyXG4gICAgICAgICAgICAgICAgICA8c3RvcCBvZmZzZXQ9XCIxXCIgc3RvcENvbG9yPVwiI2EwMTliYVwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L2xpbmVhckdyYWRpZW50PlxyXG4gICAgICAgICAgICAgIDwvZGVmcz5cclxuICAgICAgICAgICAgICA8ZWxsaXBzZVxyXG4gICAgICAgICAgICAgICAgaWQ9XCJvdmFsXzE0XCJcclxuICAgICAgICAgICAgICAgIGRhdGEtbmFtZT1cIm92YWwgMTRcIlxyXG4gICAgICAgICAgICAgICAgY3g9XCI3NC4zNDRcIlxyXG4gICAgICAgICAgICAgICAgY3k9XCIxNzEuNzQ2XCJcclxuICAgICAgICAgICAgICAgIHJ4PVwiNzQuMzQ0XCJcclxuICAgICAgICAgICAgICAgIHJ5PVwiMTcxLjc0NlwiXHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm09XCJtYXRyaXgoMC42MDIsIC0wLjc5OSwgMC43OTksIDAuNjAyLCAxNDAuNzg4LCAxNjMuNDc5KVwiXHJcbiAgICAgICAgICAgICAgICBmaWxsPVwibm9uZVwiXHJcbiAgICAgICAgICAgICAgICBzdHJva2U9XCIjZTFlMWUxXCJcclxuICAgICAgICAgICAgICAgIHN0cm9rZU1pdGVybGltaXQ9XCIxMFwiXHJcbiAgICAgICAgICAgICAgICBzdHJva2VXaWR0aD1cIjZcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPGVsbGlwc2VcclxuICAgICAgICAgICAgICAgIGlkPVwib3ZhbF8xNVwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLW5hbWU9XCJvdmFsIDE1XCJcclxuICAgICAgICAgICAgICAgIGN4PVwiMTM5Ljc2OVwiXHJcbiAgICAgICAgICAgICAgICBjeT1cIjEzNC45MzdcIlxyXG4gICAgICAgICAgICAgICAgcng9XCIxMzkuNzY5XCJcclxuICAgICAgICAgICAgICAgIHJ5PVwiMTM0LjkzN1wiXHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMTUwLjQ1NSAxMzUuMjkyKSByb3RhdGUoLTI4KVwiXHJcbiAgICAgICAgICAgICAgICBmaWxsPVwibm9uZVwiXHJcbiAgICAgICAgICAgICAgICBzdHJva2U9XCIjZTFlMWUxXCJcclxuICAgICAgICAgICAgICAgIHN0cm9rZU1pdGVybGltaXQ9XCIxMFwiXHJcbiAgICAgICAgICAgICAgICBzdHJva2VXaWR0aD1cIjZcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPGNpcmNsZVxyXG4gICAgICAgICAgICAgICAgaWQ9XCJvdmFsXzExXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtbmFtZT1cIm92YWwgMTFcIlxyXG4gICAgICAgICAgICAgICAgY3g9XCI3OC4wNTRcIlxyXG4gICAgICAgICAgICAgICAgY3k9XCI3OC4wNTRcIlxyXG4gICAgICAgICAgICAgICAgcj1cIjc4LjA1NFwiXHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMjYwLjY1OSAxMTAuNzYzKVwiXHJcbiAgICAgICAgICAgICAgICBmaWxsPVwidXJsKCNsaW5lYXItZ3JhZGllbnQtMSlcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPGNpcmNsZVxyXG4gICAgICAgICAgICAgICAgaWQ9XCJvdmFsXzEyXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtbmFtZT1cIm92YWwgMTJcIlxyXG4gICAgICAgICAgICAgICAgY3g9XCIyNS40MjhcIlxyXG4gICAgICAgICAgICAgICAgY3k9XCIyNS40MjhcIlxyXG4gICAgICAgICAgICAgICAgcj1cIjI1LjQyOFwiXHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm09XCJtYXRyaXgoMC45NjYsIC0wLjI1OSwgMC4yNTksIDAuOTY2LCA0MjMuNzY3LCA5Mi43ODIpXCJcclxuICAgICAgICAgICAgICAgIGZpbGw9XCJ1cmwoI2xpbmVhci1ncmFkaWVudC0yKVwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8Y2lyY2xlXHJcbiAgICAgICAgICAgICAgICBpZD1cIm92YWxfMTNcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1uYW1lPVwib3ZhbCAxM1wiXHJcbiAgICAgICAgICAgICAgICBjeD1cIjI1LjQyOFwiXHJcbiAgICAgICAgICAgICAgICBjeT1cIjI1LjQyOFwiXHJcbiAgICAgICAgICAgICAgICByPVwiMjUuNDI4XCJcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybT1cIm1hdHJpeCgwLjk5NiwgMC4wODcsIC0wLjA4NywgMC45OTYsIDE4OS40MDYsIDE3OS45MTcpXCJcclxuICAgICAgICAgICAgICAgIGZpbGw9XCJ1cmwoI2xpbmVhci1ncmFkaWVudC0zKVwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8Y2lyY2xlXHJcbiAgICAgICAgICAgICAgICBpZD1cIm92YWxfMTZcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1uYW1lPVwib3ZhbCAxNlwiXHJcbiAgICAgICAgICAgICAgICBjeD1cIjE5XCJcclxuICAgICAgICAgICAgICAgIGN5PVwiMTlcIlxyXG4gICAgICAgICAgICAgICAgcj1cIjE5XCJcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgwIDMxMi4xOTcpXCJcclxuICAgICAgICAgICAgICAgIGZpbGw9XCJ1cmwoI2xpbmVhci1ncmFkaWVudC00KVwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyLXdyYXBcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvb3Rlci1iZy0xXCI+PC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy0yXCI+PC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy0zXCI+PC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyLTFcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXItYnJhbmRcIj48L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaW5rLXdyYXBcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpbmtzXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImEtd3JhcFwiPlxyXG4gICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm9uZXBhZ2VyXCJcclxuICAgICAgICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xb2JYS2xyX0dGSzRydmZ6S3A1clU4Y2x3dnc5TUZWSVgvdmlldz91c3A9c2hhcmluZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIE9uZXBhZ2VyXHJcbiAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwiYS13cmFwXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInRlYW1cIj5UZWFtPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+ICovfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cImxpbmtzXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImEtd3JhcFwiPlxyXG4gICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJhcHBcIj5BcHA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYS13cmFwXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImFib3V0XCI+QWJvdXQ8L2E+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj4gKi99XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvb3Rlci0yXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlua3NcIj5cclxuICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9kZmluYW5jZS10ZWNoXCJcclxuICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgICAgICAgICByZWw9XCJub3JlZmVycmVyXCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDM4LjA2NyAzNy4xMTZcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICAgIGlkPVwiSWNvbl9hd2Vzb21lLWdpdGh1YlwiXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS1uYW1lPVwiSWNvbiBhd2Vzb21lLWdpdGh1YlwiXHJcbiAgICAgICAgICAgICAgICAgICAgZD1cIk0xMi43MzMsMzAuNDQ4YzAsLjE1My0uMTc3LjI3Ni0uNC4yNzYtLjI1My4wMjMtLjQzLS4xLS40My0uMjc2LDAtLjE1My4xNzctLjI3Ni40LS4yNzZDMTIuNTMzLDMwLjE0OSwxMi43MzMsMzAuMjcyLDEyLjczMywzMC40NDhaTTEwLjM0NiwzMC4xYy0uMDU0LjE1My4xLjMzLjMzLjM3NmEuMzYuMzYsMCwwLDAsLjQ3Ni0uMTUzYy4wNDYtLjE1My0uMS0uMzMtLjMzLS40QS4zOTQuMzk0LDAsMCwwLDEwLjM0NiwzMC4xWm0zLjM5Mi0uMTNjLS4yMjMuMDU0LS4zNzYuMi0uMzUzLjM3Ni4wMjMuMTUzLjIyMy4yNTMuNDUzLjJzLjM3Ni0uMi4zNTMtLjM1M1MxMy45NiwyOS45NDksMTMuNzM4LDI5Ljk3MlpNMTguNzg4LjU2M0ExOC40LDE4LjQsMCwwLDAsMCwxOS4yODksMTkuMjQxLDE5LjI0MSwwLDAsMCwxMy4wMDksMzcuNjQ3Yy45ODIuMTc3LDEuMzI4LS40MywxLjMyOC0uOTI5LDAtLjQ3Ni0uMDIzLTMuMS0uMDIzLTQuNzEyLDAsMC01LjM3MiwxLjE1MS02LjUtMi4yODcsMCwwLS44NzUtMi4yMzMtMi4xMzQtMi44MDksMCwwLTEuNzU4LTEuMi4xMjMtMS4xODJhNC4wNTEsNC4wNTEsMCwwLDEsMi45NjIsMS45OCw0LjA1Nyw0LjA1NywwLDAsMCw1LjU5NSwxLjYsNC4yNjYsNC4yNjYsMCwwLDEsMS4yMjgtMi41ODZjLTQuMjktLjQ3Ni04LjYxOS0xLjEtOC42MTktOC40ODFhNS44MTcsNS44MTcsMCwwLDEsMS44MTEtNC41Miw3LjI1MSw3LjI1MSwwLDAsMSwuMi01LjIxMWMxLjYtLjUsNS4zLDIuMDcyLDUuMywyLjA3MmExOC4xMzEsMTguMTMxLDAsMCwxLDkuNjQsMHMzLjY5Mi0yLjU3OSw1LjMtMi4wNzJhNy4yNDgsNy4yNDgsMCwwLDEsLjIsNS4yMTEsNS45NjYsNS45NjYsMCwwLDEsMS45OCw0LjUyYzAsNy40MDYtNC41Miw4LTguODExLDguNDgxYTQuNTM5LDQuNTM5LDAsMCwxLDEuMywzLjU2MWMwLDIuNTg2LS4wMjMsNS43ODctLjAyMyw2LjQxNiwwLC41LjM1MywxLjEwNSwxLjMyOC45MjlBMTkuMDY0LDE5LjA2NCwwLDAsMCwzOC4wNjcsMTkuMjg5QzM4LjA2Nyw4LjY0NCwyOS40MzMuNTYzLDE4Ljc4OC41NjNaTTcuNDYsMjcuMDMzYy0uMS4wNzctLjA3Ny4yNTMuMDU0LjQuMTIzLjEyMy4zLjE3Ny40LjA3Ny4xLS4wNzcuMDc3LS4yNTMtLjA1NC0uNEM3LjczNiwyNi45ODcsNy41NiwyNi45MzMsNy40NiwyNy4wMzNabS0uODI5LS42MjJjLS4wNTQuMS4wMjMuMjIzLjE3Ny4zYS4yMjguMjI4LDAsMCwwLC4zMy0uMDU0Yy4wNTQtLjEtLjAyMy0uMjIzLS4xNzctLjNDNi44MDgsMjYuMzExLDYuNjg1LDI2LjMzNSw2LjYzMSwyNi40MTFabTIuNDg3LDIuNzMyYy0uMTIzLjEtLjA3Ny4zMy4xLjQ3Ni4xNzcuMTc3LjQuMi41LjA3Ny4xLS4xLjA1NC0uMzMtLjEtLjQ3NkM5LjQ0OCwyOS4wNDQsOS4yMTcsMjkuMDIxLDkuMTE4LDI5LjE0M1ptLS44NzUtMS4xMjhjLS4xMjMuMDc3LS4xMjMuMjc2LDAsLjQ1M3MuMzMuMjUzLjQzLjE3N2EuMzUuMzUsMCwwLDAsMC0uNDc2QzguNTY1LDI3Ljk5Miw4LjM2NiwyNy45MTYsOC4yNDMsMjguMDE1WlwiXHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDAgLTAuNTYzKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgZmlsbD1cIiNlZmVmZWZcIlxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly90d2l0dGVyLmNvbS9ERmluYW5jZV9BSVwiXHJcbiAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgICAgICAgICAgcmVsPVwibm9yZWZlcnJlclwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCA0MS41NTQgMzMuNzQ5XCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgICBpZD1cIkljb25fYXdlc29tZS10d2l0dGVyXCJcclxuICAgICAgICAgICAgICAgICAgICBkYXRhLW5hbWU9XCJJY29uIGF3ZXNvbWUtdHdpdHRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgZD1cIk0zNy4yODMsMTEuNzkyYy4wMjYuMzY5LjAyNi43MzguMDI2LDEuMTA3LDAsMTEuMjU5LTguNTY5LDI0LjIzMS0yNC4yMzEsMjQuMjMxQTI0LjA2NywyNC4wNjcsMCwwLDEsMCwzMy4zMDdhMTcuNjE4LDE3LjYxOCwwLDAsMCwyLjA1Ny4xMDVBMTcuMDU2LDE3LjA1NiwwLDAsMCwxMi42MywyOS43NzRhOC41MzEsOC41MzEsMCwwLDEtNy45NjMtNS45MDZBMTAuNzQsMTAuNzQsMCwwLDAsNi4yNzUsMjRhOS4wMDcsOS4wMDcsMCwwLDAsMi4yNDEtLjI5LDguNTE4LDguNTE4LDAsMCwxLTYuODI5LTguMzU4di0uMTA1YTguNTc3LDguNTc3LDAsMCwwLDMuODUsMS4wODFBOC41MjksOC41MjksMCwwLDEsMi45LDQuOTM2YTI0LjIwOCwyNC4yMDgsMCwwLDAsMTcuNTYsOC45MTJBOS42MTQsOS42MTQsMCwwLDEsMjAuMjUsMTEuOSw4LjUyNSw4LjUyNSwwLDAsMSwzNC45ODksNi4wN2ExNi43NjcsMTYuNzY3LDAsMCwwLDUuNDA1LTIuMDU3QTguNDkzLDguNDkzLDAsMCwxLDM2LjY1LDguNzA3YTE3LjA3MywxNy4wNzMsMCwwLDAsNC45LTEuMzE4LDE4LjMwNywxOC4zMDcsMCwwLDEtNC4yNzEsNC40WlwiXHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDAgLTMuMzgxKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgZmlsbD1cIiNlZmVmZWZcIlxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9kaXNjb3JkLmdnL0VrbW5SZDk5aDZcIlxyXG4gICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgICAgICAgIHJlbD1cIm5vcmVmZXJyZXJcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNjQwIDUxMlwiPlxyXG4gICAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICAgIGZpbGw9XCIjZWZlZmVmXCJcclxuICAgICAgICAgICAgICAgICAgICBkPVwiTTUyNC41MzEsNjkuODM2YTEuNSwxLjUsMCwwLDAtLjc2NC0uN0E0ODUuMDY1LDQ4NS4wNjUsMCwwLDAsNDA0LjA4MSwzMi4wM2ExLjgxNiwxLjgxNiwwLDAsMC0xLjkyMy45MSwzMzcuNDYxLDMzNy40NjEsMCwwLDAtMTQuOSwzMC42LDQ0Ny44NDgsNDQ3Ljg0OCwwLDAsMC0xMzQuNDI2LDAsMzA5LjU0MSwzMDkuNTQxLDAsMCwwLTE1LjEzNS0zMC42LDEuODksMS44OSwwLDAsMC0xLjkyNC0uOTFBNDgzLjY4OSw0ODMuNjg5LDAsMCwwLDExNi4wODUsNjkuMTM3YTEuNzEyLDEuNzEyLDAsMCwwLS43ODguNjc2QzM5LjA2OCwxODMuNjUxLDE4LjE4NiwyOTQuNjksMjguNDMsNDA0LjM1NGEyLjAxNiwyLjAxNiwwLDAsMCwuNzY1LDEuMzc1QTQ4Ny42NjYsNDg3LjY2NiwwLDAsMCwxNzYuMDIsNDc5LjkxOGExLjksMS45LDAsMCwwLDIuMDYzLS42NzZBMzQ4LjIsMzQ4LjIsMCwwLDAsMjA4LjEyLDQzMC40YTEuODYsMS44NiwwLDAsMC0xLjAxOS0yLjU4OCwzMjEuMTczLDMyMS4xNzMsMCwwLDEtNDUuODY4LTIxLjg1MywxLjg4NSwxLjg4NSwwLDAsMS0uMTg1LTMuMTI2YzMuMDgyLTIuMzA5LDYuMTY2LTQuNzExLDkuMTA5LTcuMTM3YTEuODE5LDEuODE5LDAsMCwxLDEuOS0uMjU2Yzk2LjIyOSw0My45MTcsMjAwLjQxLDQzLjkxNywyOTUuNSwwYTEuODEyLDEuODEyLDAsMCwxLDEuOTI0LjIzM2MyLjk0NCwyLjQyNiw2LjAyNyw0Ljg1MSw5LjEzMiw3LjE2YTEuODg0LDEuODg0LDAsMCwxLS4xNjIsMy4xMjYsMzAxLjQwNywzMDEuNDA3LDAsMCwxLTQ1Ljg5LDIxLjgzLDEuODc1LDEuODc1LDAsMCwwLTEsMi42MTEsMzkxLjA1NSwzOTEuMDU1LDAsMCwwLDMwLjAxNCw0OC44MTUsMS44NjQsMS44NjQsMCwwLDAsMi4wNjMuN0E0ODYuMDQ4LDQ4Ni4wNDgsMCwwLDAsNjEwLjcsNDA1LjcyOWExLjg4MiwxLjg4MiwwLDAsMCwuNzY1LTEuMzUyQzYyMy43MjksMjc3LjU5NCw1OTAuOTMzLDE2Ny40NjUsNTI0LjUzMSw2OS44MzZaTTIyMi40OTEsMzM3LjU4Yy0yOC45NzIsMC01Mi44NDQtMjYuNTg3LTUyLjg0NC01OS4yMzlTMTkzLjA1NiwyMTkuMSwyMjIuNDkxLDIxOS4xYzI5LjY2NSwwLDUzLjMwNiwyNi44Miw1Mi44NDMsNTkuMjM5QzI3NS4zMzQsMzEwLjk5MywyNTEuOTI0LDMzNy41OCwyMjIuNDkxLDMzNy41OFptMTk1LjM4LDBjLTI4Ljk3MSwwLTUyLjg0My0yNi41ODctNTIuODQzLTU5LjIzOVMzODguNDM3LDIxOS4xLDQxNy44NzEsMjE5LjFjMjkuNjY3LDAsNTMuMzA3LDI2LjgyLDUyLjg0NCw1OS4yMzlDNDcwLjcxNSwzMTAuOTkzLDQ0Ny41MzgsMzM3LjU4LDQxNy44NzEsMzM3LjU4WlwiXHJcbiAgICAgICAgICAgICAgICAgID48L3BhdGg+XHJcbiAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvbnRhY3RcIlxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogXCIjZmZmXCIsXHJcbiAgICAgICAgICAgICAgICBmb250U2l6ZTogXCIyLjhyZW1cIixcclxuICAgICAgICAgICAgICAgIGZvbnRGYW1pbHk6IFwiUm9ib3RvIGJvbGRcIixcclxuICAgICAgICAgICAgICAgIGJvcmRlckxlZnQ6IFwiMXB4IHNvbGlkICNmZmZcIixcclxuICAgICAgICAgICAgICAgIG1hcmdpbkxlZnQ6IFwiMnJlbVwiLFxyXG4gICAgICAgICAgICAgICAgcGFkZGluZ0xlZnQ6IFwiMy4ycmVtXCIsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiNHJlbVwiLFxyXG4gICAgICAgICAgICAgICAgbGluZUhlaWdodDogXCI0cmVtXCIsXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIENvbnRhY3Q6IGhlbGxvQGRmaW5hbmNlLmFpXHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb3B5cmlnaHRcIj5cclxuICAgICAgICAgICAgICBDb3B5cmlnaHQgwqkgMjAyMSBEZmluYW5jZS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==