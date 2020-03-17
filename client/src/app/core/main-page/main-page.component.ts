import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/services/auth.service';
import { IUser } from '../../auth/models/user.model';
import { UsersManagementService } from '../../auth/services/users-management.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  public users: IUser[];

  constructor(public auth: AuthService, public usersManagement: UsersManagementService) { }

  public ngOnInit() {
    this.usersManagement.users().subscribe(users => this.users = users);
  }
}
