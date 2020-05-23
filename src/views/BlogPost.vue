<template>
  <div class="fl-row">
    <div class="post">
      <div class="post__header pb-md">
        <h1 class="mb-md">
          {{ post.title }}
        </h1>
        <div class="post__header-date">
          <date-formatz
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
          class="card__content"
        />
      </div>
      <div class="justify-center mb-md" />
    </div>
  </div>
</template>

<script>
import marked from 'marked';
import PostService from '../../services/PostService';
import MarkdownToHtml from '../components/MarkdownToHtmlComponent.vue';
import TagList from '../components/TagsListComponent.vue';

export default {
  name: 'BlogPost',
  components: {
    MarkdownToHtml,
    TagList,
  },
  data() {
    return {
      post: {},
      postId: this.$route.params.postId,
    };
  },

  computed: {
    compiledMarkdown() {
      if (this.post.content) {
        return marked(this.post.content, {
          sanitize: true,
        });
      }
      return console.log('waiting');
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
  },
};
</script>
<style lang="scss" scoped>
.post {
  width: 100%;
}
</style>
