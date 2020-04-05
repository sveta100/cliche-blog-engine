/* eslint-disable vue/no-v-html */
<template>
  <form class="editor">
    <div class="editor__title-area">
      <input
        v-model="post.title"
        type="text"
        placeholder="Blog post title:"
        class="text-input__input-box margin-bottom"
        title="post-title"
      >
      <textarea
        v-model="post.summary"
        type="text"
        placeholder="Blog post summary:"
        class="textarea"
        title="post-title"
      />
    </div>

    <div class="editor__area">
      <textarea
        class="textarea editor__writer"
        :value="input"
        debounce="300"
        @input="update"
      />
      <div
        class="editor__preview"
        v-html="compiledMarkdown"
      />
    </div>
    <div class="editor__buttons">
      <primary-button
        :name="'Save as Draft'"
        @click="createPost(true)"
      />
      <primary-button
        :name="'Publish'"
        @click="createPost(false)"
      />
    </div>
  </form>
</template>
<script>
import marked from 'marked';
import PostService from '../../services/PostService';
import PrimaryButton from './common/ButtonComponent.vue';

export default {
	name: 'MarkdownPostEditor',
	components: {
		PrimaryButton,
	},
	data() {
		return {
			input: '# hello',
			post: {
				title: 'Great post',
				content: '',
				isDraft: true,
			},
		};
	},
	computed: {
		compiledMarkdown() {
			return marked(this.input, { sanitize: true });
		},
	},
	methods: {
		update(e) {
			this.input = e.target.value;
		},
		async createPost(isDraft) {
			this.post.content = this.input;
			this.post.isDraft = isDraft;
			await PostService.createBlogPost(this.post);
			this.$toasted.show('You greatest post was saved');
			this.$router.push('/');
		},
	},
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
    margin-bottom: 2rem;
    width: 100%;
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
  border-color: #aca7cb;
  width: 50%;

  &:focus {
    outline: none;
    border-width: 2px;
  }
}
</style>
