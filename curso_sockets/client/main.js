//socket.connect("http://192.168.20.175:6677", {"forceNew":true});      
var socket = io(); // Inicializamos socketIO en el cliente  
/*
 * Evento listener para el 'nuevo mensaje'
 *   Se puede ver que es el mismo evento que se envia 
 *   desde el servidor.
 * Agregamos el mensaje ingresado por el usuario a la lista.
 */
socket.on('nuevo mensaje', function (msj) {
    console.log(msj)
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
    document.getElementById("messages").innerHTML = html;
}
 
/*
 * Emitimos un evento de tipo 'nuevo mensaje' cada vez
 * que se presiona el botón enviar y enviamos
 * su contenido como mensaje.
 */
function enviarMensaje() {
    socket.emit('nuevo mensaje', $('#nuevo-msj').val());
    $('#nuevo-msj').val('');
};