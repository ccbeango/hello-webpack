const path = require('path');
const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.base');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const PurgeCSSPlugin = require('purgecss-webpack-plugin');
const glob = require('glob');
const CompressionPlugin = require('compression-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const InlineChunkHtmlPlugin = require('react-dev-utils/InlineChunkHtmlPlugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const SpeedMeasurePlugin = require('speed-measure-webpack-plugin');
const smp = new SpeedMeasurePlugin();

const config = merge(baseConfig, {
  mode: "production",
  // mode: "development",
  // devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.css/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader'
        ],
        sideEffects: true
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:6].css',
      chunkFilename: 'css/[name].[contenthash:6].css'
    }),
    new PurgeCSSPlugin({
      // src下所有目录下的所有文件
      paths: glob.sync(path.resolve(__dirname, '../src/**/*'), {nodir: true}),
      safelist: function() {
        // 不移除html和body的样式
        return {
          standard: ['html', 'body']
        }
      }
    }),
    new CompressionPlugin({
      test: /\.(css|js)$/, // 匹配压缩的文件
      threshold: 500, // 设置文件从多大开始压缩
      minRatio: 0.8, // 至少的压缩比例 达不到就不会压缩 优先于threshold
      algorithm: 'gzip', // 压缩算法
      // include:
      // exclude:
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      inject: 'body',
      cache: true, // 文件未改变时，不重新生成文件
      // minify: false // 开发环境下，默认值
      minify: {
        removeComments: true, // 是否要移除注释
        removeRedundantAttributes: false, // 是否移除多余的属性 input的type=text默认会被移除
        removeEmptyAttributes: true, // 是否移除一些空属性 如 <div id=""></div> id属性会被移除
        collapseWhitespace: false, // 折叠（移除）空格
        removeStyleLinkTypeAttributes: true, // 比如link中的type="text/css"
        keepClosingSlash: true, // 是否保持单元素的尾部
        minifyCSS: true, // 是否压缩内部style标签中的CSS
        minifyJS: { // 是否压缩script标签中的JS代码 利用的是Terser插件
          mangle: {
            toplevel: true
          }
        }
      }
    }),
    new InlineChunkHtmlPlugin(HtmlWebpackPlugin, [/runtime.+\.js$/]),
    new BundleAnalyzerPlugin({
      reportFilename: 'analys.html'
    })
  ],
  optimization: {
    usedExports: true,
    minimize: true,
    minimizer: [
      new TerserPlugin({
        extractComments: false,
        terserOptions: {
          compress: {
            arguments: true
          },
          mangle: true,
          toplevel: true,
          keep_classnames: true,
          keep_fnames: true
        }
      }),
      new CssMinimizerPlugin()
    ],
    runtimeChunk: {
      name: 'runtime'
    }
  }
})

module.exports = config;
// module.exports = smp.wrap(config);
