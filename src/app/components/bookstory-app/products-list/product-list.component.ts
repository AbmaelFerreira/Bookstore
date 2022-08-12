import { Component, OnInit } from '@angular/core';
import { BooksService } from './product-list.component.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  livros: any;
  bookService: BooksService;

  constructor(bookService: BooksService) {
    this.bookService = bookService;
   }

  ngOnInit(): void {

    this.livros = this.bookService.getBok().subscribe((data =>{
      this.livros = data;
      console.log(this.livros);
    }))
  }

}
