import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';


@NgModule({
  declarations: [UserDashboardComponent, ProfileComponent],
  imports: [CommonModule, UserRoutingModule]
})
export class UserModule {}
