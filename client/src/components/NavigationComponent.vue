<template>
  <div id="nav-bar">
    <router-link
      exact-active-class="logo no-anchor"
      class="logo no-anchor"
      to="/"
      tag="a"
    >
      Sveta's Blog
    </router-link>

    <router-link
      active-class="router-link"
      class="router-link no-anchor"
      to="/"
    >
      Articles
    </router-link>|
    <router-link
      active-class="router-link "
      class="router-link no-anchor"
      to="/about"
    >
      About
    </router-link>|
    <router-link
      active-class="router-link "
      class="router-link no-anchor"
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
  padding: 1rem 8rem;
  position: absolute;
  top: 0;
  justify-content: flex-end;
  left: 0;
  right: 0;
  z-index: 1;
  display: flex;
  align-items: center;
  width: 100%;
  background-color: $violet;
}

.logo {
  width: 100px;
  align-self: flex-start;
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  color: white;
  display: flex;
  align-items: center;
}

.router-link {
  text-decoration: none;
  margin: 8px;
  padding: 5px 10px;
  color: white;
  font-weight: 500;
  font-size: 18px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.router-link-exact-active {
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: 100%;
    left: 50%;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: $complimentary;
  }
}
</style>
