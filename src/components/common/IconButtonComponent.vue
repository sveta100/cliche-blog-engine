<template>
  <button
    class="btn-icon cc-lighPur"
    type="button"
    @click="handleClick"
  >
    <font-icon
      size="2x"
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
}
</style>
