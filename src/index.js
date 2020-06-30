import Vue from 'vue';
import Toasted from 'vue-toasted';
import AsyncComputed from 'vue-async-computed';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import App from './App.vue';
import router from './router/router';
import '../node_modules/prismjs/themes/prism.css';
import '../node_modules/prismjs/themes/prism-okaidia.css';

library.add(fas);

Vue.use(AsyncComputed);
Vue.use(Toasted);
Vue.component('FontIcon', FontAwesomeIcon);

new Vue({
  router, // injecting here so the whole app is aware of the router and accessible via this.$router
  render: (h) => h(App),
}).$mount('#app');
