import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserPageRoutingModule } from './user-page-routing.module';
import { CollectionComponent } from './collection/collection.component';
import { SharedModule } from '../shared/shared.module';
import { CreateItemComponent } from './create-item/create-item.component';
import { UserPageComponent } from './user-page.component';
import { CreateCollectionComponent } from './create-collection/create-collection.component';


@NgModule({
  declarations: [
    UserPageComponent,
    CollectionComponent,
    CreateItemComponent,
    CreateCollectionComponent
  ],
  imports: [
    CommonModule,
    UserPageRoutingModule,
    SharedModule
  ]
})
export class UserPageModule { }
