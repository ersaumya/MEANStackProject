import { AuthGuard } from './../common/guard/auth.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component';
import { UserGuard } from './guard/user.guard';
import { ProfileComponent } from './components/profile/profile.component';


const routes: Routes = [
  {
    path: "user/dashboard",
    component: UserDashboardComponent,
    canActivate: [AuthGuard, UserGuard]
  },
  {
    path: "user/profile",
    component: ProfileComponent,
    canActivate: [AuthGuard, UserGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
