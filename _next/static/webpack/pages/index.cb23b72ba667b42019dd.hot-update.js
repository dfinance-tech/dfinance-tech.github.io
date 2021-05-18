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
  }, "DFinace is building the open financial services infrastructure for the DFINITY Internet Computer."), __jsx("div", {
    className: "header-link",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 7
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 9
    }
  }, "APP (coming soon)")), __jsx("label", {
    className: "label-1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 7
    }
  }, "- DTOKEN -"), __jsx("div", {
    className: "header-cards",
    id: "cards",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "header-card card-1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "wrap",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "svg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 13
    }
  }), __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 13
    }
  }, "Unified token standard for Dfinity"))), __jsx("div", {
    className: "header-card card-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "wrap",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "svg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 13
    }
  }), __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 13
    }
  }, "Issue your token with one click of a button"))), __jsx("div", {
    className: "header-card card-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "wrap",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "svg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 13
    }
  }), __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 13
    }
  }, "Manage your tokens: transfer, burn, mint")))), __jsx("label", {
    className: "label-2",
    id: "label-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 7
    }
  }, "DToken Architecture"), __jsx("div", {
    className: "phone",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: "dtoken",
    id: "dtoken",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "img",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 9
    }
  })), __jsx("div", {
    className: "bg-1",
    id: "bg-1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: "content-3",
    id: "content-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 7
    }
  }, __jsx("label", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 9
    }
  }, "- DSWAP -"), __jsx("div", {
    className: "structure",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "img",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 11
    }
  }), __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 11
    }
  }, "Product Structure"))), __jsx("div", {
    className: "content-2",
    id: "content-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "col-1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "box-1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 11
    }
  }, __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 13
    }
  }, "Automated Market Maker Decentralized Exchange"), __jsx("div", {
    className: "svg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 13
    }
  })), __jsx("div", {
    className: "box-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 11
    }
  }, __jsx("label", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 13
    }
  }, "Lightning Swap"), __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 13
    }
  }, "Swap one token for another with lightning speed"), __jsx("div", {
    className: "svg-1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: "svg-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 13
    }
  })), __jsx("div", {
    className: "box-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 11
    }
  }, __jsx("label", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 13
    }
  }, "API for developers to build their own application based on DSwap"), __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 13
    }
  }, "Such as liquidity farming applications"), __jsx("div", {
    className: "svg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 13
    }
  }))), __jsx("div", {
    className: "col-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "box-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 11
    }
  }, __jsx("label", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
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
      lineNumber: 130,
      columnNumber: 13
    }
  }, __jsx("defs", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
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
      lineNumber: 138,
      columnNumber: 17
    }
  }, __jsx("stop", {
    offset: "0",
    stopColor: "#e21f79",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 19
    }
  }), __jsx("stop", {
    offset: "1",
    stopColor: "#a019ba",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
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
      lineNumber: 149,
      columnNumber: 15
    }
  })), __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 13
    }
  }, "Provide Liquidity To Earn 0.3% Transaction Fee")), __jsx("div", {
    className: "box-5",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 11
    }
  }, __jsx("label", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 13
    }
  }, "Secure Atomic Swap"), __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    viewBox: "0 0 528.027 377.633",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 13
    }
  }, __jsx("defs", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
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
      lineNumber: 167,
      columnNumber: 17
    }
  }, __jsx("stop", {
    offset: "0",
    stopColor: "#5a68d2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174,
      columnNumber: 19
    }
  }), __jsx("stop", {
    offset: "1",
    stopColor: "#b146d7",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175,
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
      lineNumber: 177,
      columnNumber: 17
    }
  }, __jsx("stop", {
    offset: "0",
    stopColor: "#3dc4ed",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184,
      columnNumber: 19
    }
  }), __jsx("stop", {
    offset: "1",
    stopColor: "#2976ba",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185,
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
      lineNumber: 187,
      columnNumber: 17
    }
  }, __jsx("stop", {
    offset: "0",
    stopColor: "#f89e36",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194,
      columnNumber: 19
    }
  }), __jsx("stop", {
    offset: "1",
    stopColor: "#ffab4a",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195,
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
      lineNumber: 197,
      columnNumber: 17
    }
  }, __jsx("stop", {
    offset: "0",
    stopColor: "#e21f79",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204,
      columnNumber: 19
    }
  }), __jsx("stop", {
    offset: "1",
    stopColor: "#a019ba",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205,
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
      lineNumber: 208,
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
      lineNumber: 221,
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
      lineNumber: 234,
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
      lineNumber: 243,
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
      lineNumber: 252,
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
      lineNumber: 261,
      columnNumber: 15
    }
  }))))), __jsx("div", {
    className: "footer-wrap",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 274,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "footer-bg-1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 275,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: "bg-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 276,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: "bg-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 277,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: "footer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 278,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "footer-1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 279,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "footer-brand",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 280,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: "link-wrap",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 281,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "links",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 282,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "a-wrap",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 283,
      columnNumber: 17
    }
  }, __jsx("a", {
    className: "onepager",
    href: "https://drive.google.com/file/d/1rs49aMhYJdnyNX_n5Q4ohgOSPU5zSEOn/view?usp=sharing",
    target: "_blank",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 284,
      columnNumber: 19
    }
  }, "Onepager"))))), __jsx("div", {
    className: "footer-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 306,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "links",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 307,
      columnNumber: 13
    }
  }, __jsx("a", {
    href: "https://github.com/dfinance-tech",
    target: "_blank",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 308,
      columnNumber: 15
    }
  }, __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 38.067 37.116",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 309,
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
      lineNumber: 313,
      columnNumber: 19
    }
  })))), __jsx("span", {
    classNam: "contact",
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
      lineNumber: 323,
      columnNumber: 13
    }
  }, "Contact: hello@dfinance.ai"), __jsx("div", {
    className: "copyright",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 338,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbIkhvbWUiLCJ1c2VFZmZlY3QiLCJpc01vYmlsZSIsIm5hdmlnYXRvciIsInVzZXJBZ2VudCIsIm1hdGNoIiwidmFsIiwiaHRtbCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJjbGFzc0xpc3QiLCJhZGQiLCJoYW5kbGVTY3JvbGwiLCJoZWlnaHQiLCJ3aW5kb3ciLCJpbm5lckhlaWdodCIsInRvcCIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJnZXRFbGVtZW50QnlJZCIsInN0eWxlIiwib3BhY2l0eSIsImFkZEV2ZW50TGlzdGVuZXIiLCJjb2xvciIsImZvbnRTaXplIiwiZm9udEZhbWlseSIsImJvcmRlckxlZnQiLCJtYXJnaW5MZWZ0IiwicGFkZGluZ0xlZnQiLCJsaW5lSGVpZ2h0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsSUFBTUEsSUFBSSxHQUFHLFNBQVBBLElBQU8sR0FBTTtBQUFBOztBQUNqQkMseURBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBTTtBQUNyQixVQUNFQyxTQUFTLENBQUNDLFNBQVYsQ0FBb0JDLEtBQXBCLENBQTBCLFVBQTFCLEtBQ0FGLFNBQVMsQ0FBQ0MsU0FBVixDQUFvQkMsS0FBcEIsQ0FBMEIsUUFBMUIsQ0FEQSxJQUVBRixTQUFTLENBQUNDLFNBQVYsQ0FBb0JDLEtBQXBCLENBQTBCLFNBQTFCLENBRkEsSUFHQUYsU0FBUyxDQUFDQyxTQUFWLENBQW9CQyxLQUFwQixDQUEwQixPQUExQixDQUhBLElBSUFGLFNBQVMsQ0FBQ0MsU0FBVixDQUFvQkMsS0FBcEIsQ0FBMEIsT0FBMUIsQ0FKQSxJQUtBRixTQUFTLENBQUNDLFNBQVYsQ0FBb0JDLEtBQXBCLENBQTBCLGFBQTFCLENBTEEsSUFN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a0NBakJGLEVBZ0NFO0FBQUssYUFBUyxFQUFDLFdBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwREFoQ0YsQ0E1QkYsQ0FKRixDQTlORixDQURGO0FBdVNELENBdFZEOztHQUFNN0IsSTs7S0FBQUEsSTtBQXdWU0EsbUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguY2IyM2I3MmJhNjY3YjQyMDE5ZGQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgSG9tZSA9ICgpID0+IHtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgaXNNb2JpbGUgPSAoKSA9PiB7XHJcbiAgICAgIGlmIChcclxuICAgICAgICBuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9BbmRyb2lkL2kpIHx8XHJcbiAgICAgICAgbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvd2ViT1MvaSkgfHxcclxuICAgICAgICBuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9pUGhvbmUvaSkgfHxcclxuICAgICAgICBuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9pUGFkL2kpIHx8XHJcbiAgICAgICAgbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvaVBvZC9pKSB8fFxyXG4gICAgICAgIG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL0JsYWNrQmVycnkvaSkgfHxcclxuICAgICAgICBuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9XaW5kb3dzIFBob25lL2kpXHJcbiAgICAgICkge1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCB2YWwgPSBpc01vYmlsZSgpO1xyXG4gICAgaWYgKHZhbCkge1xyXG4gICAgICBjb25zdCBodG1sID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJodG1sXCIpWzBdO1xyXG4gICAgICBodG1sLmNsYXNzTGlzdC5hZGQoXCJtb2JpbGVcIik7XHJcbiAgICB9XHJcbiAgICBjb25zdCBoYW5kbGVTY3JvbGwgPSAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IGhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcclxuICAgICAgY29uc3QgdG9wID0gZG9jdW1lbnRcclxuICAgICAgICAuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImNvbnRlbnQtM1wiKVswXVxyXG4gICAgICAgIC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3A7XHJcbiAgICAgIGlmICh0b3AgPCBoZWlnaHQgKiAwLjIpIHtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxhYmVsLTJcIikuc3R5bGUub3BhY2l0eSA9IFwiMFwiO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZHRva2VuXCIpLnN0eWxlLm9wYWNpdHkgPSBcIjBcIjtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhcmRzXCIpLnN0eWxlLm9wYWNpdHkgPSBcIjBcIjtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJnLTFcIikuc3R5bGUub3BhY2l0eSA9IFwiMFwiO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudC0zXCIpLnN0eWxlLm9wYWNpdHkgPSBcIjFcIjtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnQtMlwiKS5zdHlsZS5vcGFjaXR5ID0gXCIxXCI7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50LTNcIikuc3R5bGUub3BhY2l0eSA9IFwiMFwiO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudC0yXCIpLnN0eWxlLm9wYWNpdHkgPSBcIjBcIjtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJnLTFcIikuc3R5bGUub3BhY2l0eSA9IFwiMVwiO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGFiZWwtMlwiKS5zdHlsZS5vcGFjaXR5ID0gXCIxXCI7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkdG9rZW5cIikuc3R5bGUub3BhY2l0eSA9IFwiMVwiO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FyZHNcIikuc3R5bGUub3BhY2l0eSA9IFwiMVwiO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgaGFuZGxlU2Nyb2xsKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIkhvbWVcIj5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPkRGaW5hbmNlPC90aXRsZT5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci1icmFuZFwiPlxyXG4gICAgICAgIDxhIGhyZWY9XCIvXCI+PC9hPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYWxsLTFcIj48L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYWxsLTJcIj48L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYWxsLTNcIj48L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYWxsLTRcIj48L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItdGl0bGVcIj5VbmxlYXNoIHRoZSBwb3dlciBvZiBEZUZpPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLXN1YnRpdGxlXCI+XHJcbiAgICAgICAgREZpbmFjZSBpcyBidWlsZGluZyB0aGUgb3BlbiBmaW5hbmNpYWwgc2VydmljZXMgaW5mcmFzdHJ1Y3R1cmUgZm9yIHRoZVxyXG4gICAgICAgIERGSU5JVFkgSW50ZXJuZXQgQ29tcHV0ZXIuXHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci1saW5rXCI+XHJcbiAgICAgICAgPGE+QVBQIChjb21pbmcgc29vbik8L2E+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibGFiZWwtMVwiPi0gRFRPS0VOIC08L2xhYmVsPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci1jYXJkc1wiIGlkPVwiY2FyZHNcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci1jYXJkIGNhcmQtMVwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cmFwXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3ZnXCI+PC9kaXY+XHJcbiAgICAgICAgICAgIDxzcGFuPlVuaWZpZWQgdG9rZW4gc3RhbmRhcmQgZm9yIERmaW5pdHk8L3NwYW4+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci1jYXJkIGNhcmQtMlwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cmFwXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3ZnXCI+PC9kaXY+XHJcbiAgICAgICAgICAgIDxzcGFuPklzc3VlIHlvdXIgdG9rZW4gd2l0aCBvbmUgY2xpY2sgb2YgYSBidXR0b248L3NwYW4+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci1jYXJkIGNhcmQtM1wiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cmFwXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3ZnXCI+PC9kaXY+XHJcbiAgICAgICAgICAgIDxzcGFuPk1hbmFnZSB5b3VyIHRva2VuczogdHJhbnNmZXIsIGJ1cm4sIG1pbnQ8L3NwYW4+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsYWJlbC0yXCIgaWQ9XCJsYWJlbC0yXCI+XHJcbiAgICAgICAgRFRva2VuIEFyY2hpdGVjdHVyZVxyXG4gICAgICA8L2xhYmVsPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInBob25lXCI+PC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHRva2VuXCIgaWQ9XCJkdG9rZW5cIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltZ1wiPjwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy0xXCIgaWQ9XCJiZy0xXCI+PC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC0zXCIgaWQ9XCJjb250ZW50LTNcIj5cclxuICAgICAgICA8bGFiZWw+LSBEU1dBUCAtPC9sYWJlbD5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0cnVjdHVyZVwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWdcIj48L2Rpdj5cclxuICAgICAgICAgIDxzcGFuPlByb2R1Y3QgU3RydWN0dXJlPC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LTJcIiBpZD1cImNvbnRlbnQtMlwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTFcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94LTFcIj5cclxuICAgICAgICAgICAgPHNwYW4+QXV0b21hdGVkIE1hcmtldCBNYWtlciBEZWNlbnRyYWxpemVkIEV4Y2hhbmdlPC9zcGFuPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN2Z1wiPjwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJveC0yXCI+XHJcbiAgICAgICAgICAgIDxsYWJlbD5MaWdodG5pbmcgU3dhcDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxzcGFuPlN3YXAgb25lIHRva2VuIGZvciBhbm90aGVyIHdpdGggbGlnaHRuaW5nIHNwZWVkPC9zcGFuPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN2Zy0xXCI+PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3ZnLTJcIj48L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3gtM1wiPlxyXG4gICAgICAgICAgICA8bGFiZWw+XHJcbiAgICAgICAgICAgICAgQVBJIGZvciBkZXZlbG9wZXJzIHRvIGJ1aWxkIHRoZWlyIG93biBhcHBsaWNhdGlvbiBiYXNlZCBvbiBEU3dhcFxyXG4gICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICA8c3Bhbj5TdWNoIGFzIGxpcXVpZGl0eSBmYXJtaW5nIGFwcGxpY2F0aW9uczwvc3Bhbj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdmdcIj48L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94LTRcIj5cclxuICAgICAgICAgICAgPGxhYmVsPjAuMyU8L2xhYmVsPlxyXG4gICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgICAgICAgeG1sbnNYbGluaz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIlxyXG4gICAgICAgICAgICAgIHdpZHRoPVwiNzg4LjY2MVwiXHJcbiAgICAgICAgICAgICAgaGVpZ2h0PVwiMjMyLjc0NVwiXHJcbiAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCA3ODguNjYxIDIzMi43NDVcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPGRlZnM+XHJcbiAgICAgICAgICAgICAgICA8bGluZWFyR3JhZGllbnRcclxuICAgICAgICAgICAgICAgICAgaWQ9XCJsaW5lYXItZ3JhZGllbnRcIlxyXG4gICAgICAgICAgICAgICAgICB4MT1cIjAuNVwiXHJcbiAgICAgICAgICAgICAgICAgIHgyPVwiMC41XCJcclxuICAgICAgICAgICAgICAgICAgeTI9XCIxXCJcclxuICAgICAgICAgICAgICAgICAgZ3JhZGllbnRVbml0cz1cIm9iamVjdEJvdW5kaW5nQm94XCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PVwiMFwiIHN0b3BDb2xvcj1cIiNlMjFmNzlcIiAvPlxyXG4gICAgICAgICAgICAgICAgICA8c3RvcCBvZmZzZXQ9XCIxXCIgc3RvcENvbG9yPVwiI2EwMTliYVwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L2xpbmVhckdyYWRpZW50PlxyXG4gICAgICAgICAgICAgIDwvZGVmcz5cclxuICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgaWQ9XCLot6/lvoRfNTBcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1uYW1lPVwi6Lev5b6EIDUwXCJcclxuICAgICAgICAgICAgICAgIGQ9XCJNMzAzOC4wMzEsMjUzMi4yMTZjLTE4NC43ODksMTUwLjUwOC0xNDYuNTE4LTUzLjQwOS0zMjUuNTk1LDBzLTE2Mi4yMjctNzAuMjYtMzIxLjg4MiwyMS4xMzUtMzcuOTg2LDE5Ny45MjctMzcuOTg2LDE5Ny45MjdoNzQ0LjNaXCJcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgtMjMwOC4yMDYgLTI1MTguNTMzKVwiXHJcbiAgICAgICAgICAgICAgICBmaWxsPVwidXJsKCNsaW5lYXItZ3JhZGllbnQpXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgPHNwYW4+UHJvdmlkZSBMaXF1aWRpdHkgVG8gRWFybiAwLjMlIFRyYW5zYWN0aW9uIEZlZTwvc3Bhbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3gtNVwiPlxyXG4gICAgICAgICAgICA8bGFiZWw+U2VjdXJlIEF0b21pYyBTd2FwPC9sYWJlbD5cclxuICAgICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgICAgIHhtbG5zWGxpbms9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCJcclxuICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDUyOC4wMjcgMzc3LjYzM1wiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8ZGVmcz5cclxuICAgICAgICAgICAgICAgIDxsaW5lYXJHcmFkaWVudFxyXG4gICAgICAgICAgICAgICAgICBpZD1cImxpbmVhci1ncmFkaWVudC0xXCJcclxuICAgICAgICAgICAgICAgICAgeDE9XCIwLjE0NlwiXHJcbiAgICAgICAgICAgICAgICAgIHgyPVwiMVwiXHJcbiAgICAgICAgICAgICAgICAgIHkyPVwiMC44MjdcIlxyXG4gICAgICAgICAgICAgICAgICBncmFkaWVudFVuaXRzPVwib2JqZWN0Qm91bmRpbmdCb3hcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8c3RvcCBvZmZzZXQ9XCIwXCIgc3RvcENvbG9yPVwiIzVhNjhkMlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxzdG9wIG9mZnNldD1cIjFcIiBzdG9wQ29sb3I9XCIjYjE0NmQ3XCIgLz5cclxuICAgICAgICAgICAgICAgIDwvbGluZWFyR3JhZGllbnQ+XHJcbiAgICAgICAgICAgICAgICA8bGluZWFyR3JhZGllbnRcclxuICAgICAgICAgICAgICAgICAgaWQ9XCJsaW5lYXItZ3JhZGllbnQtMlwiXHJcbiAgICAgICAgICAgICAgICAgIHgxPVwiMC41XCJcclxuICAgICAgICAgICAgICAgICAgeDI9XCIwLjVcIlxyXG4gICAgICAgICAgICAgICAgICB5Mj1cIjFcIlxyXG4gICAgICAgICAgICAgICAgICBncmFkaWVudFVuaXRzPVwib2JqZWN0Qm91bmRpbmdCb3hcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8c3RvcCBvZmZzZXQ9XCIwXCIgc3RvcENvbG9yPVwiIzNkYzRlZFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxzdG9wIG9mZnNldD1cIjFcIiBzdG9wQ29sb3I9XCIjMjk3NmJhXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvbGluZWFyR3JhZGllbnQ+XHJcbiAgICAgICAgICAgICAgICA8bGluZWFyR3JhZGllbnRcclxuICAgICAgICAgICAgICAgICAgaWQ9XCJsaW5lYXItZ3JhZGllbnQtM1wiXHJcbiAgICAgICAgICAgICAgICAgIHgxPVwiMC41XCJcclxuICAgICAgICAgICAgICAgICAgeDI9XCIwLjVcIlxyXG4gICAgICAgICAgICAgICAgICB5Mj1cIjFcIlxyXG4gICAgICAgICAgICAgICAgICBncmFkaWVudFVuaXRzPVwib2JqZWN0Qm91bmRpbmdCb3hcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8c3RvcCBvZmZzZXQ9XCIwXCIgc3RvcENvbG9yPVwiI2Y4OWUzNlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxzdG9wIG9mZnNldD1cIjFcIiBzdG9wQ29sb3I9XCIjZmZhYjRhXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvbGluZWFyR3JhZGllbnQ+XHJcbiAgICAgICAgICAgICAgICA8bGluZWFyR3JhZGllbnRcclxuICAgICAgICAgICAgICAgICAgaWQ9XCJsaW5lYXItZ3JhZGllbnQtNFwiXHJcbiAgICAgICAgICAgICAgICAgIHgxPVwiMC41XCJcclxuICAgICAgICAgICAgICAgICAgeDI9XCIwLjVcIlxyXG4gICAgICAgICAgICAgICAgICB5Mj1cIjFcIlxyXG4gICAgICAgICAgICAgICAgICBncmFkaWVudFVuaXRzPVwib2JqZWN0Qm91bmRpbmdCb3hcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8c3RvcCBvZmZzZXQ9XCIwXCIgc3RvcENvbG9yPVwiI2UyMWY3OVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxzdG9wIG9mZnNldD1cIjFcIiBzdG9wQ29sb3I9XCIjYTAxOWJhXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvbGluZWFyR3JhZGllbnQ+XHJcbiAgICAgICAgICAgICAgPC9kZWZzPlxyXG4gICAgICAgICAgICAgIDxlbGxpcHNlXHJcbiAgICAgICAgICAgICAgICBpZD1cIm92YWxfMTRcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1uYW1lPVwib3ZhbCAxNFwiXHJcbiAgICAgICAgICAgICAgICBjeD1cIjc0LjM0NFwiXHJcbiAgICAgICAgICAgICAgICBjeT1cIjE3MS43NDZcIlxyXG4gICAgICAgICAgICAgICAgcng9XCI3NC4zNDRcIlxyXG4gICAgICAgICAgICAgICAgcnk9XCIxNzEuNzQ2XCJcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybT1cIm1hdHJpeCgwLjYwMiwgLTAuNzk5LCAwLjc5OSwgMC42MDIsIDE0MC43ODgsIDE2My40NzkpXCJcclxuICAgICAgICAgICAgICAgIGZpbGw9XCJub25lXCJcclxuICAgICAgICAgICAgICAgIHN0cm9rZT1cIiNlMWUxZTFcIlxyXG4gICAgICAgICAgICAgICAgc3Ryb2tlTWl0ZXJsaW1pdD1cIjEwXCJcclxuICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoPVwiNlwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8ZWxsaXBzZVxyXG4gICAgICAgICAgICAgICAgaWQ9XCJvdmFsXzE1XCJcclxuICAgICAgICAgICAgICAgIGRhdGEtbmFtZT1cIm92YWwgMTVcIlxyXG4gICAgICAgICAgICAgICAgY3g9XCIxMzkuNzY5XCJcclxuICAgICAgICAgICAgICAgIGN5PVwiMTM0LjkzN1wiXHJcbiAgICAgICAgICAgICAgICByeD1cIjEzOS43NjlcIlxyXG4gICAgICAgICAgICAgICAgcnk9XCIxMzQuOTM3XCJcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgxNTAuNDU1IDEzNS4yOTIpIHJvdGF0ZSgtMjgpXCJcclxuICAgICAgICAgICAgICAgIGZpbGw9XCJub25lXCJcclxuICAgICAgICAgICAgICAgIHN0cm9rZT1cIiNlMWUxZTFcIlxyXG4gICAgICAgICAgICAgICAgc3Ryb2tlTWl0ZXJsaW1pdD1cIjEwXCJcclxuICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoPVwiNlwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8Y2lyY2xlXHJcbiAgICAgICAgICAgICAgICBpZD1cIm92YWxfMTFcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1uYW1lPVwib3ZhbCAxMVwiXHJcbiAgICAgICAgICAgICAgICBjeD1cIjc4LjA1NFwiXHJcbiAgICAgICAgICAgICAgICBjeT1cIjc4LjA1NFwiXHJcbiAgICAgICAgICAgICAgICByPVwiNzguMDU0XCJcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgyNjAuNjU5IDExMC43NjMpXCJcclxuICAgICAgICAgICAgICAgIGZpbGw9XCJ1cmwoI2xpbmVhci1ncmFkaWVudC0xKVwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8Y2lyY2xlXHJcbiAgICAgICAgICAgICAgICBpZD1cIm92YWxfMTJcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1uYW1lPVwib3ZhbCAxMlwiXHJcbiAgICAgICAgICAgICAgICBjeD1cIjI1LjQyOFwiXHJcbiAgICAgICAgICAgICAgICBjeT1cIjI1LjQyOFwiXHJcbiAgICAgICAgICAgICAgICByPVwiMjUuNDI4XCJcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybT1cIm1hdHJpeCgwLjk2NiwgLTAuMjU5LCAwLjI1OSwgMC45NjYsIDQyMy43NjcsIDkyLjc4MilcIlxyXG4gICAgICAgICAgICAgICAgZmlsbD1cInVybCgjbGluZWFyLWdyYWRpZW50LTIpXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxjaXJjbGVcclxuICAgICAgICAgICAgICAgIGlkPVwib3ZhbF8xM1wiXHJcbiAgICAgICAgICAgICAgICBkYXRhLW5hbWU9XCJvdmFsIDEzXCJcclxuICAgICAgICAgICAgICAgIGN4PVwiMjUuNDI4XCJcclxuICAgICAgICAgICAgICAgIGN5PVwiMjUuNDI4XCJcclxuICAgICAgICAgICAgICAgIHI9XCIyNS40MjhcIlxyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtPVwibWF0cml4KDAuOTk2LCAwLjA4NywgLTAuMDg3LCAwLjk5NiwgMTg5LjQwNiwgMTc5LjkxNylcIlxyXG4gICAgICAgICAgICAgICAgZmlsbD1cInVybCgjbGluZWFyLWdyYWRpZW50LTMpXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxjaXJjbGVcclxuICAgICAgICAgICAgICAgIGlkPVwib3ZhbF8xNlwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLW5hbWU9XCJvdmFsIDE2XCJcclxuICAgICAgICAgICAgICAgIGN4PVwiMTlcIlxyXG4gICAgICAgICAgICAgICAgY3k9XCIxOVwiXHJcbiAgICAgICAgICAgICAgICByPVwiMTlcIlxyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDAgMzEyLjE5NylcIlxyXG4gICAgICAgICAgICAgICAgZmlsbD1cInVybCgjbGluZWFyLWdyYWRpZW50LTQpXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXItd3JhcFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyLWJnLTFcIj48L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLTJcIj48L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLTNcIj48L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvb3RlclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXItMVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvb3Rlci1icmFuZFwiPjwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpbmstd3JhcFwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlua3NcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYS13cmFwXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwib25lcGFnZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFyczQ5YU1oWUpkbnlOWF9uNVE0b2hnT1NQVTV6U0VPbi92aWV3P3VzcD1zaGFyaW5nXCJcclxuICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgT25lcGFnZXJcclxuICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJhLXdyYXBcIj5cclxuICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwidGVhbVwiPlRlYW08L2E+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj4gKi99XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwibGlua3NcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYS13cmFwXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImFwcFwiPkFwcDwvYT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhLXdyYXBcIj5cclxuICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYWJvdXRcIj5BYm91dDwvYT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PiAqL31cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyLTJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaW5rc1wiPlxyXG4gICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vZGZpbmFuY2UtdGVjaFwiIHRhcmdldD1cIl9ibGFua1wiPlxyXG4gICAgICAgICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAzOC4wNjcgMzcuMTE2XCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgICBpZD1cIkljb25fYXdlc29tZS1naXRodWJcIlxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEtbmFtZT1cIkljb24gYXdlc29tZS1naXRodWJcIlxyXG4gICAgICAgICAgICAgICAgICAgIGQ9XCJNMTIuNzMzLDMwLjQ0OGMwLC4xNTMtLjE3Ny4yNzYtLjQuMjc2LS4yNTMuMDIzLS40My0uMS0uNDMtLjI3NiwwLS4xNTMuMTc3LS4yNzYuNC0uMjc2QzEyLjUzMywzMC4xNDksMTIuNzMzLDMwLjI3MiwxMi43MzMsMzAuNDQ4Wk0xMC4zNDYsMzAuMWMtLjA1NC4xNTMuMS4zMy4zMy4zNzZhLjM2LjM2LDAsMCwwLC40NzYtLjE1M2MuMDQ2LS4xNTMtLjEtLjMzLS4zMy0uNEEuMzk0LjM5NCwwLDAsMCwxMC4zNDYsMzAuMVptMy4zOTItLjEzYy0uMjIzLjA1NC0uMzc2LjItLjM1My4zNzYuMDIzLjE1My4yMjMuMjUzLjQ1My4ycy4zNzYtLjIuMzUzLS4zNTNTMTMuOTYsMjkuOTQ5LDEzLjczOCwyOS45NzJaTTE4Ljc4OC41NjNBMTguNCwxOC40LDAsMCwwLDAsMTkuMjg5LDE5LjI0MSwxOS4yNDEsMCwwLDAsMTMuMDA5LDM3LjY0N2MuOTgyLjE3NywxLjMyOC0uNDMsMS4zMjgtLjkyOSwwLS40NzYtLjAyMy0zLjEtLjAyMy00LjcxMiwwLDAtNS4zNzIsMS4xNTEtNi41LTIuMjg3LDAsMC0uODc1LTIuMjMzLTIuMTM0LTIuODA5LDAsMC0xLjc1OC0xLjIuMTIzLTEuMTgyYTQuMDUxLDQuMDUxLDAsMCwxLDIuOTYyLDEuOTgsNC4wNTcsNC4wNTcsMCwwLDAsNS41OTUsMS42LDQuMjY2LDQuMjY2LDAsMCwxLDEuMjI4LTIuNTg2Yy00LjI5LS40NzYtOC42MTktMS4xLTguNjE5LTguNDgxYTUuODE3LDUuODE3LDAsMCwxLDEuODExLTQuNTIsNy4yNTEsNy4yNTEsMCwwLDEsLjItNS4yMTFjMS42LS41LDUuMywyLjA3Miw1LjMsMi4wNzJhMTguMTMxLDE4LjEzMSwwLDAsMSw5LjY0LDBzMy42OTItMi41NzksNS4zLTIuMDcyYTcuMjQ4LDcuMjQ4LDAsMCwxLC4yLDUuMjExLDUuOTY2LDUuOTY2LDAsMCwxLDEuOTgsNC41MmMwLDcuNDA2LTQuNTIsOC04LjgxMSw4LjQ4MWE0LjUzOSw0LjUzOSwwLDAsMSwxLjMsMy41NjFjMCwyLjU4Ni0uMDIzLDUuNzg3LS4wMjMsNi40MTYsMCwuNS4zNTMsMS4xMDUsMS4zMjguOTI5QTE5LjA2NCwxOS4wNjQsMCwwLDAsMzguMDY3LDE5LjI4OUMzOC4wNjcsOC42NDQsMjkuNDMzLjU2MywxOC43ODguNTYzWk03LjQ2LDI3LjAzM2MtLjEuMDc3LS4wNzcuMjUzLjA1NC40LjEyMy4xMjMuMy4xNzcuNC4wNzcuMS0uMDc3LjA3Ny0uMjUzLS4wNTQtLjRDNy43MzYsMjYuOTg3LDcuNTYsMjYuOTMzLDcuNDYsMjcuMDMzWm0tLjgyOS0uNjIyYy0uMDU0LjEuMDIzLjIyMy4xNzcuM2EuMjI4LjIyOCwwLDAsMCwuMzMtLjA1NGMuMDU0LS4xLS4wMjMtLjIyMy0uMTc3LS4zQzYuODA4LDI2LjMxMSw2LjY4NSwyNi4zMzUsNi42MzEsMjYuNDExWm0yLjQ4NywyLjczMmMtLjEyMy4xLS4wNzcuMzMuMS40NzYuMTc3LjE3Ny40LjIuNS4wNzcuMS0uMS4wNTQtLjMzLS4xLS40NzZDOS40NDgsMjkuMDQ0LDkuMjE3LDI5LjAyMSw5LjExOCwyOS4xNDNabS0uODc1LTEuMTI4Yy0uMTIzLjA3Ny0uMTIzLjI3NiwwLC40NTNzLjMzLjI1My40My4xNzdhLjM1LjM1LDAsMCwwLDAtLjQ3NkM4LjU2NSwyNy45OTIsOC4zNjYsMjcuOTE2LDguMjQzLDI4LjAxNVpcIlxyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgwIC0wLjU2MylcIlxyXG4gICAgICAgICAgICAgICAgICAgIGZpbGw9XCIjZWZlZmVmXCJcclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW09XCJjb250YWN0XCJcclxuICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IFwiI2ZmZlwiLFxyXG4gICAgICAgICAgICAgICAgZm9udFNpemU6IFwiMi44cmVtXCIsXHJcbiAgICAgICAgICAgICAgICBmb250RmFtaWx5OiBcIlJvYm90byBib2xkXCIsXHJcbiAgICAgICAgICAgICAgICBib3JkZXJMZWZ0OiBcIjFweCBzb2xpZCAjZmZmXCIsXHJcbiAgICAgICAgICAgICAgICBtYXJnaW5MZWZ0OiBcIjJyZW1cIixcclxuICAgICAgICAgICAgICAgIHBhZGRpbmdMZWZ0OiBcIjMuMnJlbVwiLFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjRyZW1cIixcclxuICAgICAgICAgICAgICAgIGxpbmVIZWlnaHQ6IFwiNHJlbVwiLFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBDb250YWN0OiBoZWxsb0BkZmluYW5jZS5haVxyXG4gICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29weXJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgQ29weXJpZ2h0IMKpIDIwMjEgRGZpbmFuY2UuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWU7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=