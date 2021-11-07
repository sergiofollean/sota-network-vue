<template>
<div>hello</div>
</template>
<script>
import firebase from 'firebase';
import {mapActions} from "vuex";

export default {
  name: 'Verify',
  methods: {
    ...mapActions(["verify"])
  },
  mounted: function () {
    const mode = this.$route.query.mode;
    const actionCode = this.$route.query.oobCode;
    const continueUrl = this.$route.query.continueUrl;
    const lang = this.$route.query.lang || 'en';
    const auth = firebase.auth();

    switch (mode) {
      case 'verifyEmail':
        this.verify({auth, actionCode, continueUrl, lang}).then((data) => {
          this.$router.push('/');
        })
        break;
      default:
    }
  }
}

</script>
<style lang="scss" scoped>
  .page-wrap {
    background-color: #242939 !important;
    display: flex;
    align-items: center;
    padding: 40px 1rem;
    height: 100%;
    min-height: 100vh;
  }
  .session-form-hold {
    width: 100%;
    max-width: 400px;
    margin: 0 auto;
  }
</style>