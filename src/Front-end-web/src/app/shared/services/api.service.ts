import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl: string = 'https://localhost:7030/api/Library/';
  userStatus: Subject<string> = new Subject();
  constructor(private http: HttpClient) { }

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

}
