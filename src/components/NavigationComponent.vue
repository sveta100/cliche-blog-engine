<template>
  <div id="nav-bar">
    <router-link
      active-class="router-link router-link--active"
      class="router-link"
      to="/"
    >Home</router-link> |
    <router-link
      active-class="router-link router-link--active"
      class="router-link"
      to="/about"
    >About</router-link> |
    <router-link
      active-class="router-link router-link--active"
      class="router-link"
      to="/addAmazingPost"
    >New Post</router-link>
  </div>

</template>
<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class NavigationBar extends Vue {}
</script>
<style lang="scss">
#nav-bar {
  margin: 20px;
}

.router-link {
  text-decoration: none;
  margin: 8px;
  padding: 5px 10px;
  color: black;

  font-style: oblique;
  font-weight: 100;
  font-size: 20px;
  font-family: "Palatino Linotype", "Book Antiqua", Palatino, serif;

  &--active {
    color: #b0a8b9;
  }
}

#mainTitle {
  font-family: "Brush Script MT", cursive;
  font-size: 3em;
  clear: both;
  font-weight: 100;
}
</style>

