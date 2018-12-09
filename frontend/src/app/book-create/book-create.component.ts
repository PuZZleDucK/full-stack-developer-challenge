import { Component, OnInit } from '@angular/core';
import { ApiService } from  '../api.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.css']
})
export class BookCreateComponent implements OnInit {
  private router: Router
  book_name: FormControl
  book_isbn: FormControl
  book_author: FormControl
  bookGroup: FormGroup

  constructor(private  apiService:  ApiService, private in_router: Router) {
    this.router = in_router;
}

  ngOnInit() {
    this.bookGroup = new FormGroup({
      book_name: new FormControl(),
      book_isbn: new FormControl(),
      book_author: new FormControl()
    });
  }

  createBook(){
    var book = {
        name: this.bookGroup.controls["book_name"].value,
        isbn:  this.bookGroup.controls["book_isbn"].value,
        author:  this.bookGroup.controls["book_author"].value
    };
    this.apiService.createBook(book).subscribe((response) => {
      console.log(response);
      this.router.navigate(['/books']);
    });
    };

}
