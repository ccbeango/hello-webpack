import { formatDate } from './utils/format.js'
import _ from 'lodash-es';
import './css/base.css';
import classes from './css/hello.module.css';
import './css/main.less';
import './css/footer.scss';

import { sum } from './ts/math';

import dovePng from './img/dove.png'; // 直接加载
import doveURL from './img/dove.png?url' // 显示加载资源为url
import doveString from './img/dove.png?raw' // 以字符串形式加载资源

import dataJson, { count } from './json/data';

import VueApp from './vue/App.vue';
import { createApp } from 'vue';

const imgDom = document.createElement('img');
imgDom.src = dovePng;
document.body.appendChild(imgDom);

// ts处理
console.log(sum(20, 30));

// css module处理
document.getElementById('foo').className = classes.green;

console.log('Hello Vite');

console.log(formatDate());

// lodash处理
console.log(_.join(['A', 'B', 'C']))

// 静态资源处理
console.log(dovePng); // /src/img/dove.png
console.log(doveURL); // /src/img/dove.png
console.log(doveString); // 二进制字符串

// json的处理
console.log(dataJson.hello, count);

// vue的处理
createApp(VueApp).mount("#vueapp");
