<template>
  <div :class="[tagClass, (!withBackground ? 'tag--no-background' : '')]">
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
    background: $tertiary;
    color: white;
    padding: 5px 8px;
    transition: all 0.3s ease-in;
    font-size: 1.4rem;
    text-transform: uppercase;

    &:hover {
      cursor: pointer;
      transform: scale(1.1);
    }

    &--no-background {
      background: transparent;
      color: $tertiary;
      font-weight: 800;

      &::before {
        content: "\0023";
        margin-right: 5px;
      }
    }
  }
</style>
