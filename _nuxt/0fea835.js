(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{197:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyBjbGFzcz0idy02IGgtNiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMiIgZD0iTTEwIDZINmEyIDIgMCAwMC0yIDJ2MTBhMiAyIDAgMDAyIDJoMTBhMiAyIDAgMDAyLTJ2LTRNMTQgNGg2bTAgMHY2bTAtNkwxMCAxNCI+PC9wYXRoPjwvc3ZnPg=="},203:function(t,e,n){"use strict";e.a={target:"static",head:{htmlAttrs:{lang:"th"},title:"An untitled page",titleTemplate:"%s - All about @rootEnginear",meta:[{charset:"utf-8"},{name:"viewport",content:"width=device-width, initial-scale=1"},{hid:"description",name:"description",content:"Keep coding and seeking new possibilities."}],link:[{rel:"icon",type:"image/x-icon",href:"/favicon.ico"},{rel:"preconnect",href:"https://cdn.jsdelivr.net"},{rel:"dns-prefetch",href:"https://cdn.jsdelivr.net"},{rel:"preload",as:"style",href:"https://cdn.jsdelivr.net/npm/katex@0.11.1/dist/katex.min.css",integrity:"sha384-zB1R0rpPzHqg7Kpt0Aljp8JPLqbXI3bhnPWROx27a9N0Ll6ZP/+DiW/UqRcLbRjq",crossorigin:"anonymous",onload:"this.onload=null;this.rel='stylesheet'"},{rel:"preload",as:"font",type:"font/woff2",href:"https://cdn.jsdelivr.net/gh/IBM/plex/IBM-Plex-Sans/fonts/complete/woff2/IBMPlexSans-Regular.woff2",crossorigin:""},{rel:"preload",as:"font",type:"font/woff",href:"https://cdn.jsdelivr.net/gh/IBM/plex/IBM-Plex-Sans/fonts/complete/woff/IBMPlexSans-Regular.woff",crossorigin:""},{rel:"preload",as:"font",type:"font/ttf",href:"https://cdn.jsdelivr.net/gh/IBM/plex/IBM-Plex-Sans/fonts/complete/ttf/IBMPlexSans-Regular.ttf",crossorigin:""},{rel:"preload",as:"font",type:"font/woff2",href:"https://cdn.jsdelivr.net/gh/IBM/plex/IBM-Plex-Sans/fonts/complete/woff2/IBMPlexSans-Bold.woff2",crossorigin:""},{rel:"preload",as:"font",type:"font/woff",href:"https://cdn.jsdelivr.net/gh/IBM/plex/IBM-Plex-Sans/fonts/complete/woff/IBMPlexSans-Bold.woff",crossorigin:""},{rel:"preload",as:"font",type:"font/ttf",href:"https://cdn.jsdelivr.net/gh/IBM/plex/IBM-Plex-Sans/fonts/complete/ttf/IBMPlexSans-Bold.ttf",crossorigin:""}],noscript:[{innerHTML:'\n        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.11.1/dist/katex.min.css" integrity="sha384-zB1R0rpPzHqg7Kpt0Aljp8JPLqbXI3bhnPWROx27a9N0Ll6ZP/+DiW/UqRcLbRjq" crossorigin="anonymous">\n        <link rel="stylesheet" href="/no-script.css">\n        '}],__dangerouslyDisableSanitizers:["noscript"]},css:["~/css/fonts.css","~/css/main.scss"],plugins:[],components:!0,buildModules:[["@nuxtjs/google-analytics",{id:"G-F2N4EGMQ22"}]],modules:["@nuxt/content","@nuxtjs/sitemap"],content:{liveEdit:!1,markdown:{remarkPlugins:function(){return["remark-squeeze-paragraphs","remark-slug","remark-external-links","remark-math","remark-attr","~/plugins/remark-sub-super-modified.js"]},rehypePlugins:["rehype-katex"]}},sitemap:{hostname:"https://rootenginear.github.io/",exclude:["/blog"],routes:[{url:"/",changefreq:"daily",priority:1},"/blog/mystudy-1-1","/blog/mystudy-1-2","/blog/mystudy-1-3"],defaults:{changefreq:"monthly",priority:.7}},build:{}}},205:function(t,e,n){var content=n(210);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(23).default)("41ad30da",content,!0,{sourceMap:!1})},209:function(t,e,n){"use strict";n(205)},210:function(t,e,n){(e=n(22)(!1)).push([t.i,"img[data-v-103fe2d8]{height:1rem;transform:translateY(.25rem)}",""]),t.exports=e},223:function(t,e,n){"use strict";n.r(e);n(21);var r=n(2),o={name:"AppHidden",props:{data:{type:String,default:""}},data:function(){return{is_revealing:!1}},computed:{display_data:function(){return this.is_revealing?this.data:"Double click to reveal data."},span_style:function(){return{userSelect:["none","auto"][+this.is_revealing],cursor:["pointer","auto"][+this.is_revealing]}}},methods:{reveal:function(){this.is_revealing=!this.is_revealing}}},l=n(7),c=Object(l.a)(o,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("span",{style:t.span_style,on:{dblclick:function(e){return t.reveal()}}},[t._v("\n  "+t._s(t.display_data)+"\n")])}),[],!1,null,null,null).exports,d={name:"AppExternalLink"},f=(n(209),Object(l.a)(d,(function(t,e){var r=e._c;return r("a",{attrs:{href:e.props.dataHref,target:"_blank",rel:"noopener noreferrer"}},[r("img",{attrs:{src:n(197),alt:e.props.dataAlt||"Go to the homepage"}})])}),[],!0,null,"103fe2d8",null).exports),h=n(203),m={components:{AppHidden:c,AppExternalLink:f},asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,header;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,t.params,e.next=3,n("index").fetch();case 3:return r=e.sent,e.next=6,n("header/index").fetch();case 6:return header=e.sent,e.abrupt("return",{doc:r,header:header});case 8:case"end":return e.stop()}}),e)})))()},head:function(){return{htmlAttrs:{lang:this.doc.lang||h.a.head.htmlAttrs.lang},title:this.doc.title||h.a.head.title,meta:[{hid:"description",name:"description",content:this.doc.description||h.a.head.meta[2].content}]}},methods:{gotoHash:function(t){window.scrollTo(0,document.getElementById(t).getBoundingClientRect().top+window.scrollY-16)}}},y=Object(l.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("article",[n("header",[t.header?n("nuxt-content",{attrs:{document:t.header}}):t._e()],1),t._v(" "),t.header?n("hr"):t._e(),t._v(" "),n("div",{staticClass:"cols"},[t.doc.toc.length?n("aside",{staticClass:"col- col-3 col-md-12 no-print"},[n("ul",{staticClass:"menu toc-sticky"},[t._m(0),t._v(" "),t._l(t.doc.toc,(function(header){return n("li",{key:header.id,staticClass:"menu-item"},[n("a",{class:{indent:3===header.depth},on:{click:function(e){return t.gotoHash(header.id)}}},[t._v(t._s(header.text))])])}))],2),t._v(" "),n("br")]):t._e(),t._v(" "),n("main",{class:{"col- col-md-12":1,"col-9":t.doc.toc.length}},[n("nuxt-content",{attrs:{document:t.doc}})],1)])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("li",{staticClass:"divider",attrs:{"data-content":"TABLE OF CONTENTS"}},[e("span",[this._v("Table of contents")])])}],!1,null,null,null);e.default=y.exports}}]);