import { Component } from '@angular/core';

@Component({
  selector: 'app-page-redirect',
  templateUrl: './page-redirect.component.html',
  styleUrls: ['./page-redirect.component.scss']
})
export class PageRedirectComponent {



  constructor(){

   this.redirect();
  }

  redirect() {
    window.location.href = 'http://36.50.40.147:7095/';
  }

}
