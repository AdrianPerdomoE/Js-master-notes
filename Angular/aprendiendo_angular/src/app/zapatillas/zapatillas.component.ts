import { Component } from "@angular/core";
@Component({
    selector:"zapatillas",
    templateUrl:"./zapatillas.component.html"
})
export class zapatillasComponent{
    public titulo:string;

    constructor(){
        this.titulo="Componente de zapatillas"
    }
}