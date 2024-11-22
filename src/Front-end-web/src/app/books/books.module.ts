import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksStoreComponent } from './books-store/books-store.component';
import { SharedModule } from '../shared/shared.module';
import { ReturnBookComponent } from './return-book/return-book.component';



@NgModule({
  declarations: [
    BooksStoreComponent,
    ReturnBookComponent
  ],
  imports: [
    SharedModule
  ]
})
export class BooksModule { }
