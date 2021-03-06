import { Component, OnInit } from '@angular/core';
import {CollectionService} from "../collection.service";
import {AuthService} from "../auth.service";
import {ReportService} from "../report.service";
import {FullResService} from "../full-res.service";
@Component({
  selector: 'app-view-collections',
  templateUrl: './view-collections.component.html',
  styleUrls: ['./view-collections.component.css']
})
export class ViewCollectionsComponent implements OnInit {
collections:any[];
clickedCollection:String[];
  constructor(private _collectionService:CollectionService, public auth:AuthService, public report:ReportService,public fullService:FullResService) {this.clickedCollection=[""]; this.collections=[]; }

  ngOnInit() {
    this.getPublicCollections();
  }
getPublicCollections(){
  return this._collectionService.getCollections().subscribe(
    data => this.handleSuccess(data),
    error => console.log(error),
    () => console.log("API Works")
    )
}
handleSuccess(data){
  /* for(var i=0;i<data.length;i++){
    if(data[i].isPublic==true){
      this.collections.push(data[i]);
    }
  }*/
  this.collections=data;
  console.log(data);
}
showCollection(collection){
  if(this.clickedCollection.indexOf(collection._id)==-1){
  this.clickedCollection.push(collection._id);
  console.log(this.clickedCollection)
  }
  else{
    for(var i=this.clickedCollection.indexOf(collection._id);i<this.clickedCollection.length;i++){
      this.clickedCollection[i]=this.clickedCollection[i+1];
    }
    this.clickedCollection.pop();
    console.log(this.clickedCollection);
  }
}
titleClicked(id){
  console.log(id);
  if(this.clickedCollection.indexOf(id)==-1){
    return false;
  }
  else{return true;}
}
addRating(rating:Number,Id:String){
  this._collectionService.updateRating(rating,Id,this.auth.getUsername());
}
Report(id:String){
  this.report.addReportedCollection(id);
}
isDisabled(id:String){
  if(this.report.disabledCollections.indexOf(id)==-1){
    return false;
  }
  return true;
}

fullClick(link:String){
  this.fullService.putLink(link); //Sends the image link to be shown in full res to the full res service
}
}
