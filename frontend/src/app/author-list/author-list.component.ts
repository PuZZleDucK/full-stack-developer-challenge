import { Component, OnInit } from '@angular/core';
import { ApiService } from  '../api.service';

@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.css']
})
export class AuthorListComponent implements OnInit {
  private  authors:  Array<object> = [];

  constructor(private apiService: ApiService) { }

  // Retrive all authors for the list
  ngOnInit() {
    this.getAuthors();
  }

  public  getAuthors(){
    this.apiService.getAuthors().subscribe((data: Array<object>) => {
      this.authors = data;
    });
  }

}
