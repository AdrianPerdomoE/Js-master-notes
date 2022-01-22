"use strict"
$(function(){
//selector de id: $("#id") 
    $("#p1").css("background","red");
//Selector de clase: $(".clase")
    $(".parrafo2").css("color","green"); 
//tecnica: las clases se usan para darle elementos comunes  a varias etiquetas, los id cuando se quiere ser mas especifico  
    $("#p2").click(function () { 
        $(this).css("border","5px dashed black");
    });
//selectores por etiqueta: $("etiqueta")
    $("p").css("font-family","Gill Sans Extrabold").css("padding","3px").css("cursor","pointer");
// selectores por atributo: $("[atributo='name']")
    $("[title='elm1']").css("background","green");
//otros
     $("p,li").addClass("margen");
//Se pueden selecionar varios elementos
let busqueda = $("#caja").find(".resaltado");
//metodo para buscar algo que se encuentra dentro del elemento
console.log(busqueda);//muestra los elementos dentro de caja
//con clase resaltado
let busqueda2=$("#caja .resaltado").parent().parent().find("#p1");
console.log(busqueda2);
//cuando el selector esta muy profundo, se puede salir de las capas usando la funcion parent()
});
