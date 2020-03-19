import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CollectionComponent } from './collection/collection.component';
import { CollectionsComponent } from './collections.component';
import { CreateItemComponent } from './create-item/create-item.component';
import { CreateCollectionComponent } from './create-collection/create-collection.component';

const routes: Routes = [
  { path: 'collections/new', component: CreateCollectionComponent },
  { path: 'collections/edit/:id', component: CreateCollectionComponent },
  { path: 'collections/:id', component: CollectionComponent },
  { path: 'collections/:id/items/:id', component: CreateItemComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CollectionsRoutingModule { }
