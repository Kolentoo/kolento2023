(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{282:function(s,n,e){"use strict";e.r(n);var a=e(14),t=Object(a.a)({},(function(){var s=this,n=s._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"vuepress"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#vuepress"}},[s._v("#")]),s._v(" VuePress")]),s._v(" "),n("h2",{attrs:{id:"简介"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#简介"}},[s._v("#")]),s._v(" 简介")]),s._v(" "),n("p",[n("a",{attrs:{href:"https://vuepress.vuejs.org/zh/",target:"_blank",rel:"noopener noreferrer"}},[s._v("VuePress官方文档地址"),n("OutboundLink")],1),n("br"),s._v("\n由 Vue 驱动的,极简的静态网站生成器。"),n("br"),s._v("\n一个 VuePress 网站是一个由 Vue、Vue Router和 webpack驱动的单页应用。"),n("br"),s._v("\n本篇文章仅记录比较常用的内容，更多内容请阅读官网文档。"),n("br")]),s._v(" "),n("h4",{attrs:{id:"版本"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#版本"}},[s._v("#")]),s._v(" 版本")]),s._v(" "),n("blockquote",[n("p",[s._v("本文档使用v1.x版本"),n("br"),s._v(" "),n("strong",[s._v("前提条件")]),n("br"),s._v(" "),n("strong",[s._v("v1.x版本的 VuePress 需要 Node.js (opens new window)>= 8.6")]),n("br"),s._v("\nv2.x的版本目前还不稳定")])]),s._v(" "),n("h2",{attrs:{id:"安装"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[s._v("#")]),s._v(" 安装")]),s._v(" "),n("p",[s._v("1.创建并进入一个新目录")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("mkdir vuepress-starter\nd vuepress-starter\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("p",[s._v("2.进行配置文件初始化")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("npm init\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("3.安装VuePress本地依赖"),n("br"),s._v("\n目前已经不推荐进行全局安装")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("npm install -D vuepress\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("4.创建第一篇文档")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("mkdir docs\necho '# Hello VuePress'\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("p",[s._v("5.配置"),n("code",[s._v("package.json")]),s._v("文件")]),s._v(" "),n("ul",[n("li",[s._v("配置运行命令和打包命令")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('{\n  "scripts": {\n    "dev": "vuepress dev docs",\n    "build": "vuepress build docs"\n  }\n}\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("ul",[n("li",[s._v("处理node17/18版本中 运行和打包的报错问题"),n("br"),s._v("\n在命令前添加对应的配置")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('{\n  "scripts": {\n    "dev": "set NODE_OPTIONS=--openssl-legacy-provider && vuepress dev docs",\n    "build": "set NODE_OPTIONS=--openssl-legacy-provider && vuepress build docs",\n  }\n}\n\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br")])]),n("p",[s._v("6.启动服务")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("npm run dev\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[n("strong",[s._v("注意")]),n("br"),s._v("\n一些文档的配置，例如"),n("code",[s._v(".vuepress/config.js")]),s._v("文件中的配置，和侧边栏的显示都需要重新运行服务才能看到修改。")]),s._v(" "),n("h2",{attrs:{id:"目录结构"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#目录结构"}},[s._v("#")]),s._v(" 目录结构")]),s._v(" "),n("p",[s._v("VuePress 遵循 “约定优于配置” 的原则，推荐的目录结构如下："),n("br")]),s._v(" "),n("ul",[n("li",[s._v("所有的静态文件需要存放在"),n("code",[s._v("public")]),s._v("文件夹下"),n("br")]),s._v(" "),n("li",[n("code",[s._v("styles")]),s._v("下的样式文件都采用"),n("code",[s._v("stylus")]),s._v("的写法")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v(".\n├── docs\n│   ├── .vuepress (可选的)\n│   │   ├── components (可选的)\n│   │   ├── theme (可选的)\n│   │   │   └── Layout.vue\n│   │   ├── public (可选的)\n│   │   ├── styles (可选的)\n│   │   │   ├── index.styl\n│   │   │   └── palette.styl\n│   │   ├── templates (可选的, 谨慎配置)\n│   │   │   ├── dev.html\n│   │   │   └── ssr.html\n│   │   ├── config.js (可选的)\n│   │   └── enhanceApp.js (可选的)\n│   │ \n│   ├── README.md\n│   ├── guide\n│   │   └── README.md\n│   └── config.md\n│ \n└── package.json\n\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br")])]),n("h2",{attrs:{id:"基本配置"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#基本配置"}},[s._v("#")]),s._v(" 基本配置")]),s._v(" "),n("p",[s._v("通过新建配置文件来控制 "),n("code",[s._v("vuepress")]),s._v(" 网站的显示和设置"),n("br"),s._v("\n1.首先在docs下新建一个"),n("code",[s._v(".vuepress")]),s._v("文件夹"),n("br")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v(".\n├─ docs\n│  ├─ README.md\n│  └─ .vuepress\n│     └─ config.js\n└─ package.json\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("p",[s._v("2.然后在"),n("code",[s._v(".vuepress")]),s._v("文件夹下新建"),n("code",[s._v("config.js")]),n("br"),s._v("\n在这个配置文件中对网站的信息内容进行配置，内容包含 导航栏、侧边栏、图标、图片等功能。"),n("br"),s._v("\n以下是一个简单的案例"),n("br")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("module.exports = {\n  title: 'K o l e n t o',\n  description: '前端工程师',\n  // 注入到当前页面的 HTML <head> 中的标签\n  head: [\n    // 增加一个自定义的 favicon(网页标签的图标)\n    ['link', { rel: 'icon', href: '/kolento.png' }], \n  ],\n  dest: './dist', \n  // 这是部署到github相关的配置 打包的时候用这个配置,和你的github仓库相关\n  // base: '/kolento2023/', \n  base: '/', //开发环境\n  markdown: {\n    lineNumbers: true // 代码块显示行号\n  },\n  themeConfig: {\n    logo:'/kolento.png', //首页的logo\n    sidebarDepth: 2, // e'b将同时提取markdown中h2 和 h3 标题，显示在侧边栏上。\n    lastUpdated: 'Last Updated', // 文档更新时间：每个文件git最后提交的时间\n    // 顶部导航栏\n    nav: [\n      { text: '首页', link: '/' },\n      { text: '学习笔记', \n          items: [\n              { text: 'Vue3',  link: '/Vue3/' },\n              { text: 'TypeScript', link: '/typescript/' },\n              { text: 'React', link: '/VuePress/' },\n          ]},\n      { text: '个人简历', \n          items: [\n          { text: '简历信息',  link: '/aboutme/' },\n          { text: '项目经验', link: '/projects/' },\n      ]},\n    ],\n    //侧边栏的控制\n    sidebar: {\n      '/typescript/': [\n        '',     /* /foo/ */\n        'one',  /* /foo/one.html */\n        'two'   /* /foo/two.html */\n      ],\n      '/vue3/': [\n        '',      /* /bar/ */\n        'one', /* /bar/one.html */\n        'two'   /* /bar/two.html */\n      ],\n      \n    }\n  }\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br"),n("span",{staticClass:"line-number"},[s._v("42")]),n("br"),n("span",{staticClass:"line-number"},[s._v("43")]),n("br"),n("span",{staticClass:"line-number"},[s._v("44")]),n("br"),n("span",{staticClass:"line-number"},[s._v("45")]),n("br"),n("span",{staticClass:"line-number"},[s._v("46")]),n("br"),n("span",{staticClass:"line-number"},[s._v("47")]),n("br"),n("span",{staticClass:"line-number"},[s._v("48")]),n("br"),n("span",{staticClass:"line-number"},[s._v("49")]),n("br"),n("span",{staticClass:"line-number"},[s._v("50")]),n("br")])]),n("h2",{attrs:{id:"部署"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#部署"}},[s._v("#")]),s._v(" 部署")]),s._v(" "),n("p",[s._v("1.新建github仓库"),n("br"),s._v("\n2.修改 "),n("code",[s._v("config.js")]),s._v(" 配置文件中的"),n("code",[s._v("base")]),s._v("字段配置,改成github的仓库名"),n("br"),s._v("\n3.通过命令打包"),n("br"),s._v("\n4.上传到github仓库"),n("br"),s._v("\n5.通过github上的设置，发布成网页。"),n("br")])])}),[],!1,null,null,null);n.default=t.exports}}]);