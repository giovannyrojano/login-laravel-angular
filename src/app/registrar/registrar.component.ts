import { Component, OnInit } from '@angular/core';
import { Router,NavigationStart} from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';

import{APIService} from '../services/api.service';
@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent implements OnInit {

  constructor(private fb : FormBuilder,private router: Router,private _services:APIService) { }

  RegisterForm = this.fb.group({
    name: new FormControl('',[Validators.required]),
    email : new FormControl('',[Validators.required, Validators.email]),
    password : new FormControl('',[Validators.required]),
 });



  ngOnInit(): void {

    const inputs = document.querySelectorAll(".input");


function addcl(){
	let parent = this.parentNode.parentNode;
	parent.classList.add("focus");
}

function remcl(){
	let parent = this.parentNode.parentNode;
	if(this.value == ""){
		parent.classList.remove("focus");
	}
}


inputs.forEach(input => {
	input.addEventListener("focus", addcl);
	input.addEventListener("blur", remcl);
});

  }

  register(params){
    this._services.store(params)
    .subscribe(
      response=>{
        console.log(response);
      },
      err=>{
        console.log(err);
      }
    );
  }
  

}
