import { Component, OnInit } from '@angular/core';
import { HttpClient }    from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import {Blogs} from './blogs';
import {BlogService} from './blog.service';

 @Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public blogs = [];

  constructor(private blogService: BlogService){}

  ngOnInit(){
    this.blogService.getBlog().subscribe(data => this.blogs = data);
    return console.log(this.blogs);
  }

}
