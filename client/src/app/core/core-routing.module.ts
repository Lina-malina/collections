import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { AuthGuard } from '../auth/guards/auth.guard';
import { CollectionsComponent } from '../items/collections.component';


const routes: Routes = [
  { path: 'users', component: MainPageComponent, canActivate: [AuthGuard] },
  { path: 'collections', component: CollectionsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
