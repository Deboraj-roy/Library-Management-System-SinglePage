import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { AppNavbar } from './app/navbar/navbar.component';

bootstrapApplication(AppNavbar, appConfig)
  .catch((err) => console.error(err));
