<template>
  <div>
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
