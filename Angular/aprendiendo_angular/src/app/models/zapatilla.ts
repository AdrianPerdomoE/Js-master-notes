export class Zapatilla{
  /*  
    public nombre:string;
    public precio:number;
    public marca:string;
    public stock:boolean;
    public color:string;
    constructor(nombre:string,precio:number,marca:string,stock:boolean,color:string){
        this.color=color;
        this.marca=marca;
        this.nombre=nombre;
        this.precio=precio;
        this.stock=stock;
    } codigo repetitivo, se puede hacer mas facil con ts*/
    constructor(
        public nombre:string,
        public precio:number,
        public marca:string,
        public stock:boolean,
        public color:string){}
    // de esta forma se declaran las propiedades y los this. son implicitos
    }