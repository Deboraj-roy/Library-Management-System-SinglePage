import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { UsersVM } from '../../models/users/UsersVM';
//import { User } from '../models/users/User';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseApiUrl : string = environment.baseApiUrl
  constructor(private http : HttpClient,private approuter: Router) { 

  }

  signUpUser(userObj:any){
    console.log("userObj",userObj);
    return this.http.post<any>(this.baseApiUrl+'/api/Users/userregister',userObj);
   }
   loginUser(userObj:any){
 
    return this.http.post<any>(this.baseApiUrl+'/api/Users/userauthorization',userObj);
   }

  
   storeToken(tokenValue:string){

    localStorage.setItem('token',tokenValue);
   }

   getToken(){
    return localStorage.getItem('token');
   }

   isLoggedIn(): boolean{

    console.log(localStorage.getItem('token'));
    return !!localStorage.getItem('token');
   }

   getAllddlUsers():Observable<UsersVM[]>{
    return this.http.get<UsersVM[]>(this.baseApiUrl+'/api/Entry/getAllddlUsers');
   }
   
   signOut(){

    //localStorage.removeItem('token');
    localStorage.clear();
    window.location.href = 'http://36.50.40.147:7095/';
   // this.approuter.navigate(['/']);

   }


}

