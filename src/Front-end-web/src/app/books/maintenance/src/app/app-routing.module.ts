import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DefaultLayoutComponent } from './containers';
import { Page404Component } from './views/pages/page404/page404.component';
import { Page500Component } from './views/pages/page500/page500.component';
import { LoginComponent } from './views/pages/login/login.component';
import { RegisterComponent } from './views/pages/register/register.component';
import {AuthGuard} from  './guards/auth.guard';
import { PageRedirectComponent } from './views/pages/page-redirect/page-redirect.component';
import { AccDashboardToSndComponent } from './views/pages/acc-dashboard-to-snd/acc-dashboard-to-snd.component';


const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    data: {
      title: 'Login Page'
    },
    
  },
  {
    path: 'authcheckerp',
    component: LoginComponent,
    data: {
      title: 'Login Page'
    },
    
  },
  {
    path: 'admin',
    component: DefaultLayoutComponent,
    data: {
      title: 'Home'
    },
    canActivate:[AuthGuard],
   
    children: [
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./views/dashboard/dashboard.module').then((m) => m.DashboardModule)
      },
      {
        path: 'theme',
        loadChildren: () =>
          import('./views/theme/theme.module').then((m) => m.ThemeModule)
      },
      {
        path: 'setup',
        loadChildren: () =>
          import('./views/setup/setup.module').then((m) => m.SetupModule)
      },
      {
        path: 'entry',
        loadChildren: () =>
          import('./views/entry/entry.module').then((m) => m.EntryModule)
      },
      {
        path: 'report',
        loadChildren: () =>
          import('./views/report/report.module').then((m) => m.ReportModule)
      },
      {
        path: 'base',
        loadChildren: () =>
          import('./views/base/base.module').then((m) => m.BaseModule)
      },
      {
        path: 'buttons',
        loadChildren: () =>
          import('./views/buttons/buttons.module').then((m) => m.ButtonsModule)
      },
      {
        path: 'forms',
        loadChildren: () =>
          import('./views/forms/forms.module').then((m) => m.CoreUIFormsModule)
      },
      {
        path: 'charts',
        loadChildren: () =>
          import('./views/charts/charts.module').then((m) => m.ChartsModule)
      },
      {
        path: 'icons',
        loadChildren: () =>
          import('./views/icons/icons.module').then((m) => m.IconsModule)
      },
      {
        path: 'notifications',
        loadChildren: () =>
          import('./views/notifications/notifications.module').then((m) => m.NotificationsModule)
      },
      {
        path: 'widgets',
        loadChildren: () =>
          import('./views/widgets/widgets.module').then((m) => m.WidgetsModule)
      },
      {
        path: 'pages',
        loadChildren: () =>
          import('./views/pages/pages.module').then((m) => m.PagesModule)
      },
      
    ]
  },
  {
    path: '404',
    component: Page404Component,
    data: {
      title: 'Page 404'
    }
  },
  {
    path: '500',
    component: Page500Component,
    data: {
      title: 'Page 500'
    }
  },
 
  {
    path: 'register',
    component: RegisterComponent,
    data: {
      title: 'Register Page'
    }
  },
  {
    path: 'ErpDashBoard',
    component: PageRedirectComponent,
    data: {
      title: 'Dashboard'
    },
    
    
  },
  {
    path: 'AccDashBoardToSnd',
    component: AccDashboardToSndComponent,
    data: {
      title: 'Dashboard'
    },
    
    
  },
  {path: '**', redirectTo: 'dashboard'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'top',
      anchorScrolling: 'enabled',
      initialNavigation: 'enabledBlocking'
      // relativeLinkResolution: 'legacy'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
