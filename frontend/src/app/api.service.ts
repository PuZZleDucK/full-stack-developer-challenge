import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  API_URL  =  'http://localhost:8000';

  constructor(private  httpClient:  HttpClient) { }

  getBooks(){
    return  this.httpClient.get(`${this.API_URL}/books?format=json`);

    let params = new HttpParams()
      .append('format', 'json');
    const url = `${this.API_URL}?${params.toString()}`;
    return this.httpClient.jsonp(url, 'callback')
  }

  getBook(id){
    return  this.httpClient.get(`${this.API_URL}/book/${id}/?format=json`);

    let params = new HttpParams()
      .append('format', 'json');
    const url = `${this.API_URL}?${params.toString()}`;
    return this.httpClient.jsonp(url, 'callback')
  }

  getAuthor(id){
    return  this.httpClient.get(`${this.API_URL}/author/${id}/?format=json`);

    let params = new HttpParams()
      .append('format', 'json');
    const url = `${this.API_URL}?${params.toString()}`;
    return this.httpClient.jsonp(url, 'callback')
  }

  createAuthor(author){
      return  this.httpClient.post(`${this.API_URL}/author/`, author);
  }

  createBook(book){
      return  this.httpClient.post(`${this.API_URL}/book/`, book);
  }

}
