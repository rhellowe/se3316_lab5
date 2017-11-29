import { Component, OnInit } from '@angular/core';
import {AuthService} from "../auth.service";

@Component({
  selector: 'dmca-footer',
  templateUrl: './dmca-footer.component.html',
  styleUrls: ['./dmca-footer.component.css']
})
export class DmcaFooterComponent implements OnInit {

  constructor(public auth:AuthService) { }

  ngOnInit() {
  }

}
