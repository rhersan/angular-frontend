import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  
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
