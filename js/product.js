define(["jquery","jquery-cookie"], function ($) {
    function productload() {
        $.ajax({
            url:'./data/product.json',
            success: function (arr) {
                $(`<span>搜索结果,一共搜索到${arr.length}件商品</span>`)
                .appendTo($(".goodsNum"))
                for(var i = 0; i < arr.length; i++){
                $(` <li>
                        <img src="${arr[i].img}" alt="">
                        <h4>${arr[i].title}</h4>
                        <span>RMB</span>
                        <span class="num">${arr[i].price}</span>
                        <span><a id = "${arr[i].id}" class = "lookgoods" href = "./detail.html">点击查看详情</a></span>
                    </li>`)
                .appendTo($(".list").find("ul"));
                }
            },
            error: function (msg) {
                console.log(msg)
            }
        })
    }
    function lookgoodsClick() {
        $(".list").on("click",".lookgoods", function () {
            var id = this.id;
            var arr = [{id:id}];
            $.cookie("goods",JSON.stringify(arr),{expires:7});
        })
    }
    return {
        productload : productload,
        lookgoodsClick:lookgoodsClick
    }
})