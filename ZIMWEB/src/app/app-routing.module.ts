import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import {LoginComponent } from './login/login.component';
import {HeaderComponent} from './header/header.component';
const routes: Routes = [
  
  {
    path: '',
    redirectTo: '/main',
    pathMatch: 'full'
  },
  /*
  {
    path:'main',
    loadChildren:'./main/main.module#MainModule'
  },
  */
 {
  path:'test',
  component:HeaderComponent

  },
  {
    path:'login',
    loadChildren:'./login/login.module#LoginModule'

  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
