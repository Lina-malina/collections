import { Component, OnInit } from '@angular/core';
import { ICollection } from 'src/app/items/models/collection.model';
import { CollectionsManagementService } from 'src/app/items/services/collections-management.service';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  public collections: ICollection[] = [];

  constructor(public auth: AuthService , private collManagement: CollectionsManagementService) { }

  public ngOnInit() {
    this.collManagement.getCollections().subscribe(coll => this.collections = coll);
  }
}
