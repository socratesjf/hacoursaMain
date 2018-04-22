import { ActivatedRoute } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bg-navbar',
  templateUrl: './bg-navbar.component.html',
  styleUrls: ['./bg-navbar.component.css']
})
export class BgNavbarComponent implements OnInit  {

  constructor(
    private afAuth: AngularFireAuth,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
  }

  logout() {
    this.afAuth.auth.signOut();
  }

  
}
