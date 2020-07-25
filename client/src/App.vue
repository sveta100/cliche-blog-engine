<template>
  <div id="app">
    <navigation-bar id="nav-bar" />
    <hero />
    <router-view />
    <Footer />
    <ActionModal />
  </div>
</template>

<script>
import Hero from './components/HeroComponent.vue';
import NavigationBar from './components/NavigationComponent.vue';
import Footer from './components/FooterComponent.vue';
import ActionModal from './components/common/ActionModalComponent.vue';

export default {
  name: 'App',
  components: {
    NavigationBar,
    ActionModal,
    Footer,
    Hero,
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
  font-family: 'Nunito', sans-serif;
  line-height: 1.8;
}

h1,
h2,
h3 {
  color: $secondary;
  font-family: 'Heebo', sans-serif;
  text-align: left;
  line-height: 1.25;
  font-weight: 800;
}

h1 {
  font-size: 5rem;
}

h2 {
  font-size: 3.5rem;
}

h3 {
  font-size: 2.5rem;
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
  background: #f8f8f8;
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
