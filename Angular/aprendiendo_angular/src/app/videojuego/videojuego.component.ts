import { Component, OnInit, DoCheck, OnDestroy} from "@angular/core";
@Component({
    selector:"videojuego",
    templateUrl:"./videojuego.component.html"
})
export class videojuegoComponent implements OnInit, DoCheck, OnDestroy{
    public titulo: string;
    public listado: string; 
    constructor(){
        this.listado="Listado de los juegos más populares"
        this.titulo="Componente de videojuegos"
        console.log("se ha cargado el componente videojuego.component.ts")
    }
    ngOnInit(): void {
        console.log("oninit ejecutado");
    }
    ngDoCheck(): void {
        console.log("Docheck ejecutado");
    //se ejecuta cada vez que hay un cambio en la aplicacion
    }
    cambiar_titulo(){ 
        this.titulo="Nuevo titulo del componente";
    }   
    ngOnDestroy(): void {
        //se ejecuta antes de eliminar la instancia de un componente
        console.log("on destroy ejecutado");
    }
}