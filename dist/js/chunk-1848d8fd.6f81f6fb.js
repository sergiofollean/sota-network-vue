(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1848d8fd"],{"253a":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-row",[a("v-col",{attrs:{cols:"12"}},[a("base-card",[a("v-card-text",[a("div",{staticClass:"ul-donation-item flex items-center justify-between py-lg flex-wrap"},[a("div",{staticClass:"flex-grow-1 py-4"},["no-license"===t.userData.license?[a("div",{staticClass:"card-title m-0 text-xl"},[t._v(" "+t._s(t.$t("dashboard.noSubscriptions"))+" ")]),a("p",{staticClass:"text-muted mb-0"},[t._v(" "+t._s(t.$t("dashboard.checkSubscriptions"))+" ")])]:t._e(),"pro"===t.userData.license?[a("div",{staticClass:"card-title m-0 text-xl"},[t._v(" Ліцензія - PRO ")]),a("p",{staticClass:"text-muted mb-0"},[t._v(" Залишилося днів - 14 ")])]:t._e()],2),a("v-btn",{attrs:{text:"",color:"primary"}},[t._v(" "+t._s(t.$t("dashboard.manageSubscriptions"))+" ")])],1)])],1)],1)],1),a("v-row",[a("v-col",{attrs:{cols:"12",md:"6",lg:"4",sm:"6"}},[t._v(' <<<<<<< Updated upstream :sub-heading-text="$t(\'dashboard.activeBots\')" heading-text="3" ======= sub-heading-text="Активні боти" :heading-text="activeBots" >>>>>>> Stashed changes /> ')]),a("v-col",{attrs:{cols:"12",md:"6",lg:"4",sm:"6"}},[t._v(' <<<<<<< Updated upstream :sub-heading-text="$t(\'dashboard.totalBalance\')" heading-text="2300 $" ======= sub-heading-text="Сумарний баланс" :heading-text="totalBallance+\' $\'" >>>>>>> Stashed changes /> ')]),a("v-col",{attrs:{cols:"12",md:"6",lg:"4",sm:"6"}},[a("analytic-one-card",{attrs:{"main-icon-name":"mdi-alarm","main-icon-background-color-class":"bg-purple-200","main-icon-text-color":"text-info","sub-heading-text":t.$t("dashboard.unrealizedProfit"),"heading-text":"+ 79,23 $"}})],1)],1),a("v-row",[a("v-col",{attrs:{cols:"12",md:"6",lg:"4",sm:"6"}},[t._v(" "+t._s(t.$t("dashboard.fearAndGreed"))+" "),a("img",{attrs:{src:"https://alternative.me/crypto/fear-and-greed-index.png",alt:"Latest Crypto Fear & Greed Index"}})])],1)],1)},r=[],o=a("5530"),c=a("1da1"),s=(a("96cf"),a("0d03"),a("d3b7"),a("25f0"),a("4160"),a("159b"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("base-card",{staticClass:"relative"},[t.floatingButtonBackgroundColor?a("v-btn",{attrs:{absolute:"",fab:"",right:"",top:"","x-small":"",color:t.floatingButtonBackgroundColor}},[a("v-icon",{class:t.floatingButtonIconTextColor},[t._v(" "+t._s(t.floatingButtonIconName)+" ")])],1):t._e(),a("v-card-text",[a("div",{staticClass:"flex flex-col justify-center items-center"},[a("div",{staticClass:"rounded-full h-10 w-10 flex items-center justify-center mb-4",class:t.mainIconBackgroundColorClass},[a("v-icon",{class:t.mainIconTextColor},[t._v(" "+t._s(t.mainIconName)+" ")])],1),a("h3",{staticClass:"font-bold m-0"},[t._v(" "+t._s(t.headingText)+" ")]),a("h6",{staticClass:"text-xs font-normal"},[t._v(t._s(t.subHeadingText))]),""!=t.bottomButtonText?a("v-btn",{staticClass:"text-xs   hover:text-white  font-bold py-2 px-4  inline-flex items-center",class:[t.mainIconTextColor,t.mainIconBackgroundColorClass,t.bottomButtonHoverClass],attrs:{depressed:"",rounded:""}},[a("v-icon",{staticClass:" text-xs mr-1 "},[t._v(" "+t._s(t.bottomButtonIcon)+" ")]),a("span",{},[t._v(t._s(t.bottomButtonText))])],1):t._e()],1)])],1)],1)}),i=[],l={name:"TestCard",props:{floatingButtonIconTextColor:{type:String,default:"text-white"},floatingButtonBackgroundColor:{type:String,default:""},floatingButtonIconName:{type:String,default:"mdi-plus"},mainIconTextColor:{type:String,default:"text-primary"},mainIconBackgroundColorClass:{type:String,default:"bg-indigo-200"},mainIconName:{type:String,default:"mdi-account-multiple-outline"},headingText:{type:String,default:"30.2k"},subHeadingText:{type:String,default:"Total Followers"},bottomButtonText:{type:String,default:""},bottomButtonIcon:{type:String,default:"mdi-arrow-down-drop-circle-outline"},bottomButtonHoverClass:{type:String,default:"hover:bg-primary"}}},u=l,d=a("2877"),f=a("6544"),b=a.n(f),m=a("8336"),p=a("99d9"),g=a("132d"),v=Object(d["a"])(u,s,i,!1,null,null,null),x=v.exports;b()(v,{VBtn:m["a"],VCardText:p["b"],VIcon:g["a"]});var h=a("2f62"),y=a("59ca"),_=a.n(y),C=(a("ea7b"),a("e71f"),a("5cd2")),S=a.n(C),w=S()(),B=_.a.firestore(),j=(_.a.database(),{name:"Dashboard",components:{"analytic-one-card":x},data:function(){return{activeBots:"0",totalBallance:"0",apiKey:null,apiSecret:null}},mounted:function(){var t=this;_.a.auth().onAuthStateChanged(function(){var e=Object(c["a"])(regeneratorRuntime.mark((function e(a){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=B.collection("users").doc(a.uid).collection("Bots"),e.next=3,n.get();case 3:if(!e.sent){e.next=7;break}return e.next=6,n.get();case 6:t.activeBots=e.sent.size.toString();case 7:return r=B.collection("users").doc(a.uid).collection("PriceDrivers"),e.next=10,r.where("Status","==","true");case 10:return r=e.sent,e.next=13,r.where("AccountPriv","!=","").limit(1).get();case 13:return r=e.sent,e.next=16,r.size;case 16:if(e.t0=e.sent,!(e.t0>0)){e.next=20;break}return e.next=20,r.forEach((function(e){t.apiKey=e.data()["AccountPub"],t.apiSecret=e.data()["AccountPriv"]}));case 20:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},computed:Object(o["a"])({},Object(h["c"])(["userData"])),methods:{getBinanceData:function(){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function e(){var a,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.t0=S.a,e.t1=t.apiKey,e.t2=t.apiSecret,e.next=5,w.time();case 5:return e.t3=e.sent,e.t4={apiKey:e.t1,apiSecret:e.t2,getTime:e.t3},a=(0,e.t0)(e.t4),e.next=10,a.lendingAccount();case 10:return n=e.sent,e.t5=console,e.next=14,n;case 14:e.t6=e.sent,e.t5.log.call(e.t5,e.t6);case 16:case"end":return e.stop()}}),e)})))()}},watch:{apiSecret:function(){var t=Object(c["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.getBinanceData();case 2:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}()}}),O=j,k=a("62ad"),T=a("0fd9"),I=Object(d["a"])(O,n,r,!1,null,null,null);e["default"]=I.exports;b()(I,{VBtn:m["a"],VCardText:p["b"],VCol:k["a"],VRow:T["a"]})},"62ad":function(t,e,a){"use strict";var n=a("ade3"),r=a("5530"),o=(a("13d5"),a("d3b7"),a("a9e3"),a("b64b"),a("ac1f"),a("5319"),a("4ec9"),a("3ca3"),a("ddb0"),a("caad"),a("4160"),a("159b"),a("45fc"),a("2ca0"),a("4b85"),a("2b0e")),c=a("d9f7"),s=a("80d2"),i=["sm","md","lg","xl"],l=function(){return i.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{})}(),u=function(){return i.reduce((function(t,e){return t["offset"+Object(s["G"])(e)]={type:[String,Number],default:null},t}),{})}(),d=function(){return i.reduce((function(t,e){return t["order"+Object(s["G"])(e)]={type:[String,Number],default:null},t}),{})}(),f={col:Object.keys(l),offset:Object.keys(u),order:Object.keys(d)};function b(t,e,a){var n=t;if(null!=a&&!1!==a){if(e){var r=e.replace(t,"");n+="-".concat(r)}return"col"!==t||""!==a&&!0!==a?(n+="-".concat(a),n.toLowerCase()):n.toLowerCase()}}var m=new Map;e["a"]=o["default"].extend({name:"v-col",functional:!0,props:Object(r["a"])(Object(r["a"])(Object(r["a"])(Object(r["a"])({cols:{type:[Boolean,String,Number],default:!1}},l),{},{offset:{type:[String,Number],default:null}},u),{},{order:{type:[String,Number],default:null}},d),{},{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var a=e.props,r=e.data,o=e.children,s=(e.parent,"");for(var i in a)s+=String(a[i]);var l=m.get(s);return l||function(){var t,e;for(e in l=[],f)f[e].forEach((function(t){var n=a[t],r=b(e,t,n);r&&l.push(r)}));var r=l.some((function(t){return t.startsWith("col-")}));l.push((t={col:!r||!a.cols},Object(n["a"])(t,"col-".concat(a.cols),a.cols),Object(n["a"])(t,"offset-".concat(a.offset),a.offset),Object(n["a"])(t,"order-".concat(a.order),a.order),Object(n["a"])(t,"align-self-".concat(a.alignSelf),a.alignSelf),t)),m.set(s,l)}(),t(a.tag,Object(c["a"])(r,{class:l}),o)}})},"99d9":function(t,e,a){"use strict";a.d(e,"a",(function(){return o})),a.d(e,"b",(function(){return s})),a.d(e,"c",(function(){return i}));var n=a("b0af"),r=a("80d2"),o=Object(r["j"])("v-card__actions"),c=Object(r["j"])("v-card__subtitle"),s=Object(r["j"])("v-card__text"),i=Object(r["j"])("v-card__title");n["a"]},e71f:function(t,e,a){"use strict";a("e89a")}}]);
//# sourceMappingURL=chunk-1848d8fd.6f81f6fb.js.map