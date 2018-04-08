import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './login/login.component';

import { MainComponent } from './main/main.component';
import { ModalComponent } from './items/modal/modal.component';
import { UploadsComponent } from './main/pages/uploads/uploads.component';
const routes: Routes = [
  
  /*
  {
    path: '',
    redirectTo: '/main',
    pathMatch: 'full'
  },
  //*/
  /*
  {
    path:'main',
    loadChildren:'./main/main.module#MainModule'
  },
  */
//  {
//   path:'',
//   component:MainComponent,

//   ///*
//   children:[
//     {path:'home',component:HeaderComponent,},
//     {path:'upload',component:UploadsComponent},
//   ]
// */
//},

  // {
  //   path:'login',
  //   loadChildren:'./login/login.module#LoginModule'

  // },
{
  path:'modal',
  component:ModalComponent,
  outlet:'test'

},
  
  {
    path:'profile',
    loadChildren:'app/profile/profile.module#ProfileModule'
  },
  {
    path:'test',
    loadChildren:'app/test/test.module#TestModule'
  },
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
