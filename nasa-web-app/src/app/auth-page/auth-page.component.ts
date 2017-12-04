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

searchImages(query:string){ //Function to get images from nasa api 
  return this._imageService.getImage(query).subscribe(
    data => this.handleSuccess(data),
    error => this.handleError(error),
    () => console.log("Request Complete")
    )
}
  ngOnInit() {
    
  }
  
  handleSuccess(data){ //Sets image list to the returned list of images from the nasa api
    this.imagesFound=true;
    this.images=data.collection.items;
    console.log(data.collection.items);
  }
  
  handleError(error){ //Log an error from the search function
    console.log(error);
  }
  addImage(link){ //Adds an image to the collection array 
    this.collection[this.count]=link.href;
    this.count++;
    console.log(this.collection);
  }
  confirmCollection(username:String,title:String,desc:String,_public:String,_imageList:String[]){ //Function that calls my api to store the collection in the database
    var isPublic:Boolean;
    if(_public=="y"||_public=="Y"){ //Checks the input for visibility setting, private by default
      isPublic=true;
    }
    else {isPublic=false;}
    this.collectionService.createCollection(username,title,desc,isPublic,_imageList);
    this.collection=[];
  }
 

}