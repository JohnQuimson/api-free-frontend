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

    <h3 class="pt-3">{{ post.title }}</h3>
    <p class="description">
      {{ post.content }}
    </p>
    <!-- <ul>
      <li v-for="tag in tags">
        {{ post.tag }}
      </li>
    </ul> -->
  </div>
</template>

<style lang="scss">
.custom-card {
  background-color: var(--custom-secondary);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  width: 90%;
  padding: 1rem;

  h3 {
    color: var(--custom-white);
  }

  .description {
    margin: 0.5rem 0;
    color: var(--custom-tertiary);
  }
}
</style>
