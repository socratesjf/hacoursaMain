import { UserService } from './../user.service';
import { AuthService } from './../auth.service';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

  constructor(private auth: AuthService, 
              private userService: UserService) {}

firstName;
lastName;

  async loginWithGoogle() {
    await this.auth.registerWithGoogle();
    await firebase.auth().onAuthStateChanged( (user) => {
     this.logUserWithGoogle(user);
      console.log(user);
    });
  }

async submit(f) {
  await this.auth.registerWithEmail(f.value.email, f.value.password);
  this.firstName = f.value.firstName;
  this.lastName = f.value.lastName;
  firebase.auth().onAuthStateChanged((user) => {
    this.logUserWithEmailPassword(user);
    console.log(user);
  });
}

logUserWithEmailPassword(user) {
  if(user !== null) {
  let firstName = this.firstName;
  let lastName = this.lastName;
  this.userService.saveForEmailPassword(user, firstName, lastName);
  }
}

logUserWithGoogle(user) {
  if(user !== null) {
  this.userService.saveForGoogle(user);
  }
}

}


