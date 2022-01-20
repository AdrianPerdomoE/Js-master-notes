"use stric"
//json -java script object notation
var pelicula={titulo:"batman vs superman",year:2017,pais:"USA"};
//formato para crear un json se  accede como en pyton, parece un diccionario pero accediendo a propiedades como objetos
//local storage
 //forma de saber si el local storage se puedo usar en un navegador
if(typeof(Storage)!="undefined"){
    console.log("local storage disponible");
 }
 else{
     console.log("Incompatible con local storage");
 }
 //guardar datos 
 localStorage.setItem("Clave","valor");
 //obtener elemento del localStorage
 let valor_guardado=localStorage.getItem("clave"); 
 //guardar objetos Json
 localStorage.setItem("Pelicula",JSON.stringify(pelicula));
 //para guardar el json hay que convertir el json en string  
  //al usar el metodo del json.stringify podemos exitosamente guardar el objeto como un string
//esta es la manera correcta de guardar el elemento asi como enviarla a un api.
//recuperar el objeto del localStorage
let objeto_guardado=JSON.parse(localStorage.getItem("pelicula"));
//para volver a obtener el objeto del string guardado, usamos el metodo de json.parse que no permite
//reconstruir el objeto del string guardado en el localStorage 
//borrar los datos del localStorage
localStorage.clear();