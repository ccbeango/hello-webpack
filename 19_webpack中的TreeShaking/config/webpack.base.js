const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack')

module.exports = {
  context: path.resolve(__dirname, '../'),
  entry: {
    main: './src/main.js',
    // index: './src/index.js'
  },
  output: {
    clean: true,
    path: path.resolve(__dirname, '../build'),
    filename: 'js/[name].[chunkhash:6].bundle.js',
    chunkFilename: 'js/chunk.[chunkhash:6].[name].js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/i,
        use: 'babel-loader'
      },
      {
        test: /\.vue$/i,
        use: 'vue-loader'
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
    splitChunks: {
      // async 异步导入
      // initial 同步导入
      // all 异步/同步导入
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
          filename: 'js/[id]_vendor.js',
          priority: -10
        },
        bar: { // 打包bar开头的js文件
          test: /bar_/,
          filename: 'js/[id]_bar.js',
          priority: -30
        },
        default: {
          minChunks: 2, // 如果一个包被引用了两次，进行代码分离
          filename: 'js/common_[id].js',
          priority: -20
        }
      }
    }
  }
}
