import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { MovieDetailComponent } from '../movie-detail/movie-detail.component';
import { MovieTabComponent } from '../movie-tab/movie-tab.component';

@NgModule({
  declarations: [MovieDetailComponent, MovieTabComponent],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports: [
    MovieTabComponent
  ]
})
export class SharedModule { }
