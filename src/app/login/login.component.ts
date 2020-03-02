import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl, FormGroup } from '@angular/forms';
import { UsernameValidator } from './username.validator';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private fb: FormBuilder) { }
  login  = this.fb.group({
    username: ['', [Validators.required,
                    UsernameValidator.cannotContainSpace,
                    UsernameValidator.mustBeValidateEmail]],
    password: ['', Validators.required],
    isEmail: [ ]
  });

  ngOnInit(): void {
  }

  loginUser(value)  {
    console.log(value);
  }

  get username() {
    return this.login.get('username');
  }

  get password(){
    return this.login.get('password');
  }
}
