(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{176:function(e,t,n){"use strict";t.a={mode:"universal",target:"static",head:{htmlAttrs:{lang:"th"},title:"An untitled page",titleTemplate:"%s - All about @rootEnginear",meta:[{charset:"utf-8"},{name:"viewport",content:"width=device-width, initial-scale=1"},{hid:"description",name:"description",content:"Keep coding and seeking new possibilities."}],link:[{rel:"icon",type:"image/x-icon",href:"/favicon.ico"},{rel:"preconnect",href:"https://cdn.jsdelivr.net"},{rel:"dns-prefetch",href:"https://cdn.jsdelivr.net"},{rel:"preload",as:"style",href:"https://cdn.jsdelivr.net/npm/katex@0.11.1/dist/katex.min.css",integrity:"sha384-zB1R0rpPzHqg7Kpt0Aljp8JPLqbXI3bhnPWROx27a9N0Ll6ZP/+DiW/UqRcLbRjq",crossorigin:"anonymous",onload:"this.onload=null;this.rel='stylesheet'"},{rel:"preload",as:"font",type:"font/woff2",href:"https://cdn.jsdelivr.net/gh/IBM/plex/IBM-Plex-Sans/fonts/complete/woff2/IBMPlexSans-Regular.woff2",crossorigin:""},{rel:"preload",as:"font",type:"font/woff",href:"https://cdn.jsdelivr.net/gh/IBM/plex/IBM-Plex-Sans/fonts/complete/woff/IBMPlexSans-Regular.woff",crossorigin:""},{rel:"preload",as:"font",type:"font/ttf",href:"https://cdn.jsdelivr.net/gh/IBM/plex/IBM-Plex-Sans/fonts/complete/ttf/IBMPlexSans-Regular.ttf",crossorigin:""},{rel:"preload",as:"font",type:"font/woff2",href:"https://cdn.jsdelivr.net/gh/IBM/plex/IBM-Plex-Sans/fonts/complete/woff2/IBMPlexSans-Bold.woff2",crossorigin:""},{rel:"preload",as:"font",type:"font/woff",href:"https://cdn.jsdelivr.net/gh/IBM/plex/IBM-Plex-Sans/fonts/complete/woff/IBMPlexSans-Bold.woff",crossorigin:""},{rel:"preload",as:"font",type:"font/ttf",href:"https://cdn.jsdelivr.net/gh/IBM/plex/IBM-Plex-Sans/fonts/complete/ttf/IBMPlexSans-Bold.ttf",crossorigin:""}],noscript:[{innerHTML:'\n        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.11.1/dist/katex.min.css" integrity="sha384-zB1R0rpPzHqg7Kpt0Aljp8JPLqbXI3bhnPWROx27a9N0Ll6ZP/+DiW/UqRcLbRjq" crossorigin="anonymous">\n        <link rel="stylesheet" href="/no-script.css">\n        '}],__dangerouslyDisableSanitizers:["noscript"]},css:["~/css/fonts.css","~/css/main.scss"],plugins:[],components:!0,buildModules:[],modules:["@nuxt/content","@nuxtjs/sitemap"],content:{markdown:{remarkPlugins:function(){return["remark-squeeze-paragraphs","remark-slug","remark-external-links","remark-math","remark-attr","~/plugins/remark-sub-super-modified.js"]},rehypePlugins:["rehype-katex"]}},sitemap:{hostname:"https://rootenginear.github.io/",exclude:["/blog"],routes:[{url:"/",changefreq:"daily",priority:1},"/blog/mystudy-1-1","/blog/mystudy-1-2","/blog/mystudy-1-3"],defaults:{changefreq:"monthly",priority:.7}},build:{}}},198:function(e,t,n){"use strict";n.r(t);n(23);var r=n(2),o=n(176),l={asyncData:function(e){return Object(r.a)(regeneratorRuntime.mark((function t(){var n,r,header;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.$content,e.params,t.next=3,n("index").fetch();case 3:return r=t.sent,t.next=6,n("header/index").fetch();case 6:return header=t.sent,t.abrupt("return",{doc:r,header:header});case 8:case"end":return t.stop()}}),t)})))()},head:function(){return{htmlAttrs:{lang:this.doc.lang||o.a.head.htmlAttrs.lang},title:this.doc.title||o.a.head.title,meta:[{hid:"description",name:"description",content:this.doc.description||o.a.head.meta[2].content}]}},methods:{gotoHash:function(e){window.scrollTo(0,document.getElementById(e).getBoundingClientRect().top+window.scrollY-16)}}},c=n(8),component=Object(c.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("article",[n("header",[e.header?n("nuxt-content",{attrs:{document:e.header}}):e._e()],1),e._v(" "),e.header?n("hr"):e._e(),e._v(" "),n("div",{staticClass:"cols"},[e.doc.toc.length?n("aside",{staticClass:"col- col-3 col-md-12"},[n("ul",{staticClass:"menu toc-sticky"},[e._m(0),e._v(" "),e._l(e.doc.toc,(function(header){return n("li",{key:header.id,staticClass:"menu-item"},[n("a",{class:{indent:3===header.depth},on:{click:function(t){return e.gotoHash(header.id)}}},[e._v(e._s(header.text))])])}))],2),e._v(" "),n("br")]):e._e(),e._v(" "),n("main",{class:{"col- col-md-12":1,"col-9":e.doc.toc.length}},[n("nuxt-content",{attrs:{document:e.doc}})],1)])])}),[function(){var e=this.$createElement,t=this._self._c||e;return t("li",{staticClass:"divider",attrs:{"data-content":"TABLE OF CONTENTS"}},[t("span",[this._v("Table of contents")])])}],!1,null,null,null);t.default=component.exports}}]);