 "use strict"
 //cargar el modulo con la configuracion del servidor
 var app=require("./app");
 // variable para guardar el puerto del servidor
 var port = 3700;
 //forma para realizar la conexion con la base de datos de mongo
 var mongoose = require("mongoose");
 //indicar que es una promesa
 mongoose.Promise= global.Promise;
 //esto es una promesa
mongoose.connect("mongodb://localhost:27017/portafolio")
.then(()=>{
    console.log("Conexion a la base de datos establecida con exito...");
    //crear el servidor
    app.listen(port,()=>{
        //el segundo parametro es una funcion de callback que se ejecuta si se procesa correctamente el servidor
        console.log("Servidor corriendo correctamente en la url:localhost:3700");
    })
})
.catch((err)=>{
    console.log("Ha ocurrido un error");
    console.log(err);
});
