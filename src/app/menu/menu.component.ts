import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Router,NavigationStart} from '@angular/router';
import { APIService } from '../services/api.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit,OnChanges {
  public token:any;
  public name:any;
  
  constructor(private _services:APIService,private router: Router) { }

  ngOnInit(): void {
  this.token=this._services.getToken();
  this.name=this._services.getName();
  }
  ngOnChanges(): void {
 console.log(this.token,this.name);
  }

  logOut(){
    this._services.LogOut(this.token)
    .subscribe(
      response=>{
        console.log(response);
        this._services.deleteToken();
        this.router.navigate(['/login']);

      },
      err=>{
        alert('error no pudo cerrar sesion correctamente');
      }
    );
  }
}
