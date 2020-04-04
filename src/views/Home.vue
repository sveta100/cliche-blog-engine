<template>
  <div class="home-container">
    <div class="home-container__left">
      <PostList v-bind:posts="posts" />
    </div>
    <div class="home-container__right">
      <img class="portrait" src="../assets/images/portrait.jpg" />
    </div>
  </div>
</template>
<script>
import PostList from "../components/PostListComponent.vue";
import PostService from "@services/PostService";
import PortraitImg from "../assets/images/portrait.jpg";

export default {
  name: "Home",
  data: function() {
    return {
      posts: []
    };
  },
  components: {
    PostList
  },
  methods: {
    async init() {
      PostService.getPublishedPosts().then(
        (posts => {
          console.log(this);
          this.$set(this, "posts", posts);
        }).bind(this)
      );
    }
  },
  created() {
    this.init();
  }
};
</script>
<style lang="scss">
.home-container {
  display: flex;
  justify-content: space-between;
}

.portrait {
  border-radius: 50%;
  max-width: 100px;
}
</style>
