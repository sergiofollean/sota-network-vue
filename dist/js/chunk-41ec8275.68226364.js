(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-41ec8275"],{"4ebd":function(t,e,c){"use strict";c.r(e);var n=function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("v-row",[c("v-col",{attrs:{sm:"12"}},[c("base-card",[c("v-card-title",[t._v(" Додати акаунт ")]),c("v-card-text",[c("v-form",{ref:"AccountForm",attrs:{"lazy-validation":""}},[c("v-text-field",{attrs:{label:"Назва",rules:[function(t){return!!t||"Вкажіть назву"}],required:"",outlined:""},model:{value:t.AccountName,callback:function(e){t.AccountName=e},expression:"AccountName"}}),c("v-row",[c("v-col",{attrs:{md:"6"}},[c("v-select",{attrs:{items:t.AccountPlatforms,placeholder:"Оберіть біржу",required:"",outlined:""},model:{value:t.AccountPlatform,callback:function(e){t.AccountPlatform=e},expression:"AccountPlatform"}})],1),c("v-col",{attrs:{md:"6"}},[c("v-select",{attrs:{placeholder:"Тип акаунту",items:t.AccountTypes,"return-object":"",required:"",outlined:""},model:{value:t.AccountType,callback:function(e){t.AccountType=e},expression:"AccountType"}})],1)],1),c("v-text-field",{attrs:{label:"Public Key",rules:[function(t){return!!t||"Це поле не може бути порожнє!"}],required:"",outlined:""},model:{value:t.AccountPub,callback:function(e){t.AccountPub=e},expression:"AccountPub"}}),c("v-text-field",{attrs:{label:"Private Key",rules:[function(t){return!!t||"Це поле не може бути порожнє!"}],required:"",outlined:""},model:{value:t.AccountPriv,callback:function(e){t.AccountPriv=e},expression:"AccountPriv"}}),c("v-btn",{staticClass:"my-4",attrs:{color:"success"},on:{click:t.addAccount}},[t._v("Відправити")])],1)],1)],1)],1)],1)},r=[],u=c("1da1"),o=(c("96cf"),c("a18c"),c("59ca")),a=c.n(o),i=(c("ea7b"),c("e71f"),c("3523"),{data:function(){return{AccountPlatforms:["Binance","Bybit"],AccountTypes:[{text:"Спот",value:"Spot Trading"},{text:"Фьючерси",value:"Leverage Trading"}],AccountName:"",AccountPlatform:"",AccountType:{text:"Спот",value:"spot"},AccountPriv:"",AccountPub:""}},methods:{addAccount:function(){var t=this;if(!this.$refs.AccountForm.validate())return!1;var e=a.a.firestore(),c=a.a.database();a.a.auth().onAuthStateChanged(function(){var n=Object(u["a"])(regeneratorRuntime.mark((function n(r){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,e.collection("users").doc(r.uid).collection("PriceDrivers").add({AccountName:t.AccountName,AccountPlatform:t.AccountPlatform,AccountType:t.AccountType.value,AccountPub:t.AccountPub,AccountPriv:t.AccountPriv}).then(function(){var e=Object(u["a"])(regeneratorRuntime.mark((function e(n){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,c.ref("tasks").push().set({user:r.uid,PriceDriver:n.id,AccountType:t.AccountType.value,AccountPub:t.AccountPub,AccountPriv:t.AccountPriv});case 2:t.$router.push("/settings");case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())["catch"]((function(t){}));case 2:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}())}}}),l=i,s=c("2877"),d=c("6544"),v=c.n(d),f=c("8336"),A=c("99d9"),m=c("62ad"),p=c("4bd4"),b=c("0fd9"),P=c("b974"),h=c("8654"),x=Object(s["a"])(l,n,r,!1,null,null,null);e["default"]=x.exports;v()(x,{VBtn:f["a"],VCardText:A["a"],VCardTitle:A["b"],VCol:m["a"],VForm:p["a"],VRow:b["a"],VSelect:P["a"],VTextField:h["a"]})},e71f:function(t,e,c){"use strict";c("e89a")}}]);
//# sourceMappingURL=chunk-41ec8275.68226364.js.map