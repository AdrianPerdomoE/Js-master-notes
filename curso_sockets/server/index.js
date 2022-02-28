"strict"
//cargar librerias configuración basica
var express = require("express");
var app = express();
var server = require("http").Server(app);    
var socket_io = require("socket.io")(server);

//crear rutas
app.get("/",(req,res)=>{
    res.status(200).send("hola mundo desde la ruta");
})
//establecer el servidor de express  parametro 1: puerto parametro 2:fucion callback
server.listen(6677,()=>{
    console.log("servidor está funcionando en http://localhost:6677");
});

