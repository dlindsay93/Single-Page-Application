import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Blogs} from './blogs';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class BlogService {

  constructor(private http: HttpClient){}

  _url: string = "http://localhost:8080/blog";

  getBlog(): Observable<Blogs[]>{
    return this.http.get<Blogs[]>(this._url);
  }
}
