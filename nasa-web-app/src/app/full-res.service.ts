import { Injectable } from '@angular/core';

@Injectable()
export class FullResService {

link:any;
  constructor() { }
  
  putLink(resLink:String){
      this.link=resLink;
  }
  getLink(){
      return this.link;
  }

}