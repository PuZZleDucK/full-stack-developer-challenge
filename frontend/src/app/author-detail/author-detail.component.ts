import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from  '../api.service';

@Component({
  selector: 'app-author-detail',
  templateUrl: './author-detail.component.html',
  styleUrls: ['./author-detail.component.css']
})
export class AuthorDetailComponent implements OnInit {
  id: number;
  first_name: string;
  last_name: string;
  private sub: any;
  private  author:  object = [];

  constructor(private route: ActivatedRoute, private  apiService:  ApiService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
           this.id = +params['id'];
    });
    this.getAuthor();
  }

  public getAuthor(){
      this.apiService.getAuthor(this.id).subscribe((data:  Array<object>) => {
          this.author =  data;
          this.first_name = data["first_name"]
          this.last_name = data["last_name"]
      });
  }


}
