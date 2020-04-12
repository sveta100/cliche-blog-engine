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
import PostService from '../../services/PostService';

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
	created() {
		this.$root.$on('deletePost', async (postId) => {
			await this.deletePost(postId);
		});
	},
	methods: {
		async deletePost(postId) {
			await PostService.deleteBlogPost(postId);
			this.$toasted.show('The blog post deleted');
			// eslint-disable-next-line no-underscore-dangle
			const deletedPost =	this.posts.find((post) => post._id === postId);
			this.posts.splice(deletedPost, 1);
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
