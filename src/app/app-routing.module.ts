import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import{HomeComponent} from './home/home.component';
import{LoginComponent} from './login/login.component';
import{RegistrarComponent} from './registrar/registrar.component';


const routes: Routes = [
  {path: '', redirectTo:'/home', pathMatch:'full'},
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'registrar', component: RegistrarComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomeComponent,LoginComponent];
