import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from "@angular/common/http";

@Injectable()
export class CollectionService {
private col_API_URL="https://se3316-lab5-rhellowe.c9users.io:8081/api/";
private col_URL="collections/";
private dmca_URL="policies/dmca/";
private privacy_URL="policies/privacy/";
private rating_URL=this.col_URL+"rating/";
  constructor(private _http:HttpClient) { }
getCollections(){
    return this._http.get(this.col_URL)
}
getMyCollections(username:String){
  return this._http.get(this.col_URL+username);
}
createCollection(cUsername,cTitle,cDesc,cIsPublic,cImageList){
  let cRatingList=[];
  let cUserRates=[];
  let headers=new HttpHeaders();
  var req= this._http.post(this.col_URL,{
    username:cUsername,
    title:cTitle,
    desc:cDesc,
    isPublic:cIsPublic,
    ratingList:cRatingList,
    usersRated:cUserRates,
    imageList:cImageList
  },{ headers: headers}).subscribe(
    res => {
      console.log(res);
    },
    err => {
      console.log("Error occured");
    }
    );
    return req;
}
updateDMCA(pText:String){
  let headers=new HttpHeaders();
  var req=this._http.put(this.dmca_URL,{
    text:pText
  },{headers:headers}).subscribe(
    res=>{
      console.log(res);
    },
    err => {
      console.log(err)
    }
    );
    return req;
}
updatePrivacy(pText:String){
  let headers=new HttpHeaders();
  var req=this._http.put(this.privacy_URL,{
    text:pText
  },{headers:headers}).subscribe(
    res=>{
      console.log(res);
    },
    err => {
      console.log(err)
    }
    );
    return req;
}
updateRating(rate:Number,Id:String,cUser:String){
  let headers=new HttpHeaders();
  var req=this._http.put(this.rating_URL+Id,{
    rating:rate,
    user:cUser
  },{headers:headers}).subscribe(
    res=>{
      console.log(res);
    },
    err => {
      console.log(err)
    }
    );
    return req;
}
}
