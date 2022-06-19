const path = require('path');

module.exports = {
  mode: "development",
  entry: "./index.js",
  output: {
    path: path.resolve(__dirname, "./build"),
    filename: "ccbean_utils.js",
    // AMD/CommonJS/浏览器
    // CommnJoS: 社区规范的CommonJS, 这个里面是没有module对象
    // CommonJS2: Node实现的CommonJS, 这个里面是有module对象, module.exports
    libraryTarget: "umd",
    library: "ccbeanUtils", // 包的导出名 exports['ccbeanUtils'] 或 浏览器中 window['ccbeanUtils']
    globalObject: "this" // 全局对象的值 umd格式的兼容函数的第一个参数
  }
}