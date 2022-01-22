"use strict"
$(function () {   
    function reload_links(){
        $("a").each(function () { 
        let este=$(this)  
        let texto=este.attr("href");
        este.text(texto);
        este.attr("target","_blank");
        });
    }
    reload_links();
    $("#add").click(function () { 
        let caja=$("#link").val();
        if(caja!=""){
            $("#menu").append("<li><a href='"+caja+"'></a></li>")
            reload_links();
        /*.html() ingresa un nuevo contenido html
        .append() agrega algo al final del html
        .prepend() agrega algo al inicio del html
        .after() ingresa algo despues de donde se situa el elemento selecionado en el body
        .before() ingresa algo antes de donde se situa el elemento en el body

        */
        }
        $("#link").val("");
    });
});