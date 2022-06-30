import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import babel from "@rollup/plugin-babel";
import { terser } from "rollup-plugin-terser";
import postcss from "rollup-plugin-postcss";
import vue from "rollup-plugin-vue";
import replace from "@rollup/plugin-replace";
import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';

const isProduction = process.env.NODE_ENV === 'production';

const plugins = [
  replace({
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    __buildDate__: () => JSON.stringify(new Date()),
    __buildVersion: 15
  }),
  vue(),
  commonjs(),
  resolve(),
  babel({ babelHelpers: "bundled" }),
  postcss()
];

if (isProduction) {
  plugins.push(terser())
} else {
  plugins.push(...[
    serve({
      // open: true, // 是否打开浏览器
      port: 8080, // 监听哪端口
      contentBase: "./" // 服务的文件夹 当前根目录 因为index.html在这里
    }),
    livereload()
  ])
}

module.exports = {
  input: "./src/main.js",
  output: {
    format: "umd",
    name: "ccebanUtil",
    file: "./build/ccbean.umd.js",
    globals: {
      lodash: "_",
      vue: "Vue"
    },
  },
  plugins,
  external: ["lodash", "vue"],
};
