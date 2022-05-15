const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  entry: './src/main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './build')
  },
  module: {
    rules: [
      // 使用babel插件
      // {
      //   test: /\.js$/,
      //   use: {
      //     loader: 'babel-loader',
      //     options: {
      //       plugins: [
      //         '@babel/plugin-transform-arrow-functions',
      //         '@babel/plugin-transform-block-scoping'
      //       ]
      //     }
      //   }
      // },
      // 使用babel预设
      // {
      //   test: /\.js$/,
      //   use: {
      //     loader: 'babel-loader',
      //     options: {
      //       presets: [
      //         // '@babel/preset-env'
      //         ['@babel/preset-env', { // 数组格式，第二个元素设置options
      //           targets: "last 2 version"
      //         }]
      //       ]
      //     }
      //   }
      // },
      // 配合babel.config.js使用
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Hello Webpack'
    })
  ]
}