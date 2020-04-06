import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { AuthGuard } from '../auth/guards/auth.guard';
import { UserPageComponent } from '../items/user-page.component';
import { SearchComponent } from './search/search.component';


const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'main', component: MainPageComponent },
  { path: 'user-page', component: UserPageComponent, canActivate: [AuthGuard] },
  { path: 'user-page/:userId', component: UserPageComponent, canActivate: [AuthGuard] },
  { path: 'search/:value', component: SearchComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
