import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from  '../api.service';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {
  id: number;
  author_id: number;
  author_first_name: string;
  author_last_name: string;
  private sub: any;
  private  book:  object = [];

  constructor(private route: ActivatedRoute, private  apiService:  ApiService) { }

  // Extract id paramater and retrive relevant Book data
  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
    });
    this.getBook();
  }

  // Extract relevant Book and Author data for view
  public getBook(){
    this.apiService.getBook(this.id).subscribe((data:  Array<object>) => {
      this.book =  data;
      this.author_id = data["author"]
      this.apiService.getAuthor(this.author_id).subscribe((author_data:  Array<object>) => {
        const author = author_data
        this.author_first_name = author["first_name"]
        this.author_last_name = author["last_name"]
      });
    });
  }

}
