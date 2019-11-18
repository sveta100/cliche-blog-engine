<template>
  <div>
    <PostTile />
  </div>
</template>
<style lang="scss">
</style>
<script lang="ts">
import PostTile from "../components/common/PostTileComponent.vue";
import { Vue, Component, Provide, Prop } from "vue-property-decorator";

@Component({
  components: {
    PostTile
  }
})
export default class Home extends Vue {}
</script>

