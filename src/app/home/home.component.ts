import { ChangeDetectionStrategy, ChangeDetectorRef, Component, DoCheck, OnInit } from '@angular/core';
import { Router,NavigationStart} from '@angular/router';
import { ActivatedRoute } from "@angular/router";



import Swal from 'sweetalert2';

import { DataSharingService } from '../globals-variables';

import {APIService} from '../services/api.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class HomeComponent implements OnInit {

  public token:string;
  public users:any;
  public log:boolean;

  constructor(private _services:APIService,private router: Router , 
    private dataSharingService: DataSharingService) { }

  ngOnInit(): void {

  }

  ngOnChanges(){
    this.dataSharingService.token;
    this.dataSharingService.nombre;
  }

 
}

