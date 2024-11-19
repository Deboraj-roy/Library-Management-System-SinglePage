import { HttpClient, HttpParams } from '@angular/common/http';
import { IfStmt } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { from, Subject } from 'rxjs';
import { User, UserType } from '../../models/model'
import { tap } from 'rxjs/operators';
import { Book } from '../../models/Book';



@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl: string = 'https://localhost:7030/api/Library/';
  userStatus: Subject<string> = new Subject();
  constructor(private http: HttpClient, private jwt: JwtHelperService) { }

  register(user: any){
    return this.http.post(this.baseUrl + 'Register', user, {
      responseType: 'text',
    });
  }

  login(info: any) {
    let params = new HttpParams()
      .append('email', info.email)
      .append('password', info.password);

    return this.http.get(this.baseUrl + 'Login', {
      params: params,
      responseType: 'text',
    });
  }

  isLoggedIn(): boolean {
    if (
        localStorage.getItem('access_token') != null &&
        !this.jwt.isTokenExpired()
        )
    {
        return true;
    }
    return false;

  }

  getBooks(){
    return this.http.get<Book[]>(this.baseUrl + 'GetBooks');
  }

/*getUserInfo(): User | null {
    if (!this.isLoggedIn()) return null;
    var decodedToken = this.jwt.decodeToken();
    var user: User = {
      id: decodedToken.id,
      firstName: decodedToken.FirstName,
      lastName: decodedToken.LastName,
      email: decodedToken.email,
      mobileNumber: decodedToken.mobileNumber,
      userType: UserType[decodedToken.userType as keyof typeof UserType], //get user type string userType = ["ADMIN"] = 1 
      accountStatus: decodedToken.accountStatus,
      createdOn: decodedToken.createdOn,
      password: '',
    };
    return user;
  }
    */

  getUserInfo(): User | null {
    if (!this.isLoggedIn()) return null;
    const decodedToken = this.jwt.decodeToken();
    const user: User = {
        id: decodedToken.id,
        firstName: decodedToken.firstName,  // Updated to match the new claim
        lastName: decodedToken.lastName,     // Updated to match the new claim
        email: decodedToken.email,
        mobileNumber: decodedToken.mobileNumber,
        userType: UserType[decodedToken.userType as keyof typeof UserType],
        accountStatus: decodedToken.accountStatus,
        createdOn: decodedToken.createdOn,
        password: '',
    };
    return user;
}


  logOut(){
    localStorage.removeItem('access_token');
    this.userStatus.next('loggedOff');
  }

}