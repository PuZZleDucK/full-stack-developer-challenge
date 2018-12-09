import { Component, OnInit } from '@angular/core';
import { ApiService } from  '../api.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-author-create',
  templateUrl: './author-create.component.html',
  styleUrls: ['./author-create.component.css']
})
export class AuthorCreateComponent implements OnInit {
  private router: Router
  author_first_name: FormControl
  author_last_name: FormControl
  authorGroup: FormGroup

  constructor(private  apiService:  ApiService, private in_router: Router) {
    this.router = in_router;
  }

  // Create form controlls for Author input
  ngOnInit() {
    this.authorGroup = new FormGroup({
      author_first_name: new FormControl(),
      author_last_name: new FormControl()
    });
  }

  // Access form group to retrive latest values
  createAuthor(){
    var  author  = {
        first_name: this.authorGroup.controls["author_first_name"].value,
        last_name:  this.authorGroup.controls["author_last_name"].value
    };
    this.apiService.createAuthor(author).subscribe((response) => {
      // Route to author list after success
      this.router.navigate(['/authors']);
    });
    };

}
