<template>
  <div id="app">
    <navigation-bar id="nav-bar" />
    <div class="hero-wrapper mb-lg">
      <div class="hero" />
      <h1 id="mainTitle">
        In "<em>Wonderland</em>" of Programming
      </h1>
    </div>
    <div class="fl-container">
      <div class="mt-lg">
        <router-view />
      </div>
    </div>
    <Footer />
    <ActionModal />
  </div>
</template>

<script>
import NavigationBar from './components/NavigationComponent.vue';
import Footer from './components/FooterComponent.vue';
import ActionModal from './components/common/ActionModalComponent.vue';

export default {
	name: 'App',
	components: { NavigationBar, ActionModal, Footer },
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

body,
input,
textarea {
  font-size: 1.8rem;
  font-family: 'Montserrat', sans-serif;
  line-height: 1.8;
}

h1,
h2,
h3 {
  color: $secondary;
}

h1 {
  font-size: 5rem;
  font-weight: 100;
  font-family: 'Knewave', cursive;
}

h2 {
  font-size: 4rem;
  font-weight: 100;
}

#app {
  position: relative;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $primary;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: auto;
  margin-left: auto;
  font-size: 1.8rem;
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
  width: 100%;
}

.hero {
  background-image: url("./assets/images/hero.png");
  height: 300px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50%;
  width: 100%;
  filter: blur(2px);
}

.flex-container {
  display: flex;
  width: 100%;
  flex-direction: column;
}

pre {
  padding: 10px;
  margin: 3rem 0;
  background: black;
  border-radius: 10px;
  overflow-x: auto;

  & code {
    text-align: center;
  }
}
</style>
