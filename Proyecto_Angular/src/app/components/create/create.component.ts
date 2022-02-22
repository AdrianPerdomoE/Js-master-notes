import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/Project';//importar el modelo de proyecto
import { ProjectService } from 'src/app/services/project.service';//importar los servicios
import { uploadService } from 'src/app/services/upload.service';//servicio para subir las imagenes a la base de datos
import { Global } from 'src/app/services/global';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  providers:[ProjectService, uploadService]
})
export class CreateComponent implements OnInit {
  public title:string;
  public project:Project;
  public status: string;
  public filesToUpload:Array<File>;
  constructor(
    private _projectService:ProjectService,
    private _uploadService:uploadService
  ) {
    this.title="Crear proyecto";
    this.project=new Project("","","","",0,"","");
    this.status="";
    this.filesToUpload=new Array<File>();
   }

  ngOnInit(): void {
  }
  onSubmit(projectForm:any){
    //guardar los datos
    this._projectService.saveProject(this.project).subscribe(
      response=>{
        if(response){
          
          //Subir la imagen
          this._uploadService.makeFileRequest(Global.url+"upLoadImg/"+response.proyecto._id,[],this.filesToUpload,"image").then((result:any)=>{
            this.status="success";
          });
        }else{
          this.status="failed";
        }
        projectForm.reset();
      }
    );
      
  }
  fileChangeEvent(fileInput:any){
    this.filesToUpload = <Array<File>>fileInput.target.files;
  }
} 