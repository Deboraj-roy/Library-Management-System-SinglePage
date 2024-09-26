import { Component } from '@angular/core';

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
  constructor() {
    this.navItems = [
      { value: 'View Books', link: 'View-books' },
      { value: 'My Orders', link: 'my-orders' }
    ]
    
  }
}
