import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HorrorRoutingModule } from './horror-routing.module';
import { HorrorComponent } from './horror.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [HorrorComponent],
  imports: [
    CommonModule,
    HorrorRoutingModule,
    SharedModule
  ]
})
export class HorrorModule { }
