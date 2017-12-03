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
import { DmcaFooterComponent } from './dmca-footer/dmca-footer.component';
import { DmcaPolicyComponent } from './dmca-policy/dmca-policy.component';
import {AuthGuard} from "./auth.guard";
import {PrivacyPolicyComponent} from "./privacy-policy/privacy-policy.component";
import { VerifyEmailComponent } from './verify-email/verify-email.component';
import {ReportService} from "./report.service";
import { PolicyEditComponent } from './policy-edit/policy-edit.component';



@NgModule({
  declarations: [
    AppComponent,
    MyHeaderComponent,
    NotLoggedPageComponent,
    AuthPageComponent,
    ViewCollectionsComponent,
    MycollectionsComponent,
    DmcaFooterComponent,
    DmcaPolicyComponent,
    PrivacyPolicyComponent,
    VerifyEmailComponent,
    PolicyEditComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [AuthService,ImageService,CollectionService,AuthGuard,ReportService],
  bootstrap: [AppComponent]
})
export class AppModule { }
