import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/users/user.service';
import { User } from 'src/app/models/users/user';
import { WidgetsDropdownComponent } from 'src/app/views/widgets/widgets-dropdown/widgets-dropdown.component'; 

@Component({
  selector: 'app-acc-dashboard-to-snd',
  templateUrl: './acc-dashboard-to-snd.component.html',
  styleUrls: ['./acc-dashboard-to-snd.component.scss']
})
export class AccDashboardToSndComponent {
  @ViewChild('app_widgets_ComponentContainer', { read: ViewContainerRef, static: true }) container: ViewContainerRef;
  constructor(private userService: UserService,public approute:Router,private ActiveRoute: ActivatedRoute) { }

  username: string;
  password: string;
  login: any ;
  ngOnInit() {

    if(this.userService.isLoggedIn()){

      this.approute.navigate(['ErpDashboard']);

    }else{

        //console.log("LoginFailed");
        // this.approute.navigate(['404']);
          this.loadDynamicComponent();
        
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


    userLoginErp(loginForm: User){

      console.log(loginForm);

      this.userService.loginUser(loginForm).subscribe({
        next:(res)=>{
          console.log(res);
          this.userService.storeToken(res.token);
          this.approute.navigate(['ErpDashboard']);
          this.loadDynamicComponent();
        },
        error: (response)=>{
          console.log(response);
        }
      })

    }


  loadDynamicComponent() {
    this.container.clear();
    const componentRef = this.container.createComponent(WidgetsDropdownComponent);
  }
  }