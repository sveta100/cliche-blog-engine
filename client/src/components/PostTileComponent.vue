<template>
  <div class="card mb-xs rel">
    <date-format :raw-date="post.createdAt" />
    <div class="actions pb-xs">
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

    <div class="card__header pb-md">
      <div class="fl-row js align-baseline">
        <h2 @click="viewPost(post._id)">
          {{ post.title }}
        </h2>
      </div>
      <div class="card__subheader js">
        <span
          class="card__draft"
          v-if="post.isDraft"
        >
          Draft
          <font-icon icon="flag" />

        </span>
      </div>
    </div>
    <div class="card__content-wrapper">
      <div class="card__thumb" />
      <MarkdownToHtml
        :markdown="post.summary"
        class="card__content"
      />
    </div>
    <div class="cc-violet tb mt-xs">
      <a @click="viewPost(post._id)">READ MORE...</a>
    </div>
  </div>
</template>
<script>
import marked from 'marked';
import IconButton from './common/IconButtonComponent.vue';
import MarkdownToHtml from './MarkdownToHtmlComponent.vue';
import DateFormat from './common/DateFormatComponent.vue';

export default {
  name: 'PostTile',
  components: {
    IconButton,
    MarkdownToHtml,
    DateFormat,
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
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background: white;
  position: relative;
  padding: 5rem 5rem 5rem 15rem;

  &__draft {
    color: red;
  }

  &__header {
    align-items: flex-start;
    position: relative;
    justify-content: center;
    width: 100%;

    &:hover {
      cursor: pointer;

      & h2 {
        background:
          linear-gradient(
            90deg,
            rgba(63, 56, 182, 1) 0%,
            rgba(105, 105, 255, 1) 48%,
            rgba(140, 86, 209, 1) 100%
          );
        background-clip: text;
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

  &__subheader {
    display: flex;
    font-size: 1.5rem;
  }
}

.actions {
  position: absolute;
  right: 0;
  top: -50px;
}
</style>
