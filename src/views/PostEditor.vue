<template>
  <div class="fl-row">
    <h3>Any great thoughts to express?</h3>
    <MarkdownPostEditor />
  </div>
</template>
<script>
import MarkdownPostEditor from '../components/MarkdownPostEditor.vue';

export default {
	name: 'PostEditor',
	components: {
		MarkdownPostEditor,
	},
};
</script>
<style lang="scss" scoped>
.editor {
  padding: 10px;
}
</style>
