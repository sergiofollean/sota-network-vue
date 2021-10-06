/*
 * ============================
 * File: main.js
 * Project: egret-vue
 * File Created: Thursday, 9th April 2020 2:11:05 am
 * Author:UILIB
 * AuthorUrl:https://themeforest.net/user/ui-lib
 * -----
 * Last Modified: Tuesday, 14th April 2020 7:17:10 pm
 * Modified By: naime hossain (naime.hossain93@gmail.com)
 * -----
 * Copyright 2020 - 2020 UILIB, UILIB
 * ============================
 */

import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

import vuetify from "./plugins/vuetify";
import "./plugins";
import { makeServer } from "../server";

import egretKit from "@/plugins/egret.kit";
import VueApexCharts from "vue-apexcharts";
// mock
import "./fake-db/index.js";

import "animate.css";


Vue.component("apexchart", VueApexCharts);

Vue.use(egretKit);
Vue.config.productionTip = false;
// if (process.env.NODE_ENV === "development") {
//   makeServer();
// }

new Vue({
  store,
  router,
  vuetify,
  render: h => h(App),
  created () {
    if(!firebase.apps.length) {
      const firebaseConfig = {
        apiKey: "AIzaSyA2FX8u7Q_rgx5gi32730BEyrAxfD53DJ8",
        authDomain: "botapp-bb4b0.firebaseapp.com",
        databaseURL: "https://botapp-bb4b0-default-rtdb.firebaseio.com",
        projectId: "botapp-bb4b0",
        storageBucket: "botapp-bb4b0.appspot.com",
        messagingSenderId: "245702413811",
        appId: "1:245702413811:web:5d370f49db6db0a6f41686",
        measurementId: "G-PL69VSBB8X"
      };

      firebase.initializeApp(firebaseConfig);
    }
    else {
      firebase.app();
    }
  }
}).$mount("#app");
