/* 
* @Author: anchen
* @Date:   2017-05-02 11:42:50
* @Last Modified by:   anchen
* @Last Modified time: 2017-09-07 18:24:29
*/

$(document).ready(function(){
    // 左侧栏的高设置,右侧宽设置
    var windowH = $(window).height() - 78;
    var windowW = $(window).width()- 230;
    $(".index-left").css({
        "height": windowH
    });
    $(".index-wrap, .detail-wrap").css({
        "width": windowW
    });
    $(".index-left a").mouseover(function(event) {
        $(this).css({
            "color": "#fff",
            "text-decoration": "none"
        })
    });
    $(".guild-add-n").hover(function() {
        $(this).children("ul").css({
            "display": "block"
        })
        var liH = $(this).children("ul").height()-25;
        $(this).children("ul").css({
            "bottom": -liH,
            "left": "40px"
        })
    }, function() {
        $(this).children("ul").css({
            "display": "none"
        })
    });
    $(".add-list-guild li").click(function() {
        var guildT = $(this).html();
        $(".guild-name-s").html(guildT);
        $(this).parent().css("display","none")
    })
    $(".nav-slide").click(function() {
        var navH = $(this).height()+20;
        var liH = $(this).parent().height();
        console.log(navH);
        console.log(liH);
        if(liH > navH) {
            $(this).siblings('.nav-inner').css({
                "display": "none"
            })
        } else {
            console.log("555")
            $(this).siblings('.nav-inner').css({
                "display": "block"
            })
        }
    });
    // 加载动画
    $(".index-data-left").click(function(){
        $(".mloading").css("display","block")
        $("body").mLoading();
        setTimeout(function(){
            $(".mloading").css("display","none")
        },1000)
    });
    // 提示框调用
       $("#alertBtn").click(function(){
            $("body").css({
                "overflow-y": "hidden"
            })
           $.DialogByZ.Alert({Title: "提示", Content: "您的请求失败",BtnL:"确定",FunL:alerts}) 
       })
       $("#confirmBtn").click(function(){
           $.DialogByZ.Confirm({Title: "", Content: "投资前需开通第三方存管账户</br>确保资金安全",FunL:confirmL,FunR:Immediate})
       })
       $("#toastBtn").click(function(){
          $.DialogByZ.Autofade({Content: "感谢您对我们的支持"})
       })
       $("#load").click(function(){
          $.DialogByZ.Loading('image/loading.png') 
       })
    ///
       function confirmL(){
                $.DialogByZ.Close();
                $.DialogByZ.Alert({Title: "提示", Content: "您要求稍后开通",BtnL:"确定"})
       }
       //
       function alerts(){
            $("body").css({
                "overflow-y": "auto"
            })
            $.DialogByZ.Close();
       }
});