import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksStoreComponent } from './books-store/books-store.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    BooksStoreComponent
  ],
  imports: [
    SharedModule
  ]
})
export class BooksModule { }
