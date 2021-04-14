import { Component, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { Router,NavigationStart} from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';


import {APIService} from '../services/api.service';
import { DataSharingService } from '../globals-variables';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit ,OnChanges, OnDestroy{

  datos = {
        email : "",
        password:""
      };

  constructor(private fb : FormBuilder,private router: Router, private _services:APIService,private dataSharingService: DataSharingService) { }


  LoginForm = this.fb.group({

    email : new FormControl('',[Validators.required, Validators.email]),
    password : new FormControl('',[Validators.required]),
 });
  ngOnInit(): void {

  }

  ngOnChanges(): void {


  }
  ngOnDestroy(): void {


  }


  Login(params){  
    this._services.Login(params).subscribe(
      (response:any)=>{
        this.dataSharingService.setToken(response.token,response.name);


        this.router.navigate(['/home']);
      

      },
      err=>{
        console.log(err);
      }
    );
  }

}
