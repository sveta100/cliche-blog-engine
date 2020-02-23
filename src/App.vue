<template>
  <div id="app">
    <navigation-bar id="nav-bar" />
    <h1 id="mainTitle">In Wonderland of Programming</h1>
    <router-view></router-view>
  </div>
</template>

<script>
import NavigationBar from "./components/NavigationComponent.vue";

export default {
  name: "App",
  components: { NavigationBar }
};
</script>
<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 80%;
  display: block;
  margin-right: auto;
  margin-left: auto;
}

#nav-bar {
  margin: 0px 20px 50px 0px;
  float: left;
  height: 50px;
  width: 100%;
}

.column-one {
  width: 70%;
  float: left;
}

.column-two {
  width: 20%;
  float: right;
}
</style>
