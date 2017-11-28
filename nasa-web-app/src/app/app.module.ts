import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule,ReactiveFormsModule} from "@angular/forms";
import {RouterModule,Routes,Router} from "@angular/router";

import { AppComponent } from './app.component';
import { MyHeaderComponent } from './my-header/my-header.component';
import { NotLoggedPageComponent } from './not-logged-page/not-logged-page.component';
import {AuthService} from "./auth.service";
import {ImageService} from "./image.service";
import { AuthPageComponent } from './auth-page/auth-page.component';
import { AppRoutingModule } from './/app-routing.module';
import { ViewCollectionsComponent } from './view-collections/view-collections.component';
import {CollectionService} from "./collection.service";
import { MycollectionsComponent } from './mycollections/mycollections.component';




@NgModule({
  declarations: [
    AppComponent,
    MyHeaderComponent,
    NotLoggedPageComponent,
    AuthPageComponent,
    ViewCollectionsComponent,
    MycollectionsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [AuthService,ImageService,CollectionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
