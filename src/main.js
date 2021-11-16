import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import "./plugins";
import egretKit from "@/plugins/egret.kit";
import VueApexCharts from "vue-apexcharts";
import "animate.css";
import i18n from "./lang/lang";
import axios from 'axios';

Vue.prototype.$http = axios;
Vue.component("apexchart", VueApexCharts);
Vue.use(egretKit);
Vue.config.productionTip = false;

new Vue({
  store,
  router,
  vuetify,
  i18n,
  render: h => h(App)
}).$mount("#app");
