import { Component, OnInit } from '@angular/core';
import { IItem } from '../models/item.model';
import { ItemsManagementService } from '../services/items-management.service';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';
import { CollectionsManagementService } from '../services/collections-management.service';
import { ICollection } from '../models/collection.model';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.scss']
})
export class CollectionComponent implements OnInit {
  public items: IItem[] = [];
  public collectionId: string = this.route.snapshot.paramMap.get('id');
  public patient: ICollection;

  constructor(
    private itemsManagement: ItemsManagementService,
    private collManagement: CollectionsManagementService,
    private route: ActivatedRoute,
    public auth: AuthService
    ) { }

  ngOnInit() {
    this.itemsManagement.getItems(this.collectionId).subscribe(items => this.items = items);
    if (this.auth.isLoggedIn()) {
      this.collManagement.getCollectionById(this.collectionId).subscribe(coll => this.patient = coll);
    }
  }
  public hasAccess(): boolean {
    return this.auth.isLoggedIn() && (this.auth.getUserDetails().isAdmin || this.auth.getUserDetails()._id === this.patient.authorId);
  }
  public deleteItem(id) {
    this.itemsManagement.deleteItem(id).subscribe(() =>
      this.itemsManagement.getItems(this.collectionId).subscribe(items => this.items = items));
  }
}
