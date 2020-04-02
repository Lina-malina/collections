import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CollectionComponent } from './collection/collection.component';
import { UserPageComponent } from './user-page.component';
import { CreateItemComponent } from './create-item/create-item.component';
import { CreateCollectionComponent } from './create-collection/create-collection.component';
import { ItemWithCommentsComponent } from './item-with-comments/item-with-comments.component';

const routes: Routes = [
  { path: 'collections/new', component: CreateCollectionComponent },
  { path: 'collections/edit/:id', component: CreateCollectionComponent },
  { path: 'collections/:id', component: CollectionComponent },
  { path: 'collections/:id/items/new', component: CreateItemComponent },
  { path: 'collections/:id/items/:itemId', component: CreateItemComponent },
  { path: 'collections/:id/items/:itemId/comments', component: ItemWithCommentsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserPageRoutingModule { }
