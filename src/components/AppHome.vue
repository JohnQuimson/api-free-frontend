<script>
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
  <main class="main d-flex justify-content-center">
    <router-link
      :to="{ name: 'posts' }"
      class="btn btn-success mt-5 py-3 px-4"
      style="align-self: flex-start"
      >posts</router-link
    >
  </main>
</template>

<style lang="scss">
@use '../assets/scss/style.scss' as *;

.main {
  height: 75vh;
  background-color: var(--custom-primary);
}
</style>
