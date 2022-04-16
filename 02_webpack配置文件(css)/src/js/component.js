// import 'css-loader!../css/index.css' // 内联方式使用loader
import '../css/index.css'
import '../css/component.less'

function component() {
  const element = document.createElement('div')

  element.innerHTML = ['Hello', 'webpack'].join(' ')
  element.classList.add('content');

  return element;
}

document.body.appendChild(component())