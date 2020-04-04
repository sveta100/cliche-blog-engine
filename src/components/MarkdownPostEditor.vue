<template>
  <form class="editor">
    <div class="editor__title-area">
      <input
        type="text"
        placeholder="Blog post title:"
        class="text-input__input-box margin-bottom"
        v-model="post.title"
        title="post-title"
      />
      <textarea
        type="text"
        placeholder="Blog post summary:"
        v-model="post.summary"
        class="textarea"
        title="post-title"
      />
    </div>

    <div class="editor__area">
      <textarea class="textarea editor__writer" :value="this.input" @input="update" debounce="300" />
      <div class="editor__preview" v-html="compiledMarkdown"></div>
    </div>
    <div class="editor__buttons">
      <primary-button :name="'Save as Draft'" @click="createPost(true)" />
      <primary-button :name="'Publish'" @click="createPost(false)" />
    </div>
  </form>
</template>
<script>
import marked from "marked";
import PrimaryButton from "../components/common/ButtonComponent.vue";
import CheckBox from "../components/common/CheckBoxComponent.vue";
import PostService from "../../services/PostService";

export default {
  name: "MarkdownPostEditor",
  data() {
    return {
      input: "# hello",
      post: {
        title: "Great post",
        content: "",
        isDraft: true
      }
    };
  },
  components: {
    PrimaryButton
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
    async createPost(isDraft, e) {
      let curObj = this;
      this.post.content = this.input;
      this.post.isDraft = isDraft;
      await PostService.createBlogPost(this.post);
      this.$toasted.show("You greatest post was saved");
      this.$router.push("/");
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
  justify-content: space-between;
  align-items: flex-start;

  &__draft-checkbox {
    margin-left: auto;
  }

  &__title-area {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  & .text-input__input-box {
    padding: 10px;
    min-width: 400px;
    border-width: 0 0 1px 0;
    border-color: darkgray;
    outline: none;

    &:focus {
      border-color: dodgerblue;
      box-shadow: 0 4px 6px -6px dodgerblue;
    }
  }

  &__title-area {
    margin-bottom: 2rem;
    width: 100%;
    display: flex;
    justify-content: center;
  }

  &__area {
    display: flex;
    min-height: 80vh;
    width: 100%;
  }

  &__writer {
    width: 50%;
    font-size: $font-size;
  }

  &__preview {
    background-color: #fcf8ff;
    width: 50%;
  }

  &__buttons {
    width: 100%;
    display: flex;
    justify-content: flex-end;
  }
}

.textarea {
  min-height: 100px;
  padding: 0.5rem 1rem;
  overflow: visible;
  border: 1px solid;
  border-radius: 5px;
  border-color: palevioletred;
  width: 50%;

  &:focus {
    outline: none;
    border-width: 2px;
  }
}
</style>
