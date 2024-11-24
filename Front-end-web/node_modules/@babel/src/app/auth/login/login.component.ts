import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../shared/services/api.service';
import { MatSnackBar } from '@angular/material/snack-bar';

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
  constructor(fb: FormBuilder,
    private apiService: ApiService, 
    private snackBar: MatSnackBar ) 
  {
        this.loginForm = fb.group({
          email: fb.control('',[Validators.required]),
          password: fb.control('',[Validators.required])
        });
  }

  login(){
    let loginInfo = {
      email: this.loginForm.get('email')?.value,
      password: this.loginForm.get('password')?.value,
    };

    this.apiService.login(loginInfo).subscribe({
      next: (res) => {
        if (res == 'Invalid_Credentials'){
          this.snackBar.open('Credential are invalid!', 'OK');
        }
        else if (res == 'UNAPROVED'){
          this.snackBar.open('Your Account is not approved yet by Admin. Please wait for admin to approve your account!', 'OK');
        }
        else if (res == 'BLOCKED'){
          this.snackBar.open('Your Account is blocked. Please contact admin!', 'OK');
        }
        else{
          try {
            localStorage.setItem('access_token', res);
            this.apiService.userStatus.next("loggedIn");
          } catch (error) {
            console.error('Error saving to localStorage:', error);
          }
          
        }
      },
    });
  }
}
