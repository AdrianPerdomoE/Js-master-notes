 //importar modulos del router de angular
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 //importar componentes
import { zapatillasComponent } from "./zapatillas/zapatillas.component";
 import { videojuegoComponent } from "./videojuego/videojuego.component";
 import { CursosComponent } from "./cursos/cursos.component";
 import { HomeComponent } from "./home/home.component";
 import { ExternoComponent } from './externo/externo.component';
 import { FormularioComponent } from './formulario/formulario.component';
//array de las rutas/componentes
const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"zapatillas",component:zapatillasComponent},
  {path:"videojuego",component:videojuegoComponent},
  {path:"cursos",component:CursosComponent},
  {path:"cursos/:nombre",component:CursosComponent},
  {path:"externo",component:ExternoComponent},
  {path:"Formulario",component:FormularioComponent},
  {path:"**",component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
