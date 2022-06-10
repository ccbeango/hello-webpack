const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const webpack = require('webpack');
const AddAssetHtmlPlugin = require("add-asset-html-webpack-plugin");

module.exports = {
  context: path.resolve(__dirname, '../'),
  entry: {
    main: './src/main.js',
    index: './src/index.js'
  },
  output: {
    clean: true,
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, '../build'),
    chunkFilename: 'chunk_[id]_[name].js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/i,
        use: 'babel-loader'
      },
      {
        test: /\.css/i,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new webpack.ProvidePlugin({
      axios: 'axios',
      Vue: ['vue/dist/vue.esm.js', 'default'],
    }),
    new webpack.DllReferencePlugin({
      context: path.resolve(__dirname, '../'), // manifest (或者是内容属性)中请求的上下文
      manifest: path.resolve(__dirname, "../dll/react.manifest.json")
    }),
    new AddAssetHtmlPlugin({
      filepath: path.resolve(__dirname, '../dll/dll_react.js'),
      outputPath: 'js',
      publicPath: 'js'
    })
  ],
  resolve: {
    extensions: ['.js', '.json', '.jsx', '.ts', '.vue', '.wasm', '.mjs'],
    alias: {
      '@': path.resolve(__dirname, '../src'),
      '@pages': path.resolve(__dirname, '../src/pages')
    }
  },
  optimization: {
    chunkIds: 'deterministic', // deterministic named
    minimizer: [
      new TerserPlugin({
        extractComments: false
      })
    ],
    splitChunks: {
      chunks: 'all',
      // 最小尺寸: 如果拆分出来一个, 那么拆分出来的这个包的大小最小为minSize
      // minSize: 200, // 配合cacheGroups测试
      minSize: 20000,
      // 将大于maxSize的包, 拆分成不小于minSize的包
      // maxSize: 20000,
      // minChunks表示引入的包, 至少被导入了几次
      minChunks: 1,
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          filename: '[id]_vendor.js',
          priority: -10
        },
        default: {
          minChunks: 2, // 如果一个包被引用了两次，进行代码分离
          filename: 'common_[id].js',
          priority: -20
        }
      }
    },
    // runtimeChunk: true, // false(默认)  true/multiple single { name: "" }
  },
  externals: { // 抽离第三方库
    lodash: '_',
    moment: 'moment'
  }
}
