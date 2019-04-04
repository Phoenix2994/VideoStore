import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path: 'dashboard/adventure',
    loadChildren: './adventure/adventure.module#AdventureModule'
  },
  {
    path: 'dashboard/comedy',
    loadChildren: './comedy/comedy.module#ComedyModule'
  },
  {
    path: 'dashboard/horror',
    loadChildren: './horror/horror.module#HorrorModule'
  },
  {
    path: 'dashboard/thriller',
    loadChildren: './thriller/thriller.module#ThrillerModule'
  },
  {
    path: 'dashboard/romantic',
    loadChildren: './romantic/romantic.module#RomanticModule'
  },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
