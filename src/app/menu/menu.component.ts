import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Router,NavigationStart} from '@angular/router';
import { APIService } from '../services/api.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit{

  
  constructor() { }

  ngOnInit(): void {
 
  }
}
