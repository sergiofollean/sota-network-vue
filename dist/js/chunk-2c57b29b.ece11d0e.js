(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2c57b29b"],{"59ee":function(e,t,i){},"5d92":function(e,t,i){"use strict";i.r(t);var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-navigation-drawer",e._b({staticClass:"shadow-sm",attrs:{color:e.$vuetify.theme.dark?"dark":e.getThemeMode.verticalSidebarDrawerColor,"expand-on-hover":e.getThemeMode.verticalSidebarMini,"mini-variant":e.getThemeMode.verticalSidebarMini,src:e.bg,dark:"white"!=e.getThemeMode.verticalSidebarDrawerColor,app:"","disable-resize-watcher":!1,"mobile-breakpoint":960,height:"100%",floating:!0,right:e.$vuetify.rtl},on:{"update:expandOnHover":function(t){return e.$set(e.getThemeMode,"verticalSidebarMini",t)},"update:expand-on-hover":function(t){return e.$set(e.getThemeMode,"verticalSidebarMini",t)}},scopedSlots:e._u([{key:"img",fn:function(t){return[i("v-img",e._b({staticClass:"test",style:{opacity:e.opacity}},"v-img",t,!1))]}}]),model:{value:e.getThemeMode.verticalSidebarDrawer,callback:function(t){e.$set(e.getThemeMode,"verticalSidebarDrawer",t)},expression:"getThemeMode.verticalSidebarDrawer"}},"v-navigation-drawer",e.$attrs,!1),[i("vue-perfect-scrollbar",{staticClass:"h-100 rtl-ps-none ps scroll",staticStyle:{height:"100%"},attrs:{settings:{suppressScrollX:!0,wheelPropagation:!1}}},[i("v-list",{attrs:{dense:"",nav:""}},[i("v-list-item",{staticClass:"px-0"},[i("v-list-item-title",{staticClass:"text-18 text-uppercase text-default ml-4"},[e._v("Sota Network")])],1)],1),i("v-list",[e._l(e.computedItems,(function(e,t){return[e.children?i("base-item-group",{key:"group-"+t,attrs:{item:e}}):i("base-item",{key:"item-"+t,attrs:{item:e}})]}))],2)],1)],1)},r=[],n=i("5530"),o=(i("d81d"),i("2f62")),s=i("de3b"),c={data:function(){return{drawer:!0,switch1:"on",color:"dark",colors:["primary","blue","success","red","teal"],right:!1,permanent:!0,miniVariant:!1,expandOnHover:!1,background:!1,items:s["a"],opacity:.4}},computed:Object(n["a"])(Object(n["a"])({},Object(o["c"])(["getThemeMode"])),{},{bg:function(){return this.background?"https://images.pexels.com/photos/1687678/pexels-photo-1687678.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260":void 0},getMiniVariant:function(){return this.miniVariant},computedItems:function(){return this.items.map(this.mapItem)}}),methods:Object(n["a"])(Object(n["a"])({},Object(o["b"])(["changeVerticalSidebarDrawer","changeVerticalSidebarMini"])),{},{toggleSidebar:function(){this.changeVerticalSidebarMini(),this.expandOnHover=!this.expandOnHover},mapItem:function(e){return Object(n["a"])(Object(n["a"])({},e),{},{children:e.children?e.children.map(this.mapItem):void 0,title:e.title})}})},d=c,l=(i("f678"),i("2877")),u=i("6544"),m=i.n(u),b=i("adda"),h=i("8860"),p=i("da13"),g=i("5d23"),v=i("f774"),f=Object(l["a"])(d,a,r,!1,null,null,null);t["default"]=f.exports;m()(f,{VImg:b["a"],VList:h["a"],VListItem:p["a"],VListItemTitle:g["c"],VNavigationDrawer:v["a"]})},d10f:function(e,t,i){"use strict";var a=i("2b0e");t["a"]=a["default"].extend({name:"ssr-bootable",data:function(){return{isBooted:!1}},mounted:function(){var e=this;window.requestAnimationFrame((function(){e.$el.setAttribute("data-booted","true"),e.isBooted=!0}))}})},de3b:function(e,t,i){"use strict";i.d(t,"a",(function(){return a}));var a=[{title:"Головна",icon:"mdi-view-dashboard",group:"dashboard",to:"dashboard"},{title:"Боти",icon:"mdi-robot",to:"/bots"},{title:"Налаштування",icon:"mdi-cog",to:"/settings"}]},f678:function(e,t,i){"use strict";i("59ee")}}]);
//# sourceMappingURL=chunk-2c57b29b.ece11d0e.js.map