import { createRouter, createWebHistory } from 'vue-router';

import AppHome from './components/AppHome.vue';
import AppPosts from './components/AppPosts.vue';
import AppCreatePost from './components/AppCreatePost.vue';

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 };
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: AppHome,
    },
    // {
    //   path: '/posts/:slug',
    //   name: 'post',
    //   component: AppPostSingle,
    // },
    {
      path: '/posts',
      name: 'posts',
      component: AppPosts,
    },
    {
      path: '/posts/create',
      name: 'create-post',
      component: AppCreatePost,
    },
    // {
    //   path: '/:pathMatch(.*)*',
    //   name: 'NotFound',
    //   component: NotFound,
    // },
  ],
});

export { router };
