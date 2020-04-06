import { HttpClient } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';
import { APP_CONFIG } from 'projects/EcommPortal/src/app/shared/AppConfig';
import { IAppConfig } from 'projects/EcommPortal/src/app/shared/IAppConfig';

@Injectable({
  providedIn: "root"
})
export class ProfileService {
  constructor(
    private httpClient: HttpClient,
    @Inject(APP_CONFIG) private appConfig: IAppConfig
  ) {}

  getProfile() {
    return this.httpClient.get(this.appConfig.apiEndPoint+'/user');
  }
}
