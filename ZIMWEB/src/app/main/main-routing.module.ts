import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main.component';
import { HomeComponent } from './home/home.component';
import { UploadsComponent } from './pages/uploads/uploads.component';
const routes: Routes = [
  ///*
  {
    path:'',
    component:MainComponent,
    /*
    children:[
      {path:'home',component:HomeComponent},
      {path:'upload',component:UploadsComponent},
    ]
   */
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
