<template>
  <button class="super-btn super-btn--default" @click="handleClick" type="button">{{ name }}</button>
</template>

<script>
export default {
  name: "PrimaryButton",
  props: ["name"],
  methods: {
    handleClick: function() {
      this.$emit("click");
    }
  }
};
</script>

<style lang="scss">
.super-btn {
  width: 200px;
  height: 40px;
  margin: 20px;
  display: flex;
  justify-content: center;
  font-weight: bold;
  font-size: 16px;
  padding: 10px;
  cursor: pointer;
  color: white;

  &--default {
    border: 2px solid #b0a8b9;
    background-color: #b0a8b9;
  }
}
</style>
