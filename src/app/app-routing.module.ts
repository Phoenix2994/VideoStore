import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: 'dashboard/adventure',
    loadChildren: './movie-categories/adventure/adventure.module#AdventureModule'
  },
  {
    path: 'dashboard/comedy',
    loadChildren: './movie-categories/comedy/comedy.module#ComedyModule'
  },
  {
    path: 'dashboard/horror',
    loadChildren: './movie-categories/horror/horror.module#HorrorModule'
  },
  {
    path: 'dashboard/thriller',
    loadChildren: './movie-categories/thriller/thriller.module#ThrillerModule'
  },
  {
    path: 'dashboard/romantic',
    loadChildren: './movie-categories/romantic/romantic.module#RomanticModule'
  },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
