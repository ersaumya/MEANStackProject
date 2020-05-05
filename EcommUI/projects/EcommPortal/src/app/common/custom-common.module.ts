import { NgModule } from '@angular/core';
import { CommonRoutingModule } from './common-routing.module';
import { LoginComponent } from './components/login/login.component';
import { MainNavComponent } from './components/main-nav/main-nav.component';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../shared/material.module';
import { RegistrationComponent } from './components/registration/registration.component';


@NgModule({
  declarations: [MainNavComponent, LoginComponent, RegistrationComponent],
  imports: [CommonModule, MaterialModule, CommonRoutingModule],
  exports: [MainNavComponent, LoginComponent]
})
export class CustomCommonModule {}
