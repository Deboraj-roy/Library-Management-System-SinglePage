import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../shared/services/api.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Order } from '../../models/Order';

@Component({
  selector: 'return-book',
  templateUrl: './return-book.component.html',
  styleUrl: './return-book.component.scss'
})
export class ReturnBookComponent {
  returnForm: FormGroup;
  fineToPay: number | null = null;
  /**
    *
    */
  constructor(
    fb: FormBuilder,
    private apiservice: ApiService,
    private snackBar: MatSnackBar
    ) {
      this.returnForm = fb.group({
        userId: fb.control(null, [Validators.required]),
        bookId: fb.control(null, [Validators.required]),
      });
    }
    getFine() {
      let userId = this.returnForm.get('userId')?.value;
      let bookId = this.returnForm.get('bookId')?.value;

      this.apiservice.getOrdersOfUser(userId).subscribe({
        next: (res: Order[]) => {
          if (res.some((o) => !o.returned && o.bookId == bookId)) {
            let order: Order = res.filter((o) => o.bookId == bookId)[0];
            this.fineToPay = this.apiservice.getFine(order);
          }
          else {
            this.snackBar.open(`User doesn't have Book with ID: ${bookId}`, 'OK');
          }
        },
      });
    }

    returnBook(){
      let userId = this.returnForm.get('userId')?.value;
      let bookId = this.returnForm.get('bookId')?.value;

      this.apiservice.returnBook(userId, bookId, this.fineToPay!).subscribe({
        next: (res) => {
          if (res === 'Returned'){
            this.snackBar.open('Book has been Returned!', 'OK');
          }
          else this.snackBar.open('Book has not Returned!', 'OK');
        },
      });
    }
}
