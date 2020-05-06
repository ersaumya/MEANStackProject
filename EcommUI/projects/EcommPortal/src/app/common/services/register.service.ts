import { Register } from './../models/register.model';
import { HttpClient } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';
import { APP_CONFIG } from '../../shared/AppConfig';
import { IAppConfig } from '../../shared/IAppConfig';
import { IResponse } from '../models/response.model';

@Injectable({
  providedIn: "root",
})
export class RegisterService {
  constructor(
    private http: HttpClient,
    @Inject(APP_CONFIG) private appConfig: IAppConfig
  ) {}

  register(register: Register) {
    return this.http.post<IResponse>(
      this.appConfig.apiEndPoint + "/user/register",
      register
    );
  }
}
