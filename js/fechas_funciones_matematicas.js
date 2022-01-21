"use strict"
let fecha=new Date();
let year=fecha.getFullYear();
let mes=fecha.getMonth();
let dia=fecha.getDay();   
let hora=fecha.getHours();
console.log(fecha);
let texto_hora=
`
    El año es: ${year}
    El mes es: ${mes}
    El dia es: ${dia}
    La hora es: ${hora}
`;
let div1=document.querySelector("#espacio1");
let parr=document.createElement("p");
parr.append(texto_hora);
div1.appendChild(parr);
//las funciones matematicas se usan apartir de Math
let boton=document.querySelector("#espacio2");
boton.addEventListener("click",function(){console.log(Math.floor(Math.random()*100));})