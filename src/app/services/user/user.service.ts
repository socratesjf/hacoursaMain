import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable()
export class UserService {

  constructor(private db: AngularFireDatabase) { }

  saveForEmailPassword(user: firebase.User, firstName: string, lastName:string) {
      this.db.object('/users/' + user.uid).update({
        email: user.email,
        firstName: firstName,
        lastName: lastName
      });
    }

  saveForGoogle(user: firebase.User) {
      this.db.object('/users/' + user.uid).update({
        email: user.email,
        firstName: user.displayName.split(" ")[0],
        lastName: user.displayName.split(" ")[1],
      });
    }

  async getCurrentUser(uid) {
    return this.db.object('/users/' + uid);
  }
  }
  

