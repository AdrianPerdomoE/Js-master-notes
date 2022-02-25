import { Component, OnInit } from '@angular/core';
//importar utilidades en el componente
import { Project } from 'src/app/models/Project';
import { ProjectService } from 'src/app/services/project.service';
import { Global } from 'src/app/services/global'; 
import { uploadService } from 'src/app/services/upload.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
  providers:[ProjectService, uploadService]
})
export class EditComponent implements OnInit {
  public title:string;
  public project:Project;
  public status:string;
  public filesToUpload:Array<File>;
  public url:string;
  constructor(
    private _router:Router,
    private _route:ActivatedRoute ,
    private _projectService:ProjectService,
    private _uploadService:uploadService
  ) { 
      this.title="Editar proyecto";
      this.status="";
      this.filesToUpload= new Array<File>();
      this.project=this.project=new Project("","","","",0,"","");  
      this.url=Global.url;
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
  onSubmit(){
    this._projectService.upDateProject(this.project).subscribe({
      next:(Response)=>{
        if(Response.project){
          if(this.filesToUpload.length>=1){
            this._uploadService.makeFileRequest(Global.url+"upLoadImg/"+this.project._id,[],this.filesToUpload,"image").then((result:any)=>{});
          }
          this.status="success";
        }else{
          this.status="failed";
        }
        scrollTo(0,0)
      },
      error:(err)=>{console.log(<any>err)},
      complete:()=>{}
    });    
  }
  fileChangeEvent(fileInput:any){
    this.filesToUpload = <Array<File>>fileInput.target.files; 
  }

}
