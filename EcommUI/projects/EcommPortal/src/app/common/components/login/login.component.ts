import { LoginService } from "./../../services/login.service";
import { Component, OnInit } from "@angular/core";
import { IUser } from "../../models/user.model";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Router } from "@angular/router";
import { EncDecryptService } from "@ecomm/core";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  user: IUser = {
    email: "",
    password: ""
  };

  constructor(
    private loginService: LoginService,
    private _snackBar: MatSnackBar,
    private router: Router,
    private encdecService: EncDecryptService
  ) {}

  ngOnInit(): void {}

  login() {
    this.loginService.login(this.user).subscribe(response => {
      if (response.status === "success") {
        const role = this.encdecService.encrypt(response.role,'');
        sessionStorage.setItem("role",role);
        sessionStorage.setItem("token", response.data);
        this.navigate(response.role);
      } else {
        this._snackBar.open(response.message, "Login", {
          duration: 1000
        });
      }
    });
  }

  navigate(role: string) {
    switch (role) {
      case "User":
        //redirect to user dashboard
        this.router.navigate(["/user/profile"]);
        break;
      case "Admin":
        //redirect to admin dashboard
        this.router.navigate(["/admin/dashboard"]);
      default:
        this._snackBar.open("Not a valid role!", "Login", {
          duration: 1000
        });
    }
  }
}
