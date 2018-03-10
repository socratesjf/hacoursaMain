import { TestBed, inject } from '@angular/core/testing';

import { CoursePageService } from './course-page.service';

describe('CoursePageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CoursePageService]
    });
  });

  it('should be created', inject([CoursePageService], (service: CoursePageService) => {
    expect(service).toBeTruthy();
  }));
});
