<template>
  <div class="fl-row">
    <div class="post">
      <div class="post__header pb-md">
        <h2>
          {{ post.title }}
        </h2>
        <div class="post__header-date">
          <date-format :raw-date="post.createdAt" />
        </div>
      </div>
      <div class="post__content-wrapper mb-l">
        <MarkdownToHtml
          :markdown="post.content"
          class="card__content"
        />
      </div>
    </div>
  </div>
</template>

<script>

import marked from 'marked';
import PostService from '../../services/PostService';
import DateFormat from '../components/common/DateFormatComponent.vue';
import MarkdownToHtml from '../components/MarkdownToHtmlComponent.vue';


export default {

	name: 'BlogPost',
	components: {
		DateFormat,
		MarkdownToHtml,
	},
	data() {
		return {
			post: {},
			postId: this.$route.params.postId,
		};
	},

	computed: {
		compiledMarkdown() {
			if (this.post.content) { return	marked(this.post.content, { sanitize: true }); }
			return console.log('waiting');
		},

	},
	created() {
		this.init();
	},
	methods: {
		async init() {
			const post = await PostService.getPost(this.postId);
			this.$set(this, 'post', post);
		},
	},


};

</script>
<style lang="scss" scoped>
  .post {
    width: 100%;
  }
</style>
