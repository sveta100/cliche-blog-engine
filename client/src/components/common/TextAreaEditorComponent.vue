<template>
  <textarea
    class="textarea"
    :value="content"
    debounce="300"
    @input="update"
  />
</template>
<script>
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
      this.outputText = e.target.value;
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
  border-color: $gray-200;

  &:focus {
    outline: none;
    border-width: 2px;
    font-size: 1.8rem;
    line-height: 1.8;
  }
}
</style>
