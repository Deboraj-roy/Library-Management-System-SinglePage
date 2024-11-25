import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../services/users/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  /**
   *
   */
  constructor(private userService:UserService,private approute:Router) {
   
  }
  
  canActivate():boolean{
    console.log(this.userService.isLoggedIn());
    if(this.userService.isLoggedIn()){
     
      //this.approute.navigate(['admin/dashboard']);
      return true;
    }
   else{
   this.approute.navigate(['/']);
    return false;
   }

  }
  
}
