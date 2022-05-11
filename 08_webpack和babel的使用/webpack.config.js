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
      {
        test: /\.js$/,
        loader: 'babel-loader'
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