import { Component, OnInit } from '@angular/core'; 
declare var $:any;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  animando = false;
  constructor() { }

  ngOnInit(): void {
      $('.bxslider').bxSlider({
        mode: 'fade',
        captions: true,
        slideWidth: 600
      }); 
  }
  

}
