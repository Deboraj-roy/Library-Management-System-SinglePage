import { Component, EventEmitter, Input, input, Output } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Order } from '../../../models/Order';
import { AccountStatus, User } from '../../../models/model';

@Component({
  selector: 'page-table',
  templateUrl: './page-table.component.html',
  styleUrl: './page-table.component.scss'
})
export class PageTableComponent {
  @Input()
  columns: string[] = [];

  @Input()
  dataSource: any[] = [];

  @Output()
  approve = new EventEmitter<User>();

  @Output()
  unblock = new EventEmitter<User>();

  getFineToPay(order: Order) {
    return this.apiService.getFine(order);
  }

  constructor(private apiService: ApiService) {}

  getAccountStatus(input: AccountStatus) {
    return AccountStatus[input];
  }
}
