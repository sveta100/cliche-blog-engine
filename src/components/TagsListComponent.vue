<template>
  <div class="tags">
    <div class="tags__list">
      <Tag
        v-for="tag in options"
        :key="tag._id"
        class="tags__list"
        :tag="tag"
        :with-background="withBackground"
      />
    </div>
  </div>
</template>

<script>
import Tag from './Tag.vue';

export default {
  name: 'TagList',
  components: {
    Tag,
  },
  props: {
    options: {
      type: Array,
      default: () => [],
    },
    withBackground: {
      type: Boolean,
      default: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.tags {
  display: flex;
  flex-direction: column;

  &__list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
}
</style>
