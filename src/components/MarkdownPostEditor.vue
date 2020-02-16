<template>
  <form class="editor">
    <div class="editor__area">
      <textarea
        class="editor__area__textarea"
        :value="input"
        @input="update"
        debounce="300"
      />
      <div class="editor__area__preview" v-html="compiledMarkdown"></div>
    </div>
    
    <Button class="editor__button editor__button--right">Post</Button>
    </form>
</template>
<script>
import marked from "marked/index";
import Button from "../components/common/ButtonComponent.vue";

export default{
  name: "MarkdownPostEditor",
  data: {
    input: "# hello"
  },
   components: {
    Button
  },
  methods:{
    compiledMarkdown(){
      return marked(this.input);
    },
    update(e){
      this.input = e.target.value;  
    }
  }
}

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

  &__area {
    display: flex;
    height: 50vh;

    &__textarea {
      width: 50%;
      font-size: $font-size;
    }

    &__preview {
      height: 100%;
      background-color: #fcf8ff;
      width: 50%;
    }
  }

  &__button {
    &--right {
      margin-left: auto;
    }
  }
}
</style>

