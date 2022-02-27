import { Component, OnInit } from '@angular/core'; 


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  animando = false;
  public widthSlider:number;
  public anchuraToSlider:number|undefined;
  public creador:any|undefined;
  constructor() { 
    this.widthSlider=0;
  }

  ngOnInit(): void {
    
  }
  cargarSlider(){
    this.anchuraToSlider=this.widthSlider;
  }
  autor(event:any){
    this.creador = event;
  }
  
}
