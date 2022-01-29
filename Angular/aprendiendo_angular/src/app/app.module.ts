import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import  {FormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {videojuegoComponent} from './videojuego/videojuego.component';
import {zapatillasComponent} from "./zapatillas/zapatillas.component";
import { CursosComponent } from './cursos/cursos.component';
import { HomeComponent } from './home/home.component';
import { ExternoComponent } from './externo/externo.component';
import{HttpClientModule}from "@angular/common/http"; 
import { calculadoraPipe } from './pipes/calculadora.pipe';
import { FormularioComponent } from './formulario/formulario.component';
@NgModule({
  declarations: [
    AppComponent,
    videojuegoComponent,
    zapatillasComponent,
    CursosComponent,
    HomeComponent,
    ExternoComponent,
    calculadoraPipe,
    FormularioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
