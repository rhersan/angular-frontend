import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MiscellaneousRoutingModule } from './miscellaneous-routing.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { MiscellaneousComponent } from './miscellaneous.component';


@NgModule({
  declarations: [
    MiscellaneousComponent,
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    MiscellaneousRoutingModule
  ]
})
export class MiscellaneousModule { }
