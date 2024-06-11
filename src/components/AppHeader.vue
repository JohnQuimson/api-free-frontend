<script>
export default {
  name: 'Header',
  data() {
    return {};
  },
  methods: {},
};
</script>

<template>
  <header class="row mx-0 py-2">
    <div
      class="custom-container col-10 col-sm-11 d-flex justify-content-between px-0 align-items-center"
    >
      <!-- logo small -->
      <div class="sx d-sm-none">
        <a href="https://portoflio-jq.netlify.app/" class="cont-img">
          <img src="/img/logo/logo-small.png" alt="logo" />
        </a>
      </div>

      <!-- logo big -->
      <div class="sx d-none d-sm-block">
        <a href="https://portoflio-jq.netlify.app/" class="cont-img">
          <img src="/img/logo/logo-big.png" alt="logo" />
        </a>
      </div>
    </div>
  </header>
</template>

<style scoped lang="scss">
@use '../assets/scss/style.scss' as *;

header {
  height: 15vh;
  border: 1px solid red;
  .custom-container {
    margin: 0 auto;
    color: #f5f5f5;

    .sx {
      .cont-img {
        height: 100px;
      }
    }

    .dx {
    }
  }
}
</style>
