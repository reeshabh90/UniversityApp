import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SchoolDataService } from '../services/school-data.service';

@Component({
  selector: 'app-school-edit',
  templateUrl: './school-edit.component.html',
  styleUrls: ['./school-edit.component.css']
})
export class SchoolEditComponent implements OnInit {

  model = {};

  constructor(private schoolDataService: SchoolDataService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getSchoolDetail(this.route.snapshot.params['id']);
  }

  getSchoolDetail(id: any): any {
    this.schoolDataService.getSchoolDetailsById(id).subscribe(res => { this.model = res; });
  }

  onUpdate() {
    // console.log(JSON.stringify(this.model));
    this.schoolDataService.updateSchool(this.model['_id'], this.model).subscribe((res) => {
      const id = res['_id'];
      this.router.navigate(['/school-details', this.model['_id']]);
    }, (err) => {
      console.log(err);
    });
  }
}
