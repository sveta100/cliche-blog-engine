<template>
  <div v-html="compiledMarkdown" />
</template>
<script>
import marked from 'marked';
import Prism from 'prismjs';


function prismCodeHtml(inputCode, lang) {
  let results;
  const code = inputCode || '';

  if (!lang) results = code;
  else if (!Prism.languages[lang]) results = code;
  else results = Prism.highlight(code, Prism.languages[lang]);

  return results;
}

marked.setOptions({
  highlight: prismCodeHtml,
});


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
