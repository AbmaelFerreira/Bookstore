import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { NavComponent } from './components/shared/nav/nav.component';
import { BookstoryAppComponent } from './components/bookstory-app/bookstory-app.component';
import { FiltersComponent } from './components/bookstory-app/filters/filters.component';
import { ProductsListComponent } from './components/bookstory-app/products-list/product-list.component';
import { ProductItemComponent } from './components/bookstory-app/products-list/product-item/product-item.component';
import { BooksService } from './components/bookstory-app/products-list/product-list.component.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    BookstoryAppComponent,
    FiltersComponent,
    ProductsListComponent,
    ProductItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [BooksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
