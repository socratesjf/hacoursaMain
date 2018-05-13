import { AuthService } from './../services/auth/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private auth: AuthService
  ) { }

  ngOnInit() {
  }

  submit(f) {
    this.auth.signinWithEmailPassword(f.value.email, f.value.password);
  }

  loginWithGoogle() {
    this.auth.registerWithGoogle();
  }


}
