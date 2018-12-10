import { Component, OnInit } from '@angular/core';
import { ApiService } from  '../api.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  private  books:  Array<object> = [];

  constructor(private apiService: ApiService) { }

  // Retrive all authors for the list
  ngOnInit() {
    this.getBooks();
  }

  public getBooks(){
    this.apiService.getBooks().subscribe((data: Array<object>) => {
      this.books = data;
      console.log(data);
    });
  }
}
