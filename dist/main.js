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

.page-container {
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  overflow-y: hidden;
  gap:0
}

.main-body-container {
    width: 100vw;
    height: auto;
    flex: 1;
    display: flex;
}

.side-bar {
    display: grid;
    height: 100%;
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

.footer {
  height: 3%;
  width: 100vw;
  background-color: var(--dark-color);
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.footer a {
  display: flex;
  color: var(--white-color);
  text-decoration: none;
  font-family: "Oswald", sans-serif;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding-right: 15px
}

.footer a img {
  height: 25px;
  filter: brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(7411%) hue-rotate(52deg) brightness(117%) contrast(78%);
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
  `, "",{"version":3,"sources":["webpack://./src/styles/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Oswald&display=swap');\n\n:root {\n    --dark-color: #233142;\n    --gray-color: #455d7a;\n    --red-color: #f95959;\n    --white-color: #e3e3e3;\n    --item-color: #afafaf;\n    height: 100vh;\n    width: 100vh;\n    overflow-x: hidden;\n}\n\n* {\n    padding: 0;\n    margin: 0;\n}\n\n.page-container {\n  display: flex;\n  flex-direction: column;\n  height: 100vh;\n  width: 100vw;\n  overflow-y: hidden;\n  gap:0\n}\n\n.main-body-container {\n    width: 100vw;\n    height: auto;\n    flex: 1;\n    display: flex;\n}\n\n.side-bar {\n    display: grid;\n    height: 100%;\n    grid-template-rows: 60px 1fr;\n    position: relative;\n    background-color: var(--gray-color);\n}\n\n.projects-list {\n  grid-row: 2;\n  display: flex;\n  flex-direction: column;\n  padding-top: 15px;\n  gap: 15px;\n}\n\n.project-button {\n  height: 30px;\n  font-size: 20px;\n  font-family: \"Oswald\", sans-serif;\n  color: var(--white-color);\n  background-color: transparent;\n  appearance: none;\n  border: 0;\n}\n\n.project-button:hover {\n  background-color: #384b63;\n  cursor: pointer;\n}\n\n.side-bar-button {\n    position: absolute;\n    height: 50px;\n    left: 4px;\n    top: 4px;\n    border-radius: 100px;\n}\n\n.side-bar-button:hover {\n    background-color: #ffffff2f;\n}\n\n.new-project-button {\n  grid-row: 1 / 2;\n  display: flex;\n  justify-self: flex-end;\n  appearance: none;\n  background-color: transparent;\n  grid-column: 1 / 2;\n  border: 0;\n  width: 50px;\n  align-self: center;\n  margin-right: 4px;\n  border-radius: 100px;\n  filter: invert(100%) sepia(0%) saturate(30%) hue-rotate(229deg) brightness(112%) contrast(78%);\n}\n\n.new-project-button:hover {\n  background-color: #ffffff2f;\n  cursor: pointer;\n  \n}\n\n.side-bar-shown {\n  transition: width 300ms ease-out;\n  width: 20%;\n  grid-template-columns: 100%;\n}\n\n.side-bar-hidden {\n  transition: width 300ms ease-out;\n  width: 0%;\n  grid-template-columns: 0%;\n}\n\n.side-bar-hidden .projects-list,\n.side-bar-hidden .side-bar-heading,\n.side-bar-hidden .delete-project{\n  display: none;\n}\n\n.right-side {\n    flex-grow: 1;\n    display: flex;\n    flex-direction: column;\n}\n\n.top-bar {\n    height: 60px;\n    flex-grow: 0;\n    background-color: var(--red-color);\n    display: flex;\n    align-items: center;\n    justify-content: flex-end;\n    padding-right: 20px;\n}\n\n.content {\n    background-color: var(--white-color);\n    flex: 1;\n    position: relative;\n    display: grid;\n    grid-template-columns: 54px auto;\n    grid-template-rows: auto;\n}\n\n.heading {\n    font-family: \"Oswald\", sans-serif;\n    color: var(--white-color);\n    font-size: 2rem;\n}\n\n.new-item-button {\n  appearance: none;\n  border: 0;\n  border-radius: 100px;\n  background-color: transparent;\n  left: 4px;\n  top: 4px;\n  position: absolute;\n}\n\n.new-item-button svg:hover {\n  cursor: pointer;\n\n}\n.new-item-button:hover {\n  background-color: #c8c8c8;\n}\n\n.new-item-button svg {\n  width: 50px;\n  filter: invert(35%) sepia(15%) saturate(1092%) hue-rotate(173deg) brightness(93%) contrast(92%);\n}\n\n.project-name-getter {\n  display: flex;\n  height: 30px;\n  align-items: center;\n  justify-content: center;\n  gap: 2px;\n}\n\n.project-name-getter input {\n  background-color: #384b63;\n  appearance: none;\n  border: 0;\n  height: 30px;\n  color: var(--white-color);\n  text-align: center;\n  font-family: \"Oswald\", sans-serif;\n  font-size: 20px;\n  border-radius: 10px;\n}\n\n.project-name-getter button {\n  appearance: none;\n  background-color: #384b63;\n  border: 0;\n  height: 30px;\n  width: 30px;\n  border-radius: 10px;\n}\n\n.project-name-getter button:hover {\n  cursor: pointer;\n}\n\n.project-name-getter button svg {\n  filter: invert(100%) sepia(0%) saturate(30%) hue-rotate(229deg) brightness(112%) contrast(78%);\n  width: 30px;\n  height: 30px;\n}\n\n.side-bar-heading {\n  grid-row: 1 / 2;\n  grid-column: 1 / 2;\n  font-family: \"Oswald\", sans-serif;\n  color: var(--white-color);\n  font-size: 22px;\n  align-self: center;\n  justify-self: center;\n}\n\n.items-container {\n  grid-column: 2/3;\n  padding: 10px;\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: repeat(auto-fit, 50px);\n  gap: 20px\n}\n\n.items-container div {\n  background-color: var(--item-color);\n  border-radius: 10px;\n  display: flex;\n  padding: 2px;\n  align-items: center;\n  justify-content: flex-start;\n  gap: 4%;\n  padding-left: 12px;\n  padding-right: 12px;\n}\n\n.items-container input {\n  appearance: none;\n  background-color: var(--white-color);\n  color: var(--red-color);\n  font-family: \"Oswald\", sans-serif;\n  width: min(230px,10%);\n  height: 30px;\n  border: 0;\n  border-radius: 15px;\n  padding-left: 5px;\n}\n\n.items-container input[name=\"description\"] {\n  width: calc(min(230px,10%)*3);\n}\n\n.new-item-creator button,\n.new-item-creator button svg{\n  height: 30px;\n  width: 30px;\n}\n\n.new-item-creator svg {\n  filter: invert(100%) sepia(0%) saturate(30%) hue-rotate(229deg) brightness(112%) contrast(78%);\n}\n\n.new-item-creator button{\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: transparent;\n  border: 0;\n  margin-left: auto;\n  border-radius: 20px;\n  padding: 2px;\n}\n\n.new-item-creator button:hover,\n.delete-button:hover,\n.delete-project:hover {\n  background-color: #1d1d1d2f;\n  cursor: pointer;\n}\n\n.item-text,\n.item-desc,\n.item-dd,\n.item-priority {\n  font-family: \"Oswald\", sans-serif;\n  font-size: 15px;\n  height: 30px;\n  color: var(--dark-color)\n}\n\n.item-text,\n.item-dd {\n  width: 10%\n}\n\n.item-desc {\n  width: 20%;\n}\n\n.high-priority {\n  border-left: 5px #c40000 solid;\n}\n\n.med-priority {\n  border-left: 5px #c49000 solid;\n}\n\n.low-priority {\n  border-left: 5px #27c400 solid;\n}\n\n.high-priority, .med-priority, .low-priority {\n  display: flex;\n}\n\n.delete-button,\n.delete-button img {\n  height: 30px;\n  width: 30px;\n}\n\n.delete-button img {\n  filter: invert(100%) sepia(0%) saturate(30%) hue-rotate(229deg) brightness(112%) contrast(78%);\n}\n\n.delete-button {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: transparent;\n  border: 0;\n  margin-left: auto;\n  border-radius: 20px;\n  padding: 2px;\n}\n\n.delete-project {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-family: \"Oswald\", sans-serif;\n  color:var(--white-color);\n  background-color: transparent;\n  border: 0;\n  border-radius: 20px;\n  font-size: 1.2rem;\n  padding: 20px;\n  margin-bottom: 10px;\n  width: 80%;\n  justify-self: center;\n}\n\n.footer {\n  height: 3%;\n  width: 100vw;\n  background-color: var(--dark-color);\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n}\n\n.footer a {\n  display: flex;\n  color: var(--white-color);\n  text-decoration: none;\n  font-family: \"Oswald\", sans-serif;\n  justify-content: center;\n  align-items: center;\n  gap: 10px;\n  padding-right: 15px\n}\n\n.footer a img {\n  height: 25px;\n  filter: brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(7411%) hue-rotate(52deg) brightness(117%) contrast(78%);\n}\n\n\n\n/* @media (max-width: 700px) {\n    .right-side {\n        flex-basis: 75%;\n    }\n    .side-bar {\n        flex-basis: 25%;\n    }\n} */\n\n/* Hamburger menu */\n.hamburger-button {\n    background-color: transparent;\n    border: none;\n    width: 50px;\n    cursor: pointer;\n    display: flex;\n    padding: 0;\n    filter: invert(100%) sepia(0%) saturate(30%) hue-rotate(229deg) brightness(112%) contrast(78%);\n  }\n  .line {\n    fill: none;\n    stroke: black;\n    stroke-width: 6;\n    transition: stroke-dasharray 600ms cubic-bezier(0.4, 0, 0.2, 1),\n      stroke-dashoffset 600ms cubic-bezier(0.4, 0, 0.2, 1);\n  }\n  .line1 {\n    stroke-dasharray: 60 207;\n    stroke-width: 6;\n  }\n  .line2 {\n    stroke-dasharray: 60 60;\n    stroke-width: 6;\n  }\n  .line3 {\n    stroke-dasharray: 60 207;\n    stroke-width: 6;\n  }\n  .opened .line1 {\n    stroke-dasharray: 90 207;\n    stroke-dashoffset: -134;\n    stroke-width: 6;\n  }\n  .opened .line2 {\n    stroke-dasharray: 1 60;\n    stroke-dashoffset: -30;\n    stroke-width: 6;\n  }\n  .opened .line3 {\n    stroke-dasharray: 90 207;\n    stroke-dashoffset: -134;\n    stroke-width: 6;\n  }\n  "],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUM2RztBQUNqQjtBQUM1Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLG9IQUFvSDtBQUNwSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsdUZBQXVGLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksTUFBTSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxPQUFPLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsTUFBTSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sTUFBTSxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxNQUFNLE9BQU8sWUFBWSxXQUFXLE9BQU8sUUFBUSxZQUFZLFdBQVcsVUFBVSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sTUFBTSxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxZ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NkNBQUk7QUFDSixVQUFVLDZDQUFJO0FBQ2QsUUFBUSxpRUFBZTtBQUN2QjtBQUNBLENBQUM7O0FBRUQsNkNBQUk7QUFDSixVQUFVLDZDQUFJO0FBQ2QsUUFBUSxrRUFBbUI7QUFDM0I7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3N0eWxlcy9zdHlsZS5jc3M/ZmY5NCIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvY2hhbmdlLXByb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9jcmVhdGUtcmVtb3ZlLWl0ZW0uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9kZWxldGUtcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2xpc3QtdG9kby1pdGVtcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2xvY2FsLXN0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9uZXctaXRlbS1idXR0b24uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9wYWdlLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvcHJpb3JpdHkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9wcm9qZWN0LWxpc3QuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9wcm9qZWN0LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc2lkZS1iYXItYnV0dG9uLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvdG9kby5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9T3N3YWxkJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgOnJvb3Qge1xuICAgIC0tZGFyay1jb2xvcjogIzIzMzE0MjtcbiAgICAtLWdyYXktY29sb3I6ICM0NTVkN2E7XG4gICAgLS1yZWQtY29sb3I6ICNmOTU5NTk7XG4gICAgLS13aGl0ZS1jb2xvcjogI2UzZTNlMztcbiAgICAtLWl0ZW0tY29sb3I6ICNhZmFmYWY7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICB3aWR0aDogMTAwdmg7XG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xufVxuXG4qIHtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbjogMDtcbn1cblxuLnBhZ2UtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgd2lkdGg6IDEwMHZ3O1xuICBvdmVyZmxvdy15OiBoaWRkZW47XG4gIGdhcDowXG59XG5cbi5tYWluLWJvZHktY29udGFpbmVyIHtcbiAgICB3aWR0aDogMTAwdnc7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIGZsZXg6IDE7XG4gICAgZGlzcGxheTogZmxleDtcbn1cblxuLnNpZGUtYmFyIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDYwcHggMWZyO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmF5LWNvbG9yKTtcbn1cblxuLnByb2plY3RzLWxpc3Qge1xuICBncmlkLXJvdzogMjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcGFkZGluZy10b3A6IDE1cHg7XG4gIGdhcDogMTVweDtcbn1cblxuLnByb2plY3QtYnV0dG9uIHtcbiAgaGVpZ2h0OiAzMHB4O1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtZmFtaWx5OiBcIk9zd2FsZFwiLCBzYW5zLXNlcmlmO1xuICBjb2xvcjogdmFyKC0td2hpdGUtY29sb3IpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYXBwZWFyYW5jZTogbm9uZTtcbiAgYm9yZGVyOiAwO1xufVxuXG4ucHJvamVjdC1idXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzg0YjYzO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5zaWRlLWJhci1idXR0b24ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgbGVmdDogNHB4O1xuICAgIHRvcDogNHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xufVxuXG4uc2lkZS1iYXItYnV0dG9uOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmMmY7XG59XG5cbi5uZXctcHJvamVjdC1idXR0b24ge1xuICBncmlkLXJvdzogMSAvIDI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktc2VsZjogZmxleC1lbmQ7XG4gIGFwcGVhcmFuY2U6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBncmlkLWNvbHVtbjogMSAvIDI7XG4gIGJvcmRlcjogMDtcbiAgd2lkdGg6IDUwcHg7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgbWFyZ2luLXJpZ2h0OiA0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xuICBmaWx0ZXI6IGludmVydCgxMDAlKSBzZXBpYSgwJSkgc2F0dXJhdGUoMzAlKSBodWUtcm90YXRlKDIyOWRlZykgYnJpZ2h0bmVzcygxMTIlKSBjb250cmFzdCg3OCUpO1xufVxuXG4ubmV3LXByb2plY3QtYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjJmO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIFxufVxuXG4uc2lkZS1iYXItc2hvd24ge1xuICB0cmFuc2l0aW9uOiB3aWR0aCAzMDBtcyBlYXNlLW91dDtcbiAgd2lkdGg6IDIwJTtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMDAlO1xufVxuXG4uc2lkZS1iYXItaGlkZGVuIHtcbiAgdHJhbnNpdGlvbjogd2lkdGggMzAwbXMgZWFzZS1vdXQ7XG4gIHdpZHRoOiAwJTtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAwJTtcbn1cblxuLnNpZGUtYmFyLWhpZGRlbiAucHJvamVjdHMtbGlzdCxcbi5zaWRlLWJhci1oaWRkZW4gLnNpZGUtYmFyLWhlYWRpbmcsXG4uc2lkZS1iYXItaGlkZGVuIC5kZWxldGUtcHJvamVjdHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLnJpZ2h0LXNpZGUge1xuICAgIGZsZXgtZ3JvdzogMTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi50b3AtYmFyIHtcbiAgICBoZWlnaHQ6IDYwcHg7XG4gICAgZmxleC1ncm93OiAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXJlZC1jb2xvcik7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcbn1cblxuLmNvbnRlbnQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlLWNvbG9yKTtcbiAgICBmbGV4OiAxO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNTRweCBhdXRvO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0bztcbn1cblxuLmhlYWRpbmcge1xuICAgIGZvbnQtZmFtaWx5OiBcIk9zd2FsZFwiLCBzYW5zLXNlcmlmO1xuICAgIGNvbG9yOiB2YXIoLS13aGl0ZS1jb2xvcik7XG4gICAgZm9udC1zaXplOiAycmVtO1xufVxuXG4ubmV3LWl0ZW0tYnV0dG9uIHtcbiAgYXBwZWFyYW5jZTogbm9uZTtcbiAgYm9yZGVyOiAwO1xuICBib3JkZXItcmFkaXVzOiAxMDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGxlZnQ6IDRweDtcbiAgdG9wOiA0cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuLm5ldy1pdGVtLWJ1dHRvbiBzdmc6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG5cbn1cbi5uZXctaXRlbS1idXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzhjOGM4O1xufVxuXG4ubmV3LWl0ZW0tYnV0dG9uIHN2ZyB7XG4gIHdpZHRoOiA1MHB4O1xuICBmaWx0ZXI6IGludmVydCgzNSUpIHNlcGlhKDE1JSkgc2F0dXJhdGUoMTA5MiUpIGh1ZS1yb3RhdGUoMTczZGVnKSBicmlnaHRuZXNzKDkzJSkgY29udHJhc3QoOTIlKTtcbn1cblxuLnByb2plY3QtbmFtZS1nZXR0ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBnYXA6IDJweDtcbn1cblxuLnByb2plY3QtbmFtZS1nZXR0ZXIgaW5wdXQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzg0YjYzO1xuICBhcHBlYXJhbmNlOiBub25lO1xuICBib3JkZXI6IDA7XG4gIGhlaWdodDogMzBweDtcbiAgY29sb3I6IHZhcigtLXdoaXRlLWNvbG9yKTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LWZhbWlseTogXCJPc3dhbGRcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG4ucHJvamVjdC1uYW1lLWdldHRlciBidXR0b24ge1xuICBhcHBlYXJhbmNlOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzg0YjYzO1xuICBib3JkZXI6IDA7XG4gIGhlaWdodDogMzBweDtcbiAgd2lkdGg6IDMwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbi5wcm9qZWN0LW5hbWUtZ2V0dGVyIGJ1dHRvbjpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnByb2plY3QtbmFtZS1nZXR0ZXIgYnV0dG9uIHN2ZyB7XG4gIGZpbHRlcjogaW52ZXJ0KDEwMCUpIHNlcGlhKDAlKSBzYXR1cmF0ZSgzMCUpIGh1ZS1yb3RhdGUoMjI5ZGVnKSBicmlnaHRuZXNzKDExMiUpIGNvbnRyYXN0KDc4JSk7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG59XG5cbi5zaWRlLWJhci1oZWFkaW5nIHtcbiAgZ3JpZC1yb3c6IDEgLyAyO1xuICBncmlkLWNvbHVtbjogMSAvIDI7XG4gIGZvbnQtZmFtaWx5OiBcIk9zd2FsZFwiLCBzYW5zLXNlcmlmO1xuICBjb2xvcjogdmFyKC0td2hpdGUtY29sb3IpO1xuICBmb250LXNpemU6IDIycHg7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XG59XG5cbi5pdGVtcy1jb250YWluZXIge1xuICBncmlkLWNvbHVtbjogMi8zO1xuICBwYWRkaW5nOiAxMHB4O1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoYXV0by1maXQsIDUwcHgpO1xuICBnYXA6IDIwcHhcbn1cblxuLml0ZW1zLWNvbnRhaW5lciBkaXYge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pdGVtLWNvbG9yKTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgcGFkZGluZzogMnB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGdhcDogNCU7XG4gIHBhZGRpbmctbGVmdDogMTJweDtcbiAgcGFkZGluZy1yaWdodDogMTJweDtcbn1cblxuLml0ZW1zLWNvbnRhaW5lciBpbnB1dCB7XG4gIGFwcGVhcmFuY2U6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlLWNvbG9yKTtcbiAgY29sb3I6IHZhcigtLXJlZC1jb2xvcik7XG4gIGZvbnQtZmFtaWx5OiBcIk9zd2FsZFwiLCBzYW5zLXNlcmlmO1xuICB3aWR0aDogbWluKDIzMHB4LDEwJSk7XG4gIGhlaWdodDogMzBweDtcbiAgYm9yZGVyOiAwO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBwYWRkaW5nLWxlZnQ6IDVweDtcbn1cblxuLml0ZW1zLWNvbnRhaW5lciBpbnB1dFtuYW1lPVwiZGVzY3JpcHRpb25cIl0ge1xuICB3aWR0aDogY2FsYyhtaW4oMjMwcHgsMTAlKSozKTtcbn1cblxuLm5ldy1pdGVtLWNyZWF0b3IgYnV0dG9uLFxuLm5ldy1pdGVtLWNyZWF0b3IgYnV0dG9uIHN2Z3tcbiAgaGVpZ2h0OiAzMHB4O1xuICB3aWR0aDogMzBweDtcbn1cblxuLm5ldy1pdGVtLWNyZWF0b3Igc3ZnIHtcbiAgZmlsdGVyOiBpbnZlcnQoMTAwJSkgc2VwaWEoMCUpIHNhdHVyYXRlKDMwJSkgaHVlLXJvdGF0ZSgyMjlkZWcpIGJyaWdodG5lc3MoMTEyJSkgY29udHJhc3QoNzglKTtcbn1cblxuLm5ldy1pdGVtLWNyZWF0b3IgYnV0dG9ue1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogMDtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIHBhZGRpbmc6IDJweDtcbn1cblxuLm5ldy1pdGVtLWNyZWF0b3IgYnV0dG9uOmhvdmVyLFxuLmRlbGV0ZS1idXR0b246aG92ZXIsXG4uZGVsZXRlLXByb2plY3Q6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWQxZDFkMmY7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLml0ZW0tdGV4dCxcbi5pdGVtLWRlc2MsXG4uaXRlbS1kZCxcbi5pdGVtLXByaW9yaXR5IHtcbiAgZm9udC1mYW1pbHk6IFwiT3N3YWxkXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBjb2xvcjogdmFyKC0tZGFyay1jb2xvcilcbn1cblxuLml0ZW0tdGV4dCxcbi5pdGVtLWRkIHtcbiAgd2lkdGg6IDEwJVxufVxuXG4uaXRlbS1kZXNjIHtcbiAgd2lkdGg6IDIwJTtcbn1cblxuLmhpZ2gtcHJpb3JpdHkge1xuICBib3JkZXItbGVmdDogNXB4ICNjNDAwMDAgc29saWQ7XG59XG5cbi5tZWQtcHJpb3JpdHkge1xuICBib3JkZXItbGVmdDogNXB4ICNjNDkwMDAgc29saWQ7XG59XG5cbi5sb3ctcHJpb3JpdHkge1xuICBib3JkZXItbGVmdDogNXB4ICMyN2M0MDAgc29saWQ7XG59XG5cbi5oaWdoLXByaW9yaXR5LCAubWVkLXByaW9yaXR5LCAubG93LXByaW9yaXR5IHtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLmRlbGV0ZS1idXR0b24sXG4uZGVsZXRlLWJ1dHRvbiBpbWcge1xuICBoZWlnaHQ6IDMwcHg7XG4gIHdpZHRoOiAzMHB4O1xufVxuXG4uZGVsZXRlLWJ1dHRvbiBpbWcge1xuICBmaWx0ZXI6IGludmVydCgxMDAlKSBzZXBpYSgwJSkgc2F0dXJhdGUoMzAlKSBodWUtcm90YXRlKDIyOWRlZykgYnJpZ2h0bmVzcygxMTIlKSBjb250cmFzdCg3OCUpO1xufVxuXG4uZGVsZXRlLWJ1dHRvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiAwO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgcGFkZGluZzogMnB4O1xufVxuXG4uZGVsZXRlLXByb2plY3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZm9udC1mYW1pbHk6IFwiT3N3YWxkXCIsIHNhbnMtc2VyaWY7XG4gIGNvbG9yOnZhcigtLXdoaXRlLWNvbG9yKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogMDtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIHBhZGRpbmc6IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIHdpZHRoOiA4MCU7XG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xufVxuXG4uZm9vdGVyIHtcbiAgaGVpZ2h0OiAzJTtcbiAgd2lkdGg6IDEwMHZ3O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWNvbG9yKTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cblxuLmZvb3RlciBhIHtcbiAgZGlzcGxheTogZmxleDtcbiAgY29sb3I6IHZhcigtLXdoaXRlLWNvbG9yKTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBmb250LWZhbWlseTogXCJPc3dhbGRcIiwgc2Fucy1zZXJpZjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTBweDtcbiAgcGFkZGluZy1yaWdodDogMTVweFxufVxuXG4uZm9vdGVyIGEgaW1nIHtcbiAgaGVpZ2h0OiAyNXB4O1xuICBmaWx0ZXI6IGJyaWdodG5lc3MoMCkgc2F0dXJhdGUoMTAwJSkgaW52ZXJ0KDEwMCUpIHNlcGlhKDAlKSBzYXR1cmF0ZSg3NDExJSkgaHVlLXJvdGF0ZSg1MmRlZykgYnJpZ2h0bmVzcygxMTclKSBjb250cmFzdCg3OCUpO1xufVxuXG5cblxuLyogQG1lZGlhIChtYXgtd2lkdGg6IDcwMHB4KSB7XG4gICAgLnJpZ2h0LXNpZGUge1xuICAgICAgICBmbGV4LWJhc2lzOiA3NSU7XG4gICAgfVxuICAgIC5zaWRlLWJhciB7XG4gICAgICAgIGZsZXgtYmFzaXM6IDI1JTtcbiAgICB9XG59ICovXG5cbi8qIEhhbWJ1cmdlciBtZW51ICovXG4uaGFtYnVyZ2VyLWJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHBhZGRpbmc6IDA7XG4gICAgZmlsdGVyOiBpbnZlcnQoMTAwJSkgc2VwaWEoMCUpIHNhdHVyYXRlKDMwJSkgaHVlLXJvdGF0ZSgyMjlkZWcpIGJyaWdodG5lc3MoMTEyJSkgY29udHJhc3QoNzglKTtcbiAgfVxuICAubGluZSB7XG4gICAgZmlsbDogbm9uZTtcbiAgICBzdHJva2U6IGJsYWNrO1xuICAgIHN0cm9rZS13aWR0aDogNjtcbiAgICB0cmFuc2l0aW9uOiBzdHJva2UtZGFzaGFycmF5IDYwMG1zIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSksXG4gICAgICBzdHJva2UtZGFzaG9mZnNldCA2MDBtcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO1xuICB9XG4gIC5saW5lMSB7XG4gICAgc3Ryb2tlLWRhc2hhcnJheTogNjAgMjA3O1xuICAgIHN0cm9rZS13aWR0aDogNjtcbiAgfVxuICAubGluZTIge1xuICAgIHN0cm9rZS1kYXNoYXJyYXk6IDYwIDYwO1xuICAgIHN0cm9rZS13aWR0aDogNjtcbiAgfVxuICAubGluZTMge1xuICAgIHN0cm9rZS1kYXNoYXJyYXk6IDYwIDIwNztcbiAgICBzdHJva2Utd2lkdGg6IDY7XG4gIH1cbiAgLm9wZW5lZCAubGluZTEge1xuICAgIHN0cm9rZS1kYXNoYXJyYXk6IDkwIDIwNztcbiAgICBzdHJva2UtZGFzaG9mZnNldDogLTEzNDtcbiAgICBzdHJva2Utd2lkdGg6IDY7XG4gIH1cbiAgLm9wZW5lZCAubGluZTIge1xuICAgIHN0cm9rZS1kYXNoYXJyYXk6IDEgNjA7XG4gICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IC0zMDtcbiAgICBzdHJva2Utd2lkdGg6IDY7XG4gIH1cbiAgLm9wZW5lZCAubGluZTMge1xuICAgIHN0cm9rZS1kYXNoYXJyYXk6IDkwIDIwNztcbiAgICBzdHJva2UtZGFzaG9mZnNldDogLTEzNDtcbiAgICBzdHJva2Utd2lkdGg6IDY7XG4gIH1cbiAgYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNr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L2NzczI/ZmFtaWx5PU9zd2FsZCZkaXNwbGF5PXN3YXAnKTtcXG5cXG46cm9vdCB7XFxuICAgIC0tZGFyay1jb2xvcjogIzIzMzE0MjtcXG4gICAgLS1ncmF5LWNvbG9yOiAjNDU1ZDdhO1xcbiAgICAtLXJlZC1jb2xvcjogI2Y5NTk1OTtcXG4gICAgLS13aGl0ZS1jb2xvcjogI2UzZTNlMztcXG4gICAgLS1pdGVtLWNvbG9yOiAjYWZhZmFmO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICB3aWR0aDogMTAwdmg7XFxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcXG59XFxuXFxuKiB7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuLnBhZ2UtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIG92ZXJmbG93LXk6IGhpZGRlbjtcXG4gIGdhcDowXFxufVxcblxcbi5tYWluLWJvZHktY29udGFpbmVyIHtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICAgIGZsZXg6IDE7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5zaWRlLWJhciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA2MHB4IDFmcjtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmF5LWNvbG9yKTtcXG59XFxuXFxuLnByb2plY3RzLWxpc3Qge1xcbiAgZ3JpZC1yb3c6IDI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHBhZGRpbmctdG9wOiAxNXB4O1xcbiAgZ2FwOiAxNXB4O1xcbn1cXG5cXG4ucHJvamVjdC1idXR0b24ge1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJPc3dhbGRcXFwiLCBzYW5zLXNlcmlmO1xcbiAgY29sb3I6IHZhcigtLXdoaXRlLWNvbG9yKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYXBwZWFyYW5jZTogbm9uZTtcXG4gIGJvcmRlcjogMDtcXG59XFxuXFxuLnByb2plY3QtYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzODRiNjM7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5zaWRlLWJhci1idXR0b24ge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgbGVmdDogNHB4O1xcbiAgICB0b3A6IDRweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XFxufVxcblxcbi5zaWRlLWJhci1idXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmMmY7XFxufVxcblxcbi5uZXctcHJvamVjdC1idXR0b24ge1xcbiAgZ3JpZC1yb3c6IDEgLyAyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktc2VsZjogZmxleC1lbmQ7XFxuICBhcHBlYXJhbmNlOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBncmlkLWNvbHVtbjogMSAvIDI7XFxuICBib3JkZXI6IDA7XFxuICB3aWR0aDogNTBweDtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIG1hcmdpbi1yaWdodDogNHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTAwcHg7XFxuICBmaWx0ZXI6IGludmVydCgxMDAlKSBzZXBpYSgwJSkgc2F0dXJhdGUoMzAlKSBodWUtcm90YXRlKDIyOWRlZykgYnJpZ2h0bmVzcygxMTIlKSBjb250cmFzdCg3OCUpO1xcbn1cXG5cXG4ubmV3LXByb2plY3QtYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmYyZjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIFxcbn1cXG5cXG4uc2lkZS1iYXItc2hvd24ge1xcbiAgdHJhbnNpdGlvbjogd2lkdGggMzAwbXMgZWFzZS1vdXQ7XFxuICB3aWR0aDogMjAlO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMDAlO1xcbn1cXG5cXG4uc2lkZS1iYXItaGlkZGVuIHtcXG4gIHRyYW5zaXRpb246IHdpZHRoIDMwMG1zIGVhc2Utb3V0O1xcbiAgd2lkdGg6IDAlO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAwJTtcXG59XFxuXFxuLnNpZGUtYmFyLWhpZGRlbiAucHJvamVjdHMtbGlzdCxcXG4uc2lkZS1iYXItaGlkZGVuIC5zaWRlLWJhci1oZWFkaW5nLFxcbi5zaWRlLWJhci1oaWRkZW4gLmRlbGV0ZS1wcm9qZWN0e1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnJpZ2h0LXNpZGUge1xcbiAgICBmbGV4LWdyb3c6IDE7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi50b3AtYmFyIHtcXG4gICAgaGVpZ2h0OiA2MHB4O1xcbiAgICBmbGV4LWdyb3c6IDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXJlZC1jb2xvcik7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XFxufVxcblxcbi5jb250ZW50IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUtY29sb3IpO1xcbiAgICBmbGV4OiAxO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNTRweCBhdXRvO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG87XFxufVxcblxcbi5oZWFkaW5nIHtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJPc3dhbGRcXFwiLCBzYW5zLXNlcmlmO1xcbiAgICBjb2xvcjogdmFyKC0td2hpdGUtY29sb3IpO1xcbiAgICBmb250LXNpemU6IDJyZW07XFxufVxcblxcbi5uZXctaXRlbS1idXR0b24ge1xcbiAgYXBwZWFyYW5jZTogbm9uZTtcXG4gIGJvcmRlcjogMDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBsZWZ0OiA0cHg7XFxuICB0b3A6IDRweDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG59XFxuXFxuLm5ldy1pdGVtLWJ1dHRvbiBzdmc6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcblxcbn1cXG4ubmV3LWl0ZW0tYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNjOGM4Yzg7XFxufVxcblxcbi5uZXctaXRlbS1idXR0b24gc3ZnIHtcXG4gIHdpZHRoOiA1MHB4O1xcbiAgZmlsdGVyOiBpbnZlcnQoMzUlKSBzZXBpYSgxNSUpIHNhdHVyYXRlKDEwOTIlKSBodWUtcm90YXRlKDE3M2RlZykgYnJpZ2h0bmVzcyg5MyUpIGNvbnRyYXN0KDkyJSk7XFxufVxcblxcbi5wcm9qZWN0LW5hbWUtZ2V0dGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDJweDtcXG59XFxuXFxuLnByb2plY3QtbmFtZS1nZXR0ZXIgaW5wdXQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM4NGI2MztcXG4gIGFwcGVhcmFuY2U6IG5vbmU7XFxuICBib3JkZXI6IDA7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICBjb2xvcjogdmFyKC0td2hpdGUtY29sb3IpO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJPc3dhbGRcXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuLnByb2plY3QtbmFtZS1nZXR0ZXIgYnV0dG9uIHtcXG4gIGFwcGVhcmFuY2U6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzg0YjYzO1xcbiAgYm9yZGVyOiAwO1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgd2lkdGg6IDMwcHg7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG4ucHJvamVjdC1uYW1lLWdldHRlciBidXR0b246aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ucHJvamVjdC1uYW1lLWdldHRlciBidXR0b24gc3ZnIHtcXG4gIGZpbHRlcjogaW52ZXJ0KDEwMCUpIHNlcGlhKDAlKSBzYXR1cmF0ZSgzMCUpIGh1ZS1yb3RhdGUoMjI5ZGVnKSBicmlnaHRuZXNzKDExMiUpIGNvbnRyYXN0KDc4JSk7XFxuICB3aWR0aDogMzBweDtcXG4gIGhlaWdodDogMzBweDtcXG59XFxuXFxuLnNpZGUtYmFyLWhlYWRpbmcge1xcbiAgZ3JpZC1yb3c6IDEgLyAyO1xcbiAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJPc3dhbGRcXFwiLCBzYW5zLXNlcmlmO1xcbiAgY29sb3I6IHZhcigtLXdoaXRlLWNvbG9yKTtcXG4gIGZvbnQtc2l6ZTogMjJweDtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbn1cXG5cXG4uaXRlbXMtY29udGFpbmVyIHtcXG4gIGdyaWQtY29sdW1uOiAyLzM7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoYXV0by1maXQsIDUwcHgpO1xcbiAgZ2FwOiAyMHB4XFxufVxcblxcbi5pdGVtcy1jb250YWluZXIgZGl2IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWl0ZW0tY29sb3IpO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBwYWRkaW5nOiAycHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgZ2FwOiA0JTtcXG4gIHBhZGRpbmctbGVmdDogMTJweDtcXG4gIHBhZGRpbmctcmlnaHQ6IDEycHg7XFxufVxcblxcbi5pdGVtcy1jb250YWluZXIgaW5wdXQge1xcbiAgYXBwZWFyYW5jZTogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlLWNvbG9yKTtcXG4gIGNvbG9yOiB2YXIoLS1yZWQtY29sb3IpO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJPc3dhbGRcXFwiLCBzYW5zLXNlcmlmO1xcbiAgd2lkdGg6IG1pbigyMzBweCwxMCUpO1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgYm9yZGVyOiAwO1xcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gIHBhZGRpbmctbGVmdDogNXB4O1xcbn1cXG5cXG4uaXRlbXMtY29udGFpbmVyIGlucHV0W25hbWU9XFxcImRlc2NyaXB0aW9uXFxcIl0ge1xcbiAgd2lkdGg6IGNhbGMobWluKDIzMHB4LDEwJSkqMyk7XFxufVxcblxcbi5uZXctaXRlbS1jcmVhdG9yIGJ1dHRvbixcXG4ubmV3LWl0ZW0tY3JlYXRvciBidXR0b24gc3Zne1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgd2lkdGg6IDMwcHg7XFxufVxcblxcbi5uZXctaXRlbS1jcmVhdG9yIHN2ZyB7XFxuICBmaWx0ZXI6IGludmVydCgxMDAlKSBzZXBpYSgwJSkgc2F0dXJhdGUoMzAlKSBodWUtcm90YXRlKDIyOWRlZykgYnJpZ2h0bmVzcygxMTIlKSBjb250cmFzdCg3OCUpO1xcbn1cXG5cXG4ubmV3LWl0ZW0tY3JlYXRvciBidXR0b257XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXI6IDA7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICBwYWRkaW5nOiAycHg7XFxufVxcblxcbi5uZXctaXRlbS1jcmVhdG9yIGJ1dHRvbjpob3ZlcixcXG4uZGVsZXRlLWJ1dHRvbjpob3ZlcixcXG4uZGVsZXRlLXByb2plY3Q6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFkMWQxZDJmO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uaXRlbS10ZXh0LFxcbi5pdGVtLWRlc2MsXFxuLml0ZW0tZGQsXFxuLml0ZW0tcHJpb3JpdHkge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJPc3dhbGRcXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAxNXB4O1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgY29sb3I6IHZhcigtLWRhcmstY29sb3IpXFxufVxcblxcbi5pdGVtLXRleHQsXFxuLml0ZW0tZGQge1xcbiAgd2lkdGg6IDEwJVxcbn1cXG5cXG4uaXRlbS1kZXNjIHtcXG4gIHdpZHRoOiAyMCU7XFxufVxcblxcbi5oaWdoLXByaW9yaXR5IHtcXG4gIGJvcmRlci1sZWZ0OiA1cHggI2M0MDAwMCBzb2xpZDtcXG59XFxuXFxuLm1lZC1wcmlvcml0eSB7XFxuICBib3JkZXItbGVmdDogNXB4ICNjNDkwMDAgc29saWQ7XFxufVxcblxcbi5sb3ctcHJpb3JpdHkge1xcbiAgYm9yZGVyLWxlZnQ6IDVweCAjMjdjNDAwIHNvbGlkO1xcbn1cXG5cXG4uaGlnaC1wcmlvcml0eSwgLm1lZC1wcmlvcml0eSwgLmxvdy1wcmlvcml0eSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4uZGVsZXRlLWJ1dHRvbixcXG4uZGVsZXRlLWJ1dHRvbiBpbWcge1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgd2lkdGg6IDMwcHg7XFxufVxcblxcbi5kZWxldGUtYnV0dG9uIGltZyB7XFxuICBmaWx0ZXI6IGludmVydCgxMDAlKSBzZXBpYSgwJSkgc2F0dXJhdGUoMzAlKSBodWUtcm90YXRlKDIyOWRlZykgYnJpZ2h0bmVzcygxMTIlKSBjb250cmFzdCg3OCUpO1xcbn1cXG5cXG4uZGVsZXRlLWJ1dHRvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXI6IDA7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICBwYWRkaW5nOiAycHg7XFxufVxcblxcbi5kZWxldGUtcHJvamVjdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJPc3dhbGRcXFwiLCBzYW5zLXNlcmlmO1xcbiAgY29sb3I6dmFyKC0td2hpdGUtY29sb3IpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXI6IDA7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gIHdpZHRoOiA4MCU7XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLmZvb3RlciB7XFxuICBoZWlnaHQ6IDMlO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1jb2xvcik7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxufVxcblxcbi5mb290ZXIgYSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgY29sb3I6IHZhcigtLXdoaXRlLWNvbG9yKTtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiT3N3YWxkXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMTBweDtcXG4gIHBhZGRpbmctcmlnaHQ6IDE1cHhcXG59XFxuXFxuLmZvb3RlciBhIGltZyB7XFxuICBoZWlnaHQ6IDI1cHg7XFxuICBmaWx0ZXI6IGJyaWdodG5lc3MoMCkgc2F0dXJhdGUoMTAwJSkgaW52ZXJ0KDEwMCUpIHNlcGlhKDAlKSBzYXR1cmF0ZSg3NDExJSkgaHVlLXJvdGF0ZSg1MmRlZykgYnJpZ2h0bmVzcygxMTclKSBjb250cmFzdCg3OCUpO1xcbn1cXG5cXG5cXG5cXG4vKiBAbWVkaWEgKG1heC13aWR0aDogNzAwcHgpIHtcXG4gICAgLnJpZ2h0LXNpZGUge1xcbiAgICAgICAgZmxleC1iYXNpczogNzUlO1xcbiAgICB9XFxuICAgIC5zaWRlLWJhciB7XFxuICAgICAgICBmbGV4LWJhc2lzOiAyNSU7XFxuICAgIH1cXG59ICovXFxuXFxuLyogSGFtYnVyZ2VyIG1lbnUgKi9cXG4uaGFtYnVyZ2VyLWJ1dHRvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIHdpZHRoOiA1MHB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGZpbHRlcjogaW52ZXJ0KDEwMCUpIHNlcGlhKDAlKSBzYXR1cmF0ZSgzMCUpIGh1ZS1yb3RhdGUoMjI5ZGVnKSBicmlnaHRuZXNzKDExMiUpIGNvbnRyYXN0KDc4JSk7XFxuICB9XFxuICAubGluZSB7XFxuICAgIGZpbGw6IG5vbmU7XFxuICAgIHN0cm9rZTogYmxhY2s7XFxuICAgIHN0cm9rZS13aWR0aDogNjtcXG4gICAgdHJhbnNpdGlvbjogc3Ryb2tlLWRhc2hhcnJheSA2MDBtcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpLFxcbiAgICAgIHN0cm9rZS1kYXNob2Zmc2V0IDYwMG1zIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XFxuICB9XFxuICAubGluZTEge1xcbiAgICBzdHJva2UtZGFzaGFycmF5OiA2MCAyMDc7XFxuICAgIHN0cm9rZS13aWR0aDogNjtcXG4gIH1cXG4gIC5saW5lMiB7XFxuICAgIHN0cm9rZS1kYXNoYXJyYXk6IDYwIDYwO1xcbiAgICBzdHJva2Utd2lkdGg6IDY7XFxuICB9XFxuICAubGluZTMge1xcbiAgICBzdHJva2UtZGFzaGFycmF5OiA2MCAyMDc7XFxuICAgIHN0cm9rZS13aWR0aDogNjtcXG4gIH1cXG4gIC5vcGVuZWQgLmxpbmUxIHtcXG4gICAgc3Ryb2tlLWRhc2hhcnJheTogOTAgMjA3O1xcbiAgICBzdHJva2UtZGFzaG9mZnNldDogLTEzNDtcXG4gICAgc3Ryb2tlLXdpZHRoOiA2O1xcbiAgfVxcbiAgLm9wZW5lZCAubGluZTIge1xcbiAgICBzdHJva2UtZGFzaGFycmF5OiAxIDYwO1xcbiAgICBzdHJva2UtZGFzaG9mZnNldDogLTMwO1xcbiAgICBzdHJva2Utd2lkdGg6IDY7XFxuICB9XFxuICAub3BlbmVkIC5saW5lMyB7XFxuICAgIHN0cm9rZS1kYXNoYXJyYXk6IDkwIDIwNztcXG4gICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IC0xMzQ7XFxuICAgIHN0cm9rZS13aWR0aDogNjtcXG4gIH1cXG4gIFwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgcGFnZSBmcm9tIFwiLi9wYWdlXCI7XG5pbXBvcnQge1Byb2plY3RMaXN0fSBmcm9tIFwiLi9wcm9qZWN0LWxpc3QuanNcIlxuaW1wb3J0IHsgbGlzdFRvZG9JdGVtIH0gZnJvbSBcIi4vbGlzdC10b2RvLWl0ZW1zXCI7XG5pbXBvcnQgeyBjcmVhdGVJdGVtSW5wdXQgfSBmcm9tIFwiLi9uZXctaXRlbS1idXR0b25cIjtcblxuZnVuY3Rpb24gY2hhbmdlUHJvamVjdChidXR0b24pe1xuICAgIHBhZ2UuaXRlbXNDb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcbiAgICBwYWdlLml0ZW1zQ29udGFpbmVyLmlkID0gYnV0dG9uO1xuICAgIFByb2plY3RMaXN0W2J1dHRvbl0ucHJvamVjdEl0ZW1zLmZvckVhY2goICggaXRlbSApID0+IHtcbiAgICAgICAgbGlzdFRvZG9JdGVtKGl0ZW0pO1xuICAgIH0pXG4gICAgaWYgKFByb2plY3RMaXN0W2J1dHRvbl0ucHJvamVjdEl0ZW1zLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBjcmVhdGVJdGVtSW5wdXQoKTtcbiAgICB9XG59XG5cbmV4cG9ydCB7Y2hhbmdlUHJvamVjdH0iLCJpbXBvcnQgcGFnZSBmcm9tIFwiLi9wYWdlXCI7XG5pbXBvcnQge1RvRG9JdGVtfSBmcm9tIFwiLi90b2RvLmpzXCJcbmltcG9ydCB7UHJvamVjdExpc3R9IGZyb20gXCIuL3Byb2plY3QtbGlzdC5qc1wiXG5pbXBvcnQgeyBsaXN0VG9kb0l0ZW0gfSBmcm9tIFwiLi9saXN0LXRvZG8taXRlbXNcIjtcbmltcG9ydCB7IGFkZFByb2plY3RzVG9Mb2NhbFN0b3JhZ2UgfSBmcm9tIFwiLi9sb2NhbC1zdG9yYWdlXCI7XG5cbmZ1bmN0aW9uIHZhbGlkYXRlSXRlbShuYW1lLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpIHtcbiAgICBpZiAobmFtZS5sZW5ndGggPiAyMCB8fCBuYW1lLmxlbmd0aCA8IDEpe1xuICAgICAgICBhbGVydChcIk5hbWUgb2YgdGFzayBtdXN0IGJlIGJldHdlZW4gMSBhbmQgMjAgY2hhcmFjdGVyc1wiKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuICAgIGVsc2UgaWYgKGRlc2NyaXB0aW9uLmxlbmd0aCA+IDUwKSB7XG4gICAgICAgIGFsZXJ0KFwiRGVzY3JpcHRpb24gbXVzdCBiZSB1bmRlciA1MCBjaGFyYWN0ZXJzXCIpO1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG4gICAgZWxzZSBpZiAoZHVlRGF0ZS5sZW5ndGggPiA1MCkge1xuICAgICAgICBhbGVydChcIkR1ZSBkYXRlIG11c3QgYmUgYXQgbW9zdCA1MCBjaGFyYWN0ZXJzXCIpO1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG4gICAgZWxzZSBpZiAocHJpb3JpdHkgPiAzIHx8IHByaW9yaXR5IDwgMSB8fCBwcmlvcml0eS5sZW5ndGggPiAxKSB7XG4gICAgICAgIGFsZXJ0KFwiUHJpb3JpdHkgdmFsdWUgbXVzdCBiZSBiZXR3ZWVuIDEgYW5kIDNcIik7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUl0ZW0obmFtZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KSB7XG4gICAgaWYgKHZhbGlkYXRlSXRlbShuYW1lLnZhbHVlLCBkZXNjcmlwdGlvbi52YWx1ZSwgZHVlRGF0ZS52YWx1ZSwgcHJpb3JpdHkudmFsdWUpID09PSB0cnVlKSB7XG4gICAgICAgIFByb2plY3RMaXN0W3BhZ2UuaXRlbXNDb250YWluZXIuaWRdLmFkZEl0ZW0obmV3IFRvRG9JdGVtKG5hbWUudmFsdWUsIGRlc2NyaXB0aW9uLnZhbHVlLCBkdWVEYXRlLnZhbHVlLCBwcmlvcml0eS52YWx1ZSkpO1xuICAgICAgICBsaXN0VG9kb0l0ZW0obmV3IFRvRG9JdGVtKG5hbWUudmFsdWUsIGRlc2NyaXB0aW9uLnZhbHVlLCBkdWVEYXRlLnZhbHVlLCBwcmlvcml0eS52YWx1ZSkpO1xuICAgICAgICBhZGRQcm9qZWN0c1RvTG9jYWxTdG9yYWdlKCk7XG4gICAgfVxufVxuXG5leHBvcnQge2NyZWF0ZUl0ZW0sIHZhbGlkYXRlSXRlbX07IiwiaW1wb3J0IHsgY2hhbmdlUHJvamVjdCB9IGZyb20gXCIuL2NoYW5nZS1wcm9qZWN0XCI7XG5pbXBvcnQgeyBhZGRQcm9qZWN0c1RvTG9jYWxTdG9yYWdlIH0gZnJvbSBcIi4vbG9jYWwtc3RvcmFnZVwiO1xuaW1wb3J0IHBhZ2UgZnJvbSBcIi4vcGFnZVwiO1xuaW1wb3J0IHsgUHJvamVjdEFycmF5LCBQcm9qZWN0TGlzdCB9IGZyb20gXCIuL3Byb2plY3QtbGlzdFwiO1xuXG5mdW5jdGlvbiBkZWxldGVQcm9qZWN0KCkge1xuICAgIGlmIChjb25maXJtKGBBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIHRoZSBcIiR7cGFnZS5pdGVtc0NvbnRhaW5lci5pZH1cIiBwcm9qZWN0P2ApKSB7XG4gICAgICAgIFByb2plY3RBcnJheS5zcGxpY2UoUHJvamVjdEFycmF5LmluZGV4T2YocGFnZS5pdGVtc0NvbnRhaW5lci5pZCksMSk7XG4gICAgICAgIGNvbnNvbGUubG9nKFByb2plY3RBcnJheS5sZW5ndGgpO1xuICAgICAgICBwYWdlLnByb2plY3RzTGlzdC5yZW1vdmVDaGlsZChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBidXR0b25bbmFtZT1cIiR7cGFnZS5pdGVtc0NvbnRhaW5lci5pZH1cIl1gKSlcbiAgICAgICAgZGVsZXRlIFByb2plY3RMaXN0W3BhZ2UuaXRlbXNDb250YWluZXIuaWRdO1xuICAgICAgICBpZiAoUHJvamVjdEFycmF5Lmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgICBwYWdlLml0ZW1zQ29udGFpbmVyLmlkID0gXCJcIjtcbiAgICAgICAgICAgIHBhZ2UuaXRlbXNDb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNoYW5nZVByb2plY3QoUHJvamVjdEFycmF5WzBdLm5hbWUpXG4gICAgICAgIH1cbiAgICAgICAgYWRkUHJvamVjdHNUb0xvY2FsU3RvcmFnZSgpO1xuICAgIH1cbn1cblxuZXhwb3J0IHtkZWxldGVQcm9qZWN0fSIsImltcG9ydCBwYWdlIGZyb20gXCIuL3BhZ2VcIjtcbmltcG9ydCB7IGNoYW5nZVByaW9yaXR5IH0gZnJvbSBcIi4vcHJpb3JpdHlcIjtcbmltcG9ydCB7IFByb2plY3RMaXN0IH0gZnJvbSBcIi4vcHJvamVjdC1saXN0XCI7XG5pbXBvcnQgeCBmcm9tIFwiLi9hc3NldHMveC1pY29uLnBuZ1wiO1xuaW1wb3J0IHsgY2hhbmdlUHJvamVjdCB9IGZyb20gXCIuL2NoYW5nZS1wcm9qZWN0XCI7XG5pbXBvcnQgeyBhZGRQcm9qZWN0c1RvTG9jYWxTdG9yYWdlIH0gZnJvbSBcIi4vbG9jYWwtc3RvcmFnZVwiO1xuXG5mdW5jdGlvbiBsaXN0VG9kb0l0ZW0odG9kbykge1xuICAgIGNvbnN0IG5ld0l0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIFxuICAgIGNvbnN0IG5ld1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBuZXdUaXRsZS50ZXh0Q29udGVudCA9IHRvZG8ubmFtZTtcbiAgICBuZXdUaXRsZS5jbGFzc0xpc3QuYWRkKFwiaXRlbS10ZXh0XCIpO1xuICAgIGNvbnN0IG5ld0Rlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG5ld0Rlc2MudGV4dENvbnRlbnQgPSB0b2RvLmRlc2NyaXB0aW9uO1xuICAgIG5ld0Rlc2MuY2xhc3NMaXN0LmFkZChcIml0ZW0tZGVzY1wiKTtcbiAgICBjb25zdCBuZXdERCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbmV3REQudGV4dENvbnRlbnQgPSB0b2RvLmR1ZURhdGU7XG4gICAgbmV3REQuY2xhc3NMaXN0LmFkZChcIml0ZW0tZGRcIik7XG4gICAgY29uc3QgbmV3UHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG5ld1ByaW9yaXR5LnRleHRDb250ZW50ID0gdG9kby5wcmlvcml0eTtcbiAgICBuZXdQcmlvcml0eS5jbGFzc0xpc3QuYWRkKFwiaXRlbS1wcmlvcml0eVwiKTtcbiAgICBjaGFuZ2VQcmlvcml0eShuZXdQcmlvcml0eSwgbmV3SXRlbSk7XG5cbiAgICBjb25zdCBkZWxldGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGNvbnN0IHhJbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICB4SW1nLnNyYyA9IHg7XG4gICAgZGVsZXRlQnV0dG9uLmFwcGVuZENoaWxkKHhJbWcpO1xuICAgIGRlbGV0ZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiZGVsZXRlLWJ1dHRvblwiKTtcblxuICAgIGRlbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCk9PiB7XG4gICAgICAgIFByb2plY3RMaXN0W3BhZ2UuaXRlbXNDb250YWluZXIuaWRdLnJlbW92ZUl0ZW0odG9kbyk7XG4gICAgICAgIGFkZFByb2plY3RzVG9Mb2NhbFN0b3JhZ2UoKTtcbiAgICAgICAgY2hhbmdlUHJvamVjdChwYWdlLml0ZW1zQ29udGFpbmVyLmlkKTtcbiAgICB9KVxuXG4gICAgbmV3SXRlbS5hcHBlbmRDaGlsZChuZXdUaXRsZSk7XG4gICAgbmV3SXRlbS5hcHBlbmRDaGlsZChuZXdEZXNjKTtcbiAgICBuZXdJdGVtLmFwcGVuZENoaWxkKG5ld0REKTtcbiAgICBuZXdJdGVtLmFwcGVuZENoaWxkKG5ld1ByaW9yaXR5KTtcbiAgICBuZXdJdGVtLmFwcGVuZENoaWxkKGRlbGV0ZUJ1dHRvbik7XG5cbiAgICBwYWdlLml0ZW1zQ29udGFpbmVyLmFwcGVuZENoaWxkKG5ld0l0ZW0pO1xufVxuXG5leHBvcnQge2xpc3RUb2RvSXRlbX0iLCJpbXBvcnQgeyBhZGRQcm9qZWN0VG9MaXN0LCBQcm9qZWN0TGlzdCwgUHJvamVjdEFycmF5IH0gZnJvbSBcIi4vcHJvamVjdC1saXN0LmpzXCI7XG5pbXBvcnQgeyBQcm9qZWN0IH0gZnJvbSBcIi4vcHJvamVjdC5qc1wiO1xuaW1wb3J0IHsgVG9Eb0l0ZW0gfSBmcm9tIFwiLi90b2RvLmpzXCI7XG5cbmZ1bmN0aW9uIGFkZFByb2plY3RzVG9Mb2NhbFN0b3JhZ2UoKSB7XG4gICAgbG9jYWxTdG9yYWdlLmNsZWFyKClcbiAgICBQcm9qZWN0QXJyYXkuZm9yRWFjaCgocHJvamVjdCkgPT4gIHtcbiAgICAgICAgbGV0IHJlc3VsdEFycmF5ID0gW107XG4gICAgICAgIC8qIHJlc3VsdEFycmF5LnB1c2gocHJvamVjdC5uYW1lKTsgKi9cbiAgICAgICAgcHJvamVjdC5wcm9qZWN0SXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgaXRlbUFycmF5ID0gW2l0ZW0ubmFtZSwgaXRlbS5kZXNjcmlwdGlvbiwgaXRlbS5kdWVEYXRlLCBpdGVtLnByaW9yaXR5XTtcbiAgICAgICAgICAgIHJlc3VsdEFycmF5LnB1c2goSlNPTi5zdHJpbmdpZnkoaXRlbUFycmF5KSk7XG4gICAgICAgIH0pXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHByb2plY3QubmFtZSwgSlNPTi5zdHJpbmdpZnkocmVzdWx0QXJyYXkpKTtcbiAgICB9KVxufVxuXG5mdW5jdGlvbiBnZXRQcm9qZWN0c0Zyb21Mb2NhbFN0b3JhZ2UoKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsb2NhbFN0b3JhZ2UubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgYWRkUHJvamVjdFRvTGlzdChuZXcgUHJvamVjdChsb2NhbFN0b3JhZ2Uua2V5KGkpKSk7XG4gICAgICAgIGNvbnN0IGl0ZW1zQXJyYXkgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGxvY2FsU3RvcmFnZS5rZXkoaSkpKTtcbiAgICAgICAgaXRlbXNBcnJheS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpdGVtUGFyc2VkID0gSlNPTi5wYXJzZShpdGVtKTtcbiAgICAgICAgICAgIFByb2plY3RMaXN0W2xvY2FsU3RvcmFnZS5rZXkoaSldLmFkZEl0ZW0obmV3IFRvRG9JdGVtKGl0ZW1QYXJzZWRbMF0sIGl0ZW1QYXJzZWRbMV0sIGl0ZW1QYXJzZWRbMl0sIGl0ZW1QYXJzZWRbM10pKTtcbiAgICAgICAgfSlcbiAgICB9XG59XG5cbmV4cG9ydCB7YWRkUHJvamVjdHNUb0xvY2FsU3RvcmFnZSwgZ2V0UHJvamVjdHNGcm9tTG9jYWxTdG9yYWdlfSIsImltcG9ydCBwYWdlIGZyb20gXCIuL3BhZ2VcIjtcbmltcG9ydCB7IGNyZWF0ZUl0ZW0gfSBmcm9tIFwiLi9jcmVhdGUtcmVtb3ZlLWl0ZW1cIjtcblxuZnVuY3Rpb24gY3JlYXRlSXRlbUlucHV0KCkge1xuICAgIGNvbnN0IG5ld0l0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG5ld0l0ZW0uY2xhc3NMaXN0LmFkZChcIm5ldy1pdGVtLWNyZWF0b3JcIik7XG5cbiAgICBjb25zdCBuZXdOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIG5ld05hbWUuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcIm5hbWVcIik7XG4gICAgbmV3TmFtZS5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCBcIlRhc2sgTmFtZVwiKTtcbiAgICBuZXdOYW1lLnNldEF0dHJpYnV0ZShcIm1heGxlbmd0aFwiLCAyMCk7XG4gICAgY29uc3QgbmV3RGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgbmV3RGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcImRlc2NyaXB0aW9uXCIpO1xuICAgIG5ld0Rlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsIFwiQSBicmllZiBkZXNjcmlwdGlvbiBvZiB5b3VyIHRhc2tcIik7XG4gICAgbmV3TmFtZS5zZXRBdHRyaWJ1dGUoXCJtYXhsZW5ndGhcIiwgNTApO1xuICAgIGNvbnN0IG5ld0R1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgbmV3RHVlRGF0ZS5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwiZHVlLWRhdGVcIik7XG4gICAgbmV3RHVlRGF0ZS5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCBcIlRoZSBkdWUgZGF0ZSBvZiB5b3VyIHRhc2tcIik7XG4gICAgY29uc3QgbmV3UHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgbmV3UHJpb3JpdHkuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcInByaW9yaXR5XCIpO1xuICAgIG5ld1ByaW9yaXR5LnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsIFwiUHJpb3JpdHkgKDEtMylcIik7XG5cbiAgICBjb25zdCBuZXdDb25maXJtSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgbmV3Q29uZmlybUl0ZW0uaW5uZXJIVE1MID0gXCI8c3ZnIHhtbG5zPVxcXCJodHRwOlxcL1xcL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIHdpZHRoPVxcXCI4MDBweFxcXCIgaGVpZ2h0PVxcXCI4MDBweFxcXCIgdmlld0JveD1cXFwiMCAwIDI0IDI0XFxcIiBmaWxsPVxcXCJub25lXFxcIj48cGF0aCBkPVxcXCJNNCAxMi42MTExTDguOTIzMDggMTcuNUwyMCA2LjVcXFwiIHN0cm9rZT1cXFwiIzAwMDAwMFxcXCIgc3Ryb2tlLXdpZHRoPVxcXCIyXFxcIiBzdHJva2UtbGluZWNhcD1cXFwicm91bmRcXFwiIHN0cm9rZS1saW5lam9pbj1cXFwicm91bmRcXFwiL1xcPjwvc3ZnPlwiO1xuICAgIG5ld0NvbmZpcm1JdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKT0+IHtcbiAgICAgICAgY3JlYXRlSXRlbShuZXdOYW1lLCBuZXdEZXNjcmlwdGlvbiwgbmV3RHVlRGF0ZSwgbmV3UHJpb3JpdHkpO1xuICAgICAgICBwYWdlLml0ZW1zQ29udGFpbmVyLnJlbW92ZUNoaWxkKG5ld0l0ZW0pXG4gICAgfSlcblxuICAgIG5ld0l0ZW0uYXBwZW5kQ2hpbGQobmV3TmFtZSk7XG4gICAgbmV3SXRlbS5hcHBlbmRDaGlsZChuZXdEZXNjcmlwdGlvbik7XG4gICAgbmV3SXRlbS5hcHBlbmRDaGlsZChuZXdEdWVEYXRlKTtcbiAgICBuZXdJdGVtLmFwcGVuZENoaWxkKG5ld1ByaW9yaXR5KTtcbiAgICBuZXdJdGVtLmFwcGVuZENoaWxkKG5ld0NvbmZpcm1JdGVtKTtcblxuICAgIHBhZ2UuaXRlbXNDb250YWluZXIuYXBwZW5kQ2hpbGQobmV3SXRlbSk7XG59XG5cbmV4cG9ydCB7Y3JlYXRlSXRlbUlucHV0fSIsIi8vQ3JlYXRlcyBhbmQvb3Igc2VsZWN0cyBET00gZWxlbWVudHMgZm9yIHVzZSBpbiBvdGhlciBtb2R1bGVzXG5mdW5jdGlvbiB3ZWJQYWdlKCkge1xuXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudFwiKTtcblxuICAgIGNvbnN0IGl0ZW1zQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pdGVtcy1jb250YWluZXJcIilcblxuICAgIC8vRm9yIGFkZC1wcm9qZWN0LXRvLXNpZGUtYmFyLmpzXG4gICAgY29uc3QgcHJvamVjdHNMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0cy1saXN0XCIpO1xuICAgIGNvbnN0IGRlbGV0ZVByb2plY3RCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRlbGV0ZS1wcm9qZWN0XCIpO1xuXG4gICAgLy9Gb3Igc2lkZS1iYXItYnV0dG9uLmpzXG4gICAgY29uc3Qgc2lkZUJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2lkZS1iYXJcIik7XG4gICAgY29uc3Qgc2lkZUJhckJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2lkZS1iYXItYnV0dG9uXCIpO1xuXG4gICAgLy9Gb3IgbmV3LWl0ZW0tYnV0dG9uLmpzXG4gICAgY29uc3QgbmV3SXRlbUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmV3LWl0ZW0tYnV0dG9uXCIpO1xuXG5cbiAgICBjb25zdCBuZXdQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uZXctcHJvamVjdC1idXR0b25cIik7XG5cbiAgICBsZXQgY3VycmVudFByb2plY3QgPSBcIlwiO1xuXG4gICAgbGV0IHByb2plY3RCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wcm9qZWN0LWJ1dHRvblwiKTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIHNpZGVCYXIsXG4gICAgICAgIHNpZGVCYXJCdXR0b24sXG4gICAgICAgIHByb2plY3RzTGlzdCxcbiAgICAgICAgbmV3SXRlbUJ1dHRvbixcbiAgICAgICAgbmV3UHJvamVjdEJ1dHRvbixcbiAgICAgICAgY29udGVudCxcbiAgICAgICAgaXRlbXNDb250YWluZXIsXG4gICAgICAgIGN1cnJlbnRQcm9qZWN0LFxuICAgICAgICBwcm9qZWN0QnV0dG9ucyxcbiAgICAgICAgZGVsZXRlUHJvamVjdEJ1dHRvblxuICAgIH07XG59XG5cbmNvbnN0IHBhZ2UgPSBuZXcgd2ViUGFnZSgpO1xuXG5leHBvcnQgZGVmYXVsdCBwYWdlOyIsImZ1bmN0aW9uIGNoYW5nZVByaW9yaXR5KHByaW9yaXR5LHBhcmVudCl7XG4gICAgaWYgKHByaW9yaXR5LnRleHRDb250ZW50ID09IDMpIHtcbiAgICAgICAgcGFyZW50LmNsYXNzTGlzdC5hZGQoXCJoaWdoLXByaW9yaXR5XCIpO1xuICAgIH1cbiAgICBlbHNlIGlmIChwcmlvcml0eS50ZXh0Q29udGVudCA9PSAyKSB7XG4gICAgICAgIHBhcmVudC5jbGFzc0xpc3QuYWRkKFwibWVkLXByaW9yaXR5XCIpO1xuICAgIH1cbiAgICBlbHNlIGlmIChwcmlvcml0eS50ZXh0Q29udGVudCA9PSAxKSB7XG4gICAgICAgIHBhcmVudC5jbGFzc0xpc3QuYWRkKFwibG93LXByaW9yaXR5XCIpO1xuICAgIH1cbn1cblxuZXhwb3J0IHtjaGFuZ2VQcmlvcml0eX0iLCJpbXBvcnQgcGFnZSBmcm9tIFwiLi9wYWdlXCI7XG5pbXBvcnQge1Byb2plY3R9IGZyb20gXCIuL3Byb2plY3QuanNcIjtcbmltcG9ydCB7IGNoYW5nZVByb2plY3QgfSBmcm9tIFwiLi9jaGFuZ2UtcHJvamVjdFwiO1xuaW1wb3J0IHsgZ2V0UHJvamVjdHNGcm9tTG9jYWxTdG9yYWdlIH0gZnJvbSBcIi4vbG9jYWwtc3RvcmFnZVwiO1xuaW1wb3J0IHsgY3JlYXRlSXRlbUlucHV0IH0gZnJvbSBcIi4vbmV3LWl0ZW0tYnV0dG9uXCI7XG5cbmxldCBQcm9qZWN0TGlzdCA9IHt9O1xubGV0IFByb2plY3RBcnJheSA9IFtdO1xuXG5nZXRQcm9qZWN0c0Zyb21Mb2NhbFN0b3JhZ2UoKTtcblxuaWYgKFByb2plY3RBcnJheS5sZW5ndGggPCAxKSB7XG4gICAgYWRkUHJvamVjdFRvTGlzdChuZXcgUHJvamVjdChcIkRlZmF1bHRcIiksIFByb2plY3RMaXN0KTtcbiAgICBwYWdlLml0ZW1zQ29udGFpbmVyLmlkID0gXCJEZWZhdWx0XCI7XG4gICAgY2hhbmdlUHJvamVjdChcIkRlZmF1bHRcIik7XG59XG5cbmZ1bmN0aW9uIGFkZFByb2plY3RUb0xpc3QocHJvamVjdCkge1xuICAgIFByb2plY3RMaXN0W3Byb2plY3QubmFtZV0gPSBwcm9qZWN0O1xuICAgIFByb2plY3RBcnJheS5wdXNoKHByb2plY3QpXG5cblxuICAgIHBhZ2UucHJvamVjdHNMaXN0LmlubmVySFRNTCA9IFwiXCI7XG4gICAgZm9yIChjb25zdCBbbmFtZV0gb2YgT2JqZWN0LmVudHJpZXMoUHJvamVjdExpc3QpKSB7XG4gICAgICAgIGNvbnN0IG5ld0l0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICBuZXdJdGVtLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWJ1dHRvblwiKTtcbiAgICAgICAgbmV3SXRlbS50ZXh0Q29udGVudCA9IG5hbWU7XG4gICAgICAgIG5ld0l0ZW0ubmFtZSA9IG5hbWU7XG4gICAgICAgIG5ld0l0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpPT4ge1xuICAgICAgICAgICAgY2hhbmdlUHJvamVjdChuYW1lKTtcbiAgICAgICAgfSlcbiAgICAgICAgcGFnZS5wcm9qZWN0c0xpc3QuYXBwZW5kQ2hpbGQobmV3SXRlbSk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVQcm9qZWN0UHJvbXB0KCkge1xuICAgIGNvbnN0IG5hbWVHZXR0ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG5hbWVHZXR0ZXIuY2xhc3NMaXN0LmFkZChcInByb2plY3QtbmFtZS1nZXR0ZXJcIik7XG5cbiAgICBjb25zdCBuYW1lSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgbmFtZUlucHV0LmNsYXNzTGlzdC5hZGQoXCJuYW1lLWdldHRlci1pbnB1dFwiKTtcbiAgICBuYW1lSW5wdXQudmFsdWUgPSBcIlVubmFtZWQgUHJvamVjdFwiO1xuXG4gICAgY29uc3QgbmFtZUNvbmZpcm1CdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIG5hbWVDb25maXJtQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJuYW1lLWdldHRlci1idXR0b25cIik7XG4gICAgbmFtZUNvbmZpcm1CdXR0b24uaW5uZXJIVE1MID0gXCI8c3ZnIHhtbG5zPVxcXCJodHRwOlxcL1xcL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIHdpZHRoPVxcXCI4MDBweFxcXCIgaGVpZ2h0PVxcXCI4MDBweFxcXCIgdmlld0JveD1cXFwiMCAwIDI0IDI0XFxcIiBmaWxsPVxcXCJub25lXFxcIj48cGF0aCBkPVxcXCJNNCAxMi42MTExTDguOTIzMDggMTcuNUwyMCA2LjVcXFwiIHN0cm9rZT1cXFwiIzAwMDAwMFxcXCIgc3Ryb2tlLXdpZHRoPVxcXCIyXFxcIiBzdHJva2UtbGluZWNhcD1cXFwicm91bmRcXFwiIHN0cm9rZS1saW5lam9pbj1cXFwicm91bmRcXFwiL1xcPjwvc3ZnPlwiO1xuXG4gICAgbmFtZUdldHRlci5hcHBlbmRDaGlsZChuYW1lSW5wdXQpO1xuICAgIG5hbWVHZXR0ZXIuYXBwZW5kQ2hpbGQobmFtZUNvbmZpcm1CdXR0b24pO1xuICAgIHBhZ2UucHJvamVjdHNMaXN0LmFwcGVuZENoaWxkKG5hbWVHZXR0ZXIpO1xuICAgIFxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubmFtZS1nZXR0ZXItYnV0dG9uXCIpLmZvckVhY2goIChwcm9qZWN0QnV0dG9uKSA9PiB7XG4gICAgICAgIHByb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hbWUtZ2V0dGVyLWlucHV0XCIpLnZhbHVlLmxlbmd0aCA8IDEpIHtcbiAgICAgICAgICAgICAgICBhZGRQcm9qZWN0VG9MaXN0KG5ldyBQcm9qZWN0KFwiVW5uYW1lZCBQcm9qZWN0XCIpLCBQcm9qZWN0TGlzdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBhZGRQcm9qZWN0VG9MaXN0KG5ldyBQcm9qZWN0KGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmFtZS1nZXR0ZXItaW5wdXRcIikudmFsdWUpLCBQcm9qZWN0TGlzdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfSlcbn1cblxuLyogZnVuY3Rpb24gdXBkYXRlUHJvamVjdEJ1dHRvbnMoKSB7XG4gICAgcGFnZS5wcm9qZWN0QnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucHJvamVjdC1idXR0b25cIik7XG4gICAgcGFnZS5wcm9qZWN0QnV0dG9ucy5mb3JFYWNoKCAoaXRlbSkgPT4ge1xuICAgICAgICBpdGVtLm9uY2xpY2sgPSBcbiAgICB9KVxufVxuICovXG5cblxuZXhwb3J0IHthZGRQcm9qZWN0VG9MaXN0LCBjcmVhdGVQcm9qZWN0UHJvbXB0LCBQcm9qZWN0TGlzdCwgUHJvamVjdEFycmF5fSIsImNsYXNzIFByb2plY3Qge1xuICAgIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5wcm9qZWN0SXRlbXMgPSBbXTtcbiAgICB9XG4gICAgYWRkSXRlbSh0b0RvSXRlbSkge1xuICAgICAgICB0aGlzLnByb2plY3RJdGVtcy5wdXNoKHRvRG9JdGVtKTtcbiAgICB9XG4gICAgcmVtb3ZlSXRlbSh0b0RvSXRlbSkge1xuICAgICAgICB0aGlzLnByb2plY3RJdGVtcy5zcGxpY2UodGhpcy5wcm9qZWN0SXRlbXMuaW5kZXhPZih0b0RvSXRlbSksIDEpO1xuICAgIH1cbn1cblxuZXhwb3J0IHtQcm9qZWN0fTsiLCJpbXBvcnQgcGFnZSBmcm9tIFwiLi9wYWdlXCJcblxuZnVuY3Rpb24gc2lkZUJhckJ1dHRvbigpIHtcbiAgICAgICAgcGFnZS5zaWRlQmFyLmNsYXNzTGlzdC50b2dnbGUoXCJzaWRlLWJhci1oaWRkZW5cIik7XG4gICAgICAgIHBhZ2Uuc2lkZUJhci5jbGFzc0xpc3QudG9nZ2xlKFwic2lkZS1iYXItc2hvd25cIik7XG59XG5cbmV4cG9ydCB7c2lkZUJhckJ1dHRvbn1cblxuLy9DcmVhdGVzIGZ1bmN0aW9uYWxpdHkgZm9yIHRoZSBzaWRlIGJhciBoYW1idXJnZXIgYnV0dG9uIiwiY2xhc3MgVG9Eb0l0ZW0ge1xuICAgIGNvbnN0cnVjdG9yKG5hbWUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSkge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICB9XG59XG5cbmV4cG9ydCB7VG9Eb0l0ZW19IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgcGFnZSBmcm9tIFwiLi9wYWdlXCJcbmltcG9ydCBcIi4vc3R5bGVzL3N0eWxlLmNzc1wiXG5cbmltcG9ydCB7IHNpZGVCYXJCdXR0b24gfSBmcm9tIFwiLi9zaWRlLWJhci1idXR0b25cIlxuaW1wb3J0IHsgY3JlYXRlUHJvamVjdFByb21wdCB9IGZyb20gXCIuL3Byb2plY3QtbGlzdFwiXG5pbXBvcnQgeyBjcmVhdGVJdGVtSW5wdXQgfSBmcm9tIFwiLi9uZXctaXRlbS1idXR0b25cIlxuaW1wb3J0IHsgZGVsZXRlUHJvamVjdCB9IGZyb20gXCIuL2RlbGV0ZS1wcm9qZWN0XCJcblxuaW1wb3J0IFRvRG9GYXZpY29uIGZyb20gXCIuL2Fzc2V0cy90by1kby1mYXZpY29uLnN2Z1wiXG5cblxuY29uc3QgZmF2aWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpO1xuZmF2aWNvbi5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsIFRvRG9GYXZpY29uKTtcbmZhdmljb24uc2V0QXR0cmlidXRlKFwicmVsXCIsIFwic2hvcnRjdXQgaWNvblwiKTtcbmRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaGVhZFwiKVswXS5hcHBlbmRDaGlsZChmYXZpY29uKTtcblxucGFnZS5kZWxldGVQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgZGVsZXRlUHJvamVjdCgpO1xufSlcblxucGFnZS5zaWRlQmFyQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgc2lkZUJhckJ1dHRvbigpO1xufSlcblxucGFnZS5uZXdJdGVtQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKT0+IHtcbiAgICBpZiAoIShwYWdlLml0ZW1zQ29udGFpbmVyLmNvbnRhaW5zKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmV3LWl0ZW0tY3JlYXRvclwiKSkpKSB7XG4gICAgICAgIGNyZWF0ZUl0ZW1JbnB1dCgpO1xuICAgIH1cbn0pXG5cbnBhZ2UubmV3UHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGlmICghKHBhZ2UucHJvamVjdHNMaXN0LmNvbnRhaW5zKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1uYW1lLWdldHRlclwiKSkpKSB7XG4gICAgICAgIGNyZWF0ZVByb2plY3RQcm9tcHQoKTtcbiAgICB9XG59KVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9