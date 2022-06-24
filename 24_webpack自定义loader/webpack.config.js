const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

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
      // {
      //   test: /\.js$/,
      //   use: [
      //     'ccbean-loader',
      //     'ccbean-loader02',
      //     'ccbean-loader03'
      //   ]
      // },
      // 拆分的三个配置 与 上面配置 等价
      // {
      //   test: /\.js$/,
      //   use: "ccbean-loader",
      // },
      // {
      //   test: /\.js$/,
      //   use: "ccbean-loader02",
      //   enforce: 'pre' // post
      // },
      // {
      //   test: /\.js$/,
      //   use: "ccbean-loader03",
      // },
      // 异步Loader
      // {
      //   test: /\.js$/,
      //   use: "ccbean-async-loader ",
      // },
      // 传入和获取参数
      // {
      //   test: /\.js$/,
      //   use: [
      //     {
      //       loader: "ccbean-options-loader",
      //       options: {
      //         name: "ccbean",
      //         age: "18"
      //       }
      //     }
      //   ],
      // },
      // 自定义babel-loader
      {
        test: /\.js$/,
        use: [
          {
            loader: "ccbean-babel-loader",
            options: {
              presets: ['@babel/preset-env']
            }
          }
        ],
      },
      // 自定义md-loader
      {
        test: /\.md$/,
        use: [
          "ccbean-md-loader"
        ],
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          "css-loader"
        ]
      }
    ],
  },
  resolveLoader: {
    modules: ["node_modules", "./loaders"],
  },
  plugins: [
    new HtmlWebpackPlugin()
  ],
};
