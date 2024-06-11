import { reactive } from 'vue';

export const store = reactive({
  api: {
    baseUrl: 'http://localhost:3000',
    apiUrls: {
      posts: '/posts',
      categories: '/categories',
      tags: '/tags',
    },
  },
  posts: [],
  categories: [],
  tags: [],
});
export default store;
