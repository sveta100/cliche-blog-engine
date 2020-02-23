import Vue from "vue";
import App from "./App.vue";
import router from "./router/router";
import Toasted from "vue-toasted";

Vue.use(Toasted);

new Vue({
  router, //injecting here so the whole app is aware of the router and accessible via this.$router
  render: h => h(App)
}).$mount("#app");
