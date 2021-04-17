<style scoped></style>

<template src="./components/home/home.html"></template>

<script>
module.exports = {
	data() {
		return {
			nowActive: null,
		};
	},
	methods: {
		show(index) {
			if(index == this.nowActive){
				this.nowActive = null
			}else{
				this.nowActive = index;
			}
		},
	},
};
</script>