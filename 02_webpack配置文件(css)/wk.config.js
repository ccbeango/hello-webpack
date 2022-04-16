const path = require('path')

module.exports = {
  entry: './src/main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './build')
  },
  module: {
    rules: [
      {
        test: /\.css$/, // 匹配资源
        // use: [ // 完整写法
        //   { loader: 'css-loader' } // UseEntry
        // ],
        // use: ['css-loader'], //  use的简写 写多个只有一个属性的loader
        // loader: 'css-loader', // use的简写 只写一个loader
        use: [
          'style-loader',
          // 'css-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1
            }
          },
          'postcss-loader'
        ]
      },
      {
        test: /\.less$/,
        use: [
          { loader: 'style-loader' },
          // { loader: 'css-loader' },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2
            }
          },
          { loader: 'postcss-loader' },
          { loader: 'less-loader' },
        ]
      }
    ]
  }
}
