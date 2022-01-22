"use strict"
$(function () {
  //mouseOver y mauseOut
    $("#caja1").css("cursor","pointer")
    $("#caja1").mouseover(function () { 
        $(this).css("background","red")
    });
    $("#caja1").mouseout(function () { 
        $(this).css("background","yellow")
    });
    //hover
    $("#caja2").hover(function () {
            // over
            $(this).css("background","green").css("color","black");
        }, function () {
            // out
            $(this).css("background","blue ").css("color","white");
        }
    );
//click y doble click
    $("#caja1").click(function () { 
        $(this).css("background","pink");
    });
    $("#caja2").dblclick(function () { 
        $(this).css("background","gray").css("color","pink");
    });
//focus y blur   
    $("#nombre").focus(function () { 
            $(this).css("border","2px solid red");  
    });
    $("#nombre").blur(function () { 
        $(this).css("border","1px solid gray")
        if($(this).val()!=""){
            $("#parr").show().text($(this).val());
        }else{
            $("#parr").hide()
        }
    });
//mauseDown y mauseUp
 $("div").mousedown(function () { 
     $(this).css("border-color","violet");
 });
 $("div").mouseup(function () { 
    $(this).css("border-color","black");
 });
//mauseMove
/*$(document).mousemove(function (e) { 
    // values: e.clientX, e.clientY, e.pageX, e.pageY
    console.log(`x= ${e.clientX}
    y=${e.clientY}`)
});
*/
$(document).mousemove(function (e) { 
    // values: e.clientX, e.clientY, e.pageX, e.pageY
    $("#follow").css("left",e.clientX).css("top",e.clientY); 
    
});
});