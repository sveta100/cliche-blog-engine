/* eslint-disable vue/no-v-html */
<template>
  <div class="card margin-bottom">
    <div class="card__header pb-md">
      <div class="fl-row justify-sb">
        <h2
          class="fl-grow-1"
          @click="viewPost(post._id)"
        >
          {{ post.title }}
        </h2>
        <div class="card__actions">
          <IconButton
            :icon="'trash'"
            class="mr-xs"
            @click="deletePost(post._id)"
          />
          <IconButton
            :icon="'pen'"
            @click="editPost(post._id)"
          />
        </div>
      </div>

      <div class="card__header-date">
        <date-format :raw-date="post.createdAt" />
      </div>
    </div>
    <div class="card__content-wrapper margin-bottom-big">
      <div
        class="card__content"
        v-html="compiledMarkdown"
      />
      <h5>Read more...</h5>
    </div>
    <PostDivider :text="post.title" />
  </div>
</template>
<script>
import marked from 'marked';
import DateFormat from './common/DateFormatComponent.vue';
import PostDivider from './common/PostDivider.vue';
import IconButton from './common/IconButtonComponent.vue';


export default {
	name: 'PostTile',
	components: {
		DateFormat,
		PostDivider,
		IconButton,
	},
	props: {
		post: {
			type: Object,
			default: () => {},
		},
	},
	computed: {
		compiledMarkdown() {
			if (!this.post.content) return '';
			return marked(this.post.content);
		},
	},
	methods: {
		viewPost(postId) {
			this.$router.push({ name: 'Blog post', params: { postId } });
		},
		deletePost(postId) {
			this.$root.$emit('showModal', () => {
				this.$root.$emit('deletePost', postId);
			});
		},
		editPost(postId) {
			this.$router.push({ name: 'Edit post', params: { postId } });
		},
	},
};
</script>

<style lang="scss" scoped>
.card {
  width: 70rem;
  display: flex;
  flex-direction: column;

  &__header {
    &:hover {
      cursor: pointer;
    }
  }

  &__content {
    text-align: justify;
    padding: 30px 0;
  }
}

</style>
