import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { ChangePasswordComponent } from './demo/change-password/change-password.component';
import { ActivateAccountComponent } from './demo/activate-account/activate-account.component';
import { PagesComponent } from './pages.component';
import { ThemeModule } from '../@theme/theme.module';
import { NbLayoutHeaderComponent, NbLayoutModule, NbMenuModule, NbSidebarModule } from '@nebular/theme';


@NgModule({
  declarations: [
    ChangePasswordComponent,
    ActivateAccountComponent,
    PagesComponent,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    NbLayoutModule,
    NbSidebarModule,
    NbMenuModule,
    ThemeModule,
  ]
})
export class PagesModule { }
