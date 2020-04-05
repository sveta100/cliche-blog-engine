<template>
  <p>{{ moment(rawDate).format("MMM Do YYYY") }}</p>
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
