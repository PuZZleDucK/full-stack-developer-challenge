import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

// This class handles all api requests to the backend and provides easy access
// for the rest of the app
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  API_URL  =  'http://localhost:8000';

  constructor(private  httpClient:  HttpClient) { }

  getBooks(){
    return  this.httpClient.get(`${this.API_URL}/books?format=json`);
  }

  getAuthors(){
    return  this.httpClient.get(`${this.API_URL}/authors?format=json`);
  }

  getBook(id){
    return  this.httpClient.get(`${this.API_URL}/book/${id}/?format=json`);
  }

  getAuthor(id){
    return  this.httpClient.get(`${this.API_URL}/author/${id}/?format=json`);
  }

  createAuthor(author){
      return  this.httpClient.post(`${this.API_URL}/author/`, author);
  }

  createBook(book){
      return  this.httpClient.post(`${this.API_URL}/book/`, book);
  }

}
