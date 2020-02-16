<template>
  <div class="editor">
    <h3>Any great thoughts to express?</h3>
    <MarkdownPostEditor />
  </div>

</template>
<script>

import MarkdownPostEditor from "../components/MarkdownPostEditor.vue";

export default{
  name: "PostEditor",
   components: {
    MarkdownPostEditor
  }
}

</script>
<style lang="scss" scoped>
.editor {
  height: 100%;
  width: 100%;
  padding-top: 20px;
  display: flex;
  flex-direction: column;
}
</style>

