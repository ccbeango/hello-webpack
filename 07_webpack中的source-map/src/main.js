// commonjs模式导入es module
const { sum, mul } = require('./js/math');
// es module模式导入commonjs
import { dateFormat, priceFormat } from './js/format';

console.log(sum(20, 30));
console.log(mul(20, 30));

console.log(dateFormat("1213"));
console.log(priceFormat("1213"));
