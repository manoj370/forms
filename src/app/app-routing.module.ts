import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import {FormComponent} from './form/form.component';
import { PostformComponent } from './postform/postform.component';
import { ViewComponent } from './view/view.component';
const routes: Routes = [
  { path: '', component:FormComponent },
  { path: 'dashboard', component:DashboardComponent },
  { path: 'view', component:ViewComponent },
  { path: 'post', component:PostformComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
