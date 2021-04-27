<style scoped></style>

<template src="./components/download/download.html"></template>


<script>
module.exports = {
	mounted(){
		window.onresize = () => {
			return (() => {
				// this.$route
				this.sizeHnadler()
            })()
        }
		
	},
	methods:{
		sizeHnadler(){
			// var download = document.querySelector('.download');
			var download_box = document.querySelector('.download_box');
			var download_item = document.querySelectorAll('.download_item');
			// 左右多家15間距
			var download_pic_width = document.querySelector('.download_item_pic').clientWidth + 30;
			// var download_pic_height = document.querySelector('.download_item_pic').clientHeight + 20;
			// console.log(download_pic_height);
			// var download_tab = document.querySelector('.download_tab');
			if (window.screen.width > 767) {
				let newItem_w = parseInt(download_box.clientWidth / download_pic_width);
				download_item[0].style.width = "calc(100% / 4 )";
				for (var i = 0; i < download_item.length; i++) {
					download_item[i].style.width = "calc(100% /" + newItem_w + ")";
				}
			} else {
				for (var i = 0; i < download_item.length; i++) {
					download_item[i].style.width = "";
				}
			}
		}
	}
};
</script>