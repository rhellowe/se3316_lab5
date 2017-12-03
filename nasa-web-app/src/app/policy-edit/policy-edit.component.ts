import { Component, OnInit } from '@angular/core';
import {CollectionService} from "../collection.service";
@Component({
  selector: 'app-policy-edit',
  templateUrl: './policy-edit.component.html',
  styleUrls: ['./policy-edit.component.css']
})
export class PolicyEditComponent implements OnInit {

  constructor(private colService:CollectionService) { }

  ngOnInit() {
  }
submitDMCA(text:String){
  this.colService.updateDMCA(text);
}
submitPrivacy(text:String){
  this.colService.updatePrivacy(text);
}
}
