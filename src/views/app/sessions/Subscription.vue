<template>
  <div>

  </div>
</template>

<script>
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import axios from "axios";

var db = firebase.firestore();
var realdb = firebase.database();

export default {
  data() {
    return {
      subscriptions: [
        {
          title: 'subscriptions.default',
          options: ['subscriptions.options.telegram', 'subscriptions.options.futureBot'],
        }
      ],
      id: 0,
    }
  },
  async beforeCreate() {
    const {id} = this.$route.params;
    this.id = id;
    let axiosResponse = await axios
        .get('https://newsadmin.sota-network.com/wp-json/wp/v2/posts/' + id);
    (function (d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0],
          t = window.twttr || {};
      if (d.getElementById(id)) return t.widgets.load();
      js = d.createElement(s);
      js.id = id;
      js.src = "https://platform.twitter.com/widgets.js";
      fjs.parentNode.insertBefore(js, fjs);

      t._e = [];
      t.ready = function (f) {
        t._e.push(f);
      };
      return t;
    }(document, "script", "twitter-wjs"));
    this.news = axiosResponse.data;

  }
}
</script>
