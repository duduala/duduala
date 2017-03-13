 $(function(){
 $("#nav_1").click(function(){
    /*var href=$(this).attr("href");
    var top=$(href).offset().top;
    $(this).blur();*/
    $("body,html").animate({scrollTop:"0px"},200);
   /* return false;*/
})
   $("#nav_2").click(function(){
  
	window.open ('index.html', 'index.html.animate({scrollTop:"2600px"},200)') //这句要写成一行
   
     ;

})
   
       
   $("#nav_3").click(function(){
   
    $("body,html").animate({scrollTop:"4120px"},200);
 
})

 $("#nav_4").click(function(){
   
    $("body,html").animate({scrollTop:"0px"},200);
 
})
 }) 