import { Component, OnInit } from '@angular/core';
import { Router, ParamMap, ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { AuthService } from '../auth/services/auth.service';
import { ICollection } from './models/collection.model';
import { CollectionsManagementService } from './services/collections-management.service';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent implements OnInit {

  public collections: ICollection[] = [];

  constructor(
    public auth: AuthService,
    private collManagement: CollectionsManagementService,
    private route: ActivatedRoute
    ) { }

  ngOnInit() {
    if (this.route.snapshot.paramMap.get('userId')) {
      this.collManagement.getUserCollections(this.route.snapshot.paramMap.get('userId')).subscribe(coll => this.collections = coll);
    } else {
      this.collManagement.getUserCollections(this.auth.getUserDetails()._id).subscribe(coll => this.collections = coll);
    }
  }
  public deleteCollection(id) {
    this.collManagement.deleteCollection(id).subscribe(() =>
      this.collManagement.getCollections().subscribe(coll => this.collections = coll));
  }
}
