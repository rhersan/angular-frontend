import { Injectable } from '@angular/core';
import { AzureAdDemoService } from './azure-ad-demo.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isUserLoggedIn: boolean = false;
  constructor(private azureAdService: AzureAdDemoService,
    private router: Router) {

  }
  ngOnInit(): void {
   this.azureAdService.isUserLoggedIn.subscribe(
    {
      next: (resp:any) => {
        this.isUserLoggedIn= resp.isUserLoggedIn;
      }, 
      error: (err) => {
        console.log(err);
      }
    }
    );
  }
  
/*
  login( formData: ILoginForm ){
    const url= `${ base_url }/login`;
    return this.http.post(url, formData)
            .pipe(
              tap( (resp:any) => {
                this.guardarLocalStorage(resp.token, resp.menu);
              })
            );
  }*/

}
