(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-fe0b0a42","chunk-769d584a"],{2909:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));n("277d");var i=n("6b75");function o(e){if(Array.isArray(e))return Object(i["a"])(e)}n("a4d3"),n("e01a"),n("d3b7"),n("d28b"),n("3ca3"),n("ddb0"),n("a630");function r(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}var a=n("06c5");function s(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function c(e){return o(e)||r(e)||Object(a["a"])(e)||s()}},9847:function(e,t,n){},"9baf":function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-navigation-drawer",{staticClass:"vertical-sass-sidebar",attrs:{"mobile-breakpoint":1e3,height:"100vh",right:e.$vuetify.rtl,color:e.$vuetify.theme.dark?"dark":"white",flat:"",floating:"",app:"",clipped:""},model:{value:e.getThemeMode.verticalSaasSidebarDrawer,callback:function(t){e.$set(e.getThemeMode,"verticalSaasSidebarDrawer",t)},expression:"getThemeMode.verticalSaasSidebarDrawer"}},[n("vue-perfect-scrollbar",{staticClass:"h-100 rtl-ps-none ps scroll",staticStyle:{height:"100%"},attrs:{settings:{suppressScrollX:!0,wheelPropagation:!1}}},[n("v-list",{staticClass:"mt-4",attrs:{rounded:"",dense:""}},[e._l(e.computedItems,(function(e,t){return[e.children?n("base-item-group",{key:"group-"+t,attrs:{item:e}}):n("base-item",{key:"item-"+t,attrs:{item:e}})]}))],2)],1)],1)},o=[],r=n("5530"),a=(n("d81d"),n("2f62")),s=n("de3b"),c={data:function(){return{background:!0,items:s["a"],opacity:.4}},computed:Object(r["a"])({bg:function(){return this.background?"https://images.pexels.com/photos/1687678/pexels-photo-1687678.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260":void 0},computedItems:function(){return this.items.map(this.mapItem)}},Object(a["c"])(["getThemeMode"])),methods:{mapItem:function(e){return Object(r["a"])(Object(r["a"])({},e),{},{children:e.children?e.children.map(this.mapItem):void 0,title:this.$t(e.title)})}}},u=c,d=(n("f4b1"),n("2877")),l=n("6544"),f=n.n(l),p=n("8860"),v=n("f774"),b=Object(d["a"])(u,i,o,!1,null,null,null);t["default"]=b.exports;f()(b,{VList:p["a"],VNavigationDrawer:v["a"]})},a293:function(e,t,n){"use strict";var i=n("53ca"),o=(n("45fc"),n("d3b7"),n("4795"),n("dd89"));function r(){return!0}function a(e,t,n){if(!e||!1===s(e,n))return!1;var r=Object(o["a"])(t);if("undefined"!==typeof ShadowRoot&&r instanceof ShadowRoot&&r.host===e.target)return!1;var a=("object"===Object(i["a"])(n.value)&&n.value.include||function(){return[]})();return a.push(t),!a.some((function(t){return t.contains(e.target)}))}function s(e,t){var n="object"===Object(i["a"])(t.value)&&t.value.closeConditional||r;return n(e)}function c(e,t,n,i){var o="function"===typeof n.value?n.value:n.value.handler;t._clickOutside.lastMousedownWasOutside&&a(e,t,n)&&setTimeout((function(){s(e,n)&&o&&o(e)}),0)}function u(e,t){var n=Object(o["a"])(e);t(document),"undefined"!==typeof ShadowRoot&&n instanceof ShadowRoot&&t(n)}var d={inserted:function(e,t,n){var i=function(i){return c(i,e,t,n)},o=function(n){e._clickOutside.lastMousedownWasOutside=a(n,e,t)};u(e,(function(e){e.addEventListener("click",i,!0),e.addEventListener("mousedown",o,!0)})),e._clickOutside||(e._clickOutside={lastMousedownWasOutside:!0}),e._clickOutside[n.context._uid]={onClick:i,onMousedown:o}},unbind:function(e,t,n){e._clickOutside&&(u(e,(function(t){var i;if(t&&null!=(i=e._clickOutside)&&i[n.context._uid]){var o=e._clickOutside[n.context._uid],r=o.onClick,a=o.onMousedown;t.removeEventListener("click",r,!0),t.removeEventListener("mousedown",a,!0)}})),delete e._clickOutside[n.context._uid])}};t["a"]=d},b848:function(e,t,n){"use strict";var i=n("2909"),o=n("58df");function r(e){for(var t=[],n=0;n<e.length;n++){var o=e[n];o.isActive&&o.isDependent?t.push(o):t.push.apply(t,Object(i["a"])(r(o.$children)))}return t}t["a"]=Object(o["a"])().extend({name:"dependent",data:function(){return{closeDependents:!0,isActive:!1,isDependent:!0}},watch:{isActive:function(e){if(!e)for(var t=this.getOpenDependents(),n=0;n<t.length;n++)t[n].isActive=!1}},methods:{getOpenDependents:function(){return this.closeDependents?r(this.$children):[]},getOpenDependentElements:function(){for(var e=[],t=this.getOpenDependents(),n=0;n<t.length;n++)e.push.apply(e,Object(i["a"])(t[n].getClickableDependentElements()));return e},getClickableDependentElements:function(){var e=[this.$el];return this.$refs.content&&e.push(this.$refs.content),this.overlay&&e.push(this.overlay.$el),e.push.apply(e,Object(i["a"])(this.getOpenDependentElements())),e}}})},d10f:function(e,t,n){"use strict";var i=n("2b0e");t["a"]=i["default"].extend({name:"ssr-bootable",data:function(){return{isBooted:!1}},mounted:function(){var e=this;window.requestAnimationFrame((function(){e.$el.setAttribute("data-booted","true"),e.isBooted=!0}))}})},dc22:function(e,t,n){"use strict";function i(e,t,n){var i=t.value,o=t.options||{passive:!0};window.addEventListener("resize",i,o),e._onResize=Object(e._onResize),e._onResize[n.context._uid]={callback:i,options:o},t.modifiers&&t.modifiers.quiet||i()}function o(e,t,n){var i;if(null!=(i=e._onResize)&&i[n.context._uid]){var o=e._onResize[n.context._uid],r=o.callback,a=o.options;window.removeEventListener("resize",r,a),delete e._onResize[n.context._uid]}}var r={inserted:i,unbind:o};t["a"]=r},dd89:function(e,t,n){"use strict";function i(e){if("function"!==typeof e.getRootNode){while(e.parentNode)e=e.parentNode;return e!==document?null:document}var t=e.getRootNode();return t!==document&&t.getRootNode({composed:!0})!==document?null:t}n.d(t,"a",(function(){return i}))},de3b:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var i=[{title:"nav.dashboard",icon:"mdi-view-dashboard",group:"dashboard",to:"/dashboard"},{title:"nav.bots",icon:"mdi-robot",to:"/bots"},{title:"nav.subscriptions",icon:"mdi-av-timer",group:"subscriptions",to:"/subscriptions"},{title:"nav.settings",icon:"mdi-cog",to:"/settings"},{title:"nav.news",icon:"mdi-newspaper",group:"news",to:"/news"}]},f4b1:function(e,t,n){"use strict";n("9847")}}]);
//# sourceMappingURL=chunk-fe0b0a42.b250a888.js.map