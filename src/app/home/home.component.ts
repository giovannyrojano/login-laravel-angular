import { ChangeDetectionStrategy, ChangeDetectorRef, Component, DoCheck, OnInit } from '@angular/core';
import { Router,NavigationStart} from '@angular/router';
import { ActivatedRoute } from "@angular/router";



import Swal from 'sweetalert2';

import { GlobalsService } from '../globals-variables';

import {APIService} from '../services/api.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class HomeComponent implements OnInit {

  public token;
  public name;
  public users:any;

  constructor(private _services:APIService,private router: Router ,public globals:GlobalsService, private changeDetection: ChangeDetectorRef) { }

  ngOnInit(): void {
    
  this.token=  this._services.getToken();
  this._services.getAll(this.token).subscribe(
    response=>{
      this.users=response;
  },
  err=>{
    Swal.fire({
      icon: 'error',
      title: 'Oops...No has iniciado sesion',
      text: 'Something went wrong!',
      footer: '<a href>inicia sesion o registrate aqui</a>'
    })
    this.router.navigate(['/login']);
  });
  }

  ngOnChanges(){
    this.globals.token;
    this.globals.nombre;
  }

 
  delete(params){
    this._services.delete(params,this.globals.token)
    .subscribe(
      response=>{
        
        this._services.getAll(this.globals.token).
        subscribe(
          response=>{
            this.users=response;
          }
        );
        console.log(response);
      },
      err=>{
        console.log(err);
      }
    );
  }

  
  displayedColumns: string[] = ['#', 'name', 'correo', 'created_at', 'updated_at','accion'];
}

