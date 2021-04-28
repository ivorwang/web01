<style scoped></style>

<template src="./components/about/about.html"></template>


<script>
module.exports = {
	data() {
		return {
			tabNum: 0,
		};
	},
	methods: {
		tabHandler() {
			console.log(this.tabNum);
		},
	},
};
</script>