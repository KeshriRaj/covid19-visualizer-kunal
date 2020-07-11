import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StateComponent } from './state/state.component';
import { DistrictComponent } from './district/district.component';
import { VerticalComponent } from './vertical/vertical.component';
import { ActivateGuard } from './activate.guard';


const routes: Routes = [
  {
    path:"",
    component:RegisterComponent
  },
  {
    path:"login",
    component:LoginComponent
  },
  {
    path:"dashboard",
    canActivate:[ActivateGuard],
    component:DashboardComponent,

  },
  {
    path:"state",
    canActivate:[ActivateGuard],
    component:StateComponent
  },
  {
    path:"district/:code",
    canActivate:[ActivateGuard],
    component:DistrictComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
