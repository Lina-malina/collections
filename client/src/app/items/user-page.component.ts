import { Component, OnInit } from '@angular/core';
import { Router, ParamMap, ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { AuthService } from '../auth/services/auth.service';
import { ICollection } from './models/collection.model';
import { CollectionsManagementService } from './services/collections-management.service';
import { UsersManagementService } from '../auth/services/users-management.service';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent implements OnInit {

  public collections: ICollection[] = [];
  public userId: string = this.route.snapshot.paramMap.get('userId');
  public userName: string;

  constructor(
    public auth: AuthService,
    private collManagement: CollectionsManagementService,
    private usersManagement: UsersManagementService,
    private route: ActivatedRoute
    ) { }

  ngOnInit() {
    if (this.userId) {
      this.collManagement.getUserCollections(this.userId).subscribe(coll => this.collections = coll);
      this.usersManagement.getUserById(this.userId).subscribe(user => this.userName = user.name);
    } else {
      this.collManagement.getUserCollections(this.auth.getUserDetails()._id).subscribe(coll => this.collections = coll);
      this.userName = this.auth.getUserDetails().name;
    }
  }
  public deleteCollection(id) {
    this.collManagement.deleteCollection(id).subscribe(() => {
      if (this.userId) {
        this.collManagement.getUserCollections(this.userId).subscribe(coll => this.collections = coll);
      } else {
        this.collManagement.getUserCollections(this.auth.getUserDetails()._id).subscribe(coll => this.collections = coll);
      }
    });
  }
}
