
<template>
  <router-view />
</template>

<script>
export default {
  name: "App",
  metaInfo() {
    return {
      // if no subcomponents specify a metaInfo.title, this title will be used
      title: "Sota-network",
      // all titles will be injected into this template
      titleTemplate:
        "%s | Sota-network",
    };
  },
  methods: {
    getRouterParams() {
      console.log(this.$router.currentRoute.query);
    },
  },
  created() {
    this.getRouterParams();
  },
};
</script>
