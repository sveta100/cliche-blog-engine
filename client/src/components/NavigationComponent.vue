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
  padding: 1rem 8rem;
  position: absolute;
  top: 0;
  justify-content: flex-end;
  left: 0;
  right: 0;
  z-index: 1;
  display: flex;
  align-items: center;
}

.router-link {
  text-decoration: none;
  margin: 8px;
  padding: 5px 10px;
  color: #3a3636;
  font-weight: 500;
  font-size: 18px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.router-link-exact-active {
  opacity: 0.7;
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
