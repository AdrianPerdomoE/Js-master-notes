import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/project';//importar el modelo de proyecto
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
  constructor(
    private _projectService:ProjectService
  ) {
    this.title="Crear proyecto";
    this.project=new Project("","","","",0,"","");
   }

  ngOnInit(): void {
  }
  onSubmit(projectForm:any){
  }

}
