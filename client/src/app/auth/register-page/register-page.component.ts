import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { ITokenPayload } from '../models/token-payload.model';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent implements OnInit {
  credentials: ITokenPayload = {
    email: '',
    name: '',
    password: ''
  };

  constructor(private auth: AuthService, private router: Router) { }
  ngOnInit() {}

  register() {
    this.auth.register(this.credentials).subscribe(() => {
      this.router.navigateByUrl('/main');
    }, (err) => {
      console.error(err);
    });
  }
}
