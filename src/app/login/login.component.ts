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

loginWithGoogle() {
  this.auth.registerWithGoogle();
}

async submit(f) {
  await this.auth.registerWithEmail(f.value.email, f.value.password);
  let user;
  let observable = this.auth.user$;
  await observable.subscribe(x => {user = x});
  console.log(user);
  this.userService.save(user);
}


}


