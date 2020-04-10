/* eslint-disable vue/no-v-html */
<template>
  <div class="card margin-bottom">
    <div class="card__header">
      <h2>
        {{ post.title }}
      </h2>
    </div>
    <div class="card__header-date">
      <date-format :raw-date="post.createdAt" />
    </div>
    <div class="card__content-wrapper">
      <p
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

export default {
	name: 'PostTile',
	components: {
		DateFormat,
		PostDivider,
	},
	props: {
		post: {
			type: Object,
			default: () => {},
		},
	},
	computed: {
		compiledMarkdown() {
			return marked(this.post.content, { sanitize: true });
		},
	},
};
</script>

<style lang="scss" scoped>
.card {
  width: 70rem;
  display: flex;
  flex-direction: column;

  &__content {
    text-align: justify;
  }

  &:hover {
    cursor: pointer;
  }
}

.left-header {
  float: left;
  clear: both;
  margin: 10px 5px 0 5px;
}

</style>
