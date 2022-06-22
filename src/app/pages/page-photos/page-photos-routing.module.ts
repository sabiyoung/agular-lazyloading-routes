import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagePhotosComponent } from './page-photos.component';

const routes: Routes = [
  {path:'',component:PagePhotosComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagePhotosRoutingModule { }
