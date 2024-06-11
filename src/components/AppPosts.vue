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
  <!-- no posts  -->
  <section
    v-if="posts.length === 0"
    id="no-posts"
    class="d-flex align-items-center flex-column"
  >
    <h2 class="mt-5">Non è presente alcun POST</h2>
    <div class="add-cont d-flex flex-column align-items-center">
      <p>Aggiungine qualcuno</p>
      <router-link :to="{ name: 'create-post' }" class="add-btn">
        <i class="fa-solid fa-plus"></i
      ></router-link>
    </div>
  </section>

  <!-- if posts.lenght > 0  -->
  <section v-else id="posts" class="pb-5">
    <div class="d-flex justify-content-between align-items-center px-5 py-5">
      <router-link :to="{ name: 'home' }" class="back-btn align-self-center"
        ><i class="fa-solid fa-arrow-left-long"></i
      ></router-link>
      <h1>Posts</h1>
      <router-link
        :to="{ name: 'create-post' }"
        class="add-btn align-self-center"
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
    <div class="row container mx-auto g-3">
      <div
        v-for="post in posts"
        class="col-12 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center"
      >
        <AppCard :post="post" />
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@use '../assets/scss/style.scss' as *;

#no-posts {
  height: 75vh;
  background-color: var(--custom-primary);

  h2 {
    color: var(--custom-white);
  }

  .add-cont {
    p {
      color: var(--custom-light);
    }

    .add-btn {
      background-color: var(--custom-contrast);
      color: var(--custom-white);
      text-decoration: none;
      padding: 10px 20px;
      border-radius: 10px;

      &:hover {
        background-color: #ec8a7d;
      }
    }
  }
}

#posts {
  background-color: var(--custom-primary);

  h1 {
    color: var(--custom-white);
  }

  .back-btn {
    color: var(--custom-light);
    font-size: 30px;
  }

  .add-btn {
    background-color: var(--custom-contrast);
    color: var(--custom-white);
    text-decoration: none;
    padding: 10px 20px;
    border-radius: 10px;

    &:hover {
      background-color: #ec8a7d;
    }
  }
}
</style>
