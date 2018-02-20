import { Component, OnInit } from '@angular/core';
import { SchoolDataService } from '../services/school-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-school',
  templateUrl: './school.component.html',
  styleUrls: ['./school.component.css']
})
export class SchoolComponent implements OnInit {
  schools;
  constructor(private schoolDataService: SchoolDataService, private router: Router) { }

  ngOnInit() {
    this.schoolDataService.getSchool().subscribe((res) => {
        this.schools = res;
      });
  }
  showDetails(school) {
    console.log(school);
    this.router.navigate(['/school-details', school['_id']]);
  }

}
