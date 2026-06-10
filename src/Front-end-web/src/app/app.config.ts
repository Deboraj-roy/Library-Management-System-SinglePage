import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HttpInterceptorFn, provideHttpClient, withInterceptors, withInterceptorsFromDi } from '@angular/common/http';
import { JwtModule } from '@auth0/angular-jwt';
import { importProvidersFrom } from '@angular/core';

const authHeaderInterceptor: HttpInterceptorFn = (request, next) => {
  const token = localStorage.getItem('access_token');
  if (!token) {
    return next(request);
  }

  const apiHosts = ['lazynoja.bsite.net', 'librarydeb.somee.com', 'deblmsapi.runasp.net', 'green-breeze-a7aa.mrouf7353.workers.dev', 'p13839740.somee.com', 'angualrdeb.somee.com', 'localhost:7030'];
  const requestUrl = new URL(request.url, window.location.origin);

  if (!apiHosts.includes(requestUrl.hostname)) {
    return next(request);
  }

  return next(
    request.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
      },
    })
  );
};


export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), 
    provideAnimationsAsync(), 
    importProvidersFrom(
      JwtModule.forRoot({
        config: {
          tokenGetter: () => {
            return localStorage.getItem('access_token');
          },
          // add your API host so the JWT interceptor will attach the Authorization header
          allowedDomains: ['localhost:7030', 'librarydeb.somee.com', 'deblmsapi.runasp.net', 'green-breeze-a7aa.mrouf7353.workers.dev', 'p13839740.somee.com', 'lazynoja.bsite.net', 'angualrdeb.somee.com'],
        },
      })
    ),
    provideHttpClient(withInterceptors([authHeaderInterceptor]), withInterceptorsFromDi())
  ]
};
