import { RestService } from './../main/services/rest.service';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { ReactiveFormsModule } from '@angular/forms';
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
  imports: [
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    NgZorroAntdModule
    
  ],
  exports: [RouterModule],
  providers:[
    AuthService,
    GuardmanageService,
    RestService,
  ],
  declarations: [
    LoginComponent
  ]
})
export class LoginModule { }
