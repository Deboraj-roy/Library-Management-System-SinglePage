import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,FormControl ,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { cilMobile,cilNotes,cilLockLocked, cilUser, brandSet } from '@coreui/icons';
import { IconSetService } from '@coreui/icons-angular';
import { UserService } from 'src/app/services/users/user.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  signUpForm!: FormGroup ;
  constructor(private approute: Router,private fb: FormBuilder,public iconSet: IconSetService,private userService:UserService) {
    iconSet.icons = { cilMobile,cilNotes,cilLockLocked,cilUser, ...brandSet };
   }

  ngOnInit(): void {
    
    this.signUpForm = this.fb.group({
      UserFullName:['',Validators.required],
      UserMobileNumber:['',Validators.required],
      Password:['',Validators.required]
    })
 

  }

  onSignUpFormSubmit(){

    console.log(this.signUpForm.value);
    this.userService.signUpUser(this.signUpForm.value).subscribe({
      next:(response)=>{
        console.log(response);
          this.approute.navigate(['/']);
        
      },
      error: (response)=>{
        console.log(response);
      }

   })
  }

 

}
