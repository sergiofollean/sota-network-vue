(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-38a27336","chunk-2d0dd63d"],{"40dc":function(t,e,s){"use strict";var i=s("5530"),r=(s("c7cd"),s("e25e"),s("a9e3"),s("8b0d"),s("71d9")),o=s("53ca");function l(t,e){var s=e.modifiers||{},i=s.self,r=void 0!==i&&i,l=e.value,a="object"===Object(o["a"])(l)&&l.options||{passive:!0},n="function"===typeof l||"handleEvent"in l?l:l.handler,c=r?t:e.arg?document.querySelector(e.arg):window;c&&(c.addEventListener("scroll",n,a),t._onScroll={handler:n,options:a,target:r?void 0:c})}function a(t){if(t._onScroll){var e=t._onScroll,s=e.handler,i=e.options,r=e.target,o=void 0===r?t:r;o.removeEventListener("scroll",s,i),delete t._onScroll}}var n={inserted:l,unbind:a},c=n,h=s("3a66"),d=s("d9bd"),p=s("2b0e"),u=p["default"].extend({name:"scrollable",directives:{Scroll:n},props:{scrollTarget:String,scrollThreshold:[String,Number]},data:function(){return{currentScroll:0,currentThreshold:0,isActive:!1,isScrollingUp:!1,previousScroll:0,savedScroll:0,target:null}},computed:{canScroll:function(){return"undefined"!==typeof window},computedScrollThreshold:function(){return this.scrollThreshold?Number(this.scrollThreshold):300}},watch:{isScrollingUp:function(){this.savedScroll=this.savedScroll||this.currentScroll},isActive:function(){this.savedScroll=0}},mounted:function(){this.scrollTarget&&(this.target=document.querySelector(this.scrollTarget),this.target||Object(d["c"])("Unable to locate element with identifier ".concat(this.scrollTarget),this))},methods:{onScroll:function(){var t=this;this.canScroll&&(this.previousScroll=this.currentScroll,this.currentScroll=this.target?this.target.scrollTop:window.pageYOffset,this.isScrollingUp=this.currentScroll<this.previousScroll,this.currentThreshold=Math.abs(this.currentScroll-this.computedScrollThreshold),this.$nextTick((function(){Math.abs(t.currentScroll-t.savedScroll)>t.computedScrollThreshold&&t.thresholdMet()})))},thresholdMet:function(){}}}),v=s("d10f"),m=s("f2e7"),f=s("80d2"),g=s("58df"),b=Object(g["a"])(r["a"],u,v["a"],m["a"],Object(h["a"])("top",["clippedLeft","clippedRight","computedHeight","invertedScroll","isExtended","isProminent","value"]));e["a"]=b.extend({name:"v-app-bar",directives:{Scroll:c},provide:function(){return{VAppBar:this}},props:{clippedLeft:Boolean,clippedRight:Boolean,collapseOnScroll:Boolean,elevateOnScroll:Boolean,fadeImgOnScroll:Boolean,hideOnScroll:Boolean,invertedScroll:Boolean,scrollOffScreen:Boolean,shrinkOnScroll:Boolean,value:{type:Boolean,default:!0}},data:function(){return{isActive:this.value}},computed:{applicationProperty:function(){return this.bottom?"bottom":"top"},canScroll:function(){return u.options.computed.canScroll.call(this)&&(this.invertedScroll||this.elevateOnScroll||this.hideOnScroll||this.collapseOnScroll||this.isBooted||!this.value)},classes:function(){return Object(i["a"])(Object(i["a"])({},r["a"].options.computed.classes.call(this)),{},{"v-toolbar--collapse":this.collapse||this.collapseOnScroll,"v-app-bar":!0,"v-app-bar--clipped":this.clippedLeft||this.clippedRight,"v-app-bar--fade-img-on-scroll":this.fadeImgOnScroll,"v-app-bar--elevate-on-scroll":this.elevateOnScroll,"v-app-bar--fixed":!this.absolute&&(this.app||this.fixed),"v-app-bar--hide-shadow":this.hideShadow,"v-app-bar--is-scrolled":this.currentScroll>0,"v-app-bar--shrink-on-scroll":this.shrinkOnScroll})},scrollRatio:function(){var t=this.computedScrollThreshold;return Math.max((t-this.currentScroll)/t,0)},computedContentHeight:function(){if(!this.shrinkOnScroll)return r["a"].options.computed.computedContentHeight.call(this);var t=this.dense?48:56,e=this.computedOriginalHeight;return t+(e-t)*this.scrollRatio},computedFontSize:function(){if(this.isProminent){var t=1.25,e=1.5;return t+(e-t)*this.scrollRatio}},computedLeft:function(){return!this.app||this.clippedLeft?0:this.$vuetify.application.left},computedMarginTop:function(){return this.app?this.$vuetify.application.bar:0},computedOpacity:function(){if(this.fadeImgOnScroll)return this.scrollRatio},computedOriginalHeight:function(){var t=r["a"].options.computed.computedContentHeight.call(this);return this.isExtended&&(t+=parseInt(this.extensionHeight)),t},computedRight:function(){return!this.app||this.clippedRight?0:this.$vuetify.application.right},computedScrollThreshold:function(){return this.scrollThreshold?Number(this.scrollThreshold):this.computedOriginalHeight-(this.dense?48:56)},computedTransform:function(){if(!this.canScroll||this.elevateOnScroll&&0===this.currentScroll&&this.isActive)return 0;if(this.isActive)return 0;var t=this.scrollOffScreen?this.computedHeight:this.computedContentHeight;return this.bottom?t:-t},hideShadow:function(){return this.elevateOnScroll&&this.isExtended?this.currentScroll<this.computedScrollThreshold:this.elevateOnScroll?0===this.currentScroll||this.computedTransform<0:(!this.isExtended||this.scrollOffScreen)&&0!==this.computedTransform},isCollapsed:function(){return this.collapseOnScroll?this.currentScroll>0:r["a"].options.computed.isCollapsed.call(this)},isProminent:function(){return r["a"].options.computed.isProminent.call(this)||this.shrinkOnScroll},styles:function(){return Object(i["a"])(Object(i["a"])({},r["a"].options.computed.styles.call(this)),{},{fontSize:Object(f["g"])(this.computedFontSize,"rem"),marginTop:Object(f["g"])(this.computedMarginTop),transform:"translateY(".concat(Object(f["g"])(this.computedTransform),")"),left:Object(f["g"])(this.computedLeft),right:Object(f["g"])(this.computedRight)})}},watch:{canScroll:"onScroll",computedTransform:function(){this.canScroll&&(this.clippedLeft||this.clippedRight)&&this.callUpdate()},invertedScroll:function(t){this.isActive=!t||0!==this.currentScroll}},created:function(){this.invertedScroll&&(this.isActive=!1)},methods:{genBackground:function(){var t=r["a"].options.methods.genBackground.call(this);return t.data=this._b(t.data||{},t.tag,{style:{opacity:this.computedOpacity}}),t},updateApplication:function(){return this.invertedScroll?0:this.computedHeight+this.computedTransform},thresholdMet:function(){this.invertedScroll?this.isActive=this.currentScroll>this.computedScrollThreshold:(this.hideOnScroll&&(this.isActive=this.isScrollingUp||this.currentScroll<this.computedScrollThreshold),this.currentThreshold<this.computedScrollThreshold||(this.savedScroll=this.currentScroll))}},render:function(t){var e=r["a"].options.render.call(this,t);return e.data=e.data||{},this.canScroll&&(e.data.directives=e.data.directives||[],e.data.directives.push({arg:this.scrollTarget,name:"scroll",value:this.onScroll})),e}})},"5e23":function(t,e,s){},"71d9":function(t,e,s){"use strict";var i=s("3835"),r=s("5530"),o=(s("a9e3"),s("e25e"),s("0481"),s("4160"),s("5e23"),s("8dd9")),l=s("adda"),a=s("80d2"),n=s("d9bd");e["a"]=o["a"].extend({name:"v-toolbar",props:{absolute:Boolean,bottom:Boolean,collapse:Boolean,dense:Boolean,extended:Boolean,extensionHeight:{default:48,type:[Number,String]},flat:Boolean,floating:Boolean,prominent:Boolean,short:Boolean,src:{type:[String,Object],default:""},tag:{type:String,default:"header"}},data:function(){return{isExtended:!1}},computed:{computedHeight:function(){var t=this.computedContentHeight;if(!this.isExtended)return t;var e=parseInt(this.extensionHeight);return this.isCollapsed?t:t+(isNaN(e)?0:e)},computedContentHeight:function(){return this.height?parseInt(this.height):this.isProminent&&this.dense?96:this.isProminent&&this["short"]?112:this.isProminent?128:this.dense?48:this["short"]||this.$vuetify.breakpoint.smAndDown?56:64},classes:function(){return Object(r["a"])(Object(r["a"])({},o["a"].options.computed.classes.call(this)),{},{"v-toolbar":!0,"v-toolbar--absolute":this.absolute,"v-toolbar--bottom":this.bottom,"v-toolbar--collapse":this.collapse,"v-toolbar--collapsed":this.isCollapsed,"v-toolbar--dense":this.dense,"v-toolbar--extended":this.isExtended,"v-toolbar--flat":this.flat,"v-toolbar--floating":this.floating,"v-toolbar--prominent":this.isProminent})},isCollapsed:function(){return this.collapse},isProminent:function(){return this.prominent},styles:function(){return Object(r["a"])(Object(r["a"])({},this.measurableStyles),{},{height:Object(a["g"])(this.computedHeight)})}},created:function(){var t=this,e=[["app","<v-app-bar app>"],["manual-scroll",'<v-app-bar :value="false">'],["clipped-left","<v-app-bar clipped-left>"],["clipped-right","<v-app-bar clipped-right>"],["inverted-scroll","<v-app-bar inverted-scroll>"],["scroll-off-screen","<v-app-bar scroll-off-screen>"],["scroll-target","<v-app-bar scroll-target>"],["scroll-threshold","<v-app-bar scroll-threshold>"],["card","<v-app-bar flat>"]];e.forEach((function(e){var s=Object(i["a"])(e,2),r=s[0],o=s[1];t.$attrs.hasOwnProperty(r)&&Object(n["a"])(r,o,t)}))},methods:{genBackground:function(){var t={height:Object(a["g"])(this.computedHeight),src:this.src},e=this.$scopedSlots.img?this.$scopedSlots.img({props:t}):this.$createElement(l["a"],{props:t});return this.$createElement("div",{staticClass:"v-toolbar__image"},[e])},genContent:function(){return this.$createElement("div",{staticClass:"v-toolbar__content",style:{height:Object(a["g"])(this.computedContentHeight)}},Object(a["s"])(this))},genExtension:function(){return this.$createElement("div",{staticClass:"v-toolbar__extension",style:{height:Object(a["g"])(this.extensionHeight)}},Object(a["s"])(this,"extension"))}},render:function(t){this.isExtended=this.extended||!!this.$scopedSlots.extension;var e=[this.genContent()],s=this.setBackgroundColor(this.color,{class:this.classes,style:this.styles,on:this.$listeners});return this.isExtended&&e.push(this.genExtension()),(this.src||this.$scopedSlots.img)&&e.unshift(this.genBackground()),t(this.tag,s,e)}})},"80d3":function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("vue-perfect-scrollbar",{staticClass:"h-100 rtl-ps-none ps scroll",staticStyle:{height:"100%"},attrs:{settings:{suppressScrollX:!0,wheelPropagation:!1}}},[i("div",{staticClass:"p-5 relative"},[i("v-app-bar",{staticClass:"pt-1 shadow-sm",attrs:{color:t.$vuetify.theme.dark?"dark":"white",dark:t.$vuetify.theme.dark,fixed:""}},[i("div",{staticClass:"flex justify-between items-center"},[i("h6",{staticClass:"m-0"},[t._v("My Account")]),t._t("userDrawerCloseButton")],2)])],1),i("div",{staticClass:"p-5 mt-10"},[i("div",{staticClass:"heading-label p-0 mb-4"},[t._v("Profile")]),i("div",{staticClass:"flex items-center mb-10"},[i("v-avatar",{staticClass:"mr-2",attrs:{size:"56"}},[i("img",{attrs:{src:s("6f92"),alt:""}})]),i("div",[i("a",{staticClass:"link-alt",attrs:{href:"#"}},[i("p",{staticClass:"font-semibold m-0"},[t._v("Tim Clarkson")])]),i("p",{staticClass:"text-sm text--disabled mb-2"},[t._v("Front End Developer")]),i("v-btn",{attrs:{small:"",icon:"",color:""}},[i("v-icon",{attrs:{small:"",dense:""}},[t._v("mdi-google")])],1),i("v-btn",{attrs:{small:"",icon:"",color:""}},[i("v-icon",{attrs:{small:"",dense:""}},[t._v("mdi-twitter")])],1),i("v-btn",{attrs:{small:"",icon:"",color:""}},[i("v-icon",{attrs:{small:"",dense:""}},[t._v("mdi-facebook")])],1)],1)],1),i("div",{staticClass:"heading-label p-0 mb-4"},[t._v("Skills")]),i("div",{staticClass:"mb-10"},t._l(t.items,(function(e,s){return i("div",{key:s,staticClass:"flex"},[i("v-avatar",{staticClass:"mr-2",attrs:{color:e.progressColor,size:"36"}},[i("span",{staticClass:"white--text text-20"},[t._v(t._s(e.letter))])]),i("div",{staticClass:"flex-grow"},[i("p",{staticClass:"font-weight-semi m-0"},[t._v(" "+t._s(e.title)+" ")]),i("p",{staticClass:"text-muted text-small"},[t._v(" "+t._s(e.subTitle)+" ")])]),i("div",{staticClass:"flex-grow"},[i("p",{staticClass:"m-0 text-right"},[t._v(t._s(e.progressbarText)+"%")]),i("v-progress-linear",{attrs:{color:e.progressColor,value:e.progressvalue,rounded:""}})],1)],1)})),0),i("div",{staticClass:"heading-label p-0 mb-4"},[t._v("activity")]),i("div",{staticClass:"mb-10"},[i("div",{staticClass:"flex"},[i("v-avatar",{staticClass:"mr-2",attrs:{color:"primary",size:"36"}},[i("span",{staticClass:"white--text text-20"},[t._v("JH")])]),i("div",{staticClass:"flex-grow"},[i("p",{staticClass:"font-weight-semi m-0"},[t._v(" Urgent Task ")]),i("p",{staticClass:"text-muted text-small"},[t._v(" By Jhon at 3:30 PM ")])])],1),i("div",{staticClass:"flex"},[i("v-avatar",{staticClass:"mr-2",attrs:{color:"success",size:"36"}},[i("span",{staticClass:"white--text text-20"},[t._v("W")])]),i("div",{staticClass:"flex-grow"},[i("p",{staticClass:"font-weight-semi m-0"},[t._v(" Task from project Alpha ")]),i("p",{staticClass:"text-muted text-small"},[t._v(" By Watson at 1:30 PM ")])])],1),i("div",{staticClass:"flex"},[i("v-avatar",{staticClass:"mr-2",attrs:{color:"success",size:"36"}},[i("span",{staticClass:"white--text text-20"},[t._v("R")])]),i("div",{staticClass:"flex-grow"},[i("p",{staticClass:"font-weight-semi m-0"},[t._v(" Task from project Beta ")]),i("p",{staticClass:"text-muted text-small"},[t._v(" By Rafi at 9:30 AM ")])])],1)])])])},r=[],o={name:"UserDrawer",props:{},data:function(){return{items:[{letter:"A",title:"Angular",subTitle:"Frontend framework",progressbarText:"90",progressvalue:90,progressColor:"danger"},{letter:"V",title:"Vue Js",subTitle:"Frontend framework",progressbarText:"30",progressvalue:30,progressColor:"green"},{letter:"R",title:"React",subTitle:"Frontend framework",progressbarText:"50",progressvalue:50,progressColor:"pink"},{letter:"W",title:"Wordpress Website",subTitle:"CMS",progressbarText:"30",progressvalue:30,progressColor:"dark"}]}},computed:{},methods:{}},l=o,a=s("2877"),n=s("6544"),c=s.n(n),h=s("40dc"),d=s("8212"),p=s("8336"),u=s("132d"),v=s("8e36"),m=Object(a["a"])(l,i,r,!1,null,"34dbd78c",null);e["default"]=m.exports;c()(m,{VAppBar:h["a"],VAvatar:d["a"],VBtn:p["a"],VIcon:u["a"],VProgressLinear:v["a"]})},"8b0d":function(t,e,s){}}]);
//# sourceMappingURL=chunk-38a27336.d4a2f527.js.map