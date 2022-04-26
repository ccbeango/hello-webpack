(function () {
  var __webpack_modules__ = ({
    "./src/js/format.js":
      (function (module) {
        const dateFormat = (date) => {
          return "2020-12-12";
        }

        const priceFormat = (price) => {
          return "100.00";
        }

        module.exports = {
          dateFormat,
          priceFormat
        }
      }),
    "./src/js/math.js":
      (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        __webpack_require__.d(__webpack_exports__, {
          "mul": function () { return mul; },
          "sum": function () { return sum; }
        });
        const sum = (num1, num2) => {
          return num1 + num2;
        }

        const mul = (num1, num2) => {
          return num1 * num2;
        }
      })
  });
  // The module cache
  var __webpack_module_cache__ = {};

  // The require function
  function __webpack_require__(moduleId) {
    // Check if module is in cache
    var cachedModule = __webpack_module_cache__[moduleId];
    if (cachedModule !== undefined) {
      return cachedModule.exports;
    }
    // Create a new module (and put it into the cache)
    var module = __webpack_module_cache__[moduleId] = {
      exports: {}
    };

    // Execute the module function
    __webpack_modules__[moduleId](module, module.exports, __webpack_require__);

    // Return the exports of the module
    return module.exports;
  }

  /* webpack/runtime/compat get default export */
  !function () {
    // getDefaultExport function for compatibility with non-harmony modules
    __webpack_require__.n = function (module) {
      var getter = module && module.__esModule ?
        function () { return module['default']; } :
        function () { return module; };
      __webpack_require__.d(getter, { a: getter });
      return getter;
    };
  }();

  /* webpack/runtime/define property getters */
  !function () {
    // define getter functions for harmony exports
    __webpack_require__.d = function (exports, definition) {
      for (var key in definition) {
        if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
          Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
        }
      }
    };
  }();

  /* webpack/runtime/hasOwnProperty shorthand */
  !function () {
    __webpack_require__.o = function (obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
  }();

  /* webpack/runtime/make namespace object */
  !function () {
    // define __esModule on exports
    __webpack_require__.r = function (exports) {
      if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
        Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
      }
      Object.defineProperty(exports, '__esModule', { value: true });
    };
  }();

  var __webpack_exports__ = {};
  // This entry need to be wrapped in an IIFE because it need to be in strict mode.
  !function () {
    "use strict";
    __webpack_require__.r(__webpack_exports__);
    var _js_format__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/js/format.js");
    var _js_format__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(_js_format__WEBPACK_IMPORTED_MODULE_0__);
    // commonjs模式导入es module
    const math = __webpack_require__("./src/js/math.js");
    const { sum, mul } = __webpack_require__("./src/js/math.js");

    console.log(math.sum(20, 30));
    console.log(math.mul(20, 30));
    // commonjs的这种导入方式会解构赋值 无论是被导入模块是哪种
    console.log(sum(20, 30));
    console.log(mul(20, 30));

    console.log(_js_format__WEBPACK_IMPORTED_MODULE_0___default().dateFormat("1213"));
    console.log(_js_format__WEBPACK_IMPORTED_MODULE_0___default().priceFormat("1213"));

    console.log((0, _js_format__WEBPACK_IMPORTED_MODULE_0__.dateFormat)("1213"));
    console.log((0, _js_format__WEBPACK_IMPORTED_MODULE_0__.priceFormat)("1213"));
  }();
})();
//# sourceMappingURL=bundle.js.map