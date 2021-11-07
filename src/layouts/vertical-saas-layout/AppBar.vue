<template>
  <div>
    <v-app-bar
      :color="$vuetify.theme.dark ? 'dark' : 'white'"
      :dark="$vuetify.theme.dark"
      class="px-sm text-left shadow-sm"
      height="75"
      app
      clipped-left
    >
      <v-app-bar-nav-icon
        v-ripple="{ class: 'primary--text' }"
        @click="toggleVerticalSaasSidebarDrawer"
      />
      <v-progress-linear
        :active="getThemeMode.isLoading"
        :indeterminate="getThemeMode.isLoading"
        absolute
        bottom
        color="primary"
      />

      <v-toolbar-title>Sota-Network</v-toolbar-title>

      <v-spacer />

      <v-btn
          v-if="!$vuetify.theme.dark"
          @click="changeDarkMode(true)"
          icon
      >
        <v-icon>mdi-weather-night</v-icon>
      </v-btn>
      <v-btn v-else @click="changeDarkMode(false)" icon>
        <v-icon color="warning">mdi-weather-night</v-icon>
      </v-btn>

      <v-menu offset-y min-width="150">
        <template v-slot:activator="{ on, attrs }">
          <v-btn color dark v-bind="attrs" v-on="on" icon>
            <v-avatar size="30">
              <img src="@/assets/images/flags/1x1/ua.svg" alt />
            </v-avatar>
          </v-btn>
        </template>
        <v-list>
          <v-list-item v-for="(item, index) in flags" :key="index" @click>
            <v-list-item-title>
              <v-avatar class="mr-1" size="24">
                <img :src="item.country" alt />
              </v-avatar>
              {{ item.lang }}
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

      <v-menu offset-y min-width="150">
        <template v-slot:activator="{ on, attrs }">
          <v-chip pill class="bg-transparent py-5" v-bind="attrs" v-on="on">
            {{ userData.email }}
            <v-avatar class="ml-2">
              <v-img src="@/assets/images/faces/1.jpg"></v-img>
            </v-avatar>
          </v-chip>
        </template>
        <v-list>
          <v-list-item :to="'/profile'">
            <v-list-item-title>
              <v-icon class="mr-1">mdi-account</v-icon>Profile
            </v-list-item-title>
          </v-list-item>
          <v-list-item @click>
            <v-list-item-title>
              <v-icon class="mr-1">mdi-cog</v-icon>Account Setting
            </v-list-item-title>
          </v-list-item>
          <v-list-item @click>
            <v-list-item-title>
              <v-icon class="mr-1">mdi-bell-off</v-icon>Disable Alerts
            </v-list-item-title>
          </v-list-item>
          <v-list-item @click.native="logoutUser">
            <v-list-item-title>
              <v-icon class="mr-1">mdi-logout</v-icon>Sign Out
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import UserDrawer from "../common-drawer/UserDrawer.vue";
import NotificationDrawer from "../common-drawer/NotificationDrawer.vue";
import SearchDrawer from "../common-drawer/SearchDrawer.vue";
export default {
  name: "VerticallAppBar",
  components: {
    UserDrawer,
    NotificationDrawer,
    SearchDrawer,
  },
  computed: {
    ...mapGetters(["getThemeMode"]),
    ...mapGetters(["userData"]),
  },
  data() {
    return {
      userDrawer: false,
      flags: [
        {
          country: require("@/assets/images/flags/1x1/ua.svg"),
          lang: "Українська",
        },
        {
          country: require("@/assets/images/flags/1x1/ru.svg"),
          lang: "Русский",
        },
        {
          country: require("@/assets/images/flags/1x1/us.svg"),
          lang: "English",
        },
      ],
    };
  },
  methods: {
    ...mapActions(["changeVerticalSaasSidebarDrawer", "signOut"]),
    toggleVerticalSaasSidebarDrawer() {
      this.changeVerticalSaasSidebarDrawer();

      // this.$emit("update:mini-variant");
      // console.log("check");
    },
<<<<<<< HEAD
    changeDarkMode(data) {
      // this.changeThemeDarkMode(data);
      this.$vuetify.theme.dark = data;
    },
=======
    logoutUser() {
      console.log('logout');
      this.signOut();

      this.$router.push("/app/sessions/sign-in-two");
    }
>>>>>>> 75b02941a75d0cafa7b6fdde8ea18c888ed20119
  },
};
</script>

<style scoped>
</style>
