<template>
  <div>
    <PostTile v-for="post in posts" v-bind:key="post.id" v-bind:post="post" />
  </div>
</template>
<style lang="scss"></style>
<script>
import PostTile from "./PostTileComponent.vue";

export default {
  name: "PostList",
  props: ["posts"],

  components: {
    PostTile
  }
};
</script>
