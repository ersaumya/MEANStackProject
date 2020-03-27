import { environment } from './../../../environments/environment';
import { IUser } from './../models/user.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient:HttpClient) { }

  login(user:IUser){
    return this.httpClient.post(environment.apiEndPoint+'/user/login',user);
  }
}
