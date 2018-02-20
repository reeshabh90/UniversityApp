import { Component, OnInit } from '@angular/core';
import { SchoolDataService } from '../services/school-data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-school-detail',
  templateUrl: './school-detail.component.html',
  styleUrls: ['./school-detail.component.css']
})
export class SchoolDetailComponent implements OnInit {
  school = {};
  constructor(private schoolDataService: SchoolDataService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.getSchoolDetail(this.route.snapshot.params['id']);
  }

  getSchoolDetail(id) {
    this.schoolDataService.getSchoolDetailsById(id).subscribe(res => {this.school = res; });
  }

  deleteBook(id) {
    this.schoolDataService.deleteSchool(id).subscribe(res => {this.router.navigate(['/schools']); });
  }


}
