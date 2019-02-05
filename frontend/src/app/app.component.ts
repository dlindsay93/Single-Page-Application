import { Component, OnInit } from '@angular/core';
import { HttpClient }    from '@angular/common/http';
import { Observable } from 'rxjs';

 @Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  blogs =[{id:1, title:"Title1", content:"Content1"},
          {id:2, title:"Title2", content:"Content2"}]

  title = 'frontend';

  constructor(private http: HttpClient){

  }

  ngOnInit(){
    this.http.get("http://localhost:8080/blog").toPromise().then(Response = this.blogs);
  }
}
