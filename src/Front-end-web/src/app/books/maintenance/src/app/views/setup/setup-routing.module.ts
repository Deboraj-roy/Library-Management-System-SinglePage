import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddHeadsComponent } from './add-heads/add-heads.component';

import { CoaComponent } from './coa/coa.component';
import { NoteDetailsEntryComponent } from './note-details-entry/note-details-entry.component';
import { NoteEntryComponent } from './note-entry/note-entry.component';
import { PurchaseOrderComponent } from './purchase-order/purchase-order.component';
import { NoteComponent } from './note/note.component';
import { OpeningBalanceComponent } from './opening-balance/opening-balance.component';
import { ViewHeadsComponent } from './view-heads/view-heads.component';
import { FiscalYearEntryComponent } from './fiscal-year-entry/fiscal-year-entry.component';

const routes: Routes = [
  
  {
    path: '',
    data: {
      title: 'Setup',
    },
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'add-heads',
      },
      {
        path: 'add-heads',
        component: AddHeadsComponent,
        data: {
          title: 'Add Heads'
        }
      },
      {
        path: 'coa',
        component: CoaComponent,
        data: {
          title: 'View COA'
        }
      },
      { 
        path: 'opening-balance',
        component: OpeningBalanceComponent,
        data: {
          title: 'Opening Balance'
        }
      },
      { 
        path: 'note-entry',
        component: NoteEntryComponent,
        data: {
          title: 'Note Entry'
        }
      },
      { 
        path: 'purchase-order',
        component: PurchaseOrderComponent,
        data: {
          title: 'Purchase Order'
        }
      },
      { 
        path: 'note-entry-details',
        component: NoteDetailsEntryComponent,
        data: {
          title: 'Note Details Entry'
        }
      },
      { 
        path: 'note',
        component: NoteComponent,
        data: {
          title: 'Note'
        }
      },
      { 
        path: 'view-heads',
        component: ViewHeadsComponent,
        data: {
          title: 'View Heads'
        }
      },
      { 
        path: 'fiscal-year',
        component: FiscalYearEntryComponent,
        data: {
          title: 'Fiscal Year Setup'
        }
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SetupRoutingModule {}

