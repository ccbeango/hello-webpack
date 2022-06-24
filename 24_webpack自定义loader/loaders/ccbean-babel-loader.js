const babel = require('@babel/core');
const { validate } = require('schema-utils');
const schema = require('../schemas/options-loader-schema.json');

module.exports = function(content, map, meta) {
  // 1. 异步loader
  const callback = this.async();

  // 2. 获取options
  const options = this.getOptions();

  // 3. 校验schema
  validate(schema, options, { name: 'ccbeanBabelLoader'});

  // 4. babel对源码进行转换
  babel.transform(content, options, (err, result) => {
    if (err) {
      callback(err);
    } else {
      callback(null, result.code);
    }
  });
}
