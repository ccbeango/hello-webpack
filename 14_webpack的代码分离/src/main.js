import moment from 'moment'
// import lodash from 'lodash'

import "./bar_01";
import "./bar_02";

// console.log(lodash.join(['hello', 'webpack']))
console.log(moment().format('YYYY-MM-DD HH:MM:SS'))

// import('lodash').then((res) => {
//   console.log('hello webpack from async')
// })


import(/* webpackChunkName: "foo" */'./foo_01').then((res) => {
  console.log('foo01', res)
})


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