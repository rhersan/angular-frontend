import { Component, Inject, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { MSAL_GUARD_CONFIG, MsalBroadcastService, MsalGuardConfiguration, MsalService } from '@azure/msal-angular';
import { InteractionStatus, RedirectRequest } from '@azure/msal-browser';
import { Subject, filter, takeUntil } from 'rxjs';
import { AzureAdDemoService } from 'src/app/@core/services/azure-ad-demo.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  //email = new FormControl('', [Validators.required, Validators.email]);
  isIframe = false;
  loginDisplay = false;
  private readonly _destroying$ = new Subject<void>();
  
  hide = true;

  loginForm!: FormGroup;

  constructor(@Inject(MSAL_GUARD_CONFIG) private msalGuardConfig: MsalGuardConfiguration,
    private broadcastService: MsalBroadcastService,
    private maslBroadcastService: MsalService,
    private azureAdDemoService: AzureAdDemoService,
    private fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone
  ) {

  }

  getErrorMessage() {
    if (this.loginForm.controls['email'].hasError('required')) {
      return 'Ingrese un correo válido';
    }

    return this.loginForm.controls['email'].hasError('email') ? 'Correo incorrecto' : '';
  }
  
  ngOnInit() {

    

    this.isIframe = window !== window.parent && !window.opener;

    this.broadcastService.inProgress$
    .pipe(
      filter((status: InteractionStatus) => status === InteractionStatus.None),
      takeUntil(this._destroying$)
    )
    .subscribe((resp) => {
      this.setLoginDisplay();      
      this.azureAdDemoService.isUserLoggedIn.next(this.loginDisplay);
      
    });

    this.loginForm = this.fb.group({
      email: ['r@dev.com', [Validators.required, Validators.email]],
      password: ['123456', [Validators.required, Validators.minLength(6)]]
    });
  }

  /// Login con Base de datos
  loginDB(){
    const {email, password } = this.loginForm.value;
    console.log(email, password); 
  }


  // Login
  loginMicrosoft() {
    this.maslBroadcastService.loginPopup()
      .subscribe({
        next: (result) => {
          console.log(result);
          this.setLoginDisplay();
          this.azureAdDemoService.isUserLoggedIn.next(this.loginDisplay);
        },
        error: (error) => console.log(error)
      });
    /*
    if (this.msalGuardConfig.authRequest){      
      this.maslBroadcastService.loginRedirect({...this.msalGuardConfig.authRequest} as RedirectRequest);
    } else {
      this.maslBroadcastService.loginRedirect();
    }*/
  }


  setLoginDisplay() {
    this.loginDisplay = this.maslBroadcastService.instance.getAllAccounts().length > 0;
  }
  ngOnDestroy(): void {
    this._destroying$.next(undefined);
    this._destroying$.complete();
  }
  
}
