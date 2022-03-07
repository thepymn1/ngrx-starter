import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { booksReducer } from './state/reducers/books.reducer';
import { collectionReducer } from './state/reducers/collection.reducer';
import { BookListComponent } from './book-list/book-list.component';
import { BookCollectionComponent } from './book-collection/book-collection.component';

@NgModule({
  declarations: [AppComponent, BookListComponent, BookCollectionComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({ books: booksReducer, collection: collectionReducer }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
