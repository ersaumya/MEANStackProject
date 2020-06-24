import { IAppConfig } from "./../../shared/IAppConfig";
import { APP_CONFIG } from "./../../shared/AppConfig";
import { environment } from "./../../../environments/environment";
import { IUser } from "./../models/user.model";
import { HttpClient } from "@angular/common/http";
import { Injectable, Inject } from "@angular/core";
import { IResponse } from '../models/response.model';
import { BehaviorSubject } from 'rxjs';
import { EncDecryptService } from '@ecomm/core';

@Injectable({
  providedIn: "root",
})
export class LoginService {
  loggedIn = new BehaviorSubject<boolean>(false);
  role = new BehaviorSubject<string>("");

  constructor(
    private httpClient: HttpClient,private encService :EncDecryptService,
    @Inject(APP_CONFIG) private appConfig: IAppConfig
  ) {
    console.log(appConfig.apiEndPoint);
  }

  login(user: IUser) {
    return this.httpClient.post<IResponse>(
      this.appConfig.apiEndPoint + "/user/login",
      user
    );
  }

  isLoggedIn(value?: boolean) {
    if (sessionStorage.getItem("role")) {
      this.loggedIn.next(true);
    } else {
      this.loggedIn.next(false);
    }
    return this.loggedIn.asObservable();
  }

  userRole(role?: string) {
    if (sessionStorage.getItem("role")) {
      const currentRole = this.encService.decrypt(
        sessionStorage.getItem("role"),
        ""
      );
      this.role.next(currentRole);
    } else {
      this.role.next(role);
    }
    return this.role.asObservable();
  }
}
