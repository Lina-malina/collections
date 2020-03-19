import { Component, OnInit } from '@angular/core';
import { IItem } from '../models/item.model';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-create-item',
  templateUrl: './create-item.component.html',
  styleUrls: ['./create-item.component.scss']
})
export class CreateItemComponent implements OnInit {

  public item: IItem = {
    name: '',
    isGeneric: true,
    form: '',
    description: '',
    authorId: this.auth.getUserDetails()._id
  };

  constructor(private auth: AuthService) { }

  ngOnInit() {
  }

}
