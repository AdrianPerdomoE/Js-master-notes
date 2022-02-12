import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Proyecto_Angular';
  rutas=["sobre-mi","proyectos","adpe","crear-proyecto","contacto"];
  enrutar(name:string){
    return "/"+name;  
  }
  verificarMitadLogo(index:number){
    return index==2;
  }
}
