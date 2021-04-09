import { Token } from '@angular/compiler/src/ml_parser/lexer';
import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalsService} from 'src/app/globals-variables';
import { APIService } from 'src/app/services/api.service';

@Component({
  selector: 'app-menu-desktop',
  templateUrl: './menu-desktop.component.html',
  styleUrls: ['./menu-desktop.component.css']
})
export class MenuDesktopComponent implements OnInit,OnChanges{
  isUserLoggedIn: boolean;

  
  constructor(private _services:APIService,private router: Router ,public globals:GlobalsService ) { 

    this.globals.isUserLoggedIn.subscribe( value => {
      this.isUserLoggedIn = value;
  });
  }
  

  ngOnInit(): void {
    this.globals.token =this._services.getToken();
    this.globals.nombre=this._services.getName();
    if(!this.globals.token){
      this.globals.isUserLoggedIn.next(true);
    }
    console.log(this.globals.token,this.globals.nombre, this.isUserLoggedIn);
    }
    ngOnChanges(): void {
      this.globals.nombre=this._services.getName();
    }

    onChange(){
      this.globals.nombre=this._services.getName();
    }

    
    logOut(){
      this._services.LogOut(this.globals.token)
      .subscribe(
        response=>{
          console.log(response);

          this.globals.token=undefined;
          this.globals.nombre=undefined;

          this._services.deleteToken();
     
          this.router.navigate(['/login']);
  
        },
        err=>{
          alert('error no pudo cerrar sesion correctamente');
          this._services.deleteToken();
        }
      );
  }

}
