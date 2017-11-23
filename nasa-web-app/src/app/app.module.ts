import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule,ReactiveFormsModule} from "@angular/forms";
import {RouterModule,Routes} from "@angular/router";


import { AppComponent } from './app.component';
import { MyHeaderComponent } from './my-header/my-header.component';
import { NotLoggedPageComponent } from './not-logged-page/not-logged-page.component';
import {AuthService} from "./auth.service";
import {ImageService} from "./image.service";
import { AuthPageComponent } from './auth-page/auth-page.component';
import { AppRoutingModule } from './/app-routing.module';
import { ViewCollectionsComponent } from './view-collections/view-collections.component';


@NgModule({
  declarations: [
    AppComponent,
    MyHeaderComponent,
    NotLoggedPageComponent,
    AuthPageComponent,
    ViewCollectionsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [AuthService,ImageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
