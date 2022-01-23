"use strict"
$(function() {
let elm=$(".elemento")
//mover un elemento por la pagina
    elm.draggable(); 
//redimensionar los elementos
    elm.resizable();
//Lista con elementos selecionables
    $(".lista").selectable();
    //solo asi no funciona, hay que editar los estilos que usa la libreria 
    //en este caso ul .ui-selecting y ul .ui-selected
// ordenar los elementos de la lista
    $(".ordenable").sortable({update:function(event,ui) {
        console.log("ha cambiado la lista");
        //sirve para capturar cuando se h cambiado el orden
    }});
//drop
    $("#elemento_movido").draggable();
    $("#area").droppable({drop:function() {
        console.log("has soltado algo en el area")
    //para capturar el evento en el que se suelta un elemento en el area
    }});
//efectos
    $("#mostar").click(function() {
        $(".caja_efectos").toggle("explode",{},"slow");
        //se puede ingresar como parametro a toggle la animacion que se quiere ejecutar, opciones con un json{} y la velocidad de animacion
    /* algunos efectos disponibles son:
        blind(slide arriba a abajo)
        slide(slide derecha a izquierda)
        drop
        explode
        fold
        puff
        scale
        shake

    */
    });
//tooltip, es un metodo que a los elementos con title se mostrara el contenido en un mensaje sobre el elemento
    $(document).tooltip();
    //al hacerlo sobre el document, todos los elementos con title en pagina sera afectados por tooltip
    //se pueden descargar plugins para cambiar el comportamiento del tooltip
    $("#popup").hide();
    $("#activar").click(function() {
        $("#popup").dialog();    
    });
//date picker
    $("#calendar").datepicker();
//TABS (panel de pestañas)
    $("#tabs").tabs();

});