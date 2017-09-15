/* 
* @Author: anchen
* @Date:   2017-05-02 11:42:50
* @Last Modified by:   anchen
* @Last Modified time: 2017-09-15 10:16:22
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
       //弹出确认框
       var showAlert = function(msg){
           jAlert(msg, "提示！");
       }
       window.alert=showAlert;
       $.alerts={
           verticalOffset:-75,horizontalOffset:0,repositionOnResize:true,overlayOpacity:.5,overlayColor:'rgb(100,100,100)',draggable:true,okButton:' 确定 ',cancelButton:' Cancel ',dialogClass:null,alert:function(message,title,callback){
               if(title==null)title='Alert';
               $.alerts._show(title,message,null,'alert',function(result){
                   if(callback)callback(result)
               })
           }
           ,_show:function(title,msg,value,type,callback){
               $.alerts._hide();
               $.alerts._overlay('show');
               $("BODY").append('<div id="popup_container">'+'<h1 id="popup_title"></h1>'+'<div id="popup_content">'+'<div id="popup_message"></div>'+'</div>'+'</div>');
               if($.alerts.dialogClass)$("#popup_container").addClass($.alerts.dialogClass);
               var pos=($.browser.msie&&parseInt($.browser.version)<=6)?'absolute':'fixed';
               $("#popup_container").css({
                   position:pos,zIndex:99999,padding:0,margin:0
               });
               $("#popup_title").text(title);
               $("#popup_content").addClass(type);
               $("#popup_message").text(msg);
               $("#popup_message").html($("#popup_message").text().replace(/\n/g,'<br />'));
               $("#popup_container").css({
                   minWidth:$("#popup_container").outerWidth(),maxWidth:$("#popup_container").outerWidth()
               });
               $.alerts._reposition();
               $.alerts._maintainPosition(true);
               switch(type){
                   case'alert':$("#popup_message").after('<div id="popup_panel"><input type="button" value="'+$.alerts.okButton+'" id="popup_ok" /></div>');
                   $("#popup_ok").click(function(){
                       $.alerts._hide();
                       callback(true)
                   });
                   $("#popup_ok").focus().keypress(function(e){
                       if(e.keyCode==13||e.keyCode==27)$("#popup_ok").trigger('click')
                   });
                   break
               };
               if($.alerts.draggable){
                   try{
                       $("#popup_container").draggable({
                           handle:$("#popup_title")
                       });
                       $("#popup_title").css({
                           cursor:'move'
                       })
                   }
                   catch(e){}
               }
           }
           ,_hide:function(){
                $("body").css({
                    "overflow-y": "auto"
                });
               $("#popup_container").remove();
               $.alerts._overlay('hide');
               $.alerts._maintainPosition(false)
           }
           ,_overlay:function(status){
               switch(status){
                   case'show':$.alerts._overlay('hide');
                    $("body").css({
                           "overflow-y": "hidden"
                    });
                   $("BODY").append('<div id="popup_overlay"></div>');
                   $("#popup_overlay").css({
                       position:'absolute',zIndex:99998,top:'0px',left:'0px',width:'100%',height:$(document).height(),background:$.alerts.overlayColor,opacity:$.alerts.overlayOpacity
                   });
                   break;
                   case'hide':$("#popup_overlay").remove();
                   break
               }
           }
           ,_reposition:function(){
               var top=(($(window).height()/ 2) - ($("#popup_container").outerHeight() /2))+$.alerts.verticalOffset;
               var left=(($(window).width()/ 2) - ($("#popup_container").outerWidth() /2))+$.alerts.horizontalOffset;
               if(top<0)top=0;
               if(left<0)left=0;
               if($.browser.msie&&parseInt($.browser.version)<=6)top=top+$(window).scrollTop();
               $("#popup_container").css({
                   top:top+'px',left:left+'px'
               });
               $("#popup_overlay").height($(document).height())
           }
           ,_maintainPosition:function(status){
               if($.alerts.repositionOnResize){
                   switch(status){
                       case true:$(window).bind('resize',function(){
                           $.alerts._reposition()
                       });
                       break;
                       case false:$(window).unbind('resize');
                       break
                   }
               }
           }
       };
       jAlert=function(message,title,callback){
           $.alerts.alert(message,title,callback)
       }
});