import axios from 'axios';

import React from 'react';
import ReactDom from 'react-dom';
import ReactApp from './App.jsx';

import { createApp } from 'vue';
import VueApp from './App.vue';

import "./math";

if (module.hot) {
  module.hot.accept("./math.js", () => {
    console.log("math模块发生了更新");
  });
}

// React的代码
ReactDom.render(<ReactApp/>, document.getElementById("app"));

// Vue的代码
createApp(VueApp).mount("#root");

// axios网络请求
axios.get("/api/get").then(res => {
  console.log(res);
}).catch(err => {
  console.log(err);
});

axios.get("/hello/page/test").then(res => {
  console.log(res);
}).catch(err => {
  console.log(err);
});
