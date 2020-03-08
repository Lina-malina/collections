import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { IUser } from '../models/user.model';
import { SelectionModel } from '@angular/cdk/collections';
import { UsersManagementService } from '../services/users-management.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  public users: IUser[];
  public columnsToDisplay: string[] = ['select', 'id', 'name', 'email', 'createdDate', 'lastLoginDate', 'isActive'];
  public selection: SelectionModel<IUser>;

  constructor(public auth: AuthService, public usersManagement: UsersManagementService) { }

  public isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.users.length;
    return numSelected === numRows;
  }

  public masterToggle() {
    this.isAllSelected() ? this.selection.clear() : this.users.forEach(row => this.selection.select(row));
  }
  private reloadGrid() {
    this.usersManagement.users().subscribe(users => {
      this.selection.clear();
      this.users = users;
    });
  }
  public disableUsers() {
    const selectedUsersId = this.selection.selected.map(user => user._id);
    const currentUserId = selectedUsersId.find(id => id === this.auth.getUserDetails()._id);
    this.usersManagement.postSelectedId(selectedUsersId, 'disable').subscribe(() => {
      currentUserId ? this.auth.logout() :  this.reloadGrid();
    });
  }
  public enableUsers() {
    const selectedUsersId = this.selection.selected.map(user => user._id);
    this.usersManagement.postSelectedId(selectedUsersId, 'enable').subscribe(() => this.reloadGrid());
  }
  public deleteUsers() {
    const selectedUsersId = this.selection.selected.map(user => user._id);
    const currentUserId = selectedUsersId.find(id => id === this.auth.getUserDetails()._id);
    this.usersManagement.postSelectedId(selectedUsersId, 'delete').subscribe(() => {
      currentUserId ? this.auth.logout() :  this.reloadGrid();
    });
  }
  public ngOnInit() {
    this.usersManagement.users().subscribe(users => this.users = users);
    const initialSelection = [];
    const allowMultiSelect = true;
    this.selection = new SelectionModel<IUser>(allowMultiSelect, initialSelection);
  }
}
