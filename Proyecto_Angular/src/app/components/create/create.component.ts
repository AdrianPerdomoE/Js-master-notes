import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/Project';//importar el modelo de proyecto
import { ProjectService } from 'src/app/services/project.service';//importar los servicios

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  providers:[ProjectService]
})
export class CreateComponent implements OnInit {
  public title:string;
  public project:Project;
  public status: string;
  constructor(
    private _projectService:ProjectService
  ) {
    this.title="Crear proyecto";
    this.project=new Project("","","","",0,"","");
    this.status="";
   }

  ngOnInit(): void {
  }
  onSubmit(projectForm:any){
    this._projectService.saveProject(this.project).subscribe(
      response=>{
        if(response){
          this.status="success";
        }else{
          this.status="failed";
        }
        projectForm.reset();
      }
    );
      
  }

}
