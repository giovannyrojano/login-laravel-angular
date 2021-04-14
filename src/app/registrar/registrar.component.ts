import { Component, OnInit } from '@angular/core';
import { Router,NavigationStart} from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import * as $ from 'jquery';

import Swal from 'sweetalert2';


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

$("div.login-content form").append('<div class="loading"></div>');
$("div.login-content form").each(function(){
  var $this = $(this);
  $this.siblings().appendTo($this.find('.loading'));
});




inputs.forEach(input => {
	input.addEventListener("focus", addcl);
	input.addEventListener("blur", remcl);
});

  }



  register(params){

    $("input").prop('disabled', true);
    $("").prop('disabled', true);
    this._services.store(params)
    .subscribe(
      response=>{
        Swal.fire({
          title: 'Registro exitoso',
          icon: 'success',
          showDenyButton: true,
          confirmButtonText: `salir`,
          denyButtonText: `serguir registrando`,
        }).then((result) => {
  
          if (result.isConfirmed) {
            this.router.navigate(['/home']);
          } else if (result.isDenied) {
            $("input").prop('disabled', false);
            this.RegisterForm.reset();
          }
        })
        console.log(response);
      },
      err=>{
        $("input").prop('disabled', false);
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: err.error.message,
          showConfirmButton: false,
          timer: 1500
        })
        console.log(err);
      },
     
    );
  }
  

}
