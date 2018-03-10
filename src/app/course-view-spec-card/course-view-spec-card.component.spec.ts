import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseViewSpecCardComponent } from './course-view-spec-card.component';

describe('CourseViewSpecCardComponent', () => {
  let component: CourseViewSpecCardComponent;
  let fixture: ComponentFixture<CourseViewSpecCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseViewSpecCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseViewSpecCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
