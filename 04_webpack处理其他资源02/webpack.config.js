const path = require('path');

module.exports = {
  entry: "./src/main.js",
  output: {
    filename: "bundle.js",
    // 必须是一个绝对路径
    path: path.resolve(__dirname, "./build"),
    // assetModuleFilename: 'img/[name].[hash:8][ext]'
  },
  module: {
    rules: [
      {
        // 规则使用正则表达式
        test: /\.css$/, // 匹配资源
        use: [
          // 注意: 编写顺序(从下往上, 从右往做, 从后往前)
          "style-loader", 
          {
            loader: "css-loader",
            options: {
              importLoaders: 1
            }
          },
          "postcss-loader"
        ],
      },
      {
        test: /\.less$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              importLoaders: 2
            }
          },
          "postcss-loader",
          "less-loader"
        ]
      },
      // { // 替换file-loader
      //   test: /\.(png|jpe?g|gif|svg)$/i,
      //   type: 'asset/resource',
      //   generator: {
      //     filename: 'img/[name].[hash:8][ext]'
      //   }
      // },
      // { // 替换url-loader
      //   test: /\.(png|jpe?g|gif|svg)$/i,
      //   type: 'asset/inline',
      // },
      { // 替换url-loader + 限制资源大小转换
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: 'asset',
        generator: {
          filename: 'img/[name].[hash:8][ext]'
        },
        parser: {
          dataUrlCondition: {
            maxSize: 1024 * 250 // 250kb
          }
        }
      },
      {
        test: /\.txt/,
        type: 'asset/source'
      },
      {
        test: '/\.ttf|eot|woff?2/',
        type: 'asset/resource',
        generator: {
          filename: 'font/[name].[hash:8][ext]'
        }
      }
    ]
  }
}
