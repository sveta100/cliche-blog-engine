/* eslint-disable vue/no-v-html */
<template>
  <div class="card mb-md">
    <div class="card__header pb-md">
      <div class="fl-row justify-sb align-baseline">
        <h1
          class="fl-grow-1"
          @click="viewPost(post._id)"
        >
          {{ post.title }}
        </h1>
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
      <div class="card__subheader">
        <div class="card__header-date">
          <date-format
            :raw-date="post.createdAt"
            class="justify-center"
          />
        </div>
      </div>
    </div>
    <div class="card__content-wrapper">
      <MarkdownToHtml
        :markdown="post.content"
        class="card__content"
      />
    </div>
    <TagsList
      :options="post.tags"
      :with-background="false"
    />
    <PostDivider
      class="mb-lg mt-lg"
      :text="post.title"
    />
  </div>
</template>
<script>
import marked from 'marked';
import DateFormat from './common/DateFormatComponent.vue';
import PostDivider from './common/PostDivider.vue';
import IconButton from './common/IconButtonComponent.vue';
import MarkdownToHtml from './MarkdownToHtmlComponent.vue';
import TagsList from './TagsListComponent.vue';


export default {
	name: 'PostTile',
	components: {
		DateFormat,
		PostDivider,
		IconButton,
		MarkdownToHtml,
		TagsList,
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

  &__header-date {
    flex-grow: 1;
  }

  &__header {
    align-items: flex-start;

    &:hover {
      cursor: pointer;
    }
  }

  &__content {
    text-align: justify;
    padding: 30px 0;
  }

  &__subheader {
    display: flex;
    padding: 15px 0;
  }
}

</style>
