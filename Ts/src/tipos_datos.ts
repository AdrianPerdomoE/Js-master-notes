// string
let cadena:string="Adrian";
// number
let numero:number=12;
// boolean
let verdadero_falso:boolean=true;
// cualquier tipo (desactivar el tipado estricto)
let cualquiera:any="Hola";
cualquiera=3;
cualquiera=false;
//arrays<tipo de los terminos> 
var lenguajes:Array<string>=["php","java","js"];
//otra sintaxis para crear un array de un tipo especifico, igual a c
let year:number[]=[12,43,65];
//variable de multiple tipo
let divergente: number|string=24;
divergente="cambié";
//crear un tipo de dato 
type letrasonumeros= string|number;
let prueba:letrasonumeros=45;
prueba="se puede cambiar";
//let vs var
var numero1=10;
var numero2=12;
if (numero1==10){
    let numero1=44;
    var numero2=55;
    console.log(numero1,numero2);
}
console.log(numero1,numero2);
//let actua en bloque, var permite cmabiar la declaracion en el scope global