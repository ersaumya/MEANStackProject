import { NgModule } from '@angular/core';
import { CommonRoutingModule } from './common-routing.module';
import { LoginComponent } from './login/login.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../shared/material.module';


@NgModule({
  declarations: [MainNavComponent, LoginComponent],
  imports: [CommonModule, MaterialModule, CommonRoutingModule],
  exports: [MainNavComponent, LoginComponent]
})
export class CustomCommonModule {}
