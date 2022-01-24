$(function() {
   //slider
   if(window.location.href.indexOf("index")>-1){
    $('.bxslider').bxSlider({
        mode: 'fade',
        captions: true,
        slideWidth: 1200,
        pager:false
     }); 
    
   }
   //verificar el nombre el html
   if(window.location.href.indexOf("about")>-1){
        $("#acordeon").accordion(); 
    
   }
       //posts
    //array de json
    let date= new Date();
      var posts=[
        {
            title:"Prueba titulo 1",
            date:"Publicado el "+date.getDate()+" del mes "+date.getMonth()+" de "+date.getFullYear(),
            content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a massa rhoncus, auctor ante ac, sollicitudin elit. Sed a nulla iaculis, tincidunt turpis sit amet, ullamcorper leo. Curabitur ornare mi placerat massa volutpat, a iaculis orci semper. Aliquam scelerisque, felis quis venenatis volutpat, diam eros scelerisque tellus, nec bibendum mi ipsum ultricies eros. Suspendisse enim eros, laoreet eget auctor sit amet, ornare sit amet lorem. Phasellus in porttitor felis. Duis vel blandit arcu, pellentesque consectetur lacus. Suspendisse tempus est a eros laoreet tempus. Mauris molestie, erat in consectetur gravida, purus nisl condimentum diam, lobortis elementum ipsum sapien eu neque. Phasellus dignissim lectus sit amet purus commodo, eu sollicitudin erat elementum. Vivamus vulputate at justo ac venenatis. Pellentesque felis leo, sagittis sit amet diam at, dignissim elementum ex. Sed justo lacus, iaculis quis metus non, gravida vulputate lacus. "
        },
        { 
            title:"Prueba titulo 2",
            date:"Publicado el "+date.getDate()+" del mes "+date.getMonth()+" de "+date.getFullYear(),
            content:"Integer sit amet commodo orci, sit amet egestas mi. Sed auctor, magna luctus condimentum placerat, velit nulla iaculis justo, ac sollicitudin mi leo non tellus. Fusce viverra nisi id velit eleifend, non convallis diam commodo. Donec et quam varius sem dignissim vehicula eu ac dolor. Donec eu suscipit massa. Aliquam tempor ante in ipsum facilisis, non condimentum justo sollicitudin. Ut sed facilisis magna, at accumsan odio. Quisque pellentesque sem eget odio porta blandit. Fusce a dui nunc. Nulla sit amet nisi turpis."
        },
        {
            title:"Prueba titulo 3",
            date:"Publicado el "+date.getDate()+" del mes "+date.getMonth()+" de "+date.getFullYear(),
            content:"Donec id ipsum arcu. Cras aliquam id turpis in blandit. Aenean consequat ultricies massa et varius. Nunc in nunc accumsan, viverra ipsum non, scelerisque libero. In erat justo, tincidunt quis rutrum et, vehicula et enim. Fusce quis malesuada purus. Donec viverra lectus nibh, nec placerat sem rutrum tempus. Aenean convallis urna quis justo egestas, tempus aliquam nisl varius. Nulla neque augue, semper at turpis et, cursus laoreet lectus. Sed feugiat enim a augue congue dignissim."
        },
        {
            title:"Prueba titulo 4",
            date:"Publicado el "+date.getDate()+" del mes "+date.getMonth()+" de "+date.getFullYear(),
            content:"Sed condimentum vitae dolor et cursus. Duis vel nisl leo. Phasellus vehicula in justo vitae consectetur. Quisque non lorem id orci cursus dictum. Fusce dictum lacus nec orci tincidunt viverra quis vitae risus. Pellentesque semper sapien leo, id molestie nulla fringilla nec. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam varius at erat at convallis. Aenean cursus, erat eu rutrum finibus, enim metus facilisis ipsum, a posuere nisl urna sed purus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse potenti. Sed facilisis scelerisque convallis."
        },
        {
            title:"Prueba titulo 5",
            date:"Publicado el "+date.getDate()+" del mes "+date.getMonth()+" de "+date.getFullYear(),
            content:"Maecenas a lectus magna. Phasellus ipsum quam, blandit vitae eleifend a, egestas sit amet ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent semper volutpat neque non mollis. Aenean in quam ex. Pellentesque sed luctus nulla, ac facilisis ex. Phasellus rhoncus posuere felis, eu tincidunt diam tempor ut."
        }];
        posts.forEach((item,index)=>{
            let post=` <article class="post">
            <h2>${item.title}</h2>
            <span class="date">${item.date}</span>
            <p>${item.content}</p>
            <a href="#" class="button_more">leer más</a>
        </article>`
        $("#posts").append(post);
        });
        //metodo para apartir de un json añadir contenido a la pagina
    let tema=$("#theme");
    $("#green").click(function(){
            tema.attr("href","css/green.css");
    });
    $("#red").click(function(){
        tema.attr("href","css/red.css");
    });
    $("#blue").click(function(){
    tema.attr("href","css/blue.css");
    });
    //scroll arriba de la pagina
    $(".subir").click(function(e){
        e.preventDefault();
        $("html, body").animate({scrollTop:0},500);
    });
//login falso
var usuario;
    $("#login form").submit(function(e){
        e.preventDefault();
        if($("#name").val()!=""){
            let user={
                name:$("#name").val(),
                email:$("#email").val(),
                password:$("#password").val()
            } 
            usuario=$("#name").val();
            localStorage.setItem("usuario",usuario);
            localStorage.setItem($("#name").val(),JSON.stringify(user));
            $("#about p").html("<strong>Bienvenido, "+ JSON.parse(localStorage[usuario]).name+"</strong>");
            $("#login").hide();
            $("#cerrar_sesion").show();
        }
        $("#name").val("");
        $("#email").val("");
        $("#password").val("");
    });
    $("#cerrar_sesion").click(function (e) { 
        e.preventDefault();
        $("#cerrar_sesion").hide();
        localStorage.clear();
        $("#login").show();
        $("#about p").html("tur adipiscing elit. Maecenas sollicitudin euismod ante. Quisque");
    });
    if(localStorage["usuario"]!=undefined){
        $("#login").hide();
        $("#cerrar_sesion").show();
        usuario=localStorage["usuario"];
        $("#about p").html("<strong>Bienvenido, "+ JSON.parse(localStorage[usuario]).name+"</strong>");
    }
    if(window.location.href.indexOf("reloj")> -1){
        var reloj;
        setInterval(function(){
            let d=new Date();
            reloj=d.getHours()+":"+d.getMinutes()+":"+d.getSeconds();
            $("#reloj").html(reloj); 
        },1000);
        

    }
    //validacion
    if(window.location.href.indexOf("contact")> -1){  
        $("form input[name='birthday']").datepicker({dateFormat:"dd/mm/yy"});
        $.validate({
            lang:"es",
            errorMessagePosition:"top",
            scrollToTopOnError: true
        });
        
    }
});