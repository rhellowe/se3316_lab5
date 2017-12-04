import { Component, OnInit } from '@angular/core';
import {FullResService} from "../full-res.service";

@Component({
  selector: 'app-full-res',
  templateUrl: './full-res.component.html',
  styleUrls: ['./full-res.component.css']
})
export class FullResComponent implements OnInit {
link:any;
  constructor(public fullService:FullResService) { }

  ngOnInit() {
    this.getLink();
    console.log(this.link);
  }
getLink(){
  console.log(this.fullService.getLink());
  this.link=this.fullService.getLink();
  
}
}
