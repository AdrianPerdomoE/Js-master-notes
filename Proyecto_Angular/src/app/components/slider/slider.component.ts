import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  @Input() anchura:number | undefined;
  @Output() getAutor = new EventEmitter();
  public autor:any;

  constructor() { 
    this.autor ={
      nombre:"Adrian Perdomo",
      correo:"perdomoecheverri@gmail.com"
    };
  }

  ngOnInit(): void {
    $('.bxslider').bxSlider({
      mode: 'fade',
      captions: true,
      slideWidth:this.anchura
    }); 
  }
  sendAutor(event:any){
    this.getAutor.emit(this.autor);
    // document.querySelector("#bttnAutor")?.remove()
    $("#bttnAutor").hide();
  }

}
