<template>
  <div>
    <v-row>
      <v-chip-group>
        <v-col>
          <v-chip v-for="tag in tags" :key="tag.id" @click="loadPostsByTagId(tag.id)">
            {{ tag.name }}
          </v-chip>
        </v-col>
      </v-chip-group>
    </v-row>
    <v-row v-if="isNews === true">
      <v-col>
        <v-card v-for="post in posts" :key="post.id" :to="{name: 'single-news', params: {id: post.id}}">
          <v-card-text v-html="post.excerpt.rendered"></v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row v-if="isNews === false">
      <v-col>
        <v-card>
          <v-card-text>No such news</v-card-text>
        </v-card>
      </v-col>
    </v-row>

  </div>
</template>
<script>
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import axios from "axios";
import { Tweet } from "vue-tweet-embed"

var db = firebase.firestore();
var realdb = firebase.database();

export default {
  components: {
    Tweet,
  },
  data() {
    return {
      posts: [],
      tags: [],
      isNews: true
    }
  },
  methods: {
    async loadPostsByTagId(id) {
      const axiosResponse = await axios
          .get('https://newsadmin.sota-network.com/wp-json/wp/v2/posts?tags=' + id);
     this.isNews = axiosResponse.data.length !== 0;
     this.posts = axiosResponse.data;
    }
  },
  async created() {
    await axios
        .get('https://newsadmin.sota-network.com/wp-json/wp/v2/posts')
        .then(response => (this.posts = response.data));

    await axios
        .get('https://newsadmin.sota-network.com/wp-json/wp/v2/tags')
        .then(response => (this.tags = response.data));
  }
}
</script>
<style>
.expansion {
  display: block;
  padding: 0 55px;
}
blockquote.twitter-tweet {
  display: inline-block;
  font-family: "Helvetica Neue", Roboto, "Segoe UI", Calibri, sans-serif;
  font-size: 12px;
  font-weight: bold;
  line-height: 16px;
  border-color: #eee #ddd #bbb;
  border-radius: 5px;
  border-style: solid;
  border-width: 1px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.15);
  margin: 10px 5px;
  padding: 0 16px 16px 16px;
  max-width: 468px;
}

blockquote.twitter-tweet p {
  font-size: 16px;
  font-weight: normal;
  line-height: 20px;
}

blockquote.twitter-tweet a {
  color: inherit;
  font-weight: normal;
  text-decoration: none;
  outline: 0 none;
}

blockquote.twitter-tweet a:hover,
blockquote.twitter-tweet a:focus {
  text-decoration: underline;
}
</style>