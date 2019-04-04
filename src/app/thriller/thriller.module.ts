import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThrillerRoutingModule } from './thriller-routing.module';
import { ThrillerComponent } from './thriller.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [ThrillerComponent],
  imports: [
    CommonModule,
    ThrillerRoutingModule,
    SharedModule
  ]
})
export class ThrillerModule { }
