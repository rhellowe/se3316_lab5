import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule,ReactiveFormsModule} from "@angular/forms";


import { AppComponent } from './app.component';
import { MyHeaderComponent } from './my-header/my-header.component';
import { NotLoggedPageComponent } from './not-logged-page/not-logged-page.component';
import {AuthService} from "./auth.service";
import {ImageService} from "./image.service";
import { AuthPageComponent } from './auth-page/auth-page.component';


@NgModule({
  declarations: [
    AppComponent,
    MyHeaderComponent,
    NotLoggedPageComponent,
    AuthPageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [AuthService,ImageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
