<template>
  <div id="nav-bar">
    <router-link
      active-class="router-link "
      class="router-link"
      to="/"
    >
      Articles
    </router-link>|
    <router-link
      active-class="router-link "
      class="router-link"
      to="/about"
    >
      About
    </router-link>|
    <router-link
      active-class="router-link "
      class="router-link"
      to="/post-editor"
    >
      Post Editor
    </router-link>
  </div>
</template>
<script>
export default {
	name: 'NavigationBar',
};
</script>
<style lang="scss">
#nav-bar {
  align-self: flex-end;
  padding: 10px 20px;
}

.router-link {
  text-decoration: none;
  margin: 8px;
  padding: 5px 10px;
  color: black;
  font-weight: 100;
  font-size: 20px;
}

.router-link-exact-active {
  color: #b0a8b9;
}
</style>
