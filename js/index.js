let data = {
    exhibition: {
        now_page: 1,
        movex: "transform: translateX(0);",
        info: [
            {
                exhibition_title: "FUN!插畫大魚樂",
                exhibition_text: "亞洲插畫年度大賞精選展",
                exhibition_img_src: "../images/exhibition1.svg",
                active_state: "active"
            },
        ]
    },
    btn_action: true
}

let vm = new Vue({
    el: "#app",
    data: data,
    computed: {
        exhibition_loop() {
            let count = this.exhibition.info.length
            let new_exhibition = this.exhibition.info
            if (count != 1) {
                this.exhibition.movex = "transform: translateX(-100%);"
                new_exhibition.push({
                    exhibition_title: this.exhibition.info[0].exhibition_title,
                    exhibition_text: this.exhibition.info[0].exhibition_text,
                    exhibition_img_src: this.exhibition.info[0].exhibition_img_src,
                    active_state: "",
                })
                new_exhibition.unshift(this.exhibition.info[this.exhibition.info.length - 2])
            }
            return new_exhibition;
        }
    },
    methods: {
        prev() {
            if (!this.btn_action) return;
            if(this.exhibition.info.length == 1) return //如果只有一筆資料不顯示按鈕，這行可拿掉
            console.log("改變前" + this.exhibition.now_page);
            this.exhibition.now_page -= 1;
            console.log("改變後" + this.exhibition.now_page);
            if (this.exhibition.now_page <= 0) {

                this.btnHandler();
                this.exhibition.movex = "transform: translateX(-" + this.exhibition.now_page * 100 + "%);";
                this.exhibition.now_page = this.exhibition.info.length - 2;
                let loop_first = setTimeout(this.loopHandler, 300);
            } else {
                this.exhibition.movex = "transform: translateX(-" + this.exhibition.now_page * 100 + "%)";
            }
        },
        next() {
            if (!this.btn_action) return;
            if(this.exhibition.info.length == 1) return  //如果只有一筆資料不顯示按鈕，這行可拿掉
            this.exhibition.now_page += 1;
            if (this.exhibition.now_page > this.exhibition.info.length - 2) {
                this.btnHandler();
                this.exhibition.movex = "transform: translateX(-" + this.exhibition.now_page * 100 + "%);";
                this.exhibition.now_page = 1;
                let loop_first = setTimeout(this.loopHandler, 300);
            } else {
                this.btnHandler();
                this.exhibition.movex = "transform: translateX(-" + this.exhibition.now_page * 100 + "%);";
            }
        },
        loopHandler() {
            if (this.exhibition.now_page === 1) {
                this.exhibition.movex =
                    "transition-duration: 0s; transform: translateX(-" +
                    this.exhibition.now_page * 100 +
                    "%);";
            } else if (this.exhibition.now_page == this.exhibition.info.length - 2) {
                this.exhibition.movex =
                    "transition-duration: 0s; transform: translateX(-" +
                    this.exhibition.now_page * 100 +
                    "%);";
            }
        },
        btnHandler() {
            this.btn_action = false;
            let btn_state = setTimeout(() => (this.btn_action = true), 300);
        }
    }
})