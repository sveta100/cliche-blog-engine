<template>
  <div id="nav-bar">
    <router-link
      active-class="router-link router-link--active"
      class="router-link"
      to="/"
    >
      Home
    </router-link>|
    <router-link
      active-class="router-link router-link--active"
      class="router-link"
      to="/about"
    >
      About
    </router-link>|
    <router-link
      active-class="router-link router-link--active"
      class="router-link"
      to="/addAmazingPost"
    >
      New Post
    </router-link>
  </div>
</template>
<script>
export default {
  name: "NavigationBar"
};
</script>
<style lang="scss">
#nav-bar {
  align-self: flex-end;
  height: 50px;
}

.router-link {
  text-decoration: none;
  margin: 8px;
  padding: 5px 10px;
  color: black;
  font-style: oblique;
  font-weight: 100;
  font-size: 20px;
  font-family: "Comic Neue", cursive;

  // font-family: "Palatino Linotype", "Book Antiqua", Palatino, serif;

  &--active {
    color: #b0a8b9;
  }
}
</style>

