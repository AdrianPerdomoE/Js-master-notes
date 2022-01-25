//clase(molde del objeto)
//nocion, la clase se debe llamar igual que el fichero
//se usa el export para poder exportar la clase a otro archivo
 export class Camiseta{
//propiedades(caracteristicas del objeto)
    public color:string;
    public modelo:string;
    public marca:string;
    private talla:string="l";
    public precio:number;
//metodos(funciones o acciones del objeto)
    constructor(color:string,modelo:string,marca:string,precio:number){
         this.color=color;
         this.marca=marca;
         this.modelo=modelo;
         this.precio=precio;
    //el constructor es un metodo que se usa para asignar valores a las propiedades
    }
    public cambiar_talla(newtalla:string){
        this.talla=newtalla;
    }
    public get_talla(){
        return this.talla;
    }
}
var camiseta= new Camiseta("red","manga larga","nike",10);
camiseta.color="azul";
camiseta.modelo="manga corta";
camiseta.marca="reebook";
camiseta.precio=34;
camiseta.cambiar_talla("m");