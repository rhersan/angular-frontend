import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from 'src/app/@core/services/auth.service';
import { AzureAdDemoService } from 'src/app/@core/services/azure-ad-demo.service';
import { tap } from 'rxjs';

const GRAPH_ENDPOINT = 'https://graph.microsoft.com/v1.0/me';

export interface IProfileType  {
  givenName?: string;
  email?: string;
  surname?: string;
  userPrincipalName?: string;
  id?: string;
};



@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
 public profile!: IProfileType;

 isUserLoggedIn: boolean = false;
 
  constructor(private http: HttpClient,
    private azureAdDemoServices:AzureAdDemoService,) { }

  ngOnInit() {
    this.getProfile();
  }

  getProfile() {    
    this.http.get<IProfileType>(GRAPH_ENDPOINT)
      .subscribe(
        {
          next: (profile: IProfileType) => {
            const { givenName, surname, email, userPrincipalName, id } = profile;
            this.profile = {
              givenName: givenName,
              surname: surname,
              email: email,
              userPrincipalName: userPrincipalName,
              id: id
            }
          },
          error: (errr) => {
            console.log('Err:', errr);
          }
        }
      );
  }
}
