import { Component, OnInit } from '@angular/core';
import { ItemsManagementService } from 'src/app/items/services/items-management.service';
import { IItem } from 'src/app/items/models/item.model';
import { AuthService } from 'src/app/auth/services/auth.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  public items: IItem[] = [];

  constructor(private itemsManagement: ItemsManagementService, private router: ActivatedRoute) { }

  ngOnInit() {
    this.router.params.subscribe(routeParams => {
      this.itemsManagement.searchItems(routeParams.value).subscribe(items => this.items = items);
    });
  }
}
