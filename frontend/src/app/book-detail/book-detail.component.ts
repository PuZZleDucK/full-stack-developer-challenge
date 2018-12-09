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
  private sub: any;
  private  book:  object = [];

  constructor(private route: ActivatedRoute, private  apiService:  ApiService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
           this.id = +params['id'];
    });
    this.getBook();
  }

  public  getBook(){
      this.apiService.getBook(this.id).subscribe((data:  Array<object>) => {
          this.book  =  data;
          console.log(data);
      });
  }

}
