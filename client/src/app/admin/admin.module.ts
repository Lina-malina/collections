import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin/admin.component';
import { SharedModule } from '../shared/shared.module';
import { UserStatusPipe } from './admin/pipes/user-status.pipe';
import { AdminPipe } from './admin/pipes/admin.pipe';


@NgModule({
  declarations: [
    AdminComponent,
    UserStatusPipe,
    AdminPipe
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule
  ]
})
export class AdminModule { }
