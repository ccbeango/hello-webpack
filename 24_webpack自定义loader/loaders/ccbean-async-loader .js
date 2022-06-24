module.exports = function(content, map, meta) {
  console.log(content)
  console.log('async loader')

  const callback = this.async();

  setTimeout(() => {
    callback(null, content);
  }, 1000)
}

module.exports.pitch = function(remainingRequest, precedingRequest, data) {
  console.log('async pitch loader')
}