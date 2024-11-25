import { NgModule } from '@angular/core';
import { CommonModule, DatePipe, DecimalPipe } from '@angular/common';

import { ReportRoutingModule } from './report-routing.module';
import {  AccordionModule, BadgeModule, BreadcrumbModule, ButtonModule, CardModule, CarouselModule, 
          CollapseModule, DropdownModule, FormModule, GridModule, ListGroupModule, ModalModule, NavModule, PaginationModule,
          PlaceholderModule, PopoverModule, ProgressModule, SharedModule, SpinnerModule, TableModule, TabsModule, ToastModule, TooltipModule, UtilitiesModule }
                                                                                                                                                   from '@coreui/angular';
import { IconModule } from '@coreui/icons-angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DocsComponentsModule } from '@docs-components/docs-components.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { BalanceSheetComponent } from './balance-sheet/balance-sheet.component';
import { TrialBalanceComponent } from './trial-balance/trial-balance.component';
import { ProfitLossComponent } from './profit-loss/profit-loss.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { ReceiptPaymentStatementComponent } from './receipt-payment-statement/receipt-payment-statement.component';
import { BalanceSheetNoteComponent } from './balance-sheet-note/balance-sheet-note.component';
import { NoteProfitLossComponent } from './note-profit-loss/note-profit-loss.component';
import { CashFlowsComponent } from './cash-flows/cash-flows.component';
import { CashBookComponent } from './cash-book/cash-book.component';
import { VendorListComponent } from './vendor-list/vendor-list.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { SubLedgerDetailsComponent } from './sub-ledger-details/sub-ledger-details.component';
import { PartyListComponent } from './party-list/party-list.component';
import { DailyCashBankComponent } from './daily-cash-bank/daily-cash-bank.component';
import { ItemListComponent } from './item-list/item-list.component';
import { DealerListComponent } from './dealer-list/dealer-list.component';
import { BankBookComponent } from './bank-book/bank-book.component';
import { CashBookDatewiseComponent } from './cash-book-datewise/cash-book-datewise.component';
import { BankBookDatewiseComponent } from './bank-book-datewise/bank-book-datewise.component';
import { TrialBalanceAllComponent } from './trial-balance-all/trial-balance-all.component';
import { LedgerSubLedgerVoucherReportComponent } from './ledger-sub-ledger-voucher-report/ledger-sub-ledger-voucher-report.component';
import { AllLedgersComponent } from './all-ledgers/all-ledgers.component';
import { ItemDetailsListComponent } from './item-details-list/item-details-list.component';
import { InventoryItemsComponent } from './inventory-items/inventory-items.component';
import { LedgerSubLedgerVoucherReport2Component } from './ledger-sub-ledger-voucher-report2/ledger-sub-ledger-voucher-report2.component';
import { ProductWiseProfitComponent } from './product-wise-profit/product-wise-profit.component';
import { SalesReturnVoucherListComponent } from './sales-return-voucher-list/sales-return-voucher-list.component';


@NgModule({
  declarations: [
    BalanceSheetComponent,
    TrialBalanceComponent,
    ProfitLossComponent,
    ReceiptPaymentStatementComponent,
    BalanceSheetNoteComponent,
    NoteProfitLossComponent,
    CashFlowsComponent,
    CashBookComponent,
    VendorListComponent,
    CustomerListComponent,
    SubLedgerDetailsComponent,
    PartyListComponent,
    DailyCashBankComponent,
    ItemListComponent,
    DealerListComponent,
    BankBookComponent,
    CashBookDatewiseComponent,
    BankBookDatewiseComponent,
    TrialBalanceAllComponent,
    LedgerSubLedgerVoucherReportComponent,
    AllLedgersComponent,
    ItemDetailsListComponent,
    InventoryItemsComponent,
    LedgerSubLedgerVoucherReport2Component,
    ProductWiseProfitComponent,
    SalesReturnVoucherListComponent
  ],
  imports: [
    CommonModule,
    ReportRoutingModule,
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
    PopoverModule,
    TableModule,
    DocsComponentsModule,
    ToastModule,
    NgSelectModule,
    ModalModule,
    Ng2SearchPipeModule,
    NgxPaginationModule
  ],
  exports: [
    AllLedgersComponent
  ],
  providers: [DatePipe,DecimalPipe]
})
export class ReportModule { }
