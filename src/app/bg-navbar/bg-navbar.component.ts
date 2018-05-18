import { UserService } from '../services/user/user.service';
import { AngularFireDatabase } from 'angularfire2/database';
import { AuthService } from '../services/auth/auth.service';
import { ActivatedRoute } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import 'rxjs/add/operator/take'
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'bg-navbar',
  templateUrl: './bg-navbar.component.html',
  styleUrls: ['./bg-navbar.component.css']
})
export class BgNavbarComponent implements OnInit  {
  
  user;
  dbUser$;
 

    constructor(
    private afAuth: AngularFireAuth,
    private route: ActivatedRoute,
    private db: AngularFireDatabase,
    private auth: AuthService
  ) {
    firebase.auth().onAuthStateChanged( async (user) => {
      this.user = await user;
      db.object('/users/' + this.user.uid).valueChanges().subscribe( x => this.dbUser$ = x);
    } );

    
   } 

  ngOnInit() {
  }

  logout() {
    this.auth.signOut();
    this.dbUser$ = null;
  }

  
}
