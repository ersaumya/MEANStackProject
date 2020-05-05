import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,FormBuilder } from '@angular/forms';
import { RegisterService } from '../../services/register.service';

@Component({
  selector: "app-registration",
  templateUrl: "./registration.component.html",
  styleUrls: ["./registration.component.css"],
})
export class RegistrationComponent implements OnInit {
  registrationForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private registerService: RegisterService
  ) {}

  ngOnInit(): void {
     this.registrationForm= this.fb.group({
       firstName: new FormControl(''),
       lastName: new FormControl(''),
       email: new FormControl(''),
       password: new FormControl(''),
       confirmPassword: new FormControl(''),
       mobile: new FormControl(''),
       dob: new FormControl(''),
     });
  }
 

  signup() {
    this.registerService.register(this.registrationForm.value).subscribe((result)=>{
      console.log(result);
    });
  }
}
