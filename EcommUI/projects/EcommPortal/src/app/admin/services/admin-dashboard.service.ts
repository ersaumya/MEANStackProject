import { IResponse } from '../../common/models/response.model';
import { HttpClient } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';
import { IAppConfig } from '../../shared/IAppConfig';
import { APP_CONFIG } from '../../shared/AppConfig';

@Injectable({
  providedIn: "root"
})
export class AdminDashboardService {
  constructor(
    private httpClient: HttpClient,
    @Inject(APP_CONFIG) private appConfig: IAppConfig
  ) {}

  getDashboard(){
    return this.httpClient.get<IResponse>(this.appConfig.apiEndPoint+'/order/admin/dashboard');
  }
}
