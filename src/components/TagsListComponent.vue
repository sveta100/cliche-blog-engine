<template>
  <div class="tags">
    <h4 class="mb-md">
      Categories
    </h4>
    <div class="tags__list">
      <Tag
        v-for="tag in tags"
        :key="tag.id"
        class="tags__list"
        :tag="tag"
      />
    </div>
  </div>
</template>

<script>
import Tag from './Tag.vue';
import TagService from '../../services/TagService';

export default {
	name: 'TagList',

	components: {
		Tag,
	},
	data() {
		return {
			tags: [],
		};
	},
	watch: {
		tags(newVal) {
			this.posts = newVal;
		},
	},
	async created() {
		await this.getTags();
	},
	methods: {
		async getTags() {
			const tags = await TagService.getTags();
			this.$set(this, 'tags', tags);
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
