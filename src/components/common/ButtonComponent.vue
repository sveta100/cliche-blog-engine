<template>
  <button class="super-btn super-btn--default">Post</button>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
@Component
export default class PrimaryButton extends Vue {}
</script>

<style lang="scss">
.super-btn {
  width: 200px;
  height: 40px;
  margin: 20px;
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