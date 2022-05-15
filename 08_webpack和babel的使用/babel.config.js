module.exports = {
  presets: [
    // 单独使用babel
    // '@babel/preset-env',
    ['@babel/preset-env', {
      // targets: "last 2 version", // 编译目标浏览器targets设置
      useBuiltIns: 'entry', // false usage entry
      corejs: 3
    }],
  ],
  plugins: [
    // '@babel/plugin-transform-arrow-functions',
    // '@babel/plugin-transform-block-scoping'
    // ['@babel/plugin-transform-runtime', { // plugin-transform-runtime插件使用
    //   corejs: 3
    // }]
  ]
}