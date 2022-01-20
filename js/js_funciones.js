//use strict
//parametros rest y spread 
function listado(entrada1,entrada2){//funcion normal, con parametros definidos
let arr=[entrada1,entrada2]
document.write("<table>")
for (let i=0; i< arr.length; i++) {
    document.write("<tr><td>"+arr[i]+"<td/></tr>")
}
}
function listados(entrada1,entrada2,...entradas){//funcion rest, con cantidad de parametros desconocidos
    let arr=[entrada1,entrada2]
    if(entradas!=[]){
    arr=arr.concat(entradas)}
    document.write("<table>")   
    for (let i=0; i< arr.length; i++) {
        document.write("<tr><td colspan=2>"+arr[i]+"<td/></tr>")
    }
    }
function listadosXXX(entrada1,entrada2,...entradas){//funcion rest, con cantidad de parametros desconocidos
    let arr=[entrada1,entrada2]
    if(entradas!=[]){
        arr=arr.concat(entradas)
    }
    const table = `<table>${arr.map(e => `<tr><td colspan="2">${e}</td></tr>`).join("")}</table>`;//alt gr+}==``
    //document.getElementsByTagName('body')[0].innerHTML = table;
    document.write(table);
}
    var frutas=["Calabaza","Fresa"]
    function lista(entrada1,entrada2,...entradas){//funcion rest, con cantidad de parametros desconocidos
        let arr=[entrada1,entrada2]
        console.log(entrada1,entrada2)
        console.log(entradas)
        if(entradas!=[]){
        arr=arr.concat(entradas)}
        document.write("<table>")   
        for (let i=0; i< arr.length; i++) {
            document.write("<tr><td colspan=2>"+arr[i]+"<td/></tr>")
        }
        }
lista(...frutas,"cabeza","pies")//Forma spread de una función, usar un array en la función y "esparcir sus datos en los parametros de entrada"
lista("cabeza","pies",...frutas)
const funcion_anonima=function(entry){
    return "la funcion anonima fue llamada"+"entrada ="+entry
}//Una funcion anonima es una funcion que guardamos en una variable, puede tener parametros pero la funcion no lleva nombre, se usa el nombre de la variable
function sumar(n1,n2,sumaymuestra,sumapordos){//funcion callback, es una funcion que como parametros se ingresan funciones anonimas para que durante la ejecucion de la funcion primaria se ejecute
    let suma=n1+n2
    sumaymuestra(suma)
    sumapordos(suma)
    return suma
}
sumar(3,4,function(dato){console.log("la suma es: "+dato)},function(dato){console.log("la suma*2 es: "+dato*2)})//ejemplo ingresando funciones anonimas a la funcion callback
 const funcion_flecha = (numero)=>{for (let i=0;i<numero;i++){console.log(i)}}//es crear funciones anonimas pero sustituir la palabra function por => para reducir el tamaño del codigo
