<template>
  <div id="app">
    <navigation-bar id="nav-bar" />
    <div class="flex-container">
      <h1 id="mainTitle">
        In Wonderland of Programming
      </h1>
      <router-view />>
    </div>
  </div>
</template>

<script>
import NavigationBar from './components/NavigationComponent.vue';

export default {
	name: 'App',
	components: { NavigationBar },
};
</script>
<style lang="scss">
body {
  font-family: "Roboto", sans-serif;
}

h1,
h2,
h3 {
  color: $secondary;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $primary;
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: auto;
  margin-left: auto;
}

#mainTitle {
  font-family: "Comic Neue", cursive;
  font-size: 3em;
  clear: both;
  font-weight: 600;
  margin-bottom: 50px;
}

.flex-container {
  display: flex;
  width: 100%;
  flex-direction: column;
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
