import { Component, OnInit } from '@angular/core';
import { Usuario } from '../models/Usuario';
@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  public usuario:Usuario;
  public usuarios:Array<Usuario>;
  constructor() { 
    this.usuario=new Usuario("","","","");
    this.usuarios=[];
  }

  ngOnInit(): void {
  }
  onSubmit(form:any){
    console.log(this.usuario);
    this.usuarios.push(this.usuario);
    form.reset();
  }

}
