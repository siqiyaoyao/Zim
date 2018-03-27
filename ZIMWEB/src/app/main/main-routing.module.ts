import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainComponent} from './main.component';
import { HomeComponent } from './home/home.component';
const routes: Routes = [
  ///*
  {
    path:'main',
    component:MainComponent,
    children:[
      {path:'home',component:HomeComponent},
    ]
   
  },
  
  {
    path:'main/test',
    component:HomeComponent,
   // outlet:'test'
   
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
