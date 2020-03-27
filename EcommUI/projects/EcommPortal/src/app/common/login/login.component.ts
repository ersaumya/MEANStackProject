import { Component, OnInit } from '@angular/core';
import { IUser } from '../models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user:IUser={
    email:'',
    password:''
  }

  constructor() { }

  ngOnInit(): void {
  }

  login(){
    console.log(this.user);
  }

}
