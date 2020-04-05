<template>
  <div>
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
