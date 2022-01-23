"use strict"
$(function() {
    $("#hide").click(function () { 
        $("#caja").hide("fast");
    });
    $("#show").click(function () { 
        $("#caja").show("normal");
//se puede ingresar como parametro la velocidad del efecto
    });
    $("#fadein").click(function () { 
        $("#caja").fadeIn("slow");
    });
    $("#fadeout").click(function () { 
        $("#caja").fadeOut("medium");
    });
    $("#fadeto0").click(function () { 
        $("#caja").fadeTo("slow",0);
    });    
    $("#fadeto1").click(function () { 
        $("#caja").fadeTo("slow",1);
    });
    $("#toggle").click(function () { 
        $("#caja").toggle("fast");
    });
    $("#fadetoggle").click(function () { 
        $("#caja").fadeToggle("fast");
    });
    $("#slidetoggle").click(function () { 
        $("#caja").slideToggle("fast");
    });
    $("#slideup").click(function () { 
        $("#caja").slideUp("fast");
    });
    $("#slidedown").click(function () { 
        $("#caja").slideDown("fast");
    });                
});