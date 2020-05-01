<template>
  <button
    :class="color + ' btn-icon'"
    type="button"
    @click="handleClick"
  >
    <font-icon
      :size="size"
      :icon="icon"
    />
  </button>
</template>

<script>
export default {
	name: 'IconButton',
	props: {
		icon: {
			type: String,
			default: 'pen',
		},
		size: {
			type: String,
			default: '2x',
		},
		color: {
			type: String,
			default: 'cc-lighPur',
		},
	},
	methods: {
		handleClick() {
			this.$emit('click');
		},
	},
};
</script>

<style lang="scss">
.btn-icon {
  border: none;
  background: transparent;

  &:hover {
    cursor: pointer;
  }

  &:focus {
    outline: none;
  }
}
</style>
