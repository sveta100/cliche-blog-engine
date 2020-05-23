<template>
  <div class="divider">
    <div class="divider__icons cc-lighPur">
      <font-icon
        size="1x"
        icon="coffee"
      />  <font-icon
        size="1x"
        icon="coffee"
      />  <font-icon
        size="1x"
        icon="coffee"
      />
    </div>

    <div class="divider__line" />
  </div>
</template>

<script>
export default {
  name: 'PostDivider',
};
</script>

<style lang="scss" scoped>
.divider {
  position: relative;

  &__line {
    position: relative;
    height: 2px;
    color: $tertiary;
    background-color: lightgrey;
  }

  &__icons {
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
    left: 50%;
  }
}
</style>
