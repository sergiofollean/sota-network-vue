(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0b5e68c8"],{"4bd4":function(t,e,i){"use strict";var n=i("5530"),a=(i("caad"),i("2532"),i("07ac"),i("4de4"),i("4160"),i("159b"),i("4795"),i("7db0"),i("58df")),r=i("7e2b"),u=i("3206");e["a"]=Object(a["a"])(r["a"],Object(u["b"])("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(t){var e=this,i=function(t){return t.$watch("hasError",(function(i){e.$set(e.errorBag,t._uid,i)}),{immediate:!0})},n={_uid:t._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?n.shouldValidate=t.$watch("shouldValidate",(function(a){a&&(e.errorBag.hasOwnProperty(t._uid)||(n.valid=i(t)))})):n.valid=i(t),n},validate:function(){return 0===this.inputs.filter((function(t){return!t.validate(!0)})).length},reset:function(){this.inputs.forEach((function(t){return t.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(t){return t.resetValidation()})),this.resetErrorBag()},register:function(t){this.inputs.push(t),this.watchers.push(this.watchInput(t))},unregister:function(t){var e=this.inputs.find((function(e){return e._uid===t._uid}));if(e){var i=this.watchers.find((function(t){return t._uid===e._uid}));i&&(i.valid(),i.shouldValidate()),this.watchers=this.watchers.filter((function(t){return t._uid!==e._uid})),this.inputs=this.inputs.filter((function(t){return t._uid!==e._uid})),this.$delete(this.errorBag,e._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:Object(n["a"])({novalidate:!0},this.attrs$),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots["default"])}})},"4ebd":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-row",[i("v-col",{attrs:{sm:"12"}},[i("base-card",[i("v-card-title",[t._v(" Додати акаунт ")]),i("v-card-text",[i("v-form",{ref:"AccountForm",attrs:{"lazy-validation":""}},[i("v-text-field",{attrs:{label:"Назва",rules:[function(t){return!!t||"Вкажіть назву"}],required:"",outlined:""},model:{value:t.AccountName,callback:function(e){t.AccountName=e},expression:"AccountName"}}),i("v-row",[i("v-col",{attrs:{md:"6"}},[i("v-select",{attrs:{items:t.AccountPlatforms,placeholder:"Оберіть біржу",required:"",outlined:""},model:{value:t.AccountPlatform,callback:function(e){t.AccountPlatform=e},expression:"AccountPlatform"}})],1),i("v-col",{attrs:{md:"6"}},[i("v-select",{attrs:{placeholder:"Тип акаунту",items:t.AccountTypes,"return-object":"",required:"",outlined:""},model:{value:t.AccountType,callback:function(e){t.AccountType=e},expression:"AccountType"}})],1)],1),i("v-checkbox",{attrs:{label:"Simulated"},model:{value:t.Simulated,callback:function(e){t.Simulated=e},expression:"Simulated"}}),!1===t.Simulated?[i("v-text-field",{attrs:{label:"Public Key",rules:[function(t){return!!t||"Це поле не може бути порожнє!"}],required:"",outlined:""},model:{value:t.AccountPub,callback:function(e){t.AccountPub=e},expression:"AccountPub"}}),i("v-text-field",{attrs:{label:"Private Key",rules:[function(t){return!!t||"Це поле не може бути порожнє!"}],required:"",outlined:""},model:{value:t.AccountPriv,callback:function(e){t.AccountPriv=e},expression:"AccountPriv"}})]:t._e(),i("v-btn",{staticClass:"my-4",attrs:{color:"success"},on:{click:t.addAccount}},[t._v("Відправити")])],2)],1)],1)],1)],1)},a=[],r=i("1da1"),u=(i("96cf"),i("a18c"),i("59ca")),c=i.n(u),o=(i("ea7b"),i("e71f"),i("66ce"),{data:function(){return{AccountPlatforms:["Binance","Bybit"],AccountTypes:[{text:"Спот",value:"Spot Trading"},{text:"Фьючерси",value:"Leverage Trading"}],AccountName:"",AccountPlatform:"",AccountType:{text:"Спот",value:"spot"},AccountPriv:"",AccountPub:"",Simulated:!1}},methods:{addAccount:function(){var t=this;if(!this.$refs.AccountForm.validate())return!1;var e=c.a.firestore(),i=c.a.database();c.a.auth().onAuthStateChanged(function(){var n=Object(r["a"])(regeneratorRuntime.mark((function n(a){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,e.collection("users").doc(a.uid).collection("PriceDrivers").add({AccountName:t.AccountName,AccountPlatform:t.AccountPlatform,AccountType:t.AccountType.value,AccountPub:t.AccountPub,AccountPriv:t.AccountPriv,Simulated:t.Simulated}).then(function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(n){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,i.ref("tasks").push().set({task:"add_account",user:a.uid,data:{PriceDriver:n.id,AccountType:t.AccountType.value,AccountPub:t.AccountPub,AccountPriv:t.AccountPriv,Simulated:t.Simulated}});case 2:t.$router.push("/settings");case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())["catch"]((function(t){}));case 2:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}())}}}),s=o,l=i("2877"),d=i("6544"),h=i.n(d),f=i("8336"),p=i("99d9"),v=i("ac7c"),m=i("62ad"),b=i("4bd4"),A=i("0fd9"),g=i("b974"),y=i("8654"),V=Object(l["a"])(s,n,a,!1,null,null,null);e["default"]=V.exports;h()(V,{VBtn:f["a"],VCardText:p["b"],VCardTitle:p["c"],VCheckbox:v["a"],VCol:m["a"],VForm:b["a"],VRow:A["a"],VSelect:g["a"],VTextField:y["a"]})},5311:function(t,e,i){"use strict";var n=i("5607"),a=i("2b0e");e["a"]=a["default"].extend({name:"rippleable",directives:{ripple:n["a"]},props:{ripple:{type:[Boolean,Object],default:!0}},methods:{genRipple:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this.ripple?(t.staticClass="v-input--selection-controls__ripple",t.directives=t.directives||[],t.directives.push({name:"ripple",value:{center:!0}}),this.$createElement("div",t)):null}}})},"66ce":function(t,e,i){"use strict";i("3523")},"6ca7":function(t,e,i){},ac7c:function(t,e,i){"use strict";var n=i("15fd"),a=i("5530"),r=(i("0d03"),i("d3b7"),i("25f0"),i("6ca7"),i("ec29"),i("9d26")),u=i("c37a"),c=i("fe09"),o=["title"];e["a"]=c["a"].extend({name:"v-checkbox",props:{indeterminate:Boolean,indeterminateIcon:{type:String,default:"$checkboxIndeterminate"},offIcon:{type:String,default:"$checkboxOff"},onIcon:{type:String,default:"$checkboxOn"}},data:function(){return{inputIndeterminate:this.indeterminate}},computed:{classes:function(){return Object(a["a"])(Object(a["a"])({},u["a"].options.computed.classes.call(this)),{},{"v-input--selection-controls":!0,"v-input--checkbox":!0,"v-input--indeterminate":this.inputIndeterminate})},computedIcon:function(){return this.inputIndeterminate?this.indeterminateIcon:this.isActive?this.onIcon:this.offIcon},validationState:function(){if(!this.isDisabled||this.inputIndeterminate)return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":null!==this.hasColor?this.computedColor:void 0}},watch:{indeterminate:function(t){var e=this;this.$nextTick((function(){return e.inputIndeterminate=t}))},inputIndeterminate:function(t){this.$emit("update:indeterminate",t)},isActive:function(){this.indeterminate&&(this.inputIndeterminate=!1)}},methods:{genCheckbox:function(){var t=this.attrs$,e=(t.title,Object(n["a"])(t,o));return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.$createElement(r["a"],this.setTextColor(this.validationState,{props:{dense:this.dense,dark:this.dark,light:this.light}}),this.computedIcon),this.genInput("checkbox",Object(a["a"])(Object(a["a"])({},e),{},{"aria-checked":this.inputIndeterminate?"mixed":this.isActive.toString()})),this.genRipple(this.setTextColor(this.rippleState))])},genDefaultSlot:function(){return[this.genCheckbox(),this.genLabel()]}}})},e71f:function(t,e,i){"use strict";i("e89a")},ec29:function(t,e,i){},fe09:function(t,e,i){"use strict";i.d(e,"b",(function(){return c}));i("277d"),i("45fc"),i("0d03"),i("d3b7"),i("25f0"),i("4de4");var n=i("c37a"),a=i("5311"),r=i("8547"),u=i("58df");function c(t){t.preventDefault()}e["a"]=Object(u["a"])(n["a"],a["a"],r["a"]).extend({name:"selectable",model:{prop:"inputValue",event:"change"},props:{id:String,inputValue:null,falseValue:null,trueValue:null,multiple:{type:Boolean,default:null},label:String},data:function(){return{hasColor:this.inputValue,lazyValue:this.inputValue}},computed:{computedColor:function(){if(this.isActive)return this.color?this.color:this.isDark&&!this.appIsDark?"white":"primary"},isMultiple:function(){return!0===this.multiple||null===this.multiple&&Array.isArray(this.internalValue)},isActive:function(){var t=this,e=this.value,i=this.internalValue;return this.isMultiple?!!Array.isArray(i)&&i.some((function(i){return t.valueComparator(i,e)})):void 0===this.trueValue||void 0===this.falseValue?e?this.valueComparator(e,i):Boolean(i):this.valueComparator(i,this.trueValue)},isDirty:function(){return this.isActive},rippleState:function(){return this.isDisabled||this.validationState?this.validationState:void 0}},watch:{inputValue:function(t){this.lazyValue=t,this.hasColor=t}},methods:{genLabel:function(){var t=n["a"].options.methods.genLabel.call(this);return t?(t.data.on={click:c},t):t},genInput:function(t,e){return this.$createElement("input",{attrs:Object.assign({"aria-checked":this.isActive.toString(),disabled:this.isDisabled,id:this.computedId,role:t,type:t},e),domProps:{value:this.value,checked:this.isActive},on:{blur:this.onBlur,change:this.onChange,focus:this.onFocus,keydown:this.onKeydown,click:c},ref:"input"})},onBlur:function(){this.isFocused=!1},onClick:function(t){this.onChange(),this.$emit("click",t)},onChange:function(){var t=this;if(this.isInteractive){var e=this.value,i=this.internalValue;if(this.isMultiple){Array.isArray(i)||(i=[]);var n=i.length;i=i.filter((function(i){return!t.valueComparator(i,e)})),i.length===n&&i.push(e)}else i=void 0!==this.trueValue&&void 0!==this.falseValue?this.valueComparator(i,this.trueValue)?this.falseValue:this.trueValue:e?this.valueComparator(i,e)?null:e:!i;this.validate(!0,i),this.internalValue=i,this.hasColor=i}},onFocus:function(){this.isFocused=!0},onKeydown:function(t){}}})}}]);
//# sourceMappingURL=chunk-0b5e68c8.e265951e.js.map