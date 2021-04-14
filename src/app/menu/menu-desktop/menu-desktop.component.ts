'use strict'
import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';


import {DataSharingService} from 'src/app/globals-variables';
import { APIService } from 'src/app/services/api.service';

declare var $: any;
@Component({
  selector: 'app-menu-desktop',
  templateUrl: './menu-desktop.component.html',
  styleUrls: ['./menu-desktop.component.css']
})
export class MenuDesktopComponent implements OnInit,OnChanges{
  isUserLoggedIn: boolean;

  public name:string;
  constructor(private _services:APIService,private router: Router,  
    private dataSharingService: DataSharingService) { 
  }
  

public getprue(): any { return this.dataSharingService.getToken()}
public getnombre(): any { return this.dataSharingService.getName()}

  ngOnInit(): void {
    this.name=this.getnombre();
    this.dataSharingService.token =this.dataSharingService.getToken();
    this.dataSharingService.nombre=this.dataSharingService.getName();
    console.log(this.dataSharingService.token,this.dataSharingService.nombre);

    $("#navbar a.nav-link").on("click", function () {
      var position = $(this).parent().position();
      var width = $(this).parent().width();
      $("#navbar .slide1").css({ opacity: 1, left: +position.left+40, width: width });
  });
  
  $("#navbar a.nav-link").on("mouseover", function () {
      var position = $(this).parent().position();
      var width = $(this).parent().width();
      $("#navbar .slide2").css({
          opacity: 1,
          left: +position.left+40,
          width: width
      });
  });
  
  $("#navbar a.nav-link").on("mouseout", function () {
      $("#navbar .slide2").css({ opacity: 0 });
  });

    }

    ngOnChanges(): void {
      var currentWidth = $("#navbar").find("li:nth-of-type(1) a.nav-link").parent("li").width();
      var currentheight = $("#navbar").find("li:nth-of-type(1) a").parent("li").height();
      var current = $("#navbar").find("li.nav-item.active").position()
      $("#navbar .slide1").css({ left: +current.left,width: currentWidth,height:currentheight });
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
