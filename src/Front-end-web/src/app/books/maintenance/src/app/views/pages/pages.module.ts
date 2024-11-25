import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { Page404Component } from './page404/page404.component';
import { Page500Component } from './page500/page500.component';
import { ButtonModule, CardModule, FormModule, GridModule } from '@coreui/angular';
import { IconModule,IconSetService } from '@coreui/icons-angular';
import { FormsModule ,ReactiveFormsModule } from '@angular/forms';
import { PageRedirectComponent } from './page-redirect/page-redirect.component';
import { WidgetsModule } from '../widgets/widgets.module';
import { AccDashboardToSndComponent } from './acc-dashboard-to-snd/acc-dashboard-to-snd.component';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    Page404Component,
    Page500Component,
    PageRedirectComponent,
    AccDashboardToSndComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    CardModule,
    ButtonModule,
    GridModule,
    IconModule,
    FormModule,
    FormsModule,
    ReactiveFormsModule,
    WidgetsModule
  ],providers: [
   
    IconSetService,
    DatePipe,
   
  ]
})
export class PagesModule {
}
