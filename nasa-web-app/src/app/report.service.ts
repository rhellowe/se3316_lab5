import { Injectable } from '@angular/core';

@Injectable()
export class ReportService {
reportedCollections:any[];
disabledCollections:any[];
  constructor() {this.reportedCollections=[];
  this.disabledCollections=[];}
  
  submit(){
      this.disabledCollections.push(this.reportedCollections.pop());
  }
  addReportedCollection(id:String){
      this.reportedCollections.push(id);
  }
  
  

}
