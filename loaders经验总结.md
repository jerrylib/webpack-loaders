<!-- 
1.这是什么东西
  1.1 这个东西出现的背景
  1.2 这个东西的功能 -
2.它能做什么事情
  2.1 loader通过简单的配置能够为我们提供什么功能
  2.2 不同的loader能够给我们带来哪些不同的能力 
3.怎么做的，什么样的配置产生什么样的效果
  3.1 loader的三种配置方式 -
  3.1 loaders的执行顺序
  3.2 loaders的同步/异步之分
  3.4 babel-loader的stage-0至stage-4
  //3.3 loaders的深度定制和配置
4.webpack是如何实现loader的，如何自定义loader -
5.项目里的loader运用经验
6.总结
7.参考文档 - 
-->
# loaders经验总结
## 目录
[TOC]
## 简介
![webpack打包](https://note.youdao.com/yws/public/resource/1b9f3e000c689ceb74723787a2651211/xmlnote/13377C1774B0457BA8E87BBCB77EB836/7235)
> <b>Loaders are transformations that are applied on the source code of a module.</b> They allow you to pre-process files as you import or “load” them. Thus, loaders are kind of like “tasks” in other build tools and provide a powerful way to handle front-end build steps. Loaders can transform files from a different language (like TypeScript) to JavaScript or inline images as data URLs. Loaders even allow you to do things like import CSS files directly from your JavaScript modules!
<!-- ### loader的运用背景 -->

## 常用loader介绍
类型|描述
--|--
css-loader|解析 CSS 文件后，使用 import 加载，并且返回 CSS 代码|
style-loader|将模块的导出作为样式添加到 DOM 中|
ts-loader|像 JavaScript 一样加载 TypeScript 2.0+|
babel-loader|加载 ES2015+ 代码，然后使用 Babel 转译为 ES5|
file-loader|将文件发送到输出文件夹，并返回（相对）UR|
url-loader|像 file loader 一样工作，但如果文件小于限制，可以返回 data URL|
json-loader|加载 JSON 文件（默认包含）|
html-loader|导出 HTML 为字符串，需要引用静态资源|
更多详见 [webpack官方文档](https://www.webpackjs.com/loaders/)

## loader配置
### 载入loaders
> webpack中loader的载入存在以下三种方式
#### 1.webpack配置文件引入（Configuration）
```
...,
module: {
    loaders: [{ //该节点在各个版本存在差异
      test: /\.js$/,
      exclude: /(node_modules)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['es2015'],
        },
      },
    }],
  },
```
#### 2.内联引入（Inline）
```
import Styles from 'style-loader!css-loader?modules!./styles.css';
```
#### 3.命令行配置（CLI）
```
webpack --module-bind jade-loader --module-bind 'css=style-loader!css-loader'
```
### 同步/异步之分
> Loader 有同步和异步之分，例如你需要通过网络请求才能得出结果，如果采用同步的方式网络请求就会阻塞整个构建，导致构建非常缓慢。

```
module.exports = function(source) {
  // 告诉 Webpack 本次转换是异步的，Loader 会在 callback 中回调结果
  var callback = this.async();
  someAsyncOperation(source, function(err, result, sourceMaps, ast) {
    // 通过 callback 返回异步执行后的结果
    callback(err, result, sourceMaps, ast);
  });
};
```
<!-- ### 并列loader的执行顺序 -->
### babel-loader细化stage-0至stage-4
名称|描述|包含插件
:----|:-----|-----
stage-0|稻草人: 只是一个想法|[transform-do-expressions](https://www.babeljs.cn/docs/plugins/transform-do-expressions/) \| [transform-function-bind](https://www.babeljs.cn/docs/plugins/transform-function-bind/)
stage-1|提案: 初步尝试|[transform-class-constructor-call](https://www.babeljs.cn/docs/plugins/transform-class-constructor-call/) \| [transform-export-extensions](https://www.babeljs.cn/docs/plugins/transform-export-extensions/)
stage-2|初稿: 完成初步规范|[syntax-dynamic-import](https://www.babeljs.cn/docs/plugins/syntax-dynamic-import/) \| [transform-class-properties](https://www.babeljs.cn/docs/plugins/transform-class-properties/) \| [<s>transform-decorators</s>](https://www.babeljs.cn/docs/plugins/transform-decorators/)
stage-3|候选: 完成规范和浏览器初步实现|[transform-object-rest-spread](https://www.babeljs.cn/docs/plugins/transform-object-rest-spread/) \| [transform-async-generator-functions](https://www.babeljs.cn/docs/plugins/transform-async-generator-functions/) \| [syntax-trailing-function-commas](https://www.babeljs.cn/docs/plugins/syntax-trailing-function-commas/) \| [transform-async-to-generator](https://www.babeljs.cn/docs/plugins/transform-async-to-generator/) \| [transform-exponentiation-operator](https://www.babeljs.cn/docs/plugins/transform-exponentiation-operator/)
stage-4|完成: 将被添加到下一年度发布|

## loader实现原理和loader自定义

//todo webpack中loader是如何实现的的。

//todo 如何编写自定义loader

## 项目运用经验
//todo 项目中对loader的运用经验整理和分享

## 总结
>

## 参考文档
[《webpack官方文档》](https://webpack.js.org/concepts/loaders/)

[《babel中文网》](https://www.babeljs.cn)

[《babel-loader源码导读》](https://juejin.im/post/5a5c41266fb9a01c9a26b940)

[《webpack-loader详解》](https://juejin.im/post/5accd3aa6fb9a028dd4e91d3)

[《代码git地址》](https://github.com/jerrylib/webpack-loaders.git)
