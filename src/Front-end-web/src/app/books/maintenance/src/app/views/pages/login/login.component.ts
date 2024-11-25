import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/users/user.service';
import { User } from 'src/app/models/users/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private userService: UserService,public approute:Router,private ActiveRoute: ActivatedRoute ) { }

  username: string;
  password: string;
  login: any ;
  ngOnInit() {

    if(this.userService.isLoggedIn()){

      this.approute.navigate(['admin/dashboard']);

    }


    this.ActiveRoute.queryParams
      .subscribe(params => {
       // console.log(params); // { orderby: "price" }
        this.username = params['username'];
        this.password = params['password'];
    
      }
    );
    console.log(this.username,this.password); // price
    this.login ={
      UserName: this.username ,
      Password: this.password
    }
    if(this.username !=undefined){

      this.userLoginErp(this.login);
    }

 

}

    userLogin(loginForm: NgForm){

      console.log(loginForm.value);

      this.userService.loginUser(loginForm.value).subscribe({
        next:(res)=>{
          console.log(res);
          this.userService.storeToken(res.token);
          this.approute.navigate(['admin/dashboard']);
        },
        error: (response)=>{
          console.log(response);
        }
      })

    }
    userLoginErp(loginForm: User){

      console.log(loginForm);

      this.userService.loginUser(loginForm).subscribe({
        next:(res)=>{
          console.log(res);
          this.userService.storeToken(res.token);
          this.approute.navigate(['admin/dashboard']);
        },
        error: (response)=>{
          console.log(response);
        }
      })

    }




}
