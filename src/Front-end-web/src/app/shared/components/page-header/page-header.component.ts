import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'page-header',
  templateUrl: './page-header.component.html',
  styleUrl: './page-header.component.scss'
})
export class PageHeaderComponent {
  loggedIn: boolean = false;
  name: string = '';

  constructor(private apiService: ApiService)
  {
    this.apiService.userStatus.subscribe({
      next: (res) => {
          if (res === 'loggedIn'){
            this.loggedIn = true;
            var user = this.apiService.getUserInfo()!;
            if(user != null){

              this.name = `${user.firstName} ${user.lastName}`; // Updated to match the new property names

            console.log(user);
            console.log(this.name);
            }

          }
          else{
            this.loggedIn = false;
            this.name = '';
          }
      },
    });
    
  }
  logout(){
    this.apiService.logOut();
  }

}
