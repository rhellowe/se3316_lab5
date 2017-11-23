import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable()
export class CollectionService {
private col_API_URL="https://se3316-lab5-rhellowe.c9users.io/api";
private col_URL="collections";
  constructor(private _http:HttpClient) { }

}
