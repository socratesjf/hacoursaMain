import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CoursePageService } from '../services/course-page/course-page.service';
import 'rxjs/add/operator/take';

@Component({
  selector: 'app-course-view',
  templateUrl: './course-view.component.html',
  styleUrls: ['./course-view.component.css']
})  

export class CourseViewComponent implements OnInit{

 courseObject;

  constructor(
    private courseService: CoursePageService, 
    private router: Router,
    private route: ActivatedRoute)
    {};

  ngOnInit() {
    let id =  this.route.snapshot.paramMap.get('id');
    this.courseService.getCourse(id).valueChanges().take(1).subscribe( course => {
      this.courseObject = course;
  })
    window.scrollTo(0, 0)
}

  displayer = false;
}
