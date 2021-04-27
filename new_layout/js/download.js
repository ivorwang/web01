var download = document.querySelector('.download');
var download_box = document.querySelector('.download_box');
var download_item = document.querySelectorAll('.download_item');
// 左右多家15間距
var download_pic_width = document.querySelector('.download_item_pic').clientWidth + 30;
var download_pic_height = document.querySelector('.download_item_pic').clientHeight + 20;

var download_tab = document.querySelector('.download_tab');
// 寬度縮放偵測
window.onresize = function () {
    sizeHnadler()
    
    // console.log(download_box.clientHeight);  //盒子高度
    // console.log(download_pic_height);  //圖片高度
}

function sizeHnadler(){
    // let download_box_height = download.clientHeight - download_tab.clientHeight;
    
    if (window.screen.width > 767) {
        let newItem_w = parseInt(download_box.clientWidth / download_pic_width);
        let newItem_h = parseInt(download_box.clientHeight / download_pic_height);

        // download_item[0].style.width = "calc(100% / 4 )";

        for (var i = 0; i < download_item.length; i++) {
            download_item[i].style.width = "calc(100% /" + newItem_w + ")"
            download_item[i].style.height = "calc(100% /" + newItem_h + ")"
        }
        console.log(newItem_h);
    } else {
        for (var i = 0; i < download_item.length; i++) {
            download_item[i].style.width = ""
        }
    }

    // console.log(parseInt(download_box_height / download_pic_height));

    // parseInt(download_box.clientHeight - download_tab.clientHeight);
}


sizeHnadler();