<template>
  <v-navigation-drawer
    v-model="getThemeMode.verticalSidebarDrawer"
    :color="
      $vuetify.theme.dark ? 'dark' : getThemeMode.verticalSidebarDrawerColor
    "
    :expand-on-hover.sync="getThemeMode.verticalSidebarMini"
    :mini-variant="getThemeMode.verticalSidebarMini"
    :src="bg"
    :dark="getThemeMode.verticalSidebarDrawerColor != 'white' ? true : false"
    app
    :disable-resize-watcher="false"
    :mobile-breakpoint="960"
    height="100%"
    class="shadow-sm"
    :floating="true"
    :right="$vuetify.rtl"
    v-bind="$attrs"
  >
    <template v-slot:img="props">
      <v-img :style="{ opacity: opacity }" v-bind="props" class="test" />
    </template>
    <vue-perfect-scrollbar
      :settings="{ suppressScrollX: true, wheelPropagation: false }"
      class="h-100 rtl-ps-none ps scroll"
      style="height: 100%"
    >
      <v-list dense nav>
        <v-list-item class="px-0 pt-3">
          <v-list-item-title class="text-18 text-uppercase text-default ml-4"
            >Sota Network</v-list-item-title
          >
        </v-list-item>
      </v-list>

      <v-list>
        <template v-for="(item, i) in computedItems">
          <base-item-group
            v-if="item.children"
            :key="`group-${i}`"
            :item="item"
          >
            <!--  -->
          </base-item-group>

          <base-item v-else :key="`item-${i}`" :item="item" />
        </template>
      </v-list>
    </vue-perfect-scrollbar>
  </v-navigation-drawer>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { items } from "../../data/navigation";

export default {
  // components: {
  //   VuePerfectScrollbar,
  // },

  data() {
    return {
      drawer: true,
      switch1: "on",
      color: "dark",
      colors: ["primary", "blue", "success", "red", "teal"],
      right: false,
      permanent: true,
      miniVariant: false,
      expandOnHover: false,
      background: false,
      items: items,
      opacity: 0.4,
    };
  },
  computed: {
    ...mapGetters(["getThemeMode"]),
    bg() {
      return this.background
        ? "https://images.pexels.com/photos/1687678/pexels-photo-1687678.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
        : undefined;
    },
    getMiniVariant() {
      return this.miniVariant;
    },
    computedItems() {
      return this.items.map(this.mapItem);
    },
  },
  methods: {
    ...mapActions(["changeVerticalSidebarDrawer", "changeVerticalSidebarMini"]),
    toggleSidebar() {
      this.changeVerticalSidebarMini();
      this.expandOnHover = !this.expandOnHover;
      // this.$emit("update:mini-variant");
      // console.log("check");
    },
    mapItem(item) {
      return {
        ...item,
        children: item.children ? item.children.map(this.mapItem) : undefined,
        title: item.title,
      };
    },
  },
};
</script>

<style lang="scss">
.ps-container {
  position: inherit !important;
}
.app-admin-wrap-layout-1.sidebar-mini {
  .v-toolbar {
    left: 56px !important;
    transition: all 0.5s cubic-bezier(0.685, 0.0473, 0.346, 1);
  }
  .v-main {
    padding: 75px 0px 12px 56px !important;
    transition: all 0.5s cubic-bezier(0.685, 0.0473, 0.346, 1);
    padding-bottom: 0px !important;
  }
  &.sidebar-close {
    .v-toolbar {
      left: 0px !important;
      transition: all 0.5s cubic-bezier(0.685, 0.0473, 0.346, 1);
    }
    .v-main {
      padding: 75px 0px 12px 0px !important;
      transition: all 0.5s cubic-bezier(0.685, 0.0473, 0.346, 1);
      padding-bottom: 0px !important;
    }
  }
}
</style>
