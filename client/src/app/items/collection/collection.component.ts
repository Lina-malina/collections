import { Component, OnInit } from '@angular/core';
import { IItem } from '../models/item.model';
import { ItemsManagementService } from '../services/items-management.service';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.scss']
})
export class CollectionComponent implements OnInit {
  public items: IItem[] = [];

  constructor(private itemsManagement: ItemsManagementService) { }

  ngOnInit() {
    this.itemsManagement.getItems().subscribe(items => this.items = items);
  }

}
