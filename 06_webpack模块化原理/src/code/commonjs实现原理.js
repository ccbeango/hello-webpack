(function () {
  // 依赖的模块
  var __webpack_modules__ = ({
    "./src/js/format.js": (function (module) {
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

  var __webpack_exports__ = {};
  // This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
  !function () { // 感叹号会将IIFE函数转为表达式，去掉则会报错。 或者使用括号来包裹IIFE
    const { dateFormat, priceFormat } = __webpack_require__("./src/js/format.js");

    console.log(dateFormat("1213"));
    console.log(priceFormat("1213"));
  }();
})();

//# sourceMappingURL=bundle.js.map