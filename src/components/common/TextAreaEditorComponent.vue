<template>
  <textarea
    class="textarea"
    :value="content"
    debounce="300"
    @input="update"
  />
</template>
<script>

import DOMPurify from 'dompurify';

export default {
	name: 'TextAreaEditor',
	props: {
		content: {
			type: String,
			default: '',
		},
	},
	data() {
		return {
			outputText: this.content,

		};
	},
	watch: {
		content(newVal) {
			this.outputText = newVal;
		},
	},
	methods: {
		update(e) {
			this.outputText = DOMPurify.sanitize(e.target.value, { USE_PROFILES: { html: true } });
			this.$emit('update:content', this.outputText);
		},
	},
};
</script>

<style lang="scss" scoped>

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
