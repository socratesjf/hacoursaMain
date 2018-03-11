import { AngularFireAuth } from 'angularfire2/auth';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bg-navbar',
  templateUrl: './bg-navbar.component.html',
  styleUrls: ['./bg-navbar.component.css']
})
export class BgNavbarComponent  {

  constructor(private afAuth: AngularFireAuth) { }

  logout() {
    this.afAuth.auth.signOut();
  }
}
