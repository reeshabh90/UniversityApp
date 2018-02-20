import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class SchoolDataService {

  constructor(private http: Http) { }

  getSchool() {
    return this.http.get('/mongose/getSchools').map(this.extractData);
  }

  getSchoolDetailsById(id) {
    return this.http.get('/mongose/getDetails' + id).map(this.extractData);
  }

  addSchool(newSchool) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('/mongose/addSchool', JSON.stringify(newSchool), { headers: headers })
      .map(this.extractData);
  }

  updateSchool(id, school) {
    return this.http.put('/mongose/updateSchool' + id, school).map(this.extractData);
  }

  deleteSchool(id) {
    return this.http.delete('/mongose/deleteSchool' + id).map(this.extractData);
  }

  extractData(res: Response) {
    const body = res.json();
    console.log(body);
    return body || {};
  }

  handleError(error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
