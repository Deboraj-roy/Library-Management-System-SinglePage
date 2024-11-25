import { CommonModule, DatePipe, DecimalPipe } from '@angular/common';
import { NgModule, } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { ModalModule } from '@coreui/angular';


// CoreUI Modules
import {
  AccordionModule,
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
  NavModule,
  PaginationModule,
  PlaceholderModule,
  PopoverModule,
  ProgressModule,
  SharedModule,
  SpinnerModule,
  TableModule,
  TabsModule,
  TooltipModule,
  UtilitiesModule,
  ToastModule
} from '@coreui/angular';

import { IconModule, IconSetService } from '@coreui/icons-angular';

// utils
import { DocsComponentsModule } from '@docs-components/docs-components.module';



// Components Routing
import { SetupRoutingModule } from './setup-routing.module';
import { AddHeadsComponent } from './add-heads/add-heads.component';
import { ViewHeadsComponent } from './view-heads/view-heads.component';
import { AccSubHeadCategoryComponent } from './acc-sub-head-category/acc-sub-head-category.component';
import { MajorCategoryComponent } from './major-category/major-category.component';
import { MinorCategoryComponent } from './minor-category/minor-category.component';
import { MinorSubCategoryComponent } from './minor-sub-category/minor-sub-category.component';
import { CoaComponent } from './coa/coa.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { OpeningBalanceComponent } from './opening-balance/opening-balance.component';
import { NoteEntryComponent } from './note-entry/note-entry.component';
import { NoteDetailsEntryComponent } from './note-details-entry/note-details-entry.component';
import { NoteComponent } from './note/note.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { FiscalYearEntryComponent } from './fiscal-year-entry/fiscal-year-entry.component';
import { PurchaseOrderComponent } from './purchase-order/purchase-order.component';



@NgModule({
  imports: [
    CommonModule,
    SetupRoutingModule,
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
    NgxPaginationModule,
  ],
  declarations: [

    AddHeadsComponent,
      ViewHeadsComponent,
      AccSubHeadCategoryComponent,
      MajorCategoryComponent,
      MinorCategoryComponent,
      MinorSubCategoryComponent,
      CoaComponent,
      OpeningBalanceComponent,
      NoteEntryComponent,
      NoteDetailsEntryComponent,
      NoteComponent,
      FiscalYearEntryComponent,
      PurchaseOrderComponent,
  ],
  providers: [DatePipe,DecimalPipe]
})
export class SetupModule {}
