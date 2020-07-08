<template>
  <div class="fl-row">
    <div class="post">
      <div class="post__header pb-md">
        <h1 class="mb-md">
          {{ post.title }}
        </h1>
        <div class="post__header-date">
          <date-format
            :raw-date="post.createdAt"
            class="justify-center"
          />
        </div>
        <TagList
          :options="post.tags"
          :with-background="false"
        />
      </div>
      <div class="post__content-wrapper mb-lg">
        <MarkdownToHtml
          :markdown="post.content"
          class="post__content"
        />
      </div>
      <div class="fl-row sb cc-violet tb">
        <a
          @click="getPrevPost()"
          class="btn__prev"
        ><font-icon
          icon="long-arrow-alt-left"
        /> Prev post</a>
        <a
          class="btn__next"
          @click="getNextPost()"
        >Next post <font-icon
          icon="long-arrow-alt-right"
        /></a>
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
      const post = await PostService.getPost(
        this.postId,
      );
      this.$set(this, 'post', post);
    },
    async getNextPost() {
      const nextPost = await PostService.getNextPost(
        this.post.createdAt,
      );

      if (nextPost.length > 0) {
        this.$set(this, 'post', nextPost[0]);
        const id = nextPost[0]._id;
        this.$router.push({ name: 'Blog post', params: { postId: id } });
      }
    },

    async getPrevPost() {
      const prevPost = await PostService.getPrevPost(
        this.post.createdAt,
      );
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

  &__content {
    text-align: left;
  }

  &__nav {
    justify-content: space-between;
    width: 100%;
  }
}
</style>
