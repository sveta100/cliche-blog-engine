<template>
  <div id="app">
    <navigation-bar id="nav-bar" />
    <div class="hero-wrapper mb-lg">
      <h1 id="mainTitle">
        In Wonderland of Programming.
      </h1>
      <div class="hero" />
      <div class="hero-wrapper__decor-container" />
    </div>
    <div class="fl-container">
      <div class=" mt-xl">
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
  components: {
    NavigationBar,
    ActionModal,
    Footer,
  },
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
  font-size: 1.6rem;
  font-family: 'Montserrat', sans-serif;
  line-height: 1.6;
}

h1,
h2,
h3 {
  color: $secondary;
}

h1 {
  // font-size: 5rem;
  font-weight: 500;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

h2 {
  font-size: 4rem;
  font-weight: 100;
}

a {
  &:hover {
    cursor: pointer;
  }
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
  font-size: 3em;
  font-weight: 500;
  padding: 0 5rem;
  text-align: left;
  color: #2f2e41;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.hero-wrapper {
  width: 100%;
  display: flex;
  padding: 0 5rem;
  margin-top: 15rem;
  align-items: flex-start;
}

.hero {
  background-image: url('./assets/images/undraw_web_development_w2vv.svg');
  height: 400px;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: top;
  width: 100%;
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
