import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BalanceSheetComponent } from './balance-sheet/balance-sheet.component';
import { TrialBalanceComponent } from './trial-balance/trial-balance.component';
import { LedgerSubLedgerVoucherReportComponent } from './ledger-sub-ledger-voucher-report/ledger-sub-ledger-voucher-report.component';
import { TrialBalanceAllComponent } from './trial-balance-all/trial-balance-all.component';
import { ProfitLossComponent } from './profit-loss/profit-loss.component';
import { ReceiptPaymentStatementComponent } from './receipt-payment-statement/receipt-payment-statement.component';
import { BalanceSheetNoteComponent } from './balance-sheet-note/balance-sheet-note.component';
import { NoteProfitLossComponent } from './note-profit-loss/note-profit-loss.component';
import { CashFlowsComponent } from './cash-flows/cash-flows.component';
import { CashBookComponent } from './cash-book/cash-book.component';
import { BankBookComponent } from './bank-book/bank-book.component';
import { CashBookDatewiseComponent } from './cash-book-datewise/cash-book-datewise.component';
import { BankBookDatewiseComponent } from './bank-book-datewise/bank-book-datewise.component';
import { VendorListComponent } from './vendor-list/vendor-list.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { SubLedgerDetailsComponent } from './sub-ledger-details/sub-ledger-details.component';
import { PartyListComponent } from './party-list/party-list.component';
import { DailyCashBankComponent } from './daily-cash-bank/daily-cash-bank.component';
import { ItemListComponent } from './item-list/item-list.component';
import { DealerListComponent } from './dealer-list/dealer-list.component';
import { AllLedgersComponent } from './all-ledgers/all-ledgers.component';
import { ItemDetailsListComponent } from './item-details-list/item-details-list.component';
import { InventoryItemsComponent } from './inventory-items/inventory-items.component';
import { LedgerSubLedgerVoucherReport2Component } from './ledger-sub-ledger-voucher-report2/ledger-sub-ledger-voucher-report2.component';
import { ProductWiseProfitComponent } from './product-wise-profit/product-wise-profit.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Report',
    },
    children: [
      { 
        path: 'balance-sheet',
        component: BalanceSheetComponent,
        data: {
          title: 'Balance Sheet'
        }
      },
      { 
        path: 'ledger-sub-ledger-voucher-report',
        component: LedgerSubLedgerVoucherReportComponent,
        data: {
          title: 'ledger-sub-ledger-voucher-report'
        }
      },
      { 
        path: 'ledger-sub-ledger-voucher-report2',
        component: LedgerSubLedgerVoucherReport2Component,
        data: {
          title: 'ledger-sub-ledger-voucher-report2'
        }
      },
      { 
        path: 'all-ledgers',
        component: AllLedgersComponent,
        data: {
          title: 'all-ledgers'
        }
      },
      { 
        path: 'trial-balance',
        component: TrialBalanceComponent,
        data: {
          title: 'Trial Balance'
        }
      },
      { 
        path: 'trial-balance-all',
        component: TrialBalanceAllComponent,
        data: {
          title: 'Trial Balance All'
        }
      },
      { 
        path: 'profit-loss',
        component: ProfitLossComponent,
        data: {
          title: 'Profit && Loss Statement'
        }
      },
      { 
        path: 'receipt-payment',
        component: ReceiptPaymentStatementComponent,
        data: {
          title: 'Receipt & Payment Statement'
        }
      },
      { 
        path: 'note-balance-sheet',
        component: BalanceSheetNoteComponent,
        data: {
          title: 'Note Balance Sheet'
        }
      },
      { 
        path: 'note-profit-loss',
        component: NoteProfitLossComponent,
        data: {
          title: 'Note Profit Loss'
        }
      },
      { 
        path: 'cash-flow',
        component: CashFlowsComponent,
        data: {
          title: 'Cash Flow Statement'
        }
      },
      { 
        path: 'bank-book',
        component: BankBookComponent,
        data: {
          title: 'Bank Book'
        }
      },
      { 
        path: 'cash-book',
        component: CashBookComponent,
        data: {
          title: 'Cash Book'
        }
      },
      { 
        path: 'cash-book-datewise',
        component: CashBookDatewiseComponent,
        data: {
          title: 'Cash Book Datewise'
        }
      },
      { 
        path: 'bank-book-datewise',
        component: BankBookDatewiseComponent,
        data: {
          title: 'Bank Book Datewise'
        }
      },
      { 
        path: 'vendor-list',
        component: VendorListComponent,
        data: {
          title: 'Vendor List'
        }
      },
      { 
        path: 'customer-list',
        component: CustomerListComponent,
        data: {
          title: 'Customer List'
        }
      },
      { 
        path: 'sub-ledger-details',
        component: SubLedgerDetailsComponent,
        data: {
          title: 'Sub-Ledger Details'
        }
      },
      { 
        path: 'party-list',
        component: PartyListComponent,
        data: {
          title: 'Party List'
        }
      },
      { 
        path: 'daily-cash-bank',
        component: DailyCashBankComponent,
        data: {
          title: 'Daily Bank And Cash Balance'
        }
      },
      // ItemListComponent
      { 
        path: 'item-list',
        component: ItemListComponent,
        data: {
          title: 'Item List'
        }
      },
      { 
        path: 'item-details-list',
        component: ItemDetailsListComponent,
        data: {
          title: 'Item Details List'
        }
      },
      { 
        path: 'inventory-items',
        component: InventoryItemsComponent,
        data: {
          title: 'Inventory Items'
        }
      },
      // DealerListComponent
      { 
        path: 'dealer-list',
        component: DealerListComponent,
        data: {
          title: 'Dealer List'
        }
      },
      { 
        path: 'product-wise-profit',
        component: ProductWiseProfitComponent,
        data: {
          title: 'Inventory Profit'
        }
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportRoutingModule { }
