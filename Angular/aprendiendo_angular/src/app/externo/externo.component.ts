import { Component, OnInit } from '@angular/core';
import { peticionesService } from '../services/peticiones.service';
@Component({
  selector: 'app-externo',
  templateUrl: './externo.component.html',
  styleUrls: ['./externo.component.css'],
  providers:[peticionesService]
})
export class ExternoComponent implements OnInit {
   public user:any;
   public userId:any;
   public fecha:any;
   public newUser:any;
   public user_saved:any;
  constructor( private _peticionesService:peticionesService) { 
    this.userId=1;
    this.newUser={
      name:"",
      job:""
    };
    this.user_saved=false;
  }

  ngOnInit(): void {
    this.fecha=new Date();
    this.cargar_usuario();
  }
  cargar_usuario(){
    this.user=false;
    this._peticionesService.getUser(this.userId).subscribe(
      result=>{
        this.user= result.data
      }
    );
  }
  onSubmit(newuser:any){
    this._peticionesService.addUser(this.newUser).subscribe(result=>{this.user_saved=result;});
    newuser.reset(); 
  }

}
