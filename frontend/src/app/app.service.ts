import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {Blogs} from './blogs';
import {Observable} from 'rxjs/Observable';


@Injectable
export class BlogService {

  constructor(private http:HttpClient){}

  getBlogs():Observable<Blogs[]>{
    return this.http.get<Blogs[]>("http://localhost:8080/blog");

    // [
    //   {"id":1, "title":"Title1", "content":"content1"},
    //   {"id":2, "title":"Title2", "content":"content2"},
    //   {"id":3, "title":"Title3", "content":"content3"},
    //   {"id":4, "title":"Title4", "content":"content4"},
    //   {"id":5, "title":"Title5", "content":"content5"}
    //
    // ]
  }

}
