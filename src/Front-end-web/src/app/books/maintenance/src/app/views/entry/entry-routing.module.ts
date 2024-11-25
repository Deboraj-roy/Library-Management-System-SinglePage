import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JournalVoucherComponent } from './journal-voucher/journal-voucher.component';
import { ReceiptEntryComponent } from './receipt-entry/receipt-entry.component';
import { PaymentVoucherComponent } from './payment-voucher/payment-voucher.component';
import { LedgerVoucherComponent } from './ledger-voucher/ledger-voucher.component';
import { ContraVoucherComponent } from './contra-voucher/contra-voucher.component';
import { CashReceiptVoucherComponent } from './cash-receipt-voucher/cash-receipt-voucher.component';
import { BankReceiptVoucherComponent } from './bank-receipt-voucher/bank-receipt-voucher.component';
import { CashPaymentVoucherComponent } from './cash-payment-voucher/cash-payment-voucher.component';
import { BankPaymentVoucherComponent } from './bank-payment-voucher/bank-payment-voucher.component';
import { VoucherListComponent } from './voucher-list/voucher-list.component';
import { PaymentVoucherListComponent } from './payment-voucher-list/payment-voucher-list.component';
import { ContraEntryComponent } from './contra-entry/contra-entry.component';
import { JournalEntryComponent } from './journal-entry/journal-entry.component';
import { ContraVoucherListComponent } from './contra-voucher-list/contra-voucher-list.component';
import { JournalVoucherListComponent } from './journal-voucher-list/journal-voucher-list.component';
import { SubLedgerVoucherComponent } from './sub-ledger-voucher/sub-ledger-voucher.component';
import { NoteVoucherComponent } from './note-voucher/note-voucher.component';
import { LedgerSubledgerListComponent } from './ledger-subledger-list/ledger-subledger-list.component';
import { ReceiptVoucherComponent } from './receipt-voucher/receipt-voucher.component';
import { PaymenttVoucherComponent } from './paymentt-voucher/paymentt-voucher.component';
import { PurchaseVoucherComponent } from './purchase-voucher/purchase-voucher.component';
import { SalesVoucherComponent } from './sales-voucher/sales-voucher.component';
import { LedgerRequestsComponent } from './ledger-requests/ledger-requests.component';
import { DownloadVoucherComponent } from './download-voucher/download-voucher.component';
import { DayBookComponent } from './day-book/day-book.component';
import { SalesVoucherMasterComponent } from './sales-voucher-master/sales-voucher-master.component';
import { PurchaseMasterComponent } from './purchase-master/purchase-master.component';
import { SalesVoucherDiscountComponent } from './sales-voucher-discount/sales-voucher-discount.component';
import { PurchaseVoucherDetailsListComponent } from './purchase-voucher-details-list/purchase-voucher-details-list.component';
import { SalesVoucherDetailsListComponent } from './sales-voucher-details-list/sales-voucher-details-list.component';
import { SalesVoucherReturnDetailsListComponent } from './sales-voucher-return-details-list/sales-voucher-return-details-list.component';
import { PurchaseReturnVoucherDetailsListComponent } from './purchase-return-voucher-details-list/purchase-return-voucher-details-list.component';
import { SalesReturnVoucherListComponent } from './sales-return-voucher-list/sales-return-voucher-list.component';
import { PurchaseReturnVoucherComponent } from './purchase-return-voucher/purchase-return-voucher.component';
import { PurchaseVoucherListComponent } from './purchase-voucher-list/purchase-voucher-list.component';


const routes: Routes = [
  {
    path: '',
    data: {
      title: '',
    },
    children: [
      {
        path: 'receipt-entry',
        component: ReceiptEntryComponent,
        data: {
          title: 'Receipt entry'
        }
      },
      {
        path:'payment-voucher',
        component:PaymentVoucherComponent,
        data:{
          title:'Payment Voucher'
        }
      },
      {
        path: 'journal-voucher',
        component: JournalVoucherComponent,
        data: {
          title: 'Journal Voucher'
        }
      },

      {
        path: 'contra-voucher',
        component: ContraVoucherComponent,
        data: {
          title: 'Contra Voucher'
        }
      },
      {
        path: 'ledger-voucher',
        component: LedgerVoucherComponent,
        data: {
          title: 'Ledger'
        }
      },
      {
        path: 'cash-receipt-voucher',
        component: CashReceiptVoucherComponent,
        data: {
          title: 'Cash Receipt'
        }
      },
      {
        path: 'bank-receipt-voucher',
        component: BankReceiptVoucherComponent,
        data: {
          title: 'Bank Receipt'
        }
      },
      {
        path: 'cash-payment-voucher',
        component: CashPaymentVoucherComponent,
        data: {
          title: 'Cash Payment'
        }
      },
      {
        path: 'bank-payment-voucher',
        component: BankPaymentVoucherComponent,
        data: {
          title: 'Bank Payment'
        }
      },
      {
        path: 'voucher-list',
        component: VoucherListComponent,
        data: {
          title: 'Receipt Voucher List'
        }
      },
      {
        path: 'payment-voucher-list',
        component: PaymentVoucherListComponent,
        data: {
          title: 'Payment Voucher List'
        }
      },
      {
        path: 'contra-entry',
        component: ContraEntryComponent,
        data: {
          title: 'Contra Entry'
        }
      },
      {
        path: 'journal-entry',
        component: JournalEntryComponent,
        data: {
          title: 'Journal entry'
        }
      },
      {
        path: 'contra-voucher-list',
        component: ContraVoucherListComponent,
        data: {
          title: 'Contra Voucher List'
        }
      },
      {
        path: 'journal-voucher-list',
        component: JournalVoucherListComponent,
        data: {
          title: 'Journal Voucher List'
        }
      },
      {
        path: 'subLedger-voucher',
        component: SubLedgerVoucherComponent,
        data: {
          title: 'SubLedger'
        }
      },
      {
        path: 'ledger-subLedger-voucher',
        component: LedgerSubledgerListComponent,
        data: {
          title: 'Ledger SubLedger Voucher'
        }
      },
      {
        path: 'note-voucher',
        component: NoteVoucherComponent,
        data: {
          title: 'Note Voucher'
        }
      },
      {
        path: 'download-voucher',
        component: DownloadVoucherComponent,
        data: {
          title: 'Download Voucher'
        }
      },
      {
        path: 'receipt-voucher',
        component: ReceiptVoucherComponent,
        data: {
          title: 'Receipt Voucher'
        }
      },
      {
        path: 'paymentt-voucher',
        component: PaymenttVoucherComponent,
        data: {
          title: 'Payment Voucher'
        }
      },
      {
        path: 'purchase-voucher',
        component: PurchaseVoucherComponent,
        data: {
          title: 'Purchase Voucher'
        }
      },
      {
        path: 'purchase-master',
        component: PurchaseMasterComponent,
        data: {
          title: 'Purchase Voucher'
        }
      },
      {
        path: 'purchase-return-voucher',
        component: PurchaseReturnVoucherComponent,
        data: {
          title: 'Purchase Return Voucher'
        }
      },
      {
        path: 'purchase-voucher-list',
        component: PurchaseVoucherListComponent,
        data: {
          title: 'Purchase Voucher List'
        }
      },
      {
        path: 'purchase-voucher-details-list',
        component: PurchaseVoucherDetailsListComponent,
        data: {
          title: 'Purchase Voucher Details List'
        }
      },
      {
        path: 'purchase-return-voucher-details-list',
        component: PurchaseReturnVoucherDetailsListComponent,
        data: {
          title: 'Purchase Voucher Details List'
        }
      },
      {
        path: 'sales-voucher',
        component: SalesVoucherComponent,
        data: {
          title: 'Sales Voucher'
        }
      },
      {
        path: 'sales-voucher-discount',
        component: SalesVoucherDiscountComponent,
        data: {
          title: 'Sales Voucher With Discount'
        }
      },
      {
        path: 'sales-voucher-return-details-list',
        component: SalesVoucherReturnDetailsListComponent,
        data: {
          title: 'Sales Voucher Return Details'
        }
      },
      {
        path: 'sales-return-voucher-list',
        component: SalesReturnVoucherListComponent,
        data: {
          title: 'Sales Voucher Return Details'
        }
      },
      
      {
        path: 'sales-voucher-master',
        component: SalesVoucherMasterComponent,
        data: {
          title: 'Sales Voucher Master'
        }
      },
      {
        path: 'sales-return-voucher',
        component: SalesVoucherComponent,
        data: {
          title: 'Sales Return Voucher'
        }
      },
      {
        path: 'sales-voucher-details-list',
        component: SalesVoucherDetailsListComponent,
        data: {
          title: 'Sales Voucher Details List'
        }
      },
      {
        path: 'ledger-requests',
        component: LedgerRequestsComponent,
        data: {
          title: 'Ledger Requests'
        }
      },
      {
        path: 'day-book',
        component: DayBookComponent,
        data: {
          title: 'Day Book'
        }
      },
    ],
  },
];

// PaymenttVoucherComponent
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EntryRoutingModule {}

