import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailUserComponent } from './details-user/detail-user/detail-user.component';
import { PageUsersComponent } from './page-users.component';

const routes: Routes = [
  {path:'', component:PageUsersComponent},
  {path:'details/:id', component:DetailUserComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageUsersRoutingModule { }
