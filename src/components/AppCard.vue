<script>
export default {
  props: ['post'],
};
</script>

<template>
  <div class="custom-card">
    <div>
      <img
        src="https://t4.ftcdn.net/jpg/04/70/29/97/360_F_470299797_UD0eoVMMSUbHCcNJCdv2t8B2g1GVqYgs.jpg"
        class="card-img-top"
        alt="..."
      />
    </div>

    <!-- <div v-else>
      <img
        class=""
        src="https://images.unsplash.com/photo-1621075160523-b936ad96132a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        alt="NFT"
      />
    </div> -->

    <h2>{{ post.title }}</h2>
    <p class="description">
      {{ post.content }}
    </p>
  </div>
</template>

<style lang="scss">
.custom-card {
  border: 1px solid red;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  width: 90%;
  padding: 1rem;
  .tokenImage {
    border-radius: 0.5rem;
    max-width: 100%;
    height: 250px;
    object-fit: cover;
  }
  .description {
    margin: 0.5rem 0;
    color: #a89ec9;
  }
  .tokenInfo {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
