import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClientJsonpModule } from  '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { AuthorDetailComponent } from './author-detail/author-detail.component';
import { AuthorCreateComponent } from './author-create/author-create.component';
import { BookCreateComponent } from './book-create/book-create.component';
import { AuthorListComponent } from './author-list/author-list.component';

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    BookDetailComponent,
    AuthorDetailComponent,
    AuthorCreateComponent,
    BookCreateComponent,
    AuthorListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientJsonpModule,
    ReactiveFormsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [ReactiveFormsModule]
})
export class AppModule { }
