import { Injectable } from '@angular/core';
import {  HttpClient } from '@angular/common/http';

@Injectable()

export  class PostService {
  url = 'https://jsonplaceholder.typicode.com/posts';
   constructor(private http: HttpClient) {}

   getPosts() {
     return this.http.get(this.url);
   }
}
