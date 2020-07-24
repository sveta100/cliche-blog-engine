<template>
  <div class="card mb-md">
    <div class="card__side-section">
      <div class="card__header-date">
        <p class="fs-40">
          {{ moment(post.createdAt).format('do') }}
        </p>
        <p> {{ moment(post.createdAt).format('MMM yyyy') }}</p>
      </div>
    </div>
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
      <div class="card__subheader js" />
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
import moment from 'moment';
import IconButton from './common/IconButtonComponent.vue';
import MarkdownToHtml from './MarkdownToHtmlComponent.vue';

export default {
  name: 'PostTile',
  components: {
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
    moment,

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
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background: white;
  position: relative;
  padding: 5rem 5rem 5rem 15rem;

  &__side-section {
    width: 150px;
    height: 150px;
    background-color: $green;
    border-radius: 50%;
    position: absolute;
    display: flex;
    align-items: center;
    color: white;
    justify-content: center;
    left: -75px;
    top: 50%;
    transform: translateY(-50%);
  }

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
