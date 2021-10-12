/*
 * ============================
 * File: index.js
 * Project: egret-vue
 * File Created: Thursday, 9th April 2020 2:11:05 am
 * Author:UILIB
 * AuthorUrl:https://themeforest.net/user/ui-lib
 * -----
 * Last Modified: Saturday, 18th April 2020 9:32:52 pm
 * Modified By: naime hossain (naime.hossain93@gmail.com)
 * -----
 * Copyright 2020 - 2020 UILIB, UILIB
 * ============================
 */

// Imports
import Vue from "vue";
import Router from "vue-router";
import store from "@/store";
import authenticate from "@/auth/authenticate";

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  scrollBehavior: (to, from, savedPosition) => {
    if (to.hash) return { selector: to.hash };
    if (savedPosition) return savedPosition;

    return { x: 0, y: 0 };
  },
  routes: [
    {
      path: "/",
      component: () => import("@/views/app/Index"),
      beforeEnter: authenticate,
      redirect: "/dashboard",

      children: [
        // {
        //   path: "layout/:layout",
        //   component: () => import("@/views/app/Index")
        // },
        {
          path: "/dashboard",
          component: () => import("@/views/app/dashboard/Index"),
        },
        {
          path: "/settings",
          name: "settings",
          meta: {
            breadcrumb: [{ name: "Dashboard" }, { name: "Settings" }]
          },
          component: () => import("@/views/app/settings/Index"),
          children: [
            {
              path: '',
              component: () => import("@/views/app/settings/Main")
            },
            {
              path: 'add_account',
              component: () => import("@/views/app/settings/AddAccount")
            }
          ]
        }
      ]
    },
    {
      path: "/user",
      component: () => import("@/views/app/sessions/Sessions"),

      children: [
        {
          path: "error",
          component: () => import("@/views/app/sessions/Error")
        },
        {
          path: "forgot",
          component: () => import("@/views/app/sessions/Forgot")
        },
        {
          path: "sign-in",
          name: "login",
          component: () => import("@/views/app/sessions/SignInTwo")
        },
        {
          path: "sign-up",
          component: () => import("@/views/app/sessions/SignUp")
        },
      ]
    }
  ]
});

router.beforeEach((to, from, next) => {
  // If this isn't an initial page load.
  if (to.path) {
    // Start the route progress bar.
    store.dispatch("changeThemeLoadingState", true);
  }
  next();
});

router.afterEach(() => {
  // Remove initial loading
  // const gullPreLoading = document.getElementById("loading_wrap");
  // if (gullPreLoading) {
  //   gullPreLoading.style.display = "none";
  // }
  // Complete the animation of the route progress bar.
  setTimeout(() => store.dispatch("changeThemeLoadingState", false), 500);
  // NProgress.done();
  // if (isMobile) {
  // if (window.innerWidth <= 1200) {
  //   // console.log("mobile");
  //   store.dispatch("changeSidebarProperties");
  //   if (store.getters.getSideBarToggleProperties.isSecondarySideNavOpen) {
  //     store.dispatch("changeSecondarySidebarProperties");
  //   }
  //   if (store.getters.getCompactSideBarToggleProperties.isSideNavOpen) {
  //     store.dispatch("changeCompactSidebarProperties");
  //   }
  // } else {
  //   if (store.getters.getSideBarToggleProperties.isSecondarySideNavOpen) {
  //     store.dispatch("changeSecondarySidebarProperties");
  //   }
  //   // store.state.sidebarToggleProperties.isSecondarySideNavOpen = false;
  // }
});

export default router;
