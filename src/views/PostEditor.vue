<template>
  <div class="editor">
    <h3>Any great thoughts to express?</h3>
    <MarkdownPostEditor />
  </div>

</template>
<script lang="ts">
import MarkdownPostEditor from "../components/MarkdownPostEditor.vue";
import { Vue, Component, Provide, Prop } from "vue-property-decorator";

@Component({
  components: {
    MarkdownPostEditor
  }
})
export default class PostEditor extends Vue {}
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

