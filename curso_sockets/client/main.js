"strict"
//socket.connect("http://192.168.20.175:6677", {"forceNew":true});      
var socket = io(); // Inicializamos socketIO en el cliente  
/*
 * Evento listener para el 'nuevo mensaje'
 *   Se puede ver que es el mismo evento que se envia 
 *   desde el servidor.
 * Agregamos el mensaje ingresado por el usuario a la lista.
 */
socket.on('nuevo mensaje', function (msj) {
    render(msj);
});

function render(datos){
    
    var html = datos.map((mensaje, index)=>{   
        return(`
            <div class = "message">
                <strong>${mensaje.nickname}</strong> dice:
                <p>${mensaje.text}</p>
            </div>
        `);
    }).join(" ");
     let divMsg = document.getElementById("messages");
    divMsg.innerHTML = html;
    divMsg.scrollTop = divMsg.scrollHeight;
}
 
/*
 * Emitimos un evento de tipo 'nuevo mensaje' cada vez
 * que se presiona el botón enviar y enviamos
 * su contenido como mensaje.
 */
 function addMensaje(){
    var mensaje = {
        nickname : document.getElementById("nickname").value,
        text : document.getElementById("text").value
    };
    document.getElementById("nickname").style.display = "none";
    document.getElementById("text").value = "";
    document.getElementById("lblNick").style.display = "none";
    socket.emit("add-message", mensaje);
    
}