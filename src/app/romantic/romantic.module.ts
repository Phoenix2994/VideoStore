import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RomanticRoutingModule } from './romantic-routing.module';
import { RomanticComponent } from './romantic.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [RomanticComponent],
  imports: [
    CommonModule,
    RomanticRoutingModule,
    SharedModule
  ]
})
export class RomanticModule { }
