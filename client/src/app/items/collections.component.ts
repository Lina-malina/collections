import { Component, OnInit } from '@angular/core';
import { Router, ParamMap, ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { AuthService } from '../auth/services/auth.service';
import { ICollection } from './models/collection.model';
import { CollectionsManagementService } from './services/collections-management.service';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-collections',
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.scss']
})
export class CollectionsComponent implements OnInit {

  public collections: ICollection[] = [];

  constructor(
    public auth: AuthService,
    private collManagement: CollectionsManagementService,
    private route: ActivatedRoute
    ) { }

  ngOnInit() {
    this.collManagement.getCollections().subscribe(coll => this.collections = coll);
  }
  public deleteCollection(id) {
    this.collManagement.deleteCollection(id).subscribe(() =>
      this.collManagement.getCollections().subscribe(coll => this.collections = coll));
  }
}
