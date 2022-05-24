const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    clean: true,
    filename: "bundle.js",
    path: path.resolve(__dirname, "./build"),
    // publicPath: '/test'
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
    new ReactRefreshWebpackPlugin(),
    new VueLoaderPlugin()
  ],
  resolve: {
    extensions: ['.js', '.json', '.jsx', '.ts', '.vue', '.wasm', '.mjs'],
    alias: {
      '@': path.resolve(__dirname, './src'),
      "@pages": path.resolve(__dirname, "./src/pages")
    }
  },
  devServer: {
    hot: true,
    host: 'localhost',
    port: 9090,
    open: true,
    compress: true,
    static: {
      directory: path.join(__dirname, './public'), // 同之前的devServer.contentBase
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
}