import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './pages/demo/profile/profile.component';
import { MsalGuard } from '@azure/msal-angular';
import { BrowserUtils } from '@azure/msal-browser';
import { DashboardComponent } from './pages/demo/dashboard/dashboard.component';


const routes: Routes = [
  {
    path: 'profile', component: ProfileComponent,
    canActivate: [MsalGuard]
  },
  /*{
    path: 'auth', 
    loadChildren: ()=> import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'pages',
    loadChildren: ()=> import('./pages/pages.module').then(m => m.PagesModule)
  },*/
  {
    path: '',
    component: DashboardComponent
  }
  //{ path: '', redirectTo: 'auth/login', pathMatch: 'full' }
];

const isIframe = window !== window.parent && !window.opener;

@NgModule({
  imports: [RouterModule.forRoot(routes,
  {
    initialNavigation: !BrowserUtils.isInIframe() && !BrowserUtils.isInPopup() ? 'enabledNonBlocking' : 'disabled' // Set to enabledBlocking to use Angular Universal
  },
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
