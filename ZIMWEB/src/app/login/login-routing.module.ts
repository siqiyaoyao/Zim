import { GuardmanageService } from './../services/guardmanage.service';
import { AuthService } from './../services/auth.service';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';

const routes: Routes = [
  {
    path:'login',component:LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers:[
    AuthService,
    GuardmanageService,
  ]
})
export class LoginRoutingModule { }
