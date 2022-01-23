"use strict"
$(function(){
    let caja=$("#caja");
    $("#animar").click(function () {     
        caja.animate({marginLeft:"500px",
    fontSize:"40px",
    height:"100px",
    borderRadius:"900px"
    },"slow").animate({marginLeft:"0px",
    fontSize:"19px",
    height:"50px",
    borderRadius:"0px"
    },"slow"); 
    });
});