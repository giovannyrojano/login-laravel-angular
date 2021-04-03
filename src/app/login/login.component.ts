import { Component, OnInit } from '@angular/core';
import { Router,NavigationStart} from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';


import {APIService} from '../services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  datos = {
        email : "",
        password:""
      };

  constructor(private fb : FormBuilder,private router: Router, private _services:APIService) { }


  LoginForm = this.fb.group({

    email : new FormControl('',[Validators.required, Validators.email]),
    password : new FormControl('',[Validators.required]),
 });
  ngOnInit(): void {


  }

  Login(params){  
    this._services.Login(params).subscribe(
      (response:any)=>{
        this._services.setToken(response.token,response.name);
        this.router.navigate(['/home']);
      },
      err=>{
        console.log(err);
      }
    );
  }

}
