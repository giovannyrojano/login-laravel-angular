import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from "ngx-cookie-service";

import{ AppComponent}from '../app.component';

@Injectable({
  providedIn: 'root'
})
export class APIService {



  constructor(private http : HttpClient, private cookies:CookieService ) { }

  Login(params){
    let headers=new HttpHeaders().set('Content-Type','application/json');
    return this.http.post("https://tranquil-garden-35428.herokuapp.com/api/login",params,{headers:headers});
  }
  LogOut(token:any){
    let headers= new HttpHeaders().set('Authorization', 'Bearer '+token);
    return this.http.post("https://tranquil-garden-35428.herokuapp.com/api/logout",undefined,{headers:{'Authorization': 'Bearer '+token}});
 
 
  }



  getAll(token){
    return this.http.get("https://tranquil-garden-35428.herokuapp.com/api/users",{headers:{'Authorization': 'Bearer '+token}});
  }


  store(params){
    let headers=new HttpHeaders().set('Content-Type','application/json');
    return this.http.post("https://tranquil-garden-35428.herokuapp.com/api/registrar",params,{headers:headers});
  }

  setToken(token:any,name:any) {
    this.cookies.set("token",token);
    this.cookies.set("token_name",name);
  }
  getToken() {
      return this.cookies.get("token");
    }
    
  getName(){
      return this.cookies.get("token_name");
    }
 


  deleteToken(){
    this.cookies.delete("token");
    this.cookies.delete("token_name");
  }

}
