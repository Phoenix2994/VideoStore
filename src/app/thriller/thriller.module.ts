import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThrillerRoutingModule } from './thriller-routing.module';
import { ThrillerComponent } from './thriller.component';

@NgModule({
  declarations: [ThrillerComponent],
  imports: [
    CommonModule,
    ThrillerRoutingModule
  ]
})
export class ThrillerModule { }
