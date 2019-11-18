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
<script lang="ts">
import marked from "marked/index";
import Button from "../components/common/ButtonComponent.vue";
import { Vue, Component, Prop } from "vue-property-decorator";

@Component({
  components: {
    Button
  }
})
export default class MarkdownPostEditor extends Vue {
  @Prop({ default: "# hello" })
  input!: string;

  //vue computed properties
  get compiledMarkdown(): string {
    return marked(this.input);
  }

  //vue methods
  update(e: any): void {
    this.input = e.target.value;
  }

  /*  lifecycle hook
  mounted () {
    this.greet()
  } */

  /* data properties in class based component 
    can declare data as normal class property
    ex: todos: [];
  */

  /*Writable computed properties use set method
    set hello(name: string){
      ...
    }
  */
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

