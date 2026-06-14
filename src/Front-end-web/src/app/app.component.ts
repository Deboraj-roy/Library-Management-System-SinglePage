import { Component, OnInit } from '@angular/core';
import { RouterOutlet, Router, NavigationEnd, NavigationStart } from '@angular/router';
import { SharedModule } from './shared/shared.module';

import { AuthModule } from './auth/auth.module';
import { ApiService } from './shared/services/api.service';
import { BooksModule } from './books/books.module';
import { UsersModule } from './users/users.module';
 
@Component({
    selector: 'app-root',
    imports: [
    RouterOutlet,
    SharedModule,
    AuthModule,
    BooksModule,
    UsersModule
],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  title = 'Front-end-web';
  constructor(private apiService: ApiService, private router: Router){}
  ngOnInit(): void {
    let status = this.apiService.isLoggedIn() ? 'loggedIn' : 'loggedOff';
    this.apiService.userStatus.next(status);

    this.router.events.subscribe((e) => {
      if (e instanceof NavigationStart) {
        console.log('Router: NavigationStart', (e as NavigationStart).url);
      }
      if (e instanceof NavigationEnd) {
        console.log('Router: NavigationEnd', (e as NavigationEnd).url);
      }
    });
  }
}
