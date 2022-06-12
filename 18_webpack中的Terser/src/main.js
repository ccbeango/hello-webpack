import "./style.css";
import { sum, mul } from "./util.js";

sum(2, 2)
mul(2, 2)

const button = document.createElement("button");
button.innerHTML = "加载元素";
button.addEventListener("click", () => {
  /* webpackPrefetch: true */
  import(
    /* webpackChunkName: "element" */
    /* webpackPreload: true */
    "./element"
  ).then(({ default: element }) => {
    document.body.appendChild(element);
  });
});
document.body.appendChild(button);
