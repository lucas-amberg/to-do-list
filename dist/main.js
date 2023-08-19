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
    width: 100vw;
    overflow: hidden;
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
    height: 100vh;
    flex: 1;
    display: flex;
}

.side-bar {
    display: grid;
    height: 97%;
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
    overflow: auto;
    padding-bottom: 25px;
}

.heading {
    font-family: "Oswald", sans-serif;
    color: var(--white-color);
    font-size: 2rem;
    overflow: hidden;
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
  gap: 20px;
  height: auto;
  overflow: auto;
}

.items-container div {
  background-color: var(--item-color);
  border-radius: 10px;
  display: flex;
  padding: 2px;
  align-items: center;
  height: 50px;
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
  position: fixed;
  bottom: 0px;
  overflow: hidden;
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
  
  /*Mobile*/
  @media (max-width:480px) {
    .side-bar-shown {
      width: 50%;
    }
    .right-side {
      width: 50%;
    }
    .name-getter-input {
      width: 50%;
    }
    .content {
      max-width: 100%;
      overflow-x: hidden;
      overflow-y: auto;
    }
    .new-item-creator {
      display: grid !important;
      grid-template-rows: 50px 50px;
      grid-template-columns: 40% 40% 20%;
      align-items: center;
      justify-items: center;
      align-content: center;
      justify-content: center !important;
    }
    .new-item-creator input[name="name"],
    .new-item-creator input[name="description"] {
      grid-column: 1 / 2;
    }
    .new-item-creator input[name="due-date"],
    .new-item-creator input[name="priority"] {
      grid-column: 2 / 3;
    }
    .new-item-creator input[name="name"],
    .new-item-creator input[name="due-date"] {
      grid-row: 1  / 2;
    }
    .new-item-creator input[name="description"],
    .new-item-creator input[name="priority"] {
      grid-row: 2  / 3;
    }
    .new-item-creator button {
      grid-row: 1 / 3;
      grid-column: 3 / 4;
      margin-right: 10px;
    }
    .new-item-creator input {
      width: 100px;
    }
    .items-container input[name="description"] {
      width: 100px;
    }
    .items-container {
      grid-template-rows: repeat(auto-fit, 100px);
      overflow: scroll;
      height: auto;
    }
    .items-container div{
      height: 100px;
    }
  }

  /* Tablet */

  @media (min-width: 480px) and (max-width:991px) {
    .side-bar-shown {
      width: 40%;
    }
    .right-side {
      width: 60%;
    }
  }`, "",{"version":3,"sources":["webpack://./src/styles/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Oswald&display=swap');\n\n:root {\n    --dark-color: #233142;\n    --gray-color: #455d7a;\n    --red-color: #f95959;\n    --white-color: #e3e3e3;\n    --item-color: #afafaf;\n    height: 100vh;\n    width: 100vw;\n    overflow: hidden;\n}\n\n* {\n    padding: 0;\n    margin: 0;\n}\n\n.page-container {\n  display: flex;\n  flex-direction: column;\n  height: 100vh;\n  width: 100vw;\n  overflow-y: hidden;\n  gap:0\n}\n\n.main-body-container {\n    width: 100vw;\n    height: 100vh;\n    flex: 1;\n    display: flex;\n}\n\n.side-bar {\n    display: grid;\n    height: 97%;\n    grid-template-rows: 60px 1fr;\n    position: relative;\n    background-color: var(--gray-color);\n}\n\n.projects-list {\n  grid-row: 2;\n  display: flex;\n  flex-direction: column;\n  padding-top: 15px;\n  gap: 15px;\n}\n\n.project-button {\n  height: 30px;\n  font-size: 20px;\n  font-family: \"Oswald\", sans-serif;\n  color: var(--white-color);\n  background-color: transparent;\n  appearance: none;\n  border: 0;\n}\n\n.project-button:hover {\n  background-color: #384b63;\n  cursor: pointer;\n}\n\n.side-bar-button {\n    position: absolute;\n    height: 50px;\n    left: 4px;\n    top: 4px;\n    border-radius: 100px;\n}\n\n.side-bar-button:hover {\n    background-color: #ffffff2f;\n}\n\n.new-project-button {\n  grid-row: 1 / 2;\n  display: flex;\n  justify-self: flex-end;\n  appearance: none;\n  background-color: transparent;\n  grid-column: 1 / 2;\n  border: 0;\n  width: 50px;\n  align-self: center;\n  margin-right: 4px;\n  border-radius: 100px;\n  filter: invert(100%) sepia(0%) saturate(30%) hue-rotate(229deg) brightness(112%) contrast(78%);\n}\n\n.new-project-button:hover {\n  background-color: #ffffff2f;\n  cursor: pointer;\n  \n}\n\n.side-bar-shown {\n  transition: width 300ms ease-out;\n  width: 20%;\n  grid-template-columns: 100%;\n}\n\n.side-bar-hidden {\n  transition: width 300ms ease-out;\n  width: 0%;\n  grid-template-columns: 0%;\n}\n\n.side-bar-hidden .projects-list,\n.side-bar-hidden .side-bar-heading,\n.side-bar-hidden .delete-project{\n  display: none;\n}\n\n.right-side {\n    flex-grow: 1;\n    display: flex;\n    flex-direction: column;\n}\n\n.top-bar {\n    height: 60px;\n    flex-grow: 0;\n    background-color: var(--red-color);\n    display: flex;\n    align-items: center;\n    justify-content: flex-end;\n    padding-right: 20px;\n}\n\n.content {\n    background-color: var(--white-color);\n    flex: 1;\n    position: relative;\n    display: grid;\n    grid-template-columns: 54px auto;\n    grid-template-rows: auto;\n    overflow: auto;\n    padding-bottom: 25px;\n}\n\n.heading {\n    font-family: \"Oswald\", sans-serif;\n    color: var(--white-color);\n    font-size: 2rem;\n    overflow: hidden;\n}\n\n.new-item-button {\n  appearance: none;\n  border: 0;\n  border-radius: 100px;\n  background-color: transparent;\n  left: 4px;\n  top: 4px;\n  position: absolute;\n}\n\n.new-item-button svg:hover {\n  cursor: pointer;\n\n}\n.new-item-button:hover {\n  background-color: #c8c8c8;\n}\n\n.new-item-button svg {\n  width: 50px;\n  filter: invert(35%) sepia(15%) saturate(1092%) hue-rotate(173deg) brightness(93%) contrast(92%);\n}\n\n.project-name-getter {\n  display: flex;\n  height: 30px;\n  align-items: center;\n  justify-content: center;\n  gap: 2px;\n}\n\n.project-name-getter input {\n  background-color: #384b63;\n  appearance: none;\n  border: 0;\n  height: 30px;\n  color: var(--white-color);\n  text-align: center;\n  font-family: \"Oswald\", sans-serif;\n  font-size: 20px;\n  border-radius: 10px;\n}\n\n.project-name-getter button {\n  appearance: none;\n  background-color: #384b63;\n  border: 0;\n  height: 30px;\n  width: 30px;\n  border-radius: 10px;\n}\n\n.project-name-getter button:hover {\n  cursor: pointer;\n}\n\n.project-name-getter button svg {\n  filter: invert(100%) sepia(0%) saturate(30%) hue-rotate(229deg) brightness(112%) contrast(78%);\n  width: 30px;\n  height: 30px;\n}\n\n.side-bar-heading {\n  grid-row: 1 / 2;\n  grid-column: 1 / 2;\n  font-family: \"Oswald\", sans-serif;\n  color: var(--white-color);\n  font-size: 22px;\n  align-self: center;\n  justify-self: center;\n}\n\n.items-container {\n  grid-column: 2/3;\n  padding: 10px;\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: repeat(auto-fit, 50px);\n  gap: 20px;\n  height: auto;\n  overflow: auto;\n}\n\n.items-container div {\n  background-color: var(--item-color);\n  border-radius: 10px;\n  display: flex;\n  padding: 2px;\n  align-items: center;\n  height: 50px;\n  justify-content: flex-start;\n  gap: 4%;\n  padding-left: 12px;\n  padding-right: 12px;\n}\n\n.items-container input {\n  appearance: none;\n  background-color: var(--white-color);\n  color: var(--red-color);\n  font-family: \"Oswald\", sans-serif;\n  width: min(230px,10%);\n  height: 30px;\n  border: 0;\n  border-radius: 15px;\n  padding-left: 5px;\n}\n\n.items-container input[name=\"description\"] {\n  width: calc(min(230px,10%)*3);\n}\n\n.new-item-creator button,\n.new-item-creator button svg{\n  height: 30px;\n  width: 30px;\n}\n\n.new-item-creator svg {\n  filter: invert(100%) sepia(0%) saturate(30%) hue-rotate(229deg) brightness(112%) contrast(78%);\n}\n\n.new-item-creator button{\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: transparent;\n  border: 0;\n  margin-left: auto;\n  border-radius: 20px;\n  padding: 2px;\n}\n\n.new-item-creator button:hover,\n.delete-button:hover,\n.delete-project:hover {\n  background-color: #1d1d1d2f;\n  cursor: pointer;\n}\n\n.item-text,\n.item-desc,\n.item-dd,\n.item-priority {\n  font-family: \"Oswald\", sans-serif;\n  font-size: 15px;\n  height: 30px;\n  color: var(--dark-color)\n}\n\n.item-text,\n.item-dd {\n  width: 10%\n}\n\n.item-desc {\n  width: 20%;\n}\n\n.high-priority {\n  border-left: 5px #c40000 solid;\n}\n\n.med-priority {\n  border-left: 5px #c49000 solid;\n}\n\n.low-priority {\n  border-left: 5px #27c400 solid;\n}\n\n.high-priority, .med-priority, .low-priority {\n  display: flex;\n}\n\n.delete-button,\n.delete-button img {\n  height: 30px;\n  width: 30px;\n}\n\n.delete-button img {\n  filter: invert(100%) sepia(0%) saturate(30%) hue-rotate(229deg) brightness(112%) contrast(78%);\n}\n\n.delete-button {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: transparent;\n  border: 0;\n  margin-left: auto;\n  border-radius: 20px;\n  padding: 2px;\n}\n\n.delete-project {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-family: \"Oswald\", sans-serif;\n  color:var(--white-color);\n  background-color: transparent;\n  border: 0;\n  border-radius: 20px;\n  font-size: 1.2rem;\n  padding: 20px;\n  margin-bottom: 10px;\n  width: 80%;\n  justify-self: center;\n}\n\n.footer {\n  height: 3%;\n  width: 100vw;\n  background-color: var(--dark-color);\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  position: fixed;\n  bottom: 0px;\n  overflow: hidden;\n}\n\n.footer a {\n  display: flex;\n  color: var(--white-color);\n  text-decoration: none;\n  font-family: \"Oswald\", sans-serif;\n  justify-content: center;\n  align-items: center;\n  gap: 10px;\n  padding-right: 15px\n}\n\n.footer a img {\n  height: 25px;\n  filter: brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(7411%) hue-rotate(52deg) brightness(117%) contrast(78%);\n}\n\n/* Hamburger menu */\n.hamburger-button {\n    background-color: transparent;\n    border: none;\n    width: 50px;\n    cursor: pointer;\n    display: flex;\n    padding: 0;\n    filter: invert(100%) sepia(0%) saturate(30%) hue-rotate(229deg) brightness(112%) contrast(78%);\n  }\n  .line {\n    fill: none;\n    stroke: black;\n    stroke-width: 6;\n    transition: stroke-dasharray 600ms cubic-bezier(0.4, 0, 0.2, 1),\n      stroke-dashoffset 600ms cubic-bezier(0.4, 0, 0.2, 1);\n  }\n  .line1 {\n    stroke-dasharray: 60 207;\n    stroke-width: 6;\n  }\n  .line2 {\n    stroke-dasharray: 60 60;\n    stroke-width: 6;\n  }\n  .line3 {\n    stroke-dasharray: 60 207;\n    stroke-width: 6;\n  }\n  .opened .line1 {\n    stroke-dasharray: 90 207;\n    stroke-dashoffset: -134;\n    stroke-width: 6;\n  }\n  .opened .line2 {\n    stroke-dasharray: 1 60;\n    stroke-dashoffset: -30;\n    stroke-width: 6;\n  }\n  .opened .line3 {\n    stroke-dasharray: 90 207;\n    stroke-dashoffset: -134;\n    stroke-width: 6;\n  }\n  \n  /*Mobile*/\n  @media (max-width:480px) {\n    .side-bar-shown {\n      width: 50%;\n    }\n    .right-side {\n      width: 50%;\n    }\n    .name-getter-input {\n      width: 50%;\n    }\n    .content {\n      max-width: 100%;\n      overflow-x: hidden;\n      overflow-y: auto;\n    }\n    .new-item-creator {\n      display: grid !important;\n      grid-template-rows: 50px 50px;\n      grid-template-columns: 40% 40% 20%;\n      align-items: center;\n      justify-items: center;\n      align-content: center;\n      justify-content: center !important;\n    }\n    .new-item-creator input[name=\"name\"],\n    .new-item-creator input[name=\"description\"] {\n      grid-column: 1 / 2;\n    }\n    .new-item-creator input[name=\"due-date\"],\n    .new-item-creator input[name=\"priority\"] {\n      grid-column: 2 / 3;\n    }\n    .new-item-creator input[name=\"name\"],\n    .new-item-creator input[name=\"due-date\"] {\n      grid-row: 1  / 2;\n    }\n    .new-item-creator input[name=\"description\"],\n    .new-item-creator input[name=\"priority\"] {\n      grid-row: 2  / 3;\n    }\n    .new-item-creator button {\n      grid-row: 1 / 3;\n      grid-column: 3 / 4;\n      margin-right: 10px;\n    }\n    .new-item-creator input {\n      width: 100px;\n    }\n    .items-container input[name=\"description\"] {\n      width: 100px;\n    }\n    .items-container {\n      grid-template-rows: repeat(auto-fit, 100px);\n      overflow: scroll;\n      height: auto;\n    }\n    .items-container div{\n      height: 100px;\n    }\n  }\n\n  /* Tablet */\n\n  @media (min-width: 480px) and (max-width:991px) {\n    .side-bar-shown {\n      width: 40%;\n    }\n    .right-side {\n      width: 60%;\n    }\n  }"],"sourceRoot":""}]);
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
    newDescription.setAttribute("placeholder", "Description");
    newDescription.setAttribute("maxlength", 50);
    const newDueDate = document.createElement("input");
    newDueDate.setAttribute("name", "due-date");
    newDueDate.setAttribute("placeholder", "Due Date");
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
else {
    (0,_change_project__WEBPACK_IMPORTED_MODULE_2__.changeProject)(ProjectArray[0].name);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUM2RztBQUNqQjtBQUM1Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLG9IQUFvSDtBQUNwSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHLE9BQU8sdUZBQXVGLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksTUFBTSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxPQUFPLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sTUFBTSxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxNQUFNLE9BQU8sWUFBWSxXQUFXLE9BQU8sUUFBUSxZQUFZLFdBQVcsVUFBVSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sTUFBTSxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsS0FBSyxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sWUFBWSxNQUFNLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLEtBQUssT0FBTyxNQUFNLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxPQUFPLFVBQVUsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxZQUFZLE1BQU0sS0FBSyxVQUFVLFlB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Q0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQXlCO0FBQ0U7O0FBRXNCO0FBQ0c7QUFDRDtBQUNIOztBQUVJOzs7QUFHcEQ7QUFDQSw2QkFBNkIsc0RBQVc7QUFDeEM7QUFDQTs7QUFFQSw2Q0FBSTtBQUNKLElBQUksOERBQWE7QUFDakIsQ0FBQzs7QUFFRCw2Q0FBSTtBQUNKLElBQUksZ0VBQWE7QUFDakIsQ0FBQzs7QUFFRCw2Q0FBSTtBQUNKLFVBQVUsNkNBQUk7QUFDZCxRQUFRLGlFQUFlO0FBQ3ZCO0FBQ0EsQ0FBQzs7QUFFRCw2Q0FBSTtBQUNKLFVBQVUsNkNBQUk7QUFDZCxRQUFRLGtFQUFtQjtBQUMzQjtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3N0eWxlcy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc3R5bGVzL3N0eWxlLmNzcz9mZjk0Iiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9jaGFuZ2UtcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2NyZWF0ZS1yZW1vdmUtaXRlbS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2RlbGV0ZS1wcm9qZWN0LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvbGlzdC10b2RvLWl0ZW1zLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvbG9jYWwtc3RvcmFnZS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL25ldy1pdGVtLWJ1dHRvbi5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3BhZ2UuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9wcmlvcml0eS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3Byb2plY3QtbGlzdC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zaWRlLWJhci1idXR0b24uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy90b2RvLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Pc3dhbGQmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGA6cm9vdCB7XG4gICAgLS1kYXJrLWNvbG9yOiAjMjMzMTQyO1xuICAgIC0tZ3JheS1jb2xvcjogIzQ1NWQ3YTtcbiAgICAtLXJlZC1jb2xvcjogI2Y5NTk1OTtcbiAgICAtLXdoaXRlLWNvbG9yOiAjZTNlM2UzO1xuICAgIC0taXRlbS1jb2xvcjogI2FmYWZhZjtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIHdpZHRoOiAxMDB2dztcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4qIHtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbjogMDtcbn1cblxuLnBhZ2UtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgd2lkdGg6IDEwMHZ3O1xuICBvdmVyZmxvdy15OiBoaWRkZW47XG4gIGdhcDowXG59XG5cbi5tYWluLWJvZHktY29udGFpbmVyIHtcbiAgICB3aWR0aDogMTAwdnc7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBmbGV4OiAxO1xuICAgIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5zaWRlLWJhciB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBoZWlnaHQ6IDk3JTtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDYwcHggMWZyO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmF5LWNvbG9yKTtcbn1cblxuLnByb2plY3RzLWxpc3Qge1xuICBncmlkLXJvdzogMjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcGFkZGluZy10b3A6IDE1cHg7XG4gIGdhcDogMTVweDtcbn1cblxuLnByb2plY3QtYnV0dG9uIHtcbiAgaGVpZ2h0OiAzMHB4O1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtZmFtaWx5OiBcIk9zd2FsZFwiLCBzYW5zLXNlcmlmO1xuICBjb2xvcjogdmFyKC0td2hpdGUtY29sb3IpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYXBwZWFyYW5jZTogbm9uZTtcbiAgYm9yZGVyOiAwO1xufVxuXG4ucHJvamVjdC1idXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzg0YjYzO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5zaWRlLWJhci1idXR0b24ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgbGVmdDogNHB4O1xuICAgIHRvcDogNHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xufVxuXG4uc2lkZS1iYXItYnV0dG9uOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmMmY7XG59XG5cbi5uZXctcHJvamVjdC1idXR0b24ge1xuICBncmlkLXJvdzogMSAvIDI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktc2VsZjogZmxleC1lbmQ7XG4gIGFwcGVhcmFuY2U6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBncmlkLWNvbHVtbjogMSAvIDI7XG4gIGJvcmRlcjogMDtcbiAgd2lkdGg6IDUwcHg7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgbWFyZ2luLXJpZ2h0OiA0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xuICBmaWx0ZXI6IGludmVydCgxMDAlKSBzZXBpYSgwJSkgc2F0dXJhdGUoMzAlKSBodWUtcm90YXRlKDIyOWRlZykgYnJpZ2h0bmVzcygxMTIlKSBjb250cmFzdCg3OCUpO1xufVxuXG4ubmV3LXByb2plY3QtYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjJmO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIFxufVxuXG4uc2lkZS1iYXItc2hvd24ge1xuICB0cmFuc2l0aW9uOiB3aWR0aCAzMDBtcyBlYXNlLW91dDtcbiAgd2lkdGg6IDIwJTtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMDAlO1xufVxuXG4uc2lkZS1iYXItaGlkZGVuIHtcbiAgdHJhbnNpdGlvbjogd2lkdGggMzAwbXMgZWFzZS1vdXQ7XG4gIHdpZHRoOiAwJTtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAwJTtcbn1cblxuLnNpZGUtYmFyLWhpZGRlbiAucHJvamVjdHMtbGlzdCxcbi5zaWRlLWJhci1oaWRkZW4gLnNpZGUtYmFyLWhlYWRpbmcsXG4uc2lkZS1iYXItaGlkZGVuIC5kZWxldGUtcHJvamVjdHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLnJpZ2h0LXNpZGUge1xuICAgIGZsZXgtZ3JvdzogMTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi50b3AtYmFyIHtcbiAgICBoZWlnaHQ6IDYwcHg7XG4gICAgZmxleC1ncm93OiAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXJlZC1jb2xvcik7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcbn1cblxuLmNvbnRlbnQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlLWNvbG9yKTtcbiAgICBmbGV4OiAxO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNTRweCBhdXRvO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0bztcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgICBwYWRkaW5nLWJvdHRvbTogMjVweDtcbn1cblxuLmhlYWRpbmcge1xuICAgIGZvbnQtZmFtaWx5OiBcIk9zd2FsZFwiLCBzYW5zLXNlcmlmO1xuICAgIGNvbG9yOiB2YXIoLS13aGl0ZS1jb2xvcik7XG4gICAgZm9udC1zaXplOiAycmVtO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5uZXctaXRlbS1idXR0b24ge1xuICBhcHBlYXJhbmNlOiBub25lO1xuICBib3JkZXI6IDA7XG4gIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgbGVmdDogNHB4O1xuICB0b3A6IDRweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4ubmV3LWl0ZW0tYnV0dG9uIHN2Zzpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcblxufVxuLm5ldy1pdGVtLWJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjOGM4Yzg7XG59XG5cbi5uZXctaXRlbS1idXR0b24gc3ZnIHtcbiAgd2lkdGg6IDUwcHg7XG4gIGZpbHRlcjogaW52ZXJ0KDM1JSkgc2VwaWEoMTUlKSBzYXR1cmF0ZSgxMDkyJSkgaHVlLXJvdGF0ZSgxNzNkZWcpIGJyaWdodG5lc3MoOTMlKSBjb250cmFzdCg5MiUpO1xufVxuXG4ucHJvamVjdC1uYW1lLWdldHRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGhlaWdodDogMzBweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGdhcDogMnB4O1xufVxuXG4ucHJvamVjdC1uYW1lLWdldHRlciBpbnB1dCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzODRiNjM7XG4gIGFwcGVhcmFuY2U6IG5vbmU7XG4gIGJvcmRlcjogMDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBjb2xvcjogdmFyKC0td2hpdGUtY29sb3IpO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiBcIk9zd2FsZFwiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbi5wcm9qZWN0LW5hbWUtZ2V0dGVyIGJ1dHRvbiB7XG4gIGFwcGVhcmFuY2U6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzODRiNjM7XG4gIGJvcmRlcjogMDtcbiAgaGVpZ2h0OiAzMHB4O1xuICB3aWR0aDogMzBweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLnByb2plY3QtbmFtZS1nZXR0ZXIgYnV0dG9uOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ucHJvamVjdC1uYW1lLWdldHRlciBidXR0b24gc3ZnIHtcbiAgZmlsdGVyOiBpbnZlcnQoMTAwJSkgc2VwaWEoMCUpIHNhdHVyYXRlKDMwJSkgaHVlLXJvdGF0ZSgyMjlkZWcpIGJyaWdodG5lc3MoMTEyJSkgY29udHJhc3QoNzglKTtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMzBweDtcbn1cblxuLnNpZGUtYmFyLWhlYWRpbmcge1xuICBncmlkLXJvdzogMSAvIDI7XG4gIGdyaWQtY29sdW1uOiAxIC8gMjtcbiAgZm9udC1mYW1pbHk6IFwiT3N3YWxkXCIsIHNhbnMtc2VyaWY7XG4gIGNvbG9yOiB2YXIoLS13aGl0ZS1jb2xvcik7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbn1cblxuLml0ZW1zLWNvbnRhaW5lciB7XG4gIGdyaWQtY29sdW1uOiAyLzM7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdChhdXRvLWZpdCwgNTBweCk7XG4gIGdhcDogMjBweDtcbiAgaGVpZ2h0OiBhdXRvO1xuICBvdmVyZmxvdzogYXV0bztcbn1cblxuLml0ZW1zLWNvbnRhaW5lciBkaXYge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pdGVtLWNvbG9yKTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgcGFkZGluZzogMnB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDUwcHg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgZ2FwOiA0JTtcbiAgcGFkZGluZy1sZWZ0OiAxMnB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxMnB4O1xufVxuXG4uaXRlbXMtY29udGFpbmVyIGlucHV0IHtcbiAgYXBwZWFyYW5jZTogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUtY29sb3IpO1xuICBjb2xvcjogdmFyKC0tcmVkLWNvbG9yKTtcbiAgZm9udC1mYW1pbHk6IFwiT3N3YWxkXCIsIHNhbnMtc2VyaWY7XG4gIHdpZHRoOiBtaW4oMjMwcHgsMTAlKTtcbiAgaGVpZ2h0OiAzMHB4O1xuICBib3JkZXI6IDA7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIHBhZGRpbmctbGVmdDogNXB4O1xufVxuXG4uaXRlbXMtY29udGFpbmVyIGlucHV0W25hbWU9XCJkZXNjcmlwdGlvblwiXSB7XG4gIHdpZHRoOiBjYWxjKG1pbigyMzBweCwxMCUpKjMpO1xufVxuXG4ubmV3LWl0ZW0tY3JlYXRvciBidXR0b24sXG4ubmV3LWl0ZW0tY3JlYXRvciBidXR0b24gc3Zne1xuICBoZWlnaHQ6IDMwcHg7XG4gIHdpZHRoOiAzMHB4O1xufVxuXG4ubmV3LWl0ZW0tY3JlYXRvciBzdmcge1xuICBmaWx0ZXI6IGludmVydCgxMDAlKSBzZXBpYSgwJSkgc2F0dXJhdGUoMzAlKSBodWUtcm90YXRlKDIyOWRlZykgYnJpZ2h0bmVzcygxMTIlKSBjb250cmFzdCg3OCUpO1xufVxuXG4ubmV3LWl0ZW0tY3JlYXRvciBidXR0b257XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiAwO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgcGFkZGluZzogMnB4O1xufVxuXG4ubmV3LWl0ZW0tY3JlYXRvciBidXR0b246aG92ZXIsXG4uZGVsZXRlLWJ1dHRvbjpob3Zlcixcbi5kZWxldGUtcHJvamVjdDpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxZDFkMWQyZjtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uaXRlbS10ZXh0LFxuLml0ZW0tZGVzYyxcbi5pdGVtLWRkLFxuLml0ZW0tcHJpb3JpdHkge1xuICBmb250LWZhbWlseTogXCJPc3dhbGRcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIGNvbG9yOiB2YXIoLS1kYXJrLWNvbG9yKVxufVxuXG4uaXRlbS10ZXh0LFxuLml0ZW0tZGQge1xuICB3aWR0aDogMTAlXG59XG5cbi5pdGVtLWRlc2Mge1xuICB3aWR0aDogMjAlO1xufVxuXG4uaGlnaC1wcmlvcml0eSB7XG4gIGJvcmRlci1sZWZ0OiA1cHggI2M0MDAwMCBzb2xpZDtcbn1cblxuLm1lZC1wcmlvcml0eSB7XG4gIGJvcmRlci1sZWZ0OiA1cHggI2M0OTAwMCBzb2xpZDtcbn1cblxuLmxvdy1wcmlvcml0eSB7XG4gIGJvcmRlci1sZWZ0OiA1cHggIzI3YzQwMCBzb2xpZDtcbn1cblxuLmhpZ2gtcHJpb3JpdHksIC5tZWQtcHJpb3JpdHksIC5sb3ctcHJpb3JpdHkge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uZGVsZXRlLWJ1dHRvbixcbi5kZWxldGUtYnV0dG9uIGltZyB7XG4gIGhlaWdodDogMzBweDtcbiAgd2lkdGg6IDMwcHg7XG59XG5cbi5kZWxldGUtYnV0dG9uIGltZyB7XG4gIGZpbHRlcjogaW52ZXJ0KDEwMCUpIHNlcGlhKDAlKSBzYXR1cmF0ZSgzMCUpIGh1ZS1yb3RhdGUoMjI5ZGVnKSBicmlnaHRuZXNzKDExMiUpIGNvbnRyYXN0KDc4JSk7XG59XG5cbi5kZWxldGUtYnV0dG9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IDA7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBwYWRkaW5nOiAycHg7XG59XG5cbi5kZWxldGUtcHJvamVjdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmb250LWZhbWlseTogXCJPc3dhbGRcIiwgc2Fucy1zZXJpZjtcbiAgY29sb3I6dmFyKC0td2hpdGUtY29sb3IpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiAwO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgcGFkZGluZzogMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgd2lkdGg6IDgwJTtcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XG59XG5cbi5mb290ZXIge1xuICBoZWlnaHQ6IDMlO1xuICB3aWR0aDogMTAwdnc7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstY29sb3IpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uZm9vdGVyIGEge1xuICBkaXNwbGF5OiBmbGV4O1xuICBjb2xvcjogdmFyKC0td2hpdGUtY29sb3IpO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGZvbnQtZmFtaWx5OiBcIk9zd2FsZFwiLCBzYW5zLXNlcmlmO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxNXB4XG59XG5cbi5mb290ZXIgYSBpbWcge1xuICBoZWlnaHQ6IDI1cHg7XG4gIGZpbHRlcjogYnJpZ2h0bmVzcygwKSBzYXR1cmF0ZSgxMDAlKSBpbnZlcnQoMTAwJSkgc2VwaWEoMCUpIHNhdHVyYXRlKDc0MTElKSBodWUtcm90YXRlKDUyZGVnKSBicmlnaHRuZXNzKDExNyUpIGNvbnRyYXN0KDc4JSk7XG59XG5cbi8qIEhhbWJ1cmdlciBtZW51ICovXG4uaGFtYnVyZ2VyLWJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHBhZGRpbmc6IDA7XG4gICAgZmlsdGVyOiBpbnZlcnQoMTAwJSkgc2VwaWEoMCUpIHNhdHVyYXRlKDMwJSkgaHVlLXJvdGF0ZSgyMjlkZWcpIGJyaWdodG5lc3MoMTEyJSkgY29udHJhc3QoNzglKTtcbiAgfVxuICAubGluZSB7XG4gICAgZmlsbDogbm9uZTtcbiAgICBzdHJva2U6IGJsYWNrO1xuICAgIHN0cm9rZS13aWR0aDogNjtcbiAgICB0cmFuc2l0aW9uOiBzdHJva2UtZGFzaGFycmF5IDYwMG1zIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSksXG4gICAgICBzdHJva2UtZGFzaG9mZnNldCA2MDBtcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO1xuICB9XG4gIC5saW5lMSB7XG4gICAgc3Ryb2tlLWRhc2hhcnJheTogNjAgMjA3O1xuICAgIHN0cm9rZS13aWR0aDogNjtcbiAgfVxuICAubGluZTIge1xuICAgIHN0cm9rZS1kYXNoYXJyYXk6IDYwIDYwO1xuICAgIHN0cm9rZS13aWR0aDogNjtcbiAgfVxuICAubGluZTMge1xuICAgIHN0cm9rZS1kYXNoYXJyYXk6IDYwIDIwNztcbiAgICBzdHJva2Utd2lkdGg6IDY7XG4gIH1cbiAgLm9wZW5lZCAubGluZTEge1xuICAgIHN0cm9rZS1kYXNoYXJyYXk6IDkwIDIwNztcbiAgICBzdHJva2UtZGFzaG9mZnNldDogLTEzNDtcbiAgICBzdHJva2Utd2lkdGg6IDY7XG4gIH1cbiAgLm9wZW5lZCAubGluZTIge1xuICAgIHN0cm9rZS1kYXNoYXJyYXk6IDEgNjA7XG4gICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IC0zMDtcbiAgICBzdHJva2Utd2lkdGg6IDY7XG4gIH1cbiAgLm9wZW5lZCAubGluZTMge1xuICAgIHN0cm9rZS1kYXNoYXJyYXk6IDkwIDIwNztcbiAgICBzdHJva2UtZGFzaG9mZnNldDogLTEzNDtcbiAgICBzdHJva2Utd2lkdGg6IDY7XG4gIH1cbiAgXG4gIC8qTW9iaWxlKi9cbiAgQG1lZGlhIChtYXgtd2lkdGg6NDgwcHgpIHtcbiAgICAuc2lkZS1iYXItc2hvd24ge1xuICAgICAgd2lkdGg6IDUwJTtcbiAgICB9XG4gICAgLnJpZ2h0LXNpZGUge1xuICAgICAgd2lkdGg6IDUwJTtcbiAgICB9XG4gICAgLm5hbWUtZ2V0dGVyLWlucHV0IHtcbiAgICAgIHdpZHRoOiA1MCU7XG4gICAgfVxuICAgIC5jb250ZW50IHtcbiAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgfVxuICAgIC5uZXctaXRlbS1jcmVhdG9yIHtcbiAgICAgIGRpc3BsYXk6IGdyaWQgIWltcG9ydGFudDtcbiAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogNTBweCA1MHB4O1xuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA0MCUgNDAlIDIwJTtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xuICAgIH1cbiAgICAubmV3LWl0ZW0tY3JlYXRvciBpbnB1dFtuYW1lPVwibmFtZVwiXSxcbiAgICAubmV3LWl0ZW0tY3JlYXRvciBpbnB1dFtuYW1lPVwiZGVzY3JpcHRpb25cIl0ge1xuICAgICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xuICAgIH1cbiAgICAubmV3LWl0ZW0tY3JlYXRvciBpbnB1dFtuYW1lPVwiZHVlLWRhdGVcIl0sXG4gICAgLm5ldy1pdGVtLWNyZWF0b3IgaW5wdXRbbmFtZT1cInByaW9yaXR5XCJdIHtcbiAgICAgIGdyaWQtY29sdW1uOiAyIC8gMztcbiAgICB9XG4gICAgLm5ldy1pdGVtLWNyZWF0b3IgaW5wdXRbbmFtZT1cIm5hbWVcIl0sXG4gICAgLm5ldy1pdGVtLWNyZWF0b3IgaW5wdXRbbmFtZT1cImR1ZS1kYXRlXCJdIHtcbiAgICAgIGdyaWQtcm93OiAxICAvIDI7XG4gICAgfVxuICAgIC5uZXctaXRlbS1jcmVhdG9yIGlucHV0W25hbWU9XCJkZXNjcmlwdGlvblwiXSxcbiAgICAubmV3LWl0ZW0tY3JlYXRvciBpbnB1dFtuYW1lPVwicHJpb3JpdHlcIl0ge1xuICAgICAgZ3JpZC1yb3c6IDIgIC8gMztcbiAgICB9XG4gICAgLm5ldy1pdGVtLWNyZWF0b3IgYnV0dG9uIHtcbiAgICAgIGdyaWQtcm93OiAxIC8gMztcbiAgICAgIGdyaWQtY29sdW1uOiAzIC8gNDtcbiAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICB9XG4gICAgLm5ldy1pdGVtLWNyZWF0b3IgaW5wdXQge1xuICAgICAgd2lkdGg6IDEwMHB4O1xuICAgIH1cbiAgICAuaXRlbXMtY29udGFpbmVyIGlucHV0W25hbWU9XCJkZXNjcmlwdGlvblwiXSB7XG4gICAgICB3aWR0aDogMTAwcHg7XG4gICAgfVxuICAgIC5pdGVtcy1jb250YWluZXIge1xuICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoYXV0by1maXQsIDEwMHB4KTtcbiAgICAgIG92ZXJmbG93OiBzY3JvbGw7XG4gICAgICBoZWlnaHQ6IGF1dG87XG4gICAgfVxuICAgIC5pdGVtcy1jb250YWluZXIgZGl2e1xuICAgICAgaGVpZ2h0OiAxMDBweDtcbiAgICB9XG4gIH1cblxuICAvKiBUYWJsZXQgKi9cblxuICBAbWVkaWEgKG1pbi13aWR0aDogNDgwcHgpIGFuZCAobWF4LXdpZHRoOjk5MXB4KSB7XG4gICAgLnNpZGUtYmFyLXNob3duIHtcbiAgICAgIHdpZHRoOiA0MCU7XG4gICAgfVxuICAgIC5yaWdodC1zaWRlIHtcbiAgICAgIHdpZHRoOiA2MCU7XG4gICAgfVxuICB9YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtJQUNJLHFCQUFxQjtJQUNyQixxQkFBcUI7SUFDckIsb0JBQW9CO0lBQ3BCLHNCQUFzQjtJQUN0QixxQkFBcUI7SUFDckIsYUFBYTtJQUNiLFlBQVk7SUFDWixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsU0FBUztBQUNiOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixhQUFhO0VBQ2IsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQjtBQUNGOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixPQUFPO0lBQ1AsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixXQUFXO0lBQ1gsNEJBQTRCO0lBQzVCLGtCQUFrQjtJQUNsQixtQ0FBbUM7QUFDdkM7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixpQkFBaUI7RUFDakIsU0FBUztBQUNYOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGVBQWU7RUFDZixpQ0FBaUM7RUFDakMseUJBQXlCO0VBQ3pCLDZCQUE2QjtFQUM3QixnQkFBZ0I7RUFDaEIsU0FBUztBQUNYOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGVBQWU7QUFDakI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFNBQVM7SUFDVCxRQUFRO0lBQ1Isb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksMkJBQTJCO0FBQy9COztBQUVB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O0lBQ0Usd0JBQXdCO0lBQ3hCLGVBQWU7RUFDakI7RUFDQTtJQUNFLHVCQUF1QjtJQUN2QixlQUFlO0VBQ2pCO0VBQ0E7SUFDRSx3QkFBd0I7SUFDeEIsZUFBZTtFQUNqQjtFQUNBO0lBQ0Usd0JBQXdCO0lBQ3hCLHVCQUF1QjtJQUN2QixlQUFlO0VBQ2pCO0VBQ0E7SUFDRSxzQkFBc0I7SUFDdEIsc0JBQXNCO0lBQ3RCLGVBQWU7RUFDakI7RUFDQTtJQUNFLHdCQUF3QjtJQUN4Qix1QkFBdUI7SUFDdkIsZUFBZTtFQUNqQjs7RUFFQSxTQUFTO0VBQ1Q7SUFDRTtNQUNFLFVBQVU7SUFDWjtJQUNBO01BQ0UsVUFBVTtJQUNaO0lBQ0E7TUFDRSxVQUFVO0lBQ1o7SUFDQTtNQUNFLGVBQWU7TUFDZixrQkFBa0I7TUFDbEIsZ0JBQWdCO0lBQ2xCO0lBQ0E7TUFDRSx3QkFBd0I7TUFDeEIsNkJBQTZCO01BQzdCLGtDQUFrQztNQUNsQyxtQkFBbUI7TUFDbkIscUJBQXFCO01BQ3JCLHFCQUFxQjtNQUNyQixrQ0FBa0M7SUFDcEM7SUFDQTs7TUFFRSxrQkFBa0I7SUFDcEI7SUFDQTs7TUFFRSxrQkFBa0I7SUFDcEI7SUFDQTs7TUFFRSxnQkFBZ0I7SUFDbEI7SUFDQTs7TUFFRSxnQkFBZ0I7SUFDbEI7SUFDQTtNQUNFLGVBQWU7TUFDZixrQkFBa0I7TUFDbEIsa0JBQWtCO0lBQ3BCO0lBQ0E7TUFDRSxZQUFZO0lBQ2Q7SUFDQTtNQUNFLFlBQVk7SUFDZDtJQUNBO01BQ0UsMkNBQTJDO01BQzNDLGdCQUFnQjtNQUNoQixZQUFZO0lBQ2Q7SUFDQTtNQUNFLGFBQWE7SUFDZjtFQUNGOztFQUVBLFdBQVc7O0VBRVg7SUFDRTtNQUNFLFVBQVU7SUFDWjtJQUNBO01BQ0UsVUFBVTtJQUNaO0VBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9T3N3YWxkJmRpc3BsYXk9c3dhcCcpO1xcblxcbjpyb290IHtcXG4gICAgLS1kYXJrLWNvbG9yOiAjMjMzMTQyO1xcbiAgICAtLWdyYXktY29sb3I6ICM0NTVkN2E7XFxuICAgIC0tcmVkLWNvbG9yOiAjZjk1OTU5O1xcbiAgICAtLXdoaXRlLWNvbG9yOiAjZTNlM2UzO1xcbiAgICAtLWl0ZW0tY29sb3I6ICNhZmFmYWY7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuKiB7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuLnBhZ2UtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIG92ZXJmbG93LXk6IGhpZGRlbjtcXG4gIGdhcDowXFxufVxcblxcbi5tYWluLWJvZHktY29udGFpbmVyIHtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBmbGV4OiAxO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4uc2lkZS1iYXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBoZWlnaHQ6IDk3JTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA2MHB4IDFmcjtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmF5LWNvbG9yKTtcXG59XFxuXFxuLnByb2plY3RzLWxpc3Qge1xcbiAgZ3JpZC1yb3c6IDI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHBhZGRpbmctdG9wOiAxNXB4O1xcbiAgZ2FwOiAxNXB4O1xcbn1cXG5cXG4ucHJvamVjdC1idXR0b24ge1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJPc3dhbGRcXFwiLCBzYW5zLXNlcmlmO1xcbiAgY29sb3I6IHZhcigtLXdoaXRlLWNvbG9yKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYXBwZWFyYW5jZTogbm9uZTtcXG4gIGJvcmRlcjogMDtcXG59XFxuXFxuLnByb2plY3QtYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzODRiNjM7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5zaWRlLWJhci1idXR0b24ge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgbGVmdDogNHB4O1xcbiAgICB0b3A6IDRweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XFxufVxcblxcbi5zaWRlLWJhci1idXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmMmY7XFxufVxcblxcbi5uZXctcHJvamVjdC1idXR0b24ge1xcbiAgZ3JpZC1yb3c6IDEgLyAyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktc2VsZjogZmxleC1lbmQ7XFxuICBhcHBlYXJhbmNlOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBncmlkLWNvbHVtbjogMSAvIDI7XFxuICBib3JkZXI6IDA7XFxuICB3aWR0aDogNTBweDtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIG1hcmdpbi1yaWdodDogNHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTAwcHg7XFxuICBmaWx0ZXI6IGludmVydCgxMDAlKSBzZXBpYSgwJSkgc2F0dXJhdGUoMzAlKSBodWUtcm90YXRlKDIyOWRlZykgYnJpZ2h0bmVzcygxMTIlKSBjb250cmFzdCg3OCUpO1xcbn1cXG5cXG4ubmV3LXByb2plY3QtYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmYyZjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIFxcbn1cXG5cXG4uc2lkZS1iYXItc2hvd24ge1xcbiAgdHJhbnNpdGlvbjogd2lkdGggMzAwbXMgZWFzZS1vdXQ7XFxuICB3aWR0aDogMjAlO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMDAlO1xcbn1cXG5cXG4uc2lkZS1iYXItaGlkZGVuIHtcXG4gIHRyYW5zaXRpb246IHdpZHRoIDMwMG1zIGVhc2Utb3V0O1xcbiAgd2lkdGg6IDAlO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAwJTtcXG59XFxuXFxuLnNpZGUtYmFyLWhpZGRlbiAucHJvamVjdHMtbGlzdCxcXG4uc2lkZS1iYXItaGlkZGVuIC5zaWRlLWJhci1oZWFkaW5nLFxcbi5zaWRlLWJhci1oaWRkZW4gLmRlbGV0ZS1wcm9qZWN0e1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnJpZ2h0LXNpZGUge1xcbiAgICBmbGV4LWdyb3c6IDE7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi50b3AtYmFyIHtcXG4gICAgaGVpZ2h0OiA2MHB4O1xcbiAgICBmbGV4LWdyb3c6IDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXJlZC1jb2xvcik7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XFxufVxcblxcbi5jb250ZW50IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUtY29sb3IpO1xcbiAgICBmbGV4OiAxO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNTRweCBhdXRvO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG87XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMjVweDtcXG59XFxuXFxuLmhlYWRpbmcge1xcbiAgICBmb250LWZhbWlseTogXFxcIk9zd2FsZFxcXCIsIHNhbnMtc2VyaWY7XFxuICAgIGNvbG9yOiB2YXIoLS13aGl0ZS1jb2xvcik7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuLm5ldy1pdGVtLWJ1dHRvbiB7XFxuICBhcHBlYXJhbmNlOiBub25lO1xcbiAgYm9yZGVyOiAwO1xcbiAgYm9yZGVyLXJhZGl1czogMTAwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGxlZnQ6IDRweDtcXG4gIHRvcDogNHB4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbn1cXG5cXG4ubmV3LWl0ZW0tYnV0dG9uIHN2Zzpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuXFxufVxcbi5uZXctaXRlbS1idXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2M4YzhjODtcXG59XFxuXFxuLm5ldy1pdGVtLWJ1dHRvbiBzdmcge1xcbiAgd2lkdGg6IDUwcHg7XFxuICBmaWx0ZXI6IGludmVydCgzNSUpIHNlcGlhKDE1JSkgc2F0dXJhdGUoMTA5MiUpIGh1ZS1yb3RhdGUoMTczZGVnKSBicmlnaHRuZXNzKDkzJSkgY29udHJhc3QoOTIlKTtcXG59XFxuXFxuLnByb2plY3QtbmFtZS1nZXR0ZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGhlaWdodDogMzBweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogMnB4O1xcbn1cXG5cXG4ucHJvamVjdC1uYW1lLWdldHRlciBpbnB1dCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzg0YjYzO1xcbiAgYXBwZWFyYW5jZTogbm9uZTtcXG4gIGJvcmRlcjogMDtcXG4gIGhlaWdodDogMzBweDtcXG4gIGNvbG9yOiB2YXIoLS13aGl0ZS1jb2xvcik7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LWZhbWlseTogXFxcIk9zd2FsZFxcXCIsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG4ucHJvamVjdC1uYW1lLWdldHRlciBidXR0b24ge1xcbiAgYXBwZWFyYW5jZTogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzODRiNjM7XFxuICBib3JkZXI6IDA7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICB3aWR0aDogMzBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbi5wcm9qZWN0LW5hbWUtZ2V0dGVyIGJ1dHRvbjpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5wcm9qZWN0LW5hbWUtZ2V0dGVyIGJ1dHRvbiBzdmcge1xcbiAgZmlsdGVyOiBpbnZlcnQoMTAwJSkgc2VwaWEoMCUpIHNhdHVyYXRlKDMwJSkgaHVlLXJvdGF0ZSgyMjlkZWcpIGJyaWdodG5lc3MoMTEyJSkgY29udHJhc3QoNzglKTtcXG4gIHdpZHRoOiAzMHB4O1xcbiAgaGVpZ2h0OiAzMHB4O1xcbn1cXG5cXG4uc2lkZS1iYXItaGVhZGluZyB7XFxuICBncmlkLXJvdzogMSAvIDI7XFxuICBncmlkLWNvbHVtbjogMSAvIDI7XFxuICBmb250LWZhbWlseTogXFxcIk9zd2FsZFxcXCIsIHNhbnMtc2VyaWY7XFxuICBjb2xvcjogdmFyKC0td2hpdGUtY29sb3IpO1xcbiAgZm9udC1zaXplOiAyMnB4O1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi5pdGVtcy1jb250YWluZXIge1xcbiAgZ3JpZC1jb2x1bW46IDIvMztcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdChhdXRvLWZpdCwgNTBweCk7XFxuICBnYXA6IDIwcHg7XFxuICBoZWlnaHQ6IGF1dG87XFxuICBvdmVyZmxvdzogYXV0bztcXG59XFxuXFxuLml0ZW1zLWNvbnRhaW5lciBkaXYge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taXRlbS1jb2xvcik7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHBhZGRpbmc6IDJweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBnYXA6IDQlO1xcbiAgcGFkZGluZy1sZWZ0OiAxMnB4O1xcbiAgcGFkZGluZy1yaWdodDogMTJweDtcXG59XFxuXFxuLml0ZW1zLWNvbnRhaW5lciBpbnB1dCB7XFxuICBhcHBlYXJhbmNlOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUtY29sb3IpO1xcbiAgY29sb3I6IHZhcigtLXJlZC1jb2xvcik7XFxuICBmb250LWZhbWlseTogXFxcIk9zd2FsZFxcXCIsIHNhbnMtc2VyaWY7XFxuICB3aWR0aDogbWluKDIzMHB4LDEwJSk7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICBib3JkZXI6IDA7XFxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XFxufVxcblxcbi5pdGVtcy1jb250YWluZXIgaW5wdXRbbmFtZT1cXFwiZGVzY3JpcHRpb25cXFwiXSB7XFxuICB3aWR0aDogY2FsYyhtaW4oMjMwcHgsMTAlKSozKTtcXG59XFxuXFxuLm5ldy1pdGVtLWNyZWF0b3IgYnV0dG9uLFxcbi5uZXctaXRlbS1jcmVhdG9yIGJ1dHRvbiBzdmd7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICB3aWR0aDogMzBweDtcXG59XFxuXFxuLm5ldy1pdGVtLWNyZWF0b3Igc3ZnIHtcXG4gIGZpbHRlcjogaW52ZXJ0KDEwMCUpIHNlcGlhKDAlKSBzYXR1cmF0ZSgzMCUpIGh1ZS1yb3RhdGUoMjI5ZGVnKSBicmlnaHRuZXNzKDExMiUpIGNvbnRyYXN0KDc4JSk7XFxufVxcblxcbi5uZXctaXRlbS1jcmVhdG9yIGJ1dHRvbntcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlcjogMDtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gIHBhZGRpbmc6IDJweDtcXG59XFxuXFxuLm5ldy1pdGVtLWNyZWF0b3IgYnV0dG9uOmhvdmVyLFxcbi5kZWxldGUtYnV0dG9uOmhvdmVyLFxcbi5kZWxldGUtcHJvamVjdDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWQxZDFkMmY7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5pdGVtLXRleHQsXFxuLml0ZW0tZGVzYyxcXG4uaXRlbS1kZCxcXG4uaXRlbS1wcmlvcml0eSB7XFxuICBmb250LWZhbWlseTogXFxcIk9zd2FsZFxcXCIsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDE1cHg7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICBjb2xvcjogdmFyKC0tZGFyay1jb2xvcilcXG59XFxuXFxuLml0ZW0tdGV4dCxcXG4uaXRlbS1kZCB7XFxuICB3aWR0aDogMTAlXFxufVxcblxcbi5pdGVtLWRlc2Mge1xcbiAgd2lkdGg6IDIwJTtcXG59XFxuXFxuLmhpZ2gtcHJpb3JpdHkge1xcbiAgYm9yZGVyLWxlZnQ6IDVweCAjYzQwMDAwIHNvbGlkO1xcbn1cXG5cXG4ubWVkLXByaW9yaXR5IHtcXG4gIGJvcmRlci1sZWZ0OiA1cHggI2M0OTAwMCBzb2xpZDtcXG59XFxuXFxuLmxvdy1wcmlvcml0eSB7XFxuICBib3JkZXItbGVmdDogNXB4ICMyN2M0MDAgc29saWQ7XFxufVxcblxcbi5oaWdoLXByaW9yaXR5LCAubWVkLXByaW9yaXR5LCAubG93LXByaW9yaXR5IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5kZWxldGUtYnV0dG9uLFxcbi5kZWxldGUtYnV0dG9uIGltZyB7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICB3aWR0aDogMzBweDtcXG59XFxuXFxuLmRlbGV0ZS1idXR0b24gaW1nIHtcXG4gIGZpbHRlcjogaW52ZXJ0KDEwMCUpIHNlcGlhKDAlKSBzYXR1cmF0ZSgzMCUpIGh1ZS1yb3RhdGUoMjI5ZGVnKSBicmlnaHRuZXNzKDExMiUpIGNvbnRyYXN0KDc4JSk7XFxufVxcblxcbi5kZWxldGUtYnV0dG9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlcjogMDtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gIHBhZGRpbmc6IDJweDtcXG59XFxuXFxuLmRlbGV0ZS1wcm9qZWN0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBmb250LWZhbWlseTogXFxcIk9zd2FsZFxcXCIsIHNhbnMtc2VyaWY7XFxuICBjb2xvcjp2YXIoLS13aGl0ZS1jb2xvcik7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlcjogMDtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgd2lkdGg6IDgwJTtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbn1cXG5cXG4uZm9vdGVyIHtcXG4gIGhlaWdodDogMyU7XFxuICB3aWR0aDogMTAwdnc7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWNvbG9yKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGJvdHRvbTogMHB4O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuLmZvb3RlciBhIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBjb2xvcjogdmFyKC0td2hpdGUtY29sb3IpO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJPc3dhbGRcXFwiLCBzYW5zLXNlcmlmO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxMHB4O1xcbiAgcGFkZGluZy1yaWdodDogMTVweFxcbn1cXG5cXG4uZm9vdGVyIGEgaW1nIHtcXG4gIGhlaWdodDogMjVweDtcXG4gIGZpbHRlcjogYnJpZ2h0bmVzcygwKSBzYXR1cmF0ZSgxMDAlKSBpbnZlcnQoMTAwJSkgc2VwaWEoMCUpIHNhdHVyYXRlKDc0MTElKSBodWUtcm90YXRlKDUyZGVnKSBicmlnaHRuZXNzKDExNyUpIGNvbnRyYXN0KDc4JSk7XFxufVxcblxcbi8qIEhhbWJ1cmdlciBtZW51ICovXFxuLmhhbWJ1cmdlci1idXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICB3aWR0aDogNTBweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBmaWx0ZXI6IGludmVydCgxMDAlKSBzZXBpYSgwJSkgc2F0dXJhdGUoMzAlKSBodWUtcm90YXRlKDIyOWRlZykgYnJpZ2h0bmVzcygxMTIlKSBjb250cmFzdCg3OCUpO1xcbiAgfVxcbiAgLmxpbmUge1xcbiAgICBmaWxsOiBub25lO1xcbiAgICBzdHJva2U6IGJsYWNrO1xcbiAgICBzdHJva2Utd2lkdGg6IDY7XFxuICAgIHRyYW5zaXRpb246IHN0cm9rZS1kYXNoYXJyYXkgNjAwbXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKSxcXG4gICAgICBzdHJva2UtZGFzaG9mZnNldCA2MDBtcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO1xcbiAgfVxcbiAgLmxpbmUxIHtcXG4gICAgc3Ryb2tlLWRhc2hhcnJheTogNjAgMjA3O1xcbiAgICBzdHJva2Utd2lkdGg6IDY7XFxuICB9XFxuICAubGluZTIge1xcbiAgICBzdHJva2UtZGFzaGFycmF5OiA2MCA2MDtcXG4gICAgc3Ryb2tlLXdpZHRoOiA2O1xcbiAgfVxcbiAgLmxpbmUzIHtcXG4gICAgc3Ryb2tlLWRhc2hhcnJheTogNjAgMjA3O1xcbiAgICBzdHJva2Utd2lkdGg6IDY7XFxuICB9XFxuICAub3BlbmVkIC5saW5lMSB7XFxuICAgIHN0cm9rZS1kYXNoYXJyYXk6IDkwIDIwNztcXG4gICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IC0xMzQ7XFxuICAgIHN0cm9rZS13aWR0aDogNjtcXG4gIH1cXG4gIC5vcGVuZWQgLmxpbmUyIHtcXG4gICAgc3Ryb2tlLWRhc2hhcnJheTogMSA2MDtcXG4gICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IC0zMDtcXG4gICAgc3Ryb2tlLXdpZHRoOiA2O1xcbiAgfVxcbiAgLm9wZW5lZCAubGluZTMge1xcbiAgICBzdHJva2UtZGFzaGFycmF5OiA5MCAyMDc7XFxuICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAtMTM0O1xcbiAgICBzdHJva2Utd2lkdGg6IDY7XFxuICB9XFxuICBcXG4gIC8qTW9iaWxlKi9cXG4gIEBtZWRpYSAobWF4LXdpZHRoOjQ4MHB4KSB7XFxuICAgIC5zaWRlLWJhci1zaG93biB7XFxuICAgICAgd2lkdGg6IDUwJTtcXG4gICAgfVxcbiAgICAucmlnaHQtc2lkZSB7XFxuICAgICAgd2lkdGg6IDUwJTtcXG4gICAgfVxcbiAgICAubmFtZS1nZXR0ZXItaW5wdXQge1xcbiAgICAgIHdpZHRoOiA1MCU7XFxuICAgIH1cXG4gICAgLmNvbnRlbnQge1xcbiAgICAgIG1heC13aWR0aDogMTAwJTtcXG4gICAgICBvdmVyZmxvdy14OiBoaWRkZW47XFxuICAgICAgb3ZlcmZsb3cteTogYXV0bztcXG4gICAgfVxcbiAgICAubmV3LWl0ZW0tY3JlYXRvciB7XFxuICAgICAgZGlzcGxheTogZ3JpZCAhaW1wb3J0YW50O1xcbiAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogNTBweCA1MHB4O1xcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNDAlIDQwJSAyMCU7XFxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XFxuICAgIH1cXG4gICAgLm5ldy1pdGVtLWNyZWF0b3IgaW5wdXRbbmFtZT1cXFwibmFtZVxcXCJdLFxcbiAgICAubmV3LWl0ZW0tY3JlYXRvciBpbnB1dFtuYW1lPVxcXCJkZXNjcmlwdGlvblxcXCJdIHtcXG4gICAgICBncmlkLWNvbHVtbjogMSAvIDI7XFxuICAgIH1cXG4gICAgLm5ldy1pdGVtLWNyZWF0b3IgaW5wdXRbbmFtZT1cXFwiZHVlLWRhdGVcXFwiXSxcXG4gICAgLm5ldy1pdGVtLWNyZWF0b3IgaW5wdXRbbmFtZT1cXFwicHJpb3JpdHlcXFwiXSB7XFxuICAgICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgICB9XFxuICAgIC5uZXctaXRlbS1jcmVhdG9yIGlucHV0W25hbWU9XFxcIm5hbWVcXFwiXSxcXG4gICAgLm5ldy1pdGVtLWNyZWF0b3IgaW5wdXRbbmFtZT1cXFwiZHVlLWRhdGVcXFwiXSB7XFxuICAgICAgZ3JpZC1yb3c6IDEgIC8gMjtcXG4gICAgfVxcbiAgICAubmV3LWl0ZW0tY3JlYXRvciBpbnB1dFtuYW1lPVxcXCJkZXNjcmlwdGlvblxcXCJdLFxcbiAgICAubmV3LWl0ZW0tY3JlYXRvciBpbnB1dFtuYW1lPVxcXCJwcmlvcml0eVxcXCJdIHtcXG4gICAgICBncmlkLXJvdzogMiAgLyAzO1xcbiAgICB9XFxuICAgIC5uZXctaXRlbS1jcmVhdG9yIGJ1dHRvbiB7XFxuICAgICAgZ3JpZC1yb3c6IDEgLyAzO1xcbiAgICAgIGdyaWQtY29sdW1uOiAzIC8gNDtcXG4gICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxuICAgIH1cXG4gICAgLm5ldy1pdGVtLWNyZWF0b3IgaW5wdXQge1xcbiAgICAgIHdpZHRoOiAxMDBweDtcXG4gICAgfVxcbiAgICAuaXRlbXMtY29udGFpbmVyIGlucHV0W25hbWU9XFxcImRlc2NyaXB0aW9uXFxcIl0ge1xcbiAgICAgIHdpZHRoOiAxMDBweDtcXG4gICAgfVxcbiAgICAuaXRlbXMtY29udGFpbmVyIHtcXG4gICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdChhdXRvLWZpdCwgMTAwcHgpO1xcbiAgICAgIG92ZXJmbG93OiBzY3JvbGw7XFxuICAgICAgaGVpZ2h0OiBhdXRvO1xcbiAgICB9XFxuICAgIC5pdGVtcy1jb250YWluZXIgZGl2e1xcbiAgICAgIGhlaWdodDogMTAwcHg7XFxuICAgIH1cXG4gIH1cXG5cXG4gIC8qIFRhYmxldCAqL1xcblxcbiAgQG1lZGlhIChtaW4td2lkdGg6IDQ4MHB4KSBhbmQgKG1heC13aWR0aDo5OTFweCkge1xcbiAgICAuc2lkZS1iYXItc2hvd24ge1xcbiAgICAgIHdpZHRoOiA0MCU7XFxuICAgIH1cXG4gICAgLnJpZ2h0LXNpZGUge1xcbiAgICAgIHdpZHRoOiA2MCU7XFxuICAgIH1cXG4gIH1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHBhZ2UgZnJvbSBcIi4vcGFnZVwiO1xuaW1wb3J0IHtQcm9qZWN0TGlzdH0gZnJvbSBcIi4vcHJvamVjdC1saXN0LmpzXCJcbmltcG9ydCB7IGxpc3RUb2RvSXRlbSB9IGZyb20gXCIuL2xpc3QtdG9kby1pdGVtc1wiO1xuaW1wb3J0IHsgY3JlYXRlSXRlbUlucHV0IH0gZnJvbSBcIi4vbmV3LWl0ZW0tYnV0dG9uXCI7XG5cbmZ1bmN0aW9uIGNoYW5nZVByb2plY3QoYnV0dG9uKXtcbiAgICBwYWdlLml0ZW1zQ29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XG4gICAgcGFnZS5pdGVtc0NvbnRhaW5lci5pZCA9IGJ1dHRvbjtcbiAgICBQcm9qZWN0TGlzdFtidXR0b25dLnByb2plY3RJdGVtcy5mb3JFYWNoKCAoIGl0ZW0gKSA9PiB7XG4gICAgICAgIGxpc3RUb2RvSXRlbShpdGVtKTtcbiAgICB9KVxuICAgIGlmIChQcm9qZWN0TGlzdFtidXR0b25dLnByb2plY3RJdGVtcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgY3JlYXRlSXRlbUlucHV0KCk7XG4gICAgfVxufVxuXG5leHBvcnQge2NoYW5nZVByb2plY3R9IiwiaW1wb3J0IHBhZ2UgZnJvbSBcIi4vcGFnZVwiO1xuaW1wb3J0IHtUb0RvSXRlbX0gZnJvbSBcIi4vdG9kby5qc1wiXG5pbXBvcnQge1Byb2plY3RMaXN0fSBmcm9tIFwiLi9wcm9qZWN0LWxpc3QuanNcIlxuaW1wb3J0IHsgbGlzdFRvZG9JdGVtIH0gZnJvbSBcIi4vbGlzdC10b2RvLWl0ZW1zXCI7XG5pbXBvcnQgeyBhZGRQcm9qZWN0c1RvTG9jYWxTdG9yYWdlIH0gZnJvbSBcIi4vbG9jYWwtc3RvcmFnZVwiO1xuXG5mdW5jdGlvbiB2YWxpZGF0ZUl0ZW0obmFtZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KSB7XG4gICAgaWYgKG5hbWUubGVuZ3RoID4gMjAgfHwgbmFtZS5sZW5ndGggPCAxKXtcbiAgICAgICAgYWxlcnQoXCJOYW1lIG9mIHRhc2sgbXVzdCBiZSBiZXR3ZWVuIDEgYW5kIDIwIGNoYXJhY3RlcnNcIik7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cbiAgICBlbHNlIGlmIChkZXNjcmlwdGlvbi5sZW5ndGggPiA1MCkge1xuICAgICAgICBhbGVydChcIkRlc2NyaXB0aW9uIG11c3QgYmUgdW5kZXIgNTAgY2hhcmFjdGVyc1wiKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuICAgIGVsc2UgaWYgKGR1ZURhdGUubGVuZ3RoID4gNTApIHtcbiAgICAgICAgYWxlcnQoXCJEdWUgZGF0ZSBtdXN0IGJlIGF0IG1vc3QgNTAgY2hhcmFjdGVyc1wiKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuICAgIGVsc2UgaWYgKHByaW9yaXR5ID4gMyB8fCBwcmlvcml0eSA8IDEgfHwgcHJpb3JpdHkubGVuZ3RoID4gMSkge1xuICAgICAgICBhbGVydChcIlByaW9yaXR5IHZhbHVlIG11c3QgYmUgYmV0d2VlbiAxIGFuZCAzXCIpO1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVJdGVtKG5hbWUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSkge1xuICAgIGlmICh2YWxpZGF0ZUl0ZW0obmFtZS52YWx1ZSwgZGVzY3JpcHRpb24udmFsdWUsIGR1ZURhdGUudmFsdWUsIHByaW9yaXR5LnZhbHVlKSA9PT0gdHJ1ZSkge1xuICAgICAgICBQcm9qZWN0TGlzdFtwYWdlLml0ZW1zQ29udGFpbmVyLmlkXS5hZGRJdGVtKG5ldyBUb0RvSXRlbShuYW1lLnZhbHVlLCBkZXNjcmlwdGlvbi52YWx1ZSwgZHVlRGF0ZS52YWx1ZSwgcHJpb3JpdHkudmFsdWUpKTtcbiAgICAgICAgbGlzdFRvZG9JdGVtKG5ldyBUb0RvSXRlbShuYW1lLnZhbHVlLCBkZXNjcmlwdGlvbi52YWx1ZSwgZHVlRGF0ZS52YWx1ZSwgcHJpb3JpdHkudmFsdWUpKTtcbiAgICAgICAgYWRkUHJvamVjdHNUb0xvY2FsU3RvcmFnZSgpO1xuICAgIH1cbn1cblxuZXhwb3J0IHtjcmVhdGVJdGVtLCB2YWxpZGF0ZUl0ZW19OyIsImltcG9ydCB7IGNoYW5nZVByb2plY3QgfSBmcm9tIFwiLi9jaGFuZ2UtcHJvamVjdFwiO1xuaW1wb3J0IHsgYWRkUHJvamVjdHNUb0xvY2FsU3RvcmFnZSB9IGZyb20gXCIuL2xvY2FsLXN0b3JhZ2VcIjtcbmltcG9ydCBwYWdlIGZyb20gXCIuL3BhZ2VcIjtcbmltcG9ydCB7IFByb2plY3RBcnJheSwgUHJvamVjdExpc3QgfSBmcm9tIFwiLi9wcm9qZWN0LWxpc3RcIjtcblxuZnVuY3Rpb24gZGVsZXRlUHJvamVjdCgpIHtcbiAgICBpZiAoY29uZmlybShgQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSB0aGUgXCIke3BhZ2UuaXRlbXNDb250YWluZXIuaWR9XCIgcHJvamVjdD9gKSkge1xuICAgICAgICBQcm9qZWN0QXJyYXkuc3BsaWNlKFByb2plY3RBcnJheS5pbmRleE9mKHBhZ2UuaXRlbXNDb250YWluZXIuaWQpLDEpO1xuICAgICAgICBjb25zb2xlLmxvZyhQcm9qZWN0QXJyYXkubGVuZ3RoKTtcbiAgICAgICAgcGFnZS5wcm9qZWN0c0xpc3QucmVtb3ZlQ2hpbGQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgYnV0dG9uW25hbWU9XCIke3BhZ2UuaXRlbXNDb250YWluZXIuaWR9XCJdYCkpXG4gICAgICAgIGRlbGV0ZSBQcm9qZWN0TGlzdFtwYWdlLml0ZW1zQ29udGFpbmVyLmlkXTtcbiAgICAgICAgaWYgKFByb2plY3RBcnJheS5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgcGFnZS5pdGVtc0NvbnRhaW5lci5pZCA9IFwiXCI7XG4gICAgICAgICAgICBwYWdlLml0ZW1zQ29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjaGFuZ2VQcm9qZWN0KFByb2plY3RBcnJheVswXS5uYW1lKVxuICAgICAgICB9XG4gICAgICAgIGFkZFByb2plY3RzVG9Mb2NhbFN0b3JhZ2UoKTtcbiAgICB9XG59XG5cbmV4cG9ydCB7ZGVsZXRlUHJvamVjdH0iLCJpbXBvcnQgcGFnZSBmcm9tIFwiLi9wYWdlXCI7XG5pbXBvcnQgeyBjaGFuZ2VQcmlvcml0eSB9IGZyb20gXCIuL3ByaW9yaXR5XCI7XG5pbXBvcnQgeyBQcm9qZWN0TGlzdCB9IGZyb20gXCIuL3Byb2plY3QtbGlzdFwiO1xuaW1wb3J0IHggZnJvbSBcIi4vYXNzZXRzL3gtaWNvbi5wbmdcIjtcbmltcG9ydCB7IGNoYW5nZVByb2plY3QgfSBmcm9tIFwiLi9jaGFuZ2UtcHJvamVjdFwiO1xuaW1wb3J0IHsgYWRkUHJvamVjdHNUb0xvY2FsU3RvcmFnZSB9IGZyb20gXCIuL2xvY2FsLXN0b3JhZ2VcIjtcblxuZnVuY3Rpb24gbGlzdFRvZG9JdGVtKHRvZG8pIHtcbiAgICBjb25zdCBuZXdJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBcbiAgICBjb25zdCBuZXdUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbmV3VGl0bGUudGV4dENvbnRlbnQgPSB0b2RvLm5hbWU7XG4gICAgbmV3VGl0bGUuY2xhc3NMaXN0LmFkZChcIml0ZW0tdGV4dFwiKTtcbiAgICBjb25zdCBuZXdEZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBuZXdEZXNjLnRleHRDb250ZW50ID0gdG9kby5kZXNjcmlwdGlvbjtcbiAgICBuZXdEZXNjLmNsYXNzTGlzdC5hZGQoXCJpdGVtLWRlc2NcIik7XG4gICAgY29uc3QgbmV3REQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG5ld0RELnRleHRDb250ZW50ID0gdG9kby5kdWVEYXRlO1xuICAgIG5ld0RELmNsYXNzTGlzdC5hZGQoXCJpdGVtLWRkXCIpO1xuICAgIGNvbnN0IG5ld1ByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBuZXdQcmlvcml0eS50ZXh0Q29udGVudCA9IHRvZG8ucHJpb3JpdHk7XG4gICAgbmV3UHJpb3JpdHkuY2xhc3NMaXN0LmFkZChcIml0ZW0tcHJpb3JpdHlcIik7XG4gICAgY2hhbmdlUHJpb3JpdHkobmV3UHJpb3JpdHksIG5ld0l0ZW0pO1xuXG4gICAgY29uc3QgZGVsZXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBjb25zdCB4SW1nID0gbmV3IEltYWdlKCk7XG4gICAgeEltZy5zcmMgPSB4O1xuICAgIGRlbGV0ZUJ1dHRvbi5hcHBlbmRDaGlsZCh4SW1nKTtcbiAgICBkZWxldGVCdXR0b24uY2xhc3NMaXN0LmFkZChcImRlbGV0ZS1idXR0b25cIik7XG5cbiAgICBkZWxldGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpPT4ge1xuICAgICAgICBQcm9qZWN0TGlzdFtwYWdlLml0ZW1zQ29udGFpbmVyLmlkXS5yZW1vdmVJdGVtKHRvZG8pO1xuICAgICAgICBhZGRQcm9qZWN0c1RvTG9jYWxTdG9yYWdlKCk7XG4gICAgICAgIGNoYW5nZVByb2plY3QocGFnZS5pdGVtc0NvbnRhaW5lci5pZCk7XG4gICAgfSlcblxuICAgIG5ld0l0ZW0uYXBwZW5kQ2hpbGQobmV3VGl0bGUpO1xuICAgIG5ld0l0ZW0uYXBwZW5kQ2hpbGQobmV3RGVzYyk7XG4gICAgbmV3SXRlbS5hcHBlbmRDaGlsZChuZXdERCk7XG4gICAgbmV3SXRlbS5hcHBlbmRDaGlsZChuZXdQcmlvcml0eSk7XG4gICAgbmV3SXRlbS5hcHBlbmRDaGlsZChkZWxldGVCdXR0b24pO1xuXG4gICAgcGFnZS5pdGVtc0NvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdJdGVtKTtcbn1cblxuZXhwb3J0IHtsaXN0VG9kb0l0ZW19IiwiaW1wb3J0IHsgYWRkUHJvamVjdFRvTGlzdCwgUHJvamVjdExpc3QsIFByb2plY3RBcnJheSB9IGZyb20gXCIuL3Byb2plY3QtbGlzdC5qc1wiO1xuaW1wb3J0IHsgUHJvamVjdCB9IGZyb20gXCIuL3Byb2plY3QuanNcIjtcbmltcG9ydCB7IFRvRG9JdGVtIH0gZnJvbSBcIi4vdG9kby5qc1wiO1xuXG5mdW5jdGlvbiBhZGRQcm9qZWN0c1RvTG9jYWxTdG9yYWdlKCkge1xuICAgIGxvY2FsU3RvcmFnZS5jbGVhcigpXG4gICAgUHJvamVjdEFycmF5LmZvckVhY2goKHByb2plY3QpID0+ICB7XG4gICAgICAgIGxldCByZXN1bHRBcnJheSA9IFtdO1xuICAgICAgICAvKiByZXN1bHRBcnJheS5wdXNoKHByb2plY3QubmFtZSk7ICovXG4gICAgICAgIHByb2plY3QucHJvamVjdEl0ZW1zLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGl0ZW1BcnJheSA9IFtpdGVtLm5hbWUsIGl0ZW0uZGVzY3JpcHRpb24sIGl0ZW0uZHVlRGF0ZSwgaXRlbS5wcmlvcml0eV07XG4gICAgICAgICAgICByZXN1bHRBcnJheS5wdXNoKEpTT04uc3RyaW5naWZ5KGl0ZW1BcnJheSkpO1xuICAgICAgICB9KVxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShwcm9qZWN0Lm5hbWUsIEpTT04uc3RyaW5naWZ5KHJlc3VsdEFycmF5KSk7XG4gICAgfSlcbn1cblxuZnVuY3Rpb24gZ2V0UHJvamVjdHNGcm9tTG9jYWxTdG9yYWdlKCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbG9jYWxTdG9yYWdlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGFkZFByb2plY3RUb0xpc3QobmV3IFByb2plY3QobG9jYWxTdG9yYWdlLmtleShpKSkpO1xuICAgICAgICBjb25zdCBpdGVtc0FycmF5ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShsb2NhbFN0b3JhZ2Uua2V5KGkpKSk7XG4gICAgICAgIGl0ZW1zQXJyYXkuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgaXRlbVBhcnNlZCA9IEpTT04ucGFyc2UoaXRlbSk7XG4gICAgICAgICAgICBQcm9qZWN0TGlzdFtsb2NhbFN0b3JhZ2Uua2V5KGkpXS5hZGRJdGVtKG5ldyBUb0RvSXRlbShpdGVtUGFyc2VkWzBdLCBpdGVtUGFyc2VkWzFdLCBpdGVtUGFyc2VkWzJdLCBpdGVtUGFyc2VkWzNdKSk7XG4gICAgICAgIH0pXG4gICAgfVxufVxuXG5leHBvcnQge2FkZFByb2plY3RzVG9Mb2NhbFN0b3JhZ2UsIGdldFByb2plY3RzRnJvbUxvY2FsU3RvcmFnZX0iLCJpbXBvcnQgcGFnZSBmcm9tIFwiLi9wYWdlXCI7XG5pbXBvcnQgeyBjcmVhdGVJdGVtIH0gZnJvbSBcIi4vY3JlYXRlLXJlbW92ZS1pdGVtXCI7XG5cbmZ1bmN0aW9uIGNyZWF0ZUl0ZW1JbnB1dCgpIHtcbiAgICBjb25zdCBuZXdJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBuZXdJdGVtLmNsYXNzTGlzdC5hZGQoXCJuZXctaXRlbS1jcmVhdG9yXCIpO1xuXG4gICAgY29uc3QgbmV3TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBuZXdOYW1lLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJuYW1lXCIpO1xuICAgIG5ld05hbWUuc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIiwgXCJUYXNrIE5hbWVcIik7XG4gICAgbmV3TmFtZS5zZXRBdHRyaWJ1dGUoXCJtYXhsZW5ndGhcIiwgMjApO1xuICAgIGNvbnN0IG5ld0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIG5ld0Rlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJkZXNjcmlwdGlvblwiKTtcbiAgICBuZXdEZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCBcIkRlc2NyaXB0aW9uXCIpO1xuICAgIG5ld0Rlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZShcIm1heGxlbmd0aFwiLCA1MCk7XG4gICAgY29uc3QgbmV3RHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBuZXdEdWVEYXRlLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJkdWUtZGF0ZVwiKTtcbiAgICBuZXdEdWVEYXRlLnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsIFwiRHVlIERhdGVcIik7XG4gICAgY29uc3QgbmV3UHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgbmV3UHJpb3JpdHkuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcInByaW9yaXR5XCIpO1xuICAgIG5ld1ByaW9yaXR5LnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsIFwiUHJpb3JpdHkgKDEtMylcIik7XG5cbiAgICBjb25zdCBuZXdDb25maXJtSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgbmV3Q29uZmlybUl0ZW0uaW5uZXJIVE1MID0gXCI8c3ZnIHhtbG5zPVxcXCJodHRwOlxcL1xcL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIHdpZHRoPVxcXCI4MDBweFxcXCIgaGVpZ2h0PVxcXCI4MDBweFxcXCIgdmlld0JveD1cXFwiMCAwIDI0IDI0XFxcIiBmaWxsPVxcXCJub25lXFxcIj48cGF0aCBkPVxcXCJNNCAxMi42MTExTDguOTIzMDggMTcuNUwyMCA2LjVcXFwiIHN0cm9rZT1cXFwiIzAwMDAwMFxcXCIgc3Ryb2tlLXdpZHRoPVxcXCIyXFxcIiBzdHJva2UtbGluZWNhcD1cXFwicm91bmRcXFwiIHN0cm9rZS1saW5lam9pbj1cXFwicm91bmRcXFwiL1xcPjwvc3ZnPlwiO1xuICAgIG5ld0NvbmZpcm1JdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKT0+IHtcbiAgICAgICAgY3JlYXRlSXRlbShuZXdOYW1lLCBuZXdEZXNjcmlwdGlvbiwgbmV3RHVlRGF0ZSwgbmV3UHJpb3JpdHkpO1xuICAgICAgICBwYWdlLml0ZW1zQ29udGFpbmVyLnJlbW92ZUNoaWxkKG5ld0l0ZW0pXG4gICAgfSlcblxuICAgIG5ld0l0ZW0uYXBwZW5kQ2hpbGQobmV3TmFtZSk7XG4gICAgbmV3SXRlbS5hcHBlbmRDaGlsZChuZXdEZXNjcmlwdGlvbik7XG4gICAgbmV3SXRlbS5hcHBlbmRDaGlsZChuZXdEdWVEYXRlKTtcbiAgICBuZXdJdGVtLmFwcGVuZENoaWxkKG5ld1ByaW9yaXR5KTtcbiAgICBuZXdJdGVtLmFwcGVuZENoaWxkKG5ld0NvbmZpcm1JdGVtKTtcblxuICAgIHBhZ2UuaXRlbXNDb250YWluZXIuYXBwZW5kQ2hpbGQobmV3SXRlbSk7XG59XG5cbmV4cG9ydCB7Y3JlYXRlSXRlbUlucHV0fSIsIi8vQ3JlYXRlcyBhbmQvb3Igc2VsZWN0cyBET00gZWxlbWVudHMgZm9yIHVzZSBpbiBvdGhlciBtb2R1bGVzXG5mdW5jdGlvbiB3ZWJQYWdlKCkge1xuXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudFwiKTtcblxuICAgIGNvbnN0IGl0ZW1zQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pdGVtcy1jb250YWluZXJcIilcblxuICAgIC8vRm9yIGFkZC1wcm9qZWN0LXRvLXNpZGUtYmFyLmpzXG4gICAgY29uc3QgcHJvamVjdHNMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0cy1saXN0XCIpO1xuICAgIGNvbnN0IGRlbGV0ZVByb2plY3RCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRlbGV0ZS1wcm9qZWN0XCIpO1xuXG4gICAgLy9Gb3Igc2lkZS1iYXItYnV0dG9uLmpzXG4gICAgY29uc3Qgc2lkZUJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2lkZS1iYXJcIik7XG4gICAgY29uc3Qgc2lkZUJhckJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2lkZS1iYXItYnV0dG9uXCIpO1xuXG4gICAgLy9Gb3IgbmV3LWl0ZW0tYnV0dG9uLmpzXG4gICAgY29uc3QgbmV3SXRlbUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmV3LWl0ZW0tYnV0dG9uXCIpO1xuXG5cbiAgICBjb25zdCBuZXdQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uZXctcHJvamVjdC1idXR0b25cIik7XG5cbiAgICBsZXQgY3VycmVudFByb2plY3QgPSBcIlwiO1xuXG4gICAgbGV0IHByb2plY3RCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wcm9qZWN0LWJ1dHRvblwiKTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIHNpZGVCYXIsXG4gICAgICAgIHNpZGVCYXJCdXR0b24sXG4gICAgICAgIHByb2plY3RzTGlzdCxcbiAgICAgICAgbmV3SXRlbUJ1dHRvbixcbiAgICAgICAgbmV3UHJvamVjdEJ1dHRvbixcbiAgICAgICAgY29udGVudCxcbiAgICAgICAgaXRlbXNDb250YWluZXIsXG4gICAgICAgIGN1cnJlbnRQcm9qZWN0LFxuICAgICAgICBwcm9qZWN0QnV0dG9ucyxcbiAgICAgICAgZGVsZXRlUHJvamVjdEJ1dHRvblxuICAgIH07XG59XG5cbmNvbnN0IHBhZ2UgPSBuZXcgd2ViUGFnZSgpO1xuXG5leHBvcnQgZGVmYXVsdCBwYWdlOyIsImZ1bmN0aW9uIGNoYW5nZVByaW9yaXR5KHByaW9yaXR5LHBhcmVudCl7XG4gICAgaWYgKHByaW9yaXR5LnRleHRDb250ZW50ID09IDMpIHtcbiAgICAgICAgcGFyZW50LmNsYXNzTGlzdC5hZGQoXCJoaWdoLXByaW9yaXR5XCIpO1xuICAgIH1cbiAgICBlbHNlIGlmIChwcmlvcml0eS50ZXh0Q29udGVudCA9PSAyKSB7XG4gICAgICAgIHBhcmVudC5jbGFzc0xpc3QuYWRkKFwibWVkLXByaW9yaXR5XCIpO1xuICAgIH1cbiAgICBlbHNlIGlmIChwcmlvcml0eS50ZXh0Q29udGVudCA9PSAxKSB7XG4gICAgICAgIHBhcmVudC5jbGFzc0xpc3QuYWRkKFwibG93LXByaW9yaXR5XCIpO1xuICAgIH1cbn1cblxuZXhwb3J0IHtjaGFuZ2VQcmlvcml0eX0iLCJpbXBvcnQgcGFnZSBmcm9tIFwiLi9wYWdlXCI7XG5pbXBvcnQge1Byb2plY3R9IGZyb20gXCIuL3Byb2plY3QuanNcIjtcbmltcG9ydCB7IGNoYW5nZVByb2plY3QgfSBmcm9tIFwiLi9jaGFuZ2UtcHJvamVjdFwiO1xuaW1wb3J0IHsgZ2V0UHJvamVjdHNGcm9tTG9jYWxTdG9yYWdlIH0gZnJvbSBcIi4vbG9jYWwtc3RvcmFnZVwiO1xuaW1wb3J0IHsgY3JlYXRlSXRlbUlucHV0IH0gZnJvbSBcIi4vbmV3LWl0ZW0tYnV0dG9uXCI7XG5cbmxldCBQcm9qZWN0TGlzdCA9IHt9O1xubGV0IFByb2plY3RBcnJheSA9IFtdO1xuXG5nZXRQcm9qZWN0c0Zyb21Mb2NhbFN0b3JhZ2UoKTtcblxuaWYgKFByb2plY3RBcnJheS5sZW5ndGggPCAxKSB7XG4gICAgYWRkUHJvamVjdFRvTGlzdChuZXcgUHJvamVjdChcIkRlZmF1bHRcIiksIFByb2plY3RMaXN0KTtcbiAgICBwYWdlLml0ZW1zQ29udGFpbmVyLmlkID0gXCJEZWZhdWx0XCI7XG4gICAgY2hhbmdlUHJvamVjdChcIkRlZmF1bHRcIik7XG59XG5lbHNlIHtcbiAgICBjaGFuZ2VQcm9qZWN0KFByb2plY3RBcnJheVswXS5uYW1lKTtcbn1cblxuZnVuY3Rpb24gYWRkUHJvamVjdFRvTGlzdChwcm9qZWN0KSB7XG4gICAgUHJvamVjdExpc3RbcHJvamVjdC5uYW1lXSA9IHByb2plY3Q7XG4gICAgUHJvamVjdEFycmF5LnB1c2gocHJvamVjdClcblxuXG4gICAgcGFnZS5wcm9qZWN0c0xpc3QuaW5uZXJIVE1MID0gXCJcIjtcbiAgICBmb3IgKGNvbnN0IFtuYW1lXSBvZiBPYmplY3QuZW50cmllcyhQcm9qZWN0TGlzdCkpIHtcbiAgICAgICAgY29uc3QgbmV3SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgIG5ld0l0ZW0uY2xhc3NMaXN0LmFkZChcInByb2plY3QtYnV0dG9uXCIpO1xuICAgICAgICBuZXdJdGVtLnRleHRDb250ZW50ID0gbmFtZTtcbiAgICAgICAgbmV3SXRlbS5uYW1lID0gbmFtZTtcbiAgICAgICAgbmV3SXRlbS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCk9PiB7XG4gICAgICAgICAgICBjaGFuZ2VQcm9qZWN0KG5hbWUpO1xuICAgICAgICB9KVxuICAgICAgICBwYWdlLnByb2plY3RzTGlzdC5hcHBlbmRDaGlsZChuZXdJdGVtKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVByb2plY3RQcm9tcHQoKSB7XG4gICAgY29uc3QgbmFtZUdldHRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbmFtZUdldHRlci5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1uYW1lLWdldHRlclwiKTtcblxuICAgIGNvbnN0IG5hbWVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBuYW1lSW5wdXQuY2xhc3NMaXN0LmFkZChcIm5hbWUtZ2V0dGVyLWlucHV0XCIpO1xuICAgIG5hbWVJbnB1dC52YWx1ZSA9IFwiVW5uYW1lZCBQcm9qZWN0XCI7XG5cbiAgICBjb25zdCBuYW1lQ29uZmlybUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgbmFtZUNvbmZpcm1CdXR0b24uY2xhc3NMaXN0LmFkZChcIm5hbWUtZ2V0dGVyLWJ1dHRvblwiKTtcbiAgICBuYW1lQ29uZmlybUJ1dHRvbi5pbm5lckhUTUwgPSBcIjxzdmcgeG1sbnM9XFxcImh0dHA6XFwvXFwvd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgd2lkdGg9XFxcIjgwMHB4XFxcIiBoZWlnaHQ9XFxcIjgwMHB4XFxcIiB2aWV3Qm94PVxcXCIwIDAgMjQgMjRcXFwiIGZpbGw9XFxcIm5vbmVcXFwiPjxwYXRoIGQ9XFxcIk00IDEyLjYxMTFMOC45MjMwOCAxNy41TDIwIDYuNVxcXCIgc3Ryb2tlPVxcXCIjMDAwMDAwXFxcIiBzdHJva2Utd2lkdGg9XFxcIjJcXFwiIHN0cm9rZS1saW5lY2FwPVxcXCJyb3VuZFxcXCIgc3Ryb2tlLWxpbmVqb2luPVxcXCJyb3VuZFxcXCIvXFw+PC9zdmc+XCI7XG5cbiAgICBuYW1lR2V0dGVyLmFwcGVuZENoaWxkKG5hbWVJbnB1dCk7XG4gICAgbmFtZUdldHRlci5hcHBlbmRDaGlsZChuYW1lQ29uZmlybUJ1dHRvbik7XG4gICAgcGFnZS5wcm9qZWN0c0xpc3QuYXBwZW5kQ2hpbGQobmFtZUdldHRlcik7XG4gICAgXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5uYW1lLWdldHRlci1idXR0b25cIikuZm9yRWFjaCggKHByb2plY3RCdXR0b24pID0+IHtcbiAgICAgICAgcHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmFtZS1nZXR0ZXItaW5wdXRcIikudmFsdWUubGVuZ3RoIDwgMSkge1xuICAgICAgICAgICAgICAgIGFkZFByb2plY3RUb0xpc3QobmV3IFByb2plY3QoXCJVbm5hbWVkIFByb2plY3RcIiksIFByb2plY3RMaXN0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGFkZFByb2plY3RUb0xpc3QobmV3IFByb2plY3QoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYW1lLWdldHRlci1pbnB1dFwiKS52YWx1ZSksIFByb2plY3RMaXN0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9KVxufVxuXG4vKiBmdW5jdGlvbiB1cGRhdGVQcm9qZWN0QnV0dG9ucygpIHtcbiAgICBwYWdlLnByb2plY3RCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wcm9qZWN0LWJ1dHRvblwiKTtcbiAgICBwYWdlLnByb2plY3RCdXR0b25zLmZvckVhY2goIChpdGVtKSA9PiB7XG4gICAgICAgIGl0ZW0ub25jbGljayA9IFxuICAgIH0pXG59XG4gKi9cblxuXG5leHBvcnQge2FkZFByb2plY3RUb0xpc3QsIGNyZWF0ZVByb2plY3RQcm9tcHQsIFByb2plY3RMaXN0LCBQcm9qZWN0QXJyYXl9IiwiY2xhc3MgUHJvamVjdCB7XG4gICAgY29uc3RydWN0b3IobmFtZSkge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLnByb2plY3RJdGVtcyA9IFtdO1xuICAgIH1cbiAgICBhZGRJdGVtKHRvRG9JdGVtKSB7XG4gICAgICAgIHRoaXMucHJvamVjdEl0ZW1zLnB1c2godG9Eb0l0ZW0pO1xuICAgIH1cbiAgICByZW1vdmVJdGVtKHRvRG9JdGVtKSB7XG4gICAgICAgIHRoaXMucHJvamVjdEl0ZW1zLnNwbGljZSh0aGlzLnByb2plY3RJdGVtcy5pbmRleE9mKHRvRG9JdGVtKSwgMSk7XG4gICAgfVxufVxuXG5leHBvcnQge1Byb2plY3R9OyIsImltcG9ydCBwYWdlIGZyb20gXCIuL3BhZ2VcIlxuXG5mdW5jdGlvbiBzaWRlQmFyQnV0dG9uKCkge1xuICAgICAgICBwYWdlLnNpZGVCYXIuY2xhc3NMaXN0LnRvZ2dsZShcInNpZGUtYmFyLWhpZGRlblwiKTtcbiAgICAgICAgcGFnZS5zaWRlQmFyLmNsYXNzTGlzdC50b2dnbGUoXCJzaWRlLWJhci1zaG93blwiKTtcbn1cblxuZXhwb3J0IHtzaWRlQmFyQnV0dG9ufVxuXG4vL0NyZWF0ZXMgZnVuY3Rpb25hbGl0eSBmb3IgdGhlIHNpZGUgYmFyIGhhbWJ1cmdlciBidXR0b24iLCJjbGFzcyBUb0RvSXRlbSB7XG4gICAgY29uc3RydWN0b3IobmFtZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICAgICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgIH1cbn1cblxuZXhwb3J0IHtUb0RvSXRlbX0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBwYWdlIGZyb20gXCIuL3BhZ2VcIlxuaW1wb3J0IFwiLi9zdHlsZXMvc3R5bGUuY3NzXCJcblxuaW1wb3J0IHsgc2lkZUJhckJ1dHRvbiB9IGZyb20gXCIuL3NpZGUtYmFyLWJ1dHRvblwiXG5pbXBvcnQgeyBjcmVhdGVQcm9qZWN0UHJvbXB0IH0gZnJvbSBcIi4vcHJvamVjdC1saXN0XCJcbmltcG9ydCB7IGNyZWF0ZUl0ZW1JbnB1dCB9IGZyb20gXCIuL25ldy1pdGVtLWJ1dHRvblwiXG5pbXBvcnQgeyBkZWxldGVQcm9qZWN0IH0gZnJvbSBcIi4vZGVsZXRlLXByb2plY3RcIlxuXG5pbXBvcnQgVG9Eb0Zhdmljb24gZnJvbSBcIi4vYXNzZXRzL3RvLWRvLWZhdmljb24uc3ZnXCJcblxuXG5jb25zdCBmYXZpY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpbmtcIik7XG5mYXZpY29uLnNldEF0dHJpYnV0ZShcImhyZWZcIiwgVG9Eb0Zhdmljb24pO1xuZmF2aWNvbi5zZXRBdHRyaWJ1dGUoXCJyZWxcIiwgXCJzaG9ydGN1dCBpY29uXCIpO1xuZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJoZWFkXCIpWzBdLmFwcGVuZENoaWxkKGZhdmljb24pO1xuXG5wYWdlLmRlbGV0ZVByb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBkZWxldGVQcm9qZWN0KCk7XG59KVxuXG5wYWdlLnNpZGVCYXJCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBzaWRlQmFyQnV0dG9uKCk7XG59KVxuXG5wYWdlLm5ld0l0ZW1CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpPT4ge1xuICAgIGlmICghKHBhZ2UuaXRlbXNDb250YWluZXIuY29udGFpbnMoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uZXctaXRlbS1jcmVhdG9yXCIpKSkpIHtcbiAgICAgICAgY3JlYXRlSXRlbUlucHV0KCk7XG4gICAgfVxufSlcblxucGFnZS5uZXdQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgaWYgKCEocGFnZS5wcm9qZWN0c0xpc3QuY29udGFpbnMoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LW5hbWUtZ2V0dGVyXCIpKSkpIHtcbiAgICAgICAgY3JlYXRlUHJvamVjdFByb21wdCgpO1xuICAgIH1cbn0pXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=