//archivo para configurar express y bodyparser
"use strict"
var express = require("express");
var bodyParser = require("body-parser");
var app = express();
//configuracion  cargar archivos de rutas
var projectRoutes = require("./routes/project");
//configuracion de middlewares (metodo que se ejecuta antes de ejecuta la accion de un controlador
/* osea el resultado de la peticion {middleware-metodo de la ruta llamada})
en este caso se va a crear un middleware global*/
app.use(bodyParser.urlencoded({ extended: false }));
//aca lo que se hizo fue convertir lo que llegue a un objeto json para su uso 
app.use(bodyParser.json());//cualquier peticion la convirte en json
//configuracion de CORS
// Configurar cabeceras y cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});
//Configuracion de rutas
app.use("/api",projectRoutes);
//usar el url /api/test
/*app.get("/test",(req,res)=>{
    res.status(200).send({mssg:"prueba configuracion de primera ruta con nodeJS"})
}); pruebas
app.get("/",(req,res)=>{
    res.status(200).send("<h1>Pagina de inicio</h1>")
});
app.post("/test",(req,res)=>{
    console.log(req.body.nombre);
    //body para sacar el dato que viene en el cuerpo de la peticion
    //query para sacar el dato que viene en la url
    //params es un parametro obligatorio que va por URL ejm '/test/:id'
    res.status(200).send({user:"Adrian"});
});*/
//Exportar el modulo
module.exports= app;