import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageAlbumsRoutingModule } from './page-albums-routing.module';
import { PageAlbumsComponent } from './page-albums.component';


@NgModule({
  declarations: [
    PageAlbumsComponent
  ],
  imports: [
    CommonModule,
    PageAlbumsRoutingModule
  ]
})
export class PageAlbumsModule { }
