/*
 * ============================
 * File: egret.kit.js
 * Project: egret-vue
 * File Created: Monday, 13th April 2020 6:18:44 pm
 * Author:UILIB
 * AuthorUrl:https://themeforest.net/user/ui-lib
 * -----
 * Last Modified: Monday, 13th April 2020 7:16:37 pm
 * Modified By: naime hossain (naime.hossain93@gmail.com)
 * -----
 * Copyright 2020 - 2020 UILIB, UILIB
 * ============================
 */

import VuePerfectScrollbar from "vue-perfect-scrollbar";

// import Vuebar from "vuebar";

// ApexCharts
import "@/plugins/apexChart.js";

// Tailwind
import "@/assets/css/tailwind.css";

// theme Main scss
import "@/assets/scss/egret-design-system/egret-design-system.scss";
// .js file

import VueStripeMenu from "vue-stripe-menu";

// Import build styles
import "vue-stripe-menu/dist/vue-stripe-menu.css";

// plugins menu

// javascript import for when you're importing the css directly in your javascript
import "vue-navigation-bar/dist/vue-navigation-bar.css";
// import the library
import VueNavigationBar from "vue-navigation-bar";

// axios
import axios from "axios";
import VueAxios from "vue-axios";
// import { Wizard } from "vue-form-wizard/types/FormWizard";
// algoliasearch
// import InstantSearch from 'vue-instantsearch';

// form-Wizard
import VueFormWizard from "vue-form-wizard";
import "vue-form-wizard/dist/vue-form-wizard.min.css";

import VueMeta from "vue-meta";
import firebase from "firebase/app";


 
// require more codemirror resource...
 
// you can set default global options and events when use

// // firebase sdk
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyA2FX8u7Q_rgx5gi32730BEyrAxfD53DJ8",
  authDomain: "botapp-bb4b0.firebaseapp.com",
  databaseURL: "https://botapp-bb4b0-default-rtdb.firebaseio.com",
  projectId: "botapp-bb4b0",
  storageBucket: "botapp-bb4b0.appspot.com",
  messagingSenderId: "245702413811",
  appId: "1:245702413811:web:5d370f49db6db0a6f41686",
  measurementId: "G-PL69VSBB8X"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION);

// end plugins

export default {
  install(Vue) {
   
    Vue.use(VueMeta);
    Vue.use(VueFormWizard);
    // Vue.use(InstantSearch)
    Vue.use(VueStripeMenu);
    Vue.use(VueAxios, axios);
    Vue.component("vue-navigation-bar", VueNavigationBar);
    Vue.component(
      "HorizontalBar",
      // The `import` function returns a Promise.

      () => import("../layouts/horizontal/Index")
    );
    Vue.component(
      "VerticalSidebar",
      // The `import` function returns a Promise.

      () => import("../layouts/vertical/Index")
    );
    Vue.component(
      "VerticalCompactSidebar",
      // The `import` function returns a Promise.

      () => import("../layouts/vertical-compact-layout/Index")
    );
    Vue.component(
      "VerticalSaasLayout",
      // The `import` function returns a Promise.

      () => import("../layouts/vertical-saas-layout/Index")
    );

    Vue.component("VuePerfectScrollbar", VuePerfectScrollbar);
  }
};
