(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-411ca1fe"],{"1e0f":function(r,e,t){"use strict";t.r(e);var o=function(){var r=this,e=r.$createElement,o=r._self._c||e;return o("div",{staticClass:"page-wrap"},[o("div",{staticClass:"session-form-hold"},[o("base-card",[o("v-progress-linear",{attrs:{active:r.loading,indeterminate:r.loading,absolute:"",top:"",color:"primary"}}),o("v-card-text",{staticClass:"text-center"},[o("v-avatar",{staticClass:"mb-4",attrs:{size:"60"}},[o("img",{attrs:{src:t("e347"),alt:""}})]),o("h5",[r._v(r._s(r.$t("register.getStarted")))]),r.done?o("div",[o("v-card-text",[r._v(" "+r._s(r.$t("register.done"))+" ")])],1):r._e(),r.done?r._e():o("v-form",{attrs:{disabled:!0===r.loading}},[o("FormError",{attrs:{errors:r.formErrors.email}},[o("v-text-field",{attrs:{label:r.$t("register.email"),id:"email"},model:{value:r.email,callback:function(e){r.email=e},expression:"email"}})],1),o("FormError",{attrs:{errors:r.formErrors.password}},[o("v-text-field",{attrs:{"append-icon":r.show?"mdi-eye":"mdi-eye-off",type:r.show?"text":"password",name:"input-10-2",label:r.$t("register.password")},on:{"click:append":function(e){r.show=!r.show}},model:{value:r.password,callback:function(e){r.password=e},expression:"password"}})],1),o("FormError",{attrs:{errors:r.formErrors.passwordConfirmation}},[o("v-text-field",{attrs:{"append-icon":r.show?"mdi-eye":"mdi-eye-off",type:r.show?"text":"password",name:"input-10-2",label:r.$t("register.passwordConfirmation"),value:""},on:{"click:append":function(e){r.show=!r.show}},model:{value:r.passwordConfirmation,callback:function(e){r.passwordConfirmation=e},expression:"passwordConfirmation"}})],1),o("FormError",{attrs:{errors:r.formErrors.firstAddress}},[o("v-text-field",{attrs:{label:r.$t("register.firstAddress")},model:{value:r.firstAddress,callback:function(e){r.firstAddress=e},expression:"firstAddress"}})],1),o("FormError",{attrs:{errors:r.formErrors.secondAddress}},[o("v-text-field",{attrs:{label:r.$t("register.secondAddress")},model:{value:r.secondAddress,callback:function(e){r.secondAddress=e},expression:"secondAddress"}})],1),o("FormError",{attrs:{errors:r.formErrors.city}},[o("v-text-field",{attrs:{label:r.$t("register.city")},model:{value:r.city,callback:function(e){r.city=e},expression:"city"}})],1),o("FormError",{attrs:{errors:r.formErrors.state}},[o("v-text-field",{attrs:{label:r.$t("register.state")},model:{value:r.state,callback:function(e){r.state=e},expression:"state"}})],1),o("FormError",{attrs:{errors:r.formErrors.zip}},[o("v-text-field",{attrs:{label:r.$t("register.zip")},model:{value:r.zip,callback:function(e){r.zip=e},expression:"zip"}})],1),o("v-btn",{staticClass:"mb-4",attrs:{block:"",color:"primary",dark:""},on:{click:r.signup}},[r._v(r._s(r.$t("register.register")))])],1),o("div",{staticClass:"flex justify-around flex-wrap"},[o("v-btn",{attrs:{text:"",small:"",color:"primary",to:"/user/sign-in"}},[r._v(r._s(r.$t("login.login")))])],1)],1)],1)],1)])},s=[],n=t("1da1"),i=(t("96cf"),t("07ac"),t("ac1f"),t("00b4"),t("8aa5")),a=t.n(i),d=t("5f20"),c=t.n(d),u=(t("4678"),{name:"SignUp",metaInfo:{title:"SignUp"},components:{FormError:c.a},data:function(){return{done:!1,email:"",password:"",passwordConfirmation:"",firstAddress:"",secondAddress:"",city:"",state:"",zip:"",checkbox1:!1,show:!1,formErrors:{},errors:{},loading:!1}},methods:{signup:function(){var r=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(r.loading=!0,r.formErrors={},r.email?r.validEmail(r.email)||(r.formErrors.email=[r.$t("register.errors.invalidEmail")]):r.formErrors.email=[r.$t("register.errors.empty")],r.password||(r.formErrors.password=[r.$t("register.errors.empty")]),r.passwordConfirmation||(r.formErrors.passwordConfirmation=[r.$t("register.errors.empty")]),r.firstAddress||(r.formErrors.firstAddress=[r.$t("register.errors.empty")]),r.secondAddress||(r.formErrors.secondAddress=[r.$t("register.errors.empty")]),r.city||(r.formErrors.city=[r.$t("register.errors.empty")]),r.state||(r.formErrors.state=[r.$t("register.errors.empty")]),r.zip||(r.formErrors.zip=[r.$t("register.errors.empty")]),r.password!==r.passwordConfirmation&&(r.formErrors.password=["Password is not equals to confirmation password."],r.formErrors.passwordConfirmation=["Password is not equals to confirmation password."]),!(Object.values(r.formErrors).length>0)){e.next=13;break}return e.abrupt("return");case 13:return e.prev=13,e.next=16,a.a.auth().createUserWithEmailAndPassword(r.email,r.password);case 16:return t=e.sent,e.next=19,a.a.firestore().collection("users").doc(t.user.uid).set({email:r.email,firstAddress:r.firstAddress,secondAddress:r.secondAddress,city:r.city,state:r.state,zip:r.zip,license:"no-license",verify:!1});case 19:return e.next=21,t.user.sendEmailVerification();case 21:r.done=!0,e.next=27;break;case 24:e.prev=24,e.t0=e["catch"](13),"weak-password"===e.t0.code?console.log("The password provided is too weak."):"auth/email-already-in-use"===e.t0.code&&(r.formErrors.email=[r.$t("register.errors.exists")]);case 27:return e.prev=27,r.loading=!1,e.finish(27);case 30:case"end":return e.stop()}}),e,null,[[13,24,27,30]])})))()},validEmail:function(r){var e=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return e.test(r)}}}),l=u,f=(t("edb8"),t("2877")),p=t("6544"),m=t.n(p),v=t("8212"),h=t("8336"),b=t("99d9"),w=t("4bd4"),g=t("8e36"),_=t("8654"),y=Object(f["a"])(l,o,s,!1,null,"352dd516",null);e["default"]=y.exports;m()(y,{VAvatar:v["a"],VBtn:h["a"],VCardText:b["b"],VForm:w["a"],VProgressLinear:g["a"],VTextField:_["a"]})},2909:function(r,e,t){"use strict";t.d(e,"a",(function(){return d}));t("277d");var o=t("6b75");function s(r){if(Array.isArray(r))return Object(o["a"])(r)}t("a4d3"),t("e01a"),t("d3b7"),t("d28b"),t("3ca3"),t("ddb0"),t("a630");function n(r){if("undefined"!==typeof Symbol&&null!=r[Symbol.iterator]||null!=r["@@iterator"])return Array.from(r)}var i=t("06c5");function a(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function d(r){return s(r)||n(r)||Object(i["a"])(r)||a()}},4678:function(r,e,t){},"4bd4":function(r,e,t){"use strict";var o=t("5530"),s=(t("caad"),t("2532"),t("07ac"),t("4de4"),t("d3b7"),t("4160"),t("159b"),t("4795"),t("7db0"),t("58df")),n=t("7e2b"),i=t("3206");e["a"]=Object(s["a"])(n["a"],Object(i["b"])("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(r){var e=Object.values(r).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(r){var e=this,t=function(r){return r.$watch("hasError",(function(t){e.$set(e.errorBag,r._uid,t)}),{immediate:!0})},o={_uid:r._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?o.shouldValidate=r.$watch("shouldValidate",(function(s){s&&(e.errorBag.hasOwnProperty(r._uid)||(o.valid=t(r)))})):o.valid=t(r),o},validate:function(){return 0===this.inputs.filter((function(r){return!r.validate(!0)})).length},reset:function(){this.inputs.forEach((function(r){return r.reset()})),this.resetErrorBag()},resetErrorBag:function(){var r=this;this.lazyValidation&&setTimeout((function(){r.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(r){return r.resetValidation()})),this.resetErrorBag()},register:function(r){this.inputs.push(r),this.watchers.push(this.watchInput(r))},unregister:function(r){var e=this.inputs.find((function(e){return e._uid===r._uid}));if(e){var t=this.watchers.find((function(r){return r._uid===e._uid}));t&&(t.valid(),t.shouldValidate()),this.watchers=this.watchers.filter((function(r){return r._uid!==e._uid})),this.inputs=this.inputs.filter((function(r){return r._uid!==e._uid})),this.$delete(this.errorBag,e._uid)}}},render:function(r){var e=this;return r("form",{staticClass:"v-form",attrs:Object(o["a"])({novalidate:!0},this.attrs$),on:{submit:function(r){return e.$emit("submit",r)}}},this.$slots["default"])}})},"5f20":function(r,e){r.exports=function(r){var e={};function t(o){if(e[o])return e[o].exports;var s=e[o]={i:o,l:!1,exports:{}};return r[o].call(s.exports,s,s.exports,t),s.l=!0,s.exports}return t.m=r,t.c=e,t.d=function(r,e,o){t.o(r,e)||Object.defineProperty(r,e,{enumerable:!0,get:o})},t.r=function(r){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(r,"__esModule",{value:!0})},t.t=function(r,e){if(1&e&&(r=t(r)),8&e)return r;if(4&e&&"object"===typeof r&&r&&r.__esModule)return r;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:r}),2&e&&"string"!=typeof r)for(var s in r)t.d(o,s,function(e){return r[e]}.bind(null,s));return o},t.n=function(r){var e=r&&r.__esModule?function(){return r["default"]}:function(){return r};return t.d(e,"a",e),e},t.o=function(r,e){return Object.prototype.hasOwnProperty.call(r,e)},t.p="",t(t.s="fb15")}({"33e0":function(r,e,t){},"63d3":function(r,e,t){"use strict";var o=t("33e0"),s=t.n(o);s.a},f6fd:function(r,e){(function(r){var e="currentScript",t=r.getElementsByTagName("script");e in r||Object.defineProperty(r,e,{get:function(){try{throw new Error}catch(o){var r,e=(/.*at [^\(]*\((.*):.+:.+\)$/gi.exec(o.stack)||[!1])[1];for(r in t)if(t[r].src==e||"interactive"==t[r].readyState)return t[r];return null}}})})(document)},fb15:function(r,e,t){"use strict";var o;(t.r(e),"undefined"!==typeof window)&&(t("f6fd"),(o=window.document.currentScript)&&(o=o.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))&&(t.p=o[1]));var s=function(){var r=this,e=r.$createElement,t=r._self._c||e;return r.errors&&r.errors.length>0?t("div",{staticClass:"has-error"},[r._t("default"),r._l(r.errors,(function(e){return t("p",{key:e,staticClass:"error-message"},[r._v("\n        "+r._s(e)+"\n    ")])}))],2):t("div",[r._t("default")],2)},n=[],i={props:{errors:{type:Array,default:function(){return[]}}}},a=i;t("63d3");function d(r,e,t,o,s,n,i,a){var d,c="function"===typeof r?r.options:r;if(e&&(c.render=e,c.staticRenderFns=t,c._compiled=!0),o&&(c.functional=!0),n&&(c._scopeId="data-v-"+n),i?(d=function(r){r=r||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,r||"undefined"===typeof __VUE_SSR_CONTEXT__||(r=__VUE_SSR_CONTEXT__),s&&s.call(this,r),r&&r._registeredComponents&&r._registeredComponents.add(i)},c._ssrRegister=d):s&&(d=a?function(){s.call(this,this.$root.$options.shadowRoot)}:s),d)if(c.functional){c._injectStyles=d;var u=c.render;c.render=function(r,e){return d.call(e),u(r,e)}}else{var l=c.beforeCreate;c.beforeCreate=l?[].concat(l,d):[d]}return{exports:r,options:c}}var c=d(a,s,n,!1,null,null,null),u=c.exports;e["default"]=u}})["default"]},"99d9":function(r,e,t){"use strict";t.d(e,"a",(function(){return n})),t.d(e,"b",(function(){return a})),t.d(e,"c",(function(){return d}));var o=t("b0af"),s=t("80d2"),n=Object(s["j"])("v-card__actions"),i=Object(s["j"])("v-card__subtitle"),a=Object(s["j"])("v-card__text"),d=Object(s["j"])("v-card__title");o["a"]},d261:function(r,e,t){},dc22:function(r,e,t){"use strict";function o(r,e,t){var o=e.value,s=e.options||{passive:!0};window.addEventListener("resize",o,s),r._onResize=Object(r._onResize),r._onResize[t.context._uid]={callback:o,options:s},e.modifiers&&e.modifiers.quiet||o()}function s(r,e,t){var o;if(null!=(o=r._onResize)&&o[t.context._uid]){var s=r._onResize[t.context._uid],n=s.callback,i=s.options;window.removeEventListener("resize",n,i),delete r._onResize[t.context._uid]}}var n={inserted:o,unbind:s};e["a"]=n},dd89:function(r,e,t){"use strict";function o(r){if("function"!==typeof r.getRootNode){while(r.parentNode)r=r.parentNode;return r!==document?null:document}var e=r.getRootNode();return e!==document&&e.getRootNode({composed:!0})!==document?null:e}t.d(e,"a",(function(){return o}))},e347:function(r,e,t){r.exports=t.p+"img/logo.622c23e2.svg"},edb8:function(r,e,t){"use strict";t("d261")}}]);
//# sourceMappingURL=chunk-411ca1fe.839386ba.js.map