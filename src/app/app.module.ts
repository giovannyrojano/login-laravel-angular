import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { AppRoutingModule,routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';

import {MatExpansionModule}from '@angular/material/expansion';
import{MatIconModule} from'@angular/material/icon';
import{MatButtonModule} from'@angular/material/button';
import {MatTableModule} from '@angular/material/table';


import { HttpClientModule, HttpClient } from '@angular/common/http';


import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { APIService } from './services/api.service';
import { RegistrarComponent } from './registrar/registrar.component';
import { MenuMobileComponent } from './menu/menu-mobile/menu-mobile.component';
import { MenuDesktopComponent } from './menu/menu-desktop/menu-desktop.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GlobalsService } from './globals-variables';
import { EditComponent } from './edit/edit.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenuComponent,
    FooterComponent,
    routingComponents,
    HomeComponent,
    RegistrarComponent,
    MenuMobileComponent,
    MenuDesktopComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatExpansionModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [GlobalsService],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
