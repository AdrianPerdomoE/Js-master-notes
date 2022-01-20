"use strict"
let form=document.querySelector("#formmovies");
form.addEventListener("submit", function(){
    let titulo=document.querySelector("#addpelicula").value;
    if(titulo.length>0){localStorage.setItem(titulo,titulo);}
});
let ul=document.querySelector("#list_movies");
for (const element in localStorage) {
    if(typeof(localStorage[element])=="string"){
        let li=document.createElement("li");
        li.append(localStorage[element]);
        ul.append(li);
    }
}