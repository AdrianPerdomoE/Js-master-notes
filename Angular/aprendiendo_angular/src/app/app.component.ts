import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'aprendiendo_angular';
  public mostrar_videojuegos:boolean=true;
  ocultar_videojuegos(){
    this.mostrar_videojuegos= !this.mostrar_videojuegos;
  }
}
