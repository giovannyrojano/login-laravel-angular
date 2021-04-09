
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { APIService } from './services/api.service';
@Injectable({
  providedIn: 'root'
})
export class GlobalsService {

  constructor(private _services:APIService) {
   
  }
 public nombre:string = undefined;

  public token:string = undefined;
  public isUserLoggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
}
