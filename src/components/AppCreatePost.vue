<script>
import { store } from '../store';
import axios from 'axios';

export default {
  data() {
    return {
      store,
      newPostData: {
        title: '',
        content: '',
        img: '',
        categoryId: '',
        tags: [],
        published: undefined,
      },
      categories: [],
      tags: [],
      errorMessage: '',
    };
  },
  methods: {
    async getCategoriesAndTags() {
      try {
        const categoriesResp = await axios.get(
          this.store.api.baseUrl + this.store.api.apiUrls.categories
        );
        this.categories = categoriesResp.data;

        const tagsResp = await axios.get(
          this.store.api.baseUrl + this.store.api.apiUrls.tags
        );
        this.tags = tagsResp.data;
      } catch (error) {
        console.error('Errore tag e category:', error);
      }
    },
    async createPost() {
      try {
        const response = await axios.post(
          this.store.api.baseUrl + this.store.api.apiUrls.posts,
          this.newPostData
        );
        console.log('Post creato con successo:', response.data);
      } catch (error) {
        console.error('Errore creazione post:', error);
        this.errorMessage = 'Errore nella creazione del post.';
      }
    },
  },
  mounted() {
    this.getCategoriesAndTags();
  },
};
</script>

<template>
  <div class="container">
    <form @submit.prevent="createPost">
      <!-- title -->
      <div class="mb-3">
        <label for="title" class="form-label">Titolo</label>
        <input
          type="text"
          class="form-control"
          id="title"
          v-model="newPostData.title"
          required
        />
      </div>
      <!-- description -->
      <div class="mb-3">
        <label for="content" class="form-label">Contenuto</label>
        <textarea
          class="form-control"
          id="content"
          v-model="newPostData.content"
          required
        ></textarea>
      </div>
      <!-- category -->
      <div class="mb-3">
        <label for="category" class="form-label">Categoria</label>
        <select
          class="form-control"
          id="category"
          v-model="newPostData.categoryId"
          required
        >
          <option value="" disabled>Seleziona una categoria</option>
          <option v-for="category in categories" :value="category.id">
            {{ category.name }}
          </option>
        </select>
      </div>
      <!-- tags -->
      <div class="mb-3">
        <label for="tags" class="form-label">Tag</label>
        <div>
          <div v-for="tag in tags" class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="checkbox"
              :id="'tag-' + tag.id"
              :value="tag.id"
              v-model="newPostData.tags"
            />
            <label class="form-check-label" :for="'tag-' + tag.id">{{
              tag.name
            }}</label>
          </div>
        </div>
      </div>
      <!-- published -->
      <div class="mb-3">
        <label class="form-check-label" for="published"> Status </label>
        <div>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="checkbox"
              id="published"
              v-model="newPostData.published"
            />
            <label class="form-check-label" for="published"> Pubblica </label>
          </div>
        </div>
      </div>

      <button type="submit" class="btn btn-primary">Crea Post</button>
      <p class="text-danger">{{ errorMessage }}</p>
    </form>
  </div>
</template>

<style lang="scss" scoped></style>
