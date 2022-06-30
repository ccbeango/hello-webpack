module.exports = {
  input: "./src/main.js",
  // output:  { // 单个输出
  //   format: "umd",
  //   name: "ccebanUtil",
  //   file: "./build/ccbean.umd.js",
  // },
  output: [ // 多个输出
    {
      format: "umd",
      name: "ccebanUtil",
      file: "./build/ccbean.umd.js",
    },
    {
      format: "cjs",
      file: "build/ccbean.commonjs.js",
    },
    {
      format: "amd",
      file: "build/ccbean.amd.js",
    },
    {
      format: "es",
      file: "build/ccbean.es.js",
    },
    {
      format: "iife",
      name: "ccebanUtil",
      file: "build/ccbean.browser.js",
    },
  ],
};
