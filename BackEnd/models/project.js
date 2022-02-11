"use strict"
// pasos previos para poder crear un esquema en mongo
var mongoose=require("mongoose");
var esquema= mongoose.Schema;
// creacion del modelo
var project_esquema = esquema({
    name:String,
    description:String,
    category:String,
    langs:String,
    year:Number,
    img:String
});
module.exports=mongoose.model("project",project_esquema);
//guarda los modelos en la coleccion de nombre plural del primer parametro