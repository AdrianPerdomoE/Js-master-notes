"use strict"
var arr=[1,12,12,453,5,1241]//forma tradicional de crear un arreglo
var arreglo= new Array(23213,346,5435,"hola")//crear un arreglo como si fuera un objeto
arr.forEach((elemento,index,array)=>{console.log(elemento+" indice: "+index);console.log(array)});//elemento=dato que sustrae del arreglo, index=posicion en la que se encuentra,array=muestra el array original que se esta iterando
//Cómo manipular los arreglos
var peliculas=["la cruda verdad","vengadores","101 dalmatas","mulan","tren infinito"];
var categorias=["romance","acción","aventura","dibujos animados"];
var cine=[peliculas,categorias];
peliculas.push("Batman");//Añadir un elemento a un array en la ultima posicion
peliculas.pop();//saca el ultimo elemento del array
function sacar_elemento(texto,array){//una forma para buscar un elemento en un array y eliminarlo si se encuentra
    let indice=array.indexOf(texto);
    if(indice!=-1){
        array.splice(indice,1);//el segundo parametro indica cuantos elementos apartir de indice ingresado seran borrados
        console.log(array);
    }
}
var peliculas_string=peliculas.join();//peliculas se convierte a un string separado por , si no hay parametro ingresado, el parametro ingresado sera el separador entre los elementos del array 
var cadena_textos="hola texto1 texto2 como es posible";
var cadena_array=cadena_textos.split(" ");//convierte un string en un arreglo, cada elemento indicado por el separador dado en el parametro del split
//Ordenar un array
peliculas.sort();//ordena en orden alfabetico
peliculas.reverse();//le da la vuelta al orden actual del arreglo   
for (let elemento in peliculas){
        console.log(elemento);
}//metodo para recorrer un arreglo, cada elemento por por elementos dentro de un array
let newcategorias=categorias.map(x=>x+" pase por map")//pasa por cada elemento del arreglo y le ejecuta la funcion dada y retorna este metodo como el nuevo elemento de un nuevo arreglo
let newarr= arr.reduce((acumulador,elemento)=>elemento+acumulador,0)//recorre el array, se ingresa un acumulador y el nombre para los elementos dela rreglo,en derecha ira el metodo que se realizara con estas dos variables,y el valor resultante se guardara automaticamente como el nuevo valor del acumulador, el valor dado despues de la coma es el valor inicial del acumulador
let newarrfiltrado=arr.filter(x=>x<500)//filtra los elementos de un arreglo deacuerdo a la funcion dada, genera un arreglo nuevo
//buscar en arreglos
var busqueda=categorias.find(elemento=>elemento=="acción");//se usa para comprobar si un elemento existe dentro de un array o no
 var busqueda_indice=categorias.findIndex(elemento=>elemento=="acción")//busca el indice donde se encuentra el elemento 
 arr.some(elemento=>elemento>=12);//devuelve false o true si algun elemento entre los elementos cumple la condicion a la derecha
 