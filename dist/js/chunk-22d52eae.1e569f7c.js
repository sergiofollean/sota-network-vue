(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-22d52eae"],{"3a66":function(t,i,e){"use strict";e.d(i,"a",(function(){return s}));var n=e("fe6c"),a=e("58df");function s(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return Object(a["a"])(Object(n["b"])(["absolute","fixed"])).extend({name:"applicationable",props:{app:Boolean},computed:{applicationProperty:function(){return t}},watch:{app:function(t,i){i?this.removeApplication(!0):this.callUpdate()},applicationProperty:function(t,i){this.$vuetify.application.unregister(this._uid,i)}},activated:function(){this.callUpdate()},created:function(){for(var t=0,e=i.length;t<e;t++)this.$watch(i[t],this.callUpdate);this.callUpdate()},mounted:function(){this.callUpdate()},deactivated:function(){this.removeApplication()},destroyed:function(){this.removeApplication()},methods:{callUpdate:function(){this.app&&this.$vuetify.application.register(this._uid,this.applicationProperty,this.updateApplication())},removeApplication:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];(t||this.app)&&this.$vuetify.application.unregister(this._uid,this.applicationProperty)},updateApplication:function(){return 0}}})}},7958:function(t,i,e){},"8ce9":function(t,i,e){},9847:function(t,i,e){},"9baf":function(t,i,e){"use strict";e.r(i);var n=function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("v-navigation-drawer",{staticClass:"vertical-sass-sidebar",attrs:{"mobile-breakpoint":1e3,height:"100vh",right:t.$vuetify.rtl,color:"transparent",flat:"",floating:"",app:"",clipped:""},model:{value:t.getThemeMode.verticalSaasSidebarDrawer,callback:function(i){t.$set(t.getThemeMode,"verticalSaasSidebarDrawer",i)},expression:"getThemeMode.verticalSaasSidebarDrawer"}},[n("vue-perfect-scrollbar",{staticClass:"h-100 rtl-ps-none ps scroll",staticStyle:{height:"100%"},attrs:{settings:{suppressScrollX:!0,wheelPropagation:!1}}},[n("v-list",[n("v-list-item",{staticClass:"p-0"},[n("div",{staticClass:"flex text-center justify-center flex-column"},[n("v-list-item-avatar",{staticClass:"m-0",attrs:{"min-width":"50",height:"50",width:"50"}},[n("v-img",{attrs:{src:e("6f92")}})],1),n("v-list-item-content",[n("v-list-item-title",{staticClass:"text-16 mb-1 font-weight-regular"},[t._v("Watson Joyce")]),n("v-divider"),n("v-list-item-subtitle",{staticClass:"mt-1"},[n("v-icon",{staticClass:"text-18 mr-2"},[t._v("mdi-card-account-mail-outline")]),n("v-icon",{staticClass:"text-18 mr-2"},[t._v("mdi-inbox-multiple-outline")]),n("v-icon",{staticClass:"text-18 mr-2"},[t._v("mdi-home-edit-outline")])],1)],1)],1)])],1),n("v-list",{attrs:{rounded:"",dense:""}},[t._l(t.computedItems,(function(t,i){return[t.children?n("base-item-group",{key:"group-"+i,attrs:{item:t}}):n("base-item",{key:"item-"+i,attrs:{item:t}})]}))],2)],1)],1)},a=[],s=e("5530"),r=(e("d81d"),e("2f62")),o=e("de3b"),c={data:function(){return{background:!0,items:o["a"],opacity:.4}},computed:Object(s["a"])({bg:function(){return this.background?"https://images.pexels.com/photos/1687678/pexels-photo-1687678.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260":void 0},computedItems:function(){return this.items.map(this.mapItem)}},Object(r["c"])(["getThemeMode"])),methods:{mapItem:function(t){return Object(s["a"])(Object(s["a"])({},t),{},{children:t.children?t.children.map(this.mapItem):void 0,title:t.title})}}},h=c,u=(e("f4b1"),e("2877")),l=e("6544"),d=e.n(l),p=e("ce7e"),v=e("132d"),f=e("adda"),m=e("8860"),g=e("da13"),b=e("8270"),w=e("5d23"),y=e("f774"),A=Object(u["a"])(h,n,a,!1,null,null,null);i["default"]=A.exports;d()(A,{VDivider:p["a"],VIcon:v["a"],VImg:f["a"],VList:m["a"],VListItem:g["a"],VListItemAvatar:b["a"],VListItemContent:w["a"],VListItemSubtitle:w["b"],VListItemTitle:w["c"],VNavigationDrawer:y["a"]})},ce7e:function(t,i,e){"use strict";var n=e("5530"),a=(e("8ce9"),e("7560"));i["a"]=a["a"].extend({name:"v-divider",props:{inset:Boolean,vertical:Boolean},render:function(t){var i;return this.$attrs.role&&"separator"!==this.$attrs.role||(i=this.vertical?"vertical":"horizontal"),t("hr",{class:Object(n["a"])({"v-divider":!0,"v-divider--inset":this.inset,"v-divider--vertical":this.vertical},this.themeClasses),attrs:Object(n["a"])({role:"separator","aria-orientation":i},this.$attrs),on:this.$listeners})}})},de3b:function(t,i,e){"use strict";e.d(i,"a",(function(){return n}));var n=[{title:"Головна",icon:"mdi-view-dashboard",group:"dashboard",to:"dashboard"},{title:"Боти",icon:"mdi-robot",to:"/bots"},{title:"Налаштування",icon:"mdi-cog",to:"/settings"}]},f4b1:function(t,i,e){"use strict";e("9847")},f774:function(t,i,e){"use strict";var n=e("5530"),a=(e("a9e3"),e("c7cd"),e("99af"),e("7958"),e("adda")),s=e("3a66"),r=e("a9ad"),o=e("b848"),c=e("e4cd"),h=e("e707"),u=e("d10f"),l=e("7560"),d=e("a293"),p=e("dc22"),v=(e("4160"),e("159b"),e("80d2")),f=function(t){var i=t.touchstartX,e=t.touchendX,n=t.touchstartY,a=t.touchendY,s=.5,r=16;t.offsetX=e-i,t.offsetY=a-n,Math.abs(t.offsetY)<s*Math.abs(t.offsetX)&&(t.left&&e<i-r&&t.left(t),t.right&&e>i+r&&t.right(t)),Math.abs(t.offsetX)<s*Math.abs(t.offsetY)&&(t.up&&a<n-r&&t.up(t),t.down&&a>n+r&&t.down(t))};function m(t,i){var e=t.changedTouches[0];i.touchstartX=e.clientX,i.touchstartY=e.clientY,i.start&&i.start(Object.assign(t,i))}function g(t,i){var e=t.changedTouches[0];i.touchendX=e.clientX,i.touchendY=e.clientY,i.end&&i.end(Object.assign(t,i)),f(i)}function b(t,i){var e=t.changedTouches[0];i.touchmoveX=e.clientX,i.touchmoveY=e.clientY,i.move&&i.move(Object.assign(t,i))}function w(t){var i={touchstartX:0,touchstartY:0,touchendX:0,touchendY:0,touchmoveX:0,touchmoveY:0,offsetX:0,offsetY:0,left:t.left,right:t.right,up:t.up,down:t.down,start:t.start,move:t.move,end:t.end};return{touchstart:function(t){return m(t,i)},touchend:function(t){return g(t,i)},touchmove:function(t){return b(t,i)}}}function y(t,i,e){var n=i.value,a=n.parent?t.parentElement:t,s=n.options||{passive:!0};if(a){var r=w(i.value);a._touchHandlers=Object(a._touchHandlers),a._touchHandlers[e.context._uid]=r,Object(v["y"])(r).forEach((function(t){a.addEventListener(t,r[t],s)}))}}function A(t,i,e){var n=i.value.parent?t.parentElement:t;if(n&&n._touchHandlers){var a=n._touchHandlers[e.context._uid];Object(v["y"])(a).forEach((function(t){n.removeEventListener(t,a[t])})),delete n._touchHandlers[e.context._uid]}}var M={inserted:y,unbind:A},O=M,x=e("58df"),$=Object(x["a"])(Object(s["a"])("left",["isActive","isMobile","miniVariant","expandOnHover","permanent","right","temporary","width"]),r["a"],o["a"],c["a"],h["a"],u["a"],l["a"]);i["a"]=$.extend({name:"v-navigation-drawer",directives:{ClickOutside:d["a"],Resize:p["a"],Touch:O},provide:function(){return{isInNav:"nav"===this.tag}},props:{bottom:Boolean,clipped:Boolean,disableResizeWatcher:Boolean,disableRouteWatcher:Boolean,expandOnHover:Boolean,floating:Boolean,height:{type:[Number,String],default:function(){return this.app?"100vh":"100%"}},miniVariant:Boolean,miniVariantWidth:{type:[Number,String],default:56},permanent:Boolean,right:Boolean,src:{type:[String,Object],default:""},stateless:Boolean,tag:{type:String,default:function(){return this.app?"nav":"aside"}},temporary:Boolean,touchless:Boolean,width:{type:[Number,String],default:256},value:null},data:function(){return{isMouseover:!1,touchArea:{left:0,right:0},stackMinZIndex:6}},computed:{applicationProperty:function(){return this.right?"right":"left"},classes:function(){return Object(n["a"])({"v-navigation-drawer":!0,"v-navigation-drawer--absolute":this.absolute,"v-navigation-drawer--bottom":this.bottom,"v-navigation-drawer--clipped":this.clipped,"v-navigation-drawer--close":!this.isActive,"v-navigation-drawer--fixed":!this.absolute&&(this.app||this.fixed),"v-navigation-drawer--floating":this.floating,"v-navigation-drawer--is-mobile":this.isMobile,"v-navigation-drawer--is-mouseover":this.isMouseover,"v-navigation-drawer--mini-variant":this.isMiniVariant,"v-navigation-drawer--custom-mini-variant":56!==Number(this.miniVariantWidth),"v-navigation-drawer--open":this.isActive,"v-navigation-drawer--open-on-hover":this.expandOnHover,"v-navigation-drawer--right":this.right,"v-navigation-drawer--temporary":this.temporary},this.themeClasses)},computedMaxHeight:function(){if(!this.hasApp)return null;var t=this.$vuetify.application.bottom+this.$vuetify.application.footer+this.$vuetify.application.bar;return this.clipped?t+this.$vuetify.application.top:t},computedTop:function(){if(!this.hasApp)return 0;var t=this.$vuetify.application.bar;return t+=this.clipped?this.$vuetify.application.top:0,t},computedTransform:function(){return this.isActive?0:this.isBottom||this.right?100:-100},computedWidth:function(){return this.isMiniVariant?this.miniVariantWidth:this.width},hasApp:function(){return this.app&&!this.isMobile&&!this.temporary},isBottom:function(){return this.bottom&&this.isMobile},isMiniVariant:function(){return!this.expandOnHover&&this.miniVariant||this.expandOnHover&&!this.isMouseover},isMobile:function(){return!this.stateless&&!this.permanent&&c["a"].options.computed.isMobile.call(this)},reactsToClick:function(){return!this.stateless&&!this.permanent&&(this.isMobile||this.temporary)},reactsToMobile:function(){return this.app&&!this.disableResizeWatcher&&!this.permanent&&!this.stateless&&!this.temporary},reactsToResize:function(){return!this.disableResizeWatcher&&!this.stateless},reactsToRoute:function(){return!this.disableRouteWatcher&&!this.stateless&&(this.temporary||this.isMobile)},showOverlay:function(){return!this.hideOverlay&&this.isActive&&(this.isMobile||this.temporary)},styles:function(){var t=this.isBottom?"translateY":"translateX";return{height:Object(v["g"])(this.height),top:this.isBottom?"auto":Object(v["g"])(this.computedTop),maxHeight:null!=this.computedMaxHeight?"calc(100% - ".concat(Object(v["g"])(this.computedMaxHeight),")"):void 0,transform:"".concat(t,"(").concat(Object(v["g"])(this.computedTransform,"%"),")"),width:Object(v["g"])(this.computedWidth)}}},watch:{$route:"onRouteChange",isActive:function(t){this.$emit("input",t)},isMobile:function(t,i){!t&&this.isActive&&!this.temporary&&this.removeOverlay(),null!=i&&this.reactsToResize&&this.reactsToMobile&&(this.isActive=!t)},permanent:function(t){t&&(this.isActive=!0)},showOverlay:function(t){t?this.genOverlay():this.removeOverlay()},value:function(t){this.permanent||(null!=t?t!==this.isActive&&(this.isActive=t):this.init())},expandOnHover:"updateMiniVariant",isMouseover:function(t){this.updateMiniVariant(!t)}},beforeMount:function(){this.init()},methods:{calculateTouchArea:function(){var t=this.$el.parentNode;if(t){var i=t.getBoundingClientRect();this.touchArea={left:i.left+50,right:i.right-50}}},closeConditional:function(){return this.isActive&&!this._isDestroyed&&this.reactsToClick},genAppend:function(){return this.genPosition("append")},genBackground:function(){var t={height:"100%",width:"100%",src:this.src},i=this.$scopedSlots.img?this.$scopedSlots.img(t):this.$createElement(a["a"],{props:t});return this.$createElement("div",{staticClass:"v-navigation-drawer__image"},[i])},genDirectives:function(){var t=this,i=[{name:"click-outside",value:{handler:function(){t.isActive=!1},closeConditional:this.closeConditional,include:this.getOpenDependentElements}}];return this.touchless||this.stateless||i.push({name:"touch",value:{parent:!0,left:this.swipeLeft,right:this.swipeRight}}),i},genListeners:function(){var t=this,i={transitionend:function(i){if(i.target===i.currentTarget){t.$emit("transitionend",i);var e=document.createEvent("UIEvents");e.initUIEvent("resize",!0,!1,window,0),window.dispatchEvent(e)}}};return this.miniVariant&&(i.click=function(){return t.$emit("update:mini-variant",!1)}),this.expandOnHover&&(i.mouseenter=function(){return t.isMouseover=!0},i.mouseleave=function(){return t.isMouseover=!1}),i},genPosition:function(t){var i=Object(v["s"])(this,t);return i?this.$createElement("div",{staticClass:"v-navigation-drawer__".concat(t)},i):i},genPrepend:function(){return this.genPosition("prepend")},genContent:function(){return this.$createElement("div",{staticClass:"v-navigation-drawer__content"},this.$slots["default"])},genBorder:function(){return this.$createElement("div",{staticClass:"v-navigation-drawer__border"})},init:function(){this.permanent?this.isActive=!0:this.stateless||null!=this.value?this.isActive=this.value:this.temporary||(this.isActive=!this.isMobile)},onRouteChange:function(){this.reactsToRoute&&this.closeConditional()&&(this.isActive=!1)},swipeLeft:function(t){this.isActive&&this.right||(this.calculateTouchArea(),Math.abs(t.touchendX-t.touchstartX)<100||(this.right&&t.touchstartX>=this.touchArea.right?this.isActive=!0:!this.right&&this.isActive&&(this.isActive=!1)))},swipeRight:function(t){this.isActive&&!this.right||(this.calculateTouchArea(),Math.abs(t.touchendX-t.touchstartX)<100||(!this.right&&t.touchstartX<=this.touchArea.left?this.isActive=!0:this.right&&this.isActive&&(this.isActive=!1)))},updateApplication:function(){if(!this.isActive||this.isMobile||this.temporary||!this.$el)return 0;var t=Number(this.computedWidth);return isNaN(t)?this.$el.clientWidth:t},updateMiniVariant:function(t){this.miniVariant!==t&&this.$emit("update:mini-variant",t)}},render:function(t){var i=[this.genPrepend(),this.genContent(),this.genAppend(),this.genBorder()];return(this.src||Object(v["s"])(this,"img"))&&i.unshift(this.genBackground()),t(this.tag,this.setBackgroundColor(this.color,{class:this.classes,style:this.styles,directives:this.genDirectives(),on:this.genListeners()}),i)}})}}]);
//# sourceMappingURL=chunk-22d52eae.1e569f7c.js.map