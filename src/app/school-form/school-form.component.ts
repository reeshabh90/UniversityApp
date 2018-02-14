import { Component, OnInit } from '@angular/core';
import { SchoolDetails } from '../school-details';

@Component({
  selector: 'app-school-form',
  templateUrl: './school-form.component.html',
  styleUrls: ['./school-form.component.css']
})
export class SchoolFormComponent implements OnInit {
  model = new SchoolDetails('', 'http://', '', '', '', 0, '');
  constructor() {

   }

  ngOnInit() {
  }

  onSubmit() {
  }
  get currentBook() { return JSON.stringify(this.model); }
}
