import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageTodosComponent } from './page-todos.component';

const routes: Routes = [
  {path:'',component:PageTodosComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageTodosRoutingModule { }
