import { Component, OnInit } from '@angular/core';
import {CollectionService} from "../collection.service";
import {AuthService} from "../auth.service";
@Component({
  selector: 'app-mycollections',
  templateUrl: './mycollections.component.html',
  styleUrls: ['./mycollections.component.css']
})
export class MycollectionsComponent implements OnInit {
  email: string;
  collections:any[];
  profile: any;
clickedCollection:String[];
  constructor(private _collectionService:CollectionService, private auth:AuthService) {this.clickedCollection=[""]; this.collections=[]; }

  ngOnInit() {
this.getMyCollections();
  }
getMyCollections(){
  console.log(this.auth.getUsername());
  return this._collectionService.getMyCollections(this.auth.getUsername()).subscribe(
    data => this.handleSuccess(data),
    error => console.log(error),
    () => console.log("API Works")
    )
}
handleSuccess(data){
  this.collections=data;
  console.log(data);
}
showCollection(collection){
  if(this.clickedCollection.indexOf(collection._id)==-1){ //If the collection is not showing, add it to the showing array
  this.clickedCollection.push(collection._id);
  console.log(this.clickedCollection)
  }
  else{ //If it is, remove it and shift the showing array
    for(var i=this.clickedCollection.indexOf(collection._id);i<this.clickedCollection.length;i++){
      this.clickedCollection[i]=this.clickedCollection[i+1];
    }
    this.clickedCollection.pop();
    console.log(this.clickedCollection);
  }
}
titleClicked(id){ //Shows collection images based on if the collection is in the showing array
  console.log(id);
  if(this.clickedCollection.indexOf(id)==-1){
    return false;
  }
  else{return true;}
}


}
