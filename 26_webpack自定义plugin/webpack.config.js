const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const AutoUploadWebpackPlugin = require('./plugins/AutoUploadWebpackPlugin');

module.exports = {
  mode: "development",
  devtool: "source-map",
  context: path.resolve(__dirname, "."),
  entry: "./src/main.js",
  output: {
    path: path.resolve(__dirname, "./build"),
    filename: "bundle.js",
  },
  module: {
    rules: [
    ],
  },
  plugins: [
    new HtmlWebpackPlugin(),
    new AutoUploadWebpackPlugin({
      host: '127.0.0.1',
      username: 'ccbean',
      password: '**********',
      remotePath: '/root/server'
    })
  ],
};
