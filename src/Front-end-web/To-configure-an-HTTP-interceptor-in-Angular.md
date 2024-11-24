To configure an HTTP interceptor in Angular, follow these steps to add the authorization headers for API requests:

### Step 1: Create the HTTP Interceptor
1. In your Angular project, generate a new interceptor file:
   ```bash
   ng generate service interceptors/auth
   ```

   This will create a new service file, typically named `auth.interceptor.ts`.

2. Open the newly created `auth.interceptor.ts` file and implement the interceptor logic:

   ```typescript
   import { Injectable } from '@angular/core';
   import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
   import { Observable } from 'rxjs';

   @Injectable()
   export class AuthInterceptor implements HttpInterceptor {
     intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
       const token = localStorage.getItem('access_token');
       if (token) {
         request = request.clone({
           setHeaders: {
             Authorization: `Bearer ${token}`
           }
         });
       }
       return next.handle(request);
     }
   }
   ```

### Step 2: Register the Interceptor in `app.module.ts`
1. Open your main module file, usually `app.module.ts`.

2. Import the interceptor:

   ```typescript
   import { HTTP_INTERCEPTORS } from '@angular/common/http';
   import { AuthInterceptor } from './interceptors/auth.interceptor';
   ```

3. Register the interceptor in the `providers` array of `@NgModule`:

   ```typescript
   @NgModule({
     declarations: [
       // Your components here
     ],
     imports: [
       // Your modules here
     ],
     providers: [
       { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
       // Other providers if needed
     ],
     bootstrap: [AppComponent]
   })
   export class AppModule { }
   ```

### Explanation of `multi: true`
Setting `multi: true` allows Angular to add multiple interceptors to the `HTTP_INTERCEPTORS` token, rather than replacing any previously registered interceptors.

### Step 3: Test the Interceptor
Once configured, your `AuthInterceptor` will automatically add the `Authorization` header to each HTTP request that your application makes.

This setup should work seamlessly with the `JwtModule` configuration you have, allowing you to manage token-based authentication for your API calls.