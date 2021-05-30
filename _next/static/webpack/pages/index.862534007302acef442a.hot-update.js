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
  }))), __jsx("a", {
    href: "https://twitter.com/DFinance_AI",
    target: "_blank",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 322,
      columnNumber: 15
    }
  }, __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "41.554",
    height: "33.749",
    viewBox: "0 0 41.554 33.749",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 323,
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
      lineNumber: 329,
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
      lineNumber: 339,
      columnNumber: 13
    }
  }, "Contact: hello@dfinance.ai"), __jsx("div", {
    className: "copyright",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 354,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbIkhvbWUiLCJ1c2VFZmZlY3QiLCJpc01vYmlsZSIsIm5hdmlnYXRvciIsInVzZXJBZ2VudCIsIm1hdGNoIiwidmFsIiwiaHRtbCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJjbGFzc0xpc3QiLCJhZGQiLCJoYW5kbGVTY3JvbGwiLCJoZWlnaHQiLCJ3aW5kb3ciLCJpbm5lckhlaWdodCIsInRvcCIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJnZXRFbGVtZW50QnlJZCIsInN0eWxlIiwib3BhY2l0eSIsImFkZEV2ZW50TGlzdGVuZXIiLCJjb2xvciIsImZvbnRTaXplIiwiZm9udEZhbWlseSIsImJvcmRlckxlZnQiLCJtYXJnaW5MZWZ0IiwicGFkZGluZ0xlZnQiLCJsaW5lSGVpZ2h0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsSUFBTUEsSUFBSSxHQUFHLFNBQVBBLElBQU8sR0FBTTtBQUFBOztBQUNqQkMseURBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBTTtBQUNyQixVQUNFQyxTQUFTLENBQUNDLFNBQVYsQ0FBb0JDLEtBQXBCLENBQTBCLFVBQTFCLEtBQ0FGLFNBQVMsQ0FBQ0MsU0FBVixDQUFvQkMsS0FBcEIsQ0FBMEIsUUFBMUIsQ0FEQSxJQUVBRixTQUFTLENBQUNDLFNBQVYsQ0FBb0JDLEtBQXBCLENBQTBCLFNBQTFCLENBRkEsSUFHQUYsU0FBUyxDQUFDQyxTQUFWLENBQW9CQyxLQUFwQixDQUEwQixPQUExQixDQUhBLElBSUFGLFNBQVMsQ0FBQ0MsU0FBVixDQUFvQkMsS0FBcEIsQ0FBMEIsT0FBMUIsQ0FKQSxJQUtBRixTQUFTLENBQUNDLFNBQVYsQ0FBb0JDLEtBQXBCLENBQTBCLGFBQTFCLENBTEEsSUFN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QyxtakJBSEo7QUFJRSxhQUFTLEVBQUMscUJBSlo7QUFLRSxRQUFJLEVBQUMsU0FMUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTkYsQ0FERixDQWZGLENBREYsRUFpQ0U7QUFDRSxhQUFTLEVBQUMsU0FEWjtBQUVFLFNBQUssRUFBRTtBQUNMVyxXQUFLLEVBQUUsTUFERjtBQUVMQyxjQUFRLEVBQUUsUUFGTDtBQUdMQyxnQkFBVSxFQUFFLGFBSFA7QUFJTEMsZ0JBQVUsRUFBRSxnQkFKUDtBQUtMQyxnQkFBVSxFQUFFLE1BTFA7QUFNTEMsaUJBQVcsRUFBRSxRQU5SO0FBT0xmLFlBQU0sRUFBRSxNQVBIO0FBUUxnQixnQkFBVSxFQUFFO0FBUlAsS0FGVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtDQWpDRixFQWdERTtBQUFLLGFBQVMsRUFBQyxXQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMERBaERGLENBNUJGLENBSkYsQ0E5TkYsQ0FERjtBQXVURCxDQXRXRDs7R0FBTTdCLEk7O0tBQUFBLEk7QUF3V1NBLG1FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4Ljg2MjUzNDAwNzMwMmFjZWY0NDJhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IEhvbWUgPSAoKSA9PiB7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGlzTW9iaWxlID0gKCkgPT4ge1xyXG4gICAgICBpZiAoXHJcbiAgICAgICAgbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvQW5kcm9pZC9pKSB8fFxyXG4gICAgICAgIG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL3dlYk9TL2kpIHx8XHJcbiAgICAgICAgbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvaVBob25lL2kpIHx8XHJcbiAgICAgICAgbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvaVBhZC9pKSB8fFxyXG4gICAgICAgIG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL2lQb2QvaSkgfHxcclxuICAgICAgICBuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9CbGFja0JlcnJ5L2kpIHx8XHJcbiAgICAgICAgbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvV2luZG93cyBQaG9uZS9pKVxyXG4gICAgICApIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgdmFsID0gaXNNb2JpbGUoKTtcclxuICAgIGlmICh2YWwpIHtcclxuICAgICAgY29uc3QgaHRtbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaHRtbFwiKVswXTtcclxuICAgICAgaHRtbC5jbGFzc0xpc3QuYWRkKFwibW9iaWxlXCIpO1xyXG4gICAgfVxyXG4gICAgY29uc3QgaGFuZGxlU2Nyb2xsID0gKCkgPT4ge1xyXG4gICAgICBjb25zdCBoZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XHJcbiAgICAgIGNvbnN0IHRvcCA9IGRvY3VtZW50XHJcbiAgICAgICAgLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJjb250ZW50LTNcIilbMF1cclxuICAgICAgICAuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wO1xyXG4gICAgICBpZiAodG9wIDwgaGVpZ2h0ICogMC4yKSB7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsYWJlbC0yXCIpLnN0eWxlLm9wYWNpdHkgPSBcIjBcIjtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImR0b2tlblwiKS5zdHlsZS5vcGFjaXR5ID0gXCIwXCI7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYXJkc1wiKS5zdHlsZS5vcGFjaXR5ID0gXCIwXCI7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJiZy0xXCIpLnN0eWxlLm9wYWNpdHkgPSBcIjBcIjtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnQtM1wiKS5zdHlsZS5vcGFjaXR5ID0gXCIxXCI7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50LTJcIikuc3R5bGUub3BhY2l0eSA9IFwiMVwiO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudC0zXCIpLnN0eWxlLm9wYWNpdHkgPSBcIjBcIjtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnQtMlwiKS5zdHlsZS5vcGFjaXR5ID0gXCIwXCI7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJiZy0xXCIpLnN0eWxlLm9wYWNpdHkgPSBcIjFcIjtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxhYmVsLTJcIikuc3R5bGUub3BhY2l0eSA9IFwiMVwiO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZHRva2VuXCIpLnN0eWxlLm9wYWNpdHkgPSBcIjFcIjtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhcmRzXCIpLnN0eWxlLm9wYWNpdHkgPSBcIjFcIjtcclxuICAgICAgfVxyXG4gICAgfTtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGhhbmRsZVNjcm9sbCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJIb21lXCI+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT5ERmluYW5jZTwvdGl0bGU+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItYnJhbmRcIj5cclxuICAgICAgICA8YSBocmVmPVwiL1wiPjwvYT5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFsbC0xXCI+PC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFsbC0yXCI+PC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFsbC0zXCI+PC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFsbC00XCI+PC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLXRpdGxlXCI+VW5sZWFzaCB0aGUgcG93ZXIgb2YgRGVGaTwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci1zdWJ0aXRsZVwiPlxyXG4gICAgICAgIERGaW5hbmNlIGlzIGJ1aWxkaW5nIHRoZSBvcGVuIGZpbmFuY2lhbCBzZXJ2aWNlcyBpbmZyYXN0cnVjdHVyZSBmb3IgdGhlXHJcbiAgICAgICAgREZJTklUWSBJbnRlcm5ldCBDb21wdXRlci5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLWxpbmtcIj5cclxuICAgICAgICA8YT5BUFAgKGNvbWluZyBzb29uKTwvYT5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsYWJlbC0xXCI+LSBEVE9LRU4gLTwvbGFiZWw+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLWNhcmRzXCIgaWQ9XCJjYXJkc1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLWNhcmQgY2FyZC0xXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndyYXBcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdmdcIj48L2Rpdj5cclxuICAgICAgICAgICAgPHNwYW4+VW5pZmllZCB0b2tlbiBzdGFuZGFyZCBmb3IgRGZpbml0eTwvc3Bhbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLWNhcmQgY2FyZC0yXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndyYXBcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdmdcIj48L2Rpdj5cclxuICAgICAgICAgICAgPHNwYW4+SXNzdWUgeW91ciB0b2tlbiB3aXRoIG9uZSBjbGljayBvZiBhIGJ1dHRvbjwvc3Bhbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLWNhcmQgY2FyZC0zXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndyYXBcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdmdcIj48L2Rpdj5cclxuICAgICAgICAgICAgPHNwYW4+TWFuYWdlIHlvdXIgdG9rZW5zOiB0cmFuc2ZlciwgYnVybiwgbWludDwvc3Bhbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxhYmVsLTJcIiBpZD1cImxhYmVsLTJcIj5cclxuICAgICAgICBEVG9rZW4gQXJjaGl0ZWN0dXJlXHJcbiAgICAgIDwvbGFiZWw+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGhvbmVcIj48L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJkdG9rZW5cIiBpZD1cImR0b2tlblwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1nXCI+PC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLTFcIiBpZD1cImJnLTFcIj48L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LTNcIiBpZD1cImNvbnRlbnQtM1wiPlxyXG4gICAgICAgIDxsYWJlbD4tIERTV0FQIC08L2xhYmVsPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RydWN0dXJlXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltZ1wiPjwvZGl2PlxyXG4gICAgICAgICAgPHNwYW4+UHJvZHVjdCBTdHJ1Y3R1cmU8L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtMlwiIGlkPVwiY29udGVudC0yXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMVwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3gtMVwiPlxyXG4gICAgICAgICAgICA8c3Bhbj5BdXRvbWF0ZWQgTWFya2V0IE1ha2VyIERlY2VudHJhbGl6ZWQgRXhjaGFuZ2U8L3NwYW4+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3ZnXCI+PC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94LTJcIj5cclxuICAgICAgICAgICAgPGxhYmVsPkxpZ2h0bmluZyBTd2FwPC9sYWJlbD5cclxuICAgICAgICAgICAgPHNwYW4+U3dhcCBvbmUgdG9rZW4gZm9yIGFub3RoZXIgd2l0aCBsaWdodG5pbmcgc3BlZWQ8L3NwYW4+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3ZnLTFcIj48L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdmctMlwiPjwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJveC0zXCI+XHJcbiAgICAgICAgICAgIDxsYWJlbD5cclxuICAgICAgICAgICAgICBBUEkgZm9yIGRldmVsb3BlcnMgdG8gYnVpbGQgdGhlaXIgb3duIGFwcGxpY2F0aW9uIGJhc2VkIG9uIERTd2FwXHJcbiAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxzcGFuPlN1Y2ggYXMgbGlxdWlkaXR5IGZhcm1pbmcgYXBwbGljYXRpb25zPC9zcGFuPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN2Z1wiPjwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMlwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3gtNFwiPlxyXG4gICAgICAgICAgICA8bGFiZWw+MC4zJTwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgICAgICB4bWxuc1hsaW5rPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiXHJcbiAgICAgICAgICAgICAgd2lkdGg9XCI3ODguNjYxXCJcclxuICAgICAgICAgICAgICBoZWlnaHQ9XCIyMzIuNzQ1XCJcclxuICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDc4OC42NjEgMjMyLjc0NVwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8ZGVmcz5cclxuICAgICAgICAgICAgICAgIDxsaW5lYXJHcmFkaWVudFxyXG4gICAgICAgICAgICAgICAgICBpZD1cImxpbmVhci1ncmFkaWVudFwiXHJcbiAgICAgICAgICAgICAgICAgIHgxPVwiMC41XCJcclxuICAgICAgICAgICAgICAgICAgeDI9XCIwLjVcIlxyXG4gICAgICAgICAgICAgICAgICB5Mj1cIjFcIlxyXG4gICAgICAgICAgICAgICAgICBncmFkaWVudFVuaXRzPVwib2JqZWN0Qm91bmRpbmdCb3hcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8c3RvcCBvZmZzZXQ9XCIwXCIgc3RvcENvbG9yPVwiI2UyMWY3OVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxzdG9wIG9mZnNldD1cIjFcIiBzdG9wQ29sb3I9XCIjYTAxOWJhXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvbGluZWFyR3JhZGllbnQ+XHJcbiAgICAgICAgICAgICAgPC9kZWZzPlxyXG4gICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICBpZD1cIui3r+W+hF81MFwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLW5hbWU9XCLot6/lvoQgNTBcIlxyXG4gICAgICAgICAgICAgICAgZD1cIk0zMDM4LjAzMSwyNTMyLjIxNmMtMTg0Ljc4OSwxNTAuNTA4LTE0Ni41MTgtNTMuNDA5LTMyNS41OTUsMHMtMTYyLjIyNy03MC4yNi0zMjEuODgyLDIxLjEzNS0zNy45ODYsMTk3LjkyNy0zNy45ODYsMTk3LjkyN2g3NDQuM1pcIlxyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKC0yMzA4LjIwNiAtMjUxOC41MzMpXCJcclxuICAgICAgICAgICAgICAgIGZpbGw9XCJ1cmwoI2xpbmVhci1ncmFkaWVudClcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICA8c3Bhbj5Qcm92aWRlIExpcXVpZGl0eSBUbyBFYXJuIDAuMyUgVHJhbnNhY3Rpb24gRmVlPC9zcGFuPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJveC01XCI+XHJcbiAgICAgICAgICAgIDxsYWJlbD5TZWN1cmUgQXRvbWljIFN3YXA8L2xhYmVsPlxyXG4gICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgICAgICAgeG1sbnNYbGluaz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIlxyXG4gICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgNTI4LjAyNyAzNzcuNjMzXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxkZWZzPlxyXG4gICAgICAgICAgICAgICAgPGxpbmVhckdyYWRpZW50XHJcbiAgICAgICAgICAgICAgICAgIGlkPVwibGluZWFyLWdyYWRpZW50LTFcIlxyXG4gICAgICAgICAgICAgICAgICB4MT1cIjAuMTQ2XCJcclxuICAgICAgICAgICAgICAgICAgeDI9XCIxXCJcclxuICAgICAgICAgICAgICAgICAgeTI9XCIwLjgyN1wiXHJcbiAgICAgICAgICAgICAgICAgIGdyYWRpZW50VW5pdHM9XCJvYmplY3RCb3VuZGluZ0JveFwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxzdG9wIG9mZnNldD1cIjBcIiBzdG9wQ29sb3I9XCIjNWE2OGQyXCIgLz5cclxuICAgICAgICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PVwiMVwiIHN0b3BDb2xvcj1cIiNiMTQ2ZDdcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9saW5lYXJHcmFkaWVudD5cclxuICAgICAgICAgICAgICAgIDxsaW5lYXJHcmFkaWVudFxyXG4gICAgICAgICAgICAgICAgICBpZD1cImxpbmVhci1ncmFkaWVudC0yXCJcclxuICAgICAgICAgICAgICAgICAgeDE9XCIwLjVcIlxyXG4gICAgICAgICAgICAgICAgICB4Mj1cIjAuNVwiXHJcbiAgICAgICAgICAgICAgICAgIHkyPVwiMVwiXHJcbiAgICAgICAgICAgICAgICAgIGdyYWRpZW50VW5pdHM9XCJvYmplY3RCb3VuZGluZ0JveFwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxzdG9wIG9mZnNldD1cIjBcIiBzdG9wQ29sb3I9XCIjM2RjNGVkXCIgLz5cclxuICAgICAgICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PVwiMVwiIHN0b3BDb2xvcj1cIiMyOTc2YmFcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9saW5lYXJHcmFkaWVudD5cclxuICAgICAgICAgICAgICAgIDxsaW5lYXJHcmFkaWVudFxyXG4gICAgICAgICAgICAgICAgICBpZD1cImxpbmVhci1ncmFkaWVudC0zXCJcclxuICAgICAgICAgICAgICAgICAgeDE9XCIwLjVcIlxyXG4gICAgICAgICAgICAgICAgICB4Mj1cIjAuNVwiXHJcbiAgICAgICAgICAgICAgICAgIHkyPVwiMVwiXHJcbiAgICAgICAgICAgICAgICAgIGdyYWRpZW50VW5pdHM9XCJvYmplY3RCb3VuZGluZ0JveFwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxzdG9wIG9mZnNldD1cIjBcIiBzdG9wQ29sb3I9XCIjZjg5ZTM2XCIgLz5cclxuICAgICAgICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PVwiMVwiIHN0b3BDb2xvcj1cIiNmZmFiNGFcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9saW5lYXJHcmFkaWVudD5cclxuICAgICAgICAgICAgICAgIDxsaW5lYXJHcmFkaWVudFxyXG4gICAgICAgICAgICAgICAgICBpZD1cImxpbmVhci1ncmFkaWVudC00XCJcclxuICAgICAgICAgICAgICAgICAgeDE9XCIwLjVcIlxyXG4gICAgICAgICAgICAgICAgICB4Mj1cIjAuNVwiXHJcbiAgICAgICAgICAgICAgICAgIHkyPVwiMVwiXHJcbiAgICAgICAgICAgICAgICAgIGdyYWRpZW50VW5pdHM9XCJvYmplY3RCb3VuZGluZ0JveFwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxzdG9wIG9mZnNldD1cIjBcIiBzdG9wQ29sb3I9XCIjZTIxZjc5XCIgLz5cclxuICAgICAgICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PVwiMVwiIHN0b3BDb2xvcj1cIiNhMDE5YmFcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9saW5lYXJHcmFkaWVudD5cclxuICAgICAgICAgICAgICA8L2RlZnM+XHJcbiAgICAgICAgICAgICAgPGVsbGlwc2VcclxuICAgICAgICAgICAgICAgIGlkPVwib3ZhbF8xNFwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLW5hbWU9XCJvdmFsIDE0XCJcclxuICAgICAgICAgICAgICAgIGN4PVwiNzQuMzQ0XCJcclxuICAgICAgICAgICAgICAgIGN5PVwiMTcxLjc0NlwiXHJcbiAgICAgICAgICAgICAgICByeD1cIjc0LjM0NFwiXHJcbiAgICAgICAgICAgICAgICByeT1cIjE3MS43NDZcIlxyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtPVwibWF0cml4KDAuNjAyLCAtMC43OTksIDAuNzk5LCAwLjYwMiwgMTQwLjc4OCwgMTYzLjQ3OSlcIlxyXG4gICAgICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxyXG4gICAgICAgICAgICAgICAgc3Ryb2tlPVwiI2UxZTFlMVwiXHJcbiAgICAgICAgICAgICAgICBzdHJva2VNaXRlcmxpbWl0PVwiMTBcIlxyXG4gICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9XCI2XCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxlbGxpcHNlXHJcbiAgICAgICAgICAgICAgICBpZD1cIm92YWxfMTVcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1uYW1lPVwib3ZhbCAxNVwiXHJcbiAgICAgICAgICAgICAgICBjeD1cIjEzOS43NjlcIlxyXG4gICAgICAgICAgICAgICAgY3k9XCIxMzQuOTM3XCJcclxuICAgICAgICAgICAgICAgIHJ4PVwiMTM5Ljc2OVwiXHJcbiAgICAgICAgICAgICAgICByeT1cIjEzNC45MzdcIlxyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDE1MC40NTUgMTM1LjI5Mikgcm90YXRlKC0yOClcIlxyXG4gICAgICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxyXG4gICAgICAgICAgICAgICAgc3Ryb2tlPVwiI2UxZTFlMVwiXHJcbiAgICAgICAgICAgICAgICBzdHJva2VNaXRlcmxpbWl0PVwiMTBcIlxyXG4gICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9XCI2XCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxjaXJjbGVcclxuICAgICAgICAgICAgICAgIGlkPVwib3ZhbF8xMVwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLW5hbWU9XCJvdmFsIDExXCJcclxuICAgICAgICAgICAgICAgIGN4PVwiNzguMDU0XCJcclxuICAgICAgICAgICAgICAgIGN5PVwiNzguMDU0XCJcclxuICAgICAgICAgICAgICAgIHI9XCI3OC4wNTRcIlxyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDI2MC42NTkgMTEwLjc2MylcIlxyXG4gICAgICAgICAgICAgICAgZmlsbD1cInVybCgjbGluZWFyLWdyYWRpZW50LTEpXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxjaXJjbGVcclxuICAgICAgICAgICAgICAgIGlkPVwib3ZhbF8xMlwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLW5hbWU9XCJvdmFsIDEyXCJcclxuICAgICAgICAgICAgICAgIGN4PVwiMjUuNDI4XCJcclxuICAgICAgICAgICAgICAgIGN5PVwiMjUuNDI4XCJcclxuICAgICAgICAgICAgICAgIHI9XCIyNS40MjhcIlxyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtPVwibWF0cml4KDAuOTY2LCAtMC4yNTksIDAuMjU5LCAwLjk2NiwgNDIzLjc2NywgOTIuNzgyKVwiXHJcbiAgICAgICAgICAgICAgICBmaWxsPVwidXJsKCNsaW5lYXItZ3JhZGllbnQtMilcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPGNpcmNsZVxyXG4gICAgICAgICAgICAgICAgaWQ9XCJvdmFsXzEzXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtbmFtZT1cIm92YWwgMTNcIlxyXG4gICAgICAgICAgICAgICAgY3g9XCIyNS40MjhcIlxyXG4gICAgICAgICAgICAgICAgY3k9XCIyNS40MjhcIlxyXG4gICAgICAgICAgICAgICAgcj1cIjI1LjQyOFwiXHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm09XCJtYXRyaXgoMC45OTYsIDAuMDg3LCAtMC4wODcsIDAuOTk2LCAxODkuNDA2LCAxNzkuOTE3KVwiXHJcbiAgICAgICAgICAgICAgICBmaWxsPVwidXJsKCNsaW5lYXItZ3JhZGllbnQtMylcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPGNpcmNsZVxyXG4gICAgICAgICAgICAgICAgaWQ9XCJvdmFsXzE2XCJcclxuICAgICAgICAgICAgICAgIGRhdGEtbmFtZT1cIm92YWwgMTZcIlxyXG4gICAgICAgICAgICAgICAgY3g9XCIxOVwiXHJcbiAgICAgICAgICAgICAgICBjeT1cIjE5XCJcclxuICAgICAgICAgICAgICAgIHI9XCIxOVwiXHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMCAzMTIuMTk3KVwiXHJcbiAgICAgICAgICAgICAgICBmaWxsPVwidXJsKCNsaW5lYXItZ3JhZGllbnQtNClcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvb3Rlci13cmFwXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXItYmctMVwiPjwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctMlwiPjwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctM1wiPjwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvb3Rlci0xXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyLWJyYW5kXCI+PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGluay13cmFwXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaW5rc1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhLXdyYXBcIj5cclxuICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJvbmVwYWdlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMXJzNDlhTWhZSmRueU5YX241UTRvaGdPU1BVNXpTRU9uL3ZpZXc/dXNwPXNoYXJpbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICBPbmVwYWdlclxyXG4gICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cImEtd3JhcFwiPlxyXG4gICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJ0ZWFtXCI+VGVhbTwvYT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PiAqL31cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJsaW5rc1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhLXdyYXBcIj5cclxuICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYXBwXCI+QXBwPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImEtd3JhcFwiPlxyXG4gICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJhYm91dFwiPkFib3V0PC9hPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+ICovfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXItMlwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpbmtzXCI+XHJcbiAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9kZmluYW5jZS10ZWNoXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XHJcbiAgICAgICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDM4LjA2NyAzNy4xMTZcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICAgIGlkPVwiSWNvbl9hd2Vzb21lLWdpdGh1YlwiXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS1uYW1lPVwiSWNvbiBhd2Vzb21lLWdpdGh1YlwiXHJcbiAgICAgICAgICAgICAgICAgICAgZD1cIk0xMi43MzMsMzAuNDQ4YzAsLjE1My0uMTc3LjI3Ni0uNC4yNzYtLjI1My4wMjMtLjQzLS4xLS40My0uMjc2LDAtLjE1My4xNzctLjI3Ni40LS4yNzZDMTIuNTMzLDMwLjE0OSwxMi43MzMsMzAuMjcyLDEyLjczMywzMC40NDhaTTEwLjM0NiwzMC4xYy0uMDU0LjE1My4xLjMzLjMzLjM3NmEuMzYuMzYsMCwwLDAsLjQ3Ni0uMTUzYy4wNDYtLjE1My0uMS0uMzMtLjMzLS40QS4zOTQuMzk0LDAsMCwwLDEwLjM0NiwzMC4xWm0zLjM5Mi0uMTNjLS4yMjMuMDU0LS4zNzYuMi0uMzUzLjM3Ni4wMjMuMTUzLjIyMy4yNTMuNDUzLjJzLjM3Ni0uMi4zNTMtLjM1M1MxMy45NiwyOS45NDksMTMuNzM4LDI5Ljk3MlpNMTguNzg4LjU2M0ExOC40LDE4LjQsMCwwLDAsMCwxOS4yODksMTkuMjQxLDE5LjI0MSwwLDAsMCwxMy4wMDksMzcuNjQ3Yy45ODIuMTc3LDEuMzI4LS40MywxLjMyOC0uOTI5LDAtLjQ3Ni0uMDIzLTMuMS0uMDIzLTQuNzEyLDAsMC01LjM3MiwxLjE1MS02LjUtMi4yODcsMCwwLS44NzUtMi4yMzMtMi4xMzQtMi44MDksMCwwLTEuNzU4LTEuMi4xMjMtMS4xODJhNC4wNTEsNC4wNTEsMCwwLDEsMi45NjIsMS45OCw0LjA1Nyw0LjA1NywwLDAsMCw1LjU5NSwxLjYsNC4yNjYsNC4yNjYsMCwwLDEsMS4yMjgtMi41ODZjLTQuMjktLjQ3Ni04LjYxOS0xLjEtOC42MTktOC40ODFhNS44MTcsNS44MTcsMCwwLDEsMS44MTEtNC41Miw3LjI1MSw3LjI1MSwwLDAsMSwuMi01LjIxMWMxLjYtLjUsNS4zLDIuMDcyLDUuMywyLjA3MmExOC4xMzEsMTguMTMxLDAsMCwxLDkuNjQsMHMzLjY5Mi0yLjU3OSw1LjMtMi4wNzJhNy4yNDgsNy4yNDgsMCwwLDEsLjIsNS4yMTEsNS45NjYsNS45NjYsMCwwLDEsMS45OCw0LjUyYzAsNy40MDYtNC41Miw4LTguODExLDguNDgxYTQuNTM5LDQuNTM5LDAsMCwxLDEuMywzLjU2MWMwLDIuNTg2LS4wMjMsNS43ODctLjAyMyw2LjQxNiwwLC41LjM1MywxLjEwNSwxLjMyOC45MjlBMTkuMDY0LDE5LjA2NCwwLDAsMCwzOC4wNjcsMTkuMjg5QzM4LjA2Nyw4LjY0NCwyOS40MzMuNTYzLDE4Ljc4OC41NjNaTTcuNDYsMjcuMDMzYy0uMS4wNzctLjA3Ny4yNTMuMDU0LjQuMTIzLjEyMy4zLjE3Ny40LjA3Ny4xLS4wNzcuMDc3LS4yNTMtLjA1NC0uNEM3LjczNiwyNi45ODcsNy41NiwyNi45MzMsNy40NiwyNy4wMzNabS0uODI5LS42MjJjLS4wNTQuMS4wMjMuMjIzLjE3Ny4zYS4yMjguMjI4LDAsMCwwLC4zMy0uMDU0Yy4wNTQtLjEtLjAyMy0uMjIzLS4xNzctLjNDNi44MDgsMjYuMzExLDYuNjg1LDI2LjMzNSw2LjYzMSwyNi40MTFabTIuNDg3LDIuNzMyYy0uMTIzLjEtLjA3Ny4zMy4xLjQ3Ni4xNzcuMTc3LjQuMi41LjA3Ny4xLS4xLjA1NC0uMzMtLjEtLjQ3NkM5LjQ0OCwyOS4wNDQsOS4yMTcsMjkuMDIxLDkuMTE4LDI5LjE0M1ptLS44NzUtMS4xMjhjLS4xMjMuMDc3LS4xMjMuMjc2LDAsLjQ1M3MuMzMuMjUzLjQzLjE3N2EuMzUuMzUsMCwwLDAsMC0uNDc2QzguNTY1LDI3Ljk5Miw4LjM2NiwyNy45MTYsOC4yNDMsMjguMDE1WlwiXHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDAgLTAuNTYzKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgZmlsbD1cIiNlZmVmZWZcIlxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3R3aXR0ZXIuY29tL0RGaW5hbmNlX0FJXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XHJcbiAgICAgICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgICAgICAgICB3aWR0aD1cIjQxLjU1NFwiXHJcbiAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjMzLjc0OVwiXHJcbiAgICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgNDEuNTU0IDMzLjc0OVwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJJY29uX2F3ZXNvbWUtdHdpdHRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS1uYW1lPVwiSWNvbiBhd2Vzb21lLXR3aXR0ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgIGQ9XCJNMzcuMjgzLDExLjc5MmMuMDI2LjM2OS4wMjYuNzM4LjAyNiwxLjEwNywwLDExLjI1OS04LjU2OSwyNC4yMzEtMjQuMjMxLDI0LjIzMUEyNC4wNjcsMjQuMDY3LDAsMCwxLDAsMzMuMzA3YTE3LjYxOCwxNy42MTgsMCwwLDAsMi4wNTcuMTA1QTE3LjA1NiwxNy4wNTYsMCwwLDAsMTIuNjMsMjkuNzc0YTguNTMxLDguNTMxLDAsMCwxLTcuOTYzLTUuOTA2QTEwLjc0LDEwLjc0LDAsMCwwLDYuMjc1LDI0YTkuMDA3LDkuMDA3LDAsMCwwLDIuMjQxLS4yOSw4LjUxOCw4LjUxOCwwLDAsMS02LjgyOS04LjM1OHYtLjEwNWE4LjU3Nyw4LjU3NywwLDAsMCwzLjg1LDEuMDgxQTguNTI5LDguNTI5LDAsMCwxLDIuOSw0LjkzNmEyNC4yMDgsMjQuMjA4LDAsMCwwLDE3LjU2LDguOTEyQTkuNjE0LDkuNjE0LDAsMCwxLDIwLjI1LDExLjksOC41MjUsOC41MjUsMCwwLDEsMzQuOTg5LDYuMDdhMTYuNzY3LDE2Ljc2NywwLDAsMCw1LjQwNS0yLjA1N0E4LjQ5Myw4LjQ5MywwLDAsMSwzNi42NSw4LjcwN2ExNy4wNzMsMTcuMDczLDAsMCwwLDQuOS0xLjMxOCwxOC4zMDcsMTguMzA3LDAsMCwxLTQuMjcxLDQuNFpcIlxyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgwIC0zLjM4MSlcIlxyXG4gICAgICAgICAgICAgICAgICAgIGZpbGw9XCIjZWZlZmVmXCJcclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY29udGFjdFwiXHJcbiAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIGNvbG9yOiBcIiNmZmZcIixcclxuICAgICAgICAgICAgICAgIGZvbnRTaXplOiBcIjIuOHJlbVwiLFxyXG4gICAgICAgICAgICAgICAgZm9udEZhbWlseTogXCJSb2JvdG8gYm9sZFwiLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyTGVmdDogXCIxcHggc29saWQgI2ZmZlwiLFxyXG4gICAgICAgICAgICAgICAgbWFyZ2luTGVmdDogXCIycmVtXCIsXHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nTGVmdDogXCIzLjJyZW1cIixcclxuICAgICAgICAgICAgICAgIGhlaWdodDogXCI0cmVtXCIsXHJcbiAgICAgICAgICAgICAgICBsaW5lSGVpZ2h0OiBcIjRyZW1cIixcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgQ29udGFjdDogaGVsbG9AZGZpbmFuY2UuYWlcclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvcHlyaWdodFwiPlxyXG4gICAgICAgICAgICAgIENvcHlyaWdodCDCqSAyMDIxIERmaW5hbmNlLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9