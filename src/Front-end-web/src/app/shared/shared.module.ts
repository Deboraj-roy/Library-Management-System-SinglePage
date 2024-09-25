import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { PageHeaderComponent } from './components/page-header/page-header.component';
import { PageFooterComponent } from './components/page-footer/page-footer.component';



@NgModule({
  declarations: [
    PageHeaderComponent,
    PageFooterComponent
  ],
  imports: [ CommonModule, MaterialModule ],
  exports: [ CommonModule, MaterialModule, PageHeaderComponent ]
})
export class SharedModule { }
