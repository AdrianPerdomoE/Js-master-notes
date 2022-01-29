import { Component, OnInit} from "@angular/core";
import { Zapatilla } from "../models/zapatilla";
import  {zapatilla_service} from"../services/zapatilla.service";
@Component({
    selector:"zapatillas",
    templateUrl:"./zapatillas.component.html",
    styleUrls:["./zapatillas.component.css"],
    providers:[zapatilla_service]
})
export class zapatillasComponent implements OnInit{
    public titulo:string;
    public zapatillas:Array<Zapatilla>=[];
    public color:string;
    public mi_marca:string;
    constructor(
        private _zapatilla_service:zapatilla_service
    ){
        this.mi_marca="Adriap";
        this.color="orange";
        this.titulo="Componente de zapatillas";
    } 
    ngOnInit(): void {
        this.zapatillas=this._zapatilla_service.getZapatillas();
        console.log(this.zapatillas);
    }
    onblur(){//cuando ya no se está haciendo focus a un elemento
        console.log("evento on blur");
    }
    enter_up(){
        alert(this.color);
    }
}