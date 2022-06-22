import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageCommentsRoutingModule } from './page-comments-routing.module';
import { PageCommentsComponent } from './page-comments.component';


@NgModule({
  declarations: [
    PageCommentsComponent
  ],
  imports: [
    CommonModule,
    PageCommentsRoutingModule
  ]
})
export class PageCommentsModule { }
