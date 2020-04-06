import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public searchValue = '';

  constructor(public auth: AuthService, private router: Router) { }

  ngOnInit() {
  }

  public search() {
    if (this.searchValue) {
      this.router.navigateByUrl('search/' + this.searchValue);
      this.searchValue = '';
    }
  }
}
