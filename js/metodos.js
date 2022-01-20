"use strict"
//transformacion de textos
var numero=444;
var texto1="hola mundo";
var texto2="  coding desde js  ";
var numero_string=numero.toString();//convierte el numero a un string, debido al funcionamiento de js, las variables funcionan como objetos y esto nos permite acceder a propiedades como esta.
console.log(typeof(numero_string));
texto1.toUpperCase//convierte todas las letras del texto en mayusculas   
console.log(texto1);
texto1.toLowerCase//convierte todas las letras del texto en minusculas
console.log(texto1);
var longitud_texto=texto2.length;//cuenta cuantos caracteres tiene el elemento
var texto_unido=texto1+texto2;//se concatena los textos
console.log(texto_unido);
var texto_concat=texto1.concat( " "+texto2);
//busquedas
var busqueda=texto1.indexOf("hola");//muestra la posicion donde empieza la palabra buscada, si no se encuentra, regresa -1
console.log(busqueda);
var busqueda2=texto1.lastindexOf("hola");//muestra la posicion de la palabra buscada en su ultima aparicion
var busqueda3=texto2.search("coding");//misma forma de uso que el indexof
var busqueda4=texto2.match("desde")//crea un array con la informacion de la posicion donde se encuentra las palabras, el texto donde fue encontrado
var texto3=" como fue que fue que, yo no se qué fue lo que pasó, pero lo que pasó, fue lo que pasó"
var busqueda_matchglobal=texto3.match(/fue/g);//devuelve el array con la cantidad de coincidencias que tenga la busqueda
var pedazo=texto3.substr(6,16);//de un string toma los elementos en los rangos dados y devulve el valor
var caracter=texto3.charAt(24)//devuelve la letra que se encuentra en la posicion dada
var empezar=texto1.startsWith("hola")//devuelve true o false dependiendo si el string empieza o no con el inpunt ingresado
var buscar=texto2.includes("desde")//devuelve true o false si el parametro ingresado se ecuentra en el texto
//cortar y reemplazar texto
var texto3_nuevo=texto3.replace("fue","fui")//intercambia la primera aparicion de la palabra por el  segundo parametro que seria la palabra que va a reemplazar
var slice=texto2.slice(5,10)//recorta un fragmento del texto y lo devuelve
var lista_palabras=texto3.split(" ")//separa las palabras de un string deacuerdo al parametro ingresado(separador) y los ubica en un lista 
var texto1_sinespacios=texto1.trim()//recorta los espacios al inicio y al final del string
//plantillas de texto
var nombre="Adrian";
var apellido="Perdomo";
//se hace una plantilla usando las comillas invertidas
var plantilla=` <h1>Hola que tal</h1>
<h3>Mi nombre es: ${nombre} </h3>
<h3>Mi apellido es: ${apellido} </h3> `;//con ${variable} puedes ingresar directamente una variable a la plantilla
document.write(plantilla);