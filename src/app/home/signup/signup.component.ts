import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  name = new FormControl('');
  constructor() { }

  ngOnInit() {
  }

  updateName() {
  this.name.setValue('Bitch');
  }
}
