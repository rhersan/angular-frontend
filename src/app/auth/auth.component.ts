import { Component } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {

  isIframe = false;
  loginDisplay = false;


  ngOnInit() {
    this.isIframe = window !== window.parent && !window.opener;
  }

}
