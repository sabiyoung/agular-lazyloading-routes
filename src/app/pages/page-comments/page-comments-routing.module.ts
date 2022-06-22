import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageCommentsComponent } from './page-comments.component';

const routes: Routes = [
  {path:'', component:PageCommentsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageCommentsRoutingModule { }
