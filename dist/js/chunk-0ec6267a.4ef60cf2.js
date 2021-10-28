(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0ec6267a"],{2909:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));n("277d");var i=n("6b75");function a(t){if(Array.isArray(t))return Object(i["a"])(t)}n("a4d3"),n("e01a"),n("d3b7"),n("d28b"),n("3ca3"),n("ddb0"),n("a630");function r(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}var o=n("06c5");function u(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function c(t){return a(t)||r(t)||Object(o["a"])(t)||u()}},"4bd4":function(t,e,n){"use strict";var i=n("5530"),a=(n("caad"),n("2532"),n("07ac"),n("4de4"),n("4160"),n("159b"),n("4795"),n("7db0"),n("58df")),r=n("7e2b"),o=n("3206");e["a"]=Object(a["a"])(r["a"],Object(o["b"])("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(t){var e=this,n=function(t){return t.$watch("hasError",(function(n){e.$set(e.errorBag,t._uid,n)}),{immediate:!0})},i={_uid:t._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?i.shouldValidate=t.$watch("shouldValidate",(function(a){a&&(e.errorBag.hasOwnProperty(t._uid)||(i.valid=n(t)))})):i.valid=n(t),i},validate:function(){return 0===this.inputs.filter((function(t){return!t.validate(!0)})).length},reset:function(){this.inputs.forEach((function(t){return t.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(t){return t.resetValidation()})),this.resetErrorBag()},register:function(t){this.inputs.push(t),this.watchers.push(this.watchInput(t))},unregister:function(t){var e=this.inputs.find((function(e){return e._uid===t._uid}));if(e){var n=this.watchers.find((function(t){return t._uid===e._uid}));n&&(n.valid(),n.shouldValidate()),this.watchers=this.watchers.filter((function(t){return t._uid!==e._uid})),this.inputs=this.inputs.filter((function(t){return t._uid!==e._uid})),this.$delete(this.errorBag,e._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:Object(i["a"])({novalidate:!0},this.attrs$),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots["default"])}})},"4ebd":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-row",[n("v-col",{attrs:{sm:"12"}},[n("base-card",[n("v-card-title",[t._v(" Додати акаунт ")]),n("v-card-text",[n("v-form",{ref:"AccountForm",attrs:{"lazy-validation":""}},[n("v-text-field",{attrs:{label:"Назва",rules:[function(t){return!!t||"Вкажіть назву"}],required:"",outlined:""},model:{value:t.AccountName,callback:function(e){t.AccountName=e},expression:"AccountName"}}),n("v-row",[n("v-col",{attrs:{md:"6"}},[n("v-select",{attrs:{items:t.AccountPlatforms,placeholder:"Оберіть біржу",required:"",outlined:""},model:{value:t.AccountPlatform,callback:function(e){t.AccountPlatform=e},expression:"AccountPlatform"}})],1),n("v-col",{attrs:{md:"6"}},[n("v-select",{attrs:{placeholder:"Тип акаунту",items:t.AccountTypes,"return-object":"",required:"",outlined:""},model:{value:t.AccountType,callback:function(e){t.AccountType=e},expression:"AccountType"}})],1)],1),n("v-checkbox",{attrs:{label:"Simulated"},model:{value:t.Simulated,callback:function(e){t.Simulated=e},expression:"Simulated"}}),!1===t.Simulated?[n("v-text-field",{attrs:{label:"Public Key",rules:[function(t){return!!t||"Це поле не може бути порожнє!"}],required:"",outlined:""},model:{value:t.AccountPub,callback:function(e){t.AccountPub=e},expression:"AccountPub"}}),n("v-text-field",{attrs:{label:"Private Key",rules:[function(t){return!!t||"Це поле не може бути порожнє!"}],required:"",outlined:""},model:{value:t.AccountPriv,callback:function(e){t.AccountPriv=e},expression:"AccountPriv"}})]:t._e(),n("v-btn",{staticClass:"my-4",attrs:{color:"success"},on:{click:t.addAccount}},[t._v("Відправити")])],2)],1)],1)],1)],1)},a=[],r=n("1da1"),o=(n("96cf"),n("a18c"),n("59ca")),u=n.n(o),c=(n("ea7b"),n("e71f"),n("66ce"),{data:function(){return{AccountPlatforms:["Binance","Bybit"],AccountTypes:[{text:"Спот",value:"Spot Trading"},{text:"Фьючерси",value:"Leverage Trading"}],AccountName:"",AccountPlatform:"",AccountType:{text:"Спот",value:"spot"},AccountPriv:"",AccountPub:"",Simulated:!1}},methods:{addAccount:function(){var t=this;if(!this.$refs.AccountForm.validate())return!1;var e=u.a.firestore(),n=u.a.database();u.a.auth().onAuthStateChanged(function(){var i=Object(r["a"])(regeneratorRuntime.mark((function i(a){return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return i.next=2,e.collection("users").doc(a.uid).collection("PriceDrivers").add({AccountName:t.AccountName,AccountPlatform:t.AccountPlatform,AccountType:t.AccountType.value,AccountPub:t.AccountPub,AccountPriv:t.AccountPriv,Simulated:t.Simulated}).then(function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(i){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,n.ref("tasks").push().set({task:"add_account",user:a.uid,data:{PriceDriver:i.id,AccountType:t.AccountType.value,AccountPub:t.AccountPub,AccountPriv:t.AccountPriv,Simulated:t.Simulated}});case 2:t.$router.push("/settings");case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())["catch"]((function(t){}));case 2:case"end":return i.stop()}}),i)})));return function(t){return i.apply(this,arguments)}}())}}}),s=c,l=n("2877"),d=n("6544"),h=n.n(d),f=n("8336"),p=n("99d9"),v=n("ac7c"),m=n("62ad"),b=n("4bd4"),A=n("0fd9"),g=n("b974"),y=n("8654"),k=Object(l["a"])(s,i,a,!1,null,null,null);e["default"]=k.exports;h()(k,{VBtn:f["a"],VCardText:p["a"],VCardTitle:p["b"],VCheckbox:v["a"],VCol:m["a"],VForm:b["a"],VRow:A["a"],VSelect:g["a"],VTextField:y["a"]})},"66ce":function(t,e,n){"use strict";n("3523")},"6ca7":function(t,e,n){},a293:function(t,e,n){"use strict";var i=n("53ca"),a=(n("45fc"),n("4795"),n("dd89"));function r(){return!0}function o(t,e,n){if(!t||!1===u(t,n))return!1;var r=Object(a["a"])(e);if("undefined"!==typeof ShadowRoot&&r instanceof ShadowRoot&&r.host===t.target)return!1;var o=("object"===Object(i["a"])(n.value)&&n.value.include||function(){return[]})();return o.push(e),!o.some((function(e){return e.contains(t.target)}))}function u(t,e){var n="object"===Object(i["a"])(e.value)&&e.value.closeConditional||r;return n(t)}function c(t,e,n){var i="function"===typeof n.value?n.value:n.value.handler;e._clickOutside.lastMousedownWasOutside&&o(t,e,n)&&setTimeout((function(){u(t,n)&&i&&i(t)}),0)}function s(t,e){var n=Object(a["a"])(t);e(document),n instanceof ShadowRoot&&e(n)}var l={inserted:function(t,e){var n=function(n){return c(n,t,e)},i=function(n){t._clickOutside.lastMousedownWasOutside=o(n,t,e)};s(t,(function(t){t.addEventListener("click",n,!0),t.addEventListener("mousedown",i,!0)})),t._clickOutside={lastMousedownWasOutside:!0,onClick:n,onMousedown:i}},unbind:function(t){t._clickOutside&&(s(t,(function(e){e&&t._clickOutside&&(e.removeEventListener("click",t._clickOutside.onClick,!0),e.removeEventListener("mousedown",t._clickOutside.onMousedown,!0))})),delete t._clickOutside)}};e["a"]=l},ac7c:function(t,e,n){"use strict";var i=n("15fd"),a=n("5530"),r=(n("0d03"),n("d3b7"),n("25f0"),n("6ca7"),n("ec29"),n("9d26")),o=n("c37a"),u=(n("277d"),n("45fc"),n("4de4"),n("5607")),c=n("2b0e"),s=c["default"].extend({name:"rippleable",directives:{ripple:u["a"]},props:{ripple:{type:[Boolean,Object],default:!0}},methods:{genRipple:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this.ripple?(t.staticClass="v-input--selection-controls__ripple",t.directives=t.directives||[],t.directives.push({name:"ripple",value:{center:!0}}),this.$createElement("div",t)):null}}}),l=n("8547"),d=n("58df");function h(t){t.preventDefault()}var f=Object(d["a"])(o["a"],s,l["a"]).extend({name:"selectable",model:{prop:"inputValue",event:"change"},props:{id:String,inputValue:null,falseValue:null,trueValue:null,multiple:{type:Boolean,default:null},label:String},data:function(){return{hasColor:this.inputValue,lazyValue:this.inputValue}},computed:{computedColor:function(){if(this.isActive)return this.color?this.color:this.isDark&&!this.appIsDark?"white":"primary"},isMultiple:function(){return!0===this.multiple||null===this.multiple&&Array.isArray(this.internalValue)},isActive:function(){var t=this,e=this.value,n=this.internalValue;return this.isMultiple?!!Array.isArray(n)&&n.some((function(n){return t.valueComparator(n,e)})):void 0===this.trueValue||void 0===this.falseValue?e?this.valueComparator(e,n):Boolean(n):this.valueComparator(n,this.trueValue)},isDirty:function(){return this.isActive},rippleState:function(){return this.isDisabled||this.validationState?this.validationState:void 0}},watch:{inputValue:function(t){this.lazyValue=t,this.hasColor=t}},methods:{genLabel:function(){var t=o["a"].options.methods.genLabel.call(this);return t?(t.data.on={click:h},t):t},genInput:function(t,e){return this.$createElement("input",{attrs:Object.assign({"aria-checked":this.isActive.toString(),disabled:this.isDisabled,id:this.computedId,role:t,type:t},e),domProps:{value:this.value,checked:this.isActive},on:{blur:this.onBlur,change:this.onChange,focus:this.onFocus,keydown:this.onKeydown,click:h},ref:"input"})},onBlur:function(){this.isFocused=!1},onClick:function(t){this.onChange(),this.$emit("click",t)},onChange:function(){var t=this;if(this.isInteractive){var e=this.value,n=this.internalValue;if(this.isMultiple){Array.isArray(n)||(n=[]);var i=n.length;n=n.filter((function(n){return!t.valueComparator(n,e)})),n.length===i&&n.push(e)}else n=void 0!==this.trueValue&&void 0!==this.falseValue?this.valueComparator(n,this.trueValue)?this.falseValue:this.trueValue:e?this.valueComparator(n,e)?null:e:!n;this.validate(!0,n),this.internalValue=n,this.hasColor=n}},onFocus:function(){this.isFocused=!0},onKeydown:function(t){}}}),p=["title"];e["a"]=f.extend({name:"v-checkbox",props:{indeterminate:Boolean,indeterminateIcon:{type:String,default:"$checkboxIndeterminate"},offIcon:{type:String,default:"$checkboxOff"},onIcon:{type:String,default:"$checkboxOn"}},data:function(){return{inputIndeterminate:this.indeterminate}},computed:{classes:function(){return Object(a["a"])(Object(a["a"])({},o["a"].options.computed.classes.call(this)),{},{"v-input--selection-controls":!0,"v-input--checkbox":!0,"v-input--indeterminate":this.inputIndeterminate})},computedIcon:function(){return this.inputIndeterminate?this.indeterminateIcon:this.isActive?this.onIcon:this.offIcon},validationState:function(){if(!this.isDisabled||this.inputIndeterminate)return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":null!==this.hasColor?this.computedColor:void 0}},watch:{indeterminate:function(t){var e=this;this.$nextTick((function(){return e.inputIndeterminate=t}))},inputIndeterminate:function(t){this.$emit("update:indeterminate",t)},isActive:function(){this.indeterminate&&(this.inputIndeterminate=!1)}},methods:{genCheckbox:function(){var t=this.attrs$,e=(t.title,Object(i["a"])(t,p));return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.$createElement(r["a"],this.setTextColor(this.validationState,{props:{dense:this.dense,dark:this.dark,light:this.light}}),this.computedIcon),this.genInput("checkbox",Object(a["a"])(Object(a["a"])({},e),{},{"aria-checked":this.inputIndeterminate?"mixed":this.isActive.toString()})),this.genRipple(this.setTextColor(this.rippleState))])},genDefaultSlot:function(){return[this.genCheckbox(),this.genLabel()]}}})},b848:function(t,e,n){"use strict";var i=n("2909"),a=n("58df");function r(t){for(var e=[],n=0;n<t.length;n++){var a=t[n];a.isActive&&a.isDependent?e.push(a):e.push.apply(e,Object(i["a"])(r(a.$children)))}return e}e["a"]=Object(a["a"])().extend({name:"dependent",data:function(){return{closeDependents:!0,isActive:!1,isDependent:!0}},watch:{isActive:function(t){if(!t)for(var e=this.getOpenDependents(),n=0;n<e.length;n++)e[n].isActive=!1}},methods:{getOpenDependents:function(){return this.closeDependents?r(this.$children):[]},getOpenDependentElements:function(){for(var t=[],e=this.getOpenDependents(),n=0;n<e.length;n++)t.push.apply(t,Object(i["a"])(e[n].getClickableDependentElements()));return t},getClickableDependentElements:function(){var t=[this.$el];return this.$refs.content&&t.push(this.$refs.content),this.overlay&&t.push(this.overlay.$el),t.push.apply(t,Object(i["a"])(this.getOpenDependentElements())),t}}})},dc22:function(t,e,n){"use strict";function i(t,e){var n=e.value,i=e.options||{passive:!0};window.addEventListener("resize",n,i),t._onResize={callback:n,options:i},e.modifiers&&e.modifiers.quiet||n()}function a(t){if(t._onResize){var e=t._onResize,n=e.callback,i=e.options;window.removeEventListener("resize",n,i),delete t._onResize}}var r={inserted:i,unbind:a};e["a"]=r},dd89:function(t,e,n){"use strict";function i(t){if("function"!==typeof t.getRootNode){while(t.parentNode)t=t.parentNode;return t!==document?null:document}var e=t.getRootNode();return e!==document&&e.getRootNode({composed:!0})!==document?null:e}n.d(e,"a",(function(){return i}))},e71f:function(t,e,n){"use strict";n("e89a")},ec29:function(t,e,n){}}]);
//# sourceMappingURL=chunk-0ec6267a.4ef60cf2.js.map