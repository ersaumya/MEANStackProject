import { Injectable, ErrorHandler, Injector } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { IAppConfig } from "./../../shared/IAppConfig";
import { APP_CONFIG } from "./../../shared/AppConfig";
import { MatSnackBar } from "@angular/material/snack-bar";

@Injectable({
  providedIn: "root",
})
export class ErrorHandlerService implements ErrorHandler {

  constructor(private injector: Injector) {}

  handleError(error: any): void {
    if (error != null || error !== "") {
      const http = this.injector.get(HttpClient);
      const appConfig = this.injector.get(APP_CONFIG);
      const snackBar = this.injector.get(MatSnackBar);
      const errorMessage = JSON.stringify(error.message);
      http.post(appConfig.apiEndPoint + "/errorLog", { error: errorMessage })
        .subscribe((result) => {
          snackBar.open(
            "There is some problem performing this opertion, please try again!",
            "Error!",
            {
              duration: 1000,
            }
          );
        });
    }
  }
}
