import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { ITokenPayload } from '../models/token-payload.model';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  public credentials: ITokenPayload = {
    email: '',
    password: ''
  };
  public errorMessage = '';

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {}

  login() {
    this.auth.login(this.credentials).subscribe(() => {
      this.router.navigateByUrl('/main');
    }, (err) => {
      this.errorMessage = err.error.message;
    });
  }
}
