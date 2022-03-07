import { createReducer, on } from '@ngrx/store';
import { Book } from 'src/app/book-list/books.model';
import { retrievedBookList } from '../actions/books.actions';

export const initialState: ReadonlyArray<Book> = [];

export const booksReducer = createReducer(
  initialState,
  on(retrievedBookList, (state, { books }) => books)
);
