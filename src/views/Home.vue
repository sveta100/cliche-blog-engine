<template>
  <div>
    <PostTile v-for="post in posts" v-bind:key="post.id" v-bind:post="post" />
  </div>
</template>
<style lang="scss"></style>
<script>
import PostTile from "../components/common/PostTileComponent.vue";
import PostService from "../../services/PostService";
export default {
  name: "Home",
  data: function() {
    return {
      posts: []
    };
  },
  components: {
    PostTile
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
