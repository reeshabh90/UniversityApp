import { Component, OnInit } from '@angular/core';
import { SchoolDetails } from '../school-details';
import { SchoolDataService } from '../services/school-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-school-form',
  templateUrl: './school-form.component.html',
  styleUrls: ['./school-form.component.css']
})
export class SchoolFormComponent implements OnInit {
  model = new SchoolDetails('ABC School', 'http://abc.com', 'both', 'in school', 'matew', 0, 'abc@gm.com', 'US');
  constructor(private schoolDataService: SchoolDataService, private router: Router) {

  }

  ngOnInit() {
  }

  onSubmit() {
    // console.log(JSON.stringify(this.model));
    this.schoolDataService.addSchool(this.model).subscribe((res) => {
      const id = res['_id'];
      this.router.navigate(['/school-details', id]);
    }, (err) => {
      console.log(err);
    });
  }
  get currentBook() { return JSON.stringify(this.model); }
}
