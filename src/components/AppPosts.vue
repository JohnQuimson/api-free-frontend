<script>
import axios from 'axios';
import { store } from '../store.js';

export default {
  name: 'Posts',
  data() {
    return {
      store,
      posts: [],
    };
  },
  mounted() {
    this.getPosts();
  },
  methods: {
    getPosts() {
      axios
        .get(this.store.api.baseUrl + this.store.api.apiUrls.posts)
        .then((response) => {
          console.log(response.data);
          this.posts = response.data.data;
          console.log(this.store.api.baseUrl + this.store.api.apiUrls.posts);
        })
        .catch((error) => {
          console.error('Posts error:', error);
        });
    },
  },
};
</script>

<template>
  <div>
    <h1>Posts</h1>
    <ul>
      <li v-for="post in posts">
        {{ post.title }}
      </li>
    </ul>
  </div>
</template>

<style lang="scss">
@import '../assets/scss/partials/variables.scss';
</style>
