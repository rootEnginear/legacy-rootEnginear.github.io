(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{113:function(t,n,e){},114:function(t,n,e){},115:function(t,n,e){},131:function(t,n,e){"use strict";var o=e(83),r=e(84),l=e(85),c={components:{AppGoTop:o.default,AppNavbar:r.default,AppFooter:l.default}},d=e(9),component=Object(d.a)(c,(function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"container grid-lg"},[n("app-navbar"),this._v(" "),n("hr",{staticClass:"mb-2 no-print"}),this._v(" "),n("nuxt"),this._v(" "),n("hr",{staticClass:"mt-2 no-print"}),this._v(" "),n("client-only",[n("app-go-top",{attrs:{placeholder:"/"!==this.$nuxt.$route.path?"กลับด้านบน":"Go top"}})],1),this._v(" "),n("app-footer")],1)}),[],!1,null,null,null);n.a=component.exports;installComponents(component,{AppNavbar:e(84).default,AppGoTop:e(83).default,AppFooter:e(85).default})},137:function(t,n,e){e(138),t.exports=e(139)},175:function(t,n,e){},176:function(t,n,e){},178:function(t,n,e){"use strict";e(113)},179:function(t,n,e){"use strict";e(114)},180:function(t,n,e){"use strict";e(115)},83:function(t,n,e){"use strict";e.r(n);var o={name:"AppGoTop",props:{placeholder:{default:"กลับด้านบน",type:String}},created:function(){var t,n,e,o,r=this;this.goTopHandler=(t=function(){r.useGoTop()},n=100,function(){var r=this,l=arguments,c=function(){o=null,e||t.apply(r,l)},d=e&&!o;clearTimeout(o),o=setTimeout(c,n),d&&t.apply(r,l)}),document.addEventListener("scroll",this.goTopHandler),window.addEventListener("resize",this.goTopHandler),window.addEventListener("orientationchange",this.goTopHandler)},data:function(){return{scroll_top_enabled:!1,goTopHandler:null}},methods:{useGoTop:function(){window.requestAnimationFrame(this.updateGoTopButton)},updateGoTopButton:function(){~~document.documentElement.scrollTop>=64?!this.scroll_top_enabled&&(this.scroll_top_enabled=!0):this.scroll_top_enabled&&(this.scroll_top_enabled=!1)},goTop:function(){window.scrollTo(0,0)}},beforeDestroy:function(){document.removeEventListener("scroll",this.goTopHandler),window.removeEventListener("resize",this.goTopHandler),window.removeEventListener("orientationchange",this.goTopHandler)}},r=(e(178),e(9)),component=Object(r.a)(o,(function(){var t=this.$createElement,n=this._self._c||t;return n("transition",{attrs:{name:"fade"}},[this.scroll_top_enabled?n("a",{staticClass:"gotop-button no-print",attrs:{"data-placeholder":this.placeholder},on:{click:this.goTop}}):this._e()])}),[],!1,null,"ca04fce2",null);n.default=component.exports},84:function(t,n,e){"use strict";e.r(n);var o={name:"AppNavbar"},r=(e(179),e(9)),component=Object(r.a)(o,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"columns no-print"},[e("div",{staticClass:"column"},["/"!==this.$nuxt.$route.path?e("a",{on:{click:function(n){return t.$router.go(-1)}}},[t._v("« Back")]):t._e()]),t._v(" "),e("nav",{staticClass:"main-navigation column col-auto",attrs:{role:"navigation"}},[e("nuxt-link",{attrs:{to:"/"}},[t._v("Home")]),t._v(" "),e("a",{attrs:{href:"https://rootenginear.gitbook.io/blog/"}},[t._v("Blog")])],1)])}),[],!1,null,"72c5973c",null);n.default=component.exports},85:function(t,n,e){"use strict";e.r(n);var o={name:"AppFooter"},r=(e(180),e(9)),component=Object(r.a)(o,(function(t,n){var e=n._c;return e("footer",{staticClass:"no-print"},[n._v("\n  Copyright © "+n._s((new Date).getFullYear())+"\n  "),e("span",{staticClass:"no-br"},[n._v("Suthep Chanchuphol")]),n._v(" "),e("span",{staticClass:"no-br"},[n._v("All right reserved.")]),n._v(" "),e("br"),n._v(" "),n._m(0)])}),[function(t,n){var e=n._c;return e("small",[n._v("Also, check out this awesome CSS framework –\n    "),e("a",{attrs:{href:"https://picturepan2.github.io/spectre/",rel:"nofollow,noopener,noreferrer",target:"_blank"}},[n._v("Spectre.css")])])}],!0,null,"598e774e",null);n.default=component.exports},88:function(t,n,e){"use strict";n.a=function(){var t,n,a,e,o,r;t=window,n=document,e="script",t[a="clarity"]=t[a]||function(){(t[a].q=t[a].q||[]).push(arguments)},(o=n.createElement(e)).async=1,o.src="https://www.clarity.ms/tag/44j5vcu0d4",(r=n.getElementsByTagName(e)[0]).parentNode.insertBefore(o,r)}}},[[137,6,1,7]]]);