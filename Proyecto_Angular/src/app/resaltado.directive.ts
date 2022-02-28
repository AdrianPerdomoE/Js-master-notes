import { Directive, ElementRef } from '@angular/core';
// ng g d nombre para generar una directiva en el proyecto
@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  constructor(el:ElementRef) { 
    el.nativeElement.style.background="blue";
    el.nativeElement.style.color="white";           
  } 
}
