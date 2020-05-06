import { CustomValidator } from "./../../custom-validator/custom-validator";
import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from "@angular/forms";
import { RegisterService } from "../../services/register.service";
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: "app-registration",
  templateUrl: "./registration.component.html",
  styleUrls: ["./registration.component.css"],
})
export class RegistrationComponent implements OnInit {
  registrationForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private registerService: RegisterService,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.registrationForm = this.fb.group(
      {
        firstName: new FormControl("", Validators.required),
        lastName: new FormControl("", Validators.required),
        email: new FormControl("", [Validators.required, Validators.email]),
        password: new FormControl("", Validators.required),
        confirmPassword: new FormControl("", Validators.required),
        mobile: new FormControl("", Validators.required),
        dob: new FormControl("", Validators.required),
      },
      { validators: [CustomValidator.validatePassword], updateOn: "blur" }
    );
  }

  signup() {
    this.registerService
      .register(this.registrationForm.value)
      .subscribe((result) => {
        if (result.status === "success") {
          this._snackBar.open("User Registration Successfull!,Please login to access", "Registration", {
            duration: 1000,
          });
        }
      });
  }
}
