import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  registerForm: FormGroup;
  hidePwdContent: boolean = true;

  /**
   *
   */
  constructor(private fb: FormBuilder) {
    this.registerForm = fb.group ({
      firstName: fb.control('', [Validators.required] ),
      lastName: fb.control('', [Validators.required] ),
      email: fb.control('', [Validators.required] ),
      mobileNumber: fb.control('', [Validators.required] ),
      password: fb.control('', [Validators.required] ),
      rpassword: fb.control('', [Validators.required] ),
    });
    
  }

  register() {
    let user = {
      firstName: this.registerForm.get("firstName")?.value,
      lastName: this.registerForm.get("lastName")?.value,
      email: this.registerForm.get("email")?.value,
      mobileNumber: this.registerForm.get("mobileNumber")?.value,
      password: this.registerForm.get("password")?.value,
    }
  }

}
