<template>
  <div class="divider" />
</template>

<script>
export default {
	name: 'PostDivider',
};
</script>

<style lang="scss" scoped>
.divider {
  position: relative;
  margin-bottom: 30px;
  height: 1px;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 50%;
    height: 1px;
    background-image:
      linear-gradient(
        to right,
        transparent,
        rgb(48, 49, 51),
        transparent
      );
  }
}
</style>
