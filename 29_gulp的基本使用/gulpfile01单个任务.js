// 公共任务 被导出了
const foo = (cb) => {
  console.log('foo task working');
  cb();
}

// 私有任务 未被导出
const bar = (cb) => {
  console.log('bar task working');
  cb();
}

module.exports = {
  foo
}

module.exports.default = (cb) => {
  console.log('default task working');
  cb();
}
