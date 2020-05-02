<template>
  <div class="fl-row cc-lighPur align-baseline">
    <font-icon
      icon="calendar"
    />
    <span class="ml-xs"> {{ moment(rawDate).format("MMM Do YYYY") }} </span>
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
