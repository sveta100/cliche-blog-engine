<template>
  <div class="card mb-md">
    <div class="card__header pb-md">
      <div class="fl-row js align-baseline">
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
      <div class="card__subheader js">
        <div class="card__header-date">
          <date-format
            :raw-date="post.createdAt"
            class="justify-center"
          />
        </div>
      </div>
    </div>
    <div class="card__content-wrapper">
      <div class="card__thumb" />
      <MarkdownToHtml
        :markdown="post.summary"
        class="card__content"
      />
    </div>
    <div class="cc-violet tb">
      <a @click="viewPost(post._id)">Read more...</a>
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
  align-items: flex-start;

  &__header {
    align-items: flex-start;
    position: relative;
    justify-content: center;
    width: 100%;

    &:hover {
      cursor: pointer;

      & h1 {
        background:
          linear-gradient(
            90deg,
            rgba(63, 56, 182, 1) 0%,
            rgba(105, 105, 255, 1) 48%,
            rgba(140, 86, 209, 1) 100%
          );
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        text-decoration: underline;
      }
    }
  }

  &__content-wrapper {
    display: flex;
  }

  &__content {
    text-align: justify;
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
