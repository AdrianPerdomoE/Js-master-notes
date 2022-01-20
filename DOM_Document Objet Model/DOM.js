"use strict"
var caja=document.getElementById("micaja");//guardar en una variable el contenido del elemento con id="tal"    
console.log(caja.innerHTML);
caja.innerHTML="Nuevo texto en la caja desde js";//usar la naturaleza de objeto de los elementos para acceder a sus caracteristicas
caja.style.background="blue";//cambiar las caracteristicas de un elementos usando sus naturaleza como objeto.
caja.style.padding="20px";
caja.style.color="red";
function cambia_color(color){//funcion que nos muestra una utilidad 
    caja.style.color=color
} ;
caja.className="cajita";
var casilla=document.querySelector("#micaja")//se seleciona elemento como en css, #name para Id, .name para  class, name para el nombre de la etiqueta
//esta es una manera de selecionar un elemento del documento html
casilla.style.background="Green"
casilla.style.fontSize="23px"
//conseguir elementos por etiqueta
var alldives_get=document.getElementsByTagName("div")//devuelve un array con los elementos que trae el selector
console.log(alldives_get)
console.log(alldives_get[1].textContent);
alldives_get[1].innerHTML="cambio realizado exitosamente"
var alldives_query=document.querySelectorAll("div")//manera con query de selecionar un conjunto de elementos que se guardan en un array
console.log(alldives_query);
var seccion=document.querySelector("#miseccion");
var hr=document.createElement("hr");
for(let valor in alldives_query){
    if(typeof(alldives_query[valor].textContent)=="string"){
        var parrafo=document.createElement("p");//nos permite crear una etiqueta p en un espacio en memoria
        var texto=document.createTextNode(alldives_query[valor].textContent);//no permite crear un espacio con texto en memoria
        parrafo.append(texto);//ingresamos el texto en la etiqueta
        seccion.append(parrafo);//ingresamos la etiqueta en el espacio que tenemos designado para el en el html
    }
}
seccion.append(hr); 
var divrojos= document.getElementsByClassName("rojo");
console.log(divrojos);
divrojos[1].style.background="red";
for ( let div in divrojos) {
    console.log(divrojos[div]);
    if(divrojos[div].className=="rojo"){divrojos[div].style.background="pink"/*el for in nos da mas informacion aparte del
     elemento, como el tamaño del array, por lo cual es necesario hacer 
    un condicional para asegurarse de que estamos haciendo el proceso unicamente con los items que necesitamos*/
console.log(divrojos[div])}//con array[element]sacamos el elemento del arreglo en el cual nos encontramos durante la iteración
}; 

