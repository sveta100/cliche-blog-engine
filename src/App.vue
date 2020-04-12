<template>
  <div id="app">
    <navigation-bar id="nav-bar" />
    <div class="fl-container">
      <div class="fl-row">
        <div class="hero-wrapper">
          <div class="hero" />
          <h1 id="mainTitle">
            In "<em>Wonderland</em>" of Programming
          </h1>
        </div>
      </div>
      <div class="margin-top-big">
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

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-size: 10px;
}

body {
  font-family: 'Ubuntu', sans-serif;
  font-size: 1.6rem;
}

h1,
h2,
h3 {
  color: $secondary;
  font-family: 'VT323', monospace;
  //font-family: 'Comic Neue', cursive;
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
  //font-family: 'Comic Neue', cursive;
  font-size: 2.5em;
  font-weight: 500;
  position: absolute;
  color: white;
  top: 40%;
  left: 50%;
  width: 100%;
  transform: translate(-50%, -40%);
}

.hero-wrapper {
  position: relative;
  min-width: 114rem;
}

.hero {
  background-image: url("./assets/images/hero.png");
  height: 150px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50%;
  width: 100%;
  filter: blur(1px);

  /* &::after {
    position: absolute;
    bottom: 0;
    top: 0;
    left: 0;
    right: 0;
    content: '';
    background: rgba(white, 0.5);
  } */
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
