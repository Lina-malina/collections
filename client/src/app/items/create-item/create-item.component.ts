import { Component, OnInit } from '@angular/core';
import { IItem } from '../models/item.model';

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
    description: ''
  };

  constructor() { }

  ngOnInit() {
  }

}
