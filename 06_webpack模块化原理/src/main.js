// commonjs模式导入es module
const math = require('./js/math');
const { sum, mul } = require('./js/math');
// es module模式导入commonjs
import format, { dateFormat, priceFormat } from './js/format';

console.log(math.sum(20, 30));
console.log(math.mul(20, 30));

console.log(sum(20, 30));
console.log(mul(20, 30));

console.log(format.dateFormat("1213"));
console.log(format.priceFormat("1213"));

console.log(dateFormat("1213"));
console.log(priceFormat("1213"));
