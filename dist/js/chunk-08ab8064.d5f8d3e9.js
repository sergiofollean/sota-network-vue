(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-08ab8064"],{"0fd9":function(t,e,n){"use strict";var i=n("ade3"),a=n("5530"),r=(n("13d5"),n("caad"),n("2532"),n("99af"),n("b64b"),n("ac1f"),n("5319"),n("4ec9"),n("d3b7"),n("3ca3"),n("ddb0"),n("4160"),n("159b"),n("4b85"),n("2b0e")),o=n("d9f7"),s=n("80d2"),c=["sm","md","lg","xl"],u=["start","end","center"];function l(t,e){return c.reduce((function(n,i){return n[t+Object(s["F"])(i)]=e(),n}),{})}var d=function(t){return[].concat(u,["baseline","stretch"]).includes(t)},f=l("align",(function(){return{type:String,default:null,validator:d}})),p=function(t){return[].concat(u,["space-between","space-around"]).includes(t)},v=l("justify",(function(){return{type:String,default:null,validator:p}})),h=function(t){return[].concat(u,["space-between","space-around","stretch"]).includes(t)},b=l("alignContent",(function(){return{type:String,default:null,validator:h}})),m={align:Object.keys(f),justify:Object.keys(v),alignContent:Object.keys(b)},g={align:"align",justify:"justify",alignContent:"align-content"};function y(t,e,n){var i=g[t];if(null!=n){if(e){var a=e.replace(t,"");i+="-".concat(a)}return i+="-".concat(n),i.toLowerCase()}}var x=new Map;e["a"]=r["default"].extend({name:"v-row",functional:!0,props:Object(a["a"])(Object(a["a"])(Object(a["a"])({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:d}},f),{},{justify:{type:String,default:null,validator:p}},v),{},{alignContent:{type:String,default:null,validator:h}},b),render:function(t,e){var n=e.props,a=e.data,r=e.children,s="";for(var c in n)s+=String(n[c]);var u=x.get(s);return u||function(){var t,e;for(e in u=[],m)m[e].forEach((function(t){var i=n[t],a=y(e,t,i);a&&u.push(a)}));u.push((t={"no-gutters":n.noGutters,"row--dense":n.dense},Object(i["a"])(t,"align-".concat(n.align),n.align),Object(i["a"])(t,"justify-".concat(n.justify),n.justify),Object(i["a"])(t,"align-content-".concat(n.alignContent),n.alignContent),t)),x.set(s,u)}(),t(n.tag,Object(o["a"])(a,{staticClass:"row",class:u}),r)}})},2769:function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return a}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-footer",{staticClass:"font-weight-medium shadow-md -mt-20",attrs:{tile:"",flat:"",color:t.$vuetify.theme.dark?"dark":"primary darken-4",dark:t.$vuetify.theme.dark,inset:!0}},[n("v-container",{},[n("v-row",{staticClass:"mt-20"},[n("v-col",{attrs:{cols:"12",md:"4"}},[n("p",{staticClass:"text-sm white--text"},[t._v(" About Us")]),n("p",{staticClass:"text-base grey--text"},[t._v("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.")])]),n("v-col",{attrs:{cols:"12",md:"4"}},[n("p",{staticClass:"text-sm white--text"},[t._v(" Site Links")]),n("div",{staticClass:"mb-2"},[n("a",{staticClass:"grey--text",attrs:{href:"#"}},[t._v("Help Center")])]),n("div",{staticClass:"mb-2"},[n("a",{staticClass:"grey--text",attrs:{href:"#"}},[t._v("Terms & Conditions")])]),n("div",{staticClass:"mb-2"},[n("a",{staticClass:"grey--text",attrs:{href:"#"}},[t._v("Privacy & Policy")])])]),n("v-col",{attrs:{cols:"12",md:"4"}},[n("p",{staticClass:"text-sm white--text"},[t._v(" Contact Us")]),n("v-text-field",{attrs:{color:"white",dark:"",label:"Your Email...."}}),n("p",{staticClass:"text-sm white--text"},[t._v(" Contact Us")]),n("div",[n("v-btn",{staticClass:"mx-2",attrs:{fab:"",dark:"","x-small":"",color:"#ec412c"}},[n("v-icon",{attrs:{small:"",dark:""}},[t._v("mdi-google")])],1),n("v-btn",{staticClass:"mx-2",attrs:{fab:"",dark:"","x-small":"",color:"#3765c9"}},[n("v-icon",{attrs:{small:"",dark:""}},[t._v("mdi-facebook")])],1),n("v-btn",{staticClass:"mx-2",attrs:{fab:"",dark:"","x-small":"",color:"#039ff5"}},[n("v-icon",{attrs:{small:"",dark:""}},[t._v("mdi-twitter")])],1)],1)],1)],1),n("v-row",{staticClass:"mt-4"},[n("v-col",{attrs:{cols:"12",md:"6"}},[n("p",{staticClass:"grey--text"},[t._v("Design & developed by "),n("a",{staticClass:"grey--text font-semibold",attrs:{href:"http://ui-lib.com/"}},[t._v("UI Lib ")]),t._v(" with "),n("v-icon",{attrs:{small:"",color:"danger"}},[t._v("mdi-heart")])],1)]),n("v-col",{staticClass:"md:text-right sm:text-left",attrs:{cols:"12",md:"6"}},[n("v-btn",{attrs:{dark:"",text:"",small:""}},[t._v("About")]),n("v-btn",{attrs:{dark:"",text:"",small:""}},[t._v("Blog")]),n("v-btn",{attrs:{dark:"",text:"",small:""}},[t._v("Contact Us")])],1)],1)],1)],1)},a=[]},2909:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));n("277d");var i=n("6b75");function a(t){if(Array.isArray(t))return Object(i["a"])(t)}n("a4d3"),n("e01a"),n("d3b7"),n("d28b"),n("3ca3"),n("ddb0"),n("a630");function r(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}var o=n("06c5");function s(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function c(t){return a(t)||r(t)||Object(o["a"])(t)||s()}},"3a66":function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var i=n("fe6c"),a=n("58df");function r(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return Object(a["a"])(Object(i["b"])(["absolute","fixed"])).extend({name:"applicationable",props:{app:Boolean},computed:{applicationProperty:function(){return t}},watch:{app:function(t,e){e?this.removeApplication(!0):this.callUpdate()},applicationProperty:function(t,e){this.$vuetify.application.unregister(this._uid,e)}},activated:function(){this.callUpdate()},created:function(){for(var t=0,n=e.length;t<n;t++)this.$watch(e[t],this.callUpdate);this.callUpdate()},mounted:function(){this.callUpdate()},deactivated:function(){this.removeApplication()},destroyed:function(){this.removeApplication()},methods:{callUpdate:function(){this.app&&this.$vuetify.application.register(this._uid,this.applicationProperty,this.updateApplication())},removeApplication:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];(t||this.app)&&this.$vuetify.application.unregister(this._uid,this.applicationProperty)},updateApplication:function(){return 0}}})}},"4ec9":function(t,e,n){"use strict";var i=n("6d61"),a=n("6566");t.exports=i("Map",(function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}}),a)},"553a":function(t,e,n){"use strict";var i=n("5530"),a=(n("a9e3"),n("c7cd"),n("e25e"),n("b5b6"),n("8dd9")),r=n("3a66"),o=n("d10f"),s=n("58df"),c=n("80d2");e["a"]=Object(s["a"])(a["a"],Object(r["a"])("footer",["height","inset"]),o["a"]).extend({name:"v-footer",props:{height:{default:"auto",type:[Number,String]},inset:Boolean,padless:Boolean,tag:{type:String,default:"footer"}},computed:{applicationProperty:function(){return this.inset?"insetFooter":"footer"},classes:function(){return Object(i["a"])(Object(i["a"])({},a["a"].options.computed.classes.call(this)),{},{"v-footer--absolute":this.absolute,"v-footer--fixed":!this.absolute&&(this.app||this.fixed),"v-footer--padless":this.padless,"v-footer--inset":this.inset})},computedBottom:function(){if(this.isPositioned)return this.app?this.$vuetify.application.bottom:0},computedLeft:function(){if(this.isPositioned)return this.app&&this.inset?this.$vuetify.application.left:0},computedRight:function(){if(this.isPositioned)return this.app&&this.inset?this.$vuetify.application.right:0},isPositioned:function(){return Boolean(this.absolute||this.fixed||this.app)},styles:function(){var t=parseInt(this.height);return Object(i["a"])(Object(i["a"])({},a["a"].options.computed.styles.call(this)),{},{height:isNaN(t)?t:Object(c["g"])(t),left:Object(c["g"])(this.computedLeft),right:Object(c["g"])(this.computedRight),bottom:Object(c["g"])(this.computedBottom)})}},methods:{updateApplication:function(){var t=parseInt(this.height);return isNaN(t)?this.$el?this.$el.clientHeight:0:t}},render:function(t){var e=this.setBackgroundColor(this.color,{staticClass:"v-footer",class:this.classes,style:this.styles});return t(this.tag,e,this.$slots["default"])}})},"62ad":function(t,e,n){"use strict";var i=n("ade3"),a=n("5530"),r=(n("13d5"),n("a9e3"),n("b64b"),n("ac1f"),n("5319"),n("4ec9"),n("d3b7"),n("3ca3"),n("ddb0"),n("caad"),n("4160"),n("159b"),n("45fc"),n("2ca0"),n("4b85"),n("2b0e")),o=n("d9f7"),s=n("80d2"),c=["sm","md","lg","xl"],u=function(){return c.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{})}(),l=function(){return c.reduce((function(t,e){return t["offset"+Object(s["F"])(e)]={type:[String,Number],default:null},t}),{})}(),d=function(){return c.reduce((function(t,e){return t["order"+Object(s["F"])(e)]={type:[String,Number],default:null},t}),{})}(),f={col:Object.keys(u),offset:Object.keys(l),order:Object.keys(d)};function p(t,e,n){var i=t;if(null!=n&&!1!==n){if(e){var a=e.replace(t,"");i+="-".concat(a)}return"col"!==t||""!==n&&!0!==n?(i+="-".concat(n),i.toLowerCase()):i.toLowerCase()}}var v=new Map;e["a"]=r["default"].extend({name:"v-col",functional:!0,props:Object(a["a"])(Object(a["a"])(Object(a["a"])(Object(a["a"])({cols:{type:[Boolean,String,Number],default:!1}},u),{},{offset:{type:[String,Number],default:null}},l),{},{order:{type:[String,Number],default:null}},d),{},{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var n=e.props,a=e.data,r=e.children,s=(e.parent,"");for(var c in n)s+=String(n[c]);var u=v.get(s);return u||function(){var t,e;for(e in u=[],f)f[e].forEach((function(t){var i=n[t],a=p(e,t,i);a&&u.push(a)}));var a=u.some((function(t){return t.startsWith("col-")}));u.push((t={col:!a||!n.cols},Object(i["a"])(t,"col-".concat(n.cols),n.cols),Object(i["a"])(t,"offset-".concat(n.offset),n.offset),Object(i["a"])(t,"order-".concat(n.order),n.order),Object(i["a"])(t,"align-self-".concat(n.alignSelf),n.alignSelf),t)),v.set(s,u)}(),t(n.tag,Object(o["a"])(a,{class:u}),r)}})},6566:function(t,e,n){"use strict";var i=n("9bf2").f,a=n("7c73"),r=n("e2cc"),o=n("0366"),s=n("19aa"),c=n("2266"),u=n("7dd0"),l=n("2626"),d=n("83ab"),f=n("f183").fastKey,p=n("69f3"),v=p.set,h=p.getterFor;t.exports={getConstructor:function(t,e,n,u){var l=t((function(t,i){s(t,l,e),v(t,{type:e,index:a(null),first:void 0,last:void 0,size:0}),d||(t.size=0),void 0!=i&&c(i,t[u],{that:t,AS_ENTRIES:n})})),p=h(e),b=function(t,e,n){var i,a,r=p(t),o=m(t,e);return o?o.value=n:(r.last=o={index:a=f(e,!0),key:e,value:n,previous:i=r.last,next:void 0,removed:!1},r.first||(r.first=o),i&&(i.next=o),d?r.size++:t.size++,"F"!==a&&(r.index[a]=o)),t},m=function(t,e){var n,i=p(t),a=f(e);if("F"!==a)return i.index[a];for(n=i.first;n;n=n.next)if(n.key==e)return n};return r(l.prototype,{clear:function(){var t=this,e=p(t),n=e.index,i=e.first;while(i)i.removed=!0,i.previous&&(i.previous=i.previous.next=void 0),delete n[i.index],i=i.next;e.first=e.last=void 0,d?e.size=0:t.size=0},delete:function(t){var e=this,n=p(e),i=m(e,t);if(i){var a=i.next,r=i.previous;delete n.index[i.index],i.removed=!0,r&&(r.next=a),a&&(a.previous=r),n.first==i&&(n.first=a),n.last==i&&(n.last=r),d?n.size--:e.size--}return!!i},forEach:function(t){var e,n=p(this),i=o(t,arguments.length>1?arguments[1]:void 0,3);while(e=e?e.next:n.first){i(e.value,e.key,this);while(e&&e.removed)e=e.previous}},has:function(t){return!!m(this,t)}}),r(l.prototype,n?{get:function(t){var e=m(this,t);return e&&e.value},set:function(t,e){return b(this,0===t?0:t,e)}}:{add:function(t){return b(this,t=0===t?0:t,t)}}),d&&i(l.prototype,"size",{get:function(){return p(this).size}}),l},setStrong:function(t,e,n){var i=e+" Iterator",a=h(e),r=h(i);u(t,e,(function(t,e){v(this,{type:i,target:t,state:a(t),kind:e,last:void 0})}),(function(){var t=r(this),e=t.kind,n=t.last;while(n&&n.removed)n=n.previous;return t.target&&(t.last=n=n?n.next:t.state.first)?"keys"==e?{value:n.key,done:!1}:"values"==e?{value:n.value,done:!1}:{value:[n.key,n.value],done:!1}:(t.target=void 0,{value:void 0,done:!0})}),n?"entries":"values",!n,!0),l(e)}}},"6d61":function(t,e,n){"use strict";var i=n("23e7"),a=n("da84"),r=n("94ca"),o=n("6eeb"),s=n("f183"),c=n("2266"),u=n("19aa"),l=n("1626"),d=n("861d"),f=n("d039"),p=n("1c7e"),v=n("d44e"),h=n("7156");t.exports=function(t,e,n){var b=-1!==t.indexOf("Map"),m=-1!==t.indexOf("Weak"),g=b?"set":"add",y=a[t],x=y&&y.prototype,j=y,w={},O=function(t){var e=x[t];o(x,t,"add"==t?function(t){return e.call(this,0===t?0:t),this}:"delete"==t?function(t){return!(m&&!d(t))&&e.call(this,0===t?0:t)}:"get"==t?function(t){return m&&!d(t)?void 0:e.call(this,0===t?0:t)}:"has"==t?function(t){return!(m&&!d(t))&&e.call(this,0===t?0:t)}:function(t,n){return e.call(this,0===t?0:t,n),this})},k=r(t,!l(y)||!(m||x.forEach&&!f((function(){(new y).entries().next()}))));if(k)j=n.getConstructor(e,t,b,g),s.enable();else if(r(t,!0)){var C=new j,S=C[g](m?{}:-0,1)!=C,_=f((function(){C.has(1)})),N=p((function(t){new y(t)})),z=!m&&f((function(){var t=new y,e=5;while(e--)t[g](e,e);return!t.has(-0)}));N||(j=e((function(e,n){u(e,j,t);var i=h(new y,e,j);return void 0!=n&&c(n,i[g],{that:i,AS_ENTRIES:b}),i})),j.prototype=x,x.constructor=j),(_||z)&&(O("delete"),O("has"),b&&O("get")),(z||S)&&O(g),m&&x.clear&&delete x.clear}return w[t]=j,i({global:!0,forced:j!=y},w),v(j,t),m||n.setStrong(j,t,b),j}},b5b6:function(t,e,n){},c902:function(t,e){},d761:function(t,e,n){"use strict";n.r(e);var i=n("2769"),a=n("fbe0");for(var r in a)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(r);var o=n("2877"),s=n("6544"),c=n.n(s),u=n("8336"),l=n("62ad"),d=n("a523"),f=n("553a"),p=n("132d"),v=n("0fd9"),h=n("8654"),b=Object(o["a"])(a["default"],i["a"],i["b"],!1,null,null,null);e["default"]=b.exports,c()(b,{VBtn:u["a"],VCol:l["a"],VContainer:d["a"],VFooter:f["a"],VIcon:p["a"],VRow:v["a"],VTextField:h["a"]})},dc22:function(t,e,n){"use strict";function i(t,e){var n=e.value,i=e.options||{passive:!0};window.addEventListener("resize",n,i),t._onResize={callback:n,options:i},e.modifiers&&e.modifiers.quiet||n()}function a(t){if(t._onResize){var e=t._onResize,n=e.callback,i=e.options;window.removeEventListener("resize",n,i),delete t._onResize}}var r={inserted:i,unbind:a};e["a"]=r},dd89:function(t,e,n){"use strict";function i(t){if("function"!==typeof t.getRootNode){while(t.parentNode)t=t.parentNode;return t!==document?null:document}var e=t.getRootNode();return e!==document&&e.getRootNode({composed:!0})!==document?null:e}n.d(e,"a",(function(){return i}))},fbe0:function(t,e,n){"use strict";n.r(e);var i=n("c902"),a=n.n(i);for(var r in i)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e["default"]=a.a}}]);
//# sourceMappingURL=chunk-08ab8064.d5f8d3e9.js.map