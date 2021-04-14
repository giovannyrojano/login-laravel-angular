import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import {NgForm} from '@angular/forms';

import * as $ from  'jquery';


import { DataSharingService } from '../globals-variables';
import { APIService } from '../services/api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
 

  constructor( private _Activatedroute: ActivatedRoute,private _services:APIService,private dataSharingService: DataSharingService,private fb : FormBuilder) { }
  public id:any;
  public user:{name:'',email:''};

  ngOnInit(): void {

    const inputs = document.querySelectorAll(".input");

    

    $(".input").each(function () {
      let parent = this.parentNode.parentNode;
      var default_value = this.value;
      parent.classList.add("focus");
    });

function addcl(){
	let parent = this.parentNode.parentNode;
	parent.classList.add("focus");
}

function remcl(){
	let parent = this.parentNode.parentNode;
	if(this.value === ""){
		parent.classList.remove("focus");
	}
}


inputs.forEach(input => {
	input.addEventListener("focus", addcl);
	input.addEventListener("blur", remcl);
});




   this.user={name:'',email:''};
    this.id=this._Activatedroute.snapshot.paramMap.get("id");
    this._services.getUser(this.dataSharingService.token,this.id).subscribe(
      (response:any)=>{
        this.user=response.user;
    },
    err=>{
      console.log(err);
    }
    );
  }
  


  update(params:NgForm){
    this._services.update(params,this.dataSharingService.token,this.id).
    subscribe( 
      (response:any)=>{
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: response.message,
          showConfirmButton: false,
          timer: 1500
        })


      },err=>{
        console.log(err);
      }
    );
  console.log(params);
  }
}
