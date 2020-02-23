<template>
  <form class="editor" @submit="createPost">
    <check-box
      class="editor__draft-checkbox"
      :label="'Still a Draft'"
      v-model="isDraft"
    />
    <div class="editor__title-area">
      <input
        type="text"
        placeholder="Blog post title:"
        class="text-input__input-box"
        v-model="post.title"
        title="post-title"
      />
    </div>

    <div class="editor__area">
      <textarea
        class="editor__area__textarea"
        :value="this.input"
        @input="update"
        debounce="300"
      />
      <div class="editor__area__preview" v-html="compiledMarkdown"></div>
    </div>
    <div class="editor__buttons">
      <primary-button :name="'Publish'" />
    </div>
  </form>
</template>
<script>
import marked from "marked/index";
import PrimaryButton from "../components/common/ButtonComponent.vue";
import CheckBox from "../components/common/CheckBoxComponent.vue";
import PostService from "../../services/PostService";

export default {
  name: "MarkdownPostEditor",
  data() {
    return {
      input: "# hello",
      isDraft: true,
      post: {
        title: "Great post",
        content: "",
        isDraft: true
      }
    };
  },
  components: {
    PrimaryButton,
    CheckBox
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
    async createPost(e) {
      e.preventDefault();
      let curObj = this;
      this.post.content = this.input;
      this.post.isDraft = this.isDraft;
      console.log(this.isDraft);
      await PostService.createBlogPost(this.post);
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
    height: 50vh;
    width: 100%;

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

  &__buttons {
    width: 100%;
    display: flex;
    justify-content: flex-end;
  }
}
</style>
