import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Select2Module} from 'ng-select2-component';

import { SelectComponent } from './components/select/select.component'
import { MaterialModule } from '../shared/material.module';



@NgModule({
  declarations: [
  
    SelectComponent
  ],
  imports: [
    CommonModule,
    Select2Module,
    MaterialModule
  ],
  exports: [
    SelectComponent,
  ]
})
export class CoreModule { }
