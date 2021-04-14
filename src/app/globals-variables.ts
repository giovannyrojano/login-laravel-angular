
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { APIService } from './services/api.service';

import { CookieService } from "ngx-cookie-service";

@Injectable()

export class DataSharingService {
  public token:string = undefined;
  public nombre:string = undefined;

  constructor(private cookies:CookieService){

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
