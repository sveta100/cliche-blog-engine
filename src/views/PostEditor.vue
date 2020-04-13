<template>
  <div>
    <h3>Any great thoughts to express?</h3>
    <MarkdownPostEditor :blog-post="post" />
  </div>
</template>
<script>
import MarkdownPostEditor from '../components/MarkdownPostEditor.vue';
import PostService from '../../services/PostService';

export default {
	name: 'PostEditor',
	components: {
		MarkdownPostEditor,
	},
	data() {
		return {
			post: {
				title: '',
				content: '',
			},
			postId: this.$route.params.postId,
		};
	},
	created() {
		if (this.postId) { this.init(); }
	},
	methods: {
		async init() {
			const post = await PostService.getPost(this.postId);
			this.$set(this, 'post', post);
		},
	},
};
</script>
