const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const webpack = require('webpack')

module.exports = {
  context: path.resolve(__dirname, '../'),
  entry: {
    main: './src/main.js',
    index: './src/index.js'
    // 第三方依赖抽离
    // main: { import: './src/main.js', dependOn: ['lodash', 'moment'] },
    // index: { import: './src/index.js', dependOn: 'lodash' },
    // lodash: 'lodash',
    // moment: 'moment',
    // 多入口的第三方依赖相同时，抽离
    // main: { import: './src/main.js', dependOn: 'shared' },
    // index: { import: './src/index.js', dependOn: 'shared' },
    // shared: ['lodash', 'moment']
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
        test: /\.vue$/i,
        use: 'vue-loader'
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
          filename: '[id]_vendor.js',
          priority: -10
        },
        bar: { // 打包bar开头的js文件
          test: /bar_/,
          filename: '[id]_bar.js',
          priority: -30
        },
        default: {
          minChunks: 2, // 如果一个包被引用了两次，进行代码分离
          filename: 'common_[id].js',
          priority: -20
        }
      }
    },
    // runtimeChunk: true, // false(默认)  true/multiple single { name: "" }
    runtimeChunk: {
      // name: 'runtime-ccbean',
      name: (entrypoint) => `runtimechunk-${entrypoint.name}`
    }
  },
  externals: { // 抽离第三方库
    lodash: '_',
    moment: 'moment'
  }
}
