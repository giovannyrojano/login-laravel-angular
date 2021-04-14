import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

import { DataSharingService } from '../globals-variables';
import { APIService } from '../services/api.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  public token:string;
  public users:any;
  public log:boolean;
 
  constructor(private _services:APIService,private router: Router, private dataSharingService: DataSharingService) { }

  ngOnInit(): void {

    this.token=  this.dataSharingService.getToken();
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


  delete(params){
    this.log=true;
    this._services.delete(params,this.dataSharingService.token)
    .subscribe(
      response=>{
        
        this._services.getAll(this.dataSharingService.token).
        subscribe(
          response=>{
            this.users=response;
            this.log=false;
          }
        );
        console.log(response);
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'se elimino corretamente',
          showConfirmButton: false,
          timer: 1000
        })
      },
      err=>{
        console.log(err);
      }
    );
  }

  displayedColumns: string[] = ['#', 'name', 'correo', 'created_at', 'updated_at','accion'];

}
