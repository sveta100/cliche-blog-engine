/* eslint-disable vue/no-v-html */
<template>
  <div>
    <div class="card">
      <div class="left-header">
        <h2 id="post-title">
          {{ post.title }}
        </h2>
        <p id="post-date-header">
          <date-format :raw-date="post.createdAt" />
        </p>
      </div>
      <div class="container">
        <p
          class="card__content"
          v-html="compiledMarkdown"
        />
        <h5>Read more...</h5>
      </div>
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
  width: 60%;
  margin: 10px;
  padding: 10px;
  display: flex;
  flex-direction: column;
}

.card:hover {
  cursor: pointer;
}

.left-header {
  float: left;
  clear: both;
  margin: 10px 5px 0 5px;
}

#card-img {
  width: 100%;
  height: 30%;
  clear: both;
}

#post-title {
  margin: 0 5px;
}

#post-date-header {
  margin: 0 5px;
  float: left;
}

</style>
