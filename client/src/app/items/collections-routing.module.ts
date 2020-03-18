import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CollectionComponent } from './collection/collection.component';
import { CollectionsComponent } from './collections.component';
import { CreateItemComponent } from './create-item/create-item.component';

const routes: Routes = [
  { path: 'collections/:id', component: CollectionComponent },
  { path: 'collections/:id/:id', component: CreateItemComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CollectionsRoutingModule { }
