import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';

@Injectable()
export class CoursePageService {

  constructor( private db: AngularFireDatabase) {}

  getCourse(courseID) {
    return this.db.object('/courses/' + courseID);
  }

}
