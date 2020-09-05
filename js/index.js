let data = {
    product:{
        now_page:3,
        movex:"transform: translateX(0);",
        info:[
           { product_img_src:"../images/product_example1.svg"},
           { product_img_src:"../images/product_example2.svg"},
           { product_img_src:"../images/product_example3.svg"},
        ]
    },
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
        product_loop(){
            let count = this.product.info.length
            let new_product = this.product.info
            console.log(count);
            if(count > 3){
                this.product.movex = "transform: translateX(-105%);"
                new_product.push(
                    {product_img_src : this.product.info[0].product_img_src},
                    {product_img_src : this.product.info[1].product_img_src},
                    {product_img_src : this.product.info[2].product_img_src},
                )
                for(i=0 ; i<3 ; i++){
                    new_product.unshift(this.product.info[count - 1])
                }
               
            }
            return new_product;
        },
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
        prev(str) {
            if (!this.btn_action) return;
            if(str === "exhibition"){
                this.exhibition.now_page -= 1;
                if (this.exhibition.now_page <= 0) {
                    this.btnHandler();
                    this.exhibition.movex = "transform: translateX(-" + this.exhibition.now_page * 100 + "%);";
                    this.exhibition.now_page = this.exhibition.info.length - 2;
                    let loop_first = setTimeout(this.loopHandler, 300);
                } else {
                    this.exhibition.movex = "transform: translateX(-" + this.exhibition.now_page * 100 + "%)";
                }
            }else if(str === "product"){
                this.product.now_page -= 1;
                if(this.product.now_page <= 0){

                    console.log('aaaaa')
                    this.btnHandler();
                    this.product.movex = "transform: translateX(-" + this.product.now_page * 35 + "%)";                   
                    this.product.now_page = this.product.info.length - 6;
                    console.log("page"+this.product.now_page);
                    console.log("length" + (this.product.info.length - 4));
                    let loop_first = setTimeout(this.loopHandler, 300);
                }else{
                    this.btnHandler();
                    this.product.movex = "transform: translateX(-" + this.product.now_page * 35 + "%)";
                }
            }
            
        },
        next(str) {
            if (!this.btn_action) return;
            if(str === "exhibition"){
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
            }else if(str === "product"){
                this.product.now_page += 1;
                if(this.product.now_page > this.product.info.length - 4){
                    this.btnHandler();
                    this.product.movex = "transform: translateX(-" + this.product.now_page * 35 + "%);";
                    this.product.now_page = 3;
                    let loop_first = setTimeout(this.loopHandler, 300);
                }else{
                    this.btnHandler();
                    this.product.movex = "transform: translateX(-" + this.product.now_page * 35 + "%)";
                }
                
            }
        },
        loopHandler() {
            if(this.product.now_page === 3){
                this.product.movex =
                "transition-duration: 0s; transform: translateX(-" +
                this.product.now_page * 35 +
                "%);";
            }else if(this.product.now_page === this.product.info.length - 6){
                this.product.movex =
                "transition-duration: 0s; transform: translateX(-" +
                this.product.now_page * 35 +
                "%);";
            }
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