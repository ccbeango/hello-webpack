const path = require('path')

module.exports = function (env) {
  console.log('======= env =========', env)

  return {
    context: path.resolve(__dirname, '../'),
    entry: './src/main.js',
    output: {
      path: path.resolve(__dirname, '../build')
    }
  }
}