import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  messageForm: FormGroup;
  submitted = false;
  success = false;

  constructor(private formBuilder: FormBuilder) {
    this.messageForm = this.formBuilder.group({
      name: ['',Validators.required],
      message:['',Validators.required]
    })
  }
onSubmit(){
  this.submitted = true;

  if (this.messageForm.invalid){
    return console.log( 'Invalid')
  }

  this.success = true;
}

  ngOnInit() {
  }

}
