const path = require('path');

module.exports = {
  entry: "./src/main.js",
  output: {
    filename: "bundle.js",
    // 必须是一个绝对路径
    path: path.resolve(__dirname, "./build")
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
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            // loader: 'file-loader',
            loader: 'url-loader',
            options: {
              // name: '[name].[hash:8].[ext]',
              // outputPath: 'img'
              name: 'img/[name].[hash:8].[ext]', // 等效
              limit: 100 *  1024 // 小于100k图片转base64
            }
          }
        ],
        // type: 'javascript/auto',
        dependency: { not: ['url'] }
      }
    ]
  }
}
