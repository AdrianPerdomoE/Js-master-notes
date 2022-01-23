"use strict"
$(function() {
//LOAD
//$("#datos").load("https://reqres.in/");
//ingresa el html de la url en el lugar que hemos señalados
//get y pos
    $.get("https://reqres.in/api/users",{page:2},
        function (response) {
        response.data.forEach((element,index)=>{
                $("#datos").append("<p>"+element.first_name+" "+element.last_name+"</p>");
            });  
        }
    );
    
    $("#form").submit(function (e) {
        e.preventDefault();//evitar que la pagina me redirija. 
        var usuario={
            name:$("input[name='name']").val(),
            apellido:$("input[name='last_name']").val(),
            edad:$("input[name='edad']").val()
        }
        console.log(usuario)
        //el primer dato es la url que se obtiene del action del form
     /*   $.post($(this).attr("action"),usuario,
            function (response) {
                console.log(response)
            }
        ).done(function() {
            alert("Usuario registrado");
            $("input[name='name']").val("");
            $("input[name='last_name']").val("");
            $("input[name='edad']").val("");
        });    */
    //otro metodo para realizar peticion 
      $.ajax({
          type: "POST",
          url: $(this).attr("action"),
          data: usuario,
          dataType: "json",
          beforeSend:function() {
              console.log("Enviando usuario...")
              //permita realizar una funcion antes de enviar
          },
          success: function (response) {
            console.log("Respuesta por el metodo ajax");  
            console.log(response)
          },
          error:function() {
              console.log("Ha ocurrido un error")
          },
          timeout:2000,//tiempo maximo de espera para realizar la  accion, si sobrepasa el tiempo manda error
      }).done(function() {
        alert("Usuario registrado");
        $("input[name='name']").val("");
        $("input[name='last_name']").val("");
        $("input[name='edad']").val("");
        });  
    });
});
