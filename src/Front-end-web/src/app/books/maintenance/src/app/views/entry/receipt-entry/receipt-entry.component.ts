import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ReceiptEntry } from 'src/app/models/Entry/ReceiptEntry';
import { Receipt } from 'src/app/models/Entry/Receipt';
import { AccHeadService } from 'src/app/services/acc-head/acc-head.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-receipt-entry',
  templateUrl: './receipt-entry.component.html',
  styleUrls: ['./receipt-entry.component.scss']
})
export class ReceiptEntryComponent {
  
 
}
