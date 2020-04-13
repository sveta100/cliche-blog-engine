<template>
  <div
    v-html="compiledMarkdown"
  />
</template>
<script>
import marked from 'marked';

export default {
	name: 'MarkdownToHtml',
	props: {
		markdown: {
			type: String,
			default: '',
		},
	},
	computed: {
		compiledMarkdown() {
			return marked(this.markdown);
		},
	},

};
</script>
