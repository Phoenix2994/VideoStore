import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdventureRoutingModule } from './adventure-routing.module';
import { AdventureComponent } from './adventure.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [AdventureComponent],
  imports: [
    CommonModule,
    AdventureRoutingModule,
    SharedModule
  ]
})
export class AdventureModule { }
