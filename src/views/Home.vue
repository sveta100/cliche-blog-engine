<template>
  <div>
    <PostList v-bind:posts="posts" />
  </div>
</template>
<style lang="scss"></style>
<script>
import PostList from "../components/PostListComponent.vue";
import PostService from "@services/PostService";

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
