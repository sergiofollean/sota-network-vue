<template>
  <v-navigation-drawer
    v-model="getThemeMode.verticalSaasSidebarDrawer"
    :mobile-breakpoint="1000"
    height="100vh"
    style="top: 75px"
    class="vertical-sass-sidebar"
    :right="$vuetify.rtl"
    :color="$vuetify.theme.dark ? 'dark' : 'white'"
    flat
    floating
    app
    clipped
  >
    <vue-perfect-scrollbar
      :settings="{ suppressScrollX: true, wheelPropagation: false }"
      class="h-100 rtl-ps-none ps scroll"
      style="height: 100%"
    >
      <v-list rounded dense class="mt-4">
        <template v-for="(item, i) in computedItems">
          <base-item-group
            v-if="item.children"
            :key="`group-${i}`"
            :item="item"
          >
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
      background: true,
      items: items,
      opacity: 0.4,
    };
  },
  computed: {
    bg() {
      return this.background
        ? "https://images.pexels.com/photos/1687678/pexels-photo-1687678.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
        : undefined;
    },

    computedItems() {
      return this.items.map(this.mapItem);
    },

    ...mapGetters(["getThemeMode"]),
  },
  methods: {
    mapItem(item) {
      return {
        ...item,
        children: item.children ? item.children.map(this.mapItem) : undefined,
        title: this.$t(item.title),
      };
    },
  },
};
</script>

<style>
.ps-container {
  position: inherit !important;
}

@media screen and (max-width: 1024px) {
  /* .vertical-sass-sidebar {
    position: fixed;
    left: -251px;
  } */
}
</style>
