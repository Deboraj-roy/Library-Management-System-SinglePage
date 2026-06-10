import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Order } from '../../../models/Order';
import { AccountStatus, User } from '../../../models/model';

@Component({
    selector: 'page-table',
    templateUrl: './page-table.component.html',
    styleUrl: './page-table.component.scss',
    standalone: false
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

  displayValue(value: unknown): string | number {
    if (value === null || value === undefined || value === '') {
      return '-';
    }
    return String(value);
  }

  displayName(firstName: string | null | undefined, lastName: string | null | undefined) {
    const fullName = [firstName, lastName].filter(Boolean).join(' ').trim();
    return fullName || '-';
  }

  formatDate(value: string | null | undefined) {
    if (!value) {
      return '-';
    }

    const parsedDate = new Date(value);
    if (Number.isNaN(parsedDate.getTime())) {
      return value;
    }

    return parsedDate
      .toLocaleDateString('en-GB', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
      })
      .replace(/ /g, '-');
  }

  getAccountStatus(input: AccountStatus | null | undefined) {
    if (input === null || input === undefined) {
      return '-';
    }

    return AccountStatus[input];
  }
}
