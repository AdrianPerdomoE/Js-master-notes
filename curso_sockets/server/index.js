"strict"
//cargar librerias configuración basica
var express = require("express");
var app = express();
var server = require("http").Server(app);    
var io = require("socket.io")(server);
//realizar un middleware
app.use(express.static("client"));
//crear rutas
app.get('/', function(req, res) {
    res.sendFile( __dirname + '/chat.html');
  });
//configurar la conexion de los sockets
var mensajes = [
    { 
        id : 1,
        text : "Bienvenido al  chat privado de socket.io y NodeJS",
        nickname : "Bot-chat"
}
] 
io.on("connection",(socket)=>{
    console.log(`El cliente co IP: ${socket.handshake.address} se ha conectado...`);
    io.emit('nuevo mensaje', mensajes);
    socket.on('nuevo mensaje', function(msj) {
        
        io.emit('nuevo mensaje', mensajes);
    });
    socket.on('disconnect', function() {
        console.log('Usuario desconectado');
      });
});
//establecer el servidor de express  parametro 1: puerto parametro 2:fucion callback
server.listen(6677,()=>{
    console.log("servidor está funcionando en http://localhost:6677");
});
 