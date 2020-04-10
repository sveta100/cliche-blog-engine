<template>
  <div class="posts">
    <PostTile
      v-for="post in posts"
      :key="post.id"
      :post="post"
    />
  </div>
</template>

<script>
import PostTile from './PostTileComponent.vue';

export default {
	name: 'PostList',

	components: {
		PostTile,
	},
	props: {
		posts: {
			type: Array,
			default: () => [],
		},
	},
};
</script>

<style lang="scss" scoped>
.posts {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
