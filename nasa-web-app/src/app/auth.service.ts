import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import 'rxjs/add/operator/filter';
import * as auth0 from 'auth0-js';


@Injectable()
export class AuthService {
  userProfile: any;
  username:String;
constructor(public router:Router){
this.handleAuthentication();
}
  public login(): void {
    this.auth0.authorize();
  }
  
    auth0 = new auth0.WebAuth({
    clientID: '9IYhs_aeDY_4nHoJUJdaosy_ySvUU4ji',
    domain: 'ryanhellowell.auth0.com',
    responseType: 'token id_token',
    audience: 'https://ryanhellowell.auth0.com/userinfo',
    redirectUri: 'https://se3316-lab5-rhellowe.c9users.io/logged',      
    scope: 'openid profile'
  });
  
  public handleAuthentication(): void { //Function that stores the information about the user from login into local storage in the browser
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        window.location.hash = '';
        this.setSession(authResult);
        this.username=authResult.idTokenPayload.name; //Discovers the username of who is logged in
        this.router.navigate(['/logged']);
      } else if (err) {
        this.router.navigate(['/logged']);
        console.log(err);
      }
    });
  }

  private setSession(authResult): void { //Function that handleAuthentication calls to store info in local storage
    // Set the time that the access token will expire at
    const expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('expires_at', expiresAt);
  }

  public logout(): void {
    // Remove tokens and expiry time from localStorage
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    this.username="";
    // Go back to the home route
    this.router.navigate(['/']);
  }

  public isAuthenticated(): boolean { //Validates whether the user accessing the site is logged into a valid account, or at all
    // Check whether the current time is past the
    // access token's expiry time
    const expiresAt = JSON.parse(localStorage.getItem('expires_at'));
    return new Date().getTime() < expiresAt;
  }

public getUsername(): String {
return this.username;
}

}
