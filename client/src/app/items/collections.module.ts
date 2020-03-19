import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CollectionsRoutingModule } from './collections-routing.module';
import { CollectionComponent } from './collection/collection.component';
import { SharedModule } from '../shared/shared.module';
import { CreateItemComponent } from './create-item/create-item.component';
import { CollectionsComponent } from './collections.component';
import { CreateCollectionComponent } from './create-collection/create-collection.component';


@NgModule({
  declarations: [
    CollectionsComponent,
    CollectionComponent,
    CreateItemComponent,
    CreateCollectionComponent
  ],
  imports: [
    CommonModule,
    CollectionsRoutingModule,
    SharedModule
  ]
})
export class CollectionsModule { }
