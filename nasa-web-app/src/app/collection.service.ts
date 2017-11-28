import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from "@angular/common/http";

@Injectable()
export class CollectionService {
private col_API_URL="https://se3316-lab5-rhellowe.c9users.io:8081/api/";
private col_URL=this.col_API_URL+"collections/";
  constructor(private _http:HttpClient) { }
getCollections(){
    return this._http.get(this.col_URL)
}
getMyCollections(username:String){
  return this._http.get(this.col_URL+username);
}
createCollection(cUsername,cTitle,cDesc,cIsPublic,cImageList){
  var req= this._http.post(this.col_URL,{
    username:cUsername,
    title:cTitle,
    desc:cDesc,
    isPublic:cIsPublic,
    imageList:cImageList
  },{ headers: new HttpHeaders().set("Access-Control-Allow-Origin","*")}).subscribe(
    res => {
      console.log(res);
    },
    err => {
      console.log("Error occured");
    }
    );
    return req;
}
}
