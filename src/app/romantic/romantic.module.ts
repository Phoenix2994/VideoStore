import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RomanticRoutingModule } from './romantic-routing.module';
import { RomanticComponent } from './romantic.component';

@NgModule({
  declarations: [RomanticComponent],
  imports: [
    CommonModule,
    RomanticRoutingModule
  ]
})
export class RomanticModule { }
