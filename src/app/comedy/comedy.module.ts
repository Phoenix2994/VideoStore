import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComedyRoutingModule } from './comedy-routing.module';
import { ComedyComponent } from './comedy.component';

@NgModule({
  declarations: [ComedyComponent],
  imports: [
    CommonModule,
    ComedyRoutingModule
  ]
})
export class ComedyModule { }
