import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageTodosRoutingModule } from './page-todos-routing.module';
import { PageTodosComponent } from './page-todos.component';


@NgModule({
  declarations: [
    PageTodosComponent
  ],
  imports: [
    CommonModule,
    PageTodosRoutingModule
  ]
})
export class PageTodosModule { }
