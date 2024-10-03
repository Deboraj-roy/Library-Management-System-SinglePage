import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Route, Router } from '@angular/router';


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
          router.navigateByUrl('/home');
          console.log(apiService.getUserInfo());
        }
        else{

        }
      },
    });
  }
}
