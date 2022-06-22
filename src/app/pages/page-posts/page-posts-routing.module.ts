import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagePostsComponent } from './page-posts.component';

const routes: Routes = [
  {path:'', component:PagePostsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagePostsRoutingModule { }
