import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagePostsRoutingModule } from './page-posts-routing.module';
import { PagePostsComponent } from './page-posts.component';


@NgModule({
  declarations: [
    PagePostsComponent
  ],
  imports: [
    CommonModule,
    PagePostsRoutingModule
  ]
})
export class PagePostsModule { }
