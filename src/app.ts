import Vue from "vue";
import App from "./App.vue";
import router from "./router/router";

new Vue({
  router, //injecting here so the whole app is aware of the router and accessible vi this.$router
  render: h => h(App)
}).$mount("#app");
