import { Component, OnInit } from '@angular/core';
import {ReportService} from "../report.service";
import {CollectionService} from "../collection.service";
@Component({
  selector: 'app-dmca-policy',
  templateUrl: './dmca-policy.component.html',
  styleUrls: ['./dmca-policy.component.css']
})
export class DmcaPolicyComponent implements OnInit {

  constructor(public report:ReportService, public collectionService:CollectionService) { }
dmcaPolicy:any;
  ngOnInit() {
    this.getDMCAPolicy(); //Calls the function that gets the dmca doc
  }
  
  getDMCAPolicy(){ //Gets the dmca policy document using the service that interacts with the api
   return this.collectionService.getDMCA().subscribe (
      data => this.dmcaPolicy=data,
      err => console.log(err)
      )
  }
}
