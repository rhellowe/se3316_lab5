import { Component, OnInit } from '@angular/core';
import {AuthService} from "../auth.service";
@Component({
  selector: 'not-logged-page',
  templateUrl: './not-logged-page.component.html',
  styleUrls: ['./not-logged-page.component.css']
})
export class NotLoggedPageComponent implements OnInit {

  constructor(private authService:AuthService) { }
  loginClick():void{ //Allow the login page to be viewed, to either login or signup
    this.authService.login();
  }

  ngOnInit() {
  }

}
