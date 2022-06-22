import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageUsersRoutingModule } from './page-users-routing.module';
import { PageUsersComponent } from './page-users.component';
import { DetailUserComponent } from './details-user/detail-user/detail-user.component';


@NgModule({
  declarations: [
    PageUsersComponent,
    DetailUserComponent
  ],
  imports: [
    CommonModule,
    PageUsersRoutingModule
  ]
})
export class PageUsersModule { }
