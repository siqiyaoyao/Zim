import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile.component';
import { PersonComponent } from './pages/person/person.component';

const routes: Routes = [
  {
    path:'',
    component:ProfileComponent,
  },
  
  {
    path:'person',
    component:PersonComponent,
    outlet:'profile'
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
