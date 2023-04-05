import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoRoutingModule } from './demo-routing.module';
import { DemoComponent } from './demo.component';
import { CoreModule } from '../../@core/core.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { MaterialModule } from '../../shared/material.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ThemeModule } from 'src/app/@theme/theme.module';
import { NbActionsModule, NbContextMenuModule, NbLayoutModule, NbSidebarModule } from '@nebular/theme';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    DemoComponent,
    DashboardComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,    
    FormsModule,
    DemoRoutingModule,
    CoreModule,
    MaterialModule,
    NbActionsModule, 
    NbContextMenuModule, 
    NbSidebarModule,
    NbLayoutModule,  
    ThemeModule,
    HttpClientModule
  ]
})
export class DemoModule { }
