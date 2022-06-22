import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagePhotosRoutingModule } from './page-photos-routing.module';
import { PagePhotosComponent } from './page-photos.component';


@NgModule({
  declarations: [
    PagePhotosComponent
  ],
  imports: [
    CommonModule,
    PagePhotosRoutingModule
  ]
})
export class PagePhotosModule { }
