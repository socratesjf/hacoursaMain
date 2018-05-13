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
}
