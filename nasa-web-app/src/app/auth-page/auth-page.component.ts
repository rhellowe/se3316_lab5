import { Component, OnInit } from '@angular/core';
import {ImageService} from "../image.service";
import {AuthService} from "../auth.service";
import {CollectionService} from "../collection.service";

@Component({
  selector: 'auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.css']
})
export class AuthPageComponent implements OnInit {
 images: any[];
 collection: String[];
count:number;
 imagesFound: boolean=false;
  constructor(private _imageService:ImageService, private auth:AuthService, private collectionService:CollectionService) {
    this.count=0;
    this.collection=[];
  }

searchImages(query:string){
  return this._imageService.getImage(query).subscribe(
    data => this.handleSuccess(data),
    error => this.handleError(error),
    () => console.log("Request Complete")
    )
}
  ngOnInit() {
    
  }
  
  handleSuccess(data){
    this.imagesFound=true;
    this.images=data.collection.items;
    console.log(data.collection.items);
  }
  
  handleError(error){
    console.log(error);
  }
  addImage(link){
    this.collection[this.count]=link.href;
    this.count++;
    console.log(this.collection);
  }
  confirmCollection(username:String,title:String,desc:String,_public:String,_imageList:String[]){
    var isPublic:Boolean;
    if(_public=="y"||_public=="Y"){
      isPublic=true;
    }
    else {isPublic=false;}
    this.collectionService.createCollection(username,title,desc,isPublic,_imageList);
  }
 

}