(window.webpackJsonp=window.webpackJsonp||[]).push([[186],{757:function(e,t,s){"use strict";s.r(t);var a=s(17),r=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("p",[e._v("官方文档：")]),e._v(" "),s("p",[e._v("https://github.com/pagekit/vue-resource")]),e._v(" "),s("p",[e._v("安装 vue-resource：")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("yarn add vue-resource\n")])])]),s("p",[e._v("修改 main.js 文件，引入 vue-resource：")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("import VueResource from 'vue-resource'\n\nVue.use(VueResource)\n")])])]),s("p",[e._v("新建 VueResourceTest.vue 文件，使用 vue-resource：")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('<button @click="testVueResource">testVueResource</button>\n')])])]),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("methods: {\n\ttestVueResource(){\n\t\tconst url = 'http://39.101.217.150:8086/menu/list'\n\t\tthis.$http.get(url,data=>{\n\t\t\tconsole.log(data.data.data)\n\t\t},error=>{\n\t\t\tconsole.log(error.data.message)\n\t\t})\n\t}\n}\n")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);