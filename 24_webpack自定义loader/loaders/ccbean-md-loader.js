const { marked } = require('marked');
const hljs = require('highlight.js');

module.exports = function(content) {
  marked.setOptions({
    highlight: function(code, lang) { // 使用highlight.js做代码高亮处理
      return hljs.highlight(lang, code).value;
    }
  })

  const htmlContent = marked(content);
  // 将结果转字符串 否则报错  也可以在webpack中配置html-loader来转字符串
  const innerContent = "`" + htmlContent + "`";
  const moduleCode = `var code=${innerContent}; export default code;`
  return moduleCode;
}
