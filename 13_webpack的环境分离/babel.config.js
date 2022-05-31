
const presets =  [
  ['@babel/preset-env'],
  ['@babel/preset-react'],
];

const plugins = [];

console.log('这是什么', process.env.NODE_ENV)

if (process.env.NODE_ENV == 'development') {
  plugins.push(['react-refresh/babel']);
}

module.exports = {
  presets,
  plugins
}