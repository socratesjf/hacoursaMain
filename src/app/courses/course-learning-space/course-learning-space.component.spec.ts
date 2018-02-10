import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseLearningSpaceComponent } from './course-learning-space.component';

describe('CourseLearningSpaceComponent', () => {
  let component: CourseLearningSpaceComponent;
  let fixture: ComponentFixture<CourseLearningSpaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseLearningSpaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseLearningSpaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
