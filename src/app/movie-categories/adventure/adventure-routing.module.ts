import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdventureComponent } from './adventure.component';
import { MovieDetailComponent } from '../../movie-detail/movie-detail.component';

const routes: Routes = [
  {
    path: '',
    component: AdventureComponent
  },
  {
    path: ':title',
    component: MovieDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdventureRoutingModule { }
