import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseResourcesComponent } from './course-resources.component';

describe('CourseResourcesComponent', () => {
  let component: CourseResourcesComponent;
  let fixture: ComponentFixture<CourseResourcesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseResourcesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseResourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
