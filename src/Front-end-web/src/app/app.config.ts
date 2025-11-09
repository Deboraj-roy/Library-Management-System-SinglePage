import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { JwtModule } from '@auth0/angular-jwt';
import { importProvidersFrom } from '@angular/core';


export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), 
    provideAnimationsAsync(), 
    provideHttpClient(),
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
    provideHttpClient(withInterceptorsFromDi())
  ]
};
