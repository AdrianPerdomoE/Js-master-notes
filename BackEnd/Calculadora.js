"use strict"
console.log("Usando nodejs");
var params=process.argv.slice(2);
//Recoger parametros de consola, se empieza desde 2 porque en 1 esta la direccion del archivo donde se ejecuta el comando
let num1=parseFloat(params[0]);
let num2=parseFloat(params[1]);
let operaciones=`
            suma:${num1+num2}
            resta:${num1-num2}
            Multiplicación:${num1*num2}
            división${num1/num2}
        `;
console.log(operaciones);
