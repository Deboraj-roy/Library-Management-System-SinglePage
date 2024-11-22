import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserOrdersComponent } from './user-orders/user-orders.component';
import { SharedModule } from '../shared/shared.module';
import { ApprovalRequestsComponent } from './approval-requests/approval-requests.component';



@NgModule({
  declarations: [
    UserOrdersComponent,
    ApprovalRequestsComponent
  ],
  imports: [
    SharedModule
  ]
})
export class UsersModule { }
