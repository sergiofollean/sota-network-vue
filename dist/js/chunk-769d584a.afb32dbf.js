(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-769d584a"],{2909:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));n("277d");var i=n("6b75");function o(e){if(Array.isArray(e))return Object(i["a"])(e)}n("a4d3"),n("e01a"),n("d3b7"),n("d28b"),n("3ca3"),n("ddb0"),n("a630");function r(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}var s=n("06c5");function a(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function c(e){return o(e)||r(e)||Object(s["a"])(e)||a()}},9847:function(e,t,n){},"9baf":function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-navigation-drawer",{staticClass:"vertical-sass-sidebar",attrs:{"mobile-breakpoint":1e3,height:"100vh",right:e.$vuetify.rtl,color:e.$vuetify.theme.dark?"dark":"white",flat:"",floating:"",app:"",clipped:""},model:{value:e.getThemeMode.verticalSaasSidebarDrawer,callback:function(t){e.$set(e.getThemeMode,"verticalSaasSidebarDrawer",t)},expression:"getThemeMode.verticalSaasSidebarDrawer"}},[n("vue-perfect-scrollbar",{staticClass:"h-100 rtl-ps-none ps scroll",staticStyle:{height:"100%"},attrs:{settings:{suppressScrollX:!0,wheelPropagation:!1}}},[n("v-list",{staticClass:"mt-4",attrs:{rounded:"",dense:""}},[e._l(e.computedItems,(function(e,t){return[e.children?n("base-item-group",{key:"group-"+t,attrs:{item:e}}):n("base-item",{key:"item-"+t,attrs:{item:e}})]}))],2)],1)],1)},o=[],r=n("5530"),s=(n("d81d"),n("2f62")),a=n("de3b"),c={data:function(){return{background:!0,items:a["a"],opacity:.4}},computed:Object(r["a"])({bg:function(){return this.background?"https://images.pexels.com/photos/1687678/pexels-photo-1687678.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260":void 0},computedItems:function(){return this.items.map(this.mapItem)}},Object(s["c"])(["getThemeMode"])),methods:{mapItem:function(e){return Object(r["a"])(Object(r["a"])({},e),{},{children:e.children?e.children.map(this.mapItem):void 0,title:this.$t(e.title)})}}},u=c,d=(n("f4b1"),n("2877")),l=n("6544"),p=n.n(l),f=n("8860"),v=n("f774"),h=Object(d["a"])(u,i,o,!1,null,null,null);t["default"]=h.exports;p()(h,{VList:f["a"],VNavigationDrawer:v["a"]})},a293:function(e,t,n){"use strict";var i=n("53ca"),o=(n("45fc"),n("4795"),n("dd89"));function r(){return!0}function s(e,t,n){if(!e||!1===a(e,n))return!1;var r=Object(o["a"])(t);if("undefined"!==typeof ShadowRoot&&r instanceof ShadowRoot&&r.host===e.target)return!1;var s=("object"===Object(i["a"])(n.value)&&n.value.include||function(){return[]})();return s.push(t),!s.some((function(t){return t.contains(e.target)}))}function a(e,t){var n="object"===Object(i["a"])(t.value)&&t.value.closeConditional||r;return n(e)}function c(e,t,n){var i="function"===typeof n.value?n.value:n.value.handler;t._clickOutside.lastMousedownWasOutside&&s(e,t,n)&&setTimeout((function(){a(e,n)&&i&&i(e)}),0)}function u(e,t){var n=Object(o["a"])(e);t(document),n instanceof ShadowRoot&&t(n)}var d={inserted:function(e,t){var n=function(n){return c(n,e,t)},i=function(n){e._clickOutside.lastMousedownWasOutside=s(n,e,t)};u(e,(function(e){e.addEventListener("click",n,!0),e.addEventListener("mousedown",i,!0)})),e._clickOutside={lastMousedownWasOutside:!0,onClick:n,onMousedown:i}},unbind:function(e){e._clickOutside&&(u(e,(function(t){t&&e._clickOutside&&(t.removeEventListener("click",e._clickOutside.onClick,!0),t.removeEventListener("mousedown",e._clickOutside.onMousedown,!0))})),delete e._clickOutside)}};t["a"]=d},b848:function(e,t,n){"use strict";var i=n("2909"),o=n("58df");function r(e){for(var t=[],n=0;n<e.length;n++){var o=e[n];o.isActive&&o.isDependent?t.push(o):t.push.apply(t,Object(i["a"])(r(o.$children)))}return t}t["a"]=Object(o["a"])().extend({name:"dependent",data:function(){return{closeDependents:!0,isActive:!1,isDependent:!0}},watch:{isActive:function(e){if(!e)for(var t=this.getOpenDependents(),n=0;n<t.length;n++)t[n].isActive=!1}},methods:{getOpenDependents:function(){return this.closeDependents?r(this.$children):[]},getOpenDependentElements:function(){for(var e=[],t=this.getOpenDependents(),n=0;n<t.length;n++)e.push.apply(e,Object(i["a"])(t[n].getClickableDependentElements()));return e},getClickableDependentElements:function(){var e=[this.$el];return this.$refs.content&&e.push(this.$refs.content),this.overlay&&e.push(this.overlay.$el),e.push.apply(e,Object(i["a"])(this.getOpenDependentElements())),e}}})},dc22:function(e,t,n){"use strict";function i(e,t){var n=t.value,i=t.options||{passive:!0};window.addEventListener("resize",n,i),e._onResize={callback:n,options:i},t.modifiers&&t.modifiers.quiet||n()}function o(e){if(e._onResize){var t=e._onResize,n=t.callback,i=t.options;window.removeEventListener("resize",n,i),delete e._onResize}}var r={inserted:i,unbind:o};t["a"]=r},dd89:function(e,t,n){"use strict";function i(e){if("function"!==typeof e.getRootNode){while(e.parentNode)e=e.parentNode;return e!==document?null:document}var t=e.getRootNode();return t!==document&&t.getRootNode({composed:!0})!==document?null:t}n.d(t,"a",(function(){return i}))},de3b:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var i=[{title:"nav.dashboard",icon:"mdi-view-dashboard",group:"dashboard",to:"/dashboard"},{title:"nav.bots",icon:"mdi-robot",to:"/bots"},{title:"nav.subscriptions",icon:"mdi-av-timer",group:"subscriptions",to:"/subscriptions"},{title:"nav.settings",icon:"mdi-cog",to:"/settings"},{title:"nav.news",icon:"mdi-newspaper",group:"news",to:"/news"}]},f4b1:function(e,t,n){"use strict";n("9847")}}]);
//# sourceMappingURL=chunk-769d584a.afb32dbf.js.map