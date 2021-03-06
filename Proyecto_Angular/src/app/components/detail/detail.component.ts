import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/Project';
import { ProjectService } from 'src/app/services/project.service';
import { Global } from 'src/app/services/global';
import { Router, ActivatedRoute, Params } from '@angular/router';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
  providers:[ProjectService]
})
export class DetailComponent implements OnInit {
  public url:string;
  public project:Project;
  public confirm:boolean;
  constructor(
    private _projectService:ProjectService,
    private _router:Router,
    private _route:ActivatedRoute 

  ) {
    this.url=Global.url;
    this.project=new Project( "","","","",0,"","");
    this.confirm=false;
   }

  ngOnInit(): void {
    this._route.params.subscribe(params=>{
      let id = params["id"];
      this.getProject(id);
    });
  }
  getProject(id:string){
    this._projectService.getProject(id).subscribe(
      Response=>{
        this.project= Response.project;
      }
      );
  }
  deleteProject(id:string){
    this._projectService.deleteProject(id).subscribe(
      {
        next:(response)=>{
          if(response.project){
            this._router.navigate(['/proyectos'])
          }
        },
        error:(err)=>{
          console.log(<any>err);
        },
        complete:()=>{}
      }
    );
  }

}
