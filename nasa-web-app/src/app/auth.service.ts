import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import 'rxjs/add/operator/filter';
import * as auth0 from 'auth0-js';

@Injectable()
export class AuthService {

  auth0 = new auth0.WebAuth({
    clientID: '9IYhs_aeDY_4nHoJUJdaosy_ySvUU4ji',
    domain: 'ryanhellowell.auth0.com',
    responseType: 'token id_token',
    audience: 'https://ryanhellowell.auth0.com/userinfo',
    redirectUri: 'https://se3316-lab5-rhellowe.c9users.io/logged',      
    scope: 'openid'
  });

  constructor() {}

  public login(): void {
    this.auth0.authorize();
  }

}
