"use stric"
let ul=document.querySelector("#lista");
var usuarios=[];
//fetch(ajax) y peticiones a servicios/apis rest
//el metodo fetch recibe una url que mande un Json
//con then ingresamos una funcion para aplicar un proceso a lo que llega de la url, se llaman promesas
fetch("https://jsonplaceholder.typicode.com/users").then(data=>data.json()).then(data=>{
    usuarios=data;
    console.log(usuarios);
    usuarios.map((data,i)=>{
        let nombre = document.createElement("li");
        nombre.innerHTML=data.name+": "+data.username;
        ul.append(nombre);
        document.querySelector(".loading").style.display="none";//para ocultar el dialogo de carga  
    });
});
//fuera del then del fetch, los datos ya no son accesibles(desaparecen del array)
//concepto importante, las promesas, esperaran que la anterior termine su proceso para hacer la suya.
//como crear promesas
function getinfo(){
    let persona={nombre:"Adrian",apellido:"Perdomo",edad:20};
    return new Promise((resolve,reject)=>{
        var persona_str="";
        setTimeout(function(){
            persona_str=JSON.stringify(persona);
            if (typeof(persona_str)!="string" || typeof(persona_str)==""){
                return reject("Error");
            }
        },3000);//3 segundos de espera para realizar la funcion interna
        
    return resolve(persona_str);
    });
}
//usarlo
fetch("https://jsonplaceholder.typicode.com/users").then(data=>data.json()).then(data=>{
    return getinfo();
}).then(data=>console.log("datos: "+data)).catch(error=>{console.log(error);}); 
//capturar errores en las promesas
//manejar errores en el codigo
try{let year=2021;
alert(yea);
}catch(error){console.log(error);}