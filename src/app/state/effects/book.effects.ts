import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { catchError, EMPTY, map, mergeMap } from 'rxjs';
import { GoogleBooksService } from 'src/app/book-list/books.service';
import { loadBooks, retrievedBookList } from '../actions/books.actions';

@Injectable()
export class BookEffects {
  loadMovies$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadBooks),
      mergeMap(() =>
        this.booksService.getBooks().pipe(
          map((books) => retrievedBookList({ books })),
          catchError(() => EMPTY)
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private booksService: GoogleBooksService
  ) {}
}
