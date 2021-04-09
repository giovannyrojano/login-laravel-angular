import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import {MatExpansionModule} from '@angular/material/expansion';

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

  constructor() { }
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
  }

}
