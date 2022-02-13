import { Injectable } from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { observable } from "rxjs";
import {Project} from "../models/project";
import { Global } from "./global";

@Injectable()
export class ProjectService{
    public url:string;
    constructor(
        private _http:HttpClient
    ){
        this.url=Global.url; 
    }
    testService(){
        return "Probando servicio de angular";
    }
}