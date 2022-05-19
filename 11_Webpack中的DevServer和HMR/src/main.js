import './util'
import React from 'react';
import ReactDom from 'react-dom';
import ReactApp from './App.jsx'

import { createApp } from 'vue'
import VueApp from './App.vue'


console.log('hello webpack')

ReactDom.render(<ReactApp/>, document.getElementById('reactRoot'))

createApp(VueApp).mount('#vueRoot')

if(module.hot) {
  module.hot.accept('./util', () => {
    console.log('utils 更新了')
  })
}