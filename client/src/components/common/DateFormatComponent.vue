<template>
  <div class="date-wrapper">
    <div class="card__header-date">
      <p class="fs-40">
        {{ moment(rawDate).format('Do') }}
      </p>
      <p> {{ moment(rawDate).format('MMM yyyy') }}</p>
    </div>
  </div>
</template>

<script>
import moment from 'moment';

export default {
  name: 'DateFormat',
  props: {
    rawDate: {
      type: String,
      default: Date.now().toString(),
    },
  },

  methods: {
    moment,
  },
};
</script>

<style lang="scss" scoped>
.date-wrapper {
  width: 150px;
  height: 150px;
  background-color: $green;
  border-radius: 50%;
  position: absolute;
  display: flex;
  align-items: center;
  color: white;
  justify-content: center;
  left: -75px;
  top: 50%;
  transform: translateY(-50%);
}
</style>
