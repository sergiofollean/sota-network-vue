(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-24eab35c"],{7496:function(e,t,i){"use strict";var a=i("5530"),n=(i("df86"),i("7560")),r=i("58df");t["a"]=Object(r["a"])(n["a"]).extend({name:"v-app",props:{dark:{type:Boolean,default:void 0},id:{type:String,default:"app"},light:{type:Boolean,default:void 0}},computed:{isDark:function(){return this.$vuetify.theme.dark}},beforeCreate:function(){if(!this.$vuetify||this.$vuetify===this.$root)throw new Error("Vuetify is not properly initialized, see https://vuetifyjs.com/getting-started/quick-start#bootstrapping-the-vuetify-object")},render:function(e){var t=e("div",{staticClass:"v-application--wrap"},this.$slots["default"]);return e("div",{staticClass:"v-application",class:Object(a["a"])({"v-application--is-rtl":this.$vuetify.rtl,"v-application--is-ltr":!this.$vuetify.rtl},this.themeClasses),attrs:{"data-app":!0},domProps:{id:this.id}},[t])}})},df86:function(e,t,i){},f43b:function(e,t,i){"use strict";i.r(t);var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-app",{class:{"app-admin-wrap-layout-1 sidebar-mini":e.getThemeMode.verticalSidebarMini,"sidebar-close":!e.getThemeMode.verticalSidebarDrawer},style:{background:e.$vuetify.theme.themes[e.theme].background,color:"#304156"}},[i("side-bar",{attrs:{app:""}}),i("app-bar",{attrs:{app:""}}),i("base-view")],1)},n=[],r=i("5530"),s=(i("d3b7"),i("3ca3"),i("ddb0"),i("2f62")),o={components:{BaseView:function(){return Promise.all([i.e("chunk-403574da"),i.e("chunk-2df18892")]).then(i.bind(null,"0ad6"))},SideBar:function(){return Promise.all([i.e("chunk-153d41e2"),i.e("chunk-578056f6")]).then(i.bind(null,"e443"))},AppBar:function(){return Promise.all([i.e("chunk-bb1fe6ea"),i.e("chunk-b09b0448"),i.e("chunk-50e2e678")]).then(i.bind(null,"756d"))}},computed:Object(r["a"])(Object(r["a"])({},Object(s["c"])(["getThemeMode"])),{},{theme:function(){return this.$vuetify.theme.dark?"dark":"light"}})},u=o,c=i("2877"),d=i("6544"),p=i.n(d),l=i("7496"),h=Object(c["a"])(u,a,n,!1,null,"b5d68008",null);t["default"]=h.exports;p()(h,{VApp:l["a"]})}}]);
//# sourceMappingURL=chunk-24eab35c.85cd6d32.js.map