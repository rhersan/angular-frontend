import { Component } from '@angular/core';
import { MsalBroadcastService, MsalService } from '@azure/msal-angular';
import { EventMessage, EventType, InteractionStatus } from '@azure/msal-browser';
import { filter } from 'rxjs';
import { AzureAdDemoService } from 'src/app/@core/services/azure-ad-demo.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  selectedCourse:boolean =true;
  items = [
    {
      title: 'Logout',
    },
  ];
 
  loginDisplay = false;

  constructor(private msalService: MsalService,
    private azureAdDemoServices:AzureAdDemoService,
    ) { }

  logout(){
    this.msalService.logout();
    
    this.azureAdDemoServices.isUserLoggedIn.subscribe({
      next: (resp) => {
        console.log(resp);
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

}
