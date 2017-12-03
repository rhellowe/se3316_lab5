import { Component, OnInit } from '@angular/core';
import {ReportService} from "../report.service";
@Component({
  selector: 'app-dmca-policy',
  templateUrl: './dmca-policy.component.html',
  styleUrls: ['./dmca-policy.component.css']
})
export class DmcaPolicyComponent implements OnInit {

  constructor(public report:ReportService) { }

  ngOnInit() {
  }
}
