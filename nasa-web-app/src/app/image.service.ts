import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import "rxjs/add/operator/map";

@Injectable()
export class ImageService {
private API_URL= "https://images-api.nasa.gov/";
private URL= this.API_URL+"search?q=";

  constructor(private _http:HttpClient) { }

getImage(query){
    return this._http.get(this.URL+query);
}
}
