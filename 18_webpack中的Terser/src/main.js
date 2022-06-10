import './style.css'

const button = document.createElement('button')
button.innerHTML = '加载元素'
button.addEventListener('click', () => {
  /* webpackPrefetch: true */
  import(
    /* webpackChunkName: "element" */
    /* webpackPreload: true */
    './element'
  ).then(({ default: element }) => {
    document.body.appendChild(element)
  })
})
document.body.appendChild(button)