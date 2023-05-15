import { Component, OnInit } from '@angular/core';
import { BookService } from '../../services/book.service';
import { Observable } from 'rxjs';
import {Page, PageRequest} from '../../models/page';
import { Book } from '../../models/book';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss']
})
export class BooksListComponent implements OnInit {

  books$!: Observable<Page<Book>>;

  constructor(
    private bookService: BookService,
  ) {
  }

  ngOnInit(): void {
    const filter: Partial<PageRequest> = {
      pageIndex: 0,
      pageSize: 50,
      sort: "",
      direction: "",
    }

    // TODO this observable should emit books taking into consideration pagination, sorting and filtering options.
    this.books$ = this.bookService.getBooks(filter);
  }

}
