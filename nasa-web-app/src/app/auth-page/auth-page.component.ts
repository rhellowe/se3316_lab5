import { Component, OnInit } from '@angular/core';
import {ImageService} from "../image.service"

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
  constructor(private _imageService:ImageService) {this.count=0;}

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
    //this.collection[this.count]=link.href;
    //this.count++;
    console.log(link.href);
  }
  confirmCollection(username:String,title:String,desc:String,_public:Boolean,_imageList:String[]){
    
  }

}