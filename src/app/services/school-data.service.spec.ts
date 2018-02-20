import { TestBed, inject } from '@angular/core/testing';

import { SchoolDataService } from './school-data.service';

describe('SchoolDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SchoolDataService]
    });
  });

  it('should be created', inject([SchoolDataService], (service: SchoolDataService) => {
    expect(service).toBeTruthy();
  }));
});
