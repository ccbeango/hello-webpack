const { src, dest, watch, series, parallel } = require('gulp');
const htmlMin = require('gulp-htmlmin');
const babel = require('gulp-babel');
const terser = require('gulp-terser');
const less = require('gulp-less');
const postcss = require('gulp-postcss');
const postcssPresetEnv = require('postcss-preset-env');
const inject = require('gulp-inject');
const browserSync = require('browser-sync');
const del = require('del');

const htmlTask = () => {
  return src('./src/*.html')
    .pipe(htmlMin({ collapseWhitespace: true }))
    .pipe(dest('./build'));
}

const jsTask = () => {
  return src('./src/js/*.js', { base: './src' })
    .pipe(babel({ presets: ['@babel/preset-env'] }))
    .pipe(terser({ mangle: { toplevel: true } }))
    .pipe(dest('./build'))
}

const lessTask = () => {
  return src('./src/css/*.less', { base: './src' })
    .pipe(less())
    .pipe(postcss([postcssPresetEnv()]))
    .pipe(dest('./build'))
}

const injectTask = () => {
  return src('./build/*.html')
    // 读取打包好的js和css文件，inject到html中  relative: true 注入的脚本为相对路径
    .pipe(inject(src(['./build/js/*.js', './build/css/*.css']), { relative: true }))
    .pipe(dest('./build'))
}

// 搭建本地服务器
const bs = browserSync.create();
const serve = () => {
  // 监听html js css 文件变动，以重新执行task
  watch("./src/*.html", series(htmlTask, injectTask));
  watch("./src/js/*.js", series(jsTask, injectTask));
  watch("./src/css/*.less", series(lessTask, injectTask));

  bs.init({
    port: 8080,
    open: true, // 在浏览器中打开
    files: "./build/*", // 哪些文件变化刷新浏览器
    server: {
      baseDir: "./build" // 服务于哪个目录
    }
  })
}

const cleanTask = () => {
  // 删除build目录
  return del(['build'])
}

// 清除旧的build -> 同时执行htmlTask, jsTask, lessTask -> 注入资源
const buildTask = series(cleanTask, parallel(htmlTask, jsTask, lessTask), injectTask);
// 构建 -> 启动服务
const serveTask = series(buildTask, serve);

module.exports = {
  // htmlTask,
  // jsTask,
  // lessTask,
  // injectTask,
  // serve,
  buildTask,
  serveTask
};