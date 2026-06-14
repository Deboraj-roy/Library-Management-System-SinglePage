import { Component, OnInit } from '@angular/core';
import { Order } from '../../models/Order';
import { ApiService } from '../../shared/services/api.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
    selector: 'all-orders',
    templateUrl: './all-orders.component.html',
    styleUrl: './all-orders.component.scss',
    standalone: false
})
export class AllOrdersComponent implements OnInit {
  columnsForPendingReturns: string[] = [
    'orderId',
    'userIdForOrder',
    'userNameForOrder',
    'bookId',
    'orderDate',
    'fineToPay',
  ];

  columnsForCompletedReturns: string[] = [
    'orderId',
    'userIdForOrder',
    'userNameForOrder',
    'bookId',
    'orderDate',
    'returnedDate',
    'finePaid',
  ];

  showProgressBar: boolean = false;
  ordersWithPendingReturns: Order[] = [];
  ordersWithCompletedReturns: Order[] = [];

  constructor(private apiService: ApiService, private snackBar: MatSnackBar){
  }

  ngOnInit(): void {
    console.log('AllOrdersComponent: ngOnInit');
    this.loadOrders();
  }

  private loadOrders() {
    this.apiService.getOrders().subscribe({
      next: (res: Order[]) => {
        console.log('AllOrdersComponent: loaded', res?.length ?? 0);
        this.ordersWithPendingReturns = res.filter(o => !o.returned);
        this.ordersWithCompletedReturns = res.filter(o => o.returned);
      },
      error: (err) => {
        console.error('Failed to load orders', err);
        this.snackBar.open('No Order Found', 'OK')
      }
    })
  }

  sendEmail() {
    this.showProgressBar = true;
    this.apiService.sendEmail().subscribe({
      next: (res) => {
        if (res === 'sent') {
          this.snackBar.open(
            'Emails have been Sent to respected Students!',
            'OK'
          );
          this.showProgressBar = false;
        } else {
          this.snackBar.open('Emails have not been sent!', 'OK');
          this.showProgressBar = false;
        }
      },
    });
  }

  blockUsers() {
    this.showProgressBar = true;
    this.apiService.blockUsers().subscribe({
      next: (res) => {
        if (res === 'blocked') {
          this.snackBar.open('Eligible Users Accounts were BLOCKED!', 'OK');
          this.showProgressBar = false;
        } else {
          this.snackBar.open('Not BLOCKED!', 'OK');
          this.showProgressBar = false;
        }
      },
    });
  }
}
