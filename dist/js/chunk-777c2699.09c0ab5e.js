(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-777c2699"],{"2a7f":function(t,e,i){"use strict";i.d(e,"a",(function(){return a}));var s=i("71d9"),n=i("80d2"),a=Object(n["i"])("v-toolbar__title"),o=Object(n["i"])("v-toolbar__items");s["a"]},"36a7":function(t,e,i){},"3a2f":function(t,e,i){"use strict";var s=i("ade3"),n=(i("a9e3"),i("e25e"),i("9734"),i("4ad4")),a=i("a9ad"),o=i("16b7"),r=i("b848"),c=i("f573"),l=i("f2e7"),h=i("80d2"),d=i("d9bd"),u=i("58df");e["a"]=Object(u["a"])(a["a"],o["a"],r["a"],c["a"],l["a"]).extend({name:"v-tooltip",props:{closeDelay:{type:[Number,String],default:0},disabled:Boolean,fixed:{type:Boolean,default:!0},openDelay:{type:[Number,String],default:0},openOnHover:{type:Boolean,default:!0},tag:{type:String,default:"span"},transition:String},data:function(){return{calculatedMinWidth:0,closeDependents:!1}},computed:{calculatedLeft:function(){var t=this.dimensions,e=t.activator,i=t.content,s=!this.bottom&&!this.left&&!this.top&&!this.right,n=!1!==this.attach?e.offsetLeft:e.left,a=0;return this.top||this.bottom||s?a=n+e.width/2-i.width/2:(this.left||this.right)&&(a=n+(this.right?e.width:-i.width)+(this.right?10:-10)),this.nudgeLeft&&(a-=parseInt(this.nudgeLeft)),this.nudgeRight&&(a+=parseInt(this.nudgeRight)),"".concat(this.calcXOverflow(a,this.dimensions.content.width),"px")},calculatedTop:function(){var t=this.dimensions,e=t.activator,i=t.content,s=!1!==this.attach?e.offsetTop:e.top,n=0;return this.top||this.bottom?n=s+(this.bottom?e.height:-i.height)+(this.bottom?10:-10):(this.left||this.right)&&(n=s+e.height/2-i.height/2),this.nudgeTop&&(n-=parseInt(this.nudgeTop)),this.nudgeBottom&&(n+=parseInt(this.nudgeBottom)),"".concat(this.calcYOverflow(n+this.pageYOffset),"px")},classes:function(){return{"v-tooltip--top":this.top,"v-tooltip--right":this.right,"v-tooltip--bottom":this.bottom,"v-tooltip--left":this.left,"v-tooltip--attached":""===this.attach||!0===this.attach||"attach"===this.attach}},computedTransition:function(){return this.transition?this.transition:this.isActive?"scale-transition":"fade-transition"},offsetY:function(){return this.top||this.bottom},offsetX:function(){return this.left||this.right},styles:function(){return{left:this.calculatedLeft,maxWidth:Object(h["g"])(this.maxWidth),minWidth:Object(h["g"])(this.minWidth),opacity:this.isActive?.9:0,top:this.calculatedTop,zIndex:this.zIndex||this.activeZIndex}}},beforeMount:function(){var t=this;this.$nextTick((function(){t.value&&t.callActivate()}))},mounted:function(){"v-slot"===Object(h["t"])(this,"activator",!0)&&Object(d["b"])("v-tooltip's activator slot must be bound, try '<template #activator=\"data\"><v-btn v-on=\"data.on>'",this)},methods:{activate:function(){this.updateDimensions(),requestAnimationFrame(this.startTransition)},deactivate:function(){this.runDelay("close")},genActivatorListeners:function(){var t=this,e=n["a"].options.methods.genActivatorListeners.call(this);return e.focus=function(e){t.getActivator(e),t.runDelay("open")},e.blur=function(e){t.getActivator(e),t.runDelay("close")},e.keydown=function(e){e.keyCode===h["x"].esc&&(t.getActivator(e),t.runDelay("close"))},e},genActivatorAttributes:function(){return{"aria-haspopup":!0,"aria-expanded":String(this.isActive)}},genTransition:function(){var t=this.genContent();return this.computedTransition?this.$createElement("transition",{props:{name:this.computedTransition}},[t]):t},genContent:function(){var t;return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-tooltip__content",class:(t={},Object(s["a"])(t,this.contentClass,!0),Object(s["a"])(t,"menuable__content__active",this.isActive),Object(s["a"])(t,"v-tooltip__content--fixed",this.activatorFixed),t),style:this.styles,attrs:this.getScopeIdAttrs(),directives:[{name:"show",value:this.isContentActive}],ref:"content"}),this.getContentSlot())}},render:function(t){var e=this;return t(this.tag,{staticClass:"v-tooltip",class:this.classes},[this.showLazyContent((function(){return[e.genTransition()]})),this.genActivator()])}})},"5acf":function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-row",[i("v-col",{attrs:{sm:"12"}},[i("base-card",[i("v-card-text",[i("v-data-table",{attrs:{headers:t.headers,items:t.Bots,"hide-default-footer":"","disable-sort":"","no-data-text":"Немає жодного бота"},scopedSlots:t._u([{key:"top",fn:function(){return[i("v-toolbar",{attrs:{flat:""}},[i("v-toolbar-title",[t._v("Боти")]),i("v-divider",{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),i("v-btn",{attrs:{color:"primary",to:"bots/bot"}},[t._v("Додати")])],1)]},proxy:!0},{key:"item.Status",fn:function(e){var s=e.item;return["active"===s.Status?[i("v-chip",{attrs:{color:"success",label:"",small:"","text-color":"white"}},[i("v-icon",{attrs:{small:"",left:""}},[t._v("mdi-check")]),t._v(" Активний ")],1)]:[i("v-chip",{attrs:{color:"info",label:"",small:"","text-color":"white"}},[i("v-progress-circular",{staticClass:"mr-2",attrs:{indeterminate:"",value:100,color:"white",size:15,width:2}}),t._v(" Обробка ")],1)]]}},{key:"item.actions",fn:function(e){var s=e.item;return[i("div",{staticClass:"flex"},[i("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,a=e.attrs;return[i("v-btn",t._g(t._b({attrs:{icon:"",to:{name:"Bot",params:{id:s.id}}}},"v-btn",a,!1),n),[i("v-icon",[t._v("mdi-eye")])],1)]}}],null,!0)},[i("span",[t._v("Відкрити")])]),i("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,a=e.attrs;return[i("v-btn",t._g(t._b({attrs:{icon:""},on:{click:function(e){return t.removeBot(s.id)}}},"v-btn",a,!1),n),[i("v-icon",[t._v("mdi-trash-can-outline")])],1)]}}],null,!0)},[i("span",[t._v("Видалити")])])],1)]}}])})],1)],1)],1)],1)},n=[],a=i("1da1"),o=(i("96cf"),i("4160"),i("159b"),i("59ca")),r=i.n(o),c=(i("ea7b"),i("e71f"),{data:function(){return{headers:[{text:"Назва",value:"Name"},{text:"Біржа",value:"AccountPlatform"},{text:"Тип",value:"AccountType"},{text:"Статус",value:"Status",width:"1%",align:"center"},{text:"Дії",value:"actions",align:"center",width:"1%"}],Bots:[]}},created:function(){var t=this,e=r.a.firestore();r.a.auth().onAuthStateChanged(function(){var i=Object(a["a"])(regeneratorRuntime.mark((function i(s){var n;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:n=e.collection("users").doc(s.uid).collection("Bots"),n.onSnapshot((function(i){t.Bots=[],i.forEach(function(){var i=Object(a["a"])(regeneratorRuntime.mark((function i(n){var a;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return i.next=2,e.collection("users").doc(s.uid).collection("PriceDrivers").doc(n.data()["PriceDriver"]).get();case 2:return a=i.sent,i.t0=t.Bots,i.t1=n.id,i.t2=n.data()["Name"],i.next=9,a.data()["AccountPlatform"];case 9:return i.t3=i.sent,i.next=12,a.data()["AccountType"];case 12:i.t4=i.sent,i.t5=n.data()["Status"],i.t6={id:i.t1,Name:i.t2,AccountPlatform:i.t3,AccountType:i.t4,Status:i.t5},i.t0.push.call(i.t0,i.t6);case 16:case"end":return i.stop()}}),i)})));return function(t){return i.apply(this,arguments)}}())}));case 2:case"end":return i.stop()}}),i)})));return function(t){return i.apply(this,arguments)}}())},methods:{removeBot:function(t){var e=r.a.firestore();r.a.auth().onAuthStateChanged(function(){var i=Object(a["a"])(regeneratorRuntime.mark((function i(s){var n;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:n=e.collection("users").doc(s.uid).collection("Bots"),n.doc(t)["delete"]();case 2:case"end":return i.stop()}}),i)})));return function(t){return i.apply(this,arguments)}}())}}}),l=c,h=i("2877"),d=i("6544"),u=i.n(d),p=i("8336"),v=i("99d9"),f=i("cc20"),m=i("62ad"),g=i("8fea"),b=i("ce7e"),S=i("132d"),y=i("490a"),_=i("0fd9"),x=i("71d9"),w=i("2a7f"),C=i("3a2f"),O=Object(h["a"])(l,s,n,!1,null,null,null);e["default"]=O.exports;u()(O,{VBtn:p["a"],VCardText:v["a"],VChip:f["a"],VCol:m["a"],VDataTable:g["a"],VDivider:b["a"],VIcon:S["a"],VProgressCircular:y["a"],VRow:_["a"],VToolbar:x["a"],VToolbarTitle:w["a"],VTooltip:C["a"]})},"5e23":function(t,e,i){},"71d9":function(t,e,i){"use strict";var s=i("3835"),n=i("5530"),a=(i("a9e3"),i("e25e"),i("0481"),i("4160"),i("5e23"),i("8dd9")),o=i("adda"),r=i("80d2"),c=i("d9bd");e["a"]=a["a"].extend({name:"v-toolbar",props:{absolute:Boolean,bottom:Boolean,collapse:Boolean,dense:Boolean,extended:Boolean,extensionHeight:{default:48,type:[Number,String]},flat:Boolean,floating:Boolean,prominent:Boolean,short:Boolean,src:{type:[String,Object],default:""},tag:{type:String,default:"header"}},data:function(){return{isExtended:!1}},computed:{computedHeight:function(){var t=this.computedContentHeight;if(!this.isExtended)return t;var e=parseInt(this.extensionHeight);return this.isCollapsed?t:t+(isNaN(e)?0:e)},computedContentHeight:function(){return this.height?parseInt(this.height):this.isProminent&&this.dense?96:this.isProminent&&this["short"]?112:this.isProminent?128:this.dense?48:this["short"]||this.$vuetify.breakpoint.smAndDown?56:64},classes:function(){return Object(n["a"])(Object(n["a"])({},a["a"].options.computed.classes.call(this)),{},{"v-toolbar":!0,"v-toolbar--absolute":this.absolute,"v-toolbar--bottom":this.bottom,"v-toolbar--collapse":this.collapse,"v-toolbar--collapsed":this.isCollapsed,"v-toolbar--dense":this.dense,"v-toolbar--extended":this.isExtended,"v-toolbar--flat":this.flat,"v-toolbar--floating":this.floating,"v-toolbar--prominent":this.isProminent})},isCollapsed:function(){return this.collapse},isProminent:function(){return this.prominent},styles:function(){return Object(n["a"])(Object(n["a"])({},this.measurableStyles),{},{height:Object(r["g"])(this.computedHeight)})}},created:function(){var t=this,e=[["app","<v-app-bar app>"],["manual-scroll",'<v-app-bar :value="false">'],["clipped-left","<v-app-bar clipped-left>"],["clipped-right","<v-app-bar clipped-right>"],["inverted-scroll","<v-app-bar inverted-scroll>"],["scroll-off-screen","<v-app-bar scroll-off-screen>"],["scroll-target","<v-app-bar scroll-target>"],["scroll-threshold","<v-app-bar scroll-threshold>"],["card","<v-app-bar flat>"]];e.forEach((function(e){var i=Object(s["a"])(e,2),n=i[0],a=i[1];t.$attrs.hasOwnProperty(n)&&Object(c["a"])(n,a,t)}))},methods:{genBackground:function(){var t={height:Object(r["g"])(this.computedHeight),src:this.src},e=this.$scopedSlots.img?this.$scopedSlots.img({props:t}):this.$createElement(o["a"],{props:t});return this.$createElement("div",{staticClass:"v-toolbar__image"},[e])},genContent:function(){return this.$createElement("div",{staticClass:"v-toolbar__content",style:{height:Object(r["g"])(this.computedContentHeight)}},Object(r["s"])(this))},genExtension:function(){return this.$createElement("div",{staticClass:"v-toolbar__extension",style:{height:Object(r["g"])(this.extensionHeight)}},Object(r["s"])(this,"extension"))}},render:function(t){this.isExtended=this.extended||!!this.$scopedSlots.extension;var e=[this.genContent()],i=this.setBackgroundColor(this.color,{class:this.classes,style:this.styles,on:this.$listeners});return this.isExtended&&e.push(this.genExtension()),(this.src||this.$scopedSlots.img)&&e.unshift(this.genBackground()),t(this.tag,i,e)}})},"8a79":function(t,e,i){"use strict";var s=i("23e7"),n=i("06cf").f,a=i("50c4"),o=i("577e"),r=i("5a34"),c=i("1d80"),l=i("ab13"),h=i("c430"),d="".endsWith,u=Math.min,p=l("endsWith"),v=!h&&!p&&!!function(){var t=n(String.prototype,"endsWith");return t&&!t.writable}();s({target:"String",proto:!0,forced:!v&&!p},{endsWith:function(t){var e=o(c(this));r(t);var i=arguments.length>1?arguments[1]:void 0,s=e.length,n=void 0===i?s:u(a(i),s),l=o(t);return d?d.call(e,l,n):e.slice(n-l.length,n)===l}})},"8efc":function(t,e,i){},9734:function(t,e,i){},adda:function(t,e,i){"use strict";var s=i("53ca"),n=(i("a9e3"),i("a15b"),i("8a79"),i("2ca0"),i("4795"),i("8efc"),i("90a2")),a=(i("36a7"),i("24b2")),o=i("58df"),r=Object(o["a"])(a["a"]).extend({name:"v-responsive",props:{aspectRatio:[String,Number],contentClass:String},computed:{computedAspectRatio:function(){return Number(this.aspectRatio)},aspectStyle:function(){return this.computedAspectRatio?{paddingBottom:1/this.computedAspectRatio*100+"%"}:void 0},__cachedSizer:function(){return this.aspectStyle?this.$createElement("div",{style:this.aspectStyle,staticClass:"v-responsive__sizer"}):[]}},methods:{genContent:function(){return this.$createElement("div",{staticClass:"v-responsive__content",class:this.contentClass},this.$slots["default"])}},render:function(t){return t("div",{staticClass:"v-responsive",style:this.measurableStyles,on:this.$listeners},[this.__cachedSizer,this.genContent()])}}),c=r,l=i("7560"),h=i("d9f7"),d=i("d9bd"),u="undefined"!==typeof window&&"IntersectionObserver"in window;e["a"]=Object(o["a"])(c,l["a"]).extend({name:"v-img",directives:{intersect:n["a"]},props:{alt:String,contain:Boolean,eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:function(){return{root:void 0,rootMargin:void 0,threshold:void 0}}},position:{type:String,default:"center center"},sizes:String,src:{type:[String,Object],default:""},srcset:String,transition:{type:[Boolean,String],default:"fade-transition"}},data:function(){return{currentSrc:"",image:null,isLoading:!0,calculatedAspectRatio:void 0,naturalWidth:void 0,hasError:!1}},computed:{computedAspectRatio:function(){return Number(this.normalisedSrc.aspect||this.calculatedAspectRatio)},normalisedSrc:function(){return this.src&&"object"===Object(s["a"])(this.src)?{src:this.src.src,srcset:this.srcset||this.src.srcset,lazySrc:this.lazySrc||this.src.lazySrc,aspect:Number(this.aspectRatio||this.src.aspect)}:{src:this.src,srcset:this.srcset,lazySrc:this.lazySrc,aspect:Number(this.aspectRatio||0)}},__cachedImage:function(){if(!(this.normalisedSrc.src||this.normalisedSrc.lazySrc||this.gradient))return[];var t=[],e=this.isLoading?this.normalisedSrc.lazySrc:this.currentSrc;this.gradient&&t.push("linear-gradient(".concat(this.gradient,")")),e&&t.push('url("'.concat(e,'")'));var i=this.$createElement("div",{staticClass:"v-image__image",class:{"v-image__image--preload":this.isLoading,"v-image__image--contain":this.contain,"v-image__image--cover":!this.contain},style:{backgroundImage:t.join(", "),backgroundPosition:this.position},key:+this.isLoading});return this.transition?this.$createElement("transition",{attrs:{name:this.transition,mode:"in-out"}},[i]):i}},watch:{src:function(){this.isLoading?this.loadImage():this.init(void 0,void 0,!0)},"$vuetify.breakpoint.width":"getSrc"},mounted:function(){this.init()},methods:{init:function(t,e,i){if(!u||i||this.eager){if(this.normalisedSrc.lazySrc){var s=new Image;s.src=this.normalisedSrc.lazySrc,this.pollForSize(s,null)}this.normalisedSrc.src&&this.loadImage()}},onLoad:function(){this.getSrc(),this.isLoading=!1,this.$emit("load",this.src),this.image&&(this.normalisedSrc.src.endsWith(".svg")||this.normalisedSrc.src.startsWith("data:image/svg+xml"))&&(this.image.naturalHeight&&this.image.naturalWidth?(this.naturalWidth=this.image.naturalWidth,this.calculatedAspectRatio=this.image.naturalWidth/this.image.naturalHeight):this.calculatedAspectRatio=1)},onError:function(){this.hasError=!0,this.$emit("error",this.src)},getSrc:function(){this.image&&(this.currentSrc=this.image.currentSrc||this.image.src)},loadImage:function(){var t=this,e=new Image;this.image=e,e.onload=function(){e.decode?e.decode()["catch"]((function(e){Object(d["c"])("Failed to decode image, trying to render anyway\n\n"+"src: ".concat(t.normalisedSrc.src)+(e.message?"\nOriginal error: ".concat(e.message):""),t)})).then(t.onLoad):t.onLoad()},e.onerror=this.onError,this.hasError=!1,this.sizes&&(e.sizes=this.sizes),this.normalisedSrc.srcset&&(e.srcset=this.normalisedSrc.srcset),e.src=this.normalisedSrc.src,this.$emit("loadstart",this.normalisedSrc.src),this.aspectRatio||this.pollForSize(e),this.getSrc()},pollForSize:function(t){var e=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100,s=function s(){var n=t.naturalHeight,a=t.naturalWidth;n||a?(e.naturalWidth=a,e.calculatedAspectRatio=a/n):t.complete||!e.isLoading||e.hasError||null==i||setTimeout(s,i)};s()},genContent:function(){var t=c.options.methods.genContent.call(this);return this.naturalWidth&&this._b(t.data,"div",{style:{width:"".concat(this.naturalWidth,"px")}}),t},__genPlaceholder:function(){if(this.$slots.placeholder){var t=this.isLoading?[this.$createElement("div",{staticClass:"v-image__placeholder"},this.$slots.placeholder)]:[];return this.transition?this.$createElement("transition",{props:{appear:!0,name:this.transition}},t):t[0]}}},render:function(t){var e=c.options.render.call(this,t),i=Object(h["a"])(e.data,{staticClass:"v-image",attrs:{"aria-label":this.alt,role:this.alt?"img":void 0},class:this.themeClasses,directives:u?[{name:"intersect",modifiers:{once:!0},value:{handler:this.init,options:this.options}}]:void 0});return e.children=[this.__cachedSizer,this.__cachedImage,this.__genPlaceholder(),this.genContent()],t(e.tag,i,e.children)}})},e71f:function(t,e,i){"use strict";i("e89a")}}]);
//# sourceMappingURL=chunk-777c2699.09c0ab5e.js.map