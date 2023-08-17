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
.side-bar-hidden .side-bar-heading,
.side-bar-hidden .delete-project{
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

.new-item-creator button:hover,
.delete-button:hover,
.delete-project:hover {
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

.high-priority, .med-priority, .low-priority {
  display: flex;
}

.delete-button,
.delete-button img {
  height: 30px;
  width: 30px;
}

.delete-button img {
  filter: invert(100%) sepia(0%) saturate(30%) hue-rotate(229deg) brightness(112%) contrast(78%);
}

.delete-button {
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: 0;
  margin-left: auto;
  border-radius: 20px;
  padding: 2px;
}

.delete-project {
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Oswald", sans-serif;
  color:var(--white-color);
  background-color: transparent;
  border: 0;
  border-radius: 20px;
  font-size: 1.2rem;
  padding: 20px;
  margin-bottom: 10px;
  width: 80%;
  justify-self: center;
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
  `, "",{"version":3,"sources":["webpack://./src/styles/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Oswald&display=swap');\n\n:root {\n    --dark-color: #233142;\n    --gray-color: #455d7a;\n    --red-color: #f95959;\n    --white-color: #e3e3e3;\n    --item-color: #afafaf;\n    height: 100vh;\n    width: 100vh;\n    overflow-x: hidden;\n}\n\n* {\n    padding: 0;\n    margin: 0;\n}\n\n.main-body-container {\n    width: 100vw;\n    height: 100vh;\n    display: flex;\n}\n\n.side-bar {\n    display: grid;\n    height: 100vh;\n    grid-template-rows: 60px 1fr;\n    position: relative;\n    background-color: var(--gray-color);\n}\n\n.projects-list {\n  grid-row: 2;\n  display: flex;\n  flex-direction: column;\n  padding-top: 15px;\n  gap: 15px;\n}\n\n.project-button {\n  height: 30px;\n  font-size: 20px;\n  font-family: \"Oswald\", sans-serif;\n  color: var(--white-color);\n  background-color: transparent;\n  appearance: none;\n  border: 0;\n}\n\n.project-button:hover {\n  background-color: #384b63;\n  cursor: pointer;\n}\n\n.side-bar-button {\n    position: absolute;\n    height: 50px;\n    left: 4px;\n    top: 4px;\n    border-radius: 100px;\n}\n\n.side-bar-button:hover {\n    background-color: #ffffff2f;\n}\n\n.new-project-button {\n  grid-row: 1 / 2;\n  display: flex;\n  justify-self: flex-end;\n  appearance: none;\n  background-color: transparent;\n  grid-column: 1 / 2;\n  border: 0;\n  width: 50px;\n  align-self: center;\n  margin-right: 4px;\n  border-radius: 100px;\n  filter: invert(100%) sepia(0%) saturate(30%) hue-rotate(229deg) brightness(112%) contrast(78%);\n}\n\n.new-project-button:hover {\n  background-color: #ffffff2f;\n  cursor: pointer;\n  \n}\n\n.side-bar-shown {\n  transition: width 300ms ease-out;\n  width: 20%;\n  grid-template-columns: 100%;\n}\n\n.side-bar-hidden {\n  transition: width 300ms ease-out;\n  width: 0%;\n  grid-template-columns: 0%;\n}\n\n.side-bar-hidden .projects-list,\n.side-bar-hidden .side-bar-heading,\n.side-bar-hidden .delete-project{\n  display: none;\n}\n\n.right-side {\n    flex-grow: 1;\n    height: 100vh;\n    display: flex;\n    flex-direction: column;\n}\n\n.top-bar {\n    height: 60px;\n    flex-grow: 0;\n    background-color: var(--red-color);\n    display: flex;\n    align-items: center;\n    justify-content: flex-end;\n    padding-right: 20px;\n}\n\n.content {\n    background-color: var(--white-color);\n    flex: 1;\n    position: relative;\n    display: grid;\n    grid-template-columns: 54px auto;\n    grid-template-rows: auto;\n}\n\n.heading {\n    font-family: \"Oswald\", sans-serif;\n    color: var(--white-color);\n    font-size: 2rem;\n}\n\n.new-item-button {\n  appearance: none;\n  border: 0;\n  border-radius: 100px;\n  background-color: transparent;\n  left: 4px;\n  top: 4px;\n  position: absolute;\n}\n\n.new-item-button svg:hover {\n  cursor: pointer;\n\n}\n.new-item-button:hover {\n  background-color: #c8c8c8;\n}\n\n.new-item-button svg {\n  width: 50px;\n  filter: invert(35%) sepia(15%) saturate(1092%) hue-rotate(173deg) brightness(93%) contrast(92%);\n}\n\n.project-name-getter {\n  display: flex;\n  height: 30px;\n  align-items: center;\n  justify-content: center;\n  gap: 2px;\n}\n\n.project-name-getter input {\n  background-color: #384b63;\n  appearance: none;\n  border: 0;\n  height: 30px;\n  color: var(--white-color);\n  text-align: center;\n  font-family: \"Oswald\", sans-serif;\n  font-size: 20px;\n  border-radius: 10px;\n}\n\n.project-name-getter button {\n  appearance: none;\n  background-color: #384b63;\n  border: 0;\n  height: 30px;\n  width: 30px;\n  border-radius: 10px;\n}\n\n.project-name-getter button:hover {\n  cursor: pointer;\n}\n\n.project-name-getter button svg {\n  filter: invert(100%) sepia(0%) saturate(30%) hue-rotate(229deg) brightness(112%) contrast(78%);\n  width: 30px;\n  height: 30px;\n}\n\n.side-bar-heading {\n  grid-row: 1 / 2;\n  grid-column: 1 / 2;\n  font-family: \"Oswald\", sans-serif;\n  color: var(--white-color);\n  font-size: 22px;\n  align-self: center;\n  justify-self: center;\n}\n\n.items-container {\n  grid-column: 2/3;\n  padding: 10px;\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: repeat(auto-fit, 50px);\n  gap: 20px\n}\n\n.items-container div {\n  background-color: var(--item-color);\n  border-radius: 10px;\n  display: flex;\n  padding: 2px;\n  align-items: center;\n  justify-content: flex-start;\n  gap: 4%;\n  padding-left: 12px;\n  padding-right: 12px;\n}\n\n.items-container input {\n  appearance: none;\n  background-color: var(--white-color);\n  color: var(--red-color);\n  font-family: \"Oswald\", sans-serif;\n  width: min(230px,10%);\n  height: 30px;\n  border: 0;\n  border-radius: 15px;\n  padding-left: 5px;\n}\n\n.items-container input[name=\"description\"] {\n  width: calc(min(230px,10%)*3);\n}\n\n.new-item-creator button,\n.new-item-creator button svg{\n  height: 30px;\n  width: 30px;\n}\n\n.new-item-creator svg {\n  filter: invert(100%) sepia(0%) saturate(30%) hue-rotate(229deg) brightness(112%) contrast(78%);\n}\n\n.new-item-creator button{\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: transparent;\n  border: 0;\n  margin-left: auto;\n  border-radius: 20px;\n  padding: 2px;\n}\n\n.new-item-creator button:hover,\n.delete-button:hover,\n.delete-project:hover {\n  background-color: #1d1d1d2f;\n  cursor: pointer;\n}\n\n.item-text,\n.item-desc,\n.item-dd,\n.item-priority {\n  font-family: \"Oswald\", sans-serif;\n  font-size: 15px;\n  height: 30px;\n  color: var(--dark-color)\n}\n\n.item-text,\n.item-dd {\n  width: 10%\n}\n\n.item-desc {\n  width: 20%;\n}\n\n.high-priority {\n  border-left: 5px #c40000 solid;\n}\n\n.med-priority {\n  border-left: 5px #c49000 solid;\n}\n\n.low-priority {\n  border-left: 5px #27c400 solid;\n}\n\n.high-priority, .med-priority, .low-priority {\n  display: flex;\n}\n\n.delete-button,\n.delete-button img {\n  height: 30px;\n  width: 30px;\n}\n\n.delete-button img {\n  filter: invert(100%) sepia(0%) saturate(30%) hue-rotate(229deg) brightness(112%) contrast(78%);\n}\n\n.delete-button {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: transparent;\n  border: 0;\n  margin-left: auto;\n  border-radius: 20px;\n  padding: 2px;\n}\n\n.delete-project {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-family: \"Oswald\", sans-serif;\n  color:var(--white-color);\n  background-color: transparent;\n  border: 0;\n  border-radius: 20px;\n  font-size: 1.2rem;\n  padding: 20px;\n  margin-bottom: 10px;\n  width: 80%;\n  justify-self: center;\n}\n\n\n\n\n/* @media (max-width: 700px) {\n    .right-side {\n        flex-basis: 75%;\n    }\n    .side-bar {\n        flex-basis: 25%;\n    }\n} */\n\n/* Hamburger menu */\n.hamburger-button {\n    background-color: transparent;\n    border: none;\n    width: 50px;\n    cursor: pointer;\n    display: flex;\n    padding: 0;\n    filter: invert(100%) sepia(0%) saturate(30%) hue-rotate(229deg) brightness(112%) contrast(78%);\n  }\n  .line {\n    fill: none;\n    stroke: black;\n    stroke-width: 6;\n    transition: stroke-dasharray 600ms cubic-bezier(0.4, 0, 0.2, 1),\n      stroke-dashoffset 600ms cubic-bezier(0.4, 0, 0.2, 1);\n  }\n  .line1 {\n    stroke-dasharray: 60 207;\n    stroke-width: 6;\n  }\n  .line2 {\n    stroke-dasharray: 60 60;\n    stroke-width: 6;\n  }\n  .line3 {\n    stroke-dasharray: 60 207;\n    stroke-width: 6;\n  }\n  .opened .line1 {\n    stroke-dasharray: 90 207;\n    stroke-dashoffset: -134;\n    stroke-width: 6;\n  }\n  .opened .line2 {\n    stroke-dasharray: 1 60;\n    stroke-dashoffset: -30;\n    stroke-width: 6;\n  }\n  .opened .line3 {\n    stroke-dasharray: 90 207;\n    stroke-dashoffset: -134;\n    stroke-width: 6;\n  }\n  "],"sourceRoot":""}]);
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
/* harmony import */ var _new_item_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./new-item-button */ "./src/new-item-button.js");





function changeProject(button){
    _page__WEBPACK_IMPORTED_MODULE_0__["default"].itemsContainer.innerHTML = "";
    _page__WEBPACK_IMPORTED_MODULE_0__["default"].itemsContainer.id = button;
    _project_list_js__WEBPACK_IMPORTED_MODULE_1__.ProjectList[button].projectItems.forEach( ( item ) => {
        (0,_list_todo_items__WEBPACK_IMPORTED_MODULE_2__.listTodoItem)(item);
    })
    if (_project_list_js__WEBPACK_IMPORTED_MODULE_1__.ProjectList[button].projectItems.length === 0) {
        (0,_new_item_button__WEBPACK_IMPORTED_MODULE_3__.createItemInput)();
    }
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
/* harmony import */ var _local_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./local-storage */ "./src/local-storage.js");






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
        alert("Due date must be at most 50 characters");
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
        _project_list_js__WEBPACK_IMPORTED_MODULE_2__.ProjectList[_page__WEBPACK_IMPORTED_MODULE_0__["default"].itemsContainer.id].addItem(new _todo_js__WEBPACK_IMPORTED_MODULE_1__.ToDoItem(name.value, description.value, dueDate.value, priority.value));
        (0,_list_todo_items__WEBPACK_IMPORTED_MODULE_3__.listTodoItem)(new _todo_js__WEBPACK_IMPORTED_MODULE_1__.ToDoItem(name.value, description.value, dueDate.value, priority.value));
        (0,_local_storage__WEBPACK_IMPORTED_MODULE_4__.addProjectsToLocalStorage)();
    }
}



/***/ }),

/***/ "./src/delete-project.js":
/*!*******************************!*\
  !*** ./src/delete-project.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   deleteProject: () => (/* binding */ deleteProject)
/* harmony export */ });
/* harmony import */ var _change_project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./change-project */ "./src/change-project.js");
/* harmony import */ var _local_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./local-storage */ "./src/local-storage.js");
/* harmony import */ var _page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page */ "./src/page.js");
/* harmony import */ var _project_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./project-list */ "./src/project-list.js");





function deleteProject() {
    if (confirm(`Are you sure you want to delete the "${_page__WEBPACK_IMPORTED_MODULE_2__["default"].itemsContainer.id}" project?`)) {
        _project_list__WEBPACK_IMPORTED_MODULE_3__.ProjectArray.splice(_project_list__WEBPACK_IMPORTED_MODULE_3__.ProjectArray.indexOf(_page__WEBPACK_IMPORTED_MODULE_2__["default"].itemsContainer.id),1);
        console.log(_project_list__WEBPACK_IMPORTED_MODULE_3__.ProjectArray.length);
        _page__WEBPACK_IMPORTED_MODULE_2__["default"].projectsList.removeChild(document.querySelector(`button[name="${_page__WEBPACK_IMPORTED_MODULE_2__["default"].itemsContainer.id}"]`))
        delete _project_list__WEBPACK_IMPORTED_MODULE_3__.ProjectList[_page__WEBPACK_IMPORTED_MODULE_2__["default"].itemsContainer.id];
        if (_project_list__WEBPACK_IMPORTED_MODULE_3__.ProjectArray.length == 0) {
            _page__WEBPACK_IMPORTED_MODULE_2__["default"].itemsContainer.id = "";
            _page__WEBPACK_IMPORTED_MODULE_2__["default"].itemsContainer.innerHTML = "";
        }
        else {
            (0,_change_project__WEBPACK_IMPORTED_MODULE_0__.changeProject)(_project_list__WEBPACK_IMPORTED_MODULE_3__.ProjectArray[0].name)
        }
        (0,_local_storage__WEBPACK_IMPORTED_MODULE_1__.addProjectsToLocalStorage)();
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
/* harmony import */ var _project_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project-list */ "./src/project-list.js");
/* harmony import */ var _assets_x_icon_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/x-icon.png */ "./src/assets/x-icon.png");
/* harmony import */ var _change_project__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./change-project */ "./src/change-project.js");
/* harmony import */ var _local_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./local-storage */ "./src/local-storage.js");







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

    const deleteButton = document.createElement("button");
    const xImg = new Image();
    xImg.src = _assets_x_icon_png__WEBPACK_IMPORTED_MODULE_3__;
    deleteButton.appendChild(xImg);
    deleteButton.classList.add("delete-button");

    deleteButton.addEventListener("click", ()=> {
        _project_list__WEBPACK_IMPORTED_MODULE_2__.ProjectList[_page__WEBPACK_IMPORTED_MODULE_0__["default"].itemsContainer.id].removeItem(todo);
        (0,_local_storage__WEBPACK_IMPORTED_MODULE_5__.addProjectsToLocalStorage)();
        (0,_change_project__WEBPACK_IMPORTED_MODULE_4__.changeProject)(_page__WEBPACK_IMPORTED_MODULE_0__["default"].itemsContainer.id);
    })

    newItem.appendChild(newTitle);
    newItem.appendChild(newDesc);
    newItem.appendChild(newDD);
    newItem.appendChild(newPriority);
    newItem.appendChild(deleteButton);

    _page__WEBPACK_IMPORTED_MODULE_0__["default"].itemsContainer.appendChild(newItem);
}



/***/ }),

/***/ "./src/local-storage.js":
/*!******************************!*\
  !*** ./src/local-storage.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addProjectsToLocalStorage: () => (/* binding */ addProjectsToLocalStorage),
/* harmony export */   getProjectsFromLocalStorage: () => (/* binding */ getProjectsFromLocalStorage)
/* harmony export */ });
/* harmony import */ var _project_list_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project-list.js */ "./src/project-list.js");
/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project.js */ "./src/project.js");
/* harmony import */ var _todo_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todo.js */ "./src/todo.js");




function addProjectsToLocalStorage() {
    localStorage.clear()
    _project_list_js__WEBPACK_IMPORTED_MODULE_0__.ProjectArray.forEach((project) =>  {
        let resultArray = [];
        /* resultArray.push(project.name); */
        project.projectItems.forEach((item) => {
            const itemArray = [item.name, item.description, item.dueDate, item.priority];
            resultArray.push(JSON.stringify(itemArray));
        })
        localStorage.setItem(project.name, JSON.stringify(resultArray));
    })
}

function getProjectsFromLocalStorage() {
    for (let i = 0; i < localStorage.length; i++) {
        (0,_project_list_js__WEBPACK_IMPORTED_MODULE_0__.addProjectToList)(new _project_js__WEBPACK_IMPORTED_MODULE_1__.Project(localStorage.key(i)));
        const itemsArray = JSON.parse(localStorage.getItem(localStorage.key(i)));
        itemsArray.forEach((item) => {
            const itemParsed = JSON.parse(item);
            _project_list_js__WEBPACK_IMPORTED_MODULE_0__.ProjectList[localStorage.key(i)].addItem(new _todo_js__WEBPACK_IMPORTED_MODULE_2__.ToDoItem(itemParsed[0], itemParsed[1], itemParsed[2], itemParsed[3]));
        })
    }
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
    newName.setAttribute("maxlength", 50);
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
    const deleteProjectButton = document.querySelector(".delete-project");

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
        projectButtons,
        deleteProjectButton
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
/* harmony export */   ProjectArray: () => (/* binding */ ProjectArray),
/* harmony export */   ProjectList: () => (/* binding */ ProjectList),
/* harmony export */   addProjectToList: () => (/* binding */ addProjectToList),
/* harmony export */   createProjectPrompt: () => (/* binding */ createProjectPrompt)
/* harmony export */ });
/* harmony import */ var _page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page */ "./src/page.js");
/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project.js */ "./src/project.js");
/* harmony import */ var _change_project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./change-project */ "./src/change-project.js");
/* harmony import */ var _local_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./local-storage */ "./src/local-storage.js");
/* harmony import */ var _new_item_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./new-item-button */ "./src/new-item-button.js");






let ProjectList = {};
let ProjectArray = [];

(0,_local_storage__WEBPACK_IMPORTED_MODULE_3__.getProjectsFromLocalStorage)();

if (ProjectArray.length < 1) {
    addProjectToList(new _project_js__WEBPACK_IMPORTED_MODULE_1__.Project("Default"), ProjectList);
    _page__WEBPACK_IMPORTED_MODULE_0__["default"].itemsContainer.id = "Default";
    (0,_change_project__WEBPACK_IMPORTED_MODULE_2__.changeProject)("Default");
}

function addProjectToList(project) {
    ProjectList[project.name] = project;
    ProjectArray.push(project)


    _page__WEBPACK_IMPORTED_MODULE_0__["default"].projectsList.innerHTML = "";
    for (const [name] of Object.entries(ProjectList)) {
        const newItem = document.createElement("button");
        newItem.classList.add("project-button");
        newItem.textContent = name;
        newItem.name = name;
        newItem.addEventListener("click", ()=> {
            (0,_change_project__WEBPACK_IMPORTED_MODULE_2__.changeProject)(name);
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



/***/ }),

/***/ "./src/assets/to-do-favicon.svg":
/*!**************************************!*\
  !*** ./src/assets/to-do-favicon.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "cba3cbbf131c21afae64.svg";

/***/ }),

/***/ "./src/assets/x-icon.png":
/*!*******************************!*\
  !*** ./src/assets/x-icon.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1d3e61ab3a74fe2c8860.png";

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
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
/* harmony import */ var _project_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./project-list */ "./src/project-list.js");
/* harmony import */ var _new_item_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./new-item-button */ "./src/new-item-button.js");
/* harmony import */ var _delete_project__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./delete-project */ "./src/delete-project.js");
/* harmony import */ var _assets_to_do_favicon_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/to-do-favicon.svg */ "./src/assets/to-do-favicon.svg");











const favicon = document.createElement("link");
favicon.setAttribute("href", _assets_to_do_favicon_svg__WEBPACK_IMPORTED_MODULE_6__);
favicon.setAttribute("rel", "shortcut icon");
document.getElementsByTagName("head")[0].appendChild(favicon);

_page__WEBPACK_IMPORTED_MODULE_0__["default"].deleteProjectButton.addEventListener("click", () => {
    (0,_delete_project__WEBPACK_IMPORTED_MODULE_5__.deleteProject)();
})

_page__WEBPACK_IMPORTED_MODULE_0__["default"].sideBarButton.addEventListener("click", () => {
    ;(0,_side_bar_button__WEBPACK_IMPORTED_MODULE_2__.sideBarButton)();
})

_page__WEBPACK_IMPORTED_MODULE_0__["default"].newItemButton.addEventListener("click", ()=> {
    if (!(_page__WEBPACK_IMPORTED_MODULE_0__["default"].itemsContainer.contains(document.querySelector(".new-item-creator")))) {
        (0,_new_item_button__WEBPACK_IMPORTED_MODULE_4__.createItemInput)();
    }
})

_page__WEBPACK_IMPORTED_MODULE_0__["default"].newProjectButton.addEventListener("click", () => {
    if (!(_page__WEBPACK_IMPORTED_MODULE_0__["default"].projectsList.contains(document.querySelector(".project-name-getter")))) {
        (0,_project_list__WEBPACK_IMPORTED_MODULE_3__.createProjectPrompt)();
    }
})

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUM2RztBQUNqQjtBQUM1Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLG9IQUFvSDtBQUNwSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsdUZBQXVGLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxPQUFPLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxNQUFNLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxNQUFNLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLE1BQU0sT0FBTyxZQUFZLFdBQVcsT0FBTyxRQUFRLFlBQVksV0FBVyxVQUFVLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxNQUFNLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLFVBQVUsV0FBVyxNQUFNLFlBQVksTUFBTSxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxLQUFLLE9BQU8sTUFBTSxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFh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Ozs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0F5QjtBQUNFOztBQUVzQjtBQUNHO0FBQ0Q7QUFDSDs7QUFFSTs7O0FBR3BEO0FBQ0EsNkJBQTZCLHNEQUFXO0FBQ3hDO0FBQ0E7O0FBRUEsNkNBQUk7QUFDSixJQUFJLDhEQUFhO0FBQ2pCLENBQUM7O0FBRUQsNkNBQUk7QUFDSixJQUFJLGdFQUFhO0FBQ2pCLENBQUM7O0FBRUQsNkNBQUk7QUFDSixVQUFVLDZDQUFJO0FBQ2QsUUFBUSxpRUFBZTtBQUN2QjtBQUNBLENBQUM7O0FBRUQsNkNBQUk7QUFDSixVQUFVLDZDQUFJO0FBQ2QsUUFBUSxrRUFBbUI7QUFDM0I7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3N0eWxlcy9zdHlsZS5jc3M/ZmY5NCIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvY2hhbmdlLXByb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9jcmVhdGUtcmVtb3ZlLWl0ZW0uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9kZWxldGUtcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2xpc3QtdG9kby1pdGVtcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2xvY2FsLXN0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9uZXctaXRlbS1idXR0b24uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9wYWdlLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvcHJpb3JpdHkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9wcm9qZWN0LWxpc3QuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9wcm9qZWN0LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc2lkZS1iYXItYnV0dG9uLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvdG9kby5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9T3N3YWxkJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgOnJvb3Qge1xuICAgIC0tZGFyay1jb2xvcjogIzIzMzE0MjtcbiAgICAtLWdyYXktY29sb3I6ICM0NTVkN2E7XG4gICAgLS1yZWQtY29sb3I6ICNmOTU5NTk7XG4gICAgLS13aGl0ZS1jb2xvcjogI2UzZTNlMztcbiAgICAtLWl0ZW0tY29sb3I6ICNhZmFmYWY7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICB3aWR0aDogMTAwdmg7XG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xufVxuXG4qIHtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbjogMDtcbn1cblxuLm1haW4tYm9keS1jb250YWluZXIge1xuICAgIHdpZHRoOiAxMDB2dztcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5zaWRlLWJhciB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogNjBweCAxZnI7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyYXktY29sb3IpO1xufVxuXG4ucHJvamVjdHMtbGlzdCB7XG4gIGdyaWQtcm93OiAyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwYWRkaW5nLXRvcDogMTVweDtcbiAgZ2FwOiAxNXB4O1xufVxuXG4ucHJvamVjdC1idXR0b24ge1xuICBoZWlnaHQ6IDMwcHg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC1mYW1pbHk6IFwiT3N3YWxkXCIsIHNhbnMtc2VyaWY7XG4gIGNvbG9yOiB2YXIoLS13aGl0ZS1jb2xvcik7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBhcHBlYXJhbmNlOiBub25lO1xuICBib3JkZXI6IDA7XG59XG5cbi5wcm9qZWN0LWJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzODRiNjM7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnNpZGUtYmFyLWJ1dHRvbiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGhlaWdodDogNTBweDtcbiAgICBsZWZ0OiA0cHg7XG4gICAgdG9wOiA0cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG59XG5cbi5zaWRlLWJhci1idXR0b246aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmYyZjtcbn1cblxuLm5ldy1wcm9qZWN0LWJ1dHRvbiB7XG4gIGdyaWQtcm93OiAxIC8gMjtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1zZWxmOiBmbGV4LWVuZDtcbiAgYXBwZWFyYW5jZTogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGdyaWQtY29sdW1uOiAxIC8gMjtcbiAgYm9yZGVyOiAwO1xuICB3aWR0aDogNTBweDtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBtYXJnaW4tcmlnaHQ6IDRweDtcbiAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG4gIGZpbHRlcjogaW52ZXJ0KDEwMCUpIHNlcGlhKDAlKSBzYXR1cmF0ZSgzMCUpIGh1ZS1yb3RhdGUoMjI5ZGVnKSBicmlnaHRuZXNzKDExMiUpIGNvbnRyYXN0KDc4JSk7XG59XG5cbi5uZXctcHJvamVjdC1idXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmMmY7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgXG59XG5cbi5zaWRlLWJhci1zaG93biB7XG4gIHRyYW5zaXRpb246IHdpZHRoIDMwMG1zIGVhc2Utb3V0O1xuICB3aWR0aDogMjAlO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEwMCU7XG59XG5cbi5zaWRlLWJhci1oaWRkZW4ge1xuICB0cmFuc2l0aW9uOiB3aWR0aCAzMDBtcyBlYXNlLW91dDtcbiAgd2lkdGg6IDAlO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDAlO1xufVxuXG4uc2lkZS1iYXItaGlkZGVuIC5wcm9qZWN0cy1saXN0LFxuLnNpZGUtYmFyLWhpZGRlbiAuc2lkZS1iYXItaGVhZGluZyxcbi5zaWRlLWJhci1oaWRkZW4gLmRlbGV0ZS1wcm9qZWN0e1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4ucmlnaHQtc2lkZSB7XG4gICAgZmxleC1ncm93OiAxO1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4udG9wLWJhciB7XG4gICAgaGVpZ2h0OiA2MHB4O1xuICAgIGZsZXgtZ3JvdzogMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1yZWQtY29sb3IpO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG59XG5cbi5jb250ZW50IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZS1jb2xvcik7XG4gICAgZmxleDogMTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDU0cHggYXV0bztcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG87XG59XG5cbi5oZWFkaW5nIHtcbiAgICBmb250LWZhbWlseTogXCJPc3dhbGRcIiwgc2Fucy1zZXJpZjtcbiAgICBjb2xvcjogdmFyKC0td2hpdGUtY29sb3IpO1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbn1cblxuLm5ldy1pdGVtLWJ1dHRvbiB7XG4gIGFwcGVhcmFuY2U6IG5vbmU7XG4gIGJvcmRlcjogMDtcbiAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBsZWZ0OiA0cHg7XG4gIHRvcDogNHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbi5uZXctaXRlbS1idXR0b24gc3ZnOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuXG59XG4ubmV3LWl0ZW0tYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2M4YzhjODtcbn1cblxuLm5ldy1pdGVtLWJ1dHRvbiBzdmcge1xuICB3aWR0aDogNTBweDtcbiAgZmlsdGVyOiBpbnZlcnQoMzUlKSBzZXBpYSgxNSUpIHNhdHVyYXRlKDEwOTIlKSBodWUtcm90YXRlKDE3M2RlZykgYnJpZ2h0bmVzcyg5MyUpIGNvbnRyYXN0KDkyJSk7XG59XG5cbi5wcm9qZWN0LW5hbWUtZ2V0dGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZ2FwOiAycHg7XG59XG5cbi5wcm9qZWN0LW5hbWUtZ2V0dGVyIGlucHV0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM4NGI2MztcbiAgYXBwZWFyYW5jZTogbm9uZTtcbiAgYm9yZGVyOiAwO1xuICBoZWlnaHQ6IDMwcHg7XG4gIGNvbG9yOiB2YXIoLS13aGl0ZS1jb2xvcik7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1mYW1pbHk6IFwiT3N3YWxkXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLnByb2plY3QtbmFtZS1nZXR0ZXIgYnV0dG9uIHtcbiAgYXBwZWFyYW5jZTogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM4NGI2MztcbiAgYm9yZGVyOiAwO1xuICBoZWlnaHQ6IDMwcHg7XG4gIHdpZHRoOiAzMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG4ucHJvamVjdC1uYW1lLWdldHRlciBidXR0b246aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5wcm9qZWN0LW5hbWUtZ2V0dGVyIGJ1dHRvbiBzdmcge1xuICBmaWx0ZXI6IGludmVydCgxMDAlKSBzZXBpYSgwJSkgc2F0dXJhdGUoMzAlKSBodWUtcm90YXRlKDIyOWRlZykgYnJpZ2h0bmVzcygxMTIlKSBjb250cmFzdCg3OCUpO1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xufVxuXG4uc2lkZS1iYXItaGVhZGluZyB7XG4gIGdyaWQtcm93OiAxIC8gMjtcbiAgZ3JpZC1jb2x1bW46IDEgLyAyO1xuICBmb250LWZhbWlseTogXCJPc3dhbGRcIiwgc2Fucy1zZXJpZjtcbiAgY29sb3I6IHZhcigtLXdoaXRlLWNvbG9yKTtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xufVxuXG4uaXRlbXMtY29udGFpbmVyIHtcbiAgZ3JpZC1jb2x1bW46IDIvMztcbiAgcGFkZGluZzogMTBweDtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KGF1dG8tZml0LCA1MHB4KTtcbiAgZ2FwOiAyMHB4XG59XG5cbi5pdGVtcy1jb250YWluZXIgZGl2IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taXRlbS1jb2xvcik7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBhZGRpbmc6IDJweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBnYXA6IDQlO1xuICBwYWRkaW5nLWxlZnQ6IDEycHg7XG4gIHBhZGRpbmctcmlnaHQ6IDEycHg7XG59XG5cbi5pdGVtcy1jb250YWluZXIgaW5wdXQge1xuICBhcHBlYXJhbmNlOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZS1jb2xvcik7XG4gIGNvbG9yOiB2YXIoLS1yZWQtY29sb3IpO1xuICBmb250LWZhbWlseTogXCJPc3dhbGRcIiwgc2Fucy1zZXJpZjtcbiAgd2lkdGg6IG1pbigyMzBweCwxMCUpO1xuICBoZWlnaHQ6IDMwcHg7XG4gIGJvcmRlcjogMDtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XG59XG5cbi5pdGVtcy1jb250YWluZXIgaW5wdXRbbmFtZT1cImRlc2NyaXB0aW9uXCJdIHtcbiAgd2lkdGg6IGNhbGMobWluKDIzMHB4LDEwJSkqMyk7XG59XG5cbi5uZXctaXRlbS1jcmVhdG9yIGJ1dHRvbixcbi5uZXctaXRlbS1jcmVhdG9yIGJ1dHRvbiBzdmd7XG4gIGhlaWdodDogMzBweDtcbiAgd2lkdGg6IDMwcHg7XG59XG5cbi5uZXctaXRlbS1jcmVhdG9yIHN2ZyB7XG4gIGZpbHRlcjogaW52ZXJ0KDEwMCUpIHNlcGlhKDAlKSBzYXR1cmF0ZSgzMCUpIGh1ZS1yb3RhdGUoMjI5ZGVnKSBicmlnaHRuZXNzKDExMiUpIGNvbnRyYXN0KDc4JSk7XG59XG5cbi5uZXctaXRlbS1jcmVhdG9yIGJ1dHRvbntcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IDA7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBwYWRkaW5nOiAycHg7XG59XG5cbi5uZXctaXRlbS1jcmVhdG9yIGJ1dHRvbjpob3Zlcixcbi5kZWxldGUtYnV0dG9uOmhvdmVyLFxuLmRlbGV0ZS1wcm9qZWN0OmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFkMWQxZDJmO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5pdGVtLXRleHQsXG4uaXRlbS1kZXNjLFxuLml0ZW0tZGQsXG4uaXRlbS1wcmlvcml0eSB7XG4gIGZvbnQtZmFtaWx5OiBcIk9zd2FsZFwiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGhlaWdodDogMzBweDtcbiAgY29sb3I6IHZhcigtLWRhcmstY29sb3IpXG59XG5cbi5pdGVtLXRleHQsXG4uaXRlbS1kZCB7XG4gIHdpZHRoOiAxMCVcbn1cblxuLml0ZW0tZGVzYyB7XG4gIHdpZHRoOiAyMCU7XG59XG5cbi5oaWdoLXByaW9yaXR5IHtcbiAgYm9yZGVyLWxlZnQ6IDVweCAjYzQwMDAwIHNvbGlkO1xufVxuXG4ubWVkLXByaW9yaXR5IHtcbiAgYm9yZGVyLWxlZnQ6IDVweCAjYzQ5MDAwIHNvbGlkO1xufVxuXG4ubG93LXByaW9yaXR5IHtcbiAgYm9yZGVyLWxlZnQ6IDVweCAjMjdjNDAwIHNvbGlkO1xufVxuXG4uaGlnaC1wcmlvcml0eSwgLm1lZC1wcmlvcml0eSwgLmxvdy1wcmlvcml0eSB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5kZWxldGUtYnV0dG9uLFxuLmRlbGV0ZS1idXR0b24gaW1nIHtcbiAgaGVpZ2h0OiAzMHB4O1xuICB3aWR0aDogMzBweDtcbn1cblxuLmRlbGV0ZS1idXR0b24gaW1nIHtcbiAgZmlsdGVyOiBpbnZlcnQoMTAwJSkgc2VwaWEoMCUpIHNhdHVyYXRlKDMwJSkgaHVlLXJvdGF0ZSgyMjlkZWcpIGJyaWdodG5lc3MoMTEyJSkgY29udHJhc3QoNzglKTtcbn1cblxuLmRlbGV0ZS1idXR0b24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogMDtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIHBhZGRpbmc6IDJweDtcbn1cblxuLmRlbGV0ZS1wcm9qZWN0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiBcIk9zd2FsZFwiLCBzYW5zLXNlcmlmO1xuICBjb2xvcjp2YXIoLS13aGl0ZS1jb2xvcik7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IDA7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICBwYWRkaW5nOiAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICB3aWR0aDogODAlO1xuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbn1cblxuXG5cblxuLyogQG1lZGlhIChtYXgtd2lkdGg6IDcwMHB4KSB7XG4gICAgLnJpZ2h0LXNpZGUge1xuICAgICAgICBmbGV4LWJhc2lzOiA3NSU7XG4gICAgfVxuICAgIC5zaWRlLWJhciB7XG4gICAgICAgIGZsZXgtYmFzaXM6IDI1JTtcbiAgICB9XG59ICovXG5cbi8qIEhhbWJ1cmdlciBtZW51ICovXG4uaGFtYnVyZ2VyLWJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHBhZGRpbmc6IDA7XG4gICAgZmlsdGVyOiBpbnZlcnQoMTAwJSkgc2VwaWEoMCUpIHNhdHVyYXRlKDMwJSkgaHVlLXJvdGF0ZSgyMjlkZWcpIGJyaWdodG5lc3MoMTEyJSkgY29udHJhc3QoNzglKTtcbiAgfVxuICAubGluZSB7XG4gICAgZmlsbDogbm9uZTtcbiAgICBzdHJva2U6IGJsYWNrO1xuICAgIHN0cm9rZS13aWR0aDogNjtcbiAgICB0cmFuc2l0aW9uOiBzdHJva2UtZGFzaGFycmF5IDYwMG1zIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSksXG4gICAgICBzdHJva2UtZGFzaG9mZnNldCA2MDBtcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO1xuICB9XG4gIC5saW5lMSB7XG4gICAgc3Ryb2tlLWRhc2hhcnJheTogNjAgMjA3O1xuICAgIHN0cm9rZS13aWR0aDogNjtcbiAgfVxuICAubGluZTIge1xuICAgIHN0cm9rZS1kYXNoYXJyYXk6IDYwIDYwO1xuICAgIHN0cm9rZS13aWR0aDogNjtcbiAgfVxuICAubGluZTMge1xuICAgIHN0cm9rZS1kYXNoYXJyYXk6IDYwIDIwNztcbiAgICBzdHJva2Utd2lkdGg6IDY7XG4gIH1cbiAgLm9wZW5lZCAubGluZTEge1xuICAgIHN0cm9rZS1kYXNoYXJyYXk6IDkwIDIwNztcbiAgICBzdHJva2UtZGFzaG9mZnNldDogLTEzNDtcbiAgICBzdHJva2Utd2lkdGg6IDY7XG4gIH1cbiAgLm9wZW5lZCAubGluZTIge1xuICAgIHN0cm9rZS1kYXNoYXJyYXk6IDEgNjA7XG4gICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IC0zMDtcbiAgICBzdHJva2Utd2lkdGg6IDY7XG4gIH1cbiAgLm9wZW5lZCAubGluZTMge1xuICAgIHN0cm9rZS1kYXNoYXJyYXk6IDkwIDIwNztcbiAgICBzdHJva2UtZGFzaG9mZnNldDogLTEzNDtcbiAgICBzdHJva2Utd2lkdGg6IDY7XG4gIH1cbiAgYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtJQUNJLHFCQUFxQjtJQUNyQixxQkFBcUI7SUFDckIsb0JBQW9CO0lBQ3BCLHNCQUFzQjtJQUN0QixxQkFBcUI7SUFDckIsYUFBYTtJQUNiLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsU0FBUztBQUNiOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGFBQWE7SUFDYiw0QkFBNEI7SUFDNUIsa0JBQWtCO0lBQ2xCLG1DQUFtQztBQUN2Qzs7QUFFQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGlCQUFpQjtFQUNqQixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxZQUFZO0VBQ1osZUFBZTtFQUNmLGlDQUFpQztFQUNqQyx5QkFBeUI7RUFDekIsNkJBQTZCO0VBQzdCLGdCQUFnQjtFQUNoQixTQUFTO0FBQ1g7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsZUFBZTtBQUNqQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osU0FBUztJQUNULFFBQVE7SUFDUixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSwyQkFBMkI7QUFDL0I7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixnQkFBZ0I7RUFDaEIsNkJBQTZCO0VBQzdCLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsb0JBQW9CO0VBQ3BCLDhGQUE4RjtBQUNoRzs7QUFFQTtFQUNFLDJCQUEyQjtFQUMzQixlQUFlOztBQUVqQjs7QUFFQTtFQUNFLGdDQUFnQztFQUNoQyxVQUFVO0VBQ1YsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsZ0NBQWdDO0VBQ2hDLFNBQVM7RUFDVCx5QkFBeUI7QUFDM0I7O0FBRUE7OztFQUdFLGFBQWE7QUFDZjs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osa0NBQWtDO0lBQ2xDLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLG9DQUFvQztJQUNwQyxPQUFPO0lBQ1Asa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixnQ0FBZ0M7SUFDaEMsd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksaUNBQWlDO0lBQ2pDLHlCQUF5QjtJQUN6QixlQUFlO0FBQ25COztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFNBQVM7RUFDVCxvQkFBb0I7RUFDcEIsNkJBQTZCO0VBQzdCLFNBQVM7RUFDVCxRQUFRO0VBQ1Isa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZUFBZTs7QUFFakI7QUFDQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCwrRkFBK0Y7QUFDakc7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsUUFBUTtBQUNWOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGdCQUFnQjtFQUNoQixTQUFTO0VBQ1QsWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsaUNBQWlDO0VBQ2pDLGVBQWU7RUFDZixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIseUJBQXlCO0VBQ3pCLFNBQVM7RUFDVCxZQUFZO0VBQ1osV0FBVztFQUNYLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSw4RkFBOEY7RUFDOUYsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsaUNBQWlDO0VBQ2pDLHlCQUF5QjtFQUN6QixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsYUFBYTtFQUNiLDBCQUEwQjtFQUMxQiwwQ0FBMEM7RUFDMUM7QUFDRjs7QUFFQTtFQUNFLG1DQUFtQztFQUNuQyxtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsMkJBQTJCO0VBQzNCLE9BQU87RUFDUCxrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLG9DQUFvQztFQUNwQyx1QkFBdUI7RUFDdkIsaUNBQWlDO0VBQ2pDLHFCQUFxQjtFQUNyQixZQUFZO0VBQ1osU0FBUztFQUNULG1CQUFtQjtFQUNuQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSw2QkFBNkI7QUFDL0I7O0FBRUE7O0VBRUUsWUFBWTtFQUNaLFdBQVc7QUFDYjs7QUFFQTtFQUNFLDhGQUE4RjtBQUNoRzs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLDZCQUE2QjtFQUM3QixTQUFTO0VBQ1QsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixZQUFZO0FBQ2Q7O0FBRUE7OztFQUdFLDJCQUEyQjtFQUMzQixlQUFlO0FBQ2pCOztBQUVBOzs7O0VBSUUsaUNBQWlDO0VBQ2pDLGVBQWU7RUFDZixZQUFZO0VBQ1o7QUFDRjs7QUFFQTs7RUFFRTtBQUNGOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBOztFQUVFLFlBQVk7RUFDWixXQUFXO0FBQ2I7O0FBRUE7RUFDRSw4RkFBOEY7QUFDaEc7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2Qix1QkFBdUI7RUFDdkIsU0FBUztFQUNULGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsaUNBQWlDO0VBQ2pDLHdCQUF3QjtFQUN4Qiw2QkFBNkI7RUFDN0IsU0FBUztFQUNULG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixVQUFVO0VBQ1Ysb0JBQW9CO0FBQ3RCOzs7OztBQUtBOzs7Ozs7O0dBT0c7O0FBRUgsbUJBQW1CO0FBQ25CO0lBQ0ksNkJBQTZCO0lBQzdCLFlBQVk7SUFDWixXQUFXO0lBQ1gsZUFBZTtJQUNmLGFBQWE7SUFDYixVQUFVO0lBQ1YsOEZBQThGO0VBQ2hHO0VBQ0E7SUFDRSxVQUFVO0lBQ1YsYUFBYTtJQUNiLGVBQWU7SUFDZjswREFDc0Q7RUFDeEQ7RUFDQTtJQUNFLHdCQUF3QjtJQUN4QixlQUFlO0VBQ2pCO0VBQ0E7SUFDRSx1QkFBdUI7SUFDdkIsZUFBZTtFQUNqQjtFQUNBO0lBQ0Usd0JBQXdCO0lBQ3hCLGVBQWU7RUFDakI7RUFDQTtJQUNFLHdCQUF3QjtJQUN4Qix1QkFBdUI7SUFDdkIsZUFBZTtFQUNqQjtFQUNBO0lBQ0Usc0JBQXNCO0lBQ3RCLHNCQUFzQjtJQUN0QixlQUFlO0VBQ2pCO0VBQ0E7SUFDRSx3QkFBd0I7SUFDeEIsdUJBQXVCO0lBQ3ZCLGVBQWU7RUFDakJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9T3N3YWxkJmRpc3BsYXk9c3dhcCcpO1xcblxcbjpyb290IHtcXG4gICAgLS1kYXJrLWNvbG9yOiAjMjMzMTQyO1xcbiAgICAtLWdyYXktY29sb3I6ICM0NTVkN2E7XFxuICAgIC0tcmVkLWNvbG9yOiAjZjk1OTU5O1xcbiAgICAtLXdoaXRlLWNvbG9yOiAjZTNlM2UzO1xcbiAgICAtLWl0ZW0tY29sb3I6ICNhZmFmYWY7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHdpZHRoOiAxMDB2aDtcXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbn1cXG5cXG4qIHtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG4ubWFpbi1ib2R5LWNvbnRhaW5lciB7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLnNpZGUtYmFyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA2MHB4IDFmcjtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmF5LWNvbG9yKTtcXG59XFxuXFxuLnByb2plY3RzLWxpc3Qge1xcbiAgZ3JpZC1yb3c6IDI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHBhZGRpbmctdG9wOiAxNXB4O1xcbiAgZ2FwOiAxNXB4O1xcbn1cXG5cXG4ucHJvamVjdC1idXR0b24ge1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJPc3dhbGRcXFwiLCBzYW5zLXNlcmlmO1xcbiAgY29sb3I6IHZhcigtLXdoaXRlLWNvbG9yKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYXBwZWFyYW5jZTogbm9uZTtcXG4gIGJvcmRlcjogMDtcXG59XFxuXFxuLnByb2plY3QtYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzODRiNjM7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5zaWRlLWJhci1idXR0b24ge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgbGVmdDogNHB4O1xcbiAgICB0b3A6IDRweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XFxufVxcblxcbi5zaWRlLWJhci1idXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmMmY7XFxufVxcblxcbi5uZXctcHJvamVjdC1idXR0b24ge1xcbiAgZ3JpZC1yb3c6IDEgLyAyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktc2VsZjogZmxleC1lbmQ7XFxuICBhcHBlYXJhbmNlOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBncmlkLWNvbHVtbjogMSAvIDI7XFxuICBib3JkZXI6IDA7XFxuICB3aWR0aDogNTBweDtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIG1hcmdpbi1yaWdodDogNHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTAwcHg7XFxuICBmaWx0ZXI6IGludmVydCgxMDAlKSBzZXBpYSgwJSkgc2F0dXJhdGUoMzAlKSBodWUtcm90YXRlKDIyOWRlZykgYnJpZ2h0bmVzcygxMTIlKSBjb250cmFzdCg3OCUpO1xcbn1cXG5cXG4ubmV3LXByb2plY3QtYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmYyZjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIFxcbn1cXG5cXG4uc2lkZS1iYXItc2hvd24ge1xcbiAgdHJhbnNpdGlvbjogd2lkdGggMzAwbXMgZWFzZS1vdXQ7XFxuICB3aWR0aDogMjAlO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMDAlO1xcbn1cXG5cXG4uc2lkZS1iYXItaGlkZGVuIHtcXG4gIHRyYW5zaXRpb246IHdpZHRoIDMwMG1zIGVhc2Utb3V0O1xcbiAgd2lkdGg6IDAlO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAwJTtcXG59XFxuXFxuLnNpZGUtYmFyLWhpZGRlbiAucHJvamVjdHMtbGlzdCxcXG4uc2lkZS1iYXItaGlkZGVuIC5zaWRlLWJhci1oZWFkaW5nLFxcbi5zaWRlLWJhci1oaWRkZW4gLmRlbGV0ZS1wcm9qZWN0e1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnJpZ2h0LXNpZGUge1xcbiAgICBmbGV4LWdyb3c6IDE7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi50b3AtYmFyIHtcXG4gICAgaGVpZ2h0OiA2MHB4O1xcbiAgICBmbGV4LWdyb3c6IDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXJlZC1jb2xvcik7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XFxufVxcblxcbi5jb250ZW50IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUtY29sb3IpO1xcbiAgICBmbGV4OiAxO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNTRweCBhdXRvO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG87XFxufVxcblxcbi5oZWFkaW5nIHtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJPc3dhbGRcXFwiLCBzYW5zLXNlcmlmO1xcbiAgICBjb2xvcjogdmFyKC0td2hpdGUtY29sb3IpO1xcbiAgICBmb250LXNpemU6IDJyZW07XFxufVxcblxcbi5uZXctaXRlbS1idXR0b24ge1xcbiAgYXBwZWFyYW5jZTogbm9uZTtcXG4gIGJvcmRlcjogMDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBsZWZ0OiA0cHg7XFxuICB0b3A6IDRweDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG59XFxuXFxuLm5ldy1pdGVtLWJ1dHRvbiBzdmc6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcblxcbn1cXG4ubmV3LWl0ZW0tYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNjOGM4Yzg7XFxufVxcblxcbi5uZXctaXRlbS1idXR0b24gc3ZnIHtcXG4gIHdpZHRoOiA1MHB4O1xcbiAgZmlsdGVyOiBpbnZlcnQoMzUlKSBzZXBpYSgxNSUpIHNhdHVyYXRlKDEwOTIlKSBodWUtcm90YXRlKDE3M2RlZykgYnJpZ2h0bmVzcyg5MyUpIGNvbnRyYXN0KDkyJSk7XFxufVxcblxcbi5wcm9qZWN0LW5hbWUtZ2V0dGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDJweDtcXG59XFxuXFxuLnByb2plY3QtbmFtZS1nZXR0ZXIgaW5wdXQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM4NGI2MztcXG4gIGFwcGVhcmFuY2U6IG5vbmU7XFxuICBib3JkZXI6IDA7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICBjb2xvcjogdmFyKC0td2hpdGUtY29sb3IpO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJPc3dhbGRcXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuLnByb2plY3QtbmFtZS1nZXR0ZXIgYnV0dG9uIHtcXG4gIGFwcGVhcmFuY2U6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzg0YjYzO1xcbiAgYm9yZGVyOiAwO1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgd2lkdGg6IDMwcHg7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG4ucHJvamVjdC1uYW1lLWdldHRlciBidXR0b246aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ucHJvamVjdC1uYW1lLWdldHRlciBidXR0b24gc3ZnIHtcXG4gIGZpbHRlcjogaW52ZXJ0KDEwMCUpIHNlcGlhKDAlKSBzYXR1cmF0ZSgzMCUpIGh1ZS1yb3RhdGUoMjI5ZGVnKSBicmlnaHRuZXNzKDExMiUpIGNvbnRyYXN0KDc4JSk7XFxuICB3aWR0aDogMzBweDtcXG4gIGhlaWdodDogMzBweDtcXG59XFxuXFxuLnNpZGUtYmFyLWhlYWRpbmcge1xcbiAgZ3JpZC1yb3c6IDEgLyAyO1xcbiAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJPc3dhbGRcXFwiLCBzYW5zLXNlcmlmO1xcbiAgY29sb3I6IHZhcigtLXdoaXRlLWNvbG9yKTtcXG4gIGZvbnQtc2l6ZTogMjJweDtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbn1cXG5cXG4uaXRlbXMtY29udGFpbmVyIHtcXG4gIGdyaWQtY29sdW1uOiAyLzM7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoYXV0by1maXQsIDUwcHgpO1xcbiAgZ2FwOiAyMHB4XFxufVxcblxcbi5pdGVtcy1jb250YWluZXIgZGl2IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWl0ZW0tY29sb3IpO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBwYWRkaW5nOiAycHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgZ2FwOiA0JTtcXG4gIHBhZGRpbmctbGVmdDogMTJweDtcXG4gIHBhZGRpbmctcmlnaHQ6IDEycHg7XFxufVxcblxcbi5pdGVtcy1jb250YWluZXIgaW5wdXQge1xcbiAgYXBwZWFyYW5jZTogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlLWNvbG9yKTtcXG4gIGNvbG9yOiB2YXIoLS1yZWQtY29sb3IpO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJPc3dhbGRcXFwiLCBzYW5zLXNlcmlmO1xcbiAgd2lkdGg6IG1pbigyMzBweCwxMCUpO1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgYm9yZGVyOiAwO1xcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gIHBhZGRpbmctbGVmdDogNXB4O1xcbn1cXG5cXG4uaXRlbXMtY29udGFpbmVyIGlucHV0W25hbWU9XFxcImRlc2NyaXB0aW9uXFxcIl0ge1xcbiAgd2lkdGg6IGNhbGMobWluKDIzMHB4LDEwJSkqMyk7XFxufVxcblxcbi5uZXctaXRlbS1jcmVhdG9yIGJ1dHRvbixcXG4ubmV3LWl0ZW0tY3JlYXRvciBidXR0b24gc3Zne1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgd2lkdGg6IDMwcHg7XFxufVxcblxcbi5uZXctaXRlbS1jcmVhdG9yIHN2ZyB7XFxuICBmaWx0ZXI6IGludmVydCgxMDAlKSBzZXBpYSgwJSkgc2F0dXJhdGUoMzAlKSBodWUtcm90YXRlKDIyOWRlZykgYnJpZ2h0bmVzcygxMTIlKSBjb250cmFzdCg3OCUpO1xcbn1cXG5cXG4ubmV3LWl0ZW0tY3JlYXRvciBidXR0b257XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXI6IDA7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICBwYWRkaW5nOiAycHg7XFxufVxcblxcbi5uZXctaXRlbS1jcmVhdG9yIGJ1dHRvbjpob3ZlcixcXG4uZGVsZXRlLWJ1dHRvbjpob3ZlcixcXG4uZGVsZXRlLXByb2plY3Q6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFkMWQxZDJmO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uaXRlbS10ZXh0LFxcbi5pdGVtLWRlc2MsXFxuLml0ZW0tZGQsXFxuLml0ZW0tcHJpb3JpdHkge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJPc3dhbGRcXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAxNXB4O1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgY29sb3I6IHZhcigtLWRhcmstY29sb3IpXFxufVxcblxcbi5pdGVtLXRleHQsXFxuLml0ZW0tZGQge1xcbiAgd2lkdGg6IDEwJVxcbn1cXG5cXG4uaXRlbS1kZXNjIHtcXG4gIHdpZHRoOiAyMCU7XFxufVxcblxcbi5oaWdoLXByaW9yaXR5IHtcXG4gIGJvcmRlci1sZWZ0OiA1cHggI2M0MDAwMCBzb2xpZDtcXG59XFxuXFxuLm1lZC1wcmlvcml0eSB7XFxuICBib3JkZXItbGVmdDogNXB4ICNjNDkwMDAgc29saWQ7XFxufVxcblxcbi5sb3ctcHJpb3JpdHkge1xcbiAgYm9yZGVyLWxlZnQ6IDVweCAjMjdjNDAwIHNvbGlkO1xcbn1cXG5cXG4uaGlnaC1wcmlvcml0eSwgLm1lZC1wcmlvcml0eSwgLmxvdy1wcmlvcml0eSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4uZGVsZXRlLWJ1dHRvbixcXG4uZGVsZXRlLWJ1dHRvbiBpbWcge1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgd2lkdGg6IDMwcHg7XFxufVxcblxcbi5kZWxldGUtYnV0dG9uIGltZyB7XFxuICBmaWx0ZXI6IGludmVydCgxMDAlKSBzZXBpYSgwJSkgc2F0dXJhdGUoMzAlKSBodWUtcm90YXRlKDIyOWRlZykgYnJpZ2h0bmVzcygxMTIlKSBjb250cmFzdCg3OCUpO1xcbn1cXG5cXG4uZGVsZXRlLWJ1dHRvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXI6IDA7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICBwYWRkaW5nOiAycHg7XFxufVxcblxcbi5kZWxldGUtcHJvamVjdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJPc3dhbGRcXFwiLCBzYW5zLXNlcmlmO1xcbiAgY29sb3I6dmFyKC0td2hpdGUtY29sb3IpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXI6IDA7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gIHdpZHRoOiA4MCU7XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuXFxuXFxuXFxuLyogQG1lZGlhIChtYXgtd2lkdGg6IDcwMHB4KSB7XFxuICAgIC5yaWdodC1zaWRlIHtcXG4gICAgICAgIGZsZXgtYmFzaXM6IDc1JTtcXG4gICAgfVxcbiAgICAuc2lkZS1iYXIge1xcbiAgICAgICAgZmxleC1iYXNpczogMjUlO1xcbiAgICB9XFxufSAqL1xcblxcbi8qIEhhbWJ1cmdlciBtZW51ICovXFxuLmhhbWJ1cmdlci1idXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICB3aWR0aDogNTBweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBmaWx0ZXI6IGludmVydCgxMDAlKSBzZXBpYSgwJSkgc2F0dXJhdGUoMzAlKSBodWUtcm90YXRlKDIyOWRlZykgYnJpZ2h0bmVzcygxMTIlKSBjb250cmFzdCg3OCUpO1xcbiAgfVxcbiAgLmxpbmUge1xcbiAgICBmaWxsOiBub25lO1xcbiAgICBzdHJva2U6IGJsYWNrO1xcbiAgICBzdHJva2Utd2lkdGg6IDY7XFxuICAgIHRyYW5zaXRpb246IHN0cm9rZS1kYXNoYXJyYXkgNjAwbXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKSxcXG4gICAgICBzdHJva2UtZGFzaG9mZnNldCA2MDBtcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO1xcbiAgfVxcbiAgLmxpbmUxIHtcXG4gICAgc3Ryb2tlLWRhc2hhcnJheTogNjAgMjA3O1xcbiAgICBzdHJva2Utd2lkdGg6IDY7XFxuICB9XFxuICAubGluZTIge1xcbiAgICBzdHJva2UtZGFzaGFycmF5OiA2MCA2MDtcXG4gICAgc3Ryb2tlLXdpZHRoOiA2O1xcbiAgfVxcbiAgLmxpbmUzIHtcXG4gICAgc3Ryb2tlLWRhc2hhcnJheTogNjAgMjA3O1xcbiAgICBzdHJva2Utd2lkdGg6IDY7XFxuICB9XFxuICAub3BlbmVkIC5saW5lMSB7XFxuICAgIHN0cm9rZS1kYXNoYXJyYXk6IDkwIDIwNztcXG4gICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IC0xMzQ7XFxuICAgIHN0cm9rZS13aWR0aDogNjtcXG4gIH1cXG4gIC5vcGVuZWQgLmxpbmUyIHtcXG4gICAgc3Ryb2tlLWRhc2hhcnJheTogMSA2MDtcXG4gICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IC0zMDtcXG4gICAgc3Ryb2tlLXdpZHRoOiA2O1xcbiAgfVxcbiAgLm9wZW5lZCAubGluZTMge1xcbiAgICBzdHJva2UtZGFzaGFycmF5OiA5MCAyMDc7XFxuICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAtMTM0O1xcbiAgICBzdHJva2Utd2lkdGg6IDY7XFxuICB9XFxuICBcIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHBhZ2UgZnJvbSBcIi4vcGFnZVwiO1xuaW1wb3J0IHtQcm9qZWN0TGlzdH0gZnJvbSBcIi4vcHJvamVjdC1saXN0LmpzXCJcbmltcG9ydCB7IGxpc3RUb2RvSXRlbSB9IGZyb20gXCIuL2xpc3QtdG9kby1pdGVtc1wiO1xuaW1wb3J0IHsgY3JlYXRlSXRlbUlucHV0IH0gZnJvbSBcIi4vbmV3LWl0ZW0tYnV0dG9uXCI7XG5cbmZ1bmN0aW9uIGNoYW5nZVByb2plY3QoYnV0dG9uKXtcbiAgICBwYWdlLml0ZW1zQ29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XG4gICAgcGFnZS5pdGVtc0NvbnRhaW5lci5pZCA9IGJ1dHRvbjtcbiAgICBQcm9qZWN0TGlzdFtidXR0b25dLnByb2plY3RJdGVtcy5mb3JFYWNoKCAoIGl0ZW0gKSA9PiB7XG4gICAgICAgIGxpc3RUb2RvSXRlbShpdGVtKTtcbiAgICB9KVxuICAgIGlmIChQcm9qZWN0TGlzdFtidXR0b25dLnByb2plY3RJdGVtcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgY3JlYXRlSXRlbUlucHV0KCk7XG4gICAgfVxufVxuXG5leHBvcnQge2NoYW5nZVByb2plY3R9IiwiaW1wb3J0IHBhZ2UgZnJvbSBcIi4vcGFnZVwiO1xuaW1wb3J0IHtUb0RvSXRlbX0gZnJvbSBcIi4vdG9kby5qc1wiXG5pbXBvcnQge1Byb2plY3RMaXN0fSBmcm9tIFwiLi9wcm9qZWN0LWxpc3QuanNcIlxuaW1wb3J0IHsgbGlzdFRvZG9JdGVtIH0gZnJvbSBcIi4vbGlzdC10b2RvLWl0ZW1zXCI7XG5pbXBvcnQgeyBhZGRQcm9qZWN0c1RvTG9jYWxTdG9yYWdlIH0gZnJvbSBcIi4vbG9jYWwtc3RvcmFnZVwiO1xuXG5mdW5jdGlvbiB2YWxpZGF0ZUl0ZW0obmFtZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KSB7XG4gICAgaWYgKG5hbWUubGVuZ3RoID4gMjAgfHwgbmFtZS5sZW5ndGggPCAxKXtcbiAgICAgICAgYWxlcnQoXCJOYW1lIG9mIHRhc2sgbXVzdCBiZSBiZXR3ZWVuIDEgYW5kIDIwIGNoYXJhY3RlcnNcIik7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cbiAgICBlbHNlIGlmIChkZXNjcmlwdGlvbi5sZW5ndGggPiA1MCkge1xuICAgICAgICBhbGVydChcIkRlc2NyaXB0aW9uIG11c3QgYmUgdW5kZXIgNTAgY2hhcmFjdGVyc1wiKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuICAgIGVsc2UgaWYgKGR1ZURhdGUubGVuZ3RoID4gNTApIHtcbiAgICAgICAgYWxlcnQoXCJEdWUgZGF0ZSBtdXN0IGJlIGF0IG1vc3QgNTAgY2hhcmFjdGVyc1wiKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuICAgIGVsc2UgaWYgKHByaW9yaXR5ID4gMyB8fCBwcmlvcml0eSA8IDEgfHwgcHJpb3JpdHkubGVuZ3RoID4gMSkge1xuICAgICAgICBhbGVydChcIlByaW9yaXR5IHZhbHVlIG11c3QgYmUgYmV0d2VlbiAxIGFuZCAzXCIpO1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVJdGVtKG5hbWUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSkge1xuICAgIGlmICh2YWxpZGF0ZUl0ZW0obmFtZS52YWx1ZSwgZGVzY3JpcHRpb24udmFsdWUsIGR1ZURhdGUudmFsdWUsIHByaW9yaXR5LnZhbHVlKSA9PT0gdHJ1ZSkge1xuICAgICAgICBQcm9qZWN0TGlzdFtwYWdlLml0ZW1zQ29udGFpbmVyLmlkXS5hZGRJdGVtKG5ldyBUb0RvSXRlbShuYW1lLnZhbHVlLCBkZXNjcmlwdGlvbi52YWx1ZSwgZHVlRGF0ZS52YWx1ZSwgcHJpb3JpdHkudmFsdWUpKTtcbiAgICAgICAgbGlzdFRvZG9JdGVtKG5ldyBUb0RvSXRlbShuYW1lLnZhbHVlLCBkZXNjcmlwdGlvbi52YWx1ZSwgZHVlRGF0ZS52YWx1ZSwgcHJpb3JpdHkudmFsdWUpKTtcbiAgICAgICAgYWRkUHJvamVjdHNUb0xvY2FsU3RvcmFnZSgpO1xuICAgIH1cbn1cblxuZXhwb3J0IHtjcmVhdGVJdGVtLCB2YWxpZGF0ZUl0ZW19OyIsImltcG9ydCB7IGNoYW5nZVByb2plY3QgfSBmcm9tIFwiLi9jaGFuZ2UtcHJvamVjdFwiO1xuaW1wb3J0IHsgYWRkUHJvamVjdHNUb0xvY2FsU3RvcmFnZSB9IGZyb20gXCIuL2xvY2FsLXN0b3JhZ2VcIjtcbmltcG9ydCBwYWdlIGZyb20gXCIuL3BhZ2VcIjtcbmltcG9ydCB7IFByb2plY3RBcnJheSwgUHJvamVjdExpc3QgfSBmcm9tIFwiLi9wcm9qZWN0LWxpc3RcIjtcblxuZnVuY3Rpb24gZGVsZXRlUHJvamVjdCgpIHtcbiAgICBpZiAoY29uZmlybShgQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSB0aGUgXCIke3BhZ2UuaXRlbXNDb250YWluZXIuaWR9XCIgcHJvamVjdD9gKSkge1xuICAgICAgICBQcm9qZWN0QXJyYXkuc3BsaWNlKFByb2plY3RBcnJheS5pbmRleE9mKHBhZ2UuaXRlbXNDb250YWluZXIuaWQpLDEpO1xuICAgICAgICBjb25zb2xlLmxvZyhQcm9qZWN0QXJyYXkubGVuZ3RoKTtcbiAgICAgICAgcGFnZS5wcm9qZWN0c0xpc3QucmVtb3ZlQ2hpbGQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgYnV0dG9uW25hbWU9XCIke3BhZ2UuaXRlbXNDb250YWluZXIuaWR9XCJdYCkpXG4gICAgICAgIGRlbGV0ZSBQcm9qZWN0TGlzdFtwYWdlLml0ZW1zQ29udGFpbmVyLmlkXTtcbiAgICAgICAgaWYgKFByb2plY3RBcnJheS5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgcGFnZS5pdGVtc0NvbnRhaW5lci5pZCA9IFwiXCI7XG4gICAgICAgICAgICBwYWdlLml0ZW1zQ29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjaGFuZ2VQcm9qZWN0KFByb2plY3RBcnJheVswXS5uYW1lKVxuICAgICAgICB9XG4gICAgICAgIGFkZFByb2plY3RzVG9Mb2NhbFN0b3JhZ2UoKTtcbiAgICB9XG59XG5cbmV4cG9ydCB7ZGVsZXRlUHJvamVjdH0iLCJpbXBvcnQgcGFnZSBmcm9tIFwiLi9wYWdlXCI7XG5pbXBvcnQgeyBjaGFuZ2VQcmlvcml0eSB9IGZyb20gXCIuL3ByaW9yaXR5XCI7XG5pbXBvcnQgeyBQcm9qZWN0TGlzdCB9IGZyb20gXCIuL3Byb2plY3QtbGlzdFwiO1xuaW1wb3J0IHggZnJvbSBcIi4vYXNzZXRzL3gtaWNvbi5wbmdcIjtcbmltcG9ydCB7IGNoYW5nZVByb2plY3QgfSBmcm9tIFwiLi9jaGFuZ2UtcHJvamVjdFwiO1xuaW1wb3J0IHsgYWRkUHJvamVjdHNUb0xvY2FsU3RvcmFnZSB9IGZyb20gXCIuL2xvY2FsLXN0b3JhZ2VcIjtcblxuZnVuY3Rpb24gbGlzdFRvZG9JdGVtKHRvZG8pIHtcbiAgICBjb25zdCBuZXdJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBcbiAgICBjb25zdCBuZXdUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbmV3VGl0bGUudGV4dENvbnRlbnQgPSB0b2RvLm5hbWU7XG4gICAgbmV3VGl0bGUuY2xhc3NMaXN0LmFkZChcIml0ZW0tdGV4dFwiKTtcbiAgICBjb25zdCBuZXdEZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBuZXdEZXNjLnRleHRDb250ZW50ID0gdG9kby5kZXNjcmlwdGlvbjtcbiAgICBuZXdEZXNjLmNsYXNzTGlzdC5hZGQoXCJpdGVtLWRlc2NcIik7XG4gICAgY29uc3QgbmV3REQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG5ld0RELnRleHRDb250ZW50ID0gdG9kby5kdWVEYXRlO1xuICAgIG5ld0RELmNsYXNzTGlzdC5hZGQoXCJpdGVtLWRkXCIpO1xuICAgIGNvbnN0IG5ld1ByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBuZXdQcmlvcml0eS50ZXh0Q29udGVudCA9IHRvZG8ucHJpb3JpdHk7XG4gICAgbmV3UHJpb3JpdHkuY2xhc3NMaXN0LmFkZChcIml0ZW0tcHJpb3JpdHlcIik7XG4gICAgY2hhbmdlUHJpb3JpdHkobmV3UHJpb3JpdHksIG5ld0l0ZW0pO1xuXG4gICAgY29uc3QgZGVsZXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBjb25zdCB4SW1nID0gbmV3IEltYWdlKCk7XG4gICAgeEltZy5zcmMgPSB4O1xuICAgIGRlbGV0ZUJ1dHRvbi5hcHBlbmRDaGlsZCh4SW1nKTtcbiAgICBkZWxldGVCdXR0b24uY2xhc3NMaXN0LmFkZChcImRlbGV0ZS1idXR0b25cIik7XG5cbiAgICBkZWxldGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpPT4ge1xuICAgICAgICBQcm9qZWN0TGlzdFtwYWdlLml0ZW1zQ29udGFpbmVyLmlkXS5yZW1vdmVJdGVtKHRvZG8pO1xuICAgICAgICBhZGRQcm9qZWN0c1RvTG9jYWxTdG9yYWdlKCk7XG4gICAgICAgIGNoYW5nZVByb2plY3QocGFnZS5pdGVtc0NvbnRhaW5lci5pZCk7XG4gICAgfSlcblxuICAgIG5ld0l0ZW0uYXBwZW5kQ2hpbGQobmV3VGl0bGUpO1xuICAgIG5ld0l0ZW0uYXBwZW5kQ2hpbGQobmV3RGVzYyk7XG4gICAgbmV3SXRlbS5hcHBlbmRDaGlsZChuZXdERCk7XG4gICAgbmV3SXRlbS5hcHBlbmRDaGlsZChuZXdQcmlvcml0eSk7XG4gICAgbmV3SXRlbS5hcHBlbmRDaGlsZChkZWxldGVCdXR0b24pO1xuXG4gICAgcGFnZS5pdGVtc0NvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdJdGVtKTtcbn1cblxuZXhwb3J0IHtsaXN0VG9kb0l0ZW19IiwiaW1wb3J0IHsgYWRkUHJvamVjdFRvTGlzdCwgUHJvamVjdExpc3QsIFByb2plY3RBcnJheSB9IGZyb20gXCIuL3Byb2plY3QtbGlzdC5qc1wiO1xuaW1wb3J0IHsgUHJvamVjdCB9IGZyb20gXCIuL3Byb2plY3QuanNcIjtcbmltcG9ydCB7IFRvRG9JdGVtIH0gZnJvbSBcIi4vdG9kby5qc1wiO1xuXG5mdW5jdGlvbiBhZGRQcm9qZWN0c1RvTG9jYWxTdG9yYWdlKCkge1xuICAgIGxvY2FsU3RvcmFnZS5jbGVhcigpXG4gICAgUHJvamVjdEFycmF5LmZvckVhY2goKHByb2plY3QpID0+ICB7XG4gICAgICAgIGxldCByZXN1bHRBcnJheSA9IFtdO1xuICAgICAgICAvKiByZXN1bHRBcnJheS5wdXNoKHByb2plY3QubmFtZSk7ICovXG4gICAgICAgIHByb2plY3QucHJvamVjdEl0ZW1zLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGl0ZW1BcnJheSA9IFtpdGVtLm5hbWUsIGl0ZW0uZGVzY3JpcHRpb24sIGl0ZW0uZHVlRGF0ZSwgaXRlbS5wcmlvcml0eV07XG4gICAgICAgICAgICByZXN1bHRBcnJheS5wdXNoKEpTT04uc3RyaW5naWZ5KGl0ZW1BcnJheSkpO1xuICAgICAgICB9KVxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShwcm9qZWN0Lm5hbWUsIEpTT04uc3RyaW5naWZ5KHJlc3VsdEFycmF5KSk7XG4gICAgfSlcbn1cblxuZnVuY3Rpb24gZ2V0UHJvamVjdHNGcm9tTG9jYWxTdG9yYWdlKCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbG9jYWxTdG9yYWdlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGFkZFByb2plY3RUb0xpc3QobmV3IFByb2plY3QobG9jYWxTdG9yYWdlLmtleShpKSkpO1xuICAgICAgICBjb25zdCBpdGVtc0FycmF5ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShsb2NhbFN0b3JhZ2Uua2V5KGkpKSk7XG4gICAgICAgIGl0ZW1zQXJyYXkuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgaXRlbVBhcnNlZCA9IEpTT04ucGFyc2UoaXRlbSk7XG4gICAgICAgICAgICBQcm9qZWN0TGlzdFtsb2NhbFN0b3JhZ2Uua2V5KGkpXS5hZGRJdGVtKG5ldyBUb0RvSXRlbShpdGVtUGFyc2VkWzBdLCBpdGVtUGFyc2VkWzFdLCBpdGVtUGFyc2VkWzJdLCBpdGVtUGFyc2VkWzNdKSk7XG4gICAgICAgIH0pXG4gICAgfVxufVxuXG5leHBvcnQge2FkZFByb2plY3RzVG9Mb2NhbFN0b3JhZ2UsIGdldFByb2plY3RzRnJvbUxvY2FsU3RvcmFnZX0iLCJpbXBvcnQgcGFnZSBmcm9tIFwiLi9wYWdlXCI7XG5pbXBvcnQgeyBjcmVhdGVJdGVtIH0gZnJvbSBcIi4vY3JlYXRlLXJlbW92ZS1pdGVtXCI7XG5cbmZ1bmN0aW9uIGNyZWF0ZUl0ZW1JbnB1dCgpIHtcbiAgICBjb25zdCBuZXdJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBuZXdJdGVtLmNsYXNzTGlzdC5hZGQoXCJuZXctaXRlbS1jcmVhdG9yXCIpO1xuXG4gICAgY29uc3QgbmV3TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBuZXdOYW1lLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJuYW1lXCIpO1xuICAgIG5ld05hbWUuc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIiwgXCJUYXNrIE5hbWVcIik7XG4gICAgbmV3TmFtZS5zZXRBdHRyaWJ1dGUoXCJtYXhsZW5ndGhcIiwgMjApO1xuICAgIGNvbnN0IG5ld0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIG5ld0Rlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJkZXNjcmlwdGlvblwiKTtcbiAgICBuZXdEZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCBcIkEgYnJpZWYgZGVzY3JpcHRpb24gb2YgeW91ciB0YXNrXCIpO1xuICAgIG5ld05hbWUuc2V0QXR0cmlidXRlKFwibWF4bGVuZ3RoXCIsIDUwKTtcbiAgICBjb25zdCBuZXdEdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIG5ld0R1ZURhdGUuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcImR1ZS1kYXRlXCIpO1xuICAgIG5ld0R1ZURhdGUuc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIiwgXCJUaGUgZHVlIGRhdGUgb2YgeW91ciB0YXNrXCIpO1xuICAgIGNvbnN0IG5ld1ByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIG5ld1ByaW9yaXR5LnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJwcmlvcml0eVwiKTtcbiAgICBuZXdQcmlvcml0eS5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCBcIlByaW9yaXR5ICgxLTMpXCIpO1xuXG4gICAgY29uc3QgbmV3Q29uZmlybUl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIG5ld0NvbmZpcm1JdGVtLmlubmVySFRNTCA9IFwiPHN2ZyB4bWxucz1cXFwiaHR0cDpcXC9cXC93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiB3aWR0aD1cXFwiODAwcHhcXFwiIGhlaWdodD1cXFwiODAwcHhcXFwiIHZpZXdCb3g9XFxcIjAgMCAyNCAyNFxcXCIgZmlsbD1cXFwibm9uZVxcXCI+PHBhdGggZD1cXFwiTTQgMTIuNjExMUw4LjkyMzA4IDE3LjVMMjAgNi41XFxcIiBzdHJva2U9XFxcIiMwMDAwMDBcXFwiIHN0cm9rZS13aWR0aD1cXFwiMlxcXCIgc3Ryb2tlLWxpbmVjYXA9XFxcInJvdW5kXFxcIiBzdHJva2UtbGluZWpvaW49XFxcInJvdW5kXFxcIi9cXD48L3N2Zz5cIjtcbiAgICBuZXdDb25maXJtSXRlbS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCk9PiB7XG4gICAgICAgIGNyZWF0ZUl0ZW0obmV3TmFtZSwgbmV3RGVzY3JpcHRpb24sIG5ld0R1ZURhdGUsIG5ld1ByaW9yaXR5KTtcbiAgICAgICAgcGFnZS5pdGVtc0NvbnRhaW5lci5yZW1vdmVDaGlsZChuZXdJdGVtKVxuICAgIH0pXG5cbiAgICBuZXdJdGVtLmFwcGVuZENoaWxkKG5ld05hbWUpO1xuICAgIG5ld0l0ZW0uYXBwZW5kQ2hpbGQobmV3RGVzY3JpcHRpb24pO1xuICAgIG5ld0l0ZW0uYXBwZW5kQ2hpbGQobmV3RHVlRGF0ZSk7XG4gICAgbmV3SXRlbS5hcHBlbmRDaGlsZChuZXdQcmlvcml0eSk7XG4gICAgbmV3SXRlbS5hcHBlbmRDaGlsZChuZXdDb25maXJtSXRlbSk7XG5cbiAgICBwYWdlLml0ZW1zQ29udGFpbmVyLmFwcGVuZENoaWxkKG5ld0l0ZW0pO1xufVxuXG5leHBvcnQge2NyZWF0ZUl0ZW1JbnB1dH0iLCIvL0NyZWF0ZXMgYW5kL29yIHNlbGVjdHMgRE9NIGVsZW1lbnRzIGZvciB1c2UgaW4gb3RoZXIgbW9kdWxlc1xuZnVuY3Rpb24gd2ViUGFnZSgpIHtcblxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnRcIik7XG5cbiAgICBjb25zdCBpdGVtc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaXRlbXMtY29udGFpbmVyXCIpXG5cbiAgICAvL0ZvciBhZGQtcHJvamVjdC10by1zaWRlLWJhci5qc1xuICAgIGNvbnN0IHByb2plY3RzTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdHMtbGlzdFwiKTtcbiAgICBjb25zdCBkZWxldGVQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kZWxldGUtcHJvamVjdFwiKTtcblxuICAgIC8vRm9yIHNpZGUtYmFyLWJ1dHRvbi5qc1xuICAgIGNvbnN0IHNpZGVCYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNpZGUtYmFyXCIpO1xuICAgIGNvbnN0IHNpZGVCYXJCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNpZGUtYmFyLWJ1dHRvblwiKTtcblxuICAgIC8vRm9yIG5ldy1pdGVtLWJ1dHRvbi5qc1xuICAgIGNvbnN0IG5ld0l0ZW1CdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5ldy1pdGVtLWJ1dHRvblwiKTtcblxuXG4gICAgY29uc3QgbmV3UHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmV3LXByb2plY3QtYnV0dG9uXCIpO1xuXG4gICAgbGV0IGN1cnJlbnRQcm9qZWN0ID0gXCJcIjtcblxuICAgIGxldCBwcm9qZWN0QnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucHJvamVjdC1idXR0b25cIik7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBzaWRlQmFyLFxuICAgICAgICBzaWRlQmFyQnV0dG9uLFxuICAgICAgICBwcm9qZWN0c0xpc3QsXG4gICAgICAgIG5ld0l0ZW1CdXR0b24sXG4gICAgICAgIG5ld1Byb2plY3RCdXR0b24sXG4gICAgICAgIGNvbnRlbnQsXG4gICAgICAgIGl0ZW1zQ29udGFpbmVyLFxuICAgICAgICBjdXJyZW50UHJvamVjdCxcbiAgICAgICAgcHJvamVjdEJ1dHRvbnMsXG4gICAgICAgIGRlbGV0ZVByb2plY3RCdXR0b25cbiAgICB9O1xufVxuXG5jb25zdCBwYWdlID0gbmV3IHdlYlBhZ2UoKTtcblxuZXhwb3J0IGRlZmF1bHQgcGFnZTsiLCJmdW5jdGlvbiBjaGFuZ2VQcmlvcml0eShwcmlvcml0eSxwYXJlbnQpe1xuICAgIGlmIChwcmlvcml0eS50ZXh0Q29udGVudCA9PSAzKSB7XG4gICAgICAgIHBhcmVudC5jbGFzc0xpc3QuYWRkKFwiaGlnaC1wcmlvcml0eVwiKTtcbiAgICB9XG4gICAgZWxzZSBpZiAocHJpb3JpdHkudGV4dENvbnRlbnQgPT0gMikge1xuICAgICAgICBwYXJlbnQuY2xhc3NMaXN0LmFkZChcIm1lZC1wcmlvcml0eVwiKTtcbiAgICB9XG4gICAgZWxzZSBpZiAocHJpb3JpdHkudGV4dENvbnRlbnQgPT0gMSkge1xuICAgICAgICBwYXJlbnQuY2xhc3NMaXN0LmFkZChcImxvdy1wcmlvcml0eVwiKTtcbiAgICB9XG59XG5cbmV4cG9ydCB7Y2hhbmdlUHJpb3JpdHl9IiwiaW1wb3J0IHBhZ2UgZnJvbSBcIi4vcGFnZVwiO1xuaW1wb3J0IHtQcm9qZWN0fSBmcm9tIFwiLi9wcm9qZWN0LmpzXCI7XG5pbXBvcnQgeyBjaGFuZ2VQcm9qZWN0IH0gZnJvbSBcIi4vY2hhbmdlLXByb2plY3RcIjtcbmltcG9ydCB7IGdldFByb2plY3RzRnJvbUxvY2FsU3RvcmFnZSB9IGZyb20gXCIuL2xvY2FsLXN0b3JhZ2VcIjtcbmltcG9ydCB7IGNyZWF0ZUl0ZW1JbnB1dCB9IGZyb20gXCIuL25ldy1pdGVtLWJ1dHRvblwiO1xuXG5sZXQgUHJvamVjdExpc3QgPSB7fTtcbmxldCBQcm9qZWN0QXJyYXkgPSBbXTtcblxuZ2V0UHJvamVjdHNGcm9tTG9jYWxTdG9yYWdlKCk7XG5cbmlmIChQcm9qZWN0QXJyYXkubGVuZ3RoIDwgMSkge1xuICAgIGFkZFByb2plY3RUb0xpc3QobmV3IFByb2plY3QoXCJEZWZhdWx0XCIpLCBQcm9qZWN0TGlzdCk7XG4gICAgcGFnZS5pdGVtc0NvbnRhaW5lci5pZCA9IFwiRGVmYXVsdFwiO1xuICAgIGNoYW5nZVByb2plY3QoXCJEZWZhdWx0XCIpO1xufVxuXG5mdW5jdGlvbiBhZGRQcm9qZWN0VG9MaXN0KHByb2plY3QpIHtcbiAgICBQcm9qZWN0TGlzdFtwcm9qZWN0Lm5hbWVdID0gcHJvamVjdDtcbiAgICBQcm9qZWN0QXJyYXkucHVzaChwcm9qZWN0KVxuXG5cbiAgICBwYWdlLnByb2plY3RzTGlzdC5pbm5lckhUTUwgPSBcIlwiO1xuICAgIGZvciAoY29uc3QgW25hbWVdIG9mIE9iamVjdC5lbnRyaWVzKFByb2plY3RMaXN0KSkge1xuICAgICAgICBjb25zdCBuZXdJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgbmV3SXRlbS5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1idXR0b25cIik7XG4gICAgICAgIG5ld0l0ZW0udGV4dENvbnRlbnQgPSBuYW1lO1xuICAgICAgICBuZXdJdGVtLm5hbWUgPSBuYW1lO1xuICAgICAgICBuZXdJdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKT0+IHtcbiAgICAgICAgICAgIGNoYW5nZVByb2plY3QobmFtZSk7XG4gICAgICAgIH0pXG4gICAgICAgIHBhZ2UucHJvamVjdHNMaXN0LmFwcGVuZENoaWxkKG5ld0l0ZW0pO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlUHJvamVjdFByb21wdCgpIHtcbiAgICBjb25zdCBuYW1lR2V0dGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBuYW1lR2V0dGVyLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LW5hbWUtZ2V0dGVyXCIpO1xuXG4gICAgY29uc3QgbmFtZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIG5hbWVJbnB1dC5jbGFzc0xpc3QuYWRkKFwibmFtZS1nZXR0ZXItaW5wdXRcIik7XG4gICAgbmFtZUlucHV0LnZhbHVlID0gXCJVbm5hbWVkIFByb2plY3RcIjtcblxuICAgIGNvbnN0IG5hbWVDb25maXJtQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBuYW1lQ29uZmlybUJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwibmFtZS1nZXR0ZXItYnV0dG9uXCIpO1xuICAgIG5hbWVDb25maXJtQnV0dG9uLmlubmVySFRNTCA9IFwiPHN2ZyB4bWxucz1cXFwiaHR0cDpcXC9cXC93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiB3aWR0aD1cXFwiODAwcHhcXFwiIGhlaWdodD1cXFwiODAwcHhcXFwiIHZpZXdCb3g9XFxcIjAgMCAyNCAyNFxcXCIgZmlsbD1cXFwibm9uZVxcXCI+PHBhdGggZD1cXFwiTTQgMTIuNjExMUw4LjkyMzA4IDE3LjVMMjAgNi41XFxcIiBzdHJva2U9XFxcIiMwMDAwMDBcXFwiIHN0cm9rZS13aWR0aD1cXFwiMlxcXCIgc3Ryb2tlLWxpbmVjYXA9XFxcInJvdW5kXFxcIiBzdHJva2UtbGluZWpvaW49XFxcInJvdW5kXFxcIi9cXD48L3N2Zz5cIjtcblxuICAgIG5hbWVHZXR0ZXIuYXBwZW5kQ2hpbGQobmFtZUlucHV0KTtcbiAgICBuYW1lR2V0dGVyLmFwcGVuZENoaWxkKG5hbWVDb25maXJtQnV0dG9uKTtcbiAgICBwYWdlLnByb2plY3RzTGlzdC5hcHBlbmRDaGlsZChuYW1lR2V0dGVyKTtcbiAgICBcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm5hbWUtZ2V0dGVyLWJ1dHRvblwiKS5mb3JFYWNoKCAocHJvamVjdEJ1dHRvbikgPT4ge1xuICAgICAgICBwcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYW1lLWdldHRlci1pbnB1dFwiKS52YWx1ZS5sZW5ndGggPCAxKSB7XG4gICAgICAgICAgICAgICAgYWRkUHJvamVjdFRvTGlzdChuZXcgUHJvamVjdChcIlVubmFtZWQgUHJvamVjdFwiKSwgUHJvamVjdExpc3QpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgYWRkUHJvamVjdFRvTGlzdChuZXcgUHJvamVjdChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hbWUtZ2V0dGVyLWlucHV0XCIpLnZhbHVlKSwgUHJvamVjdExpc3QpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH0pXG59XG5cbi8qIGZ1bmN0aW9uIHVwZGF0ZVByb2plY3RCdXR0b25zKCkge1xuICAgIHBhZ2UucHJvamVjdEJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnByb2plY3QtYnV0dG9uXCIpO1xuICAgIHBhZ2UucHJvamVjdEJ1dHRvbnMuZm9yRWFjaCggKGl0ZW0pID0+IHtcbiAgICAgICAgaXRlbS5vbmNsaWNrID0gXG4gICAgfSlcbn1cbiAqL1xuXG5cbmV4cG9ydCB7YWRkUHJvamVjdFRvTGlzdCwgY3JlYXRlUHJvamVjdFByb21wdCwgUHJvamVjdExpc3QsIFByb2plY3RBcnJheX0iLCJjbGFzcyBQcm9qZWN0IHtcbiAgICBjb25zdHJ1Y3RvcihuYW1lKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMucHJvamVjdEl0ZW1zID0gW107XG4gICAgfVxuICAgIGFkZEl0ZW0odG9Eb0l0ZW0pIHtcbiAgICAgICAgdGhpcy5wcm9qZWN0SXRlbXMucHVzaCh0b0RvSXRlbSk7XG4gICAgfVxuICAgIHJlbW92ZUl0ZW0odG9Eb0l0ZW0pIHtcbiAgICAgICAgdGhpcy5wcm9qZWN0SXRlbXMuc3BsaWNlKHRoaXMucHJvamVjdEl0ZW1zLmluZGV4T2YodG9Eb0l0ZW0pLCAxKTtcbiAgICB9XG59XG5cbmV4cG9ydCB7UHJvamVjdH07IiwiaW1wb3J0IHBhZ2UgZnJvbSBcIi4vcGFnZVwiXG5cbmZ1bmN0aW9uIHNpZGVCYXJCdXR0b24oKSB7XG4gICAgICAgIHBhZ2Uuc2lkZUJhci5jbGFzc0xpc3QudG9nZ2xlKFwic2lkZS1iYXItaGlkZGVuXCIpO1xuICAgICAgICBwYWdlLnNpZGVCYXIuY2xhc3NMaXN0LnRvZ2dsZShcInNpZGUtYmFyLXNob3duXCIpO1xufVxuXG5leHBvcnQge3NpZGVCYXJCdXR0b259XG5cbi8vQ3JlYXRlcyBmdW5jdGlvbmFsaXR5IGZvciB0aGUgc2lkZSBiYXIgaGFtYnVyZ2VyIGJ1dHRvbiIsImNsYXNzIFRvRG9JdGVtIHtcbiAgICBjb25zdHJ1Y3RvcihuYW1lLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgICAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgfVxufVxuXG5leHBvcnQge1RvRG9JdGVtfSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IHBhZ2UgZnJvbSBcIi4vcGFnZVwiXG5pbXBvcnQgXCIuL3N0eWxlcy9zdHlsZS5jc3NcIlxuXG5pbXBvcnQgeyBzaWRlQmFyQnV0dG9uIH0gZnJvbSBcIi4vc2lkZS1iYXItYnV0dG9uXCJcbmltcG9ydCB7IGNyZWF0ZVByb2plY3RQcm9tcHQgfSBmcm9tIFwiLi9wcm9qZWN0LWxpc3RcIlxuaW1wb3J0IHsgY3JlYXRlSXRlbUlucHV0IH0gZnJvbSBcIi4vbmV3LWl0ZW0tYnV0dG9uXCJcbmltcG9ydCB7IGRlbGV0ZVByb2plY3QgfSBmcm9tIFwiLi9kZWxldGUtcHJvamVjdFwiXG5cbmltcG9ydCBUb0RvRmF2aWNvbiBmcm9tIFwiLi9hc3NldHMvdG8tZG8tZmF2aWNvbi5zdmdcIlxuXG5cbmNvbnN0IGZhdmljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKTtcbmZhdmljb24uc2V0QXR0cmlidXRlKFwiaHJlZlwiLCBUb0RvRmF2aWNvbik7XG5mYXZpY29uLnNldEF0dHJpYnV0ZShcInJlbFwiLCBcInNob3J0Y3V0IGljb25cIik7XG5kb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImhlYWRcIilbMF0uYXBwZW5kQ2hpbGQoZmF2aWNvbik7XG5cbnBhZ2UuZGVsZXRlUHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGRlbGV0ZVByb2plY3QoKTtcbn0pXG5cbnBhZ2Uuc2lkZUJhckJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIHNpZGVCYXJCdXR0b24oKTtcbn0pXG5cbnBhZ2UubmV3SXRlbUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCk9PiB7XG4gICAgaWYgKCEocGFnZS5pdGVtc0NvbnRhaW5lci5jb250YWlucyhkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5ldy1pdGVtLWNyZWF0b3JcIikpKSkge1xuICAgICAgICBjcmVhdGVJdGVtSW5wdXQoKTtcbiAgICB9XG59KVxuXG5wYWdlLm5ld1Byb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBpZiAoIShwYWdlLnByb2plY3RzTGlzdC5jb250YWlucyhkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtbmFtZS1nZXR0ZXJcIikpKSkge1xuICAgICAgICBjcmVhdGVQcm9qZWN0UHJvbXB0KCk7XG4gICAgfVxufSlcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==