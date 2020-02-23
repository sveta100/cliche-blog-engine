<template>
  <div class="checkbox__area">
    <input
      class="creative"
      type="checkbox"
      id="checkbox"
      @change="$emit('input', $event.target.checked)"
      checked="checked"
    />
    <label for="checkbox">{{ label }}</label>
  </div>
</template>

<script>
export default {
  name: "CheckBox",
  props: ["label", "checked"]
};
</script>

<style scoped lang="scss">
.checkbox__area {
  width: 20%;
  height: 50px;
}
.creative {
  display: none;
}

input[type="checkbox"].creative:checked + label:after {
  content: "\2714";
  padding-left: 15px;
}

input[type="checkbox"].creative + label {
  position: relative;
  padding: 10px;
  background-color: rgba(255, 255, 255, 0.4);
  color: #444;
  border: 1px solid gray;
  border-radius: 4px;
}

input[type="checkbox"].creative + label:hover:after {
  text-shadow: 0 0 7px rgba(255, 255, 255, 0.1);
  color: rgba(0, 0, 0, 0);
}
input[type="checkbox"].creative:checked + label:hover:after {
  text-shadow: none;
  color: inherit;
}
input[type="checkbox"].creative + label:hover,
input[type="checkbox"].creative:checked + label:hover {
  border: 1px solid rgba(255, 255, 255, 0.7);
  cursor: pointer;
}

input[type="checkbox"].creative:checked + label {
  color: rgba(0, 0, 0, 0.9);
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05),
    inset 0px 0 7px 1px rgba(0, 0, 0, 0.5), inset 0px 0 3px 0 rgba(0, 0, 0, 0.4);
}
</style>
