import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

  userRating: string;
  showRating: string = "";

  // ratingClass(){
  //   switch(this.userRating){
  //       case 'TERRIBLE':
  //         return this.userRating = 'TERRIBLE';
  //       case 'VERY BAD':
  //         return this.userRating = 'VERY BAD';
  //       case 'BAD':
  //         return this.userRating = 'BAD';
  //       case 'PASSABLE':
  //         return this.userRating = 'PASSABLE';
  //       case 'GOOD':
  //         return this.userRating = 'GOOD';
  //       case 'AMAZING':
  //         return this.userRating = 'AMAZING';
  //
  //     }
  //   }
  updatedRating(rating: string){
    return console.log(rating);
    this.showRating = rating;
  }
}
