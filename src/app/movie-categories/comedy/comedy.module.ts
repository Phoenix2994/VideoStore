import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { ComedyRoutingModule } from './comedy-routing.module';
import { ComedyComponent } from './comedy.component';
import { SharedModule } from '../../shared/shared.module';



@NgModule({
  declarations: [ComedyComponent],
  imports: [
    CommonModule,
    ComedyRoutingModule,
    SharedModule
  ]
})
export class ComedyModule { }
