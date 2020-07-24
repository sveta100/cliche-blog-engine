<template>
  <main>
    <div class="fl-container">
      <div class=" mt-xl">
        <div class="fl-row">
          <div class="fl-row__col-9">
            <PostList
              class="post-list"
              :items="posts"
            />
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
<script>
import PostService from '../../services/PostService';
import PostList from '../components/PostListComponent.vue';

import TagService from '../../services/TagService';

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
      await this.getTags();
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
    padding: 2.5rem 2rem;
  }
}
</style>
