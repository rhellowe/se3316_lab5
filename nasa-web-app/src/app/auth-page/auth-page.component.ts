import { Component, OnInit } from '@angular/core';
import {ImageService} from "../image.service"

@Component({
  selector: 'auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.css']
})
export class AuthPageComponent implements OnInit {
 images: any[];
 imagesFound: boolean=false;
  constructor(private _imageService:ImageService) { }

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

}