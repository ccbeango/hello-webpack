(function () {
  "use strict";
  var __webpack_modules__ = ({
    "./src/js/math.js":
      (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
        // module.exports上添加Symbol.toStringTag: 'Module'和`__esModule: true`属性
        __webpack_require__.r(__webpack_exports__);
        // 设置导出方法sum和mul的代理 即 设置访问器getter属性
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

    // Execute the module function 执行模块函数 传入三个参数
    __webpack_modules__[moduleId](module, module.exports, __webpack_require__);

    // Return the exports of the module
    return module.exports;
  }

  /* webpack/runtime/define property getters */
  !function () {
    // define getter functions for harmony exports
    __webpack_require__.d = function (exports, definition) {
      for (var key in definition) {
        if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
          // 生成访问器属性
          // {
          //   exports: {
          //     mul: /* getter */ function () { return mul; },
          //     sum: /* getter */ function () { return sum; }
          //   }
          // }
          Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
        }
      }
    };
  }();

  /* webpack/runtime/hasOwnProperty shorthand */
  !function () {
    __webpack_require__.o = function (obj, prop) {
      return Object.prototype.hasOwnProperty.call(obj, prop);
    }
  }();

  /* webpack/runtime/make namespace object */
  !function () {
    // define __esModule on exports
    __webpack_require__.r = function (exports) {
      if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
        // { exports: { Symbol(Symbol.toStringTag): 'Module'  } }
        Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
      }
      // { exports: { __esModule: true  } }
      Object.defineProperty(exports, '__esModule', { value: true });
    };
  }();

  var __webpack_exports__ = {};
  // This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
  !function () {
    __webpack_require__.r(__webpack_exports__);
    var _js_math_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/js/math.js");

    // 此语法等价于： _js_math_js__WEBPACK_IMPORTED_MODULE_0__.sum(20, 30);
    console.log((0, _js_math_js__WEBPACK_IMPORTED_MODULE_0__.sum)(20, 30));
    console.log((0, _js_math_js__WEBPACK_IMPORTED_MODULE_0__.mul)(20, 30));
  }();
})();

//# sourceMappingURL=bundle.js.map
