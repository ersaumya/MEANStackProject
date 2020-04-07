import { environment } from './../environments/environment';
import { IAppConfig } from './shared/IAppConfig';
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CustomCommonModule } from "./common/custom-common.module";
import { MaterialModule } from './shared/material.module';
import { APP_CONFIG } from './shared/AppConfig';
import { UserModule } from './user/user.module';
import { AdminModule } from './admin/admin.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { CustomInterceptorService } from './common/custom-interceptor/custom-interceptor.service';

const AppConfig:IAppConfig={
  apiEndPoint:environment.apiEndPoint
};

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CustomCommonModule,
    MaterialModule,
    UserModule,
    AdminModule,
    HttpClientModule,
    AppRoutingModule
    
  ],
  providers: [
    { provide: APP_CONFIG, useValue: AppConfig },
    { provide: HTTP_INTERCEPTORS, useClass: CustomInterceptorService,multi:true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
