import{Camiseta} from "./Camiseta";
// para traer una clase que esta siendo exportado
class Main{
    constructor(){
        console.log("Aplicacion js cargada!!")
    }
}
var main=new Main();
let misa=new Camiseta("ROJO","CORTA","nike",34);
//interface las interfaces dictan que propiedades y metodos debe tener la clase que lo implementa
interface automovil_base{
    marca:string;
    setColor(color:string):void;
    getColor():string;
}
//Decorador
function estampar(logo:string){
    return function(target:Function) {
        target.prototype.estampado= function():void {
           console.log("Vehiculo estampado con el logo de "+ logo); 
        }
    }
}
//aplicar decorador
@estampar ("Formula 1") 
class Automovil implements automovil_base{
    private color:string="Blue";
    public marca:string;
    public puestos:number;
    public velocidad:string;
    constructor(marca:string,puestos:number,velocidad:string){
        this.marca=marca;
        this.puestos=puestos;
        this.velocidad=velocidad;
    }
    setColor(color: string): void {
        this.color=color;
    }
    getColor(): string {
        return this.color;
    }
}
let buggati= new Automovil("buggati",4,"200 km/h");
//Herencia
class Motocicleta extends Automovil{
     public parrilla:boolean;
     constructor(parilla:boolean,marca:string,velocidad:string){
        super(marca,1,velocidad) 
        this.parrilla=parilla;
     }
}
let moto= new Motocicleta(false,"ninja","100 km/h");
 