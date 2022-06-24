import mdText from "./test.md";
import "./style.css";
import "highlight.js/styles/default.css";

function sum(num1, num2) {
  return num1 + num2;
}

console.log(sum(20 + 30));
console.log('Hello Webpack');

document.body.innerHTML = mdText;