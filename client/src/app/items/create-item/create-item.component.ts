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
  public payments = [
    {value: '100%'},
    {value: '50%'},
    {value: '0%'}
  ];
  public medicineForms = [
    {value: 'aer.'},
    {value: 'caps.'},
    {value: 'crem.'},
    {value: 'emuls.'},
    {value: 'gel.'},
    {value: 'gran.'},
    {value: 'gtt.'},
    {value: 'pulv.'},
    {value: 'tab.'},
    {value: 'sir.'},
    {value: 'sol.'},
    {value: 'supp.'},
    {value: 'ung.'}
  ];
  private collectionId: string =  this.route.snapshot.paramMap.get('id');
  private currentItemId: string = this.route.snapshot.paramMap.get('itemId');
  public newItem: IItem = {
    _id: '',
    payment: '',
    isDrug: false,
    isPsycho: false,
    form: '',
    name: '',
    dose: '',
    amount: '',
    prescription: '',
    authorId: this.auth.getUserDetails()._id,
    authorName: this.auth.getUserDetails().name,
    collectionId: this.collectionId,
    collectionName: null,
    comments: null
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
    this.route.queryParamMap.subscribe(params => this.newItem.collectionName = params.get('patientName'));
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
