import { Component, OnInit } from '@angular/core';
import { IItem } from '../models/item.model';
import { AuthService } from 'src/app/auth/services/auth.service';
import { ItemsManagementService } from '../services/items-management.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create-item',
  templateUrl: './create-item.component.html',
  styleUrls: ['./create-item.component.scss']
})
export class CreateItemComponent implements OnInit {
  private collectionId: string =  this.route.snapshot.paramMap.get('id');
  private currentItemId: string = this.route.snapshot.paramMap.get('itemId');
  public newItem: IItem = {
    name: '',
    isGeneric: true,
    form: '',
    description: '',
    authorId: this.auth.getUserDetails()._id,
    authorName: this.auth.getUserDetails().name,
    collectionId: this.collectionId,
    _id: ''
  };
  public isCreationMode = true;

  constructor(
    private auth: AuthService,
    private itemsManagement: ItemsManagementService,
    private route: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit() {
    if (this.currentItemId) {
      this.isCreationMode = false;
      this.itemsManagement.getItemById(this.currentItemId).subscribe(currentItem => this.newItem = currentItem);
    }
  }

  public addItem() {
    this.itemsManagement.addItem(this.newItem).subscribe(() =>
      this.router.navigateByUrl('/collections/' + this.collectionId));
  }
  public editItem() {
    this.itemsManagement.editItem(this.newItem._id, this.newItem).subscribe(() =>
      this.router.navigateByUrl('/collections/' + this.collectionId));
  }
}
