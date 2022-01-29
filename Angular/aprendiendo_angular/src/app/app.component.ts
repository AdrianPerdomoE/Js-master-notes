import { Component } from '@angular/core';
import {configuracion} from "./models/configuracion";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'aprendiendo_angular';
  public mostrar_videojuegos:boolean=true;
  public descripcion:string;
  public config;
  ocultar_videojuegos(){
    this.mostrar_videojuegos= !this.mostrar_videojuegos;
  }
  constructor(){
    this.title=configuracion.titulo;
    this.descripcion=configuracion.descripcion;
    this.config=configuracion;
  }
}
