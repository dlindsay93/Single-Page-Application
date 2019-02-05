import { Component, OnInit } from '@angular/core';
import { HttpClient }    from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import {Blogs} from './blogs';
import {BlogService} from './app.servise';

 @Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public blogs = [];

  constructor(private blogService: BlogService){}

  ngOnInit(){
    this.blogService.getBlogs().subscribe(data => this.blogs = data);
  }

}
