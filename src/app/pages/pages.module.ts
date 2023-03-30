import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { ChangePasswordComponent } from './demo/change-password/change-password.component';
import { ActivateAccountComponent } from './demo/activate-account/activate-account.component';
import { PagesComponent } from './pages.component';


@NgModule({
  declarations: [
    ChangePasswordComponent,
    ActivateAccountComponent,
    PagesComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
