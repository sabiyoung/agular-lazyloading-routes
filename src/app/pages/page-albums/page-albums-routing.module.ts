import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageAlbumsComponent } from './page-albums.component';

const routes: Routes = [
  {path:'', component:PageAlbumsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageAlbumsRoutingModule { }
