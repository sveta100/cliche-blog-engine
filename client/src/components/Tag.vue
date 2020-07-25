<template>
  <div :class="[tagClass, !withBackground ? 'tag--no-background' : '']">
    {{ tag.name }}
  </div>
</template>

<script>
export default {
  name: 'Tag',
  props: {
    tag: {
      type: Object,
      default: () => {},
    },
    withBackground: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      tagClass: 'tag',
    };
  },
};
</script>

<style lang="scss" scoped>
.tag {
  margin: 5px;
  background: $gray-100;
  color: $tertiary-cc;
  padding: 5px;
  transition: all 0.3s ease-in;
  font-size: 1.8rem;
  text-transform: uppercase;

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }

  &--no-background {
    background: transparent;
    font-weight: 800;
    opacity: 0.7;

    &::before {
      content: '\0023';
      margin-right: 5px;
    }
  }
}
</style>
