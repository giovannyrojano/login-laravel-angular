import { Component, OnInit } from '@angular/core';
import { Router,NavigationStart} from '@angular/router';
import { ActivatedRoute } from "@angular/router";

import {APIService} from '../services/api.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public token;
  public name;
  public users:any;

  constructor(private _services:APIService,private router: Router) { }

  ngOnInit(): void {
    
  this.token=  this._services.getToken();
  this._services.getAll(this.token).subscribe(
    response=>{
      this.users=response;
  },
  err=>{
    this.router.navigate(['/login']);
  });
  }

  ngOnChanges(){
    this.token=this._services.getToken();
    this.name=this._services.getName();
  }

}
