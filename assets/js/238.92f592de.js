(window.webpackJsonp=window.webpackJsonp||[]).push([[238],{806:function(n,a,e){"use strict";e.r(a);var t=e(17),s=Object(t.a)({},(function(){var n=this,a=n.$createElement,e=n._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[e("p",[n._v("官方文档网址：")]),n._v(" "),e("p",[n._v("https://webpack.docschina.org/guides/asset-management/#loading-fonts")]),n._v(" "),e("p",[n._v("terminal")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("yarn init -y\n")])])]),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("yarn add -D webpack@5.60.0 webpack-cli@4.9.1\n")])])]),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("yarn add -D webpack-dev-server@4.3.1\n")])])]),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("yarn add -D clean-webpack-plugin@4.0.0\n")])])]),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("yarn add -D html-webpack-plugin@5.5.0\n")])])]),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("yarn add -D css-loader@6.5.0 mini-css-extract-plugin@2.4.3\n")])])]),e("p",[n._v("package.json")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v('...\n"scripts": {\n  "build": "webpack",\n  "serve": "webpack-dev-server"\n}\n')])])]),e("p",[n._v("webpack.config.js")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("const path = require('path')\nconst {CleanWebpackPlugin} = require('clean-webpack-plugin')\nconst HtmlWebpackPlugin = require('html-webpack-plugin')\nconst MiniCssExtractPlugin = require('mini-css-extract-plugin')\n\nmodule.exports = {\n    mode: 'development',\n    entry: './src/main.js',\n    output: {\n        path: path.resolve(__dirname, 'dist'),\n        filename: 'bundle.js',\n    },\n    plugins: [\n        new CleanWebpackPlugin(),\n        new HtmlWebpackPlugin({\n            template: './public/index.html'\n        }),\n        new MiniCssExtractPlugin({\n            filename: 'bundle.css'\n        })\n    ],\n    module: {\n        rules: [\n            {\n                test: /\\.css$/,\n                use: [MiniCssExtractPlugin.loader, 'css-loader']\n            },\n            {\n                test: /\\.(eot|svg|ttf|woff|woff2)$/,\n                type: 'asset/resource',\n                generator: {\n                    filename: 'font/[name][ext]'\n                }\n            }\n        ]\n    },\n    devServer: {\n      port: 8080,\n      open: false\n\t\t}\n}\n")])])]),e("p",[n._v("src/font/iconfont.ttf")]),n._v(" "),e("p",[n._v("src/css/iconfont.css")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v('@font-face {\n  font-family: "iconfont"; /* Project id  */\n  src: url(\'../font/iconfont.ttf?t=1635317568958\') format(\'truetype\');\n}\n\n.iconfont {\n  font-family: "iconfont" !important;\n  font-size: 16px;\n  font-style: normal;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.icon-cart:before {\n  content: "\\e6af";\n}\n')])])]),e("p",[n._v("public/index.html")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v('...\n<i class="iconfont icon-cart"></i>\n...\n')])])]),e("p",[n._v("src/main.js")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("import './css/iconfont.css'\n")])])]),e("p",[n._v("ternimal")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("yarn build\n")])])])])}),[],!1,null,null,null);a.default=s.exports}}]);