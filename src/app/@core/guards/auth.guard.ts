import { Injectable, OnInit } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable, map, tap } from 'rxjs';
import { AzureAdDemoService } from '../services/azure-ad-demo.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad, OnInit {
  isUserLoggedIn:boolean = false;

  constructor(private azureAdDemoServices:AzureAdDemoService,
    private router: Router) {

  }
  ngOnInit(): void {
    console.log('OnInit');
    this.azureAdDemoServices.isUserLoggedIn.subscribe({
      next: (isUserLoggedIn)=> {
        this.isUserLoggedIn = isUserLoggedIn;
      },
      error: (err)=> {
        this.isUserLoggedIn = false;
      }
    });
  }

  


  canLoad(
    route: Route,
    segments:UrlSegment[]):  boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree>   {
      console.log('canLoad');
      return this.azureAdDemoServices.isUserLoggedIn
      .pipe(
        tap(isUserLoggedIn => {
          if( !isUserLoggedIn ){
            this.router.navigateByUrl('/auth/login');
          }
        })
      );
    
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot){  
      const resp = this.azureAdDemoServices.isUserLoggedIn
      .pipe(
        tap(isUserLoggedIn => {
          if( !isUserLoggedIn ){
            this.router.navigateByUrl('/auth/login');
          }
        })
      );
      return true;
  }

}
