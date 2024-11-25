import { NgModule } from '@angular/core';
import { CommonModule, DatePipe, DecimalPipe} from '@angular/common';
import { EntryRoutingModule } from './entry-routing.module';
import { ReceiptEntryComponent } from './receipt-entry/receipt-entry.component';
import { ReportModule } from '../report/report.module';
import { AccordionModule,
          BadgeModule, 
           BreadcrumbModule,
            ButtonModule,
             CardModule, 
             CarouselModule,
              CollapseModule,
               DropdownModule, 
               FormModule,
                GridModule,
                 ListGroupModule, 
                 ModalModule, 
                 NavModule, 
                 PaginationModule,
                  PlaceholderModule,
                   PopoverModule,
                    ProgressModule, 
                    SharedModule,
                     SpinnerModule,
                      TableModule, 
                      TabsModule, 
                      ToastModule, 
                      TooltipModule,
                       UtilitiesModule 
} from '@coreui/angular';
import { IconModule, IconSetService } from '@coreui/icons-angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DocsComponentsModule } from '@docs-components/docs-components.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgxPaginationModule } from 'ngx-pagination';

import { PaymentVoucherComponent } from './payment-voucher/payment-voucher.component';

import { JournalVoucherComponent } from './journal-voucher/journal-voucher.component';
import { LedgerVoucherComponent } from './ledger-voucher/ledger-voucher.component';
import { ContraVoucherComponent } from './contra-voucher/contra-voucher.component';
// import { DatePipe } from '@angular/common';
import { CashReceiptVoucherComponent } from './cash-receipt-voucher/cash-receipt-voucher.component';
import { BankReceiptVoucherComponent } from './bank-receipt-voucher/bank-receipt-voucher.component';
import { CashPaymentVoucherComponent } from './cash-payment-voucher/cash-payment-voucher.component';
import { BankPaymentVoucherComponent } from './bank-payment-voucher/bank-payment-voucher.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
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
import { DownloadVoucherComponent } from './download-voucher/download-voucher.component';
import { LedgerRequestsComponent } from './ledger-requests/ledger-requests.component';
import { NumberFormatPipe } from 'src/app/number-format.pipe';
import { DayBookComponent } from './day-book/day-book.component';
import { SalesVoucherMasterComponent } from './sales-voucher-master/sales-voucher-master.component';
import { SalesReturnVoucherComponent } from './sales-return-voucher/sales-return-voucher.component';
import { SalesVoucherListComponent } from './sales-voucher-list/sales-voucher-list.component';
import { PurchaseMasterComponent } from './purchase-master/purchase-master.component';
import { PurchaseReturnVoucherComponent } from './purchase-return-voucher/purchase-return-voucher.component';
import { PurchaseVoucherListComponent } from './purchase-voucher-list/purchase-voucher-list.component';
import { PurchaseReturnVoucherListComponent } from './purchase-return-voucher-list/purchase-return-voucher-list.component';
import { SalesVoucherDiscountComponent } from './sales-voucher-discount/sales-voucher-discount.component';
import { SalesVoucherDetailsListComponent } from './sales-voucher-details-list/sales-voucher-details-list.component';
import { SalesVoucherReturnDetailsListComponent } from './sales-voucher-return-details-list/sales-voucher-return-details-list.component';
import { PurchaseVoucherDetailsListComponent } from './purchase-voucher-details-list/purchase-voucher-details-list.component';
import { PurchaseReturnVoucherDetailsListComponent } from './purchase-return-voucher-details-list/purchase-return-voucher-details-list.component';
import { SalesReturnVoucherListComponent } from './sales-return-voucher-list/sales-return-voucher-list.component';




@NgModule({
  declarations: [
    ReceiptEntryComponent,
    PaymentVoucherComponent,

    JournalVoucherComponent,
      LedgerVoucherComponent,
      ContraVoucherComponent,
      CashReceiptVoucherComponent,
      BankReceiptVoucherComponent,
      CashPaymentVoucherComponent,
      BankPaymentVoucherComponent,
      VoucherListComponent,
      PaymentVoucherListComponent,
      ContraEntryComponent,
      JournalEntryComponent,
      ContraVoucherListComponent,
      JournalVoucherListComponent,
      SubLedgerVoucherComponent,
      NoteVoucherComponent,
      LedgerSubledgerListComponent,
      ReceiptVoucherComponent,
      PaymenttVoucherComponent,
      PurchaseVoucherComponent,
      SalesVoucherComponent,
      DownloadVoucherComponent,
      LedgerRequestsComponent,
      DayBookComponent,
      SalesVoucherMasterComponent,
      SalesReturnVoucherComponent,
      SalesVoucherListComponent,
      PurchaseMasterComponent,
      PurchaseReturnVoucherComponent,
      PurchaseVoucherListComponent,
      PurchaseReturnVoucherListComponent,
      SalesVoucherDiscountComponent,
      SalesVoucherDetailsListComponent,
      SalesVoucherReturnDetailsListComponent,
      PurchaseVoucherDetailsListComponent,
      PurchaseReturnVoucherDetailsListComponent,
      SalesReturnVoucherListComponent

  ],
  imports: [
    CommonModule,
    EntryRoutingModule,
    AccordionModule,
    BadgeModule,
    BreadcrumbModule,
    ButtonModule,
    CardModule,
    CollapseModule,
    GridModule,
    UtilitiesModule,
    SharedModule,
    ListGroupModule,
    IconModule,
    ListGroupModule,
    PlaceholderModule,
    ProgressModule,
    SpinnerModule,
    TabsModule,
    NavModule,
    TooltipModule,
    CarouselModule,
    FormModule,
    FormsModule,
    ReactiveFormsModule,
    DropdownModule,
    PaginationModule,
    NgxPaginationModule,
    PopoverModule,
    TableModule,
    DocsComponentsModule,
    ToastModule,
    NgSelectModule,
    ModalModule,
    Ng2SearchPipeModule,
    ReportModule
  ],
  providers: [DatePipe,DecimalPipe,NumberFormatPipe]
})
export class EntryModule { }
