<script>
//importazione file components

export default {
  name: 'Home',
  components: {},
  data() {
    return { loading: true };
  },
  mounted() {},
};
</script>

<template>
  <main>
    <router-link :to="{ name: 'posts' }">posts</router-link>
  </main>
</template>
