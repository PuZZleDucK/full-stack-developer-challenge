import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthorListComponent } from './author-list/author-list.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { AuthorDetailComponent } from './author-detail/author-detail.component';
import { AuthorCreateComponent } from './author-create/author-create.component';
import { BookCreateComponent } from './book-create/book-create.component';

// Establish which components will handle requests to different paths
const routes: Routes = [
  { path:  '', redirectTo:  'books', pathMatch:  'full' },
  {
    path:  'books',
    component:  BookListComponent
  },
  {
    path:  'authors',
    component:  AuthorListComponent
  },
  {
    path:  'book/:id',
    component:  BookDetailComponent
  },
  {
    path:  'author/:id',
    component:  AuthorDetailComponent
  },
  {
    path:  'new-book',
    component:  BookCreateComponent
  },
  {
    path:  'new-author',
    component:  AuthorCreateComponent
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
