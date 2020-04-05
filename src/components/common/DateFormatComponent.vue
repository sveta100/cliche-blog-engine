<template>
  <p>{{ moment(rawDate).format("MMM Do YY") }}</p>
</template>

<script>
import moment from "moment";

export default {
  name: "DateFormat",
  props: {
    rawDate: {
      type: Date,
      default: Date.now()
    }
  },

  methods: {
    moment
  }
};
</script>
