import Vue from 'vue';
import Toasted from 'vue-toasted';
import App from './App.vue';
import router from './router/router';

Vue.use(Toasted);

new Vue({
	router, // injecting here so the whole app is aware of the router and accessible via this.$router
	render: (h) => h(App),
}).$mount('#app');
