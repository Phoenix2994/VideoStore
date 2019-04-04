import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ThrillerComponent } from './thriller.component';
import { MovieDetailComponent } from '../movie-detail/movie-detail.component';

const routes: Routes = [{
  path: '',
  component: ThrillerComponent
},
{
  path: ':title',
  component: MovieDetailComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ThrillerRoutingModule { }
