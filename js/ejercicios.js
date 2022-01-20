"use strict"
//programa que pida dos numeros y determine cual es mayor, cual es menor y si son iguales
var mayor=0;
var menor=0;
 let i=0
 let iguales=false
do{
    let number=parseInt(prompt("Ingrese un numero",0))
    i++
    if(i==0){
        menor=number;
        mayor=number;
    }
    else{
        if(mayor<number){
            menor=mayor;
            mayor=number;
        }
        else{
            if(number<menor){
                menor=number;
            }
        }    
        if(menor==number){
            iguales=true;
        }
    }
}while(i<2);
console.log(" menor= "+menor+" mayor= "+mayor+" iguales= "+iguales);
//otra forma
var numero1=parseInt(prompt("Ingrese el primer numero",0));
var numero2=parseInt(prompt("Ingrese el segundo numero",0));
if(numero1>numero2){
    console.log("En el otro metodo, el mayor es el primer numero "+numero1+" y el menor es el segundo numero "+numero2)
}
else{
    if(numero1==numero2){
        console.log("Los numeros son iguales")
    }
    else{
        console.log("En el otro metodo, el mayor es el segundo numero "+numero2+" y el menor es el primer numero "+numero1)
    }
}
if(isNaN(numero1)){//isNaN verifica si el valor no es un number y devuelve un boolean, true o false
    alert("Error, dato ingresado no es un numero")
}
/*1) pide 6 numeros por pantalla y los ingrese a un array
2) mostrar el array entero en el cuerpo de la pagina y en la consola
3) ordenar el array y mostrarlo 
4) invertir el orden y mostrarlo
5) mostrar cuantos elementos tiene el arrray
6) busqueda de un valor introducido por el usuario, decir si se encuentra y el indice*/
var arreglo=[]
for(let i=0;i<6;i++){
    arreglo.push(0)
}
arreglo=arreglo.map(x=>parseInt(prompt("Ingrese un numero: ")))
function mostrar (array){
//let arr_format=array.map(x=>`<li>${x}</li>`)
array.forEach(element =>console.log(element))
//arr_format=arr_format.join(" ")
let texto=`<h1>elementos del arreglo</h1>
<ul>${array.map(x=>`<li>${x}</li>`).join(" ")}</ul>`
document.write(texto)
}
let longitud=`la longitud del arreglo es de${arreglo.length} `
document.write(longitud)
mostrar(arreglo)
arreglo=arreglo.sort()
mostrar(arreglo)
arreglo.reverse()
mostrar(arreglo)
const buscar=(array)=>{let item=parseInt(prompt("Ingrese el numero que desea buscar"));
let busqueda=array.find(elemento=>elemento==item);
if(busqueda==item){
    let indice= array.findIndex(element=>element==item)
    return `el numero ha sido encontrado, esta en el indice ${indice} del arreglo`
}  
return "No ha sido encontrado el valor ingresado"
}
document.write(buscar(arreglo))
