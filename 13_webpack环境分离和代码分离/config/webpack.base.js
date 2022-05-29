const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
  context: path.resolve(__dirname, '../'),
  entry: './src/index.js',
  output: {
    clean: true,
    filename: "bundle.js",
    path: path.resolve(__dirname, "../build"),
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/i,
        use: "babel-loader"
      },
      {
        test: /\.vue$/i,
        use: "vue-loader"
      },
      {
        test: /\.css/i,
        use: [
          "style-loader",
          "css-loader"
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    }),
    new VueLoaderPlugin()
  ],
  resolve: {
    extensions: ['.js', '.json', '.jsx', '.ts', '.vue', '.wasm', '.mjs'],
    alias: {
      '@': path.resolve(__dirname, '../src'),
      "@pages": path.resolve(__dirname, "../src/pages")
    }
  }
}