import { Component, OnInit, ViewChild} from '@angular/core'; 


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  @ViewChild("textos") texto:any;
  @ViewChild("contenedor") content:any;
  animando = false;
  public widthSlider:number;
  public anchuraToSlider:number|undefined;
  public creador:any|undefined; 
  constructor() { 
    this.widthSlider=0;
  }

  ngOnInit(): void {
    console.log(this.texto);
    console.log(this.content);
    console.log(document.querySelector("#texto"))
  } 
  cargarSlider(){
    this.anchuraToSlider=this.widthSlider;
  }
  autor(event:any){
    this.creador = event;
  }
  
}
