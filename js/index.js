/*$('#slideId').unslider({

    dots: true,
    speed:500,//图片切换的速度，数字，单位为毫秒
    delay: 1000  //图片停留的时间，数字，单位为毫秒


})*/


$(function(){

    
	$(".pageCon").hide();          //所有页面都隐藏
	$(".page .pageItem").removeClass("active");      //让导航条都不添加样式
	$("#page_1").show();                 //默认第一个页面显示
	$(".page .pageItem").eq(0).addClass("active");    //第一个导航加样式
	/*//下一步
     $("#pageItem_N").click(function(){
    var num=$(this).parent().parent().index()+1;   //当前这个page的索引加1，指的是下一页
    $(".pageCon").hide();                                 //所有页面都隐藏
    $(".pageCon").eq(num).show();       //下一个页面显示
    $(".page .pageItem").removeClass("active");     //所有导航条都清除样式
    $(".page .pageItem").eq(num).addClass("active");   //当前页面的那个导航添加样式
    
     });*/
      $("#pageItem_1").click(function(){
      //当前这个page的索引加1，指的是下一页
    $(".pageCon").hide();                                 //所有页面都隐藏
    $("#page_1").show();       //下一个页面显示
    $(".page .pageItem").removeClass("active");     //所有导航条都清除样式
    $("#pageItem_1").addClass("active");   //当前页面的那个导航添加样式
    $("body,html").animate({scrollTop:"2830px"},300);
     });
     
      $("#pageItem_2").click(function(){
      //当前这个page的索引加1，指的是下一页
    $(".pageCon").hide();                                 //所有页面都隐藏
    $("#page_2").show();       //下一个页面显示
    $(".page .pageItem").removeClass("active");     //所有导航条都清除样式
    $("#pageItem_2").addClass("active");   //当前页面的那个导航添加样式
    $("body,html").animate({scrollTop:"2830px"},300);
     });
     
      $("#pageItem_3").click(function(){
      //当前这个page的索引加1，指的是下一页
    $(".pageCon").hide();                                 //所有页面都隐藏
    $("#page_3").show();       //下一个页面显示
    $(".page .pageItem").removeClass("active");     //所有导航条都清除样式
    $("#pageItem_3").addClass("active");   //当前页面的那个导航添加样式
    $("body,html").animate({scrollTop:"2830px"},300);
     });
      $("#pageItem_4").click(function(){
      //当前这个page的索引加1，指的是下一页
    $(".pageCon").hide();                                 //所有页面都隐藏
    $("#page_4").show();       //下一个页面显示
    $(".page .pageItem").removeClass("active");     //所有导航条都清除样式
    $("#pageItem_4").addClass("active");   //当前页面的那个导航添加样式
    $("body,html").animate({scrollTop:"2830px"},300);
     });
      $("#pageItem_5").click(function(){
      //当前这个page的索引加1，指的是下一页
    $(".pageCon").hide();                                 //所有页面都隐藏
    $("#page_5").show();       //下一个页面显示
    $(".page .pageItem").removeClass("active");     //所有导航条都清除样式
    $("#pageItem_5").addClass("active");   //当前页面的那个导航添加样式
    $("body,html").animate({scrollTop:"2830px"},300);
     });
     
     /*  $("#pageItem_N").click(function(){
      //当前这个page的索引加1，指的是下一页
    $(".pageCon").hide();                                 //所有页面都隐藏
    $("#page_3").show();       //下一个页面显示
    $(".page .pageItem").removeClass("active");     //所有导航条都清除样式
    $("#pageItem_3").addClass("active");   //当前页面的那个导航添加样式
    
     });
     */
     
     /*//上一步
     $(".prev").click(function(){
        var num=$(this).parent().parent().index()-1;
        $(".page").hide();
    $(".items .page").eq(num).show();
    $("#status li").removeClass("active");
    $("#status li").eq(num).addClass("active");
     });*/
     
    $("#nav_1").click(function(){
    /*var href=$(this).attr("href");
    var top=$(href).offset().top;
    $(this).blur();*/
    $("body,html").animate({scrollTop:"0px"},200);
   /* return false;*/
})
   $("#nav_2").click(function(){
   
    $("body,html").animate({scrollTop:"2600px"},200);
 
})
       
   $("#nav_3").click(function(){
   
    $("body,html").animate({scrollTop:"4120px"},200);
 
})

 $("#nav_4").click(function(){
   
    $("body,html").animate({scrollTop:"0px"},200);
 
})
})  

