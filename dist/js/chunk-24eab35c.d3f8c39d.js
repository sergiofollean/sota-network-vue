(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-24eab35c"],{7496:function(e,t,a){"use strict";var i=a("5530"),n=(a("df86"),a("7560")),r=a("58df");t["a"]=Object(r["a"])(n["a"]).extend({name:"v-app",props:{dark:{type:Boolean,default:void 0},id:{type:String,default:"app"},light:{type:Boolean,default:void 0}},computed:{isDark:function(){return this.$vuetify.theme.dark}},beforeCreate:function(){if(!this.$vuetify||this.$vuetify===this.$root)throw new Error("Vuetify is not properly initialized, see https://vuetifyjs.com/getting-started/quick-start#bootstrapping-the-vuetify-object")},render:function(e){var t=e("div",{staticClass:"v-application--wrap"},this.$slots["default"]);return e("div",{staticClass:"v-application",class:Object(i["a"])({"v-application--is-rtl":this.$vuetify.rtl,"v-application--is-ltr":!this.$vuetify.rtl},this.themeClasses),attrs:{"data-app":!0},domProps:{id:this.id}},[t])}})},df86:function(e,t,a){},f43b:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",{class:{"app-admin-wrap-layout-1 sidebar-mini":e.getThemeMode.verticalSidebarMini,"sidebar-close":!e.getThemeMode.verticalSidebarDrawer},style:{background:e.$vuetify.theme.themes[e.theme].background,color:"#304156"}},[a("side-bar",{attrs:{app:""}}),a("app-bar",{attrs:{app:""}}),a("base-view")],1)},n=[],r=a("5530"),s=(a("d3b7"),a("3ca3"),a("ddb0"),a("2f62")),c={components:{BaseView:function(){return Promise.all([a.e("chunk-403574da"),a.e("chunk-2df18892")]).then(a.bind(null,"0ad6"))},SideBar:function(){return Promise.all([a.e("chunk-7226b4a6"),a.e("chunk-7ed4225c"),a.e("chunk-a2b75e60"),a.e("chunk-cdfefbbe")]).then(a.bind(null,"e443"))},AppBar:function(){return Promise.all([a.e("chunk-43542613"),a.e("chunk-332f5da4")]).then(a.bind(null,"756d"))}},computed:Object(r["a"])(Object(r["a"])({},Object(s["c"])(["getThemeMode"])),{},{theme:function(){return this.$vuetify.theme.dark?"dark":"light"}})},o=c,u=a("2877"),d=a("6544"),p=a.n(d),l=a("7496"),h=Object(u["a"])(o,i,n,!1,null,"b5d68008",null);t["default"]=h.exports;p()(h,{VApp:l["a"]})}}]);
//# sourceMappingURL=chunk-24eab35c.d3f8c39d.js.map