import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './shared/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ThemeModule } from './@theme/theme.module';
import { MsalGuard, MsalInterceptor, MsalModule, MsalRedirectComponent } from '@azure/msal-angular';
import { InteractionType, PublicClientApplication } from '@azure/msal-browser';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthModule } from './auth/auth.module';
import { DemoModule } from './pages/demo/demo.module';
import { AzureAdDemoService } from './@core/services/azure-ad-demo.service';
import { NbDatepickerModule, NbDialogModule, NbMenuModule, NbSidebarModule, NbToastrModule, NbWindowModule } from '@nebular/theme';

const isIE = window.navigator.userAgent.indexOf('MSIE ') > -1 || window.navigator.userAgent.indexOf('Trident/') > -1;


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,    
    BrowserAnimationsModule,
    AuthModule,
    DemoModule,
    MaterialModule,
    FlexLayoutModule,
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbDatepickerModule.forRoot(),
    NbDialogModule.forRoot(),
    NbWindowModule.forRoot(),
    NbToastrModule.forRoot(),
    ThemeModule.forRoot(),
    MsalModule.forRoot( new PublicClientApplication({
      auth: {
        clientId: 'bf42ebb2-ba3f-4dd5-8c0f-b714022ddd3f', // Application (client) ID from the app registration
        authority: 'https://login.microsoftonline.com/102d3653-c8a4-4711-a5a3-7dc0ab963878', // The Azure cloud instance and the app's sign-in audience (tenant ID, common, organizations, or consumers)
        redirectUri: 'http://localhost:4200'// This is your redirect URI
      },
      cache: {
        cacheLocation: 'localStorage',
        storeAuthStateInCookie: isIE, // Set to true for Internet Explorer 11
      }
    }),
    {
      interactionType: InteractionType.Redirect, // MSAL Guard Configuration
      authRequest: {
        scopes: ['user.read']
      }
    }, 
    {
      interactionType: InteractionType.Redirect, // MSAL Interceptor Configuration
      protectedResourceMap: new Map([ 
          ['https://graph.microsoft.com/v1.0/me', ['user.read']]//VE28Q~hnzu0JDfNzrbYFNN9q.UUFjBZ-SOYpmahK' = Id. de secreto 
      ])
    }
  )
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MsalInterceptor,
      multi: true
    },
    MsalGuard,
    AzureAdDemoService,
  ],
  bootstrap: [AppComponent, MsalRedirectComponent]
})
export class AppModule { }
