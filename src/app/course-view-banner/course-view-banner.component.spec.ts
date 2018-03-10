import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseViewBannerComponent } from './course-view-banner.component';

describe('CourseViewBannerComponent', () => {
  let component: CourseViewBannerComponent;
  let fixture: ComponentFixture<CourseViewBannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseViewBannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseViewBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
