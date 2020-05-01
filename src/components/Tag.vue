<template>
  <div class="tag">
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
	},

};
</script>

<style lang="scss" scoped>
  .tag {
    margin: 5px;
    background: $tertiary;
    color: white;
    padding: 5px 8px;
    transition: all 0.3s ease-in;

    &:hover {
      cursor: pointer;
      transform: scale(1.1);
    }
  }
</style>
