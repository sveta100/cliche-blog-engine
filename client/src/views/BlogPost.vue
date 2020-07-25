<template>
  <div class="fl-container">
    <div class="fl-row">
      <div class="post n-mt">
        <div class="post__header pb-md mb-md">
          <h1>
            {{ post.title }}
          </h1>
          <TagList
            :options="post.tags"
            :with-background="false"
          />
        </div>
        <div class="rel">
          <date-format :raw-date="post.createdAt" />
        </div>
        <div class="post__content-wrapper mb-lg">
          <MarkdownToHtml
            :markdown="post.content"
            class="post__content"
          />
        </div>
        <div class="post__nav fl-row sb tb">
          <a
            class="post__prev"
            @click="getPrevPost()"
          >
            <font-icon icon="long-arrow-alt-left" />
            Prev post
          </a>
          <a
            class="post__next"
            @click="getNextPost()"
          > Next post
            <font-icon icon="long-arrow-alt-right" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import marked from 'marked';
import PostService from '../../services/PostService';
import MarkdownToHtml from '../components/MarkdownToHtmlComponent.vue';
import TagList from '../components/TagsListComponent.vue';
import DateFormat from '../components/common/DateFormatComponent.vue';

export default {
  name: 'BlogPost',
  components: {
    MarkdownToHtml,
    TagList,
    DateFormat,
  },
  data() {
    return {
      post: {},
      postId: this.$route.params.postId,
    };
  },

  computed: {
    compiledMarkdown() {
      return marked(this.post.content);
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
    async getNextPost() {
      const nextPost = await PostService.getNextPost(this.post.createdAt);

      if (nextPost.length > 0) {
        this.$set(this, 'post', nextPost[0]);
        const id = nextPost[0]._id;
        this.$router.push({ name: 'Blog post', params: { postId: id } });
      }
    },

    async getPrevPost() {
      const prevPost = await PostService.getPrevPost(this.post.createdAt);
      if (prevPost.length > 0) {
        this.$set(this, 'post', prevPost[0]);
        const id = prevPost[0]._id;
        this.$router.push({ name: 'Blog post', params: { postId: id } });
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.post {
  width: 100%;
  background: white;
  padding: 0 10rem 0 0;

  &__header {
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    padding: 0 0 0 15rem;
  }

  &__content {
    text-align: left;
    padding: 0 5rem 0 15rem;
  }

  &__nav {
    justify-content: space-between;
    width: 100%;
    padding: 5rem 10rem 10rem 15rem;
  }

  &__next,
  &__prev {
    &:hover {
      color: $violet;
    }
  }
}
</style>
