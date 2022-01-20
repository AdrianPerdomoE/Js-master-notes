"use strict"//activar el modo estricto de Java Script
document.write("Escrito desde fichero externo");
//comentario
/*comentario
multilinea*/ 
//variables
var prueba=0;//variable de scope global
let prueba1=1;//variable de scope local funcion de bloque
const prueba2=2;// variable cuyo contenido nunca va a poder ser modificado durante la ejecución del programa
//Switch
switch(prueba){
    case(10):
        console.log("hola")
        break;
    case(0):
        console.log("El switch funciona");
        break;  
    default:
        console.log("default activo");
        break;      
}
//Do-While
 let x=0;
do{
    x++;
}while(x<0);
console.log(x);
//Alertas y ventanas
alert("Esta es una alerta");
confirm("Estas es una ventana emergente de confirmación");
var resultado= confirm("Estas seguro?");// devuelve el resultado de confirmación de la ventana, puede ser true o false
console.log(resultado);
prompt("Esta es una ventana emergente para pedir datos al usuario",null)//sus parametros son, el texto de la ventana y el valor por defecto
 //prompt es siempre un string, para cambiar su tipo toca usar parse
 