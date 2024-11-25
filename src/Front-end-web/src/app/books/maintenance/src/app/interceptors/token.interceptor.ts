import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { UserService } from '../services/users/user.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private userService:UserService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    const usertoken = this.userService.getToken();
    if(usertoken){
      request= request.clone({
        setHeaders:{Authorization:`Bearer ${usertoken}`}
      })
    }
    return next.handle(request).pipe(
      catchError((error:any)=>{
        if(error instanceof HttpErrorResponse ){

          if(error.status===401){
            console.log(error.status);
          }
        }

        return throwError(()=> new Error("Something went wrrong !!"));

      })
    );
  }
}
