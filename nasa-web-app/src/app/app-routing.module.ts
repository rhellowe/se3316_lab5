import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
import { NotLoggedPageComponent }   from "./not-logged-page/not-logged-page.component";
import { AuthPageComponent }      from "./auth-page/auth-page.component";
import {ViewCollectionsComponent} from "./view-collections/view-collections.component";
import {MycollectionsComponent} from "./mycollections/mycollections.component";
import {DmcaPolicyComponent} from "./dmca-policy/dmca-policy.component";
import {PrivacyPolicyComponent} from "./privacy-policy/privacy-policy.component";
import {AuthGuard} from "./auth.guard";
import {VerifyEmailComponent} from "./verify-email/verify-email.component";
import {PolicyEditComponent} from "./policy-edit/policy-edit.component";

const routes: Routes = [
 {path: "logged", component: AuthPageComponent, canActivate: [AuthGuard]},
 {path: "", component: NotLoggedPageComponent},
 {path: "viewCollections", component: ViewCollectionsComponent },
 {path: "myCollections", component: MycollectionsComponent, canActivate: [AuthGuard]},
 {path: "dmcapolicy", component:DmcaPolicyComponent},
 {path: "privacypolicy",component:PrivacyPolicyComponent},
 {path: "editPolicies",component:PolicyEditComponent},
 {path: "?returnUrl=%2Flogged",component: VerifyEmailComponent}
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
