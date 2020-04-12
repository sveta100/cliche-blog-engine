/* eslint-disable vue/no-v-html */
<template>
  <form class="editor fl-row">
    <div class="editor__header">
      <input
        v-model="post.title"
        type="text"
        placeholder="Blog post title:"
        class="editor__title-input text-input margin-bottom"
        title="post-title"
      >
      <textarea
        v-model="post.summary"
        type="text"
        placeholder="Blog post summary:"
        class="editor__header-textarea textarea"
        title="post-title"
      />
    </div>
    <div class="fl-row editor__content margin-bottom ">
      <div
        class="fl-row__col-6"
      >
        <div
          class="editor__preview"
          v-html="compiledMarkdown"
        />
      </div>
      <div class="fl-row__col-6">
        <textarea
          class="textarea editor__writer"
          :value="input"
          debounce="300"
          @input="update"
        />
      </div>
    </div>
    <div class="editor__buttons fl-row__col-12">
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

.editor {
  &__header {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 2rem;
    width: 100%;
  }

  &__content {
    min-height: 60vh;
  }

  &__header-textarea {
    width: 60rem;
    height: 100px;
    padding: 10px;
  }

  & .text-input {
    padding: 10px;
    min-width: 400px;
    border-width: 0 0 1px 0;
    border-color: darkgray;
    outline: none;

    &:focus {
      border-color: $tertiary;
      box-shadow: 0 4px 6px -6px $tertiary;
    }
  }

  &__area {
    display: flex;
    height: 100%;
    width: 100%;
  }

  &__preview {
    background-color: #fcf8ff;
    height: 100%;
    padding: 10px;
    word-break: break-word;
  }

  &__writer {
    width: 96%;
    padding: 10px;
    height: 100%;
  }

  &__buttons {
    width: 100%;
    display: flex;
    justify-content: flex-end;
  }
}

.textarea {
  min-height: 100px;
  overflow: visible;
  border: 1px solid;
  border-radius: 5px;
  border-color: #aca7cb;

  &:focus {
    outline: none;
    border-width: 2px;
  }
}
</style>
