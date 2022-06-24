
module.exports = function(content, map, meta) {
  console.log(content)
  console.log('loader 03')

  return content;
}

module.exports.pitch = function(remainingRequest, precedingRequest, data) {
  console.log('picth loader 03')
}