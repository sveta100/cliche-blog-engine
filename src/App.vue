<template>
  <div id="app">
    <navigation-bar id="nav-bar" />
    <div class="fl-container">
      <div class="fl-row">
        <div class="fl-row__col-10 margin-bottom-big">
          <h1 id="mainTitle">
            In Wonderland of Programming
          </h1>
        </div>
      </div>
      <div class="fl-row">
        <router-view />
      </div>
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
html {
  font-size: 10px;
}

body {
  font-family: 'Poppins', sans-serif;
  font-size: 1.6rem;
}

h1,
h2,
h3 {
  color: $secondary;
  font-family: 'Comic Neue', cursive;
}

h2 {
  font-size: 4rem;
  font-weight: 100;
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
  font-family: 'Comic Neue', cursive;
  font-size: 3em;
  clear: both;
  font-weight: 500;
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
