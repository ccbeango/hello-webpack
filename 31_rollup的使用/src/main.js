import { dateFormat } from './util';
import _ from 'lodash';
import './style.css'

import { createApp } from 'vue';
import VueApp from './App.vue';

const message = "Hello Rollup";
console.log(message);

const sum = (num1, num2) => {
  return num1 + num2;
}

console.log(dateFormat())

console.log(_.join(['Hello', 'World']))

createApp(VueApp).mount("#app");

console.log('NODE_ENV', process.env.NODE_ENV)

export {
  sum
}
