/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/style.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Oswald&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
    --dark-color: #233142;
    --gray-color: #455d7a;
    --red-color: #f95959;
    --white-color: #e3e3e3;
    --item-color: #afafaf;
    height: 100vh;
    width: 100vh;
    overflow-x: hidden;
}

* {
    padding: 0;
    margin: 0;
}

.main-body-container {
    width: 100vw;
    height: 100vh;
    display: flex;
}

.side-bar {
    display: grid;
    height: 100vh;
    grid-template-rows: 60px 1fr;
    position: relative;
    background-color: var(--gray-color);
}

.projects-list {
  grid-row: 2;
  display: flex;
  flex-direction: column;
  padding-top: 15px;
  gap: 15px;
}

.project-button {
  height: 30px;
  font-size: 20px;
  font-family: "Oswald", sans-serif;
  color: var(--white-color);
  background-color: transparent;
  appearance: none;
  border: 0;
}

.project-button:hover {
  background-color: #384b63;
  cursor: pointer;
}

.side-bar-button {
    position: absolute;
    height: 50px;
    left: 4px;
    top: 4px;
    border-radius: 100px;
}

.side-bar-button:hover {
    background-color: #ffffff2f;
}

.new-project-button {
  grid-row: 1 / 2;
  display: flex;
  justify-self: flex-end;
  appearance: none;
  background-color: transparent;
  grid-column: 1 / 2;
  border: 0;
  width: 50px;
  align-self: center;
  margin-right: 4px;
  border-radius: 100px;
  filter: invert(100%) sepia(0%) saturate(30%) hue-rotate(229deg) brightness(112%) contrast(78%);
}

.new-project-button:hover {
  background-color: #ffffff2f;
  cursor: pointer;
  
}

.side-bar-shown {
  transition: width 300ms ease-out;
  width: 20%;
  grid-template-columns: 100%;
}

.side-bar-hidden {
  transition: width 300ms ease-out;
  width: 0%;
  grid-template-columns: 0%;
}

.side-bar-hidden .projects-list,
.side-bar-hidden .side-bar-heading{
  display: none;
}

.right-side {
    flex-grow: 1;
    height: 100vh;
    display: flex;
    flex-direction: column;
}

.top-bar {
    height: 60px;
    flex-grow: 0;
    background-color: var(--red-color);
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-right: 20px;
}

.content {
    background-color: var(--white-color);
    flex: 1;
    position: relative;
    display: grid;
    grid-template-columns: 54px auto;
    grid-template-rows: auto;
}

.heading {
    font-family: "Oswald", sans-serif;
    color: var(--white-color);
    font-size: 2rem;
}

.new-item-button {
  appearance: none;
  border: 0;
  border-radius: 100px;
  background-color: transparent;
  left: 4px;
  top: 4px;
  position: absolute;
}

.new-item-button svg:hover {
  cursor: pointer;

}
.new-item-button:hover {
  background-color: #c8c8c8;
}

.new-item-button svg {
  width: 50px;
  filter: invert(35%) sepia(15%) saturate(1092%) hue-rotate(173deg) brightness(93%) contrast(92%);
}

.project-name-getter {
  display: flex;
  height: 30px;
  align-items: center;
  justify-content: center;
  gap: 2px;
}

.project-name-getter input {
  background-color: #384b63;
  appearance: none;
  border: 0;
  height: 30px;
  color: var(--white-color);
  text-align: center;
  font-family: "Oswald", sans-serif;
  font-size: 20px;
  border-radius: 10px;
}

.project-name-getter button {
  appearance: none;
  background-color: #384b63;
  border: 0;
  height: 30px;
  width: 30px;
  border-radius: 10px;
}

.project-name-getter button:hover {
  cursor: pointer;
}

.project-name-getter button svg {
  filter: invert(100%) sepia(0%) saturate(30%) hue-rotate(229deg) brightness(112%) contrast(78%);
  width: 30px;
  height: 30px;
}

.side-bar-heading {
  grid-row: 1 / 2;
  grid-column: 1 / 2;
  font-family: "Oswald", sans-serif;
  color: var(--white-color);
  font-size: 22px;
  align-self: center;
  justify-self: center;
}

.items-container {
  grid-column: 2/3;
  padding: 10px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(auto-fit, 50px);
  gap: 20px
}

.items-container div {
  background-color: var(--item-color);
  border-radius: 10px;
  display: flex;
  padding: 2px;
  align-items: center;
  justify-content: flex-start;
  gap: 4%;
  padding-left: 12px;
  padding-right: 12px;
}

.items-container input {
  appearance: none;
  background-color: var(--white-color);
  color: var(--red-color);
  font-family: "Oswald", sans-serif;
  width: min(230px,10%);
  height: 30px;
  border: 0;
  border-radius: 15px;
  padding-left: 5px;
}

.items-container input[name="description"] {
  width: calc(min(230px,10%)*3);
}

.new-item-creator button,
.new-item-creator button svg{
  height: 30px;
  width: 30px;
}

.new-item-creator svg {
  filter: invert(100%) sepia(0%) saturate(30%) hue-rotate(229deg) brightness(112%) contrast(78%);
}

.new-item-creator button{
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: 0;
  margin-left: auto;
  border-radius: 20px;
  padding: 2px;
}

.new-item-creator button:hover{
  background-color: #1d1d1d2f;
  cursor: pointer;
}

.item-text,
.item-desc,
.item-dd,
.item-priority {
  font-family: "Oswald", sans-serif;
  font-size: 15px;
  height: 30px;
  color: var(--dark-color)
}

.item-text,
.item-dd {
  width: 10%
}

.item-desc {
  width: 20%;
}

.high-priority {
  border-left: 5px #c40000 solid;
}

.med-priority {
  border-left: 5px #c49000 solid;
}

.low-priority {
  border-left: 5px #27c400 solid;
}


/* @media (max-width: 700px) {
    .right-side {
        flex-basis: 75%;
    }
    .side-bar {
        flex-basis: 25%;
    }
} */

/* Hamburger menu */
.hamburger-button {
    background-color: transparent;
    border: none;
    width: 50px;
    cursor: pointer;
    display: flex;
    padding: 0;
    filter: invert(100%) sepia(0%) saturate(30%) hue-rotate(229deg) brightness(112%) contrast(78%);
  }
  .line {
    fill: none;
    stroke: black;
    stroke-width: 6;
    transition: stroke-dasharray 600ms cubic-bezier(0.4, 0, 0.2, 1),
      stroke-dashoffset 600ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  .line1 {
    stroke-dasharray: 60 207;
    stroke-width: 6;
  }
  .line2 {
    stroke-dasharray: 60 60;
    stroke-width: 6;
  }
  .line3 {
    stroke-dasharray: 60 207;
    stroke-width: 6;
  }
  .opened .line1 {
    stroke-dasharray: 90 207;
    stroke-dashoffset: -134;
    stroke-width: 6;
  }
  .opened .line2 {
    stroke-dasharray: 1 60;
    stroke-dashoffset: -30;
    stroke-width: 6;
  }
  .opened .line3 {
    stroke-dasharray: 90 207;
    stroke-dashoffset: -134;
    stroke-width: 6;
  }
  `, "",{"version":3,"sources":["webpack://./src/styles/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Oswald&display=swap');\n\n:root {\n    --dark-color: #233142;\n    --gray-color: #455d7a;\n    --red-color: #f95959;\n    --white-color: #e3e3e3;\n    --item-color: #afafaf;\n    height: 100vh;\n    width: 100vh;\n    overflow-x: hidden;\n}\n\n* {\n    padding: 0;\n    margin: 0;\n}\n\n.main-body-container {\n    width: 100vw;\n    height: 100vh;\n    display: flex;\n}\n\n.side-bar {\n    display: grid;\n    height: 100vh;\n    grid-template-rows: 60px 1fr;\n    position: relative;\n    background-color: var(--gray-color);\n}\n\n.projects-list {\n  grid-row: 2;\n  display: flex;\n  flex-direction: column;\n  padding-top: 15px;\n  gap: 15px;\n}\n\n.project-button {\n  height: 30px;\n  font-size: 20px;\n  font-family: \"Oswald\", sans-serif;\n  color: var(--white-color);\n  background-color: transparent;\n  appearance: none;\n  border: 0;\n}\n\n.project-button:hover {\n  background-color: #384b63;\n  cursor: pointer;\n}\n\n.side-bar-button {\n    position: absolute;\n    height: 50px;\n    left: 4px;\n    top: 4px;\n    border-radius: 100px;\n}\n\n.side-bar-button:hover {\n    background-color: #ffffff2f;\n}\n\n.new-project-button {\n  grid-row: 1 / 2;\n  display: flex;\n  justify-self: flex-end;\n  appearance: none;\n  background-color: transparent;\n  grid-column: 1 / 2;\n  border: 0;\n  width: 50px;\n  align-self: center;\n  margin-right: 4px;\n  border-radius: 100px;\n  filter: invert(100%) sepia(0%) saturate(30%) hue-rotate(229deg) brightness(112%) contrast(78%);\n}\n\n.new-project-button:hover {\n  background-color: #ffffff2f;\n  cursor: pointer;\n  \n}\n\n.side-bar-shown {\n  transition: width 300ms ease-out;\n  width: 20%;\n  grid-template-columns: 100%;\n}\n\n.side-bar-hidden {\n  transition: width 300ms ease-out;\n  width: 0%;\n  grid-template-columns: 0%;\n}\n\n.side-bar-hidden .projects-list,\n.side-bar-hidden .side-bar-heading{\n  display: none;\n}\n\n.right-side {\n    flex-grow: 1;\n    height: 100vh;\n    display: flex;\n    flex-direction: column;\n}\n\n.top-bar {\n    height: 60px;\n    flex-grow: 0;\n    background-color: var(--red-color);\n    display: flex;\n    align-items: center;\n    justify-content: flex-end;\n    padding-right: 20px;\n}\n\n.content {\n    background-color: var(--white-color);\n    flex: 1;\n    position: relative;\n    display: grid;\n    grid-template-columns: 54px auto;\n    grid-template-rows: auto;\n}\n\n.heading {\n    font-family: \"Oswald\", sans-serif;\n    color: var(--white-color);\n    font-size: 2rem;\n}\n\n.new-item-button {\n  appearance: none;\n  border: 0;\n  border-radius: 100px;\n  background-color: transparent;\n  left: 4px;\n  top: 4px;\n  position: absolute;\n}\n\n.new-item-button svg:hover {\n  cursor: pointer;\n\n}\n.new-item-button:hover {\n  background-color: #c8c8c8;\n}\n\n.new-item-button svg {\n  width: 50px;\n  filter: invert(35%) sepia(15%) saturate(1092%) hue-rotate(173deg) brightness(93%) contrast(92%);\n}\n\n.project-name-getter {\n  display: flex;\n  height: 30px;\n  align-items: center;\n  justify-content: center;\n  gap: 2px;\n}\n\n.project-name-getter input {\n  background-color: #384b63;\n  appearance: none;\n  border: 0;\n  height: 30px;\n  color: var(--white-color);\n  text-align: center;\n  font-family: \"Oswald\", sans-serif;\n  font-size: 20px;\n  border-radius: 10px;\n}\n\n.project-name-getter button {\n  appearance: none;\n  background-color: #384b63;\n  border: 0;\n  height: 30px;\n  width: 30px;\n  border-radius: 10px;\n}\n\n.project-name-getter button:hover {\n  cursor: pointer;\n}\n\n.project-name-getter button svg {\n  filter: invert(100%) sepia(0%) saturate(30%) hue-rotate(229deg) brightness(112%) contrast(78%);\n  width: 30px;\n  height: 30px;\n}\n\n.side-bar-heading {\n  grid-row: 1 / 2;\n  grid-column: 1 / 2;\n  font-family: \"Oswald\", sans-serif;\n  color: var(--white-color);\n  font-size: 22px;\n  align-self: center;\n  justify-self: center;\n}\n\n.items-container {\n  grid-column: 2/3;\n  padding: 10px;\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: repeat(auto-fit, 50px);\n  gap: 20px\n}\n\n.items-container div {\n  background-color: var(--item-color);\n  border-radius: 10px;\n  display: flex;\n  padding: 2px;\n  align-items: center;\n  justify-content: flex-start;\n  gap: 4%;\n  padding-left: 12px;\n  padding-right: 12px;\n}\n\n.items-container input {\n  appearance: none;\n  background-color: var(--white-color);\n  color: var(--red-color);\n  font-family: \"Oswald\", sans-serif;\n  width: min(230px,10%);\n  height: 30px;\n  border: 0;\n  border-radius: 15px;\n  padding-left: 5px;\n}\n\n.items-container input[name=\"description\"] {\n  width: calc(min(230px,10%)*3);\n}\n\n.new-item-creator button,\n.new-item-creator button svg{\n  height: 30px;\n  width: 30px;\n}\n\n.new-item-creator svg {\n  filter: invert(100%) sepia(0%) saturate(30%) hue-rotate(229deg) brightness(112%) contrast(78%);\n}\n\n.new-item-creator button{\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: transparent;\n  border: 0;\n  margin-left: auto;\n  border-radius: 20px;\n  padding: 2px;\n}\n\n.new-item-creator button:hover{\n  background-color: #1d1d1d2f;\n  cursor: pointer;\n}\n\n.item-text,\n.item-desc,\n.item-dd,\n.item-priority {\n  font-family: \"Oswald\", sans-serif;\n  font-size: 15px;\n  height: 30px;\n  color: var(--dark-color)\n}\n\n.item-text,\n.item-dd {\n  width: 10%\n}\n\n.item-desc {\n  width: 20%;\n}\n\n.high-priority {\n  border-left: 5px #c40000 solid;\n}\n\n.med-priority {\n  border-left: 5px #c49000 solid;\n}\n\n.low-priority {\n  border-left: 5px #27c400 solid;\n}\n\n\n/* @media (max-width: 700px) {\n    .right-side {\n        flex-basis: 75%;\n    }\n    .side-bar {\n        flex-basis: 25%;\n    }\n} */\n\n/* Hamburger menu */\n.hamburger-button {\n    background-color: transparent;\n    border: none;\n    width: 50px;\n    cursor: pointer;\n    display: flex;\n    padding: 0;\n    filter: invert(100%) sepia(0%) saturate(30%) hue-rotate(229deg) brightness(112%) contrast(78%);\n  }\n  .line {\n    fill: none;\n    stroke: black;\n    stroke-width: 6;\n    transition: stroke-dasharray 600ms cubic-bezier(0.4, 0, 0.2, 1),\n      stroke-dashoffset 600ms cubic-bezier(0.4, 0, 0.2, 1);\n  }\n  .line1 {\n    stroke-dasharray: 60 207;\n    stroke-width: 6;\n  }\n  .line2 {\n    stroke-dasharray: 60 60;\n    stroke-width: 6;\n  }\n  .line3 {\n    stroke-dasharray: 60 207;\n    stroke-width: 6;\n  }\n  .opened .line1 {\n    stroke-dasharray: 90 207;\n    stroke-dashoffset: -134;\n    stroke-width: 6;\n  }\n  .opened .line2 {\n    stroke-dasharray: 1 60;\n    stroke-dashoffset: -30;\n    stroke-width: 6;\n  }\n  .opened .line3 {\n    stroke-dasharray: 90 207;\n    stroke-dashoffset: -134;\n    stroke-width: 6;\n  }\n  "],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/change-project.js":
/*!*******************************!*\
  !*** ./src/change-project.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   changeProject: () => (/* binding */ changeProject)
/* harmony export */ });
/* harmony import */ var _page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page */ "./src/page.js");
/* harmony import */ var _project_list_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project-list.js */ "./src/project-list.js");
/* harmony import */ var _list_todo_items__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./list-todo-items */ "./src/list-todo-items.js");




function changeProject(button){
    _page__WEBPACK_IMPORTED_MODULE_0__["default"].itemsContainer.innerHTML = "";
    _page__WEBPACK_IMPORTED_MODULE_0__["default"].itemsContainer.id = button;
    _project_list_js__WEBPACK_IMPORTED_MODULE_1__.ProjectList[button].projectItems.forEach( ( item ) => {
        (0,_list_todo_items__WEBPACK_IMPORTED_MODULE_2__.listTodoItem)(item);
    })
}



/***/ }),

/***/ "./src/create-remove-item.js":
/*!***********************************!*\
  !*** ./src/create-remove-item.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createItem: () => (/* binding */ createItem),
/* harmony export */   validateItem: () => (/* binding */ validateItem)
/* harmony export */ });
/* harmony import */ var _page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page */ "./src/page.js");
/* harmony import */ var _todo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo.js */ "./src/todo.js");
/* harmony import */ var _project_list_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project-list.js */ "./src/project-list.js");
/* harmony import */ var _list_todo_items__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list-todo-items */ "./src/list-todo-items.js");





function validateItem(name, description, dueDate, priority) {
    if (name.length > 20 || name.length < 1){
        alert("Name of task must be between 1 and 20 characters");
        return false
    }
    else if (description.length > 50) {
        alert("Description must be under 50 characters");
        return false
    }
    else if (dueDate.length > 50) {
        alert("Due date must be under 50 characters");
        return false
    }
    else if (priority > 3 || priority < 1 || priority.length > 1) {
        alert("Priority value must be between 1 and 3");
        return false
    }
    else {
        return true
    }
}

function createItem(name, description, dueDate, priority) {
    if (validateItem(name.value, description.value, dueDate.value, priority.value) === true) {
        _project_list_js__WEBPACK_IMPORTED_MODULE_2__.ProjectList[_page__WEBPACK_IMPORTED_MODULE_0__["default"].itemsContainer.id].projectItems.push(new _todo_js__WEBPACK_IMPORTED_MODULE_1__.ToDoItem(name.value, description.value, dueDate.value, priority.value));
        (0,_list_todo_items__WEBPACK_IMPORTED_MODULE_3__.listTodoItem)(new _todo_js__WEBPACK_IMPORTED_MODULE_1__.ToDoItem(name.value, description.value, dueDate.value, priority.value));
    }
}



/***/ }),

/***/ "./src/list-todo-items.js":
/*!********************************!*\
  !*** ./src/list-todo-items.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   listTodoItem: () => (/* binding */ listTodoItem)
/* harmony export */ });
/* harmony import */ var _page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page */ "./src/page.js");
/* harmony import */ var _priority__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./priority */ "./src/priority.js");



function listTodoItem(todo) {
    const newItem = document.createElement("div");
    
    const newTitle = document.createElement("div");
    newTitle.textContent = todo.name;
    newTitle.classList.add("item-text");
    const newDesc = document.createElement("div");
    newDesc.textContent = todo.description;
    newDesc.classList.add("item-desc");
    const newDD = document.createElement("div");
    newDD.textContent = todo.dueDate;
    newDD.classList.add("item-dd");
    const newPriority = document.createElement("div");
    newPriority.textContent = todo.priority;
    newPriority.classList.add("item-priority");
    (0,_priority__WEBPACK_IMPORTED_MODULE_1__.changePriority)(newPriority, newItem);

    newItem.appendChild(newTitle);
    newItem.appendChild(newDesc);
    newItem.appendChild(newDD);
    newItem.appendChild(newPriority);

    _page__WEBPACK_IMPORTED_MODULE_0__["default"].itemsContainer.appendChild(newItem);
}



/***/ }),

/***/ "./src/new-item-button.js":
/*!********************************!*\
  !*** ./src/new-item-button.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createItemInput: () => (/* binding */ createItemInput)
/* harmony export */ });
/* harmony import */ var _page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page */ "./src/page.js");
/* harmony import */ var _create_remove_item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-remove-item */ "./src/create-remove-item.js");
/* harmony import */ var _list_todo_items__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./list-todo-items */ "./src/list-todo-items.js");
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./todo */ "./src/todo.js");





function createItemInput() {
    const newItem = document.createElement("div");
    newItem.classList.add("new-item-creator");

    const newName = document.createElement("input");
    newName.setAttribute("name", "name");
    newName.setAttribute("placeholder", "Task Name");
    newName.setAttribute("maxlength", 20);
    const newDescription = document.createElement("input");
    newDescription.setAttribute("name", "description");
    newDescription.setAttribute("placeholder", "A brief description of your task");
    const newDueDate = document.createElement("input");
    newDueDate.setAttribute("name", "due-date");
    newDueDate.setAttribute("placeholder", "The due date of your task");
    const newPriority = document.createElement("input");
    newPriority.setAttribute("name", "priority");
    newPriority.setAttribute("placeholder", "Priority (1-3)");

    const newConfirmItem = document.createElement("button");
    newConfirmItem.innerHTML = "<svg xmlns=\"http:\/\/www.w3.org/2000/svg\" width=\"800px\" height=\"800px\" viewBox=\"0 0 24 24\" fill=\"none\"><path d=\"M4 12.6111L8.92308 17.5L20 6.5\" stroke=\"#000000\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/\></svg>";
    newConfirmItem.addEventListener("click", ()=> {
        (0,_create_remove_item__WEBPACK_IMPORTED_MODULE_1__.createItem)(newName, newDescription, newDueDate, newPriority);
        _page__WEBPACK_IMPORTED_MODULE_0__["default"].itemsContainer.removeChild(newItem)
    })

    newItem.appendChild(newName);
    newItem.appendChild(newDescription);
    newItem.appendChild(newDueDate);
    newItem.appendChild(newPriority);
    newItem.appendChild(newConfirmItem);

    _page__WEBPACK_IMPORTED_MODULE_0__["default"].itemsContainer.appendChild(newItem);
}



/***/ }),

/***/ "./src/page.js":
/*!*********************!*\
  !*** ./src/page.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//Creates and/or selects DOM elements for use in other modules
function webPage() {

    const content = document.querySelector(".content");

    const itemsContainer = document.querySelector(".items-container")

    //For add-project-to-side-bar.js
    const projectsList = document.querySelector(".projects-list");

    //For side-bar-button.js
    const sideBar = document.querySelector(".side-bar");
    const sideBarButton = document.querySelector(".side-bar-button");

    //For new-item-button.js
    const newItemButton = document.querySelector(".new-item-button");


    const newProjectButton = document.querySelector(".new-project-button");

    let currentProject = "";

    let projectButtons = document.querySelectorAll(".project-button");

    return {
        sideBar,
        sideBarButton,
        projectsList,
        newItemButton,
        newProjectButton,
        content,
        itemsContainer,
        currentProject,
        projectButtons
    };
}

const page = new webPage();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (page);

/***/ }),

/***/ "./src/priority.js":
/*!*************************!*\
  !*** ./src/priority.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   changePriority: () => (/* binding */ changePriority)
/* harmony export */ });
function changePriority(priority,parent){
    if (priority.textContent == 3) {
        parent.classList.add("high-priority");
    }
    else if (priority.textContent == 2) {
        parent.classList.add("med-priority");
    }
    else if (priority.textContent == 1) {
        parent.classList.add("low-priority");
    }
}



/***/ }),

/***/ "./src/project-list.js":
/*!*****************************!*\
  !*** ./src/project-list.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProjectList: () => (/* binding */ ProjectList),
/* harmony export */   addProjectToList: () => (/* binding */ addProjectToList),
/* harmony export */   createProjectPrompt: () => (/* binding */ createProjectPrompt)
/* harmony export */ });
/* harmony import */ var _page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page */ "./src/page.js");
/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project.js */ "./src/project.js");
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todo */ "./src/todo.js");
/* harmony import */ var _change_project__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./change-project */ "./src/change-project.js");





const ProjectList = {};

addProjectToList(new _project_js__WEBPACK_IMPORTED_MODULE_1__.Project("Default"), ProjectList);
addProjectToList(new _project_js__WEBPACK_IMPORTED_MODULE_1__.Project("Test"), ProjectList);
_page__WEBPACK_IMPORTED_MODULE_0__["default"].itemsContainer.id = "Default";

//Testing page functionality
ProjectList["Test"].projectItems.push(new _todo__WEBPACK_IMPORTED_MODULE_2__.ToDoItem("Homework","Complete math homework","Sunday","2"));
ProjectList["Test"].projectItems.push(new _todo__WEBPACK_IMPORTED_MODULE_2__.ToDoItem("Work","Complete five assignments at work","Thursday","3"));
ProjectList["Test"].projectItems.push(new _todo__WEBPACK_IMPORTED_MODULE_2__.ToDoItem("Work","Fill out timesheet","Aug 20","1"));
ProjectList["Test"].projectItems.push(new _todo__WEBPACK_IMPORTED_MODULE_2__.ToDoItem("Clean room","Clean my room","Wednesday","1"));


console.log(ProjectList)

function addProjectToList(project, projectArray) {
    projectArray[project.name] = project;
    _page__WEBPACK_IMPORTED_MODULE_0__["default"].projectsList.innerHTML = "";
    for (const [name, project] of Object.entries(projectArray)) {
        const newItem = document.createElement("button");
        newItem.classList.add("project-button");
        newItem.textContent = name;
        newItem.name = name;
        newItem.addEventListener("click", ()=> {
            (0,_change_project__WEBPACK_IMPORTED_MODULE_3__.changeProject)(name);
        })
        _page__WEBPACK_IMPORTED_MODULE_0__["default"].projectsList.appendChild(newItem);
    }
}

function createProjectPrompt() {
    const nameGetter = document.createElement("div");
    nameGetter.classList.add("project-name-getter");

    const nameInput = document.createElement("input");
    nameInput.classList.add("name-getter-input");
    nameInput.value = "Unnamed Project";

    const nameConfirmButton = document.createElement("button");
    nameConfirmButton.classList.add("name-getter-button");
    nameConfirmButton.innerHTML = "<svg xmlns=\"http:\/\/www.w3.org/2000/svg\" width=\"800px\" height=\"800px\" viewBox=\"0 0 24 24\" fill=\"none\"><path d=\"M4 12.6111L8.92308 17.5L20 6.5\" stroke=\"#000000\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/\></svg>";

    nameGetter.appendChild(nameInput);
    nameGetter.appendChild(nameConfirmButton);
    _page__WEBPACK_IMPORTED_MODULE_0__["default"].projectsList.appendChild(nameGetter);
    
    document.querySelectorAll(".name-getter-button").forEach( (projectButton) => {
        projectButton.addEventListener("click", () => {
            if (document.querySelector(".name-getter-input").value.length < 1) {
                addProjectToList(new _project_js__WEBPACK_IMPORTED_MODULE_1__.Project("Unnamed Project"), ProjectList);
            }
            else {
                addProjectToList(new _project_js__WEBPACK_IMPORTED_MODULE_1__.Project(document.querySelector(".name-getter-input").value), ProjectList);
            }
        })
    })
}

/* function updateProjectButtons() {
    page.projectButtons = document.querySelectorAll(".project-button");
    page.projectButtons.forEach( (item) => {
        item.onclick = 
    })
}
 */




/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Project: () => (/* binding */ Project)
/* harmony export */ });
class Project {
    constructor(name) {
        this.name = name;
        this.projectItems = [];
    }
    addItem(toDoItem) {
        this.projectItems.push(toDoItem);
    }
    removeItem(toDoItem) {
        this.projectItems.splice(this.projectItems.indexOf(toDoItem), 1);
    }
}



/***/ }),

/***/ "./src/side-bar-button.js":
/*!********************************!*\
  !*** ./src/side-bar-button.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   sideBarButton: () => (/* binding */ sideBarButton)
/* harmony export */ });
/* harmony import */ var _page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page */ "./src/page.js");


function sideBarButton() {
        _page__WEBPACK_IMPORTED_MODULE_0__["default"].sideBar.classList.toggle("side-bar-hidden");
        _page__WEBPACK_IMPORTED_MODULE_0__["default"].sideBar.classList.toggle("side-bar-shown");
}



//Creates functionality for the side bar hamburger button

/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ToDoItem: () => (/* binding */ ToDoItem)
/* harmony export */ });
class ToDoItem {
    constructor(name, description, dueDate, priority) {
        this.name = name;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }
}



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page */ "./src/page.js");
/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/style.css */ "./src/styles/style.css");
/* harmony import */ var _side_bar_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./side-bar-button */ "./src/side-bar-button.js");
/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./project.js */ "./src/project.js");
/* harmony import */ var _project_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./project-list */ "./src/project-list.js");
/* harmony import */ var _new_item_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./new-item-button */ "./src/new-item-button.js");








(0,_new_item_button__WEBPACK_IMPORTED_MODULE_5__.createItemInput)();

_page__WEBPACK_IMPORTED_MODULE_0__["default"].sideBarButton.addEventListener("click", () => {
    (0,_side_bar_button__WEBPACK_IMPORTED_MODULE_2__.sideBarButton)();
})

_page__WEBPACK_IMPORTED_MODULE_0__["default"].newItemButton.addEventListener("click", ()=> {
    if (!(_page__WEBPACK_IMPORTED_MODULE_0__["default"].itemsContainer.contains(document.querySelector(".new-item-creator")))) {
        (0,_new_item_button__WEBPACK_IMPORTED_MODULE_5__.createItemInput)();
    }
})

_page__WEBPACK_IMPORTED_MODULE_0__["default"].newProjectButton.addEventListener("click", () => {
    if (!(_page__WEBPACK_IMPORTED_MODULE_0__["default"].projectsList.contains(document.querySelector(".project-name-getter")))) {
        (0,_project_list__WEBPACK_IMPORTED_MODULE_4__.createProjectPrompt)();
    }
})

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUM2RztBQUNqQjtBQUM1Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLG9IQUFvSDtBQUNwSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyx1RkFBdUYsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLE1BQU0sVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLE1BQU0sTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxh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ckVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNYeUI7O0FBRXpCO0FBQ0EsUUFBUSw2Q0FBSTtBQUNaLFFBQVEsNkNBQUk7QUFDWjs7QUFFc0I7O0FBRXRCOzs7Ozs7Ozs7Ozs7OztBQ1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O1VDUEE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQXlCO0FBQ0U7O0FBRXNCO0FBQ1g7QUFDNkM7QUFDaEM7O0FBRW5ELGlFQUFlOztBQUVmLDZDQUFJO0FBQ0osSUFBSSwrREFBYTtBQUNqQixDQUFDOztBQUVELDZDQUFJO0FBQ0osVUFBVSw2Q0FBSTtBQUNkLFFBQVEsaUVBQWU7QUFDdkI7QUFDQSxDQUFDOztBQUVELDZDQUFJO0FBQ0osVUFBVSw2Q0FBSTtBQUNkLFFBQVEsa0VBQW1CO0FBQzNCO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc3R5bGVzL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzP2ZmOTQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2NoYW5nZS1wcm9qZWN0LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvY3JlYXRlLXJlbW92ZS1pdGVtLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvbGlzdC10b2RvLWl0ZW1zLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvbmV3LWl0ZW0tYnV0dG9uLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvcGFnZS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3ByaW9yaXR5LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvcHJvamVjdC1saXN0LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3NpZGUtYmFyLWJ1dHRvbi5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3RvZG8uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU9zd2FsZCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYDpyb290IHtcbiAgICAtLWRhcmstY29sb3I6ICMyMzMxNDI7XG4gICAgLS1ncmF5LWNvbG9yOiAjNDU1ZDdhO1xuICAgIC0tcmVkLWNvbG9yOiAjZjk1OTU5O1xuICAgIC0td2hpdGUtY29sb3I6ICNlM2UzZTM7XG4gICAgLS1pdGVtLWNvbG9yOiAjYWZhZmFmO1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgd2lkdGg6IDEwMHZoO1xuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbn1cblxuKiB7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW46IDA7XG59XG5cbi5tYWluLWJvZHktY29udGFpbmVyIHtcbiAgICB3aWR0aDogMTAwdnc7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uc2lkZS1iYXIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDYwcHggMWZyO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmF5LWNvbG9yKTtcbn1cblxuLnByb2plY3RzLWxpc3Qge1xuICBncmlkLXJvdzogMjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcGFkZGluZy10b3A6IDE1cHg7XG4gIGdhcDogMTVweDtcbn1cblxuLnByb2plY3QtYnV0dG9uIHtcbiAgaGVpZ2h0OiAzMHB4O1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtZmFtaWx5OiBcIk9zd2FsZFwiLCBzYW5zLXNlcmlmO1xuICBjb2xvcjogdmFyKC0td2hpdGUtY29sb3IpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYXBwZWFyYW5jZTogbm9uZTtcbiAgYm9yZGVyOiAwO1xufVxuXG4ucHJvamVjdC1idXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzg0YjYzO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5zaWRlLWJhci1idXR0b24ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgbGVmdDogNHB4O1xuICAgIHRvcDogNHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xufVxuXG4uc2lkZS1iYXItYnV0dG9uOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmMmY7XG59XG5cbi5uZXctcHJvamVjdC1idXR0b24ge1xuICBncmlkLXJvdzogMSAvIDI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktc2VsZjogZmxleC1lbmQ7XG4gIGFwcGVhcmFuY2U6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBncmlkLWNvbHVtbjogMSAvIDI7XG4gIGJvcmRlcjogMDtcbiAgd2lkdGg6IDUwcHg7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgbWFyZ2luLXJpZ2h0OiA0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xuICBmaWx0ZXI6IGludmVydCgxMDAlKSBzZXBpYSgwJSkgc2F0dXJhdGUoMzAlKSBodWUtcm90YXRlKDIyOWRlZykgYnJpZ2h0bmVzcygxMTIlKSBjb250cmFzdCg3OCUpO1xufVxuXG4ubmV3LXByb2plY3QtYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjJmO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIFxufVxuXG4uc2lkZS1iYXItc2hvd24ge1xuICB0cmFuc2l0aW9uOiB3aWR0aCAzMDBtcyBlYXNlLW91dDtcbiAgd2lkdGg6IDIwJTtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMDAlO1xufVxuXG4uc2lkZS1iYXItaGlkZGVuIHtcbiAgdHJhbnNpdGlvbjogd2lkdGggMzAwbXMgZWFzZS1vdXQ7XG4gIHdpZHRoOiAwJTtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAwJTtcbn1cblxuLnNpZGUtYmFyLWhpZGRlbiAucHJvamVjdHMtbGlzdCxcbi5zaWRlLWJhci1oaWRkZW4gLnNpZGUtYmFyLWhlYWRpbmd7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5yaWdodC1zaWRlIHtcbiAgICBmbGV4LWdyb3c6IDE7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi50b3AtYmFyIHtcbiAgICBoZWlnaHQ6IDYwcHg7XG4gICAgZmxleC1ncm93OiAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXJlZC1jb2xvcik7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcbn1cblxuLmNvbnRlbnQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlLWNvbG9yKTtcbiAgICBmbGV4OiAxO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNTRweCBhdXRvO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0bztcbn1cblxuLmhlYWRpbmcge1xuICAgIGZvbnQtZmFtaWx5OiBcIk9zd2FsZFwiLCBzYW5zLXNlcmlmO1xuICAgIGNvbG9yOiB2YXIoLS13aGl0ZS1jb2xvcik7XG4gICAgZm9udC1zaXplOiAycmVtO1xufVxuXG4ubmV3LWl0ZW0tYnV0dG9uIHtcbiAgYXBwZWFyYW5jZTogbm9uZTtcbiAgYm9yZGVyOiAwO1xuICBib3JkZXItcmFkaXVzOiAxMDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGxlZnQ6IDRweDtcbiAgdG9wOiA0cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuLm5ldy1pdGVtLWJ1dHRvbiBzdmc6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG5cbn1cbi5uZXctaXRlbS1idXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzhjOGM4O1xufVxuXG4ubmV3LWl0ZW0tYnV0dG9uIHN2ZyB7XG4gIHdpZHRoOiA1MHB4O1xuICBmaWx0ZXI6IGludmVydCgzNSUpIHNlcGlhKDE1JSkgc2F0dXJhdGUoMTA5MiUpIGh1ZS1yb3RhdGUoMTczZGVnKSBicmlnaHRuZXNzKDkzJSkgY29udHJhc3QoOTIlKTtcbn1cblxuLnByb2plY3QtbmFtZS1nZXR0ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBnYXA6IDJweDtcbn1cblxuLnByb2plY3QtbmFtZS1nZXR0ZXIgaW5wdXQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzg0YjYzO1xuICBhcHBlYXJhbmNlOiBub25lO1xuICBib3JkZXI6IDA7XG4gIGhlaWdodDogMzBweDtcbiAgY29sb3I6IHZhcigtLXdoaXRlLWNvbG9yKTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LWZhbWlseTogXCJPc3dhbGRcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG4ucHJvamVjdC1uYW1lLWdldHRlciBidXR0b24ge1xuICBhcHBlYXJhbmNlOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzg0YjYzO1xuICBib3JkZXI6IDA7XG4gIGhlaWdodDogMzBweDtcbiAgd2lkdGg6IDMwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbi5wcm9qZWN0LW5hbWUtZ2V0dGVyIGJ1dHRvbjpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnByb2plY3QtbmFtZS1nZXR0ZXIgYnV0dG9uIHN2ZyB7XG4gIGZpbHRlcjogaW52ZXJ0KDEwMCUpIHNlcGlhKDAlKSBzYXR1cmF0ZSgzMCUpIGh1ZS1yb3RhdGUoMjI5ZGVnKSBicmlnaHRuZXNzKDExMiUpIGNvbnRyYXN0KDc4JSk7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG59XG5cbi5zaWRlLWJhci1oZWFkaW5nIHtcbiAgZ3JpZC1yb3c6IDEgLyAyO1xuICBncmlkLWNvbHVtbjogMSAvIDI7XG4gIGZvbnQtZmFtaWx5OiBcIk9zd2FsZFwiLCBzYW5zLXNlcmlmO1xuICBjb2xvcjogdmFyKC0td2hpdGUtY29sb3IpO1xuICBmb250LXNpemU6IDIycHg7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XG59XG5cbi5pdGVtcy1jb250YWluZXIge1xuICBncmlkLWNvbHVtbjogMi8zO1xuICBwYWRkaW5nOiAxMHB4O1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoYXV0by1maXQsIDUwcHgpO1xuICBnYXA6IDIwcHhcbn1cblxuLml0ZW1zLWNvbnRhaW5lciBkaXYge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pdGVtLWNvbG9yKTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgcGFkZGluZzogMnB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGdhcDogNCU7XG4gIHBhZGRpbmctbGVmdDogMTJweDtcbiAgcGFkZGluZy1yaWdodDogMTJweDtcbn1cblxuLml0ZW1zLWNvbnRhaW5lciBpbnB1dCB7XG4gIGFwcGVhcmFuY2U6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlLWNvbG9yKTtcbiAgY29sb3I6IHZhcigtLXJlZC1jb2xvcik7XG4gIGZvbnQtZmFtaWx5OiBcIk9zd2FsZFwiLCBzYW5zLXNlcmlmO1xuICB3aWR0aDogbWluKDIzMHB4LDEwJSk7XG4gIGhlaWdodDogMzBweDtcbiAgYm9yZGVyOiAwO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBwYWRkaW5nLWxlZnQ6IDVweDtcbn1cblxuLml0ZW1zLWNvbnRhaW5lciBpbnB1dFtuYW1lPVwiZGVzY3JpcHRpb25cIl0ge1xuICB3aWR0aDogY2FsYyhtaW4oMjMwcHgsMTAlKSozKTtcbn1cblxuLm5ldy1pdGVtLWNyZWF0b3IgYnV0dG9uLFxuLm5ldy1pdGVtLWNyZWF0b3IgYnV0dG9uIHN2Z3tcbiAgaGVpZ2h0OiAzMHB4O1xuICB3aWR0aDogMzBweDtcbn1cblxuLm5ldy1pdGVtLWNyZWF0b3Igc3ZnIHtcbiAgZmlsdGVyOiBpbnZlcnQoMTAwJSkgc2VwaWEoMCUpIHNhdHVyYXRlKDMwJSkgaHVlLXJvdGF0ZSgyMjlkZWcpIGJyaWdodG5lc3MoMTEyJSkgY29udHJhc3QoNzglKTtcbn1cblxuLm5ldy1pdGVtLWNyZWF0b3IgYnV0dG9ue1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogMDtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIHBhZGRpbmc6IDJweDtcbn1cblxuLm5ldy1pdGVtLWNyZWF0b3IgYnV0dG9uOmhvdmVye1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWQxZDFkMmY7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLml0ZW0tdGV4dCxcbi5pdGVtLWRlc2MsXG4uaXRlbS1kZCxcbi5pdGVtLXByaW9yaXR5IHtcbiAgZm9udC1mYW1pbHk6IFwiT3N3YWxkXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBjb2xvcjogdmFyKC0tZGFyay1jb2xvcilcbn1cblxuLml0ZW0tdGV4dCxcbi5pdGVtLWRkIHtcbiAgd2lkdGg6IDEwJVxufVxuXG4uaXRlbS1kZXNjIHtcbiAgd2lkdGg6IDIwJTtcbn1cblxuLmhpZ2gtcHJpb3JpdHkge1xuICBib3JkZXItbGVmdDogNXB4ICNjNDAwMDAgc29saWQ7XG59XG5cbi5tZWQtcHJpb3JpdHkge1xuICBib3JkZXItbGVmdDogNXB4ICNjNDkwMDAgc29saWQ7XG59XG5cbi5sb3ctcHJpb3JpdHkge1xuICBib3JkZXItbGVmdDogNXB4ICMyN2M0MDAgc29saWQ7XG59XG5cblxuLyogQG1lZGlhIChtYXgtd2lkdGg6IDcwMHB4KSB7XG4gICAgLnJpZ2h0LXNpZGUge1xuICAgICAgICBmbGV4LWJhc2lzOiA3NSU7XG4gICAgfVxuICAgIC5zaWRlLWJhciB7XG4gICAgICAgIGZsZXgtYmFzaXM6IDI1JTtcbiAgICB9XG59ICovXG5cbi8qIEhhbWJ1cmdlciBtZW51ICovXG4uaGFtYnVyZ2VyLWJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHBhZGRpbmc6IDA7XG4gICAgZmlsdGVyOiBpbnZlcnQoMTAwJSkgc2VwaWEoMCUpIHNhdHVyYXRlKDMwJSkgaHVlLXJvdGF0ZSgyMjlkZWcpIGJyaWdodG5lc3MoMTEyJSkgY29udHJhc3QoNzglKTtcbiAgfVxuICAubGluZSB7XG4gICAgZmlsbDogbm9uZTtcbiAgICBzdHJva2U6IGJsYWNrO1xuICAgIHN0cm9rZS13aWR0aDogNjtcbiAgICB0cmFuc2l0aW9uOiBzdHJva2UtZGFzaGFycmF5IDYwMG1zIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSksXG4gICAgICBzdHJva2UtZGFzaG9mZnNldCA2MDBtcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO1xuICB9XG4gIC5saW5lMSB7XG4gICAgc3Ryb2tlLWRhc2hhcnJheTogNjAgMjA3O1xuICAgIHN0cm9rZS13aWR0aDogNjtcbiAgfVxuICAubGluZTIge1xuICAgIHN0cm9rZS1kYXNoYXJyYXk6IDYwIDYwO1xuICAgIHN0cm9rZS13aWR0aDogNjtcbiAgfVxuICAubGluZTMge1xuICAgIHN0cm9rZS1kYXNoYXJyYXk6IDYwIDIwNztcbiAgICBzdHJva2Utd2lkdGg6IDY7XG4gIH1cbiAgLm9wZW5lZCAubGluZTEge1xuICAgIHN0cm9rZS1kYXNoYXJyYXk6IDkwIDIwNztcbiAgICBzdHJva2UtZGFzaG9mZnNldDogLTEzNDtcbiAgICBzdHJva2Utd2lkdGg6IDY7XG4gIH1cbiAgLm9wZW5lZCAubGluZTIge1xuICAgIHN0cm9rZS1kYXNoYXJyYXk6IDEgNjA7XG4gICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IC0zMDtcbiAgICBzdHJva2Utd2lkdGg6IDY7XG4gIH1cbiAgLm9wZW5lZCAubGluZTMge1xuICAgIHN0cm9rZS1kYXNoYXJyYXk6IDkwIDIwNztcbiAgICBzdHJva2UtZGFzaG9mZnNldDogLTEzNDtcbiAgICBzdHJva2Utd2lkdGg6IDY7XG4gIH1cbiAgYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtJQUNJLHFCQUFxQjtJQUNyQixxQkFBcUI7SUFDckIsb0JBQW9CO0lBQ3BCLHNCQUFzQjtJQUN0QixxQkFBcUI7SUFDckIsYUFBYTtJQUNiLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsU0FBUztBQUNiOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ks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ZWFwaXMuY29tL2NzczI/ZmFtaWx5PU9zd2FsZCZkaXNwbGF5PXN3YXAnKTtcXG5cXG46cm9vdCB7XFxuICAgIC0tZGFyay1jb2xvcjogIzIzMzE0MjtcXG4gICAgLS1ncmF5LWNvbG9yOiAjNDU1ZDdhO1xcbiAgICAtLXJlZC1jb2xvcjogI2Y5NTk1OTtcXG4gICAgLS13aGl0ZS1jb2xvcjogI2UzZTNlMztcXG4gICAgLS1pdGVtLWNvbG9yOiAjYWZhZmFmO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICB3aWR0aDogMTAwdmg7XFxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcXG59XFxuXFxuKiB7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuLm1haW4tYm9keS1jb250YWluZXIge1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5zaWRlLWJhciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogNjBweCAxZnI7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JheS1jb2xvcik7XFxufVxcblxcbi5wcm9qZWN0cy1saXN0IHtcXG4gIGdyaWQtcm93OiAyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBwYWRkaW5nLXRvcDogMTVweDtcXG4gIGdhcDogMTVweDtcXG59XFxuXFxuLnByb2plY3QtYnV0dG9uIHtcXG4gIGhlaWdodDogMzBweDtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiT3N3YWxkXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGNvbG9yOiB2YXIoLS13aGl0ZS1jb2xvcik7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGFwcGVhcmFuY2U6IG5vbmU7XFxuICBib3JkZXI6IDA7XFxufVxcblxcbi5wcm9qZWN0LWJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzg0YjYzO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uc2lkZS1iYXItYnV0dG9uIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIGxlZnQ6IDRweDtcXG4gICAgdG9wOiA0cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xcbn1cXG5cXG4uc2lkZS1iYXItYnV0dG9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjJmO1xcbn1cXG5cXG4ubmV3LXByb2plY3QtYnV0dG9uIHtcXG4gIGdyaWQtcm93OiAxIC8gMjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LXNlbGY6IGZsZXgtZW5kO1xcbiAgYXBwZWFyYW5jZTogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbiAgYm9yZGVyOiAwO1xcbiAgd2lkdGg6IDUwcHg7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBtYXJnaW4tcmlnaHQ6IDRweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xcbiAgZmlsdGVyOiBpbnZlcnQoMTAwJSkgc2VwaWEoMCUpIHNhdHVyYXRlKDMwJSkgaHVlLXJvdGF0ZSgyMjlkZWcpIGJyaWdodG5lc3MoMTEyJSkgY29udHJhc3QoNzglKTtcXG59XFxuXFxuLm5ldy1wcm9qZWN0LWJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmMmY7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBcXG59XFxuXFxuLnNpZGUtYmFyLXNob3duIHtcXG4gIHRyYW5zaXRpb246IHdpZHRoIDMwMG1zIGVhc2Utb3V0O1xcbiAgd2lkdGg6IDIwJTtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTAwJTtcXG59XFxuXFxuLnNpZGUtYmFyLWhpZGRlbiB7XFxuICB0cmFuc2l0aW9uOiB3aWR0aCAzMDBtcyBlYXNlLW91dDtcXG4gIHdpZHRoOiAwJTtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMCU7XFxufVxcblxcbi5zaWRlLWJhci1oaWRkZW4gLnByb2plY3RzLWxpc3QsXFxuLnNpZGUtYmFyLWhpZGRlbiAuc2lkZS1iYXItaGVhZGluZ3tcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5yaWdodC1zaWRlIHtcXG4gICAgZmxleC1ncm93OiAxO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4udG9wLWJhciB7XFxuICAgIGhlaWdodDogNjBweDtcXG4gICAgZmxleC1ncm93OiAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1yZWQtY29sb3IpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xcbn1cXG5cXG4uY29udGVudCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlLWNvbG9yKTtcXG4gICAgZmxleDogMTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDU0cHggYXV0bztcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvO1xcbn1cXG5cXG4uaGVhZGluZyB7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiT3N3YWxkXFxcIiwgc2Fucy1zZXJpZjtcXG4gICAgY29sb3I6IHZhcigtLXdoaXRlLWNvbG9yKTtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbn1cXG5cXG4ubmV3LWl0ZW0tYnV0dG9uIHtcXG4gIGFwcGVhcmFuY2U6IG5vbmU7XFxuICBib3JkZXI6IDA7XFxuICBib3JkZXItcmFkaXVzOiAxMDBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgbGVmdDogNHB4O1xcbiAgdG9wOiA0cHg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxufVxcblxcbi5uZXctaXRlbS1idXR0b24gc3ZnOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG5cXG59XFxuLm5ldy1pdGVtLWJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzhjOGM4O1xcbn1cXG5cXG4ubmV3LWl0ZW0tYnV0dG9uIHN2ZyB7XFxuICB3aWR0aDogNTBweDtcXG4gIGZpbHRlcjogaW52ZXJ0KDM1JSkgc2VwaWEoMTUlKSBzYXR1cmF0ZSgxMDkyJSkgaHVlLXJvdGF0ZSgxNzNkZWcpIGJyaWdodG5lc3MoOTMlKSBjb250cmFzdCg5MiUpO1xcbn1cXG5cXG4ucHJvamVjdC1uYW1lLWdldHRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAycHg7XFxufVxcblxcbi5wcm9qZWN0LW5hbWUtZ2V0dGVyIGlucHV0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzODRiNjM7XFxuICBhcHBlYXJhbmNlOiBub25lO1xcbiAgYm9yZGVyOiAwO1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgY29sb3I6IHZhcigtLXdoaXRlLWNvbG9yKTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiT3N3YWxkXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbi5wcm9qZWN0LW5hbWUtZ2V0dGVyIGJ1dHRvbiB7XFxuICBhcHBlYXJhbmNlOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM4NGI2MztcXG4gIGJvcmRlcjogMDtcXG4gIGhlaWdodDogMzBweDtcXG4gIHdpZHRoOiAzMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuLnByb2plY3QtbmFtZS1nZXR0ZXIgYnV0dG9uOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnByb2plY3QtbmFtZS1nZXR0ZXIgYnV0dG9uIHN2ZyB7XFxuICBmaWx0ZXI6IGludmVydCgxMDAlKSBzZXBpYSgwJSkgc2F0dXJhdGUoMzAlKSBodWUtcm90YXRlKDIyOWRlZykgYnJpZ2h0bmVzcygxMTIlKSBjb250cmFzdCg3OCUpO1xcbiAgd2lkdGg6IDMwcHg7XFxuICBoZWlnaHQ6IDMwcHg7XFxufVxcblxcbi5zaWRlLWJhci1oZWFkaW5nIHtcXG4gIGdyaWQtcm93OiAxIC8gMjtcXG4gIGdyaWQtY29sdW1uOiAxIC8gMjtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiT3N3YWxkXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGNvbG9yOiB2YXIoLS13aGl0ZS1jb2xvcik7XFxuICBmb250LXNpemU6IDIycHg7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLml0ZW1zLWNvbnRhaW5lciB7XFxuICBncmlkLWNvbHVtbjogMi8zO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KGF1dG8tZml0LCA1MHB4KTtcXG4gIGdhcDogMjBweFxcbn1cXG5cXG4uaXRlbXMtY29udGFpbmVyIGRpdiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pdGVtLWNvbG9yKTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgcGFkZGluZzogMnB4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gIGdhcDogNCU7XFxuICBwYWRkaW5nLWxlZnQ6IDEycHg7XFxuICBwYWRkaW5nLXJpZ2h0OiAxMnB4O1xcbn1cXG5cXG4uaXRlbXMtY29udGFpbmVyIGlucHV0IHtcXG4gIGFwcGVhcmFuY2U6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZS1jb2xvcik7XFxuICBjb2xvcjogdmFyKC0tcmVkLWNvbG9yKTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiT3N3YWxkXFxcIiwgc2Fucy1zZXJpZjtcXG4gIHdpZHRoOiBtaW4oMjMwcHgsMTAlKTtcXG4gIGhlaWdodDogMzBweDtcXG4gIGJvcmRlcjogMDtcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICBwYWRkaW5nLWxlZnQ6IDVweDtcXG59XFxuXFxuLml0ZW1zLWNvbnRhaW5lciBpbnB1dFtuYW1lPVxcXCJkZXNjcmlwdGlvblxcXCJdIHtcXG4gIHdpZHRoOiBjYWxjKG1pbigyMzBweCwxMCUpKjMpO1xcbn1cXG5cXG4ubmV3LWl0ZW0tY3JlYXRvciBidXR0b24sXFxuLm5ldy1pdGVtLWNyZWF0b3IgYnV0dG9uIHN2Z3tcXG4gIGhlaWdodDogMzBweDtcXG4gIHdpZHRoOiAzMHB4O1xcbn1cXG5cXG4ubmV3LWl0ZW0tY3JlYXRvciBzdmcge1xcbiAgZmlsdGVyOiBpbnZlcnQoMTAwJSkgc2VwaWEoMCUpIHNhdHVyYXRlKDMwJSkgaHVlLXJvdGF0ZSgyMjlkZWcpIGJyaWdodG5lc3MoMTEyJSkgY29udHJhc3QoNzglKTtcXG59XFxuXFxuLm5ldy1pdGVtLWNyZWF0b3IgYnV0dG9ue1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyOiAwO1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgcGFkZGluZzogMnB4O1xcbn1cXG5cXG4ubmV3LWl0ZW0tY3JlYXRvciBidXR0b246aG92ZXJ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWQxZDFkMmY7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5pdGVtLXRleHQsXFxuLml0ZW0tZGVzYyxcXG4uaXRlbS1kZCxcXG4uaXRlbS1wcmlvcml0eSB7XFxuICBmb250LWZhbWlseTogXFxcIk9zd2FsZFxcXCIsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDE1cHg7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICBjb2xvcjogdmFyKC0tZGFyay1jb2xvcilcXG59XFxuXFxuLml0ZW0tdGV4dCxcXG4uaXRlbS1kZCB7XFxuICB3aWR0aDogMTAlXFxufVxcblxcbi5pdGVtLWRlc2Mge1xcbiAgd2lkdGg6IDIwJTtcXG59XFxuXFxuLmhpZ2gtcHJpb3JpdHkge1xcbiAgYm9yZGVyLWxlZnQ6IDVweCAjYzQwMDAwIHNvbGlkO1xcbn1cXG5cXG4ubWVkLXByaW9yaXR5IHtcXG4gIGJvcmRlci1sZWZ0OiA1cHggI2M0OTAwMCBzb2xpZDtcXG59XFxuXFxuLmxvdy1wcmlvcml0eSB7XFxuICBib3JkZXItbGVmdDogNXB4ICMyN2M0MDAgc29saWQ7XFxufVxcblxcblxcbi8qIEBtZWRpYSAobWF4LXdpZHRoOiA3MDBweCkge1xcbiAgICAucmlnaHQtc2lkZSB7XFxuICAgICAgICBmbGV4LWJhc2lzOiA3NSU7XFxuICAgIH1cXG4gICAgLnNpZGUtYmFyIHtcXG4gICAgICAgIGZsZXgtYmFzaXM6IDI1JTtcXG4gICAgfVxcbn0gKi9cXG5cXG4vKiBIYW1idXJnZXIgbWVudSAqL1xcbi5oYW1idXJnZXItYnV0dG9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgd2lkdGg6IDUwcHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgZmlsdGVyOiBpbnZlcnQoMTAwJSkgc2VwaWEoMCUpIHNhdHVyYXRlKDMwJSkgaHVlLXJvdGF0ZSgyMjlkZWcpIGJyaWdodG5lc3MoMTEyJSkgY29udHJhc3QoNzglKTtcXG4gIH1cXG4gIC5saW5lIHtcXG4gICAgZmlsbDogbm9uZTtcXG4gICAgc3Ryb2tlOiBibGFjaztcXG4gICAgc3Ryb2tlLXdpZHRoOiA2O1xcbiAgICB0cmFuc2l0aW9uOiBzdHJva2UtZGFzaGFycmF5IDYwMG1zIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSksXFxuICAgICAgc3Ryb2tlLWRhc2hvZmZzZXQgNjAwbXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcXG4gIH1cXG4gIC5saW5lMSB7XFxuICAgIHN0cm9rZS1kYXNoYXJyYXk6IDYwIDIwNztcXG4gICAgc3Ryb2tlLXdpZHRoOiA2O1xcbiAgfVxcbiAgLmxpbmUyIHtcXG4gICAgc3Ryb2tlLWRhc2hhcnJheTogNjAgNjA7XFxuICAgIHN0cm9rZS13aWR0aDogNjtcXG4gIH1cXG4gIC5saW5lMyB7XFxuICAgIHN0cm9rZS1kYXNoYXJyYXk6IDYwIDIwNztcXG4gICAgc3Ryb2tlLXdpZHRoOiA2O1xcbiAgfVxcbiAgLm9wZW5lZCAubGluZTEge1xcbiAgICBzdHJva2UtZGFzaGFycmF5OiA5MCAyMDc7XFxuICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAtMTM0O1xcbiAgICBzdHJva2Utd2lkdGg6IDY7XFxuICB9XFxuICAub3BlbmVkIC5saW5lMiB7XFxuICAgIHN0cm9rZS1kYXNoYXJyYXk6IDEgNjA7XFxuICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAtMzA7XFxuICAgIHN0cm9rZS13aWR0aDogNjtcXG4gIH1cXG4gIC5vcGVuZWQgLmxpbmUzIHtcXG4gICAgc3Ryb2tlLWRhc2hhcnJheTogOTAgMjA3O1xcbiAgICBzdHJva2UtZGFzaG9mZnNldDogLTEzNDtcXG4gICAgc3Ryb2tlLXdpZHRoOiA2O1xcbiAgfVxcbiAgXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBwYWdlIGZyb20gXCIuL3BhZ2VcIjtcbmltcG9ydCB7UHJvamVjdExpc3R9IGZyb20gXCIuL3Byb2plY3QtbGlzdC5qc1wiXG5pbXBvcnQgeyBsaXN0VG9kb0l0ZW0gfSBmcm9tIFwiLi9saXN0LXRvZG8taXRlbXNcIjtcblxuZnVuY3Rpb24gY2hhbmdlUHJvamVjdChidXR0b24pe1xuICAgIHBhZ2UuaXRlbXNDb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcbiAgICBwYWdlLml0ZW1zQ29udGFpbmVyLmlkID0gYnV0dG9uO1xuICAgIFByb2plY3RMaXN0W2J1dHRvbl0ucHJvamVjdEl0ZW1zLmZvckVhY2goICggaXRlbSApID0+IHtcbiAgICAgICAgbGlzdFRvZG9JdGVtKGl0ZW0pO1xuICAgIH0pXG59XG5cbmV4cG9ydCB7Y2hhbmdlUHJvamVjdH0iLCJpbXBvcnQgcGFnZSBmcm9tIFwiLi9wYWdlXCI7XG5pbXBvcnQge1RvRG9JdGVtfSBmcm9tIFwiLi90b2RvLmpzXCJcbmltcG9ydCB7UHJvamVjdExpc3R9IGZyb20gXCIuL3Byb2plY3QtbGlzdC5qc1wiXG5pbXBvcnQgeyBsaXN0VG9kb0l0ZW0gfSBmcm9tIFwiLi9saXN0LXRvZG8taXRlbXNcIjtcblxuZnVuY3Rpb24gdmFsaWRhdGVJdGVtKG5hbWUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSkge1xuICAgIGlmIChuYW1lLmxlbmd0aCA+IDIwIHx8IG5hbWUubGVuZ3RoIDwgMSl7XG4gICAgICAgIGFsZXJ0KFwiTmFtZSBvZiB0YXNrIG11c3QgYmUgYmV0d2VlbiAxIGFuZCAyMCBjaGFyYWN0ZXJzXCIpO1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG4gICAgZWxzZSBpZiAoZGVzY3JpcHRpb24ubGVuZ3RoID4gNTApIHtcbiAgICAgICAgYWxlcnQoXCJEZXNjcmlwdGlvbiBtdXN0IGJlIHVuZGVyIDUwIGNoYXJhY3RlcnNcIik7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cbiAgICBlbHNlIGlmIChkdWVEYXRlLmxlbmd0aCA+IDUwKSB7XG4gICAgICAgIGFsZXJ0KFwiRHVlIGRhdGUgbXVzdCBiZSB1bmRlciA1MCBjaGFyYWN0ZXJzXCIpO1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG4gICAgZWxzZSBpZiAocHJpb3JpdHkgPiAzIHx8IHByaW9yaXR5IDwgMSB8fCBwcmlvcml0eS5sZW5ndGggPiAxKSB7XG4gICAgICAgIGFsZXJ0KFwiUHJpb3JpdHkgdmFsdWUgbXVzdCBiZSBiZXR3ZWVuIDEgYW5kIDNcIik7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUl0ZW0obmFtZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KSB7XG4gICAgaWYgKHZhbGlkYXRlSXRlbShuYW1lLnZhbHVlLCBkZXNjcmlwdGlvbi52YWx1ZSwgZHVlRGF0ZS52YWx1ZSwgcHJpb3JpdHkudmFsdWUpID09PSB0cnVlKSB7XG4gICAgICAgIFByb2plY3RMaXN0W3BhZ2UuaXRlbXNDb250YWluZXIuaWRdLnByb2plY3RJdGVtcy5wdXNoKG5ldyBUb0RvSXRlbShuYW1lLnZhbHVlLCBkZXNjcmlwdGlvbi52YWx1ZSwgZHVlRGF0ZS52YWx1ZSwgcHJpb3JpdHkudmFsdWUpKTtcbiAgICAgICAgbGlzdFRvZG9JdGVtKG5ldyBUb0RvSXRlbShuYW1lLnZhbHVlLCBkZXNjcmlwdGlvbi52YWx1ZSwgZHVlRGF0ZS52YWx1ZSwgcHJpb3JpdHkudmFsdWUpKTtcbiAgICB9XG59XG5cbmV4cG9ydCB7Y3JlYXRlSXRlbSwgdmFsaWRhdGVJdGVtfTsiLCJpbXBvcnQgcGFnZSBmcm9tIFwiLi9wYWdlXCI7XG5pbXBvcnQgeyBjaGFuZ2VQcmlvcml0eSB9IGZyb20gXCIuL3ByaW9yaXR5XCI7XG5cbmZ1bmN0aW9uIGxpc3RUb2RvSXRlbSh0b2RvKSB7XG4gICAgY29uc3QgbmV3SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgXG4gICAgY29uc3QgbmV3VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG5ld1RpdGxlLnRleHRDb250ZW50ID0gdG9kby5uYW1lO1xuICAgIG5ld1RpdGxlLmNsYXNzTGlzdC5hZGQoXCJpdGVtLXRleHRcIik7XG4gICAgY29uc3QgbmV3RGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbmV3RGVzYy50ZXh0Q29udGVudCA9IHRvZG8uZGVzY3JpcHRpb247XG4gICAgbmV3RGVzYy5jbGFzc0xpc3QuYWRkKFwiaXRlbS1kZXNjXCIpO1xuICAgIGNvbnN0IG5ld0REID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBuZXdERC50ZXh0Q29udGVudCA9IHRvZG8uZHVlRGF0ZTtcbiAgICBuZXdERC5jbGFzc0xpc3QuYWRkKFwiaXRlbS1kZFwiKTtcbiAgICBjb25zdCBuZXdQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbmV3UHJpb3JpdHkudGV4dENvbnRlbnQgPSB0b2RvLnByaW9yaXR5O1xuICAgIG5ld1ByaW9yaXR5LmNsYXNzTGlzdC5hZGQoXCJpdGVtLXByaW9yaXR5XCIpO1xuICAgIGNoYW5nZVByaW9yaXR5KG5ld1ByaW9yaXR5LCBuZXdJdGVtKTtcblxuICAgIG5ld0l0ZW0uYXBwZW5kQ2hpbGQobmV3VGl0bGUpO1xuICAgIG5ld0l0ZW0uYXBwZW5kQ2hpbGQobmV3RGVzYyk7XG4gICAgbmV3SXRlbS5hcHBlbmRDaGlsZChuZXdERCk7XG4gICAgbmV3SXRlbS5hcHBlbmRDaGlsZChuZXdQcmlvcml0eSk7XG5cbiAgICBwYWdlLml0ZW1zQ29udGFpbmVyLmFwcGVuZENoaWxkKG5ld0l0ZW0pO1xufVxuXG5leHBvcnQge2xpc3RUb2RvSXRlbX0iLCJpbXBvcnQgcGFnZSBmcm9tIFwiLi9wYWdlXCI7XG5pbXBvcnQgeyBjcmVhdGVJdGVtLCB2YWxpZGF0ZUl0ZW0gfSBmcm9tIFwiLi9jcmVhdGUtcmVtb3ZlLWl0ZW1cIjtcbmltcG9ydCB7IGxpc3RUb2RvSXRlbSB9IGZyb20gXCIuL2xpc3QtdG9kby1pdGVtc1wiO1xuaW1wb3J0IHsgVG9Eb0l0ZW0gfSBmcm9tIFwiLi90b2RvXCI7XG5cbmZ1bmN0aW9uIGNyZWF0ZUl0ZW1JbnB1dCgpIHtcbiAgICBjb25zdCBuZXdJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBuZXdJdGVtLmNsYXNzTGlzdC5hZGQoXCJuZXctaXRlbS1jcmVhdG9yXCIpO1xuXG4gICAgY29uc3QgbmV3TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBuZXdOYW1lLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJuYW1lXCIpO1xuICAgIG5ld05hbWUuc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIiwgXCJUYXNrIE5hbWVcIik7XG4gICAgbmV3TmFtZS5zZXRBdHRyaWJ1dGUoXCJtYXhsZW5ndGhcIiwgMjApO1xuICAgIGNvbnN0IG5ld0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIG5ld0Rlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJkZXNjcmlwdGlvblwiKTtcbiAgICBuZXdEZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCBcIkEgYnJpZWYgZGVzY3JpcHRpb24gb2YgeW91ciB0YXNrXCIpO1xuICAgIGNvbnN0IG5ld0R1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgbmV3RHVlRGF0ZS5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwiZHVlLWRhdGVcIik7XG4gICAgbmV3RHVlRGF0ZS5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCBcIlRoZSBkdWUgZGF0ZSBvZiB5b3VyIHRhc2tcIik7XG4gICAgY29uc3QgbmV3UHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgbmV3UHJpb3JpdHkuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcInByaW9yaXR5XCIpO1xuICAgIG5ld1ByaW9yaXR5LnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsIFwiUHJpb3JpdHkgKDEtMylcIik7XG5cbiAgICBjb25zdCBuZXdDb25maXJtSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgbmV3Q29uZmlybUl0ZW0uaW5uZXJIVE1MID0gXCI8c3ZnIHhtbG5zPVxcXCJodHRwOlxcL1xcL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIHdpZHRoPVxcXCI4MDBweFxcXCIgaGVpZ2h0PVxcXCI4MDBweFxcXCIgdmlld0JveD1cXFwiMCAwIDI0IDI0XFxcIiBmaWxsPVxcXCJub25lXFxcIj48cGF0aCBkPVxcXCJNNCAxMi42MTExTDguOTIzMDggMTcuNUwyMCA2LjVcXFwiIHN0cm9rZT1cXFwiIzAwMDAwMFxcXCIgc3Ryb2tlLXdpZHRoPVxcXCIyXFxcIiBzdHJva2UtbGluZWNhcD1cXFwicm91bmRcXFwiIHN0cm9rZS1saW5lam9pbj1cXFwicm91bmRcXFwiL1xcPjwvc3ZnPlwiO1xuICAgIG5ld0NvbmZpcm1JdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKT0+IHtcbiAgICAgICAgY3JlYXRlSXRlbShuZXdOYW1lLCBuZXdEZXNjcmlwdGlvbiwgbmV3RHVlRGF0ZSwgbmV3UHJpb3JpdHkpO1xuICAgICAgICBwYWdlLml0ZW1zQ29udGFpbmVyLnJlbW92ZUNoaWxkKG5ld0l0ZW0pXG4gICAgfSlcblxuICAgIG5ld0l0ZW0uYXBwZW5kQ2hpbGQobmV3TmFtZSk7XG4gICAgbmV3SXRlbS5hcHBlbmRDaGlsZChuZXdEZXNjcmlwdGlvbik7XG4gICAgbmV3SXRlbS5hcHBlbmRDaGlsZChuZXdEdWVEYXRlKTtcbiAgICBuZXdJdGVtLmFwcGVuZENoaWxkKG5ld1ByaW9yaXR5KTtcbiAgICBuZXdJdGVtLmFwcGVuZENoaWxkKG5ld0NvbmZpcm1JdGVtKTtcblxuICAgIHBhZ2UuaXRlbXNDb250YWluZXIuYXBwZW5kQ2hpbGQobmV3SXRlbSk7XG59XG5cbmV4cG9ydCB7Y3JlYXRlSXRlbUlucHV0fSIsIi8vQ3JlYXRlcyBhbmQvb3Igc2VsZWN0cyBET00gZWxlbWVudHMgZm9yIHVzZSBpbiBvdGhlciBtb2R1bGVzXG5mdW5jdGlvbiB3ZWJQYWdlKCkge1xuXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudFwiKTtcblxuICAgIGNvbnN0IGl0ZW1zQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pdGVtcy1jb250YWluZXJcIilcblxuICAgIC8vRm9yIGFkZC1wcm9qZWN0LXRvLXNpZGUtYmFyLmpzXG4gICAgY29uc3QgcHJvamVjdHNMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0cy1saXN0XCIpO1xuXG4gICAgLy9Gb3Igc2lkZS1iYXItYnV0dG9uLmpzXG4gICAgY29uc3Qgc2lkZUJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2lkZS1iYXJcIik7XG4gICAgY29uc3Qgc2lkZUJhckJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2lkZS1iYXItYnV0dG9uXCIpO1xuXG4gICAgLy9Gb3IgbmV3LWl0ZW0tYnV0dG9uLmpzXG4gICAgY29uc3QgbmV3SXRlbUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmV3LWl0ZW0tYnV0dG9uXCIpO1xuXG5cbiAgICBjb25zdCBuZXdQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uZXctcHJvamVjdC1idXR0b25cIik7XG5cbiAgICBsZXQgY3VycmVudFByb2plY3QgPSBcIlwiO1xuXG4gICAgbGV0IHByb2plY3RCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wcm9qZWN0LWJ1dHRvblwiKTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIHNpZGVCYXIsXG4gICAgICAgIHNpZGVCYXJCdXR0b24sXG4gICAgICAgIHByb2plY3RzTGlzdCxcbiAgICAgICAgbmV3SXRlbUJ1dHRvbixcbiAgICAgICAgbmV3UHJvamVjdEJ1dHRvbixcbiAgICAgICAgY29udGVudCxcbiAgICAgICAgaXRlbXNDb250YWluZXIsXG4gICAgICAgIGN1cnJlbnRQcm9qZWN0LFxuICAgICAgICBwcm9qZWN0QnV0dG9uc1xuICAgIH07XG59XG5cbmNvbnN0IHBhZ2UgPSBuZXcgd2ViUGFnZSgpO1xuXG5leHBvcnQgZGVmYXVsdCBwYWdlOyIsImZ1bmN0aW9uIGNoYW5nZVByaW9yaXR5KHByaW9yaXR5LHBhcmVudCl7XG4gICAgaWYgKHByaW9yaXR5LnRleHRDb250ZW50ID09IDMpIHtcbiAgICAgICAgcGFyZW50LmNsYXNzTGlzdC5hZGQoXCJoaWdoLXByaW9yaXR5XCIpO1xuICAgIH1cbiAgICBlbHNlIGlmIChwcmlvcml0eS50ZXh0Q29udGVudCA9PSAyKSB7XG4gICAgICAgIHBhcmVudC5jbGFzc0xpc3QuYWRkKFwibWVkLXByaW9yaXR5XCIpO1xuICAgIH1cbiAgICBlbHNlIGlmIChwcmlvcml0eS50ZXh0Q29udGVudCA9PSAxKSB7XG4gICAgICAgIHBhcmVudC5jbGFzc0xpc3QuYWRkKFwibG93LXByaW9yaXR5XCIpO1xuICAgIH1cbn1cblxuZXhwb3J0IHtjaGFuZ2VQcmlvcml0eX0iLCJpbXBvcnQgcGFnZSBmcm9tIFwiLi9wYWdlXCI7XG5pbXBvcnQge1Byb2plY3R9IGZyb20gXCIuL3Byb2plY3QuanNcIjtcbmltcG9ydCB7IFRvRG9JdGVtIH0gZnJvbSBcIi4vdG9kb1wiO1xuaW1wb3J0IHsgY2hhbmdlUHJvamVjdCB9IGZyb20gXCIuL2NoYW5nZS1wcm9qZWN0XCI7XG5cbmNvbnN0IFByb2plY3RMaXN0ID0ge307XG5cbmFkZFByb2plY3RUb0xpc3QobmV3IFByb2plY3QoXCJEZWZhdWx0XCIpLCBQcm9qZWN0TGlzdCk7XG5hZGRQcm9qZWN0VG9MaXN0KG5ldyBQcm9qZWN0KFwiVGVzdFwiKSwgUHJvamVjdExpc3QpO1xucGFnZS5pdGVtc0NvbnRhaW5lci5pZCA9IFwiRGVmYXVsdFwiO1xuXG4vL1Rlc3RpbmcgcGFnZSBmdW5jdGlvbmFsaXR5XG5Qcm9qZWN0TGlzdFtcIlRlc3RcIl0ucHJvamVjdEl0ZW1zLnB1c2gobmV3IFRvRG9JdGVtKFwiSG9tZXdvcmtcIixcIkNvbXBsZXRlIG1hdGggaG9tZXdvcmtcIixcIlN1bmRheVwiLFwiMlwiKSk7XG5Qcm9qZWN0TGlzdFtcIlRlc3RcIl0ucHJvamVjdEl0ZW1zLnB1c2gobmV3IFRvRG9JdGVtKFwiV29ya1wiLFwiQ29tcGxldGUgZml2ZSBhc3NpZ25tZW50cyBhdCB3b3JrXCIsXCJUaHVyc2RheVwiLFwiM1wiKSk7XG5Qcm9qZWN0TGlzdFtcIlRlc3RcIl0ucHJvamVjdEl0ZW1zLnB1c2gobmV3IFRvRG9JdGVtKFwiV29ya1wiLFwiRmlsbCBvdXQgdGltZXNoZWV0XCIsXCJBdWcgMjBcIixcIjFcIikpO1xuUHJvamVjdExpc3RbXCJUZXN0XCJdLnByb2plY3RJdGVtcy5wdXNoKG5ldyBUb0RvSXRlbShcIkNsZWFuIHJvb21cIixcIkNsZWFuIG15IHJvb21cIixcIldlZG5lc2RheVwiLFwiMVwiKSk7XG5cblxuY29uc29sZS5sb2coUHJvamVjdExpc3QpXG5cbmZ1bmN0aW9uIGFkZFByb2plY3RUb0xpc3QocHJvamVjdCwgcHJvamVjdEFycmF5KSB7XG4gICAgcHJvamVjdEFycmF5W3Byb2plY3QubmFtZV0gPSBwcm9qZWN0O1xuICAgIHBhZ2UucHJvamVjdHNMaXN0LmlubmVySFRNTCA9IFwiXCI7XG4gICAgZm9yIChjb25zdCBbbmFtZSwgcHJvamVjdF0gb2YgT2JqZWN0LmVudHJpZXMocHJvamVjdEFycmF5KSkge1xuICAgICAgICBjb25zdCBuZXdJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgbmV3SXRlbS5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1idXR0b25cIik7XG4gICAgICAgIG5ld0l0ZW0udGV4dENvbnRlbnQgPSBuYW1lO1xuICAgICAgICBuZXdJdGVtLm5hbWUgPSBuYW1lO1xuICAgICAgICBuZXdJdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKT0+IHtcbiAgICAgICAgICAgIGNoYW5nZVByb2plY3QobmFtZSk7XG4gICAgICAgIH0pXG4gICAgICAgIHBhZ2UucHJvamVjdHNMaXN0LmFwcGVuZENoaWxkKG5ld0l0ZW0pO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlUHJvamVjdFByb21wdCgpIHtcbiAgICBjb25zdCBuYW1lR2V0dGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBuYW1lR2V0dGVyLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LW5hbWUtZ2V0dGVyXCIpO1xuXG4gICAgY29uc3QgbmFtZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIG5hbWVJbnB1dC5jbGFzc0xpc3QuYWRkKFwibmFtZS1nZXR0ZXItaW5wdXRcIik7XG4gICAgbmFtZUlucHV0LnZhbHVlID0gXCJVbm5hbWVkIFByb2plY3RcIjtcblxuICAgIGNvbnN0IG5hbWVDb25maXJtQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBuYW1lQ29uZmlybUJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwibmFtZS1nZXR0ZXItYnV0dG9uXCIpO1xuICAgIG5hbWVDb25maXJtQnV0dG9uLmlubmVySFRNTCA9IFwiPHN2ZyB4bWxucz1cXFwiaHR0cDpcXC9cXC93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiB3aWR0aD1cXFwiODAwcHhcXFwiIGhlaWdodD1cXFwiODAwcHhcXFwiIHZpZXdCb3g9XFxcIjAgMCAyNCAyNFxcXCIgZmlsbD1cXFwibm9uZVxcXCI+PHBhdGggZD1cXFwiTTQgMTIuNjExMUw4LjkyMzA4IDE3LjVMMjAgNi41XFxcIiBzdHJva2U9XFxcIiMwMDAwMDBcXFwiIHN0cm9rZS13aWR0aD1cXFwiMlxcXCIgc3Ryb2tlLWxpbmVjYXA9XFxcInJvdW5kXFxcIiBzdHJva2UtbGluZWpvaW49XFxcInJvdW5kXFxcIi9cXD48L3N2Zz5cIjtcblxuICAgIG5hbWVHZXR0ZXIuYXBwZW5kQ2hpbGQobmFtZUlucHV0KTtcbiAgICBuYW1lR2V0dGVyLmFwcGVuZENoaWxkKG5hbWVDb25maXJtQnV0dG9uKTtcbiAgICBwYWdlLnByb2plY3RzTGlzdC5hcHBlbmRDaGlsZChuYW1lR2V0dGVyKTtcbiAgICBcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm5hbWUtZ2V0dGVyLWJ1dHRvblwiKS5mb3JFYWNoKCAocHJvamVjdEJ1dHRvbikgPT4ge1xuICAgICAgICBwcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYW1lLWdldHRlci1pbnB1dFwiKS52YWx1ZS5sZW5ndGggPCAxKSB7XG4gICAgICAgICAgICAgICAgYWRkUHJvamVjdFRvTGlzdChuZXcgUHJvamVjdChcIlVubmFtZWQgUHJvamVjdFwiKSwgUHJvamVjdExpc3QpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgYWRkUHJvamVjdFRvTGlzdChuZXcgUHJvamVjdChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hbWUtZ2V0dGVyLWlucHV0XCIpLnZhbHVlKSwgUHJvamVjdExpc3QpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH0pXG59XG5cbi8qIGZ1bmN0aW9uIHVwZGF0ZVByb2plY3RCdXR0b25zKCkge1xuICAgIHBhZ2UucHJvamVjdEJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnByb2plY3QtYnV0dG9uXCIpO1xuICAgIHBhZ2UucHJvamVjdEJ1dHRvbnMuZm9yRWFjaCggKGl0ZW0pID0+IHtcbiAgICAgICAgaXRlbS5vbmNsaWNrID0gXG4gICAgfSlcbn1cbiAqL1xuXG5cbmV4cG9ydCB7YWRkUHJvamVjdFRvTGlzdCwgY3JlYXRlUHJvamVjdFByb21wdCwgUHJvamVjdExpc3R9IiwiY2xhc3MgUHJvamVjdCB7XG4gICAgY29uc3RydWN0b3IobmFtZSkge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLnByb2plY3RJdGVtcyA9IFtdO1xuICAgIH1cbiAgICBhZGRJdGVtKHRvRG9JdGVtKSB7XG4gICAgICAgIHRoaXMucHJvamVjdEl0ZW1zLnB1c2godG9Eb0l0ZW0pO1xuICAgIH1cbiAgICByZW1vdmVJdGVtKHRvRG9JdGVtKSB7XG4gICAgICAgIHRoaXMucHJvamVjdEl0ZW1zLnNwbGljZSh0aGlzLnByb2plY3RJdGVtcy5pbmRleE9mKHRvRG9JdGVtKSwgMSk7XG4gICAgfVxufVxuXG5leHBvcnQge1Byb2plY3R9OyIsImltcG9ydCBwYWdlIGZyb20gXCIuL3BhZ2VcIlxuXG5mdW5jdGlvbiBzaWRlQmFyQnV0dG9uKCkge1xuICAgICAgICBwYWdlLnNpZGVCYXIuY2xhc3NMaXN0LnRvZ2dsZShcInNpZGUtYmFyLWhpZGRlblwiKTtcbiAgICAgICAgcGFnZS5zaWRlQmFyLmNsYXNzTGlzdC50b2dnbGUoXCJzaWRlLWJhci1zaG93blwiKTtcbn1cblxuZXhwb3J0IHtzaWRlQmFyQnV0dG9ufVxuXG4vL0NyZWF0ZXMgZnVuY3Rpb25hbGl0eSBmb3IgdGhlIHNpZGUgYmFyIGhhbWJ1cmdlciBidXR0b24iLCJjbGFzcyBUb0RvSXRlbSB7XG4gICAgY29uc3RydWN0b3IobmFtZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICAgICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgIH1cbn1cblxuZXhwb3J0IHtUb0RvSXRlbX0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgcGFnZSBmcm9tIFwiLi9wYWdlXCJcbmltcG9ydCBcIi4vc3R5bGVzL3N0eWxlLmNzc1wiXG5cbmltcG9ydCB7IHNpZGVCYXJCdXR0b24gfSBmcm9tIFwiLi9zaWRlLWJhci1idXR0b25cIlxuaW1wb3J0IHsgUHJvamVjdCB9IGZyb20gXCIuL3Byb2plY3QuanNcIlxuaW1wb3J0IHsgYWRkUHJvamVjdFRvTGlzdCwgUHJvamVjdExpc3QsIGNyZWF0ZVByb2plY3RQcm9tcHQgfSBmcm9tIFwiLi9wcm9qZWN0LWxpc3RcIlxuaW1wb3J0IHsgY3JlYXRlSXRlbUlucHV0IH0gZnJvbSBcIi4vbmV3LWl0ZW0tYnV0dG9uXCJcblxuY3JlYXRlSXRlbUlucHV0KCk7XG5cbnBhZ2Uuc2lkZUJhckJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIHNpZGVCYXJCdXR0b24oKTtcbn0pXG5cbnBhZ2UubmV3SXRlbUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCk9PiB7XG4gICAgaWYgKCEocGFnZS5pdGVtc0NvbnRhaW5lci5jb250YWlucyhkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5ldy1pdGVtLWNyZWF0b3JcIikpKSkge1xuICAgICAgICBjcmVhdGVJdGVtSW5wdXQoKTtcbiAgICB9XG59KVxuXG5wYWdlLm5ld1Byb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBpZiAoIShwYWdlLnByb2plY3RzTGlzdC5jb250YWlucyhkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtbmFtZS1nZXR0ZXJcIikpKSkge1xuICAgICAgICBjcmVhdGVQcm9qZWN0UHJvbXB0KCk7XG4gICAgfVxufSlcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==