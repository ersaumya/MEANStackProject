import { IAppConfig } from "./../../shared/IAppConfig";
import { APP_CONFIG } from "./../../shared/AppConfig";
import { environment } from "./../../../environments/environment";
import { IUser } from "./../models/user.model";
import { HttpClient } from "@angular/common/http";
import { Injectable, Inject } from "@angular/core";
import { IResponse } from '../models/login-response.model';

@Injectable({
  providedIn: "root"
})
export class LoginService {
  constructor(
    private httpClient: HttpClient,
    @Inject(APP_CONFIG) private appConfig: IAppConfig
  ) {
    console.log(appConfig.apiEndPoint);
  }

  login(user: IUser) {
    return this.httpClient.post<IResponse>(
      this.appConfig.apiEndPoint + '/user/login',
      user
    );
  }
}
