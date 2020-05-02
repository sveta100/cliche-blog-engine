<template>
  <div class="tags">
    <div class="tags__list">
      <Tag
        v-for="tag in tags"
        :key="tag.id"
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
	data() {
		return {
			tags: [],
		};
	},
	watch: {
		options(newVal) {
			this.tags = newVal;
		},
	},
};
</script>

<style lang="scss" scoped>

.tags {
  display: flex;
  flex-direction: column;
  align-items: center;

  &__list {
    display: flex;
    flex-wrap: wrap;
  }
}
</style>
