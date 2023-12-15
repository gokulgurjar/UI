import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable, map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UIAppServiceService {
  constructor(private http:HttpClient) { }
  getdata(owner:any,repository:any,oid:any):Observable<any>{
    let url="https://localhost:7229/repositories/" +owner+'/'+repository+'/commits/'+oid;
   return this.http.get<any>(url);
   
  }




}
