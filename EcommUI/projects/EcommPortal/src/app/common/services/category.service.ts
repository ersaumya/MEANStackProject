import { Injectable, Inject } from '@angular/core';
import { IResponse } from '../models/response.model';
import { HttpClient } from '@angular/common/http';
import { APP_CONFIG } from '../../shared/AppConfig';
import { IAppConfig } from '../../shared/IAppConfig';

@Injectable({
  providedIn: "root",
})
export class CategoryService {
  constructor(
    private http: HttpClient,
    @Inject(APP_CONFIG) private appConfig: IAppConfig
  ) {}

  getCategories() {
    return this.http.get<IResponse>(this.appConfig.apiEndPoint + "/category");
  }

  postCategories(category: any) {
    return this.http.post<IResponse>(
      this.appConfig.apiEndPoint + "/category",
      category
    );
  }
}
