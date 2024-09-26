import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { RegisterComponent } from './auth/register/register.component';

export const routes: Routes = [
    { path: 'register', component: RegisterComponent},
    { path: '**', component: PageNotFoundComponent}
];
