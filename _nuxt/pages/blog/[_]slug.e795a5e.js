(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{166:function(e,t,n){"use strict";t.a={mode:"universal",target:"static",head:{htmlAttrs:{lang:"th"},title:"An untitled page",titleTemplate:"%s - All about @rootEnginear",meta:[{charset:"utf-8"},{name:"viewport",content:"width=device-width, initial-scale=1"},{hid:"description",name:"description",content:"Keep coding and seeking new possibilities."}],link:[{rel:"icon",type:"image/x-icon",href:"/favicon.ico"},{rel:"preconnect",href:"https://cdn.jsdelivr.net"},{rel:"dns-prefetch",href:"https://cdn.jsdelivr.net"},{rel:"stylesheet",href:"https://cdn.jsdelivr.net/gh/picturepan2/spectre/dist/spectre.min.css"},{rel:"preload",as:"style",href:"https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@5.13.1/css/all.min.css",onload:"this.onload=null;this.rel='stylesheet'"},{rel:"preload",as:"style",href:"https://cdn.jsdelivr.net/npm/katex@0.11.1/dist/katex.min.css",integrity:"sha384-zB1R0rpPzHqg7Kpt0Aljp8JPLqbXI3bhnPWROx27a9N0Ll6ZP/+DiW/UqRcLbRjq",crossorigin:"anonymous",onload:"this.onload=null;this.rel='stylesheet'"},{rel:"preload",as:"font",type:"font/woff2",href:"https://cdn.jsdelivr.net/gh/IBM/plex/IBM-Plex-Sans/fonts/complete/woff2/IBMPlexSans-Regular.woff2",crossorigin:""},{rel:"preload",as:"font",type:"font/woff",href:"https://cdn.jsdelivr.net/gh/IBM/plex/IBM-Plex-Sans/fonts/complete/woff/IBMPlexSans-Regular.woff",crossorigin:""},{rel:"preload",as:"font",type:"font/ttf",href:"https://cdn.jsdelivr.net/gh/IBM/plex/IBM-Plex-Sans/fonts/complete/ttf/IBMPlexSans-Regular.ttf",crossorigin:""},{rel:"preload",as:"font",type:"font/woff2",href:"https://cdn.jsdelivr.net/gh/IBM/plex/IBM-Plex-Sans/fonts/complete/woff2/IBMPlexSans-Bold.woff2",crossorigin:""},{rel:"preload",as:"font",type:"font/woff",href:"https://cdn.jsdelivr.net/gh/IBM/plex/IBM-Plex-Sans/fonts/complete/woff/IBMPlexSans-Bold.woff",crossorigin:""},{rel:"preload",as:"font",type:"font/ttf",href:"https://cdn.jsdelivr.net/gh/IBM/plex/IBM-Plex-Sans/fonts/complete/ttf/IBMPlexSans-Bold.ttf",crossorigin:""}],noscript:[{innerHTML:'\n      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@5.13.1/css/all.min.css">\n      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.11.1/dist/katex.min.css" integrity="sha384-zB1R0rpPzHqg7Kpt0Aljp8JPLqbXI3bhnPWROx27a9N0Ll6ZP/+DiW/UqRcLbRjq" crossorigin="anonymous">\n    '}],__dangerouslyDisableSanitizers:["noscript"]},css:["~/css/fonts.css","~/css/main.css"],plugins:[],components:!0,buildModules:[],modules:["@nuxt/content"],content:{markdown:{remarkPlugins:function(){return["remark-squeeze-paragraphs","remark-slug","remark-external-links","remark-math","remark-sub-super","remark-unwrap-images","remark-attr"]},rehypePlugins:["rehype-katex"]}},build:{}}},167:function(e,t,n){var content=n(175);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(36).default)("04177a26",content,!0,{sourceMap:!1})},174:function(e,t,n){"use strict";var r=n(167);n.n(r).a},175:function(e,t,n){(t=n(35)(!1)).push([e.i,"@media (min-width:841px){.toc-sticky[data-v-973d270c]{position:-webkit-sticky;position:sticky;top:.4rem}}",""]),e.exports=t},195:function(e,t,n){"use strict";n.r(t);n(20);var r=n(2),o=n(166),l={asyncData:function(e){return Object(r.a)(regeneratorRuntime.mark((function t(){var n,r,header,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.$content,r=e.params,t.prev=1,t.next=4,n("blog/header/"+(r.slug||"../index")).fetch();case 4:header=t.sent,t.next=9;break;case 7:t.prev=7,t.t0=t.catch(1);case 9:return t.next=11,n("blog/",r.slug||"../index").fetch();case 11:return o=t.sent,t.abrupt("return",{doc:o,header:header});case 13:case"end":return t.stop()}}),t,null,[[1,7]])})))()},head:function(){return{htmlAttrs:{lang:this.doc.lang||o.a.head.htmlAttrs.lang},title:this.doc.title||o.a.head.title,meta:[{hid:"description",name:"description",content:this.doc.description||this.doc.title+" - All about @rootEnginear"}]}},methods:{gotoHash:function(e){window.scrollTo(0,document.getElementById(e).getBoundingClientRect().top+window.scrollY)}}},c=(n(174),n(21)),component=Object(c.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("article",[n("header",[n("h1",[e._v(e._s(e.doc.title))]),e._v(" "),e.header?n("nuxt-content",{attrs:{document:e.header}}):e._e()],1),e._v(" "),e.header?n("hr"):e._e(),e._v(" "),n("div",{staticClass:"columns"},[e.doc.toc.length?n("aside",{staticClass:"column col-3 col-md-12"},[n("ul",{staticClass:"menu toc-sticky"},[e._m(0),e._v(" "),e._l(e.doc.toc,(function(header){return n("li",{key:header.id,staticClass:"menu-item"},[n("a",{on:{click:function(t){return e.gotoHash(header.id)}}},[e._v(e._s(header.text))])])}))],2),e._v(" "),n("br")]):e._e(),e._v(" "),n("main",{class:{column:1,"col-9":e.doc.toc.length,"col-md-12":1}},[n("nuxt-content",{attrs:{document:e.doc}})],1)])])}),[function(){var e=this.$createElement,t=this._self._c||e;return t("li",{staticClass:"divider",attrs:{"data-content":"TABLE OF CONTENTS"}},[t("span",[this._v("Table of contents")])])}],!1,null,"973d270c",null);t.default=component.exports}}]);