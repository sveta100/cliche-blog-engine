<template>
  <div>
    <h3>Any great thoughts to express?</h3>
    <form class="editor fl-row mb-md">
      <div class="editor__header">
        <input
          v-model.lazy="post.title"
          type="text"
          placeholder="Blog post title:"
          class="editor__title-input text-input mb-md"
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
      <div class="fl-row editor__content mb-md">
        <div
          class="fl-row__col-6"
        >
          <MarkdownToHtml
            :markdown="post.content"
            class="editor__preview"
          />
        </div>
        <TextAreaEditor
          class="fl-row__col-6 editor__writer"
          :content.sync="post.content"
        />
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
  </div>
</template>
<script>

import TextAreaEditor from '../components/common/TextAreaEditorComponent.vue';
import MarkdownToHtml from '../components/MarkdownToHtmlComponent.vue';
import PostService from '../../services/PostService';
import PrimaryButton from '../components/common/ButtonComponent.vue';

export default {
	name: 'PostEditor',
	components: {
		TextAreaEditor,
		PrimaryButton,
		MarkdownToHtml,
	},
	data() {
		return {
			post: {
				title: '',
				content: '# hello',
			},
			postId: this.$route.params.postId,
		};
	},
	created() {
		if (this.postId) { this.init(); }
	},
	methods: {
		async init() {
			const post = await PostService.getPost(this.postId);
			this.$set(this, 'post', post);
		},
		async createPost(isDraft) {
			this.post.isDraft = isDraft;
			if (this.postId) {
				this.$toasted.show('You greatest post was updated');
			} else {
				this.$toasted.show('You greatest post was saved');
			}
			await PostService.addOrUpdatePost(this.post);

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
