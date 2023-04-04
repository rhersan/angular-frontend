import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { MsalBroadcastService, MsalGuardConfiguration, MSAL_GUARD_CONFIG, MsalService } from '@azure/msal-angular';
import { EventMessage, EventType, InteractionStatus, RedirectRequest } from '@azure/msal-browser';
import { filter, Subject, take, takeUntil } from 'rxjs';
import { environment } from '../environments/environment';
import { AzureAdDemoService } from './@core/services/azure-ad-demo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'AUTH-VERIFIGAS';
  isIframe = false;
  loginDisplay = false;
  private readonly _destroying$ = new Subject<void>();

  constructor(@Inject(MSAL_GUARD_CONFIG) private msalGuardConfig: MsalGuardConfiguration,
  private broadcastService: MsalBroadcastService,
  private authService: MsalService,
  private azureAdDemoService: AzureAdDemoService) { }

  ngOnInit() {
    // if(!this.loginDisplay){

    /// }
    /*
    this.isIframe = window !== window.parent && !window.opener;

    this.broadcastService.inProgress$
    .pipe(
      filter((status: InteractionStatus) => status === InteractionStatus.None),
      takeUntil(this._destroying$)
    )
    .subscribe((resp) => {
      this.setLoginDisplay();
      this.azureAdDemoService.isUserLoggedIn.next(this.loginDisplay)
    })*/
  }

  /*login() {
    if (this.msalGuardConfig.authRequest){
      this.authService.loginRedirect({...this.msalGuardConfig.authRequest} as RedirectRequest);
    } else {
      this.authService.loginRedirect();
    }
  }*/

 /* logout() {
    this.authService.logoutRedirect({
      postLogoutRedirectUri: 'http://localhost:4200'
    });
    // this.authService.logoutPopup({
    //   mainWindowRedirectUri: "/"
    // });
  }*/
/*
  setLoginDisplay() {
    this.loginDisplay = this.authService.instance.getAllAccounts().length > 0;
  }
  ngOnDestroy(): void {
    this._destroying$.next(undefined);
    this._destroying$.complete();
  }*/


  /*
  title = 'verifigas-front';

  isUserLoggedIn:boolean = false;
  private readonly _destroy = new Subject<void>();
  constructor(@Inject(MSAL_GUARD_CONFIG) private msalGuardConfig: MsalGuardConfiguration,
  private msalBroadCastService: MsalBroadcastService,
  private authService: MsalService,
  private azureAdDemoService: AzureAdDemoService
  ) {
    
  }


  ngOnInit(): void {
    this.msalBroadCastService.inProgress$.pipe
    (
      filter(
        (interactionStatus: InteractionStatus) =>
        interactionStatus == InteractionStatus.None
      ),
      takeUntil(this._destroy)
    )
    .subscribe(
      {
        next: (resp) => {
          this.isUserLoggedIn= this.authService.instance.getAllAccounts().length > 0
          this.azureAdDemoService.isUserLoggedIn.next(this.isUserLoggedIn);
        }, error: (err) => {

        }
      })
  }

  ngOnDestroy(): void {
    this._destroy.next(undefined);
    this._destroy.complete();
  }
  login(){
    if(this.msalGuardConfig.authRequest){
      this.authService.loginRedirect({...this.msalGuardConfig.authRequest} as RedirectRequest)
    }else{
      this.authService.loginRedirect();
    }
  }

  logout(){
    this.authService.logoutRedirect({postLogoutRedirectUri:environment.postLogoutUrl});
  }*/



}
