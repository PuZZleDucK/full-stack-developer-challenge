import { Component, OnInit } from '@angular/core';
import { ApiService } from  '../api.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-author-create',
  templateUrl: './author-create.component.html',
  styleUrls: ['./author-create.component.css']
})
export class AuthorCreateComponent implements OnInit {
  private router: Router
  author_first_name: FormControl
  author_last_name: FormControl
  myGroup: FormGroup

  constructor(private  apiService:  ApiService, private in_router: Router) {
    this.router = in_router;
  }

  ngOnInit() {
    // this.author_first_name = new FormControl('');
    // this.author_last_name = new FormControl('');
    this.myGroup = new FormGroup({
      author_first_name: new FormControl(),
      author_last_name: new FormControl()
    });
    console.log(this.myGroup.controls["author_last_name"].value);
  }

  createAuthor(){
    var  author  = {
        first_name: this.myGroup.controls["author_first_name"].value,
        last_name:  this.myGroup.controls["author_last_name"].value
    };
    this.apiService.createAuthor(author).subscribe((response) => {
      console.log(response);
      console.log(response["first_name"]);
      console.log(response["last_name"]);
      this.router.navigate(['/books']);
    });
    };

}
