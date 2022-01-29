import { Pipe, PipeTransform  } from "@angular/core";
@Pipe({name:"calculadora"})
export class calculadoraPipe implements PipeTransform{
// dato | pipe: otrodato 
// param1        param2
    transform(value:any, value2:any) {
        let operaciones=`
            suma:${value+value2}-
            resta:${value-value2}-
            Multiplicación:${value*value2}-
            división${value/value2}
        `;
        return operaciones
    }
}
