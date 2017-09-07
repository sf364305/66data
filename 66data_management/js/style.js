/* 
* @Author: anchen
* @Date:   2017-05-02 11:42:50
* @Last Modified by:   anchen
* @Last Modified time: 2017-09-07 12:04:04
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
    })
});