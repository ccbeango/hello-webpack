const { validate } = require('schema-utils');
const schema = require('../schemas/options-loader-schema.json');

module.exports = function(content, map, meta) {
  console.log(content)
  console.log('options loader')

  const options = this.getOptions();
  console.log('传入的options', options)

  validate(schema, options, { name: 'MyPlugin' })

  return content;
}

module.exports.pitch = function(remainingRequest, precedingRequest, data) {
  console.log('options pitch loader')
}