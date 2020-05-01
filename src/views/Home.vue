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
        <TagsList />
      </section>
    </div>
  </div>
</template>
<script>
import PostService from '../../services/PostService';
import PostList from '../components/PostListComponent.vue';
import TagsList from '../components/TagsListComponent.vue';

export default {
	name: 'Home',
	components: {
		PostList,
		TagsList,
	},
	data() {
		return {
			posts: [],
		};
	},
	created() {
		this.init();
	},
	methods: {
		async init() {
			PostService.getPublishedPosts().then((posts) => {
				console.log(this);
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
