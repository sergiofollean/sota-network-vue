(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1b2f8e41","chunk-7ccc9017"],{"8ce9":function(t,e,i){},9847:function(t,e,i){},"9baf":function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-navigation-drawer",{staticClass:"vertical-sass-sidebar",attrs:{"mobile-breakpoint":1e3,height:"100vh",right:t.$vuetify.rtl,color:"transparent",flat:"",floating:"",app:"",clipped:""},model:{value:t.getThemeMode.verticalSaasSidebarDrawer,callback:function(e){t.$set(t.getThemeMode,"verticalSaasSidebarDrawer",e)},expression:"getThemeMode.verticalSaasSidebarDrawer"}},[a("vue-perfect-scrollbar",{staticClass:"h-100 rtl-ps-none ps scroll",staticStyle:{height:"100%"},attrs:{settings:{suppressScrollX:!0,wheelPropagation:!1}}},[a("v-list",[a("v-list-item",{staticClass:"p-0"},[a("div",{staticClass:"flex text-center justify-center flex-column"},[a("v-list-item-avatar",{staticClass:"m-0",attrs:{"min-width":"50",height:"50",width:"50"}},[a("v-img",{attrs:{src:i("6f92")}})],1),a("v-list-item-content",[a("v-list-item-title",{staticClass:"text-16 mb-1 font-weight-regular"},[t._v("Watson Joyce")]),a("v-divider"),a("v-list-item-subtitle",{staticClass:"mt-1"},[a("v-icon",{staticClass:"text-18 mr-2"},[t._v("mdi-card-account-mail-outline")]),a("v-icon",{staticClass:"text-18 mr-2"},[t._v("mdi-inbox-multiple-outline")]),a("v-icon",{staticClass:"text-18 mr-2"},[t._v("mdi-home-edit-outline")])],1)],1)],1)])],1),a("v-list",{attrs:{rounded:"",dense:""}},[t._l(t.computedItems,(function(t,e){return[t.children?a("base-item-group",{key:"group-"+e,attrs:{item:t}}):a("base-item",{key:"item-"+e,attrs:{item:t}})]}))],2)],1)],1)},s=[],r=i("5530"),n=(i("d81d"),i("2f62")),o=i("de3b"),c={data:function(){return{background:!0,items:o["a"],opacity:.4}},computed:Object(r["a"])({bg:function(){return this.background?"https://images.pexels.com/photos/1687678/pexels-photo-1687678.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260":void 0},computedItems:function(){return this.items.map(this.mapItem)}},Object(n["c"])(["getThemeMode"])),methods:{mapItem:function(t){return Object(r["a"])(Object(r["a"])({},t),{},{children:t.children?t.children.map(this.mapItem):void 0,title:t.title})}}},l=c,d=(i("f4b1"),i("2877")),u=i("6544"),m=i.n(u),v=i("ce7e"),h=i("132d"),p=i("adda"),b=i("8860"),f=i("da13"),g=i("8270"),w=i("5d23"),x=i("f774"),C=Object(d["a"])(l,a,s,!1,null,null,null);e["default"]=C.exports;m()(C,{VDivider:v["a"],VIcon:h["a"],VImg:p["a"],VList:b["a"],VListItem:f["a"],VListItemAvatar:g["a"],VListItemContent:w["a"],VListItemSubtitle:w["b"],VListItemTitle:w["c"],VNavigationDrawer:x["a"]})},ce7e:function(t,e,i){"use strict";var a=i("5530"),s=(i("8ce9"),i("7560"));e["a"]=s["a"].extend({name:"v-divider",props:{inset:Boolean,vertical:Boolean},render:function(t){var e;return this.$attrs.role&&"separator"!==this.$attrs.role||(e=this.vertical?"vertical":"horizontal"),t("hr",{class:Object(a["a"])({"v-divider":!0,"v-divider--inset":this.inset,"v-divider--vertical":this.vertical},this.themeClasses),attrs:Object(a["a"])({role:"separator","aria-orientation":e},this.$attrs),on:this.$listeners})}})},d10f:function(t,e,i){"use strict";var a=i("2b0e");e["a"]=a["default"].extend({name:"ssr-bootable",data:function(){return{isBooted:!1}},mounted:function(){var t=this;window.requestAnimationFrame((function(){t.$el.setAttribute("data-booted","true"),t.isBooted=!0}))}})},de3b:function(t,e,i){"use strict";i.d(e,"a",(function(){return a}));var a=[{title:"Головна",icon:"mdi-view-dashboard",group:"dashboard",to:"dashboard"},{title:"Боти",icon:"mdi-robot"},{title:"Налаштування",icon:"mdi-cog",to:"/settings"}]},f4b1:function(t,e,i){"use strict";i("9847")}}]);
//# sourceMappingURL=chunk-1b2f8e41.73923130.js.map