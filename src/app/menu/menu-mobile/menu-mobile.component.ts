import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import {MatExpansionModule} from '@angular/material/expansion';

import {DataSharingService} from 'src/app/globals-variables';
import { APIService } from 'src/app/services/api.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-menu-mobile',
  templateUrl: './menu-mobile.component.html',
  styleUrls: ['./menu-mobile.component.css'],
  animations: [
    trigger('slideLeft', [
      state('initial', style({
        visibility : 'hidden',
        left: '-70%'
      })),
      state('final', style({
        left: '0px',
        visibility : 'visible'
      })),
      transition('initial=>final', animate('300ms')),
      transition('final=>initial', animate('300ms'))
    ]),
    trigger('slideInDownService', [
      state('initial', style({
        height: '0%'
      })),
      state('final', style({
        height: 'auto',
      })),
      transition('initial=>final', animate('300ms')),
      transition('final=>initial', animate('300ms'))
    ])
  ]
})

export class MenuMobileComponent implements OnInit {
  public name:string;
  public getprue(): any { return this.dataSharingService.getToken()}
  public getnombre(): any { return this.dataSharingService.getName()}

  constructor( private router: Router,  private dataSharingService: DataSharingService, private _services: APIService) { }
  sidenav : boolean = false;
  public currentState : string = 'initial';
  public currentStateServ : string = 'initial';

  exact : boolean = true;
  celphone = "+573043959699";

  showMenu(){
    this.sidenav = !this.sidenav;
    this.currentState = this.currentState === 'initial' ? 'final' : 'initial';
  }

  hideMenu(e){
    if(e.target.id == "navMobile"){
      this.sidenav = !this.sidenav;
      this.currentState = this.currentState === 'initial' ? 'final' : 'initial';
    }
  }

  hideMenuNav(){
    this.sidenav = !this.sidenav;
    this.currentState = this.currentState === 'initial' ? 'final' : 'initial';
  }

  ngOnInit(): void {

   this.name=this.getnombre();
    this.dataSharingService.token =this.dataSharingService.getToken();
    this.dataSharingService.nombre=this.dataSharingService.getName();
  }

  logOut(){
    this._services.LogOut(this.getprue())
    .subscribe(
      response=>{
        console.log(response);

        this.dataSharingService.token=undefined;
        this.dataSharingService.nombre=undefined;

        this.dataSharingService.deleteToken();

        this.router.navigate(['/login']);

      },
      err=>{
        alert('error no pudo cerrar sesion correctamente');
        this.dataSharingService.deleteToken();
      }
    );
}

}
