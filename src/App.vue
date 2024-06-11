<script>
import AppHeader from './components/AppHeader.vue';
import AppHome from './components/AppHome.vue';
import AppFooter from './components/AppFooter.vue';

export default {
  name: 'App',

  components: {
    AppHeader,
    AppHome,
    AppFooter,
  },

  data() {
    return {};
  },
};
</script>

<template>
  <AppHeader />
  <router-view></router-view>
  <AppFooter />
</template>

<style lang="scss"></style>
