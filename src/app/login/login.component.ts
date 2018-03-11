import { AngularFireAuth } from 'angularfire2/auth';
import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

  constructor(private afAuth: AngularFireAuth) { }



  loginWithGoogle() {
  this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
}

submit(f) {
  this.afAuth.auth.createUserWithEmailAndPassword(f.value.email,f.value.password).catch(function(error){
  })
}

}




