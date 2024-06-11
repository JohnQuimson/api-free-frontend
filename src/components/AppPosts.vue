<script>
import AppCard from './AppCard.vue';
import axios from 'axios';
import { store } from '../store.js';

export default {
  name: 'AppPosts',
  components: {
    AppCard,
  },
  data() {
    return {
      store,
      posts: [],
    };
  },
  created() {
    this.getPosts();
  },
  methods: {
    getPosts() {
      axios
        .get(this.store.api.baseUrl + this.store.api.apiUrls.posts)
        .then((response) => {
          console.log('i miei posts', response.data);
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
    <div
      class="d-flex justify-content-between align-items-center px-5 mt-3 mb-5"
    >
      <router-link
        :to="{ name: 'home' }"
        class="btn btn-secondary align-self-center"
        ><i class="fa-solid fa-arrow-left-long"></i
      ></router-link>
      <h1>Posts</h1>
      <router-link
        :to="{ name: 'create-post' }"
        class="btn btn-primary align-self-center"
      >
        <i class="fa-solid fa-plus"></i
      ></router-link>
    </div>

    <!-- <div class="container d-flex justify-content-center">
      <div class="row">
        <div v-for="post in posts" class="col-12 col-sm-6 col-md-4 col-lg-3">
          <AppCard :post="post" />
        </div>
      </div>
    </div> -->

    <!-- <ul class="container d-flex justify-content-center list-unstyled">
      <li v-for="post in posts">
        <AppCard :post="post" />
      </li>
    </ul> -->
    <div class="row container border mx-auto g-3">
      <div
        v-for="post in posts"
        class="col-12 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center"
      >
        <AppCard :post="post" />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
/* Stili specifici per questo componente */
</style>
