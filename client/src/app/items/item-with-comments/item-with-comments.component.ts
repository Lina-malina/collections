import { Component, OnInit } from '@angular/core';
import { ItemsManagementService } from '../services/items-management.service';
import { IItem } from '../models/item.model';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-item-with-comments',
  templateUrl: './item-with-comments.component.html',
  styleUrls: ['./item-with-comments.component.scss']
})
export class ItemWithCommentsComponent implements OnInit {
  public item: IItem;
  public itemId: string = this.route.snapshot.paramMap.get('itemId');
  public comment = '';
  public patientName: string;

  constructor(
    private itemsManagement: ItemsManagementService,
    private route: ActivatedRoute,
    private auth: AuthService) { }

  ngOnInit() {
    this.itemsManagement.getItemById(this.itemId).subscribe(item => this.item = item);
    this.route.queryParamMap.subscribe(params => {
      if (params.get('patientName')) {
        this.patientName = params.get('patientName');
      }
    })
  }
  public addComment() {
    this.item.comments.push(this.comment);
    this.itemsManagement.addComment(this.itemId, this.comment, this.auth.getUserDetails().name).subscribe(() =>
      this.itemsManagement.getItemById(this.itemId).subscribe(item => {
        this.item = item;
        this.comment = '';
      }));
  }
}
