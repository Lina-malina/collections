import { Component, OnInit } from '@angular/core';
import { IItem } from '../models/item.model';
import { ItemsManagementService } from '../services/items-management.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.scss']
})
export class CollectionComponent implements OnInit {
  public items: IItem[] = [];

  constructor(private itemsManagement: ItemsManagementService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.itemsManagement.getItems(this.route.snapshot.paramMap.get('id')).subscribe(items => this.items = items);
  }

}
