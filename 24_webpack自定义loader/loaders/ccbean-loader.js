module.exports = function(content, map, meta) {
  console.log(content)
  console.log('loader 01')

  // this.callback(null, content, map, meta);
  // this.callback(null, content);
  return content;
}

module.exports.pitch = function(remainingRequest, precedingRequest, data) {
  console.log('picth loader 01')
}