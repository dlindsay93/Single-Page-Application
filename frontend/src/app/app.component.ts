import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';
  userRating: string;
  displayRating: string = "This rating was";

  inputRating(){
    switch(this.userRating) {
        case 'BAD':
          return this.userRating === 'BAD';
          this.displayRating = "This rating was BAD";
      }
    }
}
