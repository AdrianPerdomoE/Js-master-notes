import { Injectable } from "@angular/core";
import { Zapatilla } from "../models/zapatilla";
@Injectable()
export class zapatilla_service{
    public zapatillas:Array<Zapatilla>;
    constructor(){
        this.zapatillas=[
            new Zapatilla("Rebook",123,"Rebook",true,"white"),
            new Zapatilla("Adidas",190,"Adidas",true,"black"),
            new Zapatilla("Nike",90,"Nike",false,"red")
        ];
    }
    getTexto():string{
        return "Servicio funcionando correctamente";
    }
    getZapatillas():Array<Zapatilla>{
        return this.zapatillas;
    }
}