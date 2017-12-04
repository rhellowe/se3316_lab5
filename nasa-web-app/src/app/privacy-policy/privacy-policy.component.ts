import { Component, OnInit } from '@angular/core';
import {CollectionService} from "../collection.service";

@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.css']
})
export class PrivacyPolicyComponent implements OnInit {

  constructor(public collectionService:CollectionService) { }
privacyPolicy:any;
  ngOnInit() {
    this.getPrivacyPolicy();
  }

  getPrivacyPolicy(){ //Function that calls the service to provide the privacy policy document
   return this.collectionService.getPrivacy().subscribe (
      data => this.privacyPolicy=data,
      err => console.log(err)
      )
  }
}
