<template>
  <main>
    <div class="fl-container">
      <div class=" mt-xl">
        <div class="fl-row">
          <PostList
            class="post-list"
            :items="posts"
          />
        </div>
      </div>
    </div>
  </main>
</template>
<script>
import PostService from '../../services/PostService';
import PostList from '../components/PostListComponent.vue';

export default {
  name: 'Home',
  components: {
    PostList,
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
      await this.getPosts();
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
.post-list {
  margin: 0 5rem;
}

.section {
  &__right {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2.5rem 2rem;
  }
}
</style>
