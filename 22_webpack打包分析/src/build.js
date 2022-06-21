/**
 * 本质上，Webpack导出的是一个webpack(config, callback)函数，
 * 如果传入第二个参数callback，会自动调用run()方法，
 * 没有传callback，可以拿到返回值compiler后，手动调用compiler.run()方法
 * 
 * webpack-cli做的事情就是把执行script如npm run build时传入的参数进行合并，转换成统一格式的
 * config，然后调用webpack()进行编译。
 */

const webpack = require('webpack');
const config = require('../config/webpack.prod');

const compiler = webpack(config);

compiler.run((err, stats) => {
  if(err) {
    console.log(err);
  } else {
    console.lof(stats);
  }
});