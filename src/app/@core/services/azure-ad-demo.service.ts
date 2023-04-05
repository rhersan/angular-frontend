import { Injectable, OnInit } from '@angular/core';
import { MsalService } from '@azure/msal-angular';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AzureAdDemoService implements OnInit {

  isUserLoggedIn: Subject<boolean> = new Subject<boolean>();

  constructor() { }
  
  ngOnInit(): void {

  }
  
}
