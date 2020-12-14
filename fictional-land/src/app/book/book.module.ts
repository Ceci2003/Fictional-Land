import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookComponent } from './book/book.component';
import { BookCreateComponent } from './book-create/book-create.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookOpenComponent } from './book-open/book-open.component';



@NgModule({
  declarations: [BookComponent, BookCreateComponent, BookListComponent, BookOpenComponent],
  imports: [
    CommonModule
  ]
})
export class BookModule { }
