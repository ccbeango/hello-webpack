const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.base');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = merge(baseConfig, {
  // mode: "production",
  mode: "development",
  devtool: 'source-map',
  // module: {
  //   rules: [
  //     {
  //       test: /\.css/i,
  //       use: [
  //         MiniCssExtractPlugin.loader,
  //         'css-loader'
  //       ]
  //     }
  //   ]
  // },
  // plugins: [
  //   new MiniCssExtractPlugin({
  //     filename: 'css/[name].[contenthash:6].css',
  //     chunkFilename: 'css/[name].[contenthash:6].css'
  //   })
  // ],
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
    ]
  }
})
