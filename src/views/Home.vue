<template>
  <div class="fl-row">
    <div class="fl-row__col-10">
      <PostList
        class="post-list"
        :items="posts"
      />
    </div>
    <div class="fl-row__col-2">
      <section class="section__right">
        <img
          class="portrait mb-md"
          src="../assets/images/portrait.jpg"
        >
        <h4 class="mb-md">
          Categories
        </h4>
        <TagsList :options="tags" />
      </section>
    </div>
  </div>
</template>
<script>
import PostService from '../../services/PostService';
import PostList from '../components/PostListComponent.vue';
import TagsList from '../components/TagsListComponent.vue';
import TagService from '../../services/TagService';

export default {
	name: 'Home',
	components: {
		PostList,
		TagsList,
	},
	data() {
		return {
			posts: [],
			tags: [],
		};
	},
	created() {
		this.init();
	},
	methods: {
		async init() {
			await	this.getPosts();
			await	this.getTags();
		},
		async getTags() {
			const tags = await TagService.getTags();
			this.$set(this, 'tags', tags);
		},
		async getPosts() {
			await PostService.getPublishedPosts().then((posts) => {
				this.$set(this, 'posts', posts);
			});
		},
	},
};
</script>
<style lang="scss">


.portrait {
  border-radius: 50%;
  max-width: 100px;
}

.section {
  &__right {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>
