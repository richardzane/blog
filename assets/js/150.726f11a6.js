(window.webpackJsonp=window.webpackJsonp||[]).push([[150],{719:function(t,a,s){"use strict";s.r(a);var e=s(17),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"官网"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#官网"}},[t._v("#")]),t._v(" 官网")]),t._v(" "),s("p",[t._v("链接：")]),t._v(" "),s("p",[t._v("http://mint-ui.github.io/docs/#/zh-cn2/quickstart")]),t._v(" "),s("hr"),t._v(" "),s("h1",{attrs:{id:"安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[t._v("#")]),t._v(" 安装")]),t._v(" "),s("p",[t._v("安装 mint-ui：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("npm i mint-ui\n")])])]),s("hr"),t._v(" "),s("h1",{attrs:{id:"引入"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#引入"}},[t._v("#")]),t._v(" 引入")]),t._v(" "),s("h2",{attrs:{id:"完整引入"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#完整引入"}},[t._v("#")]),t._v(" 完整引入")]),t._v(" "),s("p",[t._v("修改 main.js 文件：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("import MintUI from 'mint-ui'\nimport 'mint-ui/lib/style.css'\nVue.use(MintUI)\n")])])]),s("h2",{attrs:{id:"按需引入"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#按需引入"}},[t._v("#")]),t._v(" 按需引入")]),t._v(" "),s("p",[t._v("安装 babel-plugin-component：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("npm i -D babel-plugin-component\n")])])]),s("p",[t._v("修改 babel.config.js 文件：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("module.exports = {\n  presets: [\n    '@vue/cli-plugin-babel/preset'\n  ],\n  plugins: [\n    [\n      'component', {\n        libraryName: 'mint-ui',\n        style: true\n      }\n    ]\n  ]\n}\n")])])]),s("p",[t._v("修改 main.js 文件：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("import { Button,MessageBox } from 'mint-ui'\nVue.component(Button.name, Button)\nVue.prototype.$MessageBox = MessageBox\n")])])]),s("hr"),t._v(" "),s("h1",{attrs:{id:"使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用"}},[t._v("#")]),t._v(" 使用")]),t._v(" "),s("p",[t._v("新建 ButtonTest.vue 文件：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('<mt-button type="primary">primary</mt-button>\n')])])]),s("p",[t._v("新建 MessageBoxTest.vue 文件：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("this.$MessageBox({\n    title: '温馨提示'\n})\n")])])]),s("hr")])}),[],!1,null,null,null);a.default=n.exports}}]);