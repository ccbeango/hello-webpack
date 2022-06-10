const path = require('path');
const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.base');

process.env.NODE_ENV = 'development'

module.exports = merge(baseConfig, {
  mode: "development",
  module: {
    rules: [
      {
        test: /\.css/i,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  },
  devServer: {
    hot: true,
    host: 'localhost',
    port: 9090,
    open: true,
    compress: true,
    static: {
      directory: path.join(__dirname, '../public'), // 同之前的devServer.contentBase
      // publicPath: '/test', // 同之前的devServer.publicPath
      watch: true // 同之前的devServer.watchContentBase
    },
    proxy: {
      // '/api': 'http://httpbin.org',
      '/api': {
        target: 'http://httpbin.org',
        pathRewrite: {
          '^/api': ''
        },
        changeOrigin: true
      },
      '/hello': {
        target: 'http://localhost:9999',
        pathRewrite: {
          '^/hello': ''
        },
        logLevel: 'debug',
        changeOrigin: true
      }
    },
    historyApiFallback: true,
    // historyApiFallback: {
    //   rewrites: [
    //     {from: /abc/, to: "/index.html"}
    //   ]
    // }
  }
})
