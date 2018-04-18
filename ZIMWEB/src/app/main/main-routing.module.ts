import { AuthService } from './../services/auth.service';
import { GuardmanageService } from './../services/guardmanage.service';
import { NzformComponent } from './nz/nzform/nzform.component';
import { FormModelComponent } from './pages/form-model/form-model.component';
import { WikiComponent } from './rxjs/wiki/wiki/wiki.component';
import { T1Component } from './rxjs/t1/t1.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main.component';
import { HomeComponent } from './home/home.component';
import { UploadsComponent } from './pages/uploads/uploads.component';
import { ViewerComponent } from './bim/viewer/viewer.component';
import { FormComponent } from './pages/form/form.component';

const routes: Routes = [
  ///*
  {
    path:'',
    component:MainComponent,
    canActivate:[GuardmanageService],
    
    //component:ViewerComponent,
    
    children:[
      {
        path:'',
        canActivateChild:[GuardmanageService],
        children:[
          {path:'home',component:HomeComponent},
          {path:'upload',component:UploadsComponent},
          {path:'view',component:ViewerComponent},
          {path:'T1',component:T1Component},
          {path:'wiki',component:WikiComponent},
          {path:'form',component:FormComponent},
          {path:'formModel',component:FormModelComponent},
          {path:'',component:NzformComponent},
        ]
    }
    ]
   
  },

  /*
  {
    path:'main/home',
    component:HomeComponent,  
    outlet:'main'
  },

  {
    path:'upload',
    component:UploadsComponent,  
  }

  */
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
