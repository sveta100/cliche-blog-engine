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
		items: {
			type: Array,
			default: () => [],
		},
	},
	data() {
		return {
			posts: [],
		};
	},
	watch: {
		items(newVal) {
			this.posts = newVal;
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
			this.deletePostFromList(postId);
		},
		deletePostFromList(postId) {
			// eslint-disable-next-line no-underscore-dangle
			this.posts = this.posts.filter((post) => post._id !== postId);
		},

	},
};
</script>

<style lang="scss" scoped>
.posts {
  display: flex;
  flex-direction: column;
  align-items: center;

  & * {
    margin-bottom: 100px;
  }
}
</style>
