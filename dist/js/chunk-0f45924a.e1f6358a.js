(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0f45924a"],{2909:function(t,e,i){"use strict";i.d(e,"a",(function(){return u}));i("277d");var n=i("6b75");function r(t){if(Array.isArray(t))return Object(n["a"])(t)}i("a4d3"),i("e01a"),i("d3b7"),i("d28b"),i("3ca3"),i("ddb0"),i("a630");function a(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}var o=i("06c5");function s(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function u(t){return r(t)||a(t)||Object(o["a"])(t)||s()}},"4bd4":function(t,e,i){"use strict";var n=i("5530"),r=(i("caad"),i("2532"),i("07ac"),i("4de4"),i("4160"),i("159b"),i("4795"),i("7db0"),i("58df")),a=i("7e2b"),o=i("3206");e["a"]=Object(r["a"])(a["a"],Object(o["b"])("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(t){var e=this,i=function(t){return t.$watch("hasError",(function(i){e.$set(e.errorBag,t._uid,i)}),{immediate:!0})},n={_uid:t._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?n.shouldValidate=t.$watch("shouldValidate",(function(r){r&&(e.errorBag.hasOwnProperty(t._uid)||(n.valid=i(t)))})):n.valid=i(t),n},validate:function(){return 0===this.inputs.filter((function(t){return!t.validate(!0)})).length},reset:function(){this.inputs.forEach((function(t){return t.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(t){return t.resetValidation()})),this.resetErrorBag()},register:function(t){this.inputs.push(t),this.watchers.push(this.watchInput(t))},unregister:function(t){var e=this.inputs.find((function(e){return e._uid===t._uid}));if(e){var i=this.watchers.find((function(t){return t._uid===e._uid}));i&&(i.valid(),i.shouldValidate()),this.watchers=this.watchers.filter((function(t){return t._uid!==e._uid})),this.inputs=this.inputs.filter((function(t){return t._uid!==e._uid})),this.$delete(this.errorBag,e._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:Object(n["a"])({novalidate:!0},this.attrs$),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots["default"])}})},"6dde":function(t,e,i){"use strict";i("fa07")},"99d9":function(t,e,i){"use strict";i.d(e,"a",(function(){return a})),i.d(e,"b",(function(){return s})),i.d(e,"c",(function(){return u}));var n=i("b0af"),r=i("80d2"),a=Object(r["i"])("v-card__actions"),o=Object(r["i"])("v-card__subtitle"),s=Object(r["i"])("v-card__text"),u=Object(r["i"])("v-card__title");n["a"]},dc22:function(t,e,i){"use strict";function n(t,e){var i=e.value,n=e.options||{passive:!0};window.addEventListener("resize",i,n),t._onResize={callback:i,options:n},e.modifiers&&e.modifiers.quiet||i()}function r(t){if(t._onResize){var e=t._onResize,i=e.callback,n=e.options;window.removeEventListener("resize",i,n),delete t._onResize}}var a={inserted:n,unbind:r};e["a"]=a},dd89:function(t,e,i){"use strict";function n(t){if("function"!==typeof t.getRootNode){while(t.parentNode)t=t.parentNode;return t!==document?null:document}var e=t.getRootNode();return e!==document&&e.getRootNode({composed:!0})!==document?null:e}i.d(e,"a",(function(){return n}))},e347:function(t,e,i){t.exports=i.p+"img/logo.622c23e2.svg"},ea39:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page-wrap"},[n("div",{staticClass:"session-form-hold"},[n("base-card",[n("v-progress-linear",{attrs:{active:t.loading,indeterminate:t.loading,absolute:"",top:"",color:"primary"}}),n("v-card-text",{staticClass:"text-center"},[n("v-avatar",{staticClass:"mb-4",attrs:{size:"60"}},[n("img",{attrs:{src:i("e347"),alt:""}})]),n("h6",{staticClass:"text-muted font-semibold mb-10"},[t._v(" "+t._s(t.$t("login.enterToAccount"))+" ")]),n("v-form",[n("v-text-field",{attrs:{label:"email",rules:t.emailRules,required:""},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),n("v-text-field",{attrs:{"append-icon":t.show?"mdi-eye":"mdi-eye-off",type:t.show?"text":"password",name:"input-10-2",label:"пароль",counter:10,rules:t.nameRules},on:{"click:append":function(e){t.show=!t.show}},model:{value:t.ePassword,callback:function(e){t.ePassword=e},expression:"ePassword"}}),t.error?n("v-card-text",{staticClass:"error"},[t._v(" "+t._s(t.$t(t.error))+" ")]):t._e(),n("v-btn",{staticClass:"mt-4 mb-4",attrs:{block:"",color:"primary",dark:""},on:{click:t.formSubmit}},[n("v-icon",{attrs:{left:""}},[t._v("mdi-login")]),t._v(" "+t._s(t.$t("login.login")))],1),n("div",{staticClass:"flex justify-around flex-wrap"},[n("v-btn",{staticClass:"mb-2",attrs:{text:"",small:"",color:"primary"}},[t._v(t._s(t.$t("login.forgotPassword")))]),n("v-btn",{attrs:{text:"",small:"",color:"primary",to:"/user/sign-up"}},[t._v(t._s(t.$t("login.signUp")))])],1)],1)],1)],1)],1)])},r=[],a=i("5530"),o=(i("4795"),i("59ca")),s=i.n(o),u=i("2f62"),c={name:"login",metaInfo:{title:"SignIn Two"},data:function(){return{show:!1,password:"Password",checkbox1:!0,checkbox2:!1,email:"admin@gmail.com",ePassword:"123456",loading:!1,emailRules:[function(t){return!!t||"E-mail is required"},function(t){return/.+@.+\..+/.test(t)||"E-mail must be valid"}],nameRules:[function(t){return!!t||"Password is required"},function(t){return t&&t.length<=10||"Name must be less than 10 characters"}]}},computed:Object(a["a"])({},Object(u["c"])(["loggedInUser","error"])),methods:Object(a["a"])(Object(a["a"])({},Object(u["b"])(["login"])),{},{formSubmit:function(){this.login({email:this.email,password:this.ePassword})},googleSignIn:function(){var t=this,e=new s.a.auth.GoogleAuthProvider;s.a.auth().signInWithPopup(e).then((function(e){var i={uid:e.user.uid};localStorage.setItem("userInfo",JSON.stringify(i)),t.$router.push("/")}))["catch"]((function(t){alert("Oops"+t.message)}))}}),watch:{loggedInUser:function(t){var e=this;t&&t.uid&&t.uid.length>0&&(console.log("logged in successfully "),this.loading=!0,setTimeout((function(){e.$router.push("/")}),500))}}},d=c,l=(i("6dde"),i("2877")),f=i("6544"),m=i.n(f),h=i("8212"),v=i("8336"),b=i("99d9"),p=i("4bd4"),g=i("132d"),w=i("8e36"),_=i("8654"),y=Object(l["a"])(d,n,r,!1,null,"723aba20",null);e["default"]=y.exports;m()(y,{VAvatar:h["a"],VBtn:v["a"],VCardText:b["b"],VForm:p["a"],VIcon:g["a"],VProgressLinear:w["a"],VTextField:_["a"]})},fa07:function(t,e,i){}}]);
//# sourceMappingURL=chunk-0f45924a.e1f6358a.js.map