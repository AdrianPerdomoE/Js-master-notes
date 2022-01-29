import { Injectable} from "@angular/core";
import { HttpClient,HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class peticionesService{
    public url:string;
    constructor(public _http:HttpClient){
        this.url="https://reqres.in/"
    }
    getUser(userid:any):Observable<any>{
        return this._http.get(this.url+"api/users/"+userid);  
    }
    addUser(usuario:any):Observable<any>{
        let params=JSON.stringify(usuario);
        let headers= new HttpHeaders().set('Content-type','application/json');
        return this._http.post(this.url+'api/users',params,{headers:headers});
    }
}
