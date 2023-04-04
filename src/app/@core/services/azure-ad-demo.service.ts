import { Injectable } from '@angular/core';
import { MsalService } from '@azure/msal-angular';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AzureAdDemoService {

  isUserLoggedIn: Subject<boolean> = new Subject<boolean>();

  constructor(private authService: MsalService) { }

  logout() {
    console.log('logout');
    this.authService.logoutRedirect({
      postLogoutRedirectUri: 'http://localhost:4200/'
    });
  }

  
    // this.authService.logoutPopup({
    //   mainWindowRedirectUri: "/"
    // });
}
