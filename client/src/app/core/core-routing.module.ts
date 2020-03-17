import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { AuthGuard } from '../auth/guards/auth.guard';
import { CollectionComponent } from '../items/collection/collection.component';


const routes: Routes = [
  { path: 'users', component: MainPageComponent, canActivate: [AuthGuard] },
  { path: 'collection', component: CollectionComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
