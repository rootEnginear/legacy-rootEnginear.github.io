(window.webpackJsonp=window.webpackJsonp||[]).push([[5,2],{170:function(e,t,n){var content=n(180);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(20).default)("1f8217e8",content,!0,{sourceMap:!1})},171:function(e,t,n){var map={"./no_image.jpg":172,"./profile.jpg":173,"./profile.webp":174};function r(e){var t=o(e);return n(t)}function o(e){if(!n.o(map,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return map[e]}r.keys=function(){return Object.keys(map)},r.resolve=o,e.exports=r,r.id=171},172:function(e,t,n){e.exports=n.p+"img/no_image.d9bcdb4.jpg"},173:function(e,t,n){e.exports=n.p+"img/profile.8907f87.jpg"},174:function(e,t,n){e.exports=n.p+"img/profile.6e36c8f.webp"},178:function(e,t,n){"use strict";n.r(t);var r={name:"MPicture",props:{dataImages:{type:Array,default:function(){return[]}},alt:{type:String,required:!0},fit:{type:String,default:"initial"},imgStyle:{type:String,default:""},imgClass:{type:String,default:""},responsive:Boolean,placeholderHeight:{type:String,default:"auto"},block:Boolean,parallax:Boolean,basePath:{type:String,default:"blog/"}},mounted:function(){var e=this;if("IntersectionObserver"in window){var t=new IntersectionObserver((function(n){n.forEach((function(n){if(n.isIntersecting){var r=n.target;e.image_intersected=!0,r.src=r.dataset.src,t.unobserve(r)}}))}));t.observe(this.$refs.img_element)}else{var n=!1,r=function t(){!1===n&&(n=!0,setTimeout((function(){var r=e.$refs.img_element;r.getBoundingClientRect().top<=window.innerHeight&&r.getBoundingClientRect().bottom>=0&&"none"!==getComputedStyle(r).display&&(e.image_intersected=!0,r.src=r.dataset.src,document.removeEventListener("scroll",t),window.removeEventListener("resize",t),window.removeEventListener("orientationchange",t)),n=!1}),200))};document.addEventListener("scroll",r),window.addEventListener("resize",r),window.addEventListener("orientationchange",r)}this.parallax&&(document.addEventListener("scroll",this.useParallax),window.addEventListener("resize",this.useParallax),window.addEventListener("orientationchange",this.useParallax))},beforeDestroy:function(){this.parallax&&(document.removeEventListener("scroll",this.useParallax),window.removeEventListener("resize",this.useParallax),window.removeEventListener("orientationchange",this.useParallax))},data:function(){return{image_intersected:!1,parallax_offset:0}},computed:{import_images:function(){var e=this;return this.dataImages.map((function(t){var r=t.src,o=t.type;return{src:n(171)("./".concat(e.basePath).concat(r)),type:o}}))},images_length:function(){return this.dataImages.length},placeholder_height:function(){return this.image_intersected?"":"display:block;height:".concat(this.placeholderHeight)},picture_style:function(){return"".concat(this.placeholder_height,";\n      ").concat(this.block?"display:block":"",";\n      object-fit:").concat(this.fit,";\n      ").concat(this.responsive?"width:100%;height:auto;display:block":"",";\n      ").concat(this.parallax?"transform: translate3d(0,".concat(this.parallax_offset,"px,0)"):"",";\n      ").concat(this.imgStyle)}},methods:{useParallax:function(){this.$refs.picture_element.getBoundingClientRect().top<=window.innerHeight&&this.$refs.picture_element.getBoundingClientRect().bottom>=0&&window.requestAnimationFrame(this.updateParallax)},updateParallax:function(){var e=window.innerHeight/2,t=this.$refs.picture_element&&this.$refs.picture_element.getBoundingClientRect().top||0,n=(this.$refs.picture_element&&this.$refs.picture_element.clientHeight||0)/2;this.parallax_offset=(0-(e-t+n)/2).toFixed(2)}}},o=n(8),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("picture",{ref:"picture_element"},[e._l(e.import_images,(function(t,r){var o=t.src,c=t.type;return n("source",{key:r,attrs:{srcset:e.image_intersected&&o,type:c}})})),e._v(" "),e.images_length?n("img",{ref:"img_element",class:e.imgClass,style:e.picture_style,attrs:{"data-src":e.import_images[e.images_length-1].src,alt:e.alt||"This picture has no alternative text."}}):e._e(),e._v(" "),n("noscript",{inlineTemplate:{render:function(){var e=this.$createElement,t=this._self._c||e;return this.images_length?t("img",{class:this.imgClass,style:this.picture_style,attrs:{src:this.import_images[this.images_length-1].src,alt:this.alt||"This picture has no alternative text."}}):this._e()},staticRenderFns:[]}})],2)}),[],!1,null,null,null);t.default=component.exports},179:function(e,t,n){"use strict";var r=n(170);n.n(r).a},180:function(e,t,n){(t=n(19)(!1)).push([e.i,".no-article[data-v-b4b2ec74]{text-align:center}.no-article>.emoji[data-v-b4b2ec74]{font-size:3rem;font-weight:700;letter-spacing:-4px}.no-article>h2[data-v-b4b2ec74]{margin:0;letter-spacing:1px}",""]),e.exports=t},197:function(e,t,n){"use strict";n.r(t);n(23);var r=n(2),o={asyncData:function(e){return Object(r.a)(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.$content,e.params,t.next=3,n("blog").fetch();case 3:return r=t.sent,t.abrupt("return",{docs:r});case 5:case"end":return t.stop()}}),t)})))()},head:function(){return{title:"Blog",meta:[{hid:"description",name:"description",content:"Blog of @rootEnginear"}]}},methods:{gotoArticle:function(path){this.$router.push(path)}}},c=(n(179),n(8)),component=Object(c.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h1",[e._v("Blog")]),e._v(" "),e.docs.length?n("div",{staticClass:"columns"},e._l(e.docs,(function(t){return n("div",{key:t.slug,staticClass:"column col-xs-12 col-md-6 col-lg-4 col-3 pb-2 d-flex"},[n("nuxt-link",{staticClass:"text-dark d-flex",staticStyle:{"text-decoration":"none",flex:"1 1 0"},attrs:{to:t.path}},[n("div",{staticClass:"card c-hand",staticStyle:{width:"100%"}},[n("div",{staticClass:"card-image"},[n("m-picture",{attrs:{"data-images":[{src:t.image||"no_image.jpg",type:"image/jpeg"}],"base-path":"",alt:t.title,responsive:""}})],1),e._v(" "),n("div",{staticClass:"card-header"},[n("div",{staticClass:"card-title h5"},[e._v(e._s(t.title))])]),e._v(" "),t.description?n("div",{staticClass:"card-body"},[e._v("\n            "+e._s(t.description)+"\n          ")]):e._e()])])],1)})),0):n("div",{staticClass:"no-article"},[n("span",{staticClass:"emoji"},[e._v("¯\\_(ツ)_/¯")]),e._v(" "),n("h2",[e._v("No articles!")]),e._v(" "),n("p",[e._v("Yet, I might write some soon!")])])])}),[],!1,null,"b4b2ec74",null);t.default=component.exports;installComponents(component,{MPicture:n(178).default})}}]);