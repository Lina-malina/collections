import { Component, OnInit } from '@angular/core';
import { ItemsManagementService } from 'src/app/items/services/items-management.service';
import { IItem } from 'src/app/items/models/item.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  public items: IItem[] = [];

  constructor(private itemsManagement: ItemsManagementService) { }

  ngOnInit() {
    this.itemsManagement.getAllItems().subscribe(items => this.items = items);
  }

}
