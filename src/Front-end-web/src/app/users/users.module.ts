import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserOrdersComponent } from './user-orders/user-orders.component';
import { SharedModule } from '../shared/shared.module';
import { ApprovalRequestsComponent } from './approval-requests/approval-requests.component';
import { AllOrdersComponent } from './all-orders/all-orders.component';
import { ViewUsersComponent } from './view-users/view-users.component';
import { ProfileComponent } from './profile/profile.component';



@NgModule({
  declarations: [
    UserOrdersComponent,
    ApprovalRequestsComponent,
    AllOrdersComponent,
    ViewUsersComponent,
    ProfileComponent
  ],
  imports: [
    SharedModule
  ]
})
export class UsersModule { }
