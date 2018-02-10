import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'course-catalog',
  templateUrl: './course-catalog.component.html',
  styleUrls: ['./course-catalog.component.css']
})
export class CourseCatalogComponent {

  constructor() { }

  courses = ['1','2','3','4'];

}
