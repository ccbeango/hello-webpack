import { sum } from "./math.js";
import "./format"
import './style.css'

console.log(sum(2, 2))


const titleDiv = document.createElement('div');
titleDiv.className = 'container';
titleDiv.innerHTML = '我是标题';
document.body.appendChild(titleDiv);