(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-30867124"],{"13b3":function(t,e,i){},"1bfb":function(t,e,i){},"1f4f":function(t,e,i){"use strict";var n=i("5530"),s=(i("a9e3"),i("8b37"),i("80d2")),a=i("7560"),r=i("58df");e["a"]=Object(r["a"])(a["a"]).extend({name:"v-simple-table",props:{dense:Boolean,fixedHeader:Boolean,height:[Number,String]},computed:{classes:function(){return Object(n["a"])({"v-data-table--dense":this.dense,"v-data-table--fixed-height":!!this.height&&!this.fixedHeader,"v-data-table--fixed-header":this.fixedHeader,"v-data-table--has-top":!!this.$slots.top,"v-data-table--has-bottom":!!this.$slots.bottom},this.themeClasses)}},methods:{genWrapper:function(){return this.$slots.wrapper||this.$createElement("div",{staticClass:"v-data-table__wrapper",style:{height:Object(s["h"])(this.height)}},[this.$createElement("table",this.$slots["default"])])}},render:function(t){return t("div",{staticClass:"v-data-table",class:this.classes},[this.$slots.top,this.genWrapper(),this.$slots.bottom])}})},"253a":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("v-row",[i("v-col",{attrs:{cols:"12"}},[i("v-breadcrumbs",{attrs:{items:t.breadcrumbs}})],1),i("v-col",{attrs:{cols:"12"}},[i("base-card",[i("v-card-text",[i("div",{staticClass:"ul-donation-item flex items-center justify-between py-lg flex-wrap"},[i("div",{staticClass:"flex-grow-1 py-4"},["no-license"===t.userData.license?[i("div",{staticClass:"card-title m-0 text-xl"},[t._v(" "+t._s(t.$t("dashboard.noSubscriptions"))+" ")]),i("p",{staticClass:"text-muted mb-0"},[t._v(" "+t._s(t.$t("dashboard.checkSubscriptions"))+" ")])]:t._e(),"pro"===t.userData.license?[i("div",{staticClass:"card-title m-0 text-xl"},[t._v(" Ліцензія - PRO ")]),i("p",{staticClass:"text-muted mb-0"},[t._v(" Залишилося днів - 14 ")])]:t._e()],2),i("v-btn",{attrs:{text:"",color:"primary"}},[t._v(" "+t._s(t.$t("dashboard.manageSubscriptions"))+" ")])],1)])],1)],1)],1),i("v-row",[i("v-col",{attrs:{cols:"12",md:"6",lg:"4",sm:"6"}},[i("analytic-one-card",{attrs:{"main-icon-name":"mdi-robot","main-icon-background-color-class":"bg-indigo-200","main-icon-text-color":"text-primary","sub-heading-text":t.$t("dashboard.activeBots"),"heading-text":"3","heading-text":t.activeBots}})],1),i("v-col",{attrs:{cols:"12",md:"6",lg:"4",sm:"6"}},[i("analytic-one-card",{attrs:{"main-icon-name":"mdi-cash-multiple","main-icon-background-color-class":"bg-green-200","main-icon-text-color":"text-success","sub-heading-text":t.$t("dashboard.totalBalance"),"heading-text":t.totalBallance+" $"}})],1),i("v-col",{attrs:{cols:"12",md:"6",lg:"4",sm:"6"}},[i("analytic-one-card",{attrs:{"main-icon-name":"mdi-alarm","main-icon-background-color-class":"bg-purple-200","main-icon-text-color":"text-info","sub-heading-text":t.$t("dashboard.unrealizedProfit"),"heading-text":"+ 79,23 $"}})],1),i("v-col",{attrs:{cols:"12",lg:"4",md:"6",sm:"12"}},[i("base-card",[i("v-card-text",[i("apexchart",{staticClass:"my-custom-chart",attrs:{label:"Coin market cap capitalization",type:"bar",height:"340",options:t.options,series:t.series}})],1)],1)],1),i("v-col",{attrs:{cols:"12",lg:"4",md:"6",sm:"12"}},[i("base-card",[i("v-card-text",[i("apexchart",{attrs:{id:"ttreemap",type:"treemap",height:"350",options:t.treemapOptions,series:t.treemapSeries}})],1)],1)],1)],1),i("v-row",[i("v-col",{attrs:{cols:"12",md:"6",lg:"4",sm:"6"}},[i("base-card",[i("v-card-title",[t._v(t._s(t.$t("dashboard.fearAndGreed")))]),i("img",{attrs:{src:"https://alternative.me/crypto/fear-and-greed-index.png",alt:"Latest Crypto Fear & Greed Index"}})],1)],1),i("v-col",{attrs:{lg:"8",md:"6",sm:"6"}},[i("base-card",[i("v-card-text",[i("v-tabs",{model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},t._l(t.items,(function(e){return i("v-tab",{key:e.tab},[t._v(" "+t._s(e.tab)+" ")])})),1),i("v-tabs-items",{model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},t._l(t.items,(function(e){return i("v-tab-item",{key:e.tab},[i("v-card",{attrs:{flat:""}},[i("v-card-text",[i("v-simple-table",[i("thead",[i("tr",[i("th",{staticClass:"text-left"},[t._v(" Coin ")]),i("th",{staticClass:"text-left"},[t._v(" Last Price ")]),i("th",{staticClass:"text-left"},[t._v(" Change ")])])]),i("tbody",t._l(e.content,(function(e,n){return i("tr",{key:n},[i("td",[t._v(t._s(e.coin))]),i("td",[i("p",{class:parseFloat(e.percent)<0?"text-red-600":"text-green-600"},[t._v(" "+t._s(e.lastPrice)+" USDT ")])]),i("td",[i("v-chip",{staticClass:"ml-2",class:parseFloat(e.percent)<0?"bg-red-600 text-gray-200":"bg-green-600 text-gray-200",attrs:{small:"",label:""}},[t._v(" "+t._s(e.percent)+" % ")])],1)])})),0)])],1)],1)],1)})),1)],1)],1)],1)],1)],1)},s=[],a=i("5530"),r=i("1da1"),o=(i("96cf"),i("0d03"),i("b0c0"),i("b680"),i("c975"),i("acd8"),function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("base-card",{staticClass:"relative"},[t.floatingButtonBackgroundColor?i("v-btn",{attrs:{absolute:"",fab:"",right:"",top:"","x-small":"",color:t.floatingButtonBackgroundColor}},[i("v-icon",{class:t.floatingButtonIconTextColor},[t._v(" "+t._s(t.floatingButtonIconName)+" ")])],1):t._e(),i("v-card-text",[i("div",{staticClass:"flex flex-col justify-center items-center"},[i("div",{staticClass:"rounded-full h-10 w-10 flex items-center justify-center mb-4",class:t.mainIconBackgroundColorClass},[i("v-icon",{class:t.mainIconTextColor},[t._v(" "+t._s(t.mainIconName)+" ")])],1),i("h3",{staticClass:"font-bold m-0"},[t._v(" "+t._s(t.headingText)+" ")]),i("h6",{staticClass:"text-xs font-normal"},[t._v(t._s(t.subHeadingText))]),""!=t.bottomButtonText?i("v-btn",{staticClass:"text-xs   hover:text-white  font-bold py-2 px-4  inline-flex items-center",class:[t.mainIconTextColor,t.mainIconBackgroundColorClass,t.bottomButtonHoverClass],attrs:{depressed:"",rounded:""}},[i("v-icon",{staticClass:" text-xs mr-1 "},[t._v(" "+t._s(t.bottomButtonIcon)+" ")]),i("span",{},[t._v(t._s(t.bottomButtonText))])],1):t._e()],1)])],1)],1)}),l=[],c={name:"TestCard",props:{floatingButtonIconTextColor:{type:String,default:"text-white"},floatingButtonBackgroundColor:{type:String,default:""},floatingButtonIconName:{type:String,default:"mdi-plus"},mainIconTextColor:{type:String,default:"text-primary"},mainIconBackgroundColorClass:{type:String,default:"bg-indigo-200"},mainIconName:{type:String,default:"mdi-account-multiple-outline"},headingText:{type:String,default:"30.2k"},subHeadingText:{type:String,default:"Total Followers"},bottomButtonText:{type:String,default:""},bottomButtonIcon:{type:String,default:"mdi-arrow-down-drop-circle-outline"},bottomButtonHoverClass:{type:String,default:"hover:bg-primary"}}},d=c,u=i("2877"),h=i("6544"),v=i.n(h),f=i("8336"),p=i("99d9"),m=i("132d"),b=Object(u["a"])(d,o,l,!1,null,null,null),g=b.exports;v()(b,{VBtn:f["a"],VCardText:p["b"],VIcon:m["a"]});var x=i("2f62"),w=i("8aa5"),y=i.n(w),C=(i("ea7b"),i("e71f"),i("5cd2")),B=i.n(C);var S=i("a8a7"),T=i.n(S),$=B()(),O=y.a.firestore(),_=(y.a.database(),{name:"Dashboard",components:{"analytic-one-card":g},data:function(){return{options:{},series:[],activeBots:"0",totalBallance:"0",apiKey:null,apiSecret:null,treemapOptions:{},treeMapSeriesData:[],treemapSeries:[{data:[]}],polarOptions:{},polarSeries:[],tab:null,items:[{tab:"Спот",content:[]},{tab:"Фьючерси",content:[]}],breadcrumbs:[{text:this.$t("Dashboard"),disabled:!1,to:"/dashboard"}]}},mounted:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var i,n,s,a,r,o,l,c,d,u;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.options={chart:{type:"bar",height:350,tools:{}},plotOptions:{bar:{horizontal:!1,columnWidth:"55%",endingShape:"rounded"}},dataLabels:{enabled:!1},stroke:{show:!0,width:2,colors:["transparent"]},title:{text:"Domination, %",offsetX:15},xaxis:{categories:["Today"]},fill:{opacity:1},y:{formatter:function(t){return t+"%"}}},t.treemapOptions={legend:{show:!1},chart:{height:350,type:"treemap"},title:{text:"Basic Treemap"},dataLabels:{enabled:!0,style:{fontSize:"12px"},formatter:function(t,e){return[t,e.value+"%"]},offsetY:-4},plotOptions:{treemap:{enableShades:!0,shadeIntensity:.5,reverseNegativeShade:!0,colorScale:{ranges:[{from:-100,to:0,color:"#CD363A"},{from:.001,to:100,color:"#52B12C"}]}}}},i=O.collection("coinsStatistics").doc("quotes"),e.next=5,i.get();case 5:if(n=e.sent.data(),s=["BTC","ETH","BNB","SOL","ADA"],a=new Date,a.setDate(a.getDate()-1),n.BTC&&!(n.date<a.getTime())){e.next=25;break}r=new T.a("7c680929-c136-4f73-81b8-a564c675da99"),o={},l=0;case 13:if(!(l<s.length)){e.next=23;break}return e.next=16,r.getQuotes({symbol:s[l]});case 16:return c=e.sent,o[s[l]]=c.data[s[l]],e.next=20,i.set(o);case 20:l++,e.next=13;break;case 23:return e.next=25,i.update({date:(new Date).getTime()});case 25:for(d=0;d<s.length;d++)u=n[s[d]],t.series.push({name:u.name,data:[u.quote.USD.market_cap_dominance]}),t.treemapSeries[0].data.push({x:u.name,y:u.quote.USD.percent_change_24h.toFixed(2)});return e.next=28,t.getBinanceData();case 28:case"end":return e.stop()}}),e)})))()},computed:Object(a["a"])({},Object(x["c"])(["userData"])),methods:{getBinanceData:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var i,n,s,a,r,o,l,c,d;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:i=["BTCUSDT","ETHUSDT","BNBUSDT","DOGEUSDT","XMRUSDT"],n=0,s=i;case 2:if(!(n<s.length)){e.next=23;break}return a=s[n],i.indexOf(a),e.next=7,$.dailyStats({symbol:a});case 7:return r=e.sent,e.t0=t.items[0].content,e.t1=a,e.t2=parseFloat,e.next=13,r.lastPrice;case 13:return e.t3=e.sent,e.t4=(0,e.t2)(e.t3),e.next=17,r.priceChangePercent;case 17:e.t5=e.sent,e.t6={coin:e.t1,lastPrice:e.t4,percent:e.t5},e.t0.push.call(e.t0,e.t6);case 20:n++,e.next=2;break;case 23:o=0,l=i;case 24:if(!(o<l.length)){e.next=45;break}return c=l[o],i.indexOf(c),e.next=29,$.futuresDailyStats({symbol:c});case 29:return d=e.sent,e.t7=t.items[1].content,e.t8=c,e.t9=parseFloat,e.next=35,d.lastPrice;case 35:return e.t10=e.sent,e.t11=(0,e.t9)(e.t10),e.next=39,d.priceChangePercent;case 39:e.t12=e.sent,e.t13={coin:e.t8,lastPrice:e.t11,percent:e.t12},e.t7.push.call(e.t7,e.t13);case 42:o++,e.next=24;break;case 45:case"end":return e.stop()}}),e)})))()}},watch:{apiSecret:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.getBinanceData();case 2:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}()}}),I=_,k=i("2bc5"),j=i("b0af"),D=i("cc20"),A=i("62ad"),R=i("0fd9"),V=i("1f4f"),E=(i("ac1f"),i("5319"),i("4e82")),P=i("1c87"),H=i("7560"),N=i("80d2"),z=i("58df"),G=Object(z["a"])(P["a"],Object(E["a"])("tabsBar"),H["a"]),L=G.extend().extend().extend({name:"v-tab",props:{ripple:{type:[Boolean,Object],default:!0}},data:function(){return{proxyClass:"v-tab--active"}},computed:{classes:function(){return Object(a["a"])(Object(a["a"])({"v-tab":!0},P["a"].options.computed.classes.call(this)),{},{"v-tab--disabled":this.disabled},this.groupClasses)},value:function(){var t=this.to||this.href||"";if(this.$router&&this.to===Object(this.to)){var e=this.$router.resolve(this.to,this.$route,this.append);t=e.href}return t.replace("#","")}},methods:{click:function(t){this.disabled?t.preventDefault():(this.href&&this.href.indexOf("#")>-1&&t.preventDefault(),t.detail&&this.$el.blur(),this.$emit("click",t),this.to||this.toggle())},toggle:function(){this.isActive||this.$emit("change")}},render:function(t){var e=this,i=this.generateRouteLink(),n=i.tag,s=i.data;return s.attrs=Object(a["a"])(Object(a["a"])({},s.attrs),{},{"aria-selected":String(this.isActive),role:"tab",tabindex:0}),s.on=Object(a["a"])(Object(a["a"])({},s.on),{},{keydown:function(t){t.keyCode===N["y"].enter&&e.click(t),e.$emit("keydown",t)}}),t(n,s,this.$slots["default"])}}),W=i("9d65"),F=i("c3f0"),q=Object(z["a"])(W["a"],Object(E["a"])("windowGroup","v-window-item","v-window")),U=q.extend().extend().extend({name:"v-window-item",directives:{Touch:F["a"]},props:{disabled:Boolean,reverseTransition:{type:[Boolean,String],default:void 0},transition:{type:[Boolean,String],default:void 0},value:{required:!1}},data:function(){return{isActive:!1,inTransition:!1}},computed:{classes:function(){return this.groupClasses},computedTransition:function(){return this.windowGroup.internalReverse?"undefined"!==typeof this.reverseTransition?this.reverseTransition||"":this.windowGroup.computedTransition:"undefined"!==typeof this.transition?this.transition||"":this.windowGroup.computedTransition}},methods:{genDefaultSlot:function(){return this.$slots["default"]},genWindowItem:function(){return this.$createElement("div",{staticClass:"v-window-item",class:this.classes,directives:[{name:"show",value:this.isActive}],on:this.$listeners},this.genDefaultSlot())},onAfterTransition:function(){this.inTransition&&(this.inTransition=!1,this.windowGroup.transitionCount>0&&(this.windowGroup.transitionCount--,0===this.windowGroup.transitionCount&&(this.windowGroup.transitionHeight=void 0)))},onBeforeTransition:function(){this.inTransition||(this.inTransition=!0,0===this.windowGroup.transitionCount&&(this.windowGroup.transitionHeight=Object(N["h"])(this.windowGroup.$el.clientHeight)),this.windowGroup.transitionCount++)},onTransitionCancelled:function(){this.onAfterTransition()},onEnter:function(t){var e=this;this.inTransition&&this.$nextTick((function(){e.computedTransition&&e.inTransition&&(e.windowGroup.transitionHeight=Object(N["h"])(t.clientHeight))}))}},render:function(t){var e=this;return t("transition",{props:{name:this.computedTransition},on:{beforeEnter:this.onBeforeTransition,afterEnter:this.onAfterTransition,enterCancelled:this.onTransitionCancelled,beforeLeave:this.onBeforeTransition,afterLeave:this.onAfterTransition,leaveCancelled:this.onTransitionCancelled,enter:this.onEnter}},this.showLazyContent((function(){return[e.genWindowItem()]})))}}),M=U.extend({name:"v-tab-item",props:{id:String},methods:{genWindowItem:function(){var t=U.options.methods.genWindowItem.call(this);return t.data.domProps=t.data.domProps||{},t.data.domProps.id=this.id||this.value,t}}}),J=(i("a9e3"),i("4795"),i("1bfb"),i("b85c")),X=i("7efd"),K=i("d10f"),Q=Object(z["a"])(X["a"],K["a"],H["a"]).extend({name:"v-tabs-bar",provide:function(){return{tabsBar:this}},computed:{classes:function(){return Object(a["a"])(Object(a["a"])({},X["a"].options.computed.classes.call(this)),{},{"v-tabs-bar":!0,"v-tabs-bar--is-mobile":this.isMobile,"v-tabs-bar--show-arrows":this.showArrows},this.themeClasses)}},watch:{items:"callSlider",internalValue:"callSlider",$route:"onRouteChange"},methods:{callSlider:function(){this.isBooted&&this.$emit("call:slider")},genContent:function(){var t=X["a"].options.methods.genContent.call(this);return t.data=t.data||{},t.data.staticClass+=" v-tabs-bar__content",t},onRouteChange:function(t,e){if(!this.mandatory){var i,n=this.items,s=t.path,a=e.path,r=!1,o=!1,l=Object(J["a"])(n);try{for(l.s();!(i=l.n()).done;){var c=i.value;if(c.to===a?o=!0:c.to===s&&(r=!0),r&&o)break}}catch(d){l.e(d)}finally{l.f()}!r&&o&&(this.internalValue=void 0)}}},render:function(t){var e=X["a"].options.render.call(this,t);return e.data.attrs={role:"tablist"},e}}),Y=(i("99af"),i("7db0"),i("d3b7"),i("c740"),i("26e9"),i("13b3"),i("afdd")),Z=i("9d26"),tt=i("604c"),et=tt["a"].extend({name:"v-window",directives:{Touch:F["a"]},provide:function(){return{windowGroup:this}},props:{activeClass:{type:String,default:"v-window-item--active"},continuous:Boolean,mandatory:{type:Boolean,default:!0},nextIcon:{type:[Boolean,String],default:"$next"},prevIcon:{type:[Boolean,String],default:"$prev"},reverse:Boolean,showArrows:Boolean,showArrowsOnHover:Boolean,touch:Object,touchless:Boolean,value:{required:!1},vertical:Boolean},data:function(){return{changedByDelimiters:!1,internalHeight:void 0,transitionHeight:void 0,transitionCount:0,isBooted:!1,isReverse:!1}},computed:{isActive:function(){return this.transitionCount>0},classes:function(){return Object(a["a"])(Object(a["a"])({},tt["a"].options.computed.classes.call(this)),{},{"v-window--show-arrows-on-hover":this.showArrowsOnHover})},computedTransition:function(){if(!this.isBooted)return"";var t=this.vertical?"y":"x",e=this.internalReverse?!this.isReverse:this.isReverse,i=e?"-reverse":"";return"v-window-".concat(t).concat(i,"-transition")},hasActiveItems:function(){return Boolean(this.items.find((function(t){return!t.disabled})))},hasNext:function(){return this.continuous||this.internalIndex<this.items.length-1},hasPrev:function(){return this.continuous||this.internalIndex>0},internalIndex:function(){var t=this;return this.items.findIndex((function(e,i){return t.internalValue===t.getValue(e,i)}))},internalReverse:function(){return this.$vuetify.rtl?!this.reverse:this.reverse}},watch:{internalIndex:function(t,e){this.isReverse=this.updateReverse(t,e)}},mounted:function(){var t=this;window.requestAnimationFrame((function(){return t.isBooted=!0}))},methods:{genDefaultSlot:function(){return this.$slots["default"]},genContainer:function(){var t=[this.genDefaultSlot()];return this.showArrows&&t.push(this.genControlIcons()),this.$createElement("div",{staticClass:"v-window__container",class:{"v-window__container--is-active":this.isActive},style:{height:this.internalHeight||this.transitionHeight}},t)},genIcon:function(t,e,i){var n,s,a,r=this,o={click:function(t){t.stopPropagation(),r.changedByDelimiters=!0,i()}},l={"aria-label":this.$vuetify.lang.t("$vuetify.carousel.".concat(t))},c=null!=(n=null==(s=(a=this.$scopedSlots)[t])?void 0:s.call(a,{on:o,attrs:l}))?n:[this.$createElement(Y["a"],{props:{icon:!0},attrs:l,on:o},[this.$createElement(Z["a"],{props:{large:!0}},e)])];return this.$createElement("div",{staticClass:"v-window__".concat(t)},c)},genControlIcons:function(){var t=[],e=this.$vuetify.rtl?this.nextIcon:this.prevIcon;if(this.hasPrev&&e&&"string"===typeof e){var i=this.genIcon("prev",e,this.prev);i&&t.push(i)}var n=this.$vuetify.rtl?this.prevIcon:this.nextIcon;if(this.hasNext&&n&&"string"===typeof n){var s=this.genIcon("next",n,this.next);s&&t.push(s)}return t},getNextIndex:function(t){var e=(t+1)%this.items.length,i=this.items[e];return i.disabled?this.getNextIndex(e):e},getPrevIndex:function(t){var e=(t+this.items.length-1)%this.items.length,i=this.items[e];return i.disabled?this.getPrevIndex(e):e},next:function(){if(this.hasActiveItems&&this.hasNext){var t=this.getNextIndex(this.internalIndex),e=this.items[t];this.internalValue=this.getValue(e,t)}},prev:function(){if(this.hasActiveItems&&this.hasPrev){var t=this.getPrevIndex(this.internalIndex),e=this.items[t];this.internalValue=this.getValue(e,t)}},updateReverse:function(t,e){var i=this.items.length,n=i-1;return i<=2?t<e:t===n&&0===e||(0!==t||e!==n)&&t<e}},render:function(t){var e=this,i={staticClass:"v-window",class:this.classes,directives:[]};if(!this.touchless){var n=this.touch||{left:function(){e.$vuetify.rtl?e.prev():e.next()},right:function(){e.$vuetify.rtl?e.next():e.prev()},end:function(t){t.stopPropagation()},start:function(t){t.stopPropagation()}};i.directives.push({name:"touch",value:n})}return t("div",i,[this.genContainer()])}}),it=et.extend({name:"v-tabs-items",props:{mandatory:{type:Boolean,default:!1}},computed:{classes:function(){return Object(a["a"])(Object(a["a"])({},et.options.computed.classes.call(this)),{},{"v-tabs-items":!0})},isDark:function(){return this.rootIsDark}},methods:{getValue:function(t,e){return t.id||tt["a"].options.methods.getValue.call(this,t,e)}}}),nt=i("a9ad"),st=Object(z["a"])(nt["a"]).extend({name:"v-tabs-slider",render:function(t){return t("div",this.setBackgroundColor(this.color,{staticClass:"v-tabs-slider"}))}}),at=i("a452"),rt=i("dc22"),ot=Object(z["a"])(nt["a"],at["a"],H["a"]),lt=ot.extend().extend({name:"v-tabs",directives:{Resize:rt["a"]},props:{activeClass:{type:String,default:""},alignWithTitle:Boolean,backgroundColor:String,centerActive:Boolean,centered:Boolean,fixedTabs:Boolean,grow:Boolean,height:{type:[Number,String],default:void 0},hideSlider:Boolean,iconsAndText:Boolean,mobileBreakpoint:[String,Number],nextIcon:{type:String,default:"$next"},optional:Boolean,prevIcon:{type:String,default:"$prev"},right:Boolean,showArrows:[Boolean,String],sliderColor:String,sliderSize:{type:[Number,String],default:2},vertical:Boolean},data:function(){return{resizeTimeout:0,slider:{height:null,left:null,right:null,top:null,width:null},transitionTime:300}},computed:{classes:function(){return Object(a["a"])({"v-tabs--align-with-title":this.alignWithTitle,"v-tabs--centered":this.centered,"v-tabs--fixed-tabs":this.fixedTabs,"v-tabs--grow":this.grow,"v-tabs--icons-and-text":this.iconsAndText,"v-tabs--right":this.right,"v-tabs--vertical":this.vertical},this.themeClasses)},isReversed:function(){return this.$vuetify.rtl&&this.vertical},sliderStyles:function(){return{height:Object(N["h"])(this.slider.height),left:this.isReversed?void 0:Object(N["h"])(this.slider.left),right:this.isReversed?Object(N["h"])(this.slider.right):void 0,top:this.vertical?Object(N["h"])(this.slider.top):void 0,transition:null!=this.slider.left?null:"none",width:Object(N["h"])(this.slider.width)}},computedColor:function(){return this.color?this.color:this.isDark&&!this.appIsDark?"white":"primary"}},watch:{alignWithTitle:"callSlider",centered:"callSlider",centerActive:"callSlider",fixedTabs:"callSlider",grow:"callSlider",iconsAndText:"callSlider",right:"callSlider",showArrows:"callSlider",vertical:"callSlider","$vuetify.application.left":"onResize","$vuetify.application.right":"onResize","$vuetify.rtl":"onResize"},mounted:function(){var t=this;this.$nextTick((function(){window.setTimeout(t.callSlider,30)}))},methods:{callSlider:function(){var t=this;return!this.hideSlider&&this.$refs.items&&this.$refs.items.selectedItems.length?(this.$nextTick((function(){var e=t.$refs.items.selectedItems[0];if(!e||!e.$el)return t.slider.width=0,void(t.slider.left=0);var i=e.$el;t.slider={height:t.vertical?i.scrollHeight:Number(t.sliderSize),left:t.vertical?0:i.offsetLeft,right:t.vertical?0:i.offsetLeft+i.offsetWidth,top:i.offsetTop,width:t.vertical?Number(t.sliderSize):i.scrollWidth}})),!0):(this.slider.width=0,!1)},genBar:function(t,e){var i=this,n={style:{height:Object(N["h"])(this.height)},props:{activeClass:this.activeClass,centerActive:this.centerActive,dark:this.dark,light:this.light,mandatory:!this.optional,mobileBreakpoint:this.mobileBreakpoint,nextIcon:this.nextIcon,prevIcon:this.prevIcon,showArrows:this.showArrows,value:this.internalValue},on:{"call:slider":this.callSlider,change:function(t){i.internalValue=t}},ref:"items"};return this.setTextColor(this.computedColor,n),this.setBackgroundColor(this.backgroundColor,n),this.$createElement(Q,n,[this.genSlider(e),t])},genItems:function(t,e){var i=this;return t||(e.length?this.$createElement(it,{props:{value:this.internalValue},on:{change:function(t){i.internalValue=t}}},e):null)},genSlider:function(t){return this.hideSlider?null:(t||(t=this.$createElement(st,{props:{color:this.sliderColor}})),this.$createElement("div",{staticClass:"v-tabs-slider-wrapper",style:this.sliderStyles},[t]))},onResize:function(){this._isDestroyed||(clearTimeout(this.resizeTimeout),this.resizeTimeout=window.setTimeout(this.callSlider,0))},parseNodes:function(){for(var t=null,e=null,i=[],n=[],s=this.$slots["default"]||[],a=s.length,r=0;r<a;r++){var o=s[r];if(o.componentOptions)switch(o.componentOptions.Ctor.options.name){case"v-tabs-slider":e=o;break;case"v-tabs-items":t=o;break;case"v-tab-item":i.push(o);break;default:n.push(o)}else n.push(o)}return{tab:n,slider:e,items:t,item:i}}},render:function(t){var e=this.parseNodes(),i=e.tab,n=e.slider,s=e.items,a=e.item;return t("div",{staticClass:"v-tabs",class:this.classes,directives:[{name:"resize",modifiers:{quiet:!0},value:this.onResize}]},[this.genBar(i,n),this.genItems(s,a)])}}),ct=Object(u["a"])(I,n,s,!1,null,null,null);e["default"]=ct.exports;v()(ct,{VBreadcrumbs:k["a"],VBtn:f["a"],VCard:j["a"],VCardText:p["b"],VCardTitle:p["c"],VChip:D["a"],VCol:A["a"],VRow:R["a"],VSimpleTable:V["a"],VTab:L,VTabItem:M,VTabs:lt,VTabsItems:it})},"2bc5":function(t,e,i){"use strict";var n=i("5530"),s=(i("a15b"),i("abd3"),i("ade3")),a=i("1c87"),r=i("58df"),o=Object(r["a"])(a["a"]).extend({name:"v-breadcrumbs-item",props:{activeClass:{type:String,default:"v-breadcrumbs__item--disabled"},ripple:{type:[Boolean,Object],default:!1}},computed:{classes:function(){return Object(s["a"])({"v-breadcrumbs__item":!0},this.activeClass,this.disabled)}},render:function(t){var e=this.generateRouteLink(),i=e.tag,s=e.data;return t("li",[t(i,Object(n["a"])(Object(n["a"])({},s),{},{attrs:Object(n["a"])(Object(n["a"])({},s.attrs),{},{"aria-current":this.isActive&&this.isLink?"page":void 0})}),this.$slots["default"])])}}),l=i("80d2"),c=Object(l["j"])("v-breadcrumbs__divider","li"),d=i("7560");e["a"]=Object(r["a"])(d["a"]).extend({name:"v-breadcrumbs",props:{divider:{type:String,default:"/"},items:{type:Array,default:function(){return[]}},large:Boolean},computed:{classes:function(){return Object(n["a"])({"v-breadcrumbs--large":this.large},this.themeClasses)}},methods:{genDivider:function(){return this.$createElement(c,this.$slots.divider?this.$slots.divider:this.divider)},genItems:function(){for(var t=[],e=!!this.$scopedSlots.item,i=[],n=0;n<this.items.length;n++){var s=this.items[n];i.push(s.text),e?t.push(this.$scopedSlots.item({item:s})):t.push(this.$createElement(o,{key:i.join("."),props:s},[s.text])),n<this.items.length-1&&t.push(this.genDivider())}return t}},render:function(t){var e=this.$slots["default"]||this.genItems();return t("ul",{staticClass:"v-breadcrumbs",class:this.classes},e)}})},"8b37":function(t,e,i){},abd3:function(t,e,i){},afdd:function(t,e,i){"use strict";var n=i("8336");e["a"]=n["a"]},d10f:function(t,e,i){"use strict";var n=i("2b0e");e["a"]=n["default"].extend({name:"ssr-bootable",data:function(){return{isBooted:!1}},mounted:function(){var t=this;window.requestAnimationFrame((function(){t.$el.setAttribute("data-booted","true"),t.isBooted=!0}))}})}}]);
//# sourceMappingURL=chunk-30867124.f4da132c.js.map