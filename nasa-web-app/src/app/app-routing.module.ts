import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
import { NotLoggedPageComponent }   from "./not-logged-page/not-logged-page.component";
import { AuthPageComponent }      from "./auth-page/auth-page.component";
import {ViewCollectionsComponent} from "./view-collections/view-collections.component";
import {MycollectionsComponent} from "./mycollections/mycollections.component";
import {DmcaPolicyComponent} from "./dmca-policy/dmca-policy.component";
import {PrivacyPolicyComponent} from "./privacy-policy/privacy-policy.component";
const routes: Routes = [
 {path: "logged", component: AuthPageComponent},
 {path: "", component: NotLoggedPageComponent},
 {path: "viewCollections", component: ViewCollectionsComponent },
 {path: "myCollections", component: MycollectionsComponent},
 {path: "dmcapolicy", component:DmcaPolicyComponent},
 {path: "privacypolicy",component:PrivacyPolicyComponent}
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
