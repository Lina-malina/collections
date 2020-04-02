import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin/admin.component';
import { SharedModule } from '../shared/shared.module';
import { UserStatusPipe } from './admin/pipes/user-status.pipe';
import { AdminPipe } from './admin/pipes/admin.pipe';
import { NoAccessComponent } from './no-access/no-access.component';


@NgModule({
  declarations: [
    AdminComponent,
    UserStatusPipe,
    AdminPipe,
    NoAccessComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule
  ]
})
export class AdminModule { }
