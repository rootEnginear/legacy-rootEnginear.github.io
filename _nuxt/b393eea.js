(window.webpackJsonp=window.webpackJsonp||[]).push([[7,5],{195:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR4nGNiYAAAAAkAAxkR2eQAAAAASUVORK5CYII="},196:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyBjbGFzcz0idy02IGgtNiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjM2I0MzUxIiB2aWV3Qm94PSIwIDAgMjQgMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjIiIGQ9Ik0xMCA2SDZhMiAyIDAgMDAtMiAydjEwYTIgMiAwIDAwMiAyaDEwYTIgMiAwIDAwMi0ydi00TTE0IDRoNm0wIDB2Nm0wLTZMMTAgMTQiPjwvcGF0aD48L3N2Zz4="},197:function(t,e,n){"use strict";var r=n(5),o=n(26),c=n(27),l=n(139),d=n(68),M=n(9),h=n(53).f,f=n(54).f,m=n(12).f,A=n(198).trim,y="Number",I=r.Number,v=I,N=I.prototype,j=c(n(94)(N))==y,L="trim"in String.prototype,x=function(t){var e=d(t,!1);if("string"==typeof e&&e.length>2){var n,r,o,c=(e=L?e.trim():A(e,3)).charCodeAt(0);if(43===c||45===c){if(88===(n=e.charCodeAt(2))||120===n)return NaN}else if(48===c){switch(e.charCodeAt(1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+e}for(var code,l=e.slice(2),i=0,M=l.length;i<M;i++)if((code=l.charCodeAt(i))<48||code>o)return NaN;return parseInt(l,r)}}return+e};if(!I(" 0o1")||!I("0b1")||I("+0x1")){I=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof I&&(j?M((function(){N.valueOf.call(n)})):c(n)!=y)?l(new v(x(e)),n,I):x(e)};for(var _,w=n(8)?h(v):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),S=0;w.length>S;S++)o(v,_=w[S])&&!o(I,_)&&m(I,_,f(v,_));I.prototype=N,N.constructor=I,n(15)(r,y,I)}},198:function(t,e,n){var r=n(4),o=n(33),c=n(9),l=n(199),d="["+l+"]",M=RegExp("^"+d+d+"*"),h=RegExp(d+d+"*$"),f=function(t,e,n){var o={},d=c((function(){return!!l[t]()||"​"!="​"[t]()})),M=o[t]=d?e(m):l[t];n&&(o[n]=M),r(r.P+r.F*d,"String",o)},m=f.trim=function(t,e){return t=String(o(t)),1&e&&(t=t.replace(M,"")),2&e&&(t=t.replace(h,"")),t};t.exports=f},199:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},200:function(t,e,n){var map={"./blank.png":195,"./external-link.svg":196,"./github.svg":201,"./profile.jpg":202,"./profile.webp":203};function r(t){var e=o(t);return n(e)}function o(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}r.keys=function(){return Object.keys(map)},r.resolve=o,t.exports=r,r.id=200},201:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjM2I0MzUxIiByb2xlPSJpbWciIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGU+R2l0SHViIGljb248L3RpdGxlPjxwYXRoIGQ9Ik0xMiAuMjk3Yy02LjYzIDAtMTIgNS4zNzMtMTIgMTIgMCA1LjMwMyAzLjQzOCA5LjggOC4yMDUgMTEuMzg1LjYuMTEzLjgyLS4yNTguODItLjU3NyAwLS4yODUtLjAxLTEuMDQtLjAxNS0yLjA0LTMuMzM4LjcyNC00LjA0Mi0xLjYxLTQuMDQyLTEuNjFDNC40MjIgMTguMDcgMy42MzMgMTcuNyAzLjYzMyAxNy43Yy0xLjA4Ny0uNzQ0LjA4NC0uNzI5LjA4NC0uNzI5IDEuMjA1LjA4NCAxLjgzOCAxLjIzNiAxLjgzOCAxLjIzNiAxLjA3IDEuODM1IDIuODA5IDEuMzA1IDMuNDk1Ljk5OC4xMDgtLjc3Ni40MTctMS4zMDUuNzYtMS42MDUtMi42NjUtLjMtNS40NjYtMS4zMzItNS40NjYtNS45MyAwLTEuMzEuNDY1LTIuMzggMS4yMzUtMy4yMi0uMTM1LS4zMDMtLjU0LTEuNTIzLjEwNS0zLjE3NiAwIDAgMS4wMDUtLjMyMiAzLjMgMS4yMy45Ni0uMjY3IDEuOTgtLjM5OSAzLS40MDUgMS4wMi4wMDYgMi4wNC4xMzggMyAuNDA1IDIuMjgtMS41NTIgMy4yODUtMS4yMyAzLjI4NS0xLjIzLjY0NSAxLjY1My4yNCAyLjg3My4xMiAzLjE3Ni43NjUuODQgMS4yMyAxLjkxIDEuMjMgMy4yMiAwIDQuNjEtMi44MDUgNS42MjUtNS40NzUgNS45Mi40Mi4zNi44MSAxLjA5Ni44MSAyLjIyIDAgMS42MDYtLjAxNSAyLjg5Ni0uMDE1IDMuMjg2IDAgLjMxNS4yMS42OS44MjUuNTdDMjAuNTY1IDIyLjA5MiAyNCAxNy41OTIgMjQgMTIuMjk3YzAtNi42MjctNS4zNzMtMTItMTItMTIiLz48L3N2Zz4="},202:function(t,e,n){t.exports=n.p+"img/profile.a73d55d.jpg"},203:function(t,e,n){t.exports=n.p+"img/profile.2f59fe5.webp"},204:function(t,e,n){"use strict";n.r(e);n(197),n(25);var r={name:"MPicture",props:{dataImages:{type:Array,default:function(){return[]}},alt:{type:String,required:!0},fit:{type:String,default:"initial"},imgStyle:{type:String,default:""},imgClass:{type:String,default:""},responsive:Boolean,placeholderHeight:{type:String,default:"auto"},block:Boolean,parallax:Boolean,basePath:{type:String,default:"blog/"},useMaxWidth:Boolean,width:String|Number,height:String|Number},mounted:function(){var t=this;if("loading"in HTMLImageElement.prototype)this.$refs.img_element.src=this.$refs.img_element.dataset.src,this.image_intersected=!0;else if("IntersectionObserver"in window){var e=new IntersectionObserver((function(n){n.forEach((function(n){if(n.isIntersecting){var r=n.target;t.image_intersected=!0,r.src=r.dataset.src,e.unobserve(r)}}))}));e.observe(this.$refs.img_element)}else{var n=!1,r=function e(){!1===n&&(n=!0,setTimeout((function(){var r=t.$refs.img_element;r.getBoundingClientRect().top<=window.innerHeight&&r.getBoundingClientRect().bottom>=0&&"none"!==getComputedStyle(r).display&&(t.image_intersected=!0,r.src=r.dataset.src,document.removeEventListener("scroll",e),window.removeEventListener("resize",e),window.removeEventListener("orientationchange",e)),n=!1}),200))};document.addEventListener("scroll",r),window.addEventListener("resize",r),window.addEventListener("orientationchange",r)}this.parallax&&(document.addEventListener("scroll",this.useParallax),window.addEventListener("resize",this.useParallax),window.addEventListener("orientationchange",this.useParallax))},beforeDestroy:function(){this.parallax&&(document.removeEventListener("scroll",this.useParallax),window.removeEventListener("resize",this.useParallax),window.removeEventListener("orientationchange",this.useParallax))},data:function(){return{image_intersected:!1,parallax_offset:0}},computed:{import_images:function(){var t=this;return this.dataImages.map((function(e){var r=e.src,o=e.href,c=e.type;return{src:o?r:n(200)("./".concat(t.basePath).concat(r)),type:c}}))},images_length:function(){return this.dataImages.length},placeholder_height:function(){return this.image_intersected?"":"display:block;height:".concat(this.placeholderHeight)},picture_style:function(){return"".concat(this.placeholder_height,";\n      ").concat(this.block?"display:block":"",";\n      object-fit:").concat(this.fit,";\n      ").concat(this.useMaxWidth?"margin:auto;max-":"","\n      ").concat(this.responsive?"width:100%;height:auto;display:block":"",";\n      ").concat(this.parallax?"transform: translate3d(0,".concat(this.parallax_offset,"px,0)"):"",";\n      ").concat(this.imgStyle)}},methods:{useParallax:function(){this.$refs.picture_element.getBoundingClientRect().top<=window.innerHeight&&this.$refs.picture_element.getBoundingClientRect().bottom>=0&&window.requestAnimationFrame(this.updateParallax)},updateParallax:function(){var t=window.innerHeight/2,e=this.$refs.picture_element&&this.$refs.picture_element.getBoundingClientRect().top||0,n=(this.$refs.picture_element&&this.$refs.picture_element.clientHeight||0)/2;this.parallax_offset=(0-(t-e+n)/2).toFixed(2)}}},o=n(10),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("picture",{ref:"picture_element"},[t._l(t.import_images,(function(e,n){var o=e.src,c=e.type;return r("source",{key:n,attrs:{srcset:t.image_intersected&&o,type:c}})})),t._v(" "),t.images_length?r("img",{ref:"img_element",class:t.imgClass,style:t.picture_style,attrs:{src:n(195),"data-src":t.import_images[t.images_length-1].src,alt:t.alt||"This picture has no alternative text.",loading:"lazy",width:t.width,height:t.height}}):t._e(),t._v(" "),r("noscript",{inlineTemplate:{render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.images_length?n("img",{class:t.imgClass,style:t.picture_style,attrs:{src:t.import_images[t.images_length-1].src,alt:t.alt||"This picture has no alternative text."}}):t._e()},staticRenderFns:[]}})],2)}),[],!1,null,null,null);e.default=component.exports},210:function(t,e,n){},211:function(t,e,n){"use strict";n(210)},226:function(t,e,n){"use strict";n.r(e);var r=n(2),o=(n(34),{asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,t.params,e.next=3,n("blog").only(["slug","path","image","title","description","dateWritten"]).sortBy("dateWritten","desc").fetch();case 3:return r=e.sent,e.abrupt("return",{docs:r});case 5:case"end":return e.stop()}}),e)})))()},head:function(){return{title:"Blog posts",titleTemplate:"%s - Blog of @rootEnginear",meta:[{hid:"description",name:"description",content:"Blog of @rootEnginear"}]}},computed:{docs_length:function(){return(this.docs||[]).length}},methods:{gotoArticle:function(path){this.$router.push(path)}},filters:{formatDate:function(t){return Intl.DateTimeFormat("en-GB",{year:"numeric",month:"numeric",day:"numeric"}).format(new Date(t))}}}),c=(n(211),n(10)),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",[t._v("Blog")]),t._v(" "),t.docs.length?n("div",{staticClass:"cols"},t._l(t.docs,(function(e,i){return n("div",{key:e.slug,staticClass:"col- col-xs-12 col-md-6 col-lg-4 col-3 pb-2 d-flex"},[n("nuxt-link",{staticClass:"text-dark d-flex",staticStyle:{"text-decoration":"none",flex:"1 1 0"},attrs:{to:e.path}},[n("div",{staticClass:"card c-hand",staticStyle:{width:"100%"}},[n("div",{staticClass:"card-image",staticStyle:{position:"relative"}},[n("m-picture",{staticStyle:{position:"absolute",top:"0"},attrs:{"data-images":[{src:e.image||"https://picsum.photos/id/"+(t.docs_length-i-1)+"/404",href:!e.image,type:"image/jpeg"}],"base-path":"",alt:e.title,responsive:"",width:"404",height:"404"}})],1),t._v(" "),n("div",{staticClass:"card-header"},[n("div",{staticClass:"card-title h5"},[t._v(t._s(e.title))])]),t._v(" "),e.description?n("div",{staticClass:"card-body"},[t._v("\n            "+t._s(e.description)+"\n          ")]):t._e(),t._v(" "),n("div",{staticClass:"card-footer text-right",staticStyle:{"font-size":"80%","padding-top":"0.4rem"}},[t._v("\n            "+t._s(t._f("formatDate")(e.dateWritten))+" 📅\n          ")])])])],1)})),0):n("div",{staticClass:"no-article"},[n("span",{staticClass:"emoji"},[t._v("¯\\_(ツ)_/¯")]),t._v(" "),n("h2",[t._v("No articles!")]),t._v(" "),n("p",[t._v("Yet, I might write some soon!")])])])}),[],!1,null,"35abaf91",null);e.default=component.exports;installComponents(component,{MPicture:n(204).default})}}]);