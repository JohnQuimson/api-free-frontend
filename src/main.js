import { createApp } from 'vue';

// CSS entry point
import './assets/scss/style.scss';
// JS entry point
import './assets/js/main';

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap';

// import route
import { router } from './router';

// file start Vue
import App from './App.vue';

createApp(App).use(router).mount('#app');
