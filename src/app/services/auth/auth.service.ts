import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable()
export class AuthService {
  user$: Observable<firebase.User>;

  constructor(public afAuth: AngularFireAuth) { 
    this.user$ = afAuth.authState;
   }

   registerWithGoogle() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
   }

   registerWithEmail(email, password) {
    this.afAuth.auth.createUserWithEmailAndPassword(email,password);
   }

   signinWithEmailPassword(email, password) {
     this.afAuth.auth.signInWithEmailAndPassword(email, password).then(function() {
       console.log('signin successful dude!');
     }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
    });
   }

  signOut() {
    this.afAuth.auth.signOut().then(function() {
      // Sign-out successful.
      console.log('signout worked');
    }).catch(function(error) {
      // An error happened.
    });
  }
}
