import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Route, Router } from '@angular/router';
import { UserType } from '../../../models/model';


export interface NavigationItem {
  value: string;
  link: string;
}

@Component({
  selector: 'page-side-nav',
  templateUrl: './page-side-nav.component.html',
  styleUrl: './page-side-nav.component.scss'
})

export class PageSideNavComponent {
  panelName: string = 'Student Panel';
  navItems: NavigationItem[] = [];

  /**
   *
   */
  constructor(private apiService: ApiService, private router: Router) {
    this.navItems = [
      { value: 'View Books', link: 'View-books' },
      { value: 'My Orders', link: 'my-orders' }
    ];
    
    apiService.userStatus.subscribe({
      next: (status) => {
        if (status == 'loggedIn') {
          router.navigateByUrl('/profile');
          let user = apiService.getUserInfo();
          if (user != null){
            if( user.userType == UserType.ADMIN){
              this.panelName = 'Admin Panel';
              this.navItems = [
                { value: 'View Books', link: '/home' },
                { value: 'Maintenance', link: '/maintenance' },
                { value: 'Return Book', link: '/return-book' },
                { value: 'View Users', link: '/view-users' },
                { value: 'Aprooval Requests', link: '/approval-requests' },
                { value: 'All Orders', link: '/all-orders' },
                { value: 'My Orders', link: '/my-orders' },
              ];
            }
            else if (user.userType == UserType.STUDENT){
              this.panelName = 'Student Panel';
              this.navItems = [
                { value: 'View Books', link: '/home' },
                { value: 'My Orders', link: '/my-orders' },
              ];
            }
          }
          //console.log(apiService.getUserInfo());
        }
        else if (status == 'loggedOff') {
            this.panelName = 'Auth Panel';
            router.navigateByUrl('/login');
            this.navItems = [];
        }
      },
    });
  }
  
}
