"use strict"
let form=document.querySelector("#formmovies");
form.addEventListener("submit", function(){
    let titulo=document.querySelector("#addpelicula").value;
    localStorage.setItem(titulo,titulo);
});