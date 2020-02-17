<template>
  <form class="editor" @submit="createPost">
    <div class="editor__title-area">
      <label class="text-input__label">Blog post title:</label>
      <input type="text" class="text-input__input-box" v-model="post.title" title="post-title" />
    </div>
    <div class="editor__area">
      <textarea class="editor__area__textarea" :value="input" @input="update" debounce="300" />
      <div class="editor__area__preview" v-html="compiledMarkdown"></div>
    </div>

    <Button class="editor__button editor__button--right">Post</Button>
  </form>
</template>
<script>
import marked from "marked/index";
import Button from "../components/common/ButtonComponent.vue";
import PostService from "../../services/PostService";

export default {
  name: "MarkdownPostEditor",
  data() {
    return {
      input: "# hello",
      post: {
        title: "Great post",
        content: ""
      }
    };
  },
  components: {
    Button
  },
  computed: {
    compiledMarkdown: function() {
      return marked(this.input, { sanitize: true });
    }
  },
  methods: {
    update(e) {
      this.input = e.target.value;
    },
    createPost(e) {
      e.preventDefault();
      let curObj = this;
      this.post.content = this.input;
      PostService.createBlogPost(this.post);
    }
  }
};
</script>

<style lang="scss" scoped>
$font-size: 20px;
$margin: 10px;

.editor {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  min-height: 400px;

  & .text-input__input-box {
    padding: 10px;
    min-width: 400px;

    &:focus {
      border-width: 0 0 1px 0;
      border-color: darkgray;
      outline: none;
    }
  }

  &__title-area {
    margin-bottom: 30px;
  }

  &__area {
    display: flex;
    height: 50vh;

    &__textarea {
      width: 50%;
      font-size: $font-size;
    }

    &__preview {
      height: 100%;
      background-color: #fcf8ff;
      width: 50%;
    }
  }

  &__button {
    &--right {
      margin-left: auto;
    }
  }
}
</style>

