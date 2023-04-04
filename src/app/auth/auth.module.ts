import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';

import { ChangePasswordComponent } from './change-password/change-password.component';
import { ConfirmEmailComponent } from './confirm-email/confirm-email.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { CoreModule } from '../@core/core.module';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ThemeModule } from '../@theme/theme.module';
import { MaterialModule } from '../shared/material.module';
import { MicrosoftGraphComponent } from './microsfot/microsoft-graph/microsoft-graph.component';
import { AuthComponent } from './auth.component';
import { NbLayoutModule } from '@nebular/theme';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    ChangePasswordComponent,
    ConfirmEmailComponent,
    LoginComponent,
    RegisterComponent,
    ResetPasswordComponent,
    MicrosoftGraphComponent,
    AuthComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    RouterModule,
    FormsModule,
    MaterialModule,
    NbLayoutModule,
    ThemeModule,
  ],
  exports: [
    LoginComponent,
    MicrosoftGraphComponent
  ]
})
export class AuthModule { }
