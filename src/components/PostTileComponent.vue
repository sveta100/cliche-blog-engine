<template>
  <div class="card mb-md">
    <div class="card__header pb-md">
      <div class="fl-row justify-center align-baseline">
        <h1 @click="viewPost(post._id)">
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
      <div class="card__subheader justify-center">
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
  </div>
</template>
<script>
import marked from 'marked';
import DateFormat from './common/DateFormatComponent.vue';
import IconButton from './common/IconButtonComponent.vue';
import MarkdownToHtml from './MarkdownToHtmlComponent.vue';

export default {
  name: 'PostTile',
  components: {
    DateFormat,
    IconButton,
    MarkdownToHtml,
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

  &__header {
    align-items: flex-start;
    position: relative;
    justify-content: center;

    &:hover {
      cursor: pointer;
    }
  }

  &__content {
    text-align: justify;
    padding: 30px 0;
  }

  &__actions {
    position: absolute;
    opacity: 0;
    transition: opacity 0.3s ease-in;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
  }

  &__subheader {
    display: flex;
    font-size: 1.5rem;
    align-items: center;
  }
}

.card__header:hover .card__actions {
  opacity: 1;
}
</style>
