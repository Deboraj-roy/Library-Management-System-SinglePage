import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  loginForm: FormGroup;
  hidePassword: boolean = true;

  /**
   *
   */
  constructor(fb: FormBuilder) {
        this.loginForm = fb.group({
          email: fb.control('',[Validators.required]),
          password: fb.control('',[Validators.required])
        });
  }

  login(){
    let loginInfo = {
      email: this.loginForm.get('email')?.value,
      password: this.loginForm.get('password')?.value,
    }
  }
}
